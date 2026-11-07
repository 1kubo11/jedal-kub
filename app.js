/* Jedálniček z fitness receptov – logika aplikácie */
(function () {
  "use strict";
  const R = window.RECEPTY, BOOKS = window.BOOKS, KAT = window.KATEGORIE, STITKY = window.STITKY;
  const SU = window.SUROVINY;
  const byId = {}; R.forEach(r => byId[r.id] = r);
  const DNI = ["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"];
  const SLOT_NAZOV = { ranajky: "Raňajky", obed: "Obed", desiata: "Desiata", vecera: "Večera" };

  /* ———————————————————— ukladanie ———————————————————— */
  const KEY = "jedalnicek.v1";
  const DEFAULT = {
    nastavenia: {
      vek: 32, vyska: 180, vaha: 85, aktivita: 1.725, deficit: 20,
      bielkovinyNaKg: 2.2, tukyNaKg: 0.8,
      rucne: false, rKcal: 2200, rBielk: 190, rSach: 190, rTuky: 70,
      jedlaDenne: 4, pocetObedov: 2, tema: "auto"
    },
    oblubene: [], zakazane: [], plan: null, nakup: [], nakupNedela: []
  };
  let S = load();
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT));
      const p = JSON.parse(raw);
      return {
        nastavenia: Object.assign({}, DEFAULT.nastavenia, p.nastavenia || {}),
        oblubene: p.oblubene || [], zakazane: p.zakazane || [],
        plan: p.plan || null, nakup: p.nakup || [], nakupNedela: p.nakupNedela || []
      };
    } catch (e) { return JSON.parse(JSON.stringify(DEFAULT)); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast("Nepodarilo sa uložiť 😕"); } }

  /* ———————————————————— ciele ———————————————————— */
  function ciele() {
    const n = S.nastavenia;
    if (n.rucne) return { kcal: +n.rKcal, bielk: +n.rBielk, sach: +n.rSach, tuky: +n.rTuky, rucne: true };
    const bmr = 10 * n.vaha + 6.25 * n.vyska - 5 * n.vek + 5;       // Mifflin-St Jeor, muž
    const tdee = bmr * n.aktivita;
    const kcal = Math.round((tdee * (1 - n.deficit / 100)) / 10) * 10;
    const bielk = Math.round(n.vaha * n.bielkovinyNaKg);
    const tuky = Math.round(n.vaha * n.tukyNaKg);
    const sach = Math.max(40, Math.round((kcal - bielk * 4 - tuky * 9) / 4));
    return { kcal, bielk, sach, tuky, bmr: Math.round(bmr), tdee: Math.round(tdee), rucne: false };
  }
  function podiely() {
    return S.nastavenia.jedlaDenne === 3
      ? { ranajky: .30, obed: .37, vecera: .33 }
      : { ranajky: .26, obed: .32, desiata: .10, vecera: .32 };
  }
  function slotyDna() { return S.nastavenia.jedlaDenne === 3 ? ["ranajky", "obed", "vecera"] : ["ranajky", "obed", "desiata", "vecera"]; }

  /* ———————————————————— filtre a zakázané suroviny ———————————————————— */
  function jeDovoleny(r) {
    if (!S.zakazane.length) return true;
    const text = (r.ing.join(" | ") + " | " + r.n).toLowerCase();
    return !S.zakazane.some(z => text.includes(z.toLowerCase()));
  }
  const JE_OBL = id => S.oblubene.includes(id);

  function pool(kind) {
    let f;
    if (kind === "ranajky") f = r => r.c === "ranajky";
    else if (kind === "hlavne") f = r => r.c === "obed" || r.c === "vecera";
    else if (kind === "mealprep") f = r => (r.c === "obed" || r.c === "vecera") && r.t.includes("mealprep") && r.t.includes("mikrovlnka");
    else if (kind === "desiata") f = r => r.c === "desiata" || r.c === "dezert";
    else f = () => true;
    return R.filter(r => f(r) && jeDovoleny(r));
  }

  /* ———————————————————— generátor ———————————————————— */
  const FAKTORY = (() => { const a = []; for (let f = 0.5; f <= 2.001; f += 0.1) a.push(Math.round(f * 10) / 10); return a; })();
  const FAKTORY_HRUBE = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const rnd = a => a[Math.floor(Math.random() * a.length)];

  // najlepší počet porcií receptu pre daný kalorický cieľ
  function najlepsiFaktor(r, cielKcal, grid) {
    let bf = 1, bc = Infinity;
    for (const f of grid) {
      const e = Math.abs(r.k * f - cielKcal) / Math.max(cielKcal, 1);
      if (e < bc) { bc = e; bf = f; }
    }
    return { f: bf, e: bc };
  }

  // vyberie recept podľa toho, ako presne sa dá trafiť cieľ (nie len podľa kcal na porciu)
  function vyberRecept(p, cielKcal, pouzite, grid) {
    if (!p.length) return null;
    grid = grid || FAKTORY;
    const sc = p.map(r => {
      const b = najlepsiFaktor(r, cielKcal, grid);
      let s = b.e + (pouzite[r.id] || 0) * 0.6;
      if (JE_OBL(r.id)) s -= 0.25;
      return { r, f: b.f, s };
    }).sort((a, b) => a.s - b.s);
    const top = sc.slice(0, Math.min(14, sc.length));
    const w = top.map((_, i) => 1 / (i + 1.6));
    let x = Math.random() * w.reduce((a, b) => a + b, 0);
    for (let i = 0; i < top.length; i++) { x -= w[i]; if (x <= 0) return top[i]; }
    return top[0];
  }

  function cenaDna(meals, c) {
    const pd = podiely();
    let k = 0, p = 0, nevyv = 0;
    meals.forEach(m => {
      const r = byId[m.id], mk = r.k * m.p;
      k += mk; p += r.pr * m.p;
      const cielSlot = c.kcal * pd[m.slot];
      nevyv += Math.abs(mk - cielSlot) / cielSlot;   // aby nevyšli 1100 kcal raňajky
    });
    nevyv /= meals.length;
    const ek = (k - c.kcal) / c.kcal, ep = (p - c.bielk) / c.bielk;
    // max() drží v tolerancii OBE veličiny, nielen tú, ktorá sa trafí ľahšie
    const cena = Math.max(Math.abs(ek), Math.abs(ep)) + 0.1 * (Math.abs(ek) + Math.abs(ep)) + 0.3 * nevyv;
    return { cena, ek, ep, k, p, nevyv };
  }

  // v tolerancii je vždy lepšie; medzi rovnocennými rozhoduje vyváženosť
  const vTolerancii = v => Math.abs(v.ek) <= 0.05 && Math.abs(v.ep) <= 0.05;
  function lepsie(a, b) {
    if (!b) return true;
    const ta = vTolerancii(a.v), tb = vTolerancii(b.v);
    if (ta !== tb) return ta;
    return a.v.cena < b.v.cena;
  }

  // doladí porcie slotov (fixované nechá) aby deň trafil cieľ
  function doladPorcie(meals, c, fixIdx) {
    const volne = meals.map((_, i) => i).filter(i => !fixIdx.includes(i));
    if (!volne.length) return { meals, v: cenaDna(meals, c) };
    const grid = volne.length >= 4 ? FAKTORY_HRUBE : FAKTORY;
    let best = null;
    const rek = (i, cur) => {
      if (i === volne.length) {
        const kand = { meals: cur, v: cenaDna(cur, c) };
        if (lepsie(kand, best)) best = { meals: cur.map(m => ({ ...m })), v: kand.v };
        return;
      }
      for (const f of grid) { cur[volne[i]].p = f; rek(i + 1, cur); }
    };
    rek(0, meals.map(m => ({ ...m })));
    return best;
  }

  function generujDen(c, pouzite, fixObed) {
    const sloty = slotyDna(), pd = podiely();
    const grid = (sloty.length - (fixObed ? 1 : 0)) >= 4 ? FAKTORY_HRUBE : FAKTORY;
    let best = null;
    for (let pokus = 0; pokus < 80; pokus++) {
      const meals = [], fixIdx = [];
      // zostatok kalórií po fixovanom obede sa rozdelí medzi zvyšné jedlá
      const k0 = fixObed ? byId[fixObed.id].k * fixObed.p : 0;
      const volneSloty = sloty.filter(s => !(s === "obed" && fixObed));
      const podielSuma = volneSloty.reduce((a, s) => a + pd[s], 0);
      const zostatok = Math.max(250, c.kcal - k0);
      let chyba = false;
      sloty.forEach((slot, i) => {
        if (slot === "obed" && fixObed) { meals.push({ slot, id: fixObed.id, p: fixObed.p, batch: fixObed.batch }); fixIdx.push(i); return; }
        const kind = slot === "ranajky" ? "ranajky" : slot === "desiata" ? "desiata" : "hlavne";
        const sel = vyberRecept(pool(kind), zostatok * (pd[slot] / podielSuma), pouzite, grid);
        if (!sel) { chyba = true; return; }
        meals.push({ slot, id: sel.r.id, p: sel.f });
      });
      if (chyba || meals.length !== sloty.length) return null;
      const res = doladPorcie(meals, c, fixIdx);
      if (lepsie(res, best)) best = res;
      if (vTolerancii(best.v) && best.v.nevyv <= 0.28) break;
    }
    return best;
  }

  function generuj(mode) {
    const c = ciele(), pouzite = {};
    const dni = [];
    if (mode === "den") {
      const d = generujDen(c, pouzite, null);
      if (!d) { toast("Po vylúčení surovín nezostalo dosť receptov."); return; }
      dni.push({ nazov: "Dnes", meals: d.meals });
    } else {
      // 1) obedy pondelok–piatok: 1–2 recepty vhodné na meal prep + mikrovlnku
      const mp = pool("mealprep");
      if (!mp.length) { toast("Žiadne recepty na meal prep po vylúčení surovín."); return; }
      const kolko = Math.min(S.nastavenia.pocetObedov, 2);
      const cielObed = c.kcal * podiely().obed;
      const batch = [];
      for (let i = 0; i < kolko; i++) {
        // porcia obeda sa volí raz a platí pre celú navarenú dávku
        const sel = vyberRecept(mp.filter(x => !batch.some(b => b.id === x.id)), cielObed, pouzite, FAKTORY);
        if (!sel) break;
        batch.push({ id: sel.r.id, p: sel.f, batch: "B" + (i + 1) });
        pouzite[sel.r.id] = (pouzite[sel.r.id] || 0) + 1;
      }
      if (!batch.length) { toast("Žiadne recepty na meal prep po vylúčení surovín."); return; }
      const rozvrh = batch.length === 1 ? [0, 0, 0, 0, 0] : [0, 0, 0, 1, 1];
      for (let d = 0; d < 7; d++) {
        const fix = d < 5 ? batch[rozvrh[d]] || batch[0] : null;
        const res = generujDen(c, pouzite, fix);
        if (!res) { toast("Po vylúčení surovín nezostalo dosť receptov."); return; }
        res.meals.forEach(m => { if (!m.batch) pouzite[m.id] = (pouzite[m.id] || 0) + 1; });
        dni.push({ nazov: DNI[d], meals: res.meals });
      }
    }
    S.plan = { mode, dni, vytvorene: Date.now() };
    S.nakup = []; S.nakupNedela = [];
    save();
    toast(mode === "den" ? "Deň vygenerovaný" : "Týždeň vygenerovaný");
  }

  // znovu vyberie jedlá v nefixovaných slotoch, kým deň nesedí na cieľ
  function opravDen(di, fixSloty) {
    const c = ciele(), pd = podiely(), d = S.plan.dni[di];
    const fixIdx = d.meals.map((x, j) => (x.batch || fixSloty.includes(j)) ? j : -1).filter(j => j >= 0);
    let best = doladPorcie(d.meals.map(m => ({ ...m })), c, fixIdx);
    if (vTolerancii(best.v)) { d.meals = best.meals; return; }
    const pouzite = {};
    d.meals.forEach(m => pouzite[m.id] = 1);
    for (let pokus = 0; pokus < 60; pokus++) {
      const k0 = fixIdx.reduce((a, j) => a + byId[d.meals[j].id].k * d.meals[j].p, 0);
      const volneSloty = d.meals.filter((_, j) => !fixIdx.includes(j));
      const podielSuma = volneSloty.reduce((a, m) => a + pd[m.slot], 0) || 1;
      const zostatok = Math.max(250, c.kcal - k0);
      const kand = d.meals.map((m, j) => {
        if (fixIdx.includes(j)) return { ...m };
        const kind = m.slot === "ranajky" ? "ranajky" : m.slot === "desiata" ? "desiata" : "hlavne";
        const sel = vyberRecept(pool(kind), zostatok * (pd[m.slot] / podielSuma), pouzite, FAKTORY);
        return sel ? { slot: m.slot, id: sel.r.id, p: sel.f } : { ...m };
      });
      const res = doladPorcie(kand, c, fixIdx);
      if (lepsie(res, best)) best = res;
      if (vTolerancii(best.v) && best.v.nevyv <= 0.3) break;
    }
    d.meals = best.meals;
  }

  function vymen(di, mi) {
    const den = S.plan.dni[di], m = den.meals[mi], stary = byId[m.id];
    // obed na pracovný deň musí zostať vhodný na krabičku do mikrovlnky
    const kind = m.batch ? "mealprep"
      : m.slot === "ranajky" ? "ranajky"
      : m.slot === "desiata" ? "desiata" : "hlavne";
    const cielK = stary.k * m.p;
    let kand = pool(kind).filter(r => r.id !== m.id && Math.abs(r.k * m.p - cielK) / cielK <= 0.22);
    if (!kand.length) kand = pool(kind).filter(r => r.id !== m.id);
    if (!kand.length) { toast("Nie je za čo vymeniť."); return; }
    kand.sort((a, b) => (JE_OBL(b.id) - JE_OBL(a.id)) || (Math.abs(a.k * m.p - cielK) - Math.abs(b.k * m.p - cielK)));
    const novy = rnd(kand.slice(0, Math.min(10, kand.length)));
    const c = ciele();
    let dotknute = [di];
    if (m.batch) {
      // obed uvarený vo väčšom – vymeň ho vo všetkých dňoch dávky a nájdi novú veľkosť porcie
      const novaP = najlepsiFaktor(novy, c.kcal * podiely().obed, FAKTORY).f;
      dotknute = [];
      S.plan.dni.forEach((d, i) => d.meals.forEach(x => {
        if (x.batch === m.batch) { x.id = novy.id; x.p = novaP; dotknute.push(i); }
      }));
      toast("Vymenené v " + dotknute.length + " dňoch: " + novy.n);
    } else {
      m.id = novy.id;
      toast(novy.n);
    }
    // dolaď dni, aby opäť sedeli na cieľ (vymenené jedlo zostáva)
    dotknute.forEach(i => opravDen(i, i === di && !m.batch ? [mi] : []));
    S.nakup = []; S.nakupNedela = [];
    save(); render();
  }

  /* ———————————————————— pomocné ———————————————————— */
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.innerHTML = h; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  let toastT;
  function toast(msg) {
    const c = document.getElementById("toast");
    c.innerHTML = '<div class="toast">' + esc(msg) + "</div>";
    clearTimeout(toastT); toastT = setTimeout(() => c.innerHTML = "", 2300);
  }
  function sumaDna(meals) {
    let k = 0, p = 0, s = 0, f = 0;
    meals.forEach(m => { const r = byId[m.id]; k += r.k * m.p; p += r.pr * m.p; s += r.ca * m.p; f += r.f * m.p; });
    return { k: Math.round(k), p: Math.round(p), s: Math.round(s), f: Math.round(f) };
  }
  function porciaText(p) { return p === 1 ? "1 porcia" : SU.fmtCislo(p) + (p < 1 ? " porcie" : " porcie"); }
  function stitky(r) {
    const out = [];
    if (r.t.includes("pikantne")) out.push('<span class="tag hot">pikantné</span>');
    if (r.t.includes("mealprep") && r.t.includes("mikrovlnka")) out.push('<span class="tag mp">meal prep</span>');
    else if (r.t.includes("studene")) out.push('<span class="tag">studené</span>');
    if (r.t.includes("rychle")) out.push('<span class="tag fast">do 20 min</span>');
    if (r.t.includes("bezmasa")) out.push('<span class="tag">bez mäsa</span>');
    return out.join(" ");
  }

  /* ———————————————————— KARTA: Jedálniček ———————————————————— */
  function viewPlan() {
    const w = el("div", "wrap"), c = ciele();
    const hl = el("div", "card");
    hl.innerHTML =
      '<div class="card-t">Vygenerovať jedálniček</div>' +
      '<div class="btn-row"><button class="btn pri" style="flex:1" id="g1">📅 Na 1 deň</button>' +
      '<button class="btn pri" style="flex:1" id="g7">🗓️ Na celý týždeň</button></div>' +
      '<div class="muted" style="margin-top:10px">Cieľ: <b>' + c.kcal + ' kcal</b> · <b>' + c.bielk + ' g</b> bielkovín · tolerancia ±5 %. ' +
      'Obedy pondelok–piatok sa vyberajú len z receptov na meal prep do mikrovlnky (' + S.nastavenia.pocetObedov + ' ' + (S.nastavenia.pocetObedov === 1 ? "recept" : "recepty") + ' navarené vo väčšom).</div>';
    w.appendChild(hl);
    hl.querySelector("#g1").onclick = () => { generuj("den"); render(); };
    hl.querySelector("#g7").onclick = () => { generuj("tyzden"); render(); };

    if (!S.plan) {
      w.appendChild(el("div", "empty", '<div class="big">🍳</div><b>Ešte nemáš jedálniček</b><div class="muted" style="margin-top:6px">Ťukni na jedno z tlačidiel vyššie.</div>'));
      return w;
    }

    S.plan.dni.forEach((den, di) => {
      const sm = sumaDna(den.meals);
      const d = el("div", "day");
      d.appendChild(el("div", "day-h",
        '<span class="dn">' + den.nazov + "</span>" +
        '<span class="dk">' + sm.k + " kcal · " + sm.p + " g B</span>"));
      den.meals.forEach((m, mi) => {
        const r = byId[m.id];
        const row = el("div", "meal");
        row.innerHTML =
          '<div class="slot">' + SLOT_NAZOV[m.slot] + "</div>" +
          '<div class="mi"><div class="mn">' + esc(r.n) + (m.batch ? ' <span class="badge-batch">krabička</span>' : "") + "</div>" +
          '<div class="mm">' + Math.round(r.k * m.p) + " kcal · " + Math.round(r.pr * m.p) + " g B · " + porciaText(m.p) + "</div></div>" +
          '<div class="acts"><button class="icon-btn" title="Vymeniť">⇄</button></div>';
        row.querySelector(".mi").onclick = () => detail(r.id, m.p);
        row.querySelector("button").onclick = e => { e.stopPropagation(); vymen(di, mi); };
        d.appendChild(row);
      });
      const f = el("div", "day-f");
      f.appendChild(barRow("Kalórie", sm.k, c.kcal, "kcal"));
      f.appendChild(barRow("Bielkoviny", sm.p, c.bielk, "g"));
      f.appendChild(el("div", "muted", "<div style='margin-top:9px'>Sacharidy " + sm.s + " g (cieľ " + c.sach + ") · Tuky " + sm.f + " g (cieľ " + c.tuky + ")</div>"));
      d.appendChild(f);
      w.appendChild(d);
    });
    return w;
  }

  function barRow(lb, val, cil, unit) {
    const pct = Math.min(130, Math.round((val / cil) * 100));
    const odch = Math.abs(val - cil) / cil;
    const cls = odch <= 0.05 ? "" : odch <= 0.12 ? " w" : " b";
    const row = el("div", "barrow");
    row.innerHTML = '<div class="lb">' + lb + '</div><div class="bw"><div class="bar' + cls + '"><i style="width:' + Math.min(100, pct) + '%"></i></div></div>' +
      '<div class="vl">' + val + " / " + cil + " " + unit + "</div>";
    return row;
  }

  /* ———————————————————— KARTA: Recepty ———————————————————— */
  const F = { q: "", kat: "", kcalMin: "", kcalMax: "", bielkMin: "", stitky: [], book: "", lenObl: false, open: false };
  const pocetFiltrov = () => (F.kat ? 1 : 0) + (F.book ? 1 : 0) + (F.kcalMin ? 1 : 0) + (F.kcalMax ? 1 : 0) +
    (F.bielkMin ? 1 : 0) + F.stitky.length + (F.lenObl ? 1 : 0);
  function filtruj() {
    const q = F.q.trim().toLowerCase();
    return R.filter(r => {
      if (F.lenObl && !JE_OBL(r.id)) return false;
      if (F.kat && r.c !== F.kat) return false;
      if (F.book && r.b !== F.book) return false;
      if (F.kcalMin && r.k < +F.kcalMin) return false;
      if (F.kcalMax && r.k > +F.kcalMax) return false;
      if (F.bielkMin && r.pr < +F.bielkMin) return false;
      if (F.stitky.length && !F.stitky.every(t => r.t.includes(t))) return false;
      if (!jeDovoleny(r)) return false;
      if (q && !(r.n.toLowerCase().includes(q) || r.ing.join(" ").toLowerCase().includes(q))) return false;
      return true;
    });
  }

  function viewRec() {
    const w = el("div", "wrap");
    const nf = pocetFiltrov();
    const f = el("div", "card");
    f.innerHTML =
      '<input class="inp" id="q" placeholder="🔍 Hľadaj recept alebo surovinu…" value="' + esc(F.q) + '">' +
      '<div class="btn-row" style="margin-top:10px">' +
      '<button class="btn sm' + (nf ? " pri" : "") + '" id="tgl" style="flex:1">' +
      (F.open ? "▲ Skryť filtre" : "▼ Filtre") + (nf ? " (" + nf + ")" : "") + "</button>" +
      (nf ? '<button class="btn sm ghost" id="clr2">Zrušiť</button>' : "") + "</div>" +
      '<div id="fbody" class="' + (F.open ? "" : "hide") + '">' +
      '<div class="chips" style="margin-top:11px" id="chKat"></div>' +
      '<div class="chips" style="margin-top:9px" id="chSt"></div>' +
      '<div class="grid3" style="margin-top:11px">' +
      '<label class="field"><span>kcal od</span><input class="inp" id="kmin" type="number" inputmode="numeric" value="' + F.kcalMin + '"></label>' +
      '<label class="field"><span>kcal do</span><input class="inp" id="kmax" type="number" inputmode="numeric" value="' + F.kcalMax + '"></label>' +
      '<label class="field"><span>bielk. min</span><input class="inp" id="bmin" type="number" inputmode="numeric" value="' + F.bielkMin + '"></label>' +
      "</div>" +
      '<label class="field" style="margin-top:10px"><span>Ebook</span><select class="inp" id="bk"></select></label>' +
      '<div class="btn-row" style="margin-top:11px">' +
      '<button class="btn sm' + (F.lenObl ? " pri" : "") + '" id="obl">❤️ Len obľúbené</button>' +
      '<button class="btn sm ghost" id="clr">Zrušiť filtre</button></div></div>';
    w.appendChild(f);
    f.querySelector("#tgl").onclick = () => { F.open = !F.open; render(); };
    if (f.querySelector("#clr2")) f.querySelector("#clr2").onclick = () => {
      Object.assign(F, { kat: "", kcalMin: "", kcalMax: "", bielkMin: "", stitky: [], book: "", lenObl: false }); render();
    };

    const chKat = f.querySelector("#chKat");
    chKat.appendChild(chip("Všetko", !F.kat, () => { F.kat = ""; render(); }));
    Object.keys(KAT).forEach(k => chKat.appendChild(chip(KAT[k], F.kat === k, () => { F.kat = F.kat === k ? "" : k; render(); })));
    const chSt = f.querySelector("#chSt");
    Object.keys(STITKY).forEach(k => chSt.appendChild(chip(STITKY[k], F.stitky.includes(k), () => {
      F.stitky = F.stitky.includes(k) ? F.stitky.filter(x => x !== k) : F.stitky.concat(k); render();
    })));
    const bk = f.querySelector("#bk");
    bk.innerHTML = '<option value="">Všetky ebooky</option>' + Object.keys(BOOKS).map(b =>
      '<option value="' + b + '"' + (F.book === b ? " selected" : "") + ">" + esc(BOOKS[b].kratko) + "</option>").join("");
    bk.onchange = () => { F.book = bk.value; render(); };
    const q = f.querySelector("#q");
    q.oninput = () => { F.q = q.value; renderList(); };
    ["kmin", "kmax", "bmin"].forEach((id, i) => {
      const e = f.querySelector("#" + id);
      e.oninput = () => { F[["kcalMin", "kcalMax", "bielkMin"][i]] = e.value; renderList(); };
    });
    f.querySelector("#obl").onclick = () => { F.lenObl = !F.lenObl; render(); };
    f.querySelector("#clr").onclick = () => { Object.assign(F, { q: "", kat: "", kcalMin: "", kcalMax: "", bielkMin: "", stitky: [], book: "", lenObl: false }); render(); };

    const cnt = el("div", "muted"); w.appendChild(cnt);
    const list = el("div", "rlist"); w.appendChild(list);
    function renderList() {
      const res = filtruj();
      cnt.textContent = res.length + " " + (res.length === 1 ? "recept" : res.length < 5 ? "recepty" : "receptov") +
        (S.zakazane.length ? " (zakázané suroviny sú odfiltrované)" : "");
      list.innerHTML = "";
      if (!res.length) { list.appendChild(el("div", "empty", '<div class="big">🤷</div>Nič nesedí. Uvoľni filtre.')); return; }
      res.slice(0, 400).forEach(r => list.appendChild(recItem(r)));
      if (res.length > 400) list.appendChild(el("div", "muted", "Zobrazených prvých 400 – zúž hľadanie."));
    }
    renderList();
    return w;
  }

  function chip(text, on, fn) { const b = el("button", "chip" + (on ? " on" : ""), esc(text)); b.onclick = fn; return b; }

  function recItem(r) {
    const d = el("div", "ritem");
    d.innerHTML =
      '<div class="body"><div class="nm">' + esc(r.n) + "</div>" +
      '<div class="macros"><span><b>' + r.k + "</b> kcal</span><span><b>" + r.pr + "</b> g B</span>" +
      "<span>" + r.ca + " g S</span><span>" + r.f + " g T</span></div>" +
      '<div class="mt">' + KAT[r.c] + " · " + r.tm + " min · " + BOOKS[r.b].kratko + ", s. " + r.p + "</div>" +
      '<div class="tgs">' + stitky(r) + "</div></div>" +
      '<button class="heart' + (JE_OBL(r.id) ? " on" : "") + '">❤️</button>';
    d.querySelector(".body").onclick = () => detail(r.id, 1);
    d.querySelector(".heart").onclick = e => {
      e.stopPropagation();
      S.oblubene = JE_OBL(r.id) ? S.oblubene.filter(x => x !== r.id) : S.oblubene.concat(r.id);
      save(); e.currentTarget.classList.toggle("on", JE_OBL(r.id));
      toast(JE_OBL(r.id) ? "Pridané k obľúbeným" : "Odobrané z obľúbených");
    };
    return d;
  }

  /* ———————————————————— detail receptu ———————————————————— */
  let wakeLock = null;
  async function wake(on) {
    try {
      if (on && "wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen");
      else if (wakeLock) { wakeLock.release(); wakeLock = null; }
    } catch (e) { /* nedostupné – nič sa nedeje */ }
  }
  function detail(id, porcie) {
    const r = byId[id];
    let p = porcie || r.s, cook = false;   // z receptára: recept tak, ako je napísaný
    const host = document.getElementById("sheet");
    const sh = el("div", "sheet");
    host.innerHTML = ""; host.appendChild(sh);
    document.body.style.overflow = "hidden";
    function close() { host.innerHTML = ""; document.body.style.overflow = ""; wake(false); }

    function draw() {
      sh.className = "sheet" + (cook ? " cook" : "");
      const koef = p / r.s;
      sh.innerHTML =
        '<div class="sheet-hdr"><button class="icon-btn" id="x">✕</button>' +
        '<div class="ttl">' + esc(r.n) + "</div>" +
        '<button class="icon-btn" id="h">' + (JE_OBL(r.id) ? "❤️" : "🤍") + "</button>" +
        '<button class="icon-btn" id="ck" title="Režim varenia">' + (cook ? "🔎" : "🍳") + "</button></div>" +
        '<div class="sheet-body">' +
        '<div><div class="rtitle">' + esc(r.n) + "</div>" +
        '<div class="rsrc">' + KAT[r.c] + " · " + r.tm + " min · " + BOOKS[r.b].nazov + ", strana " + r.p + "</div>" +
        '<div class="tgs" style="margin-top:9px;display:flex;gap:5px;flex-wrap:wrap">' + stitky(r) + "</div></div>" +
        (r.pozn ? '<div class="pozn">⚠︎ ' + esc(r.pozn) + "</div>" : "") +
        (r.odhad ? '<div class="pozn">Makrá sú odhad.</div>' : "") +
        '<div><div class="mgrid">' +
        mbox(Math.round(r.k * p), "kcal") + mbox(Math.round(r.pr * p * 10) / 10 + " g", "bielk.") +
        mbox(Math.round(r.ca * p * 10) / 10 + " g", "sach.") + mbox(Math.round(r.f * p * 10) / 10 + " g", "tuky") +
        '</div><div class="muted" style="margin-top:8px;text-align:center">' +
        (p === 1 ? "na 1 porciu" : "spolu za " + SU.fmtCislo(p) + " porcie · na 1 porciu " + r.k + " kcal, " + r.pr + " g bielkovín") +
        "</div></div>" +
        '<div class="card"><div class="card-t">Počet porcií</div><div class="porcie">' +
        '<button class="icon-btn" id="m">−</button><div class="n">' + SU.fmtCislo(p) + "</div>" +
        '<button class="icon-btn" id="pl">+</button>' +
        '<div class="muted" style="flex:1">recept je napísaný na ' + r.s + (r.s === 1 ? " porciu" : r.s < 5 ? " porcie" : " porcií") + "</div></div></div>" +
        '<div class="card"><div class="card-t">Suroviny' + (Math.abs(p - r.s) > 0.01 ? " (prepočítané na " + SU.fmtCislo(p) + ")" : "") + "</div><ul class=\"ings\">" +
        r.ing.map(i => "<li><span>" + esc(SU.surovinaText(i, koef)) + "</span></li>").join("") + "</ul></div>" +
        '<div class="card"><div class="card-t">Postup</div>' +
        r.st.map((s, i) => '<div class="step"><div class="no">' + (i + 1) + "</div><div>" + esc(s) + "</div></div>").join("") + "</div>" +
        (r.tip ? '<div class="tipbox"><b>💡 Krabičkový tip:</b> ' + esc(r.tip) + "</div>" : "") +
        '<button class="btn block ghost" id="x2">Zavrieť</button></div>';
      sh.querySelector("#x").onclick = close;
      sh.querySelector("#x2").onclick = close;
      sh.querySelector("#h").onclick = () => {
        S.oblubene = JE_OBL(r.id) ? S.oblubene.filter(x => x !== r.id) : S.oblubene.concat(r.id);
        save(); draw();
      };
      sh.querySelector("#ck").onclick = () => { cook = !cook; wake(cook); draw(); };
      sh.querySelector("#m").onclick = () => { p = Math.max(0.5, Math.round((p - 0.5) * 2) / 2); draw(); };
      sh.querySelector("#pl").onclick = () => { p = Math.min(20, p + 0.5); draw(); };
    }
    const mbox = (v, l) => '<div class="mbox"><div class="v">' + v + '</div><div class="l">' + l + "</div></div>";
    draw();
  }

  /* ———————————————————— KARTA: Nákup ———————————————————— */
  function zaznamy(lenBatch) {
    const out = [];
    if (!S.plan) return out;
    S.plan.dni.forEach(d => d.meals.forEach(m => {
      if (lenBatch && !m.batch) return;
      const r = byId[m.id];
      r.ing.forEach(i => out.push({ raw: i, koef: m.p / r.s, recept: r.n }));
    }));
    return out;
  }

  function viewBuy() {
    const w = el("div", "wrap");
    if (!S.plan) { w.appendChild(el("div", "empty", '<div class="big">🛒</div><b>Najprv si vygeneruj jedálniček</b><div class="muted" style="margin-top:6px">Nákupný zoznam sa z neho vytvorí sám.</div>')); return w; }

    let mode = viewBuy.mode || "all";
    const sw = el("div", "card tight");
    sw.innerHTML = '<div class="btn-row"><button class="btn sm" style="flex:1" id="a">Celý nákup</button><button class="btn sm" style="flex:1" id="b">🥡 Na nedeľné varenie</button></div>';
    w.appendChild(sw);
    const setMode = m => { viewBuy.mode = m; render(); };
    sw.querySelector("#a").classList.toggle("pri", mode === "all");
    sw.querySelector("#b").classList.toggle("pri", mode === "batch");
    sw.querySelector("#a").onclick = () => setMode("all");
    sw.querySelector("#b").onclick = () => setMode("batch");

    const z = zaznamy(mode === "batch");
    if (!z.length) {
      w.appendChild(el("div", "empty", '<div class="big">🥡</div>Tento jedálniček nemá obedy navarené dopredu.<div class="muted" style="margin-top:6px">Vygeneruj ho na celý týždeň.</div>'));
      return w;
    }
    const zoznam = SU.nakupnyZoznam(z);
    const checkKey = mode === "batch" ? "nakupNedela" : "nakup";
    const vsetky = Object.values(zoznam).reduce((a, b) => a + b.length, 0);
    const hotovo = Object.values(zoznam).flat().filter(p => S[checkKey].includes(p.id)).length;

    const info = el("div", "card tight");
    info.innerHTML = '<div class="barrow"><div class="lb">Odškrtnuté</div><div class="bw"><div class="bar"><i style="width:' +
      Math.round(hotovo / vsetky * 100) + '%"></i></div></div><div class="vl">' + hotovo + " / " + vsetky + "</div></div>" +
      '<div class="muted" style="margin-top:9px">' + (mode === "batch"
        ? "Len suroviny na obedy do krabičiek na pondelok–piatok."
        : "Spočítané z celého jedálnička, zoradené podľa oddelení v obchode.") + "</div>";
    w.appendChild(info);
    const bb = el("div", "btn-row");
    const clr = el("button", "btn sm ghost", "Zrušiť odškrtnutia");
    clr.onclick = () => { S[checkKey] = []; save(); render(); };
    bb.appendChild(clr);
    w.appendChild(bb);

    Object.keys(zoznam).sort((a, b) => SU.ODDELENIA[a].poradie - SU.ODDELENIA[b].poradie).forEach(k => {
      const odd = SU.ODDELENIA[k], items = zoznam[k];
      const c = el("div", "card");
      c.appendChild(el("div", "sec-h", '<span style="font-size:19px">' + odd.ikona + "</span><span>" + odd.nazov +
        '</span><span class="cnt">' + items.length + "</span>"));
      items.forEach(p => {
        const done = S[checkKey].includes(p.id);
        const b = el("button", "buy" + (done ? " done" : ""));
        b.innerHTML = '<div class="bx">' + (done ? "✓" : "") + '</div><div class="bt">' + esc(p.text) +
          (p.zdroje.length ? '<div class="src">' + esc(p.zdroje.slice(0, 2).join(", ")) + (p.zdroje.length > 2 ? " +" + (p.zdroje.length - 2) : "") + "</div>" : "") + "</div>";
        b.onclick = () => {
          S[checkKey] = done ? S[checkKey].filter(x => x !== p.id) : S[checkKey].concat(p.id);
          save(); render();
        };
        c.appendChild(b);
      });
      w.appendChild(c);
    });
    return w;
  }

  /* ———————————————————— KARTA: Nastavenia ———————————————————— */
  function viewSet() {
    const w = el("div", "wrap"), n = S.nastavenia, c = ciele();

    const cielHTML = () => {
      const x = ciele();
      return '<div class="card-t">Tvoj denný cieľ</div><div class="mgrid">' +
        '<div class="mbox"><div class="v">' + x.kcal + '</div><div class="l">kcal</div></div>' +
        '<div class="mbox"><div class="v">' + x.bielk + '</div><div class="l">bielk.</div></div>' +
        '<div class="mbox"><div class="v">' + x.sach + '</div><div class="l">sach.</div></div>' +
        '<div class="mbox"><div class="v">' + x.tuky + '</div><div class="l">tuky</div></div></div>' +
        (x.rucne ? '<div class="muted" style="margin-top:10px">Ciele sú nastavené ručne.</div>'
          : '<div class="muted" style="margin-top:10px">Bazálny metabolizmus ' + x.bmr + ' kcal, s aktivitou ' + x.tdee +
            ' kcal, mínus ' + n.deficit + ' % na chudnutie. Bielkoviny ' + SU.fmtCislo(n.bielkovinyNaKg) + ' g/kg.</div>');
    };
    const tgt = el("div", "card");
    tgt.innerHTML = cielHTML();
    w.appendChild(tgt);
    // prepočíta cieľ počas písania, bez prekreslenia celej karty (inak by políčko stratilo fokus)
    const obnovCiel = () => { tgt.innerHTML = cielHTML(); obnovHlavicku(); };
    // číselné políčko: zapisuje pri každom znaku, prázdne sa neuloží
    const naCislo = (e, kluc, min, max) => {
      e.oninput = () => {
        const v = parseFloat(String(e.value).replace(",", "."));
        if (isNaN(v) || v < min || v > max) return;
        n[kluc] = v; save(); obnovCiel();
      };
      e.onblur = () => { e.value = n[kluc]; };
    };

    const bio = el("div", "card");
    bio.innerHTML = '<div class="card-t">Moje údaje</div><div class="grid3">' +
      fld("Vek", "vek", n.vek, "číslo") + fld("Výška (cm)", "vyska", n.vyska) + fld("Váha (kg)", "vaha", n.vaha) +
      "</div>" +
      '<label class="field" style="margin-top:11px"><span>Aktivita</span><select class="inp" id="aktivita">' +
      [[1.375, "Ľahká – 1–3× týždenne"], [1.55, "Stredná – 3–5× týždenne"], [1.725, "Vysoká – 6–7× týždenne"], [1.9, "Veľmi vysoká – 2× denne"]]
        .map(([v, t]) => '<option value="' + v + '"' + (+n.aktivita === v ? " selected" : "") + ">" + t + "</option>").join("") +
      "</select></label>" +
      '<div class="grid2" style="margin-top:11px">' +
      fld("Kalorický deficit (%)", "deficit", n.deficit) + fld("Bielkoviny (g/kg)", "bielkovinyNaKg", n.bielkovinyNaKg) +
      "</div>";
    w.appendChild(bio);
    const ROZSAH = { vek: [14, 100], vyska: [120, 230], vaha: [35, 250], deficit: [0, 40], bielkovinyNaKg: [1, 4] };
    Object.keys(ROZSAH).forEach(k => naCislo(bio.querySelector("#" + k), k, ROZSAH[k][0], ROZSAH[k][1]));
    bio.querySelector("#aktivita").onchange = e => { n.aktivita = +e.target.value; save(); obnovCiel(); };

    const man = el("div", "card");
    man.innerHTML = '<div class="card-t">Ručné nastavenie cieľov</div>' +
      '<div class="srow"><div><div class="sl">Zadať ciele ručne</div><div class="sd">Prepíše automatický výpočet</div></div>' +
      '<button class="sw' + (n.rucne ? " on" : "") + '" id="tog"></button></div>' +
      '<div class="grid2 ' + (n.rucne ? "" : "hide") + '" style="margin-top:11px" id="mg">' +
      fld("kcal", "rKcal", n.rKcal) + fld("Bielkoviny (g)", "rBielk", n.rBielk) +
      fld("Sacharidy (g)", "rSach", n.rSach) + fld("Tuky (g)", "rTuky", n.rTuky) + "</div>";
    w.appendChild(man);
    man.querySelector("#tog").onclick = () => { n.rucne = !n.rucne; save(); render(); };
    const ROZSAH_R = { rKcal: [800, 6000], rBielk: [40, 400], rSach: [0, 800], rTuky: [10, 300] };
    Object.keys(ROZSAH_R).forEach(k => {
      const e = man.querySelector("#" + k); if (e) naCislo(e, k, ROZSAH_R[k][0], ROZSAH_R[k][1]);
    });

    const gen = el("div", "card");
    gen.innerHTML = '<div class="card-t">Generátor</div>' +
      '<label class="field"><span>Počet jedál denne</span><select class="inp" id="jd">' +
      '<option value="3"' + (n.jedlaDenne === 3 ? " selected" : "") + ">3 – raňajky, obed, večera</option>" +
      '<option value="4"' + (n.jedlaDenne === 4 ? " selected" : "") + ">4 – aj desiata</option></select></label>" +
      '<label class="field" style="margin-top:11px"><span>Koľko rôznych obedov navariť v nedeľu</span><select class="inp" id="po">' +
      '<option value="1"' + (n.pocetObedov === 1 ? " selected" : "") + ">1 recept na celý týždeň</option>" +
      '<option value="2"' + (n.pocetObedov === 2 ? " selected" : "") + ">2 recepty (3 + 2 dni)</option></select></label>";
    w.appendChild(gen);
    gen.querySelector("#jd").onchange = e => { n.jedlaDenne = +e.target.value; save(); render(); };
    gen.querySelector("#po").onchange = e => { n.pocetObedov = +e.target.value; save(); render(); };

    // zakázané suroviny
    const zak = el("div", "card");
    zak.innerHTML = '<div class="card-t">Suroviny, ktoré nejem</div>' +
      '<div class="btn-row"><input class="inp" id="zi" placeholder="napr. tofu, huby, modrý syr…" style="flex:1;min-width:140px">' +
      '<button class="btn" id="za">Pridať</button></div>' +
      '<div class="pill-list" style="margin-top:11px" id="zl"></div>' +
      '<div class="muted" style="margin-top:10px">Recepty s týmito surovinami sa nikdy neponúknu ani nezobrazia v zoznamoch.</div>';
    w.appendChild(zak);
    const zl = zak.querySelector("#zl");
    if (!S.zakazane.length) zl.appendChild(el("div", "muted", "Zatiaľ nič."));
    S.zakazane.forEach(t => {
      const b = el("button", "pill-x", esc(t) + "<span>✕</span>");
      b.onclick = () => { S.zakazane = S.zakazane.filter(x => x !== t); save(); render(); };
      zl.appendChild(b);
    });
    const pridaj = () => {
      const v = zak.querySelector("#zi").value.trim();
      if (!v) return;
      if (!S.zakazane.includes(v)) S.zakazane.push(v);
      save(); render();
    };
    zak.querySelector("#za").onclick = pridaj;
    zak.querySelector("#zi").onkeydown = e => { if (e.key === "Enter") pridaj(); };

    const obl = el("div", "card");
    obl.innerHTML = '<div class="card-t">Obľúbené recepty</div><div class="muted">' +
      (S.oblubene.length ? S.oblubene.length + " označených. Generátor ich uprednostňuje." : "Zatiaľ žiadne. Označ ich srdiečkom v Receptoch.") + "</div>";
    if (S.oblubene.length) {
      const b = el("button", "btn sm ghost", "Zobraziť v Receptoch");
      b.style.marginTop = "11px";
      b.onclick = () => { F.lenObl = true; tab = "rec"; render(); };
      obl.appendChild(b);
    }
    w.appendChild(obl);

    const tema = el("div", "card");
    tema.innerHTML = '<div class="card-t">Vzhľad</div><div class="chips" id="th"></div>';
    const th = tema.querySelector("#th");
    [["auto", "Podľa systému"], ["light", "Svetlý"], ["dark", "Tmavý"]].forEach(([v, t]) =>
      th.appendChild(chip(t, n.tema === v, () => { n.tema = v; save(); aplikujTemu(); render(); })));
    w.appendChild(tema);

    const info = el("div", "card");
    info.innerHTML = '<div class="card-t">O aplikácii</div><div class="muted">' +
      "<b>" + R.length + " receptov</b> vytiahnutých zo 7 ebookov:<br>" +
      Object.keys(BOOKS).map(b => "• " + esc(BOOKS[b].nazov) + " — " + R.filter(r => r.b === b).length + " receptov").join("<br>") +
      "<br>• 7-dňový chlapský systém — plán zložený z receptov vyššie<br>• Ťahák dokonalého mäsožravca — tabuľka prepečenia steaku" +
      "<br><br>Kalórie a makrá sú prevzaté z ebookov (na 1 porciu). Všetko sa ukladá len v tomto zariadení." +
      "</div>";
    w.appendChild(info);

    const reset = el("button", "btn block ghost", "Vymazať všetky moje údaje");
    reset.style.color = "var(--bad)";
    reset.onclick = () => {
      if (!confirm("Naozaj vymazať jedálniček, obľúbené, zakázané suroviny a nastavenia?")) return;
      localStorage.removeItem(KEY); S = load(); aplikujTemu(); render(); toast("Vymazané");
    };
    w.appendChild(reset);

    const steak = el("div", "card");
    steak.innerHTML = '<div class="card-t">Ťahák: prepečenie steaku</div><ul class="ings">' +
      [["Blue rare", "46–49 °C", "45–60 s z každej strany"], ["Rare", "52–55 °C", "1,5–2 min"],
       ["Medium rare", "55–60 °C", "2–3 min"], ["Medium", "60–65 °C", "3–4 min"], ["Well done", "71 °C+", "5–6 min"]]
        .map(([a, b, cc]) => "<li><span><b>" + a + "</b> · " + b + " · " + cc + "</span></li>").join("") +
      '</ul><div class="muted" style="margin-top:8px">Bezpečné teploty: kuracie 74 °C · bravčová panenka 63 °C · hovädzí burger 71 °C. ' +
      "Mäso vyber z chladničky 30–60 min vopred, osuš a osoľ, sprudka opeč a potom dopekaj pomalšie. Po dopečení nechaj 5–10 min odpočívať.</div>";
    w.appendChild(steak);

    return w;
  }
  function fld(label, id, val) {
    return '<label class="field"><span>' + label + '</span><input class="inp" id="' + id +
      '" type="number" inputmode="decimal" step="any" value="' + val + '"></label>';
  }

  /* ———————————————————— router ———————————————————— */
  let tab = "plan";
  const TITULKY = { plan: ["Jedálniček", null], rec: ["Recepty", null], buy: ["Nákupný zoznam", null], set: ["Nastavenia", null] };
  function aplikujTemu() {
    const t = S.nastavenia.tema;
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
  }
  function obnovHlavicku() {
    const c = ciele();
    document.getElementById("hdrTtl").textContent = TITULKY[tab][0];
    document.getElementById("hdrSub").textContent =
      tab === "rec" ? R.length + " receptov zo 7 ebookov"
        : tab === "buy" ? (S.plan ? (S.plan.mode === "den" ? "z jedálnička na 1 deň" : "z jedálnička na týždeň") : "—")
        : c.kcal + " kcal · " + c.bielk + " g bielkovín denne";
  }
  function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(tab === "plan" ? viewPlan() : tab === "rec" ? viewRec() : tab === "buy" ? viewBuy() : viewSet());
    obnovHlavicku();
    document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
    window.scrollTo(0, 0);
  }
  document.getElementById("tabs").addEventListener("click", e => {
    const b = e.target.closest("button[data-tab]");
    if (!b) return;
    tab = b.dataset.tab; render();
  });
  aplikujTemu();
  render();
})();
