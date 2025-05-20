/* ========== TRADUCTION MULTILINGUE + SAUVEGARDE ========== */
function translatePage(lang) {
  fetch(`./lang/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.style.opacity = 0;
          setTimeout(() => {
            el.textContent = data[key];
            el.style.opacity = 1;
          }, 150);
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (data[key]) {
          el.placeholder = data[key];
        }
      });

      localStorage.setItem("lang", lang);
    })
    .catch((err) => console.error("Erreur de chargement de la langue :", err));
}

/* ========== DOM READY ========== */
document.addEventListener("DOMContentLoaded", () => {
  /* LANGUE */
  const select = document.getElementById("language-select");
  let savedLang = localStorage.getItem("lang");

  if (!savedLang) {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ["fr", "en", "es", "it"];
    savedLang = supportedLangs.includes(browserLang) ? browserLang : "fr";
    localStorage.setItem("lang", savedLang);
  }

  // ✅ Toujours appliquer la langue même si le select est absent
  translatePage(savedLang);

  if (select) {
    select.value = savedLang;
    select.addEventListener("change", (e) => {
      translatePage(e.target.value);
    });
  }

  /* COOKIES */
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (banner && acceptBtn && rejectBtn) {
    if (
      localStorage.getItem("cookiesAccepted") ||
      localStorage.getItem("cookiesRejected")
    ) {
      banner.style.display = "none";
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", true);
      banner.style.display = "none";
    });

    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesRejected", true);
      banner.style.display = "none";
    });
  }

  /* ANIMATION DES CARTES */
  const cards = document.querySelectorAll(".modele-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );
  cards.forEach((card) => observer.observe(card));

  /* FORMULAIRE CANDIDATURE */
  const form = document.getElementById("candidature-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const res = await fetch("/api/candidature", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const toast = document.createElement("div");
          toast.textContent = "✅ Candidature envoyée avec succès !";
          toast.style.position = "fixed";
          toast.style.bottom = "20px";
          toast.style.left = "50%";
          toast.style.transform = "translateX(-50%)";
          toast.style.background = "#4CAF50";
          toast.style.color = "white";
          toast.style.padding = "15px 30px";
          toast.style.borderRadius = "5px";
          toast.style.zIndex = "9999";
          toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
          toast.style.opacity = "0";
          toast.style.transition = "opacity 0.3s ease-in-out";

          document.body.appendChild(toast);
          setTimeout(() => {
            toast.style.opacity = "1";
          }, 100);

          form.reset();
          form.style.display = "none";

          setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => {
              toast.remove();
              window.location.href = "index.html";
            }, 300);
          }, 3000);
        } else {
          alert("❌ Une erreur est survenue lors de l'envoi.");
        }
      } catch (error) {
        console.error("Erreur réseau :", error);
        alert("❌ Une erreur réseau est survenue.");
      }
    });
  }
});

/* ========== TRADUCTION DE LA DATE ========== */
const lang = localStorage.getItem("lang") || "fr";
fetch(`./lang/${lang}.json`)
  .then((res) => res.json())
  .then((data) => {
    const d = new Date("2025-05-04");
    const day = data.days[d.getDay()];
    const month = data.months[d.getMonth()];
    const dateStr = data.dateFormat
      .replace("{{day}}", day)
      .replace("{{date}}", d.getDate())
      .replace("{{month}}", month)
      .replace("{{year}}", d.getFullYear());

    const dateEl = document.querySelector(".date");
    if (dateEl) dateEl.textContent = dateStr;
  });
