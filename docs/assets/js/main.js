"use strict";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  setYear();
  try {
    const config = await loadConfig();
    applyConfig(config);
  } catch (err) {
    // Fallback: keep placeholders, but ensure year shows and countdown is inert
    console.warn("Failed to load site config:", err);
  }

  // Load dynamic sections independent of site config
  loadUpdates().catch((e) => console.warn("Updates load skipped:", e));
  loadFAQ().catch((e) => console.warn("FAQ load skipped:", e));
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

async function loadConfig() {
  const res = await fetch("./assets/site.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Config fetch failed: ${res.status}`);
  return res.json();
}

function applyConfig(cfg) {
  if (!cfg || !cfg.event) return;

  const { event, registration } = cfg;
  const dateISO = event.date;
  const timeZone = event.timezone || "America/Chicago";
  const name = event.name || "MN Taco Bell 25K";
  const venueName = event.venue?.name || "TBD Venue";
  const venueAddr = event.venue?.address || "TBD Address, MN";
  const venueCityState = event.venue?.cityState || "TBD, MN";

  // Update title
  try {
    document.title = `${name} – Official Site`;
  } catch {}

  // Event date + location text
  const timeEl = document.getElementById("event-date");
  if (timeEl && dateISO) {
    timeEl.setAttribute("datetime", dateISO);
    timeEl.textContent = formatEventDate(dateISO, timeZone);
  }

  setText("#event-citystate", venueCityState);
  setText("#event-citystate-2", venueCityState);
  setText("#venue", venueName);

  // Registration link
  const regLink = document.querySelector("[data-registration-link]");
  if (regLink && registration?.url) {
    regLink.setAttribute("href", registration.url);
  }

  // Maps and directions
  const encoded = encodeURIComponent(venueAddr);
  const gmaps = document.getElementById("google-directions");
  if (gmaps) {
    gmaps.href = `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;
  }
  const amaps = document.getElementById("apple-directions");
  if (amaps) {
    amaps.href = `http://maps.apple.com/?daddr=${encoded}`;
  }
  const mapIframe = document.querySelector("#location iframe");
  if (mapIframe) {
    mapIframe.src = `https://www.google.com/maps?q=${encoded}&output=embed`;
  }

  // JSON-LD update
  try {
    const ld = document.getElementById("event-jsonld");
    if (ld?.textContent) {
      const data = JSON.parse(ld.textContent);
      if (dateISO) data.startDate = dateISO;
      data.name = name;
      data.location = data.location || {};
      data.location.name = venueName;
      data.location.address = venueAddr;
      ld.textContent = JSON.stringify(data);
    }
  } catch (e) {
    console.warn("JSON-LD update skipped:", e);
  }

  // Countdown
  if (dateISO) {
    setupCountdown(dateISO);
  }
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el && value) el.textContent = value;
}

function formatEventDate(dateISO, timeZone) {
  try {
    const d = new Date(dateISO);
    const fmt = new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone
    });
    return fmt.format(d);
  } catch {
    return "TBD";
  }
}

function setupCountdown(dateISO) {
  const el = document.getElementById("countdown");
  if (!el) return;

  const target = new Date(dateISO).getTime();

  function render() {
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      el.textContent = "Race day!";
      return;
    }

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);

    el.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m`;
  }

  render();
  // Update every 30 seconds to reduce CPU while staying fresh
  const id = setInterval(() => {
    render();
    if (Date.now() >= target) {
      clearInterval(id);
    }
  }, 30000);
}

function pad(n) {
  return String(n).padStart(2, "0");
}

// ---- Dynamic sections ----
async function loadUpdates() {
  const list = document.querySelector("#updates-list, #updates ul");
  if (!list) return;
  const res = await fetch("./updates.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`updates.json fetch failed: ${res.status}`);
  const items = await res.json();
  if (!Array.isArray(items)) return;

  list.innerHTML = "";
  for (const it of items) {
    const li = document.createElement("li");
    li.className = "p-4 border rounded";

    const d = document.createElement("div");
    d.className = "text-sm text-zinc-500";
    d.textContent = it.date || "";

    const t = document.createElement("div");
    t.className = "font-semibold";
    t.textContent = it.title || "";

    const b = document.createElement("div");
    b.className = "text-sm text-zinc-700";
    b.textContent = it.body || "";

    li.append(d, t, b);
    list.appendChild(li);
  }
}

async function loadFAQ() {
  const container = document.querySelector("#faq-list, #faq .grid");
  if (!container) return;
  const res = await fetch("./faq.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`faq.json fetch failed: ${res.status}`);
  const items = await res.json();
  if (!Array.isArray(items)) return;

  container.innerHTML = "";
  for (const it of items) {
    const details = document.createElement("details");
    details.className = "p-4 border rounded";

    const summary = document.createElement("summary");
    summary.className = "font-semibold cursor-pointer";
    summary.textContent = it.question || "Question";

    const p = document.createElement("p");
    p.className = "mt-2 text-sm text-zinc-700";
    // Basic support for simple HTML answers: default to textContent for safety, allow explicit html flag
    if (it.html === true && typeof it.answer === "string") {
      p.innerHTML = it.answer;
    } else {
      p.textContent = it.answer || "";
    }

    details.append(summary, p);
    container.appendChild(details);
  }
}