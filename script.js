"use strict";

var root = document.querySelector(":root");

function spotlight(e) {
  root.style.setProperty("--x", e.pageX + "px");
  root.style.setProperty("--y", e.pageY + "px");
  document.getElementById('bg').style.filter = 'brightness(1)';
}

function resetSpotlight() {
  document.getElementById('bg').style.filter = 'brightness(0.1)';
}

window.addEventListener("pointermove", spotlight);
window.addEventListener("pointerdown", spotlight);
window.addEventListener("pointerup", resetSpotlight);
window.addEventListener("pointerleave", resetSpotlight);
