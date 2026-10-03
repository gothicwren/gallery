/* The machinery. You shouldn't need to edit this file — bots go in bots.js. */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const BOTS = (window.BOTS || []).filter(b => b && b.id && b.name && b.status !== "hidden");
  const $ = (s, root = document) => root.querySelector(s);
  // blurbs: escape, then turn ~~words~~ into struck-through text
  const prose = s => esc(s).replace(/~~(.+?)~~/g, "<s>$1</s>");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fmt = n => Number(n).toLocaleString("en-US");
  // most-chatted first, like your DreamJourney profile
  const live = BOTS.filter(b => b.status !== "desk")
    .map((b, i) => ({ b, i }))
    .sort((x, y) => (y.b.chats || 0) - (x.b.chats || 0) || x.i - y.i)
    .map(x => x.b);
  const desk = BOTS.filter(b => b.status === "desk");

  let activeCollection = "All";
  let query = "";

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
  const countBits = [live.length + " bots"];
  if (desk.length) countBits.push(desk.length + " on the desk");
  const totalChats = live.reduce((t, b) => t + (Number(b.chats) || 0), 0);
  if (SITE.messages) countBits.push(SITE.messages + " messages");
  else if (totalChats) countBits.push(fmt(totalChats) + " chats");
  $("#count").textContent = countBits.join(", ");
  if (SITE.dreamjourney) $("#dj-link").href = SITE.dreamjourney; else $("#dj-link").hidden = true;
  if (SITE.guide) $("#guide-link").href = SITE.guide; else $(".credit").hidden = true;
  $("#note").innerHTML = SITE.note
    ? `<p>${esc(SITE.note)}</p><p class="sig">${esc(SITE.name || "Wren")}</p>`
    : "";
  if (!SITE.note) $("#note").hidden = true;

  /* ---- collections ---- */
  const collections = ["All"].concat(
    (SITE.collections || []).filter(c => live.some(b => b.collection === c))
  );
  live.forEach(b => { if (b.collection && !collections.includes(b.collection)) collections.push(b.collection); });

  function renderTabs() {
    $("#tabs").innerHTML = collections.map(c => {
      const n = c === "All" ? live.length : live.filter(b => b.collection === c).length;
      return `<button class="tab" data-c="${esc(c)}" aria-pressed="${c === activeCollection}">${esc(c)} <span class="n">${n}</span></button>`;
    }).join("");
  }
  $("#tabs").addEventListener("click", e => {
    const t = e.target.closest(".tab");
    if (!t) return;
    activeCollection = t.dataset.c;
    renderTabs(); renderGrid();
  });

  /* ---- search ---- */
  function haystack(b) {
    return [b.name, b.title, b.collection, b.category, b.pov, b.blurb, ...(b.tags || []), ...(b.warnings || []),
      ...(b.scenes || []).map(s => s.name + " " + (s.line || ""))].join(" ").toLowerCase();
  }
  function matches(b) {
    if (!query) return true;
    const h = haystack(b);
    return query.toLowerCase().split(/\s+/).filter(Boolean).every(w => h.includes(w));
  }
  const searchEl = $("#search");
  searchEl.addEventListener("input", () => { query = searchEl.value.trim(); renderGrid(); renderDesk(); });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && !document.querySelector("dialog[open]")) {
      e.preventDefault(); searchEl.focus();
    }
  });

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

  /* ---- backdrop ---- */
  if (SITE.backdrop) document.documentElement.style.setProperty("--backdrop", `url("${SITE.backdrop}")`);

  /* ---- featured ---- */
  const featured = live.find(b => b.id === SITE.featured);
  function renderFeatured() {
    const el = $("#featured");
    if (!featured) { el.hidden = true; return; }
    const b = featured;
    const blur = b.adult && !adultOK;
    el.hidden = false;
    el.innerHTML = `
      <button class="f-art${blur ? " cover blurred" : ""}" data-bot="${esc(b.id)}" aria-label="Open ${esc(b.name)}">
        ${b.cover ? imgHTML(b, b.cover, false) : typeset(b)}
      </button>
      <div class="f-text">
        <p class="f-label">Featured${b.chats ? ` · ${fmt(b.chats)} chats` : ""}</p>
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
  $("#featured").addEventListener("click", e => {
    const btn = e.target.closest("[data-bot]");
    if (btn) openBot(btn.dataset.bot);
  });

  /* ---- grid ---- */
  function renderGrid() {
    const browsingAll = activeCollection === "All" && !query;
    const shown = live.filter(b =>
      (activeCollection === "All" || b.collection === activeCollection) && matches(b) &&
      !(browsingAll && featured && b.id === featured.id));
    $("#grid").innerHTML = shown.map(b => `<li class="card">
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
      </li>`).join("");
    $("#empty").hidden = shown.length > 0;
  }
  $("#grid").addEventListener("click", e => {
    const btn = e.target.closest("[data-bot]");
    if (btn) openBot(btn.dataset.bot);
  });

  /* ---- on the desk ---- */
  function renderDesk() {
    const shown = desk.filter(matches);
    $("#desk-section").hidden = desk.length === 0;
    $("#desk").innerHTML = shown.map(b => `<li>
      <span class="d-name">${esc(b.name)}</span>${b.title ? ` <span class="d-title">${esc(b.title)}</span>` : ""}
      ${b.blurb ? `<p>${prose(b.blurb)}</p>` : ""}
    </li>`).join("") || `<li><p>Nothing on the desk matches that.</p></li>`;
  }

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
    renderGrid(); renderFeatured();
    if (afterGate) { const f = afterGate; afterGate = null; f(); }
  });
  $("#gate").addEventListener("close", () => {
    if (!adultOK && location.hash.startsWith("#/")) history.replaceState(null, "", location.pathname);
  });

  /* ---- bot detail ---- */
  const botDialog = $("#bot-dialog");
  let currentImages = [];

  function openBot(id, fromHash) {
    const b = BOTS.find(x => x.id === id);
    if (!b) return;
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
    if (!fromHash) history.replaceState(null, "", "#/" + b.id);
  }

  botDialog.addEventListener("close", () => {
    if (location.hash.startsWith("#/")) history.replaceState(null, "", location.pathname + location.search);
  });
  botDialog.addEventListener("click", e => {
    const tag = e.target.closest("[data-tag]");
    if (tag) {
      botDialog.close();
      activeCollection = "All"; renderTabs();
      searchEl.value = tag.dataset.tag; query = tag.dataset.tag;
      renderGrid(); renderDesk();
      $("#shelf").scrollIntoView({ behavior: "smooth" });
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

  /* ---- links straight to a bot: yoursite/#/clarke-hayes ---- */
  function fromHash() {
    const m = location.hash.match(/^#\/(.+)$/);
    if (m) openBot(decodeURIComponent(m[1]), true);
  }
  window.addEventListener("hashchange", fromHash);

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
  renderTabs();
  renderFeatured();
  renderGrid();
  renderDesk();
  fromHash();
})();
