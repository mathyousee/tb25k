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