// Variables para el lienzo y contexto 2D
const canvas = document.getElementById('stadiumCanvas');
const ctx = canvas.getContext('2d');

// Variables para objetos
let stands = [];
let goals = [];
let lights = [];

// Función para aplicar la perspectiva
function applyPerspective(x, y, z) {
  const scale = 500 / (500 + z);
  const newX = x * scale + canvas.width / 2;
  const newY = y * scale + canvas.height / 2;
  return { x: newX, y: newY };
}

// Dibujar estadio
function drawStadium() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#2e8b57';
  const stadiumWidth = 400;
  const stadiumHeight = 200;
  const stadiumX = canvas.width / 2 - stadiumWidth / 2;
  const stadiumY = canvas.height / 2 - stadiumHeight / 2;
  ctx.fillRect(stadiumX, stadiumY, stadiumWidth, stadiumHeight);
}

// Función para dibujar gradas
function drawStands() {
  stands.forEach(stand => {
    const { x, y } = applyPerspective(stand.x, stand.y, stand.z);
    ctx.fillStyle = '#808080';
    ctx.fillRect(x, y, 60, 30);  // Tamaño y posición de las gradas
  });
}

// Función para dibujar la portería
function drawGoal() {
  goals.forEach(goal => {
    const { x, y } = applyPerspective(goal.x, goal.y, goal.z);
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(x, y, 120, 10);  // Tamaño de la portería
  });
}

// Función para dibujar las torres de luz
function drawLights() {
  lights.forEach(light => {
    const { x, y } = applyPerspective(light.x, light.y, light.z);
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(x - 10, y - 40, 20, 40);  // Torre de luz
  });
}

// Función para agregar las gradas
function addStands() {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 200 - 100;
  const z = Math.random() * 200;  // Profundidad
  stands.push({ x, y, z });
  drawStadium();
  drawStands();
  drawGoal();
  drawLights();
}

// Función para agregar la portería
function addGoal() {
  const x = 0;
  const y = 0;
  const z = 100;  // Profundidad de la portería
  goals.push({ x, y, z });
  drawStadium();
  drawStands();
  drawGoal();
  drawLights();
}

// Función para agregar la torre de luz
function addLight() {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 200 - 100;
  const z = Math.random() * 300;
  lights.push({ x, y, z });
  drawStadium();
  drawStands();
  drawGoal();
  drawLights();
}

// Función para reiniciar el estadio
function resetStadium() {
  stands = [];
  goals = [];
  lights = [];
  drawStadium();
}

// Configuración de eventos de los botones
document.getElementById('addStands').addEventListener('click', addStands);
document.getElementById('addGoal').addEventListener('click', addGoal);
document.getElementById('addLight').addEventListener('click', addLight);
document.getElementById('reset').addEventListener('click', resetStadium);

// Inicializar el estadio
drawStadium();
