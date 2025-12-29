const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const iframe = document.getElementById("ytMusic");

let isPlaying = true;

// No button prank 😄
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button action ❤️
yesBtn.addEventListener("click", () => {
  alert("I knew it 😍❤️ I love you so much!");
});

// Toggle music
function toggleMusic() {
  if (isPlaying) {
    iframe.src = "";
  } else {
    iframe.src =
      "https://www.youtube.com/embed/PSiJZ9K_x6s?autoplay=1&loop=1&playlist=PSiJZ9K_x6s";
  }
  isPlaying = !isPlaying;
}

// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
