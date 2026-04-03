let perguntas = [
  { pergunta: "Qual é a capital do Brasil?", respostas: ["São Paulo", "Brasília", "Rio de Janeiro"], correta: 1 },
  { pergunta: "Quanto é 2 + 2?", respostas: ["3", "4", "5"], correta: 1 },
  { pergunta: "Qual é a cor do céu?", respostas: ["Azul", "Verde", "Vermelho"], correta: 0 }
];

let perguntaIndex = 0;
let acertos = 0;
let erros = 0;
let estado = "jogo"; // "jogo" ou "fim"

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(220);

  if (estado === "jogo") {
    mostrarPergunta();
  } else if (estado === "fim") {
    mostrarResultado();
  }
}

function mostrarPergunta() {
  fill(0);
  text(perguntas[perguntaIndex].pergunta, width / 2, 100);

  for (let i = 0; i < perguntas[perguntaIndex].respostas.length; i++) {
    let x = width / 2;
    let y = 200 + i * 70;
    fill(100, 150, 255);
    rectMode(CENTER);
    rect(x, y, 300, 50, 10);
    fill(0);
    text(perguntas[perguntaIndex].respostas[i], x, y);
  }
}

function mousePressed() {
  if (estado === "jogo") {
    for (let i = 0; i < perguntas[perguntaIndex].respostas.length; i++) {
      let x = width / 2;
      let y = 200 + i * 70;
      if (mouseX > x - 150 && mouseX < x + 150 && mouseY > y - 25 && mouseY < y + 25) {
        if (i === perguntas[perguntaIndex].correta) {
          acertos++;
        } else {
          erros++;
        }
        perguntaIndex++;
        if (perguntaIndex >= perguntas.length) {
          estado = "fim";
        }
      }
    }
  }
}

function mostrarResultado() {
  fill(0);
  textSize(32);
  text("Fim do jogo!", width / 2, height / 2 - 60);
  textSize(24);
  text("Acertos: " + acertos, width / 2, height / 2);
  text("Erros: " + erros, width / 2, height / 2 + 40);
  textSize(40);
  fill(255, 0, 0);
  text("Treinaldinho", width / 2, 80); // Logo do nome
}
