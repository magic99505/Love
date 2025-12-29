const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const iframe = document.getElementById("ytMusic");

// NO button prank 😄
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES button → MUSIC START ❤️
yesBtn.addEventListener("click", () => {
  iframe.src =
    "https://www.youtube.com/embed/PSiJZ9K_x6s?autoplay=1&loop=1&playlist=PSiJZ9K_x6s";

  alert("I knew it 😍❤️ I love you so much!");
});

// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
