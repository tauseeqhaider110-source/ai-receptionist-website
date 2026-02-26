// ===============================
// WhatsApp CTA Buttons
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");
  const whatsappBtnNav = document.getElementById("whatsappBtnNav");

  const phoneNumber = "923334575530"; // 0333 4575530
  const message = encodeURIComponent(
    "Hello, I want to set up the AI Receptionist system for my clinic/business and become one of the first users."
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(whatsappURL, "_blank");
    });
  }

  if (whatsappBtnNav) {
    whatsappBtnNav.addEventListener("click", function (e) {
      e.preventDefault();
      window.open(whatsappURL, "_blank");
    });
  }
});
