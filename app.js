/* The machinery. You shouldn't need to edit this file — bots go in bots.js. */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const BOTS = (window.BOTS || []).filter(b => b && b.id && b.name && b.status !== "hidden");
  const $ = (s, root = document) => root.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // blurbs: escape, then turn ~~words~~ into struck-through text
  const prose = s => esc(s).replace(/~~(.+?)~~/g, "<s>$1</s>");
  const fmt = n => Number(n).toLocaleString("en-US");
  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const byChats = list => list.map((b, i) => ({ b, i }))
    .sort((x, y) => (y.b.chats || 0) - (x.b.chats || 0) || x.i - y.i).map(x => x.b);

  // most-chatted first, like your DreamJourney profile
  const live = byChats(BOTS.filter(b => b.status !== "desk"));
  const desk = BOTS.filter(b => b.status === "desk");

  /* ---- adult confirmation, remembered for this visit only ---- */
  let adultOK = false;
  try { adultOK = sessionStorage.getItem("adultOK") === "1"; } catch (e) {}
  function confirmAdult() {
    adultOK = true;
    try { sessionStorage.setItem("adultOK", "1"); } catch (e) {}
  }

  /* ---- masthead ---- */
  document.title = (SITE.name || "Wren") + "'s Gallery";
  $("#site-name").textContent = SITE.name || "Wren";
  $("#issue").textContent = SITE.issue || "";
  $("#tagline").textContent = SITE.tagline || "";
  const totalChats = live.reduce((t, b) => t + (Number(b.chats) || 0), 0);
  const countBits = [live.length + " bots"];
  if (SITE.messages) countBits.push(SITE.messages + " messages");
  else if (totalChats) countBits.push(fmt(totalChats) + " chats");
  $("#count").textContent = countBits.join(", ");
  ["#dj-link", "#dj-link-foot"].forEach(sel => {
    const a = $(sel); if (!a) return;
    if (SITE.dreamjourney) a.href = SITE.dreamjourney; else a.hidden = true;
  });
  $("#note").innerHTML = SITE.note
    ? `<p>${esc(SITE.note)}</p><p class="sig">${esc(SITE.name || "Wren")}</p>` : "";
  if (SITE.backdrop) document.documentElement.style.setProperty("--backdrop", `url("${SITE.backdrop}")`);

  /* ---- collections (the folders) ---- */
  const collections = (SITE.collections || []).filter(c => live.some(b => b.collection === c));
  live.forEach(b => { if (b.collection && !collections.includes(b.collection)) collections.push(b.collection); });
  const notes = SITE.collectionNotes || {};

  /* ---- covers ---- */
  function typeset(b) {
    return `<div class="typeset" aria-hidden="true"><span class="initial">${esc(b.name.charAt(0))}</span></div>`;
  }
  function imgHTML(b, src, lazy = true) {
    const st = [b.focus ? `object-position:${b.focus}` : "", b.fit === "whole" ? "object-fit:contain" : ""].filter(Boolean).join(";");
    const pos = st ? ` style="${esc(st)}"` : "";
    const bleed = b.fit === "whole" ? `<img class="bleed" src="${esc(src)}" alt="" aria-hidden="true"${lazy ? ' loading="lazy"' : ""}>` : "";
    return `${bleed}<img src="${esc(src)}" alt=""${lazy ? ' loading="lazy"' : ""}${pos} onerror="this.replaceWith(document.createRange().createContextualFragment(this.dataset.fallback))" data-fallback="${esc(typeset(b))}">`;
  }
  function coverHTML(b, src) {
    const blurred = b.adult && !adultOK ? " blurred" : "";
    return `<div class="cover${blurred}">${b.adult ? '<span class="adult-flag">18+</span>' : ""}${src ? imgHTML(b, src) : typeset(b)}</div>`;
  }
  function chipsHTML(b, n) {
    return `<span class="chips">${b.category ? `<span class="chip cat">${esc(b.category)}</span>` : ""}${
      (b.tags || []).slice(0, n).map(t => `<span class="chip">${esc(t)}</span>`).join("")}</span>`;
  }
  function cardHTML(b) {
    return `<li class="card">
      <button data-bot="${esc(b.id)}" aria-label="${esc(b.name)}${b.title ? ", " + esc(b.title) : ""}${b.adult ? ", 18+" : ""}">
        ${coverHTML(b, b.cover)}
        <span class="card-body">
          <span class="card-name">${esc(b.name)}</span>
          ${b.title ? `<span class="card-title">${esc(b.title)}</span>` : ""}
          ${b.blurb ? `<span class="card-blurb">${prose(b.blurb)}</span>` : ""}
          ${chipsHTML(b, 3)}
          ${b.chats ? `<span class="card-chats">${fmt(b.chats)} chats</span>` : ""}
        </span>
      </button>
    </li>`;
  }

  /* ================= HOME ================= */
  const featured = live.find(b => b.id === SITE.featured) || live[0];
  function renderFeatured() {
    const el = $("#featured");
    if (!featured) { el.hidden = true; return; }
    const b = featured, blur = b.adult && !adultOK;
    el.hidden = false;
    el.innerHTML = `
      <button class="f-art${blur ? " cover blurred" : ""}" data-bot="${esc(b.id)}" aria-label="Open ${esc(b.name)}">
        ${b.cover ? imgHTML(b, b.cover, false) : typeset(b)}
      </button>
      <div class="f-text">
        <p class="f-label">${b.id === SITE.featured ? "Featured" : "Most chatted"}${b.chats ? ` · ${fmt(b.chats)} chats` : ""}</p>
        <h2>${esc(b.name)}</h2>
        ${b.title ? `<p class="f-sub">${esc(b.title)}</p>` : ""}
        ${b.blurb ? `<p class="f-blurb">${prose(b.blurb)}</p>` : ""}
        ${chipsHTML(b, 5)}
        <div class="actions">
          <button class="btn" data-bot="${esc(b.id)}">Read more</button>
          ${b.link ? `<a class="btn btn-ghost" href="${esc(b.link)}" target="_blank" rel="noopener">Chat on DreamJourney</a>` : ""}
        </div>
      </div>`;
  }

  function folderPeek(list) {
    const pics = list.filter(b => b.cover).slice(0, 3);
    while (pics.length < 3 && list[pics.length]) pics.push(list[pics.length]);
    return pics.map((b, i) => {
      const blur = b.adult && !adultOK ? " blurred" : "";
      return `<span class="peek peek-${i}${blur}">${b.cover ? imgHTML(b, b.cover) : typeset(b)}</span>`;
    }).join("");
  }
  function renderFolders() {
    const folders = collections.map(c => {
      const list = live.filter(b => b.collection === c);
      return { name: c, href: "#/folder/" + slug(c), list };
    });
    folders.push({ name: "Every bot", href: "#/all", list: live, all: true });
    $("#folders").innerHTML = folders.map(f => {
      const chats = f.list.reduce((t, b) => t + (Number(b.chats) || 0), 0);
      return `<li class="folder${f.all ? " folder-all" : ""}">
        <a href="${f.href}">
          <span class="folder-tab" aria-hidden="true"></span>
          <span class="folder-peek" aria-hidden="true">${folderPeek(f.list)}</span>
          <span class="folder-name">${esc(f.name)}</span>
          <span class="folder-meta">${f.list.length} bot${f.list.length === 1 ? "" : "s"}${chats ? ` · ${fmt(chats)} chats` : ""}</span>
        </a>
      </li>`;
    }).join("");
  }

  function renderDeskPreview() {
    const el = $("#desk-preview");
    el.hidden = desk.length === 0;
    $("#desk-more").hidden = desk.length <= 3;
    $("#desk-cards").innerHTML = desk.slice(0, 3).map(b => `<li>
      <button class="desk-card" data-bot="${esc(b.id)}">
        <span class="desk-thumb">${coverHTML(b, b.cover)}</span>
        <span class="desk-text">
          <span class="wip">In progress</span>
          <span class="d-name">${esc(b.name)}</span>
          ${b.title ? `<span class="d-title">${esc(b.title)}</span>` : ""}
          ${b.blurb ? `<span class="d-blurb">${prose(b.blurb)}</span>` : ""}
        </span>
      </button>
    </li>`).join("");
  }

  $("#home-search").addEventListener("submit", e => {
    e.preventDefault();
    const q = $("#home-q").value.trim();
    pendingQuery = q;
    location.hash = "#/all";
  });

  /* ================= LIST VIEW (a folder, every bot, or the desk) ================= */
  let mode = { type: "all" };
  let query = "";
  let pendingQuery = null;
  const searchEl = $("#search");

  function haystack(b) {
    return [b.name, b.title, b.collection, b.category, b.pov, b.blurb, ...(b.tags || []), ...(b.warnings || []),
      ...(b.scenes || []).map(s => s.name + " " + (s.line || ""))].join(" ").toLowerCase();
  }
  function matches(b) {
    if (!query) return true;
    const h = haystack(b);
    return query.toLowerCase().split(/\s+/).filter(Boolean).every(w => h.includes(w));
  }
  function baseList() {
    if (mode.type === "desk") return desk;
    if (mode.type === "folder") return live.filter(b => b.collection === mode.name);
    return live;
  }
  function renderTabs() {
    const tabs = [{ label: "Every bot", href: "#/all", on: mode.type === "all", n: live.length }]
      .concat(collections.map(c => ({ label: c, href: "#/folder/" + slug(c), on: mode.type === "folder" && mode.name === c,
        n: live.filter(b => b.collection === c).length })));
    if (desk.length) tabs.push({ label: "On the desk", href: "#/desk", on: mode.type === "desk", n: desk.length });
    $("#tabs").innerHTML = tabs.map(t =>
      `<a class="tab" href="${t.href}"${t.on ? ' aria-current="page"' : ""}>${esc(t.label)} <span class="n">${t.n}</span></a>`).join("");
  }
  function renderList() {
    const base = baseList();
    const shown = base.filter(matches);
    const title = mode.type === "desk" ? "On the desk" : mode.type === "folder" ? mode.name : "Every bot";
    $("#list-title").textContent = title;
    const chats = base.reduce((t, b) => t + (Number(b.chats) || 0), 0);
    $("#list-meta").textContent = `${base.length} bot${base.length === 1 ? "" : "s"}${chats && mode.type !== "desk" ? ` · ${fmt(chats)} chats` : ""}`;
    const blurb = mode.type === "folder" ? notes[mode.name] : mode.type === "desk" ? "Still being written. Ask about any of them." : "";
    $("#list-blurb").hidden = !blurb;
    $("#list-blurb").textContent = blurb || "";
    $("#grid").innerHTML = shown.map(cardHTML).join("");
    $("#empty").hidden = shown.length > 0;
  }
  searchEl.addEventListener("input", () => { query = searchEl.value.trim(); renderList(); });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && !document.querySelector("dialog[open]")) {
      e.preventDefault();
      (!$("#view-list").hidden ? searchEl : $("#home-q")).focus();
    }
  });

  /* ================= ROUTES =================
     #/                 home
     #/folder/<name>    one collection
     #/all              every bot
     #/desk             everything on the desk
     #/<bot-id>         opens that bot (old links keep working)        */
  let lastRoute = "#/";
  function showView(name) {
    $("#view-home").hidden = name !== "home";
    $("#view-list").hidden = name !== "list";
  }
  function route(first) {
    const h = location.hash || "#/";
    if (!h.startsWith("#/")) return;                 // e.g. the skip link
    const path = decodeURIComponent(h.slice(2));
    let m;
    if (path === "") {
      showView("home"); lastRoute = "#/";
    } else if (path === "all" || path === "desk" || (m = path.match(/^folder\/(.+)$/))) {
      const changed = lastRoute !== h;
      if (path === "all") mode = { type: "all" };
      else if (path === "desk") mode = { type: "desk" };
      else {
        const name = collections.find(c => slug(c) === m[1]);
        if (!name) { location.replace("#/"); return; }
        mode = { type: "folder", name };
      }
      if (pendingQuery !== null) { query = pendingQuery; pendingQuery = null; }
      else if (changed) query = "";
      searchEl.value = query;
      showView("list"); renderTabs(); renderList();
      lastRoute = h;
      if (changed && !first) window.scrollTo({ top: $("#shelf").offsetTop - 20 });
    } else {
      // a bot id: open it over whatever is showing (home on a fresh visit)
      if (first) showView("home");
      openBot(path, true);
    }
  }
  window.addEventListener("hashchange", () => route(false));

  /* ---- clicks on any bot card ---- */
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-bot]");
    if (btn && !btn.closest("dialog")) openBot(btn.dataset.bot);
  });

  /* ---- dialogs ---- */
  function openDialog(d) { if (!d.open) d.showModal(); }
  document.addEventListener("click", e => {
    const closer = e.target.closest("[data-close]");
    if (closer) closer.closest("dialog").close();
    const opener = e.target.closest("[data-open]");
    if (opener) openDialog(document.getElementById(opener.dataset.open));
  });
  document.querySelectorAll("dialog").forEach(d => {
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
    renderFeatured(); renderFolders(); renderDeskPreview(); renderList();
    if (afterGate) { const f = afterGate; afterGate = null; f(); }
  });
  $("#gate").addEventListener("close", () => {
    if (!adultOK && afterGate) { afterGate = null; history.replaceState(null, "", lastRoute); }
  });

  /* ---- bot detail ---- */
  const botDialog = $("#bot-dialog");
  let currentImages = [];

  function openBot(id, fromHash) {
    const b = BOTS.find(x => x.id === id);
    if (!b) { if (fromHash) history.replaceState(null, "", lastRoute); return; }
    if (b.adult && !adultOK) return requireAdult(() => openBot(id, fromHash));

    currentImages = [b.cover, ...(b.gallery || [])].filter(Boolean);
    const plate = b.cover
      ? `<button class="cover" data-lb="0" aria-label="View full image">${imgHTML(b, b.cover, false)}</button>`
      : coverHTML(b, "");
    const thumbs = (b.gallery || []).length
      ? `<div class="thumbs">${b.gallery.map((src, i) =>
          `<button data-lb="${i + (b.cover ? 1 : 0)}" aria-label="View image ${i + 1}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join("")}</div>`
      : "";
    const facts = [
      ["Collection", b.collection],
      ["Category", b.category],
      ["Chats", b.chats ? fmt(b.chats) : ""],
      ["POV", b.pov],
      ["Rating", b.adult ? "18+" : ""],
      ["Warnings", (b.warnings || []).join(", ")]
    ].filter(f => f[1]);
    const scenes = (b.scenes || []).length
      ? `<div class="scenes"><h3>Scenes</h3><ol>${b.scenes.map(s =>
          `<li><strong>${esc(s.name)}</strong>${s.line ? `. ${esc(s.line)}` : ""}</li>`).join("")}</ol></div>`
      : "";

    $("#bot-body").innerHTML = `
      <div class="plate">${plate}${thumbs}</div>
      <div class="text">
        <h2 id="bot-name">${esc(b.name)}</h2>
        ${b.title ? `<p class="sub">${esc(b.title)}</p>` : ""}
        ${b.blurb ? `<p class="blurb">${prose(b.blurb)}</p>` : ""}
        ${facts.length ? `<dl class="facts">${facts.map(f => `<dt>${f[0]}</dt><dd>${esc(f[1])}</dd>`).join("")}</dl>` : ""}
        ${(b.tags || []).length ? `<ul class="tags" aria-label="Tags">${b.tags.map(t =>
            `<li><button data-tag="${esc(t)}" aria-label="Show other bots tagged ${esc(t)}">${esc(t)}</button></li>`).join("")}</ul>` : ""}
        ${scenes}
        ${b.link
          ? `<a class="btn" href="${esc(b.link)}" target="_blank" rel="noopener">Chat on DreamJourney</a>`
          : `<p class="sub">${b.status === "desk" ? "Still on the desk." : "Link coming soon."}</p>`}
      </div>`;
    openDialog(botDialog);
    history.replaceState(null, "", "#/" + b.id);
  }

  botDialog.addEventListener("close", () => {
    if (location.hash !== lastRoute) history.replaceState(null, "", lastRoute);
  });
  botDialog.addEventListener("click", e => {
    const tag = e.target.closest("[data-tag]");
    if (tag) {
      botDialog.close();
      pendingQuery = tag.dataset.tag;
      if (lastRoute === "#/all") { query = pendingQuery; pendingQuery = null; searchEl.value = query; renderList(); }
      else location.hash = "#/all";
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
    $("#lb-img").src = currentImages[lbIndex];
    const many = currentImages.length > 1;
    $("#lb-prev").hidden = $("#lb-next").hidden = !many;
    $("#lb-count").textContent = many ? `${lbIndex + 1} of ${currentImages.length}` : "";
  }
  function openLightbox(i) { if (!currentImages.length) return; showImage(i); openDialog(lbox); }
  $("#lb-prev").addEventListener("click", () => showImage(lbIndex - 1));
  $("#lb-next").addEventListener("click", () => showImage(lbIndex + 1));
  lbox.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") showImage(lbIndex - 1);
    if (e.key === "ArrowRight") showImage(lbIndex + 1);
  });

  /* ---- forms (emailed to you through Web3Forms) ---- */
  $("#request-bot").innerHTML = `<option value="">Any / not sure</option>` +
    BOTS.map(b => `<option>${esc(b.name)}</option>`).join("");

  document.querySelectorAll("form[data-form]").forEach(form => {
    const status = $(".form-status", form);
    form.addEventListener("submit", async e => {
      e.preventDefault();
      status.className = "form-status";
      if (!SITE.formKey) {
        status.textContent = "This form isn't connected yet. Add your Web3Forms key to bots.js (README step 6).";
        status.classList.add("err");
        return;
      }
      const data = Object.fromEntries(new FormData(form));
      if (data.botcheck) return; // spam trap
      delete data.botcheck;
      data.access_key = SITE.formKey;
      data.subject = `${form.dataset.form} from your gallery${data.bot ? " — " + data.bot : ""}`;
      data.from_name = (SITE.name || "Wren") + "'s Gallery";
      const btn = $("button[type=submit]", form);
      btn.disabled = true;
      status.textContent = "Sending…";
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        const out = await res.json();
        if (!out.success) throw new Error(out.message || "Not sent");
        form.reset();
        status.textContent = "Sent. Thank you.";
      } catch (err) {
        status.textContent = "That didn't send. Check your connection and try again.";
        status.classList.add("err");
      } finally {
        btn.disabled = false;
      }
    });
  });

  /* ---- go ---- */
  renderFeatured();
  renderFolders();
  renderDeskPreview();
  route(true);
})();
