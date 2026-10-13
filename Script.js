const roles = [
  "Développeur Roblox / Luau",
  "Créateur de jeux",
  "Passionné de code"
];

const typedEl = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      return setTimeout(type, 1800);
    }
    return setTimeout(type, 80);
  }

  charIndex--;
  typedEl.textContent = current.slice(0, charIndex);
  if (charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    return setTimeout(type, 400);
  }
  setTimeout(type, 40);
}

type();

const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

if (window.matchMedia("(hover: none)").matches) {
  glow.style.display = "none";
}
