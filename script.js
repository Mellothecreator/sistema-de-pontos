/* style.css */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #1e1e2f, #2b2b3d);
  color: #f0f0f0;
  margin: 0;
  padding: 0;
}

header {
  background-color: #27293d;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

h1 {
  margin: 0;
  font-size: 2rem;
}

nav button {
  background: #ff3366;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 10px 5px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

nav button:hover {
  background: #ff6688;
}

main {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.tab {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.tab.active {
  display: block;
}

progress {
  width: 100%;
  height: 25px;
  margin: 15px 0;
  border-radius: 12px;
  overflow: hidden;
}

.buttons button {
  background-color: #4caf50;
  border: none;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.buttons button:hover {
  background-color: #66bb6a;
}

.locked {
  opacity: 0.5;
}

textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  resize: vertical;
  margin-bottom: 10px;
}

#savedJournal div {
  background: #333;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
