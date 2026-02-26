// ===============================
// Neon Animated Background
// ===============================

const canvas = document.getElementById("neonCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];

class NeonLine {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = 100 + Math.random() * 200;
    this.speed = 0.4 + Math.random() * 0.8;
    this.angle = Math.random() * Math.PI * 2;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 224, 255, 0.6)";
    ctx.lineWidth = 1.2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00e0ff";

    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + Math.cos(this.angle) * this.length,
      this.y + Math.sin(this.angle) * this.length
    );

    ctx.stroke();
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    if (
      this.x < -200 ||
      this.x > canvas.width + 200 ||
      this.y < -200 ||
      this.y > canvas.height + 200
    ) {
      this.reset();
    }
  }
}

for (let i = 0; i < 30; i++) {
  lines.push(new NeonLine());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach((line) => {
    line.update();
    line.draw();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


// ===============================
// WhatsApp CTA Button
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {

      const phoneNumber = "923334575538"; 

      const message = encodeURIComponent(
        "Hello, I want to set up the AI Receptionist system for my business."
      );

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappURL, "_blank");
    });
  }
});