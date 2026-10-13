// ===== Texte qui s'écrit tout seul =====
// Modifie cette liste avec tes propres titres
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

// ===== Lueur qui suit la souris =====
const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// ===== Pas de lueur sur mobile/tactile =====
if (window.matchMedia("(hover: none)").matches) {
  glow.style.display = "none";
}
