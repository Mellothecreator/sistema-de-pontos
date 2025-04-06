// script.js
let score = 0;

function addPoints(points) {
  score += points;
  document.getElementById('score').textContent = score;
  updateProgress();
  checkAchievements();
}

function resetPoints() {
  if (confirm("Tem certeza que deseja resetar seus pontos?")) {
    score = 0;
    document.getElementById('score').textContent = score;
    updateProgress();
    resetAchievements();
  }
}

function updateProgress() {
  const progress = document.getElementById('progressBar');
  progress.value = Math.min(score, 100);
}

function checkAchievements() {
  if (score >= 10) unlock('a1');
  if (score >= 30) unlock('a2');
  if (score >= 50) unlock('a3');
  if (score >= 80) unlock('a4');
  if (score >= 100) unlock('a5');
}

function unlock(id) {
  const achievement = document.getElementById(id);
  if (achievement && achievement.classList.contains('locked')) {
    achievement.classList.remove('locked');
    achievement.innerHTML += " ✅";
  }
}

function resetAchievements() {
  ['a1', 'a2', 'a3', 'a4', 'a5'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.add('locked');
    el.innerHTML = el.innerHTML.replace(' ✅', '');
  });
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function saveJournal() {
  const journal = document.getElementById('journal').value;
  const output = document.getElementById('savedJournal');
  const entry = document.createElement('div');
  entry.textContent = `Entrada: ${journal}`;
  output.appendChild(entry);
  document.getElementById('journal').value = '';
}

