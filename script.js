const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

document.querySelectorAll(".placeholder-grid").forEach((grid) => {
  grid.querySelectorAll(".placeholder-item").forEach((item, index) => {
    if (!item.classList.contains("reveal")) {
      item.classList.add("reveal");
    }
    item.style.setProperty("--reveal-delay", `${index * 70}ms`);
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}
