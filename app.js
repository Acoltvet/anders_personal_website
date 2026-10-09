const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cursor = document.querySelector(".cursor-hand");

if (finePointer.matches && !reducedMotion.matches && cursor) {
  document.body.classList.add("has-custom-cursor");
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });
  document.addEventListener("pointerleave", () => { cursor.style.opacity = "0"; });
  document.addEventListener("pointerenter", () => { cursor.style.opacity = "1"; });
}
