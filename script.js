// ===============================
// WhatsApp CTA Buttons + Demo scroll
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");
  const whatsappBtnNav = document.getElementById("whatsappBtnNav");
  const whatsappBtnBottom = document.getElementById("whatsappBtnBottom");
  const scrollDemoBtn = document.getElementById("scrollDemoBtn");

  // Local: 0333 4575538 → WhatsApp international: +92 333 4575538
  const phoneNumber = "923334575538"; // correct number, no plus sign
  const message = encodeURIComponent(
    "Assalam o Alaikum. I want to try the Airex AI Receptionist 3‑day free trial for my clinic."
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  function openWhatsApp(e) {
    if (e) e.preventDefault();
    window.open(whatsappURL, "_blank");
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", openWhatsApp);
  }

  if (whatsappBtnNav) {
    whatsappBtnNav.addEventListener("click", openWhatsApp);
  }

  if (whatsappBtnBottom) {
    whatsappBtnBottom.addEventListener("click", openWhatsApp);
  }

  if (scrollDemoBtn) {
    scrollDemoBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const howSection = document.getElementById("how");
      if (howSection) {
        howSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
