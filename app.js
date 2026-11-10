/* The machinery. You shouldn't need to edit this file — bots and settings go in bots.js. */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  // every image gets the same ?v= as app.js in index.html, so bumping that one tag
  // makes browsers fetch fresh copies of everything instead of old saved ones
  const ASSET_V = (() => { try { return new URL(document.currentScript.src).searchParams.get("v") || ""; } catch (e) { return ""; } })();
  const asset = src => !src || !ASSET_V || /^(https?:|data:)/.test(src) ? src : src + (src.includes("?") ? "&" : "?") + "v=" + ASSET_V;
  const BOTS = (window.BOTS || []).filter(b => b && b.id && b.name && b.status !== "hidden");
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // blurbs: escape, then turn ~~words~~ into struck-through text
  const prose = s => esc(s).replace(/~~(.+?)~~/g, "<s>$1</s>");
  const fmt = n => Number(n).toLocaleString("en-US");
  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const hearts = s => esc(s).replace(/[♡♥]/g, '<span class="heart">$&</span>');
  const plural = (n, w) => `${fmt(n)} ${w}${n === 1 ? "" : "s"}`;
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const byChats = list => list.map((b, i) => ({ b, i }))
    .sort((x, y) => (y.b.chats || 0) - (x.b.chats || 0) || x.i - y.i).map(x => x.b);

  // most-chatted first, like your DreamJourney profile
  const live = byChats(BOTS.filter(b => b.status !== "desk"));
  const desk = BOTS.filter(b => b.status === "desk");
  const NAME = SITE.name || "Wren";


  /* ---- adult confirmation, remembered for this visit only ---- */
  let adultOK = false;
  try { adultOK = sessionStorage.getItem("adultOK") === "1"; } catch (e) {}
  function confirmAdult() {
    adultOK = true;
    try { sessionStorage.setItem("adultOK", "1"); } catch (e) {}
  }

  /* ================= MASTHEAD ================= */
  document.title = NAME.replace(/[♡♥]/g, "").trim() + " · Gallery";
  $("#site-name").innerHTML = hearts(NAME);
  $("#brand").innerHTML = `<span class="brand-moon" aria-hidden="true">☾</span> ${hearts(NAME)}`;
  $("#foot-brand").innerHTML = hearts(NAME);
  $("#issue").textContent = SITE.issue || "";
  $("#tagline").textContent = SITE.tagline || "";
  $("#seal-letter").textContent = (SITE.monogram || NAME.replace(/[^A-Za-z]/g, "").charAt(0) || "W").toUpperCase();
  if (SITE.credit) $("#credit").textContent = SITE.credit;

  const totalChats = live.reduce((t, b) => t + (Number(b.chats) || 0), 0);
  const totalScenes = BOTS.reduce((t, b) => t + (b.scenes || []).length, 0);

  ["#nav-dj", "#about-dj"].forEach(sel => {
    const a = $(sel); if (!a) return;
    if (SITE.dreamjourney) a.href = SITE.dreamjourney; else a.hidden = true;
  });
  if (SITE.avatar) {
    const seal = $(".letter .seal");
    seal.outerHTML = `<span class="letter-pfp" aria-hidden="true"><img src="${esc(asset(SITE.avatar))}" alt=""></span>`;
  }
  $("#note").innerHTML = SITE.note
    ? `<p>${esc(SITE.note)}</p><p class="sig">${hearts(NAME)}</p>` : "";
  if (SITE.backdrop) document.documentElement.style.setProperty("--backdrop", `url("${asset(SITE.backdrop)}")`);
  if (SITE.backdropTint !== false) document.documentElement.classList.add("tint");

  /* ---- ticker ---- */
  const tickerWords = SITE.ticker && SITE.ticker.length ? SITE.ticker
    : ["slow burn", "soft but guarded", "fandom & original", "will tag like it's AO3", "for the love of lore", "come for the angst, stay for the yearning"];
  const tickerRun = tickerWords.map(w => `<span>${esc(w)}</span><i>✦</i>`).join("");
  $("#ticker").innerHTML = tickerRun + tickerRun; // doubled so the loop is seamless

  /* ---- ornaments (one drawing, reused) ---- */
  const ORNAMENT = '<svg viewBox="0 0 260 24" width="260" height="24"><path d="M0 13C22 10,50 15,76 11M104 12.5C108 10,110 14,114 11.5M146 11C152 14,156 9,162 12.5M182 11C210 15,232 9,260 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none"/><circle cx="90" cy="12" r="8" fill="currentColor"/><circle cx="93.5" cy="9" r="6.4" fill="var(--paper)"/><path d="M130 2l10 10-10 10-10-10z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M130 7l5 5-5 5-5-5z" fill="currentColor"/><path d="M172 8L173.2 10.8L176 12L173.2 13.2L172 16L170.8 13.2L168 12L170.8 10.8Z" fill="currentColor"/></svg>';
  $$(".ornament").forEach(o => { o.innerHTML = ORNAMENT; });
  // a pressed sprig, drawn in gold ink
  const SPRIG = '<svg viewBox="0 0 120 160" width="120" height="160" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M60 158C58 120 62 80 54 40C52 28 50 18 52 6"/><path d="M57 120C44 114 36 104 34 92C46 96 54 106 57 120Z" fill="currentColor" fill-opacity=".18"/><path d="M59 98C72 92 80 82 82 70C70 74 62 84 59 98Z" fill="currentColor" fill-opacity=".18"/><path d="M56 74C44 68 38 58 37 48C48 52 54 62 56 74Z" fill="currentColor" fill-opacity=".18"/><path d="M55 52C64 46 70 38 71 30C62 33 57 41 55 52Z" fill="currentColor" fill-opacity=".18"/><circle cx="52" cy="10" r="7" fill="var(--blood-lit)" fill-opacity=".8" stroke="none"/><path d="M47 9c3-4 8-4 10 0M48 13c3 2 6 2 9 0" stroke-width="1"/><circle cx="40" cy="30" r="2.2" fill="currentColor" stroke="none"/><circle cx="74" cy="52" r="1.8" fill="currentColor" stroke="none"/></svg>';
  $$(".sprig").forEach(o => { o.innerHTML = SPRIG; });

  /* ---- collections (the folders) ---- */
  const collections = (SITE.collections || []).filter(c => live.some(b => b.collection === c));
  live.forEach(b => { if (b.collection && !collections.includes(b.collection)) collections.push(b.collection); });
  const notes = SITE.collectionNotes || {};

  /* ---- stats ---- */
  const stats = [
    [live.length, "bots"],
    [SITE.messages || (totalChats ? fmt(totalChats) : ""), "chats"],
    [collections.length, "worlds"],
    [totalScenes, "scenes"]
  ].filter(s => s[0]);
  $("#stats").innerHTML = stats.map(s =>
    `<div><dt>${esc(s[1])}</dt><dd data-count="${typeof s[0] === "number" ? s[0] : ""}">${esc(typeof s[0] === "number" ? fmt(s[0]) : s[0])}</dd></div>`).join("");

  /* ================= COVERS & CARDS ================= */
  function typeset(b) {
    return `<div class="typeset" aria-hidden="true"><span class="initial">${esc(b.name.charAt(0))}</span><span class="art-soon">art soon</span></div>`;
  }
  function imgHTML(b, src, lazy = true) {
    const st = [b.focus ? `object-position:${b.focus}` : "", b.fit === "whole" ? "object-fit:contain" : ""].filter(Boolean).join(";");
    const pos = st ? ` style="${esc(st)}"` : "";
    src = asset(src);
    const bleed = b.fit === "whole" ? `<img class="bleed" src="${esc(src)}" alt="" aria-hidden="true"${lazy ? ' loading="lazy"' : ""}>` : "";
    return `${bleed}<img src="${esc(src)}" alt=""${lazy ? ' loading="lazy"' : ""}${pos} onerror="this.replaceWith(document.createRange().createContextualFragment(this.dataset.fallback))" data-fallback="${esc(typeset(b))}">`;
  }
  // 18+ covers aren't blurred — the gate still asks before one opens
  function coverHTML(b, src) {
    return `<div class="cover">${b.adult ? '<span class="adult-flag">18+</span>' : ""}${src ? imgHTML(b, src) : typeset(b)}</div>`;
  }
  function chipsHTML(b, n) {
    return `<span class="chips">${b.category ? `<span class="chip cat">${esc(b.category)}</span>` : ""}${
      (b.tags || []).slice(0, n).map(t => `<span class="chip">${esc(t)}</span>`).join("")}</span>`;
  }
  const label = b => `${esc(b.name)}${b.title ? ", " + esc(b.title) : ""}${b.adult ? ", 18+" : ""}`;

  function cardHTML(b, i) {
    const sc = (b.scenes || []).length;
    return `<li class="card" style="--i:${i % 12}">
      <button data-bot="${esc(b.id)}" aria-label="${label(b)}">
        ${coverHTML(b, b.cover)}
        <span class="card-body">
          <span class="card-coll">${esc(b.collection || "")}</span>
          <span class="card-name">${esc(b.name)}</span>
          ${b.title ? `<span class="card-title">${esc(b.title)}</span>` : ""}
          ${b.blurb ? `<span class="card-blurb">${prose(b.blurb)}</span>` : ""}
          ${chipsHTML(b, 3)}
          <span class="card-foot">
            ${b.chats ? `<span>♡ ${fmt(b.chats)} chats</span>` : "<span>new</span>"}
            ${sc ? `<span class="sc">${plural(sc, "scene")}</span>` : ""}
          </span>
        </span>
      </button>
    </li>`;
  }
  function rowHTML(b, i) {
    const sc = (b.scenes || []).length;
    return `<li class="row" style="--i:${i % 12}">
      <button data-bot="${esc(b.id)}" aria-label="${label(b)}">
        <span class="row-thumb">${coverHTML(b, b.cover)}</span>
        <span class="row-main">
          <span class="row-name">${esc(b.name)}${b.title ? ` <em>${esc(b.title)}</em>` : ""}</span>
          <span class="row-meta">${[b.collection, b.category, b.pov, b.adult ? "18+" : ""].filter(Boolean).map(esc).join(" · ")}</span>
        </span>
        <span class="row-num">${b.chats ? `♡ ${fmt(b.chats)}` : ""}${sc ? `<small>${plural(sc, "scene")}</small>` : ""}</span>
      </button>
    </li>`;
  }

  /* ================= 01 FEATURED ================= */
  const featured = live.find(b => b.id === SITE.featured) || live[0];
  function renderFeatured() {
    const el = $("#featured");
    if (!featured) { $("#featured-sect").hidden = true; return; }
    const b = featured, sc = (b.scenes || []).length;
    el.hidden = false;
    el.innerHTML = `
      <button class="f-art" data-bot="${esc(b.id)}" data-list="archive" aria-label="Open ${esc(b.name)}">
        ${b.adult ? '<span class="adult-flag">18+</span>' : ""}
        ${b.cover ? imgHTML(b, b.cover, false) : typeset(b)}
      </button>
      <div class="f-text">
        <p class="f-label">${b.id === SITE.featured ? "✦ featured" : "✦ most chatted"}${b.chats ? ` · ${fmt(b.chats)} chats` : ""}${sc ? ` · ${plural(sc, "scene")}` : ""}</p>
        <h2>${esc(b.name)}</h2>
        ${b.title ? `<p class="f-sub">${esc(b.title)}</p>` : ""}
        ${b.blurb ? `<p class="f-blurb">${prose(b.blurb)}</p>` : ""}
        ${chipsHTML(b, 5)}
        <div class="actions">
          <button class="btn" data-bot="${esc(b.id)}" data-list="archive">read more</button>
          ${b.link ? `<a class="btn btn-ghost" href="${esc(b.link)}" target="_blank" rel="noopener">chat on dreamjourney ↗</a>` : ""}
        </div>
      </div>`;
  }

  /* ================= 02 TOP NINE ================= */
  const nine = live.filter(b => b.chats).slice(0, 9);
  const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"];
  function renderNine() {
    if (!nine.length) { $("#loved").hidden = true; return; }
    $("#nine").innerHTML = nine.map((b, i) => `<li class="n-card" style="--i:${i}">
      <button data-bot="${esc(b.id)}" data-list="nine" aria-label="Number ${i + 1}: ${label(b)}">
        ${coverHTML(b, b.cover)}
        <span class="rank" aria-hidden="true">${ROMAN[i]}</span>
        <span class="n-body">
          <span class="n-name">${esc(b.name)}</span>
          ${b.title ? `<span class="n-title">${esc(b.title)}</span>` : ""}
          <span class="n-meta">${esc(b.collection || b.category || "")}${b.chats ? ` · ♡ ${fmt(b.chats)}` : ""}</span>
        </span>
      </button>
    </li>`).join("");
  }

  /* ================= 03 COLLECTIONS ================= */
  function folderPeek(list) {
    const pics = list.filter(b => b.cover).slice(0, 3);
    while (pics.length < 3 && list[pics.length]) pics.push(list[pics.length]);
    return pics.map((b, i) => `<span class="peek peek-${i}">${b.cover ? imgHTML(b, b.cover) : typeset(b)}</span>`).join("");
  }
  function renderFolders() {
    const folders = collections.map(c => ({ name: c, href: "#/folder/" + slug(c), list: live.filter(b => b.collection === c), note: notes[c] }));
    folders.push({ name: "every bot", href: "#/all", list: live, all: true, note: "the whole archive, most-chatted first." });
    $("#folders").innerHTML = folders.map((f, i) => {
      const chats = f.list.reduce((t, b) => t + (Number(b.chats) || 0), 0);
      return `<li class="folder${f.all ? " folder-all" : ""}" style="--i:${i}">
        <a href="${f.href}">
          <span class="folder-tab" aria-hidden="true"></span>
          <span class="folder-peek" aria-hidden="true">${folderPeek(f.list)}</span>
          <span class="folder-name">${esc(f.name)}</span>
          <span class="folder-meta">${plural(f.list.length, "bot")}${chats ? ` · ${fmt(chats)} chats` : ""}</span>
          ${f.note ? `<span class="folder-note">${esc(f.note)}</span>` : ""}
        </a>
      </li>`;
    }).join("");
  }

  /* ================= 04 ARCHIVE ================= */
  const PAGE = 12;
  const filter = { col: "", cat: "", pov: "", rating: "", sort: "chats", q: "" };
  let shownCount = PAGE;
  let layout = "grid";
  try { layout = localStorage.getItem("layout") === "list" ? "list" : "grid"; } catch (e) {}
  let archiveList = [];
  const searchEl = $("#search");

  const uniq = arr => Array.from(new Set(arr.filter(Boolean)));
  const cats = uniq(live.map(b => b.category)).sort();
  const povs = uniq(live.map(b => b.pov)).sort();
  $("#f-cat").innerHTML = `<option value="">all</option>` + cats.map(c => `<option>${esc(c)}</option>`).join("");
  $("#f-pov").innerHTML = `<option value="">any</option>` + povs.map(c => `<option>${esc(c)}</option>`).join("");
  if (!live.some(b => b.adult)) $("#f-rating").closest("label").hidden = true;

  function haystack(b) {
    return [b.name, b.title, b.collection, b.category, b.pov, b.blurb, ...(b.tags || []), ...(b.warnings || []),
      ...(b.scenes || []).map(s => s.name + " " + (s.line || ""))].join(" ").toLowerCase();
  }
  function matches(b) {
    if (filter.col && b.collection !== filter.col) return false;
    if (filter.cat && b.category !== filter.cat) return false;
    if (filter.pov && b.pov !== filter.pov) return false;
    if (filter.rating === "sfw" && b.adult) return false;
    if (filter.rating === "adult" && !b.adult) return false;
    if (!filter.q) return true;
    const h = haystack(b);
    return filter.q.toLowerCase().split(/\s+/).filter(Boolean).every(w => h.includes(w));
  }
  function sorted(list) {
    const l = list.slice();
    if (filter.sort === "az") l.sort((a, b) => a.name.localeCompare(b.name));
    else if (filter.sort === "scenes") l.sort((a, b) => (b.scenes || []).length - (a.scenes || []).length || (b.chats || 0) - (a.chats || 0));
    return l; // "chats" is the default order already
  }
  function renderTabs() {
    const tabs = [{ label: "every bot", href: "#/all", on: !filter.col, n: live.length }]
      .concat(collections.map(c => ({ label: c, href: "#/folder/" + slug(c), on: filter.col === c,
        n: live.filter(b => b.collection === c).length })));
    $("#tabs").innerHTML = tabs.map(t =>
      `<a class="tab" href="${t.href}"${t.on ? ' aria-current="page"' : ""}>${esc(t.label)} <span class="n">${t.n}</span></a>`).join("");
  }
  function renderList(keepCount) {
    if (!keepCount) shownCount = PAGE;
    archiveList = sorted(live.filter(matches));
    const shown = archiveList.slice(0, shownCount);
    $("#archive-h").textContent = filter.col || "every bot";
    const base = filter.col ? live.filter(b => b.collection === filter.col) : live;
    const chats = base.reduce((t, b) => t + (Number(b.chats) || 0), 0);
    const narrowed = archiveList.length !== base.length;
    $("#list-meta").textContent = (narrowed ? `${archiveList.length} of ` : "") + plural(base.length, "bot") + (chats ? ` · ${fmt(chats)} chats` : "");
    const blurb = filter.col ? notes[filter.col] : "";
    $("#list-blurb").hidden = !blurb;
    $("#list-blurb").textContent = blurb || "";

    const active = [];
    if (filter.q) active.push(`“${esc(filter.q)}”`);
    if (filter.cat) active.push(esc(filter.cat));
    if (filter.pov) active.push(esc(filter.pov));
    if (filter.rating) active.push(filter.rating === "sfw" ? "sfw only" : "18+ only");
    $("#active-filters").hidden = !active.length;
    $("#active-filters").innerHTML = active.length
      ? `showing ${active.join(" · ")} <button class="linkish" data-clear>clear</button>` : "";

    const grid = $("#grid");
    grid.className = layout === "list" ? "rows" : "grid";
    grid.innerHTML = shown.map(layout === "list" ? rowHTML : cardHTML).join("");
    $$("button[data-bot]", grid).forEach(btn => { btn.dataset.list = "archive"; });
    $("#empty").hidden = archiveList.length > 0;
    const left = archiveList.length - shown.length;
    $("#show-more").hidden = left <= 0;
    $("#show-more").textContent = `turn the page · ${left} more`;
    $$(".view-toggle button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.layout === layout)));
  }
  function clearFilters() {
    Object.assign(filter, { cat: "", pov: "", rating: "", q: "" });
    searchEl.value = ""; $("#f-cat").value = ""; $("#f-pov").value = ""; $("#f-rating").value = "";
    renderList();
  }
  searchEl.addEventListener("input", () => { filter.q = searchEl.value.trim(); renderList(); });
  [["#f-cat", "cat"], ["#f-pov", "pov"], ["#f-rating", "rating"], ["#f-sort", "sort"]].forEach(([sel, key]) => {
    $(sel).addEventListener("change", e => { filter[key] = e.target.value; renderList(); });
  });
  $("#show-more").addEventListener("click", () => { shownCount += PAGE; renderList(true); });
  $("#clear-filters").addEventListener("click", clearFilters);
  $("#active-filters").addEventListener("click", e => { if (e.target.closest("[data-clear]")) clearFilters(); });
  $$(".view-toggle button").forEach(b => b.addEventListener("click", () => {
    layout = b.dataset.layout;
    try { localStorage.setItem("layout", layout); } catch (e) {}
    renderList(true);
  }));
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && !document.querySelector("dialog[open]")) {
      e.preventDefault();
      jump("#archive", false);
      searchEl.focus({ preventScroll: true });
    }
  });

  /* ================= 05 DESK + POLL ================= */
  function renderDesk() {
    const sect = $("#desk");
    sect.hidden = desk.length === 0;
    $("#nav-desk").hidden = desk.length === 0;
    if (!desk.length) return;
    $("#desk-cards").innerHTML = desk.map((b, i) => `<li style="--i:${i}">
      <button class="desk-card" data-bot="${esc(b.id)}" data-list="desk">
        <span class="desk-thumb">${coverHTML(b, b.cover)}</span>
        <span class="desk-text">
          <span class="wip">draft</span>
          <span class="d-name">${esc(b.name)}</span>
          ${b.title ? `<span class="d-title">${esc(b.title)}</span>` : ""}
          ${b.blurb ? `<span class="d-blurb">${prose(b.blurb)}</span>` : ""}
        </span>
      </button>
    </li>`).join("");
    const opts = desk.map(b => b.name + (b.title ? " — " + b.title : "")).concat(["something brand new"]);
    const polling = desk.length >= 2;
    $("#poll").hidden = !polling;
    $("#desk-layout").classList.toggle("solo", !polling);
    if (polling) $("#poll-options").insertAdjacentHTML("beforeend", opts.map((o, i) =>
      `<label class="opt"><input type="radio" name="vote" value="${esc(o)}"${i === 0 ? " required" : ""}><span>${esc(o)}</span></label>`).join(""));
    if (SITE.bulletin) { $("#bulletin").hidden = false; $("#bulletin-text").textContent = SITE.bulletin; }
  }

  /* ================= THE RECORD PLAYER ================= */
  const RECORD_PLAYER = `<svg viewBox="0 0 320 230" role="img" aria-label="">
    <defs>
      <radialGradient id="vinyl" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#2a2d36"/><stop offset=".7" stop-color="#14161c"/><stop offset="1" stop-color="#0c0d11"/></radialGradient>
      <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3f2c"/><stop offset="1" stop-color="#3a281c"/></linearGradient>
    </defs>
    <!-- desk line -->
    <path d="M6 206H314" stroke="var(--line)" stroke-width="1.5"/>
    <!-- record player -->
    <rect x="22" y="128" width="190" height="72" rx="8" fill="url(#wood)" stroke="var(--rose)" stroke-width="1.4"/>
    <rect x="30" y="190" width="14" height="10" rx="2" fill="#2a1d14"/><rect x="190" y="190" width="14" height="10" rx="2" fill="#2a1d14"/>
    <ellipse cx="108" cy="140" rx="78" ry="20" fill="#1b1d24" stroke="rgba(201,164,92,.5)"/>
    <g class="lp-spin">
      <ellipse cx="108" cy="138" rx="70" ry="17" fill="url(#vinyl)"/>
      <ellipse cx="108" cy="138" rx="56" ry="13.5" fill="none" stroke="rgba(255,255,255,.07)"/>
      <ellipse cx="108" cy="138" rx="44" ry="10.5" fill="none" stroke="rgba(255,255,255,.07)"/>
      <ellipse cx="108" cy="138" rx="17" ry="4.4" fill="var(--wax)"/>
      <path d="M96 136.5q12-3 24 0" stroke="var(--rose-lit)" stroke-width="1" fill="none" opacity=".8"/>
      <ellipse cx="108" cy="138" rx="2" ry=".8" fill="#0c0d11"/>
    </g>
    <circle cx="190" cy="138" r="6" fill="#26201a" stroke="var(--rose)"/>
    <path class="lp-arm" d="M190 138L176 112L142 132" stroke="var(--silver)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="160" y="168" width="34" height="14" rx="3" fill="#2a1d14" stroke="rgba(201,164,92,.4)"/>
    <circle cx="168" cy="175" r="3" fill="var(--rose)"/><circle cx="180" cy="175" r="3" fill="var(--rose)" opacity=".6"/>
    <!-- headphones, resting against the player -->
    <g transform="translate(226 132)">
      <path d="M6 48C2 18 18 2 38 2S74 18 70 48" fill="none" stroke="var(--blood-lit)" stroke-width="6" stroke-linecap="round"/>
      <path d="M6 48C2 18 18 2 38 2S74 18 70 48" fill="none" stroke="var(--rose)" stroke-width="1" stroke-linecap="round" opacity=".7"/>
      <rect x="-2" y="40" width="18" height="30" rx="8" fill="#2c2018" stroke="var(--rose)"/>
      <rect x="60" y="40" width="18" height="30" rx="8" fill="#2c2018" stroke="var(--rose)"/>
    </g>
    <!-- a mug, still warm -->
    <g transform="translate(250 82)">
      <rect x="0" y="12" width="30" height="34" rx="5" fill="var(--parchment)" opacity=".92"/>
      <path d="M30 20h5a7 7 0 0 1 0 14h-5" fill="none" stroke="var(--parchment)" stroke-width="3" opacity=".92"/>
      <path class="steam s1" d="M9 8c-4-6 4-8 0-14" stroke="var(--toner)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path class="steam s2" d="M19 8c-4-6 4-8 0-14" stroke="var(--toner)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    </g>
    <!-- stacked records -->
    <rect x="26" y="96" width="70" height="8" rx="1.5" fill="var(--moss-deep)" stroke="rgba(138,154,120,.6)"/>
    <rect x="30" y="104" width="64" height="8" rx="1.5" fill="#3e2c22" stroke="rgba(201,164,92,.4)"/>
    <rect x="24" y="112" width="72" height="8" rx="1.5" fill="#2f3446" stroke="rgba(195,203,226,.4)"/>
    <!-- notes drifting up -->
    <g fill="var(--rose-lit)" font-family="EB Garamond, serif">
      <text class="note n1" x="120" y="96" font-size="20">♪</text>
      <text class="note n2" x="150" y="84" font-size="16">♫</text>
      <text class="note n3" x="98" y="80" font-size="14">♪</text>
    </g>
    <!-- a little sparkle star -->
    <path class="twinkle" d="M290 30Q290 40 300 40Q290 40 290 50Q290 40 280 40Q290 40 290 30Z" fill="var(--rose-lit)"/>
  </svg>`;

  function playlistEmbed(url) {
    try {
      const u = new URL(url);
      if (/spotify\.com$/.test(u.hostname)) {
        const m = u.pathname.match(/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]+)/);
        if (m) return { kind: "spotify", src: `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0` };
      }
      if (/youtube\.com$|youtu\.be$/.test(u.hostname)) {
        const list = u.searchParams.get("list");
        if (list) return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(list)}` };
        const v = u.searchParams.get("v") || (u.hostname.endsWith("youtu.be") ? u.pathname.slice(1) : "");
        if (v) return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v)}` };
      }
    } catch (e) {}
    return null;
  }
  function renderListening() {
    const pl = SITE.playlist || {};
    const on = !!pl.url;
    $("#listening").hidden = !on;
    $("#nav-listen").hidden = !on;
    if (!on) return;
    $("#listen-art").innerHTML = RECORD_PLAYER;
    $("#listen-title").textContent = pl.title || "what i've been listening to";
    $("#listen-note").textContent = pl.note || "";
    $("#listen-note").hidden = !pl.note;
    const host = /spotify/.test(pl.url) ? "spotify" : /youtu/.test(pl.url) ? "youtube" : "";
    const link = $("#listen-link");
    link.href = pl.url;
    link.textContent = host ? `open in ${host} ↗` : "open the playlist ↗";
    const emb = pl.embed === false ? null : playlistEmbed(pl.url);
    if (emb) {
      $("#listen-embed").innerHTML = `<iframe class="embed-${emb.kind}" src="${esc(emb.src)}" title="${esc(pl.title || "Playlist")}" loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
  }

  /* ================= 06 ABOUT ================= */
  function renderAbout() {
    const paras = Array.isArray(SITE.about) ? SITE.about : SITE.about ? [SITE.about] : [SITE.note || ""];
    $("#about-body").innerHTML = paras.filter(Boolean).map(p => `<p>${prose(p)}</p>`).join("");
    $("#about-portrait").innerHTML = SITE.avatar
      ? `<img src="${esc(asset(SITE.avatar))}" alt="${esc(SITE.avatarAlt || "")}">`
      : `<span class="seal seal-lg" aria-hidden="true"><span>${esc($("#seal-letter").textContent)}</span></span>`;
    const vibes = SITE.vibes && SITE.vibes.length ? SITE.vibes : ["slow burn", "soft but guarded", "fandom & original"];
    $("#vibes").innerHTML = vibes.map(v => `<li>${esc(v)}</li>`).join("");
    const sh = SITE.sheet;
    if (sh) {
      const mod = n => { const m = Math.floor((Number(n) - 10) / 2); return (m >= 0 ? "+" : "") + m; };
      const rule = '<svg class="taper" viewBox="0 0 400 6" preserveAspectRatio="none"><path d="M0 3L400 0V6Z" fill="currentColor"/></svg>';
      const box = $("#statblock");
      box.hidden = false;
      box.innerHTML = `
        <p class="sb-name">${hearts(sh.name || NAME)}</p>
        <p class="sb-type">${esc(sh.type || "")}</p>
        ${rule}
        ${(sh.lines || []).map(l => `<p class="sb-line"><b>${esc(l[0])}</b> ${esc(l[1])}</p>`).join("")}
        ${rule}
        ${(sh.scores || []).length ? `<dl class="sb-scores">${sh.scores.map(x =>
          `<div><dt>${esc(x[0])}</dt><dd>${esc(x[1])} <span>(${mod(x[1])})</span></dd></div>`).join("")}</dl>${rule}` : ""}
        ${(sh.traits || []).map(l => `<p class="sb-line"><b><i>${esc(l[0])}.</i></b> ${esc(l[1])}</p>`).join("")}`;
    }
    const copy = $("#copy-discord");
    if (SITE.discord) {
      copy.hidden = false;
      copy.addEventListener("click", async () => {
        const st = $("#copy-status");
        try { await navigator.clipboard.writeText(SITE.discord); st.textContent = `Copied “${SITE.discord}” ♡ come say hi.`; }
        catch (e) { st.textContent = `My Discord is ${SITE.discord}`; }
      });
    }
  }

  /* ================= SCROLLING ================= */
  function jump(sel, smooth = true) {
    const el = typeof sel === "string" ? $(sel) : sel;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - ($("#topbar").offsetHeight + 12);
    window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduceMotion ? "smooth" : "auto" });
  }
  document.addEventListener("click", e => {
    const a = e.target.closest("a[data-jump]");
    if (!a) return;
    e.preventDefault();
    closeMenu();
    jump(a.getAttribute("href"));
  });

  // mobile menu
  const menuBtn = $("#menu-btn");
  function closeMenu() { document.body.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => {
    const open = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  // the bar turns solid once you scroll, and the back-to-top button appears
  const topbar = $("#topbar"), toTop = $("#to-top");
  function onScroll() {
    const y = window.scrollY;
    topbar.classList.toggle("solid", y > 40);
    toTop.hidden = y < 900;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", () => jump("#home"));

  // highlight the section you're in
  if ("IntersectionObserver" in window) {
    const links = $$(".nav a[data-jump]");
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(l => l.classList.toggle("here", l.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["#loved", "#collections", "#archive", "#desk", "#listening", "#about"].forEach(s => { const el = $(s); if (el) spy.observe(el); });

    // things drift up into place as they scroll in
    const rev = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.documentElement.classList.add("js-reveal");
    $$(".reveal").forEach(el => rev.observe(el));

    // the numbers in the hero count up once
    const counter = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        counter.unobserve(en.target);
        if (reduceMotion) return;
        $$("dd[data-count]", en.target).forEach(dd => {
          const end = Number(dd.dataset.count); if (!end) return;
          const t0 = performance.now(), dur = 1400;
          (function tick(t) {
            const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
            dd.textContent = fmt(Math.round(end * e));
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
        });
      });
    });
    counter.observe($("#stats"));
  }

  /* ================= ROUTES =================
     #/                 home
     #/folder/<name>    the archive, opened to one collection
     #/all              the archive, every bot
     #/desk             the desk
     #/<bot-id>         opens that bot (old links keep working)        */
  let lastRoute = "#/";
  function route(first) {
    const h = location.hash || "#/";
    if (!h.startsWith("#/")) return;                 // e.g. the skip link
    const path = decodeURIComponent(h.slice(2));
    let m;
    if (path === "") {
      lastRoute = "#/";
      if (!first) jump("#home");
    } else if (path === "all" || (m = path.match(/^folder\/(.+)$/))) {
      let col = "";
      if (m) {
        col = collections.find(c => slug(c) === m[1]) || "";
        if (!col) { location.replace("#/all"); return; }
      }
      if (filter.col !== col) { filter.col = col; }
      renderTabs(); renderList();
      lastRoute = h;
      setTimeout(() => jump("#archive", !first), first ? 60 : 0);
    } else if (path === "desk") {
      lastRoute = h;
      setTimeout(() => jump(desk.length ? "#desk" : "#archive", !first), first ? 60 : 0);
    } else {
      openBot(path, true);
    }
  }
  window.addEventListener("hashchange", () => route(false));

  /* ================= DIALOGS ================= */
  function openDialog(d) { if (!d.open) d.showModal(); }
  document.addEventListener("click", e => {
    const closer = e.target.closest("[data-close]");
    if (closer) closer.closest("dialog").close();
    const opener = e.target.closest("[data-open]");
    if (opener) { closeMenu(); openDialog(document.getElementById(opener.dataset.open)); }
  });
  $$("dialog").forEach(d => {
    d.addEventListener("click", e => { if (e.target === d) d.close(); }); // click the dark backdrop to close
  });

  /* ---- 18+ gate ---- */
  let afterGate = null;
  function requireAdult(then) {
    if (adultOK) return then();
    afterGate = then;
    openDialog($("#gate"));
  }
  $("#gate-yes").addEventListener("click", () => {
    confirmAdult();
    $("#gate").close();
    if (afterGate) { const f = afterGate; afterGate = null; f(); }
  });
  $("#gate").addEventListener("close", () => {
    if (!adultOK && afterGate) { afterGate = null; history.replaceState(null, "", lastRoute); }
  });

  /* ---- surprise me ---- */
  // open the zine to a random page
  const toast = $("#roll-toast");
  let flipping = false;
  document.addEventListener("click", e => {
    if (!e.target.closest("[data-surprise]") || flipping) return;
    const pool = live.filter(b => adultOK || !b.adult);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return;
    const page = 1 + live.indexOf(pick);
    toast.hidden = false;
    toast.innerHTML = `<span class="fleuron">❦</span><span>opened to <span class="roll-n">p. ${reduceMotion ? page : "…"}</span> <span class="roll-say"></span></span>`;
    flipping = true;
    let t = 0;
    const flip = setInterval(() => {
      if (!reduceMotion) $(".roll-n", toast).textContent = "p. " + (1 + Math.floor(Math.random() * live.length));
      if (++t > 8 || reduceMotion) {
        clearInterval(flip);
        $(".roll-n", toast).textContent = "p. " + page;
        $(".roll-say", toast).textContent = "— " + pick.name;
        setTimeout(() => { flipping = false; toast.hidden = true; openBot(pick.id, false, live); }, 850);
      }
    }, 70);
  });

  /* ---- clicks on any bot card ---- */
  const lists = { nine, desk, archive: null };
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-bot]");
    if (!btn || btn.closest("dialog")) return;
    const list = btn.dataset.list === "archive" ? (archiveList.length ? archiveList : live) : lists[btn.dataset.list];
    openBot(btn.dataset.bot, false, list);
  });

  /* ================= BOT DETAIL ================= */
  const botDialog = $("#bot-dialog");
  let currentImages = [];
  let navList = live;
  let currentId = null;

  function related(b) {
    const tags = new Set((b.tags || []).map(t => t.toLowerCase()));
    return live.filter(x => x.id !== b.id)
      .map(x => ({ x, s: (x.collection === b.collection ? 2 : 0) + (x.tags || []).filter(t => tags.has(t.toLowerCase())).length }))
      .filter(r => r.s > 0)
      .sort((p, q) => q.s - p.s || (q.x.chats || 0) - (p.x.chats || 0))
      .slice(0, 4).map(r => r.x);
  }

  function openBot(id, fromHash, list) {
    const b = BOTS.find(x => x.id === id);
    if (!b) { if (fromHash) history.replaceState(null, "", lastRoute); return; }
    if (b.adult && !adultOK) return requireAdult(() => openBot(id, fromHash, list));
    if (list && list.includes(b)) navList = list;
    else if (!navList.includes(b)) navList = b.status === "desk" ? desk : live;
    currentId = b.id;

    currentImages = [b.cover, ...(b.gallery || [])].filter(Boolean);
    const plate = b.cover
      ? `<button class="cover" data-lb="0" aria-label="View full image">${b.adult ? '<span class="adult-flag">18+</span>' : ""}${imgHTML(b, b.cover, false)}</button>`
      : coverHTML(b, "");
    const thumbs = (b.gallery || []).length
      ? `<div class="thumbs">${b.gallery.map((src, i) =>
          `<button data-lb="${i + (b.cover ? 1 : 0)}" aria-label="View image ${i + 1}"><img src="${esc(asset(src))}" alt="" loading="lazy"></button>`).join("")}</div>`
      : "";
    const facts = [
      ["world", b.collection],
      ["category", b.category],
      ["chats", b.chats ? fmt(b.chats) : ""],
      ["pov", b.pov],
      ["rating", b.adult ? "18+" : ""],
      ["heads up", (b.warnings || []).join(", ")]
    ].filter(f => f[1]);
    const scenes = (b.scenes || []).length
      ? `<div class="scenes"><h3>scenes <span>${b.scenes.length}</span></h3><ol>${b.scenes.map(s =>
          `<li><strong>${esc(s.name)}</strong>${s.line ? `<span>${esc(s.line)}</span>` : ""}</li>`).join("")}</ol></div>`
      : "";
    const rel = related(b);
    const relHTML = rel.length ? `<div class="related"><h3>if you like ${esc(b.name.split(" ")[0])}…</h3><ul>${rel.map(r =>
      `<li><button data-rel="${esc(r.id)}" aria-label="${label(r)}">${coverHTML(r, r.cover)}<span>${esc(r.name)}</span></button></li>`).join("")}</ul></div>` : "";
    const idx = navList.indexOf(b);

    $("#bot-body").innerHTML = `
      <div class="plate">${plate}${thumbs}
        ${navList.length > 1 ? `<p class="plate-count">${idx + 1} of ${navList.length}</p>` : ""}
      </div>
      <div class="text">
        <p class="eyebrow">${esc(b.status === "desk" ? "✒ on the desk" : "☾ " + (b.collection || "the archive"))}</p>
        <h2 id="bot-name">${esc(b.name)}</h2>
        ${b.title ? `<p class="sub">${esc(b.title)}</p>` : ""}
        ${b.blurb ? `<p class="blurb">${prose(b.blurb)}</p>` : ""}
        ${facts.length ? `<dl class="facts">${facts.map(f => `<dt>${f[0]}</dt><dd>${esc(f[1])}</dd>`).join("")}</dl>` : ""}
        ${(b.tags || []).length ? `<ul class="tags" aria-label="Tags">${b.tags.map(t =>
            `<li><button data-tag="${esc(t)}" aria-label="Show other bots tagged ${esc(t)}">#${esc(t)}</button></li>`).join("")}</ul>` : ""}
        <div class="actions spread-actions">
          ${b.link
            ? `<a class="btn" href="${esc(b.link)}" target="_blank" rel="noopener">chat on dreamjourney ↗</a>`
            : `<span class="sub">${b.status === "desk" ? "still on the desk." : "link coming soon."}</span>`}
          <button class="btn btn-ghost" data-copylink>⧉ copy link</button>
          <button class="btn btn-ghost" data-reqbot="${esc(b.name)}">✦ request a scene</button>
        </div>
        <p class="form-status" id="link-status" role="status"></p>
        ${scenes}
        ${relHTML}
      </div>`;
    $("#bot-prev").hidden = $("#bot-next").hidden = navList.length < 2;
    openDialog(botDialog);
    $(".text", botDialog).scrollTop = 0;
    botDialog.scrollTop = 0;
    history.replaceState(null, "", "#/" + b.id);
  }
  function stepBot(d) {
    if (navList.length < 2) return;
    const i = navList.findIndex(x => x.id === currentId);
    let j = i, tries = 0;
    do { j = (j + d + navList.length) % navList.length; tries++; }
    while (navList[j].adult && !adultOK && tries < navList.length);
    openBot(navList[j].id, false, navList);
  }
  $("#bot-prev").addEventListener("click", () => stepBot(-1));
  $("#bot-next").addEventListener("click", () => stepBot(1));
  botDialog.addEventListener("keydown", e => {
    if (e.target.matches("input, textarea, select")) return;
    if (e.key === "ArrowLeft") stepBot(-1);
    if (e.key === "ArrowRight") stepBot(1);
  });

  botDialog.addEventListener("close", () => {
    if (location.hash !== lastRoute) history.replaceState(null, "", lastRoute);
  });
  botDialog.addEventListener("click", async e => {
    const tag = e.target.closest("[data-tag]");
    if (tag) {
      botDialog.close();
      filter.col = ""; filter.q = tag.dataset.tag; searchEl.value = filter.q;
      renderTabs(); renderList();
      history.replaceState(null, "", "#/all"); lastRoute = "#/all";
      jump("#archive");
      return;
    }
    const rel = e.target.closest("[data-rel]");
    if (rel) { openBot(rel.dataset.rel, false, navList); return; }
    if (e.target.closest("[data-copylink]")) {
      const url = location.href.split("#")[0] + "#/" + currentId;
      try { await navigator.clipboard.writeText(url); $("#link-status").textContent = "link copied ♡"; }
      catch (err) { $("#link-status").textContent = url; }
      return;
    }
    const rq = e.target.closest("[data-reqbot]");
    if (rq) {
      botDialog.close();
      $("#request-bot").value = rq.dataset.reqbot;
      openDialog($("#request"));
      return;
    }
    const lb = e.target.closest("[data-lb]");
    if (lb) openLightbox(+lb.dataset.lb);
  });

  /* ---- lightbox ---- */
  const lbox = $("#lightbox");
  let lbIndex = 0;
  function showImage(i) {
    lbIndex = (i + currentImages.length) % currentImages.length;
    $("#lb-img").src = asset(currentImages[lbIndex]);
    const many = currentImages.length > 1;
    $("#lb-prev").hidden = $("#lb-next").hidden = !many;
    $("#lb-count").textContent = many ? `${lbIndex + 1} of ${currentImages.length}` : "";
  }
  function openLightbox(i) { if (!currentImages.length) return; showImage(i); openDialog(lbox); }
  $("#lb-prev").addEventListener("click", () => showImage(lbIndex - 1));
  $("#lb-next").addEventListener("click", () => showImage(lbIndex + 1));
  lbox.addEventListener("keydown", e => {
    e.stopPropagation();
    if (e.key === "ArrowLeft") showImage(lbIndex - 1);
    if (e.key === "ArrowRight") showImage(lbIndex + 1);
  });

  /* ================= FORMS (emailed to you through Web3Forms) ================= */
  $("#request-bot").innerHTML = `<option value="">any / not sure</option>` +
    BOTS.map(b => `<option>${esc(b.name)}</option>`).join("");

  $$("form[data-form]").forEach(form => {
    const status = $(".form-status", form);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      status.className = "form-status";
      if (!SITE.formKey) {
        status.textContent = "this form isn't connected yet. add your Web3Forms key to bots.js (README step 6).";
        status.classList.add("err");
        return;
      }
      const data = Object.fromEntries(new FormData(form));
      if (data.botcheck) return; // spam trap
      delete data.botcheck;
      data.access_key = SITE.formKey;
      const what = data.bot || data.vote;
      data.subject = `${form.dataset.form} from your gallery${what ? " — " + what : ""}`;
      data.from_name = NAME.replace(/[♡♥]/g, "").trim() + "'s Gallery";
      if (data.vote && !data.message) data.message = "Vote: " + data.vote;
      const btn = $("button[type=submit]", form);
      btn.disabled = true;
      status.textContent = "sending…";
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        const out = await res.json();
        if (!out.success) throw new Error(out.message || "Not sent");
        form.reset();
        status.textContent = data.vote ? "vote sealed ♡ thank you." : "sent ♡ thank you for trusting me with it.";
      } catch (err) {
        status.textContent = "that didn't send. check your connection and try again?";
        status.classList.add("err");
      } finally {
        btn.disabled = false;
      }
    });
  });

  /* ================= GOLD CONSTELLATIONS ================= */
  (function sky() {
    const c = $("#sky"); if (!c || !c.getContext) return;
    const ctx = c.getContext("2d");
    let w, h, stars = [], lines = [], sparks = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function build() {
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      const n = Math.round(Math.min(120, innerWidth * innerHeight / 12000));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1 + .3) * dpr, p: Math.random() * Math.PI * 2, s: .3 + Math.random()
      }));
      // a handful of four-point "sparkle" stars, like the ones in the pfp
      sparks = stars.filter(s => s.r > 1 * dpr).slice(0, 10).map(s => Object.assign(s, { spark: true, r: s.r * 3.2 }));
      lines = [];
      const bright = stars.filter(s => s.spark || s.r > .9 * dpr).slice(0, 24);
      bright.forEach(a => {
        const b = bright.filter(x => x !== a).sort((p, q) => Math.hypot(p.x - a.x, p.y - a.y) - Math.hypot(q.x - a.x, q.y - a.y))[0];
        if (b && Math.hypot(b.x - a.x, b.y - a.y) < 240 * dpr) lines.push([a, b]);
      });
    }
    function sparkle(x, y, r, a) {
      ctx.fillStyle = `rgba(230, 205, 146, ${a})`;
      ctx.beginPath();
      ctx.moveTo(x, y - r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y); ctx.quadraticCurveTo(x, y, x, y - r); ctx.fill();
    }
    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(201, 164, 92, .14)"; ctx.lineWidth = dpr * .9;
      lines.forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); });
      stars.forEach(s => {
        const tw = reduceMotion ? .75 : .5 + .5 * Math.sin(s.p + t / 1000 * s.s);
        if (s.spark) sparkle(s.x, s.y, s.r * (.85 + .15 * tw), .55 + .35 * tw);
        else { ctx.fillStyle = `rgba(230, 205, 146, ${.55 * tw})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }
      });
    }
    let last = 0;
    function loop(t) { if (t - last > 50) { draw(t); last = t; } requestAnimationFrame(loop); }
    build();
    if (reduceMotion) draw(0); else requestAnimationFrame(loop);
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { build(); draw(performance.now()); }, 150); });
  })();

  /* ---- go ---- */
  renderFeatured();
  renderNine();
  renderFolders();
  renderTabs();
  renderList();
  renderDesk();
  renderAbout();
  renderListening();
  $$("main > .sect").filter(sec => !sec.hidden).forEach((sec, i) => {
    const tag = $(".num > span", sec);
    if (tag) tag.textContent = "pg. " + String(i + 1).padStart(2, "0");
  });
  onScroll();
  route(true);
})();
