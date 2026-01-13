/* ============================
   THEME TOGGLE (Dark / Light)
============================ */

const htmlEl = document.documentElement;
const themeBtn = document.getElementById("toggle-theme");

// Load saved theme
const savedTheme = localStorage.getItem("avi-theme");
if (savedTheme === "light" || savedTheme === "dark") {
  htmlEl.classList.remove("light", "dark");
  htmlEl.classList.add(savedTheme);
} else {
  htmlEl.classList.add("dark");
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  htmlEl.classList.remove("light", "dark");
  htmlEl.classList.add(newTheme);

  localStorage.setItem("avi-theme", newTheme);
});


/* ============================
   MOBILE MENU (Hamburger)
============================ */

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});


/* ============================
   SMOOTH SCROLL FOR INTERNAL LINKS
============================ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


/* ============================
   CUSTOM CURSOR
============================ */

const cursorSmall = document.getElementById("cursor-small-dot");
const cursorBig = document.getElementById("cursor-big-dot");

if (cursorSmall && cursorBig) {
  let hideTimeout;

  const moveCursor = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursorSmall.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    cursorBig.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
  };

  const handleMouseMove = (e) => {
    cursorSmall.classList.remove("hidden");
    cursorBig.classList.remove("hidden");

    window.requestAnimationFrame(() => moveCursor(e));

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      cursorSmall.classList.add("hidden");
      cursorBig.classList.add("hidden");
    }, 900);
  };

  window.addEventListener("mousemove", handleMouseMove);
}
