// script.js
let score = 0;
const scoreDisplay = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const achievements = document.querySelectorAll("#achievements li");

function updateUI() {
  scoreDisplay.textContent = score;
  progressBar.value = score;
  updateAchievements();
}

function addPoint() {
  score++;
  updateUI();
}

function resetScore() {
  if (confirm("Tem certeza que deseja resetar seus pontos?")) {
    score = 0;
    updateUI();
  }
}

function updateAchievements() {
  achievements.forEach((item, index) => {
    const pointReqs = [10, 50, 100];
    if (score >= pointReqs[index]) {
      item.classList.remove("locked");
    } else {
      item.classList.add("locked");
    }
  });
}

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab + "-tab").classList.add("active");
}

updateUI();
