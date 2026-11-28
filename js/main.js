/* Shared header, footer and page renderers */
(function () {
  const page = document.body.dataset.page || "";
  const links = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["learn.html", "Learn", "learn"],
    ["recipes.html", "Recipes", "recipes"],
    ["videos.html", "Videos", "videos"],
    ["book.html", "Book", "book"]
  ];
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Dr. Sunaina, I would like to book a consultation.")}`;

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav">
        <a href="index.html" class="logo"><span class="logo-mark">🌿</span><span>${SITE.name}<small>${SITE.doctor}, ${SITE.degree}</small></span></a>
        <button class="nav-toggle" aria-label="Menu">☰</button>
        <ul class="nav-links">
          ${links.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? "active" : ""}">${t}</a></li>`).join("")}
          <li><a href="book.html" class="btn btn-primary" style="color:#fff;padding:10px 20px">Book ₹${SITE.consultFee}</a></li>
        </ul>
      </div>`;
    header.querySelector(".nav-toggle").addEventListener("click", () =>
      header.querySelector(".nav-links").classList.toggle("open"));
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="logo"><span class="logo-mark">🌿</span>${SITE.name}</div>
            <p>${SITE.doctor}, ${SITE.degree} — guiding you back to health through natural hygiene, fresh fruits and a simple, natural lifestyle.</p>
            <div class="socials">
              <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube">YT</a>
              <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
              <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
            </div>
          </div>
          <div><h4>Explore</h4>${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
          <div><h4>Learn</h4>
            <a href="learn.html#natural-food">Natural Food</a>
            <a href="learn.html#food-combining">Food Combining</a>
            <a href="learn.html#natural-movement">Natural Movement</a>
            <a href="learn.html#fasting">Fasting & Rest</a>
          </div>
          <div><h4>Contact</h4>
            <a href="mailto:${SITE.email}">${SITE.email}</a>
            <a href="${wa}" target="_blank" rel="noopener">WhatsApp: ${SITE.phoneDisplay}</a>
            <p>${SITE.location}</p>
            ${SITE.registrationNo ? `<p>Reg. No: ${SITE.registrationNo}</p>` : ""}
          </div>
        </div>
        <div class="disclaimer">
          <strong>Disclaimer:</strong> Information on this website is for educational purposes only and is not a substitute for individual medical advice.
          Do not stop prescribed medicines or begin extended fasting without supervision of a qualified practitioner.
          <br><a href="policies.html#terms" style="display:inline;margin:0">Terms</a> ·
          <a href="policies.html#privacy" style="display:inline;margin:0">Privacy</a> ·
          <a href="policies.html#refund" style="display:inline;margin:0">Refund & Cancellation</a> ·
          <a href="policies.html#contact" style="display:inline;margin:0">Contact</a>
          <br>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.
        </div>
      </div>`;
  }

  document.querySelectorAll("[data-wa]").forEach((a) => { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-email]").forEach((a) => { a.href = `mailto:${SITE.email}`; a.textContent = SITE.email; });
  document.querySelectorAll("[data-phone]").forEach((a) => { a.href = wa; a.textContent = SITE.phoneDisplay; });
  document.querySelectorAll("[data-fee]").forEach((el) => { el.textContent = SITE.consultFee; });
  document.querySelectorAll("[data-minutes]").forEach((el) => { el.textContent = SITE.consultMinutes; });
  document.querySelectorAll("[data-regno]").forEach((el) => { el.textContent = SITE.registrationNo ? `Reg. No: ${SITE.registrationNo}` : ""; });

  /* ---------- Razorpay payment ---------- */
  const payBox = document.getElementById("pay-box");
  if (payBox && !payBox.querySelector("form")) {
    if (SITE.razorpayButtonId) {
      const form = document.createElement("form");
      const sc = document.createElement("script");
      sc.src = "https://checkout.razorpay.com/v1/payment-button.js";
      sc.async = true;
      sc.dataset.payment_button_id = SITE.razorpayButtonId;
      form.appendChild(sc);
      payBox.appendChild(form);
    } else if (SITE.razorpayLink) {
      payBox.innerHTML = `<a href="${SITE.razorpayLink}" target="_blank" rel="noopener" class="btn btn-mango" style="width:100%;justify-content:center">Pay ₹${SITE.consultFee} securely</a>`;
    } else {
      payBox.innerHTML = `<a href="${wa}" target="_blank" rel="noopener" class="btn btn-mango" style="width:100%;justify-content:center">Book on WhatsApp</a>
        <p style="font-size:.85rem;margin-top:10px;text-align:center">Online payment coming soon.</p>`;
    }
  }

  document.querySelectorAll("[data-youtube]").forEach((a) => { a.href = SITE.youtube; });

  /* ---------- helpers ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  window.toast = function (msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3000);
  };

  /* ---------- Recipes ---------- */
  const recipeCard = (r, i) => `
    <article class="card recipe-card" data-i="${i}" tabindex="0">
      <div class="recipe-thumb" style="background:${r.color}">${r.emoji}</div>
      <div class="recipe-body">
        <span class="badge">${esc(r.category)}</span>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.summary)}</p>
        <div class="recipe-meta"><span>⏱ ${esc(r.time)}</span><span>🍽 Serves ${esc(r.serves)}</span></div>
      </div>
    </article>`;

  function openRecipe(r) {
    let modal = document.getElementById("modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "modal"; modal.className = "modal";
      modal.innerHTML = `<div class="modal-box"><button class="modal-close" aria-label="Close">×</button><div class="modal-content"></div></div>`;
      document.body.appendChild(modal);
      modal.addEventListener("click", (e) => { if (e.target === modal || e.target.classList.contains("modal-close")) modal.classList.remove("open"); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.classList.remove("open"); });
    }
    modal.querySelector(".modal-content").innerHTML = `
      <div class="recipe-thumb" style="background:${r.color};border-radius:16px;margin-bottom:20px">${r.emoji}</div>
      <span class="badge">${esc(r.category)}</span>
      <h2>${esc(r.title)}</h2>
      <p style="margin-top:8px">${esc(r.summary)}</p>
      <div class="recipe-meta"><span>⏱ ${esc(r.time)}</span><span>🍽 Serves ${esc(r.serves)}</span></div>
      <h4>What you need</h4><ul>${r.ingredients.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <h4>How to eat</h4><ol>${r.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
      ${r.tip ? `<div class="tip">🌿 <strong>Dr. Sunaina's tip:</strong> ${esc(r.tip)}</div>` : ""}`;
    modal.classList.add("open");
  }

  function bindRecipes(container, list) {
    container.querySelectorAll(".recipe-card").forEach((el) => {
      const open = () => openRecipe(list[+el.dataset.i]);
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    });
  }

  const recipeGrid = document.getElementById("recipe-grid");
  if (recipeGrid) {
    const limit = +recipeGrid.dataset.limit || 0;
    const filtersEl = document.getElementById("recipe-filters");
    const searchEl = document.getElementById("recipe-search");
    let cat = "All";
    const render = () => {
      const q = (searchEl ? searchEl.value : "").toLowerCase();
      let list = RECIPES.map((r, i) => ({ r, i }))
        .filter(({ r }) => cat === "All" || r.category === cat)
        .filter(({ r }) => !q || (r.title + r.summary + r.ingredients.join(" ")).toLowerCase().includes(q));
      if (limit) list = list.slice(0, limit);
      recipeGrid.innerHTML = list.length ? list.map(({ r, i }) => recipeCard(r, i)).join("") : `<div class="empty">No meals found.</div>`;
      bindRecipes(recipeGrid, RECIPES);
    };
    if (filtersEl) {
      const cats = ["All", ...new Set(RECIPES.map((r) => r.category))];
      filtersEl.innerHTML = cats.map((c) => `<button class="chip ${c === "All" ? "active" : ""}">${c}</button>`).join("");
      filtersEl.addEventListener("click", (e) => {
        if (!e.target.classList.contains("chip")) return;
        filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        e.target.classList.add("active"); cat = e.target.textContent; render();
      });
    }
    if (searchEl) searchEl.addEventListener("input", render);
    render();
  }

  /* ---------- Topics ---------- */
  const topicGrid = document.getElementById("topic-grid");
  if (topicGrid) {
    topicGrid.innerHTML = TOPICS.slice(0, +topicGrid.dataset.limit || TOPICS.length).map((t) => `
      <a class="card" href="learn.html#${t.id}">
        <div class="icon">${t.icon}</div><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p><span class="more">Read more →</span>
      </a>`).join("");
  }
  const topicList = document.getElementById("topic-list");
  if (topicList) {
    topicList.innerHTML = TOPICS.map((t) => `
      <article class="card topic" id="${t.id}">
        <div class="icon">${t.icon}</div>
        <div><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p>
        <ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>
      </article>`).join("");
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);
  }
  const combo = document.getElementById("combining-table");
  if (combo) {
    combo.innerHTML = COMBINING.map(([a, b, c]) =>
      `<tr><td><strong>${esc(a)}</strong></td><td class="good">${esc(b)}</td><td class="bad">${esc(c)}</td></tr>`).join("");
  }

  /* ---------- Principles ---------- */
  const pGrid = document.getElementById("principles-grid");
  if (pGrid && typeof PRINCIPLES !== "undefined") {
    pGrid.innerHTML = PRINCIPLES.map((p, i) => `
      <figure class="card principle" data-i="${i}" tabindex="0">
        <img src="${p.image}" alt="${esc(p.text)}" loading="lazy">
        <figcaption><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></figcaption>
      </figure>`).join("");
    pGrid.querySelectorAll(".principle").forEach((el) => {
      const open = () => {
        const p = PRINCIPLES[+el.dataset.i];
        let lb = document.getElementById("lightbox");
        if (!lb) {
          lb = document.createElement("div"); lb.id = "lightbox"; lb.className = "modal";
          lb.innerHTML = `<div class="modal-box lightbox-box"><button class="modal-close" aria-label="Close">×</button><img alt=""></div>`;
          document.body.appendChild(lb);
          lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("modal-close")) lb.classList.remove("open"); });
          document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
        }
        const img = lb.querySelector("img"); img.src = p.image; img.alt = p.text;
        lb.classList.add("open");
      };
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    });
  }

  /* ---------- Videos ---------- */
  const videoGrid = document.getElementById("video-grid");
  if (videoGrid) {
    const limit = +videoGrid.dataset.limit || 0;
    const filtersEl = document.getElementById("video-filters");
    let cat = "All";
    const render = () => {
      let list = VIDEOS.filter((v) => cat === "All" || v.category === cat);
      if (limit) list = list.slice(0, limit);
      videoGrid.innerHTML = list.map((v) => `
        <article class="card video-card">
          <div class="video-frame">${v.youtubeId
            ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId)}" title="${esc(v.title)}" loading="lazy" allowfullscreen></iframe>`
            : `<div style="text-align:center">▶<div style="font-size:0.85rem;margin-top:6px;opacity:.8">Coming soon</div></div>`}</div>
          <div class="video-body"><span class="badge">${esc(v.category)}</span><h3>${esc(v.title)}</h3><p>${esc(v.description)}</p></div>
        </article>`).join("");
    };
    if (filtersEl) {
      const cats = ["All", ...new Set(VIDEOS.map((v) => v.category))];
      filtersEl.innerHTML = cats.map((c) => `<button class="chip ${c === "All" ? "active" : ""}">${c}</button>`).join("");
      filtersEl.addEventListener("click", (e) => {
        if (!e.target.classList.contains("chip")) return;
        filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
        e.target.classList.add("active"); cat = e.target.textContent; render();
      });
    }
    render();
  }

  /* ---------- Forms ---------- */
  const consultForm = document.getElementById("consult-form");
  if (consultForm) {
    consultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(consultForm));
      const msg = `Hello Dr. Sunaina,\n\nName: ${d.name}\nAge: ${d.age}\nPhone: ${d.phone}\nEmail: ${d.email}\nConsultation: ${d.type}\nPayment ID: ${d.payment || "-"}\n\nHealth concern:\n${d.message}`;
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }
  document.querySelectorAll(".newsletter").forEach((f) => f.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = f.querySelector("input").value;
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Subscribe me to updates")}&body=${encodeURIComponent("Please add " + email + " to the Eat Fruits & Heal updates list.")}`;
    toast("Thank you! 🌿");
  }));
})();
