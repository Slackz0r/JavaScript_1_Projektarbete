//Lista med frågor
let questions = [
  {
    question: "I frankrike är det olagligt att döpa en gris till 'Napoleon'",
    answer: true,
    type: "bool",
  },
  {
    question: "Vilken av följande är INTE en karaktär i 'Sagan om Ringen'",
    answer: "Beowulf",
    type: "radio",

    alt1: "Aragorn",
    alt2: "Legolas",
    alt3: "Beowulf",
    alt4: "Boromir",
  },
  {
    question: "Vad heter Gustav i mellannamn?",
    answer: "Lars Gunnar",
    type: "radio",

    alt1: "Henning",
    alt2: "Lars Gunnar",
    alt3: "Preben",
    alt4: "Bolvar",
  },
  {
    question: "Vilka av följande ingredienser innehåller en 'Pasta Carbonara'?",
    answer: "Bacon",
    answer2: "Äggula",
    type: "checkbox",
  },
  {
    question: "Banan är en baljväxt",
    answer: false,
    type: "bool",
  },
  {
    question: "Vilka av följande är INTE svenska kungar?",
    answer: "Kung Hans",
    answer2: "Kung Erland",
    type: "checkbox",
  },
  {
    question:
      "Vad heter den mest grundläggande vågformen, som alla andra är uppbyggda utav?",
    answer: "Sinus",
    type: "radio",
  },
  {
    question: "Vilket djur bet Ozzy Osbourne av huvudet på under en konsert?",
    answer: "Fladdermus",
    type: "radio",
  },
  {
    question: "Vem är 'E-type'?",
    answer: "Långhårig eurodisco legend",
    type: "radio",
  },
  {
    question: "Vad är 'E-type' väldigt intresserad av?",
    answer: "Vikingar",
    type: "checkbox",
  },
];

//Element i HTML
let quizBox = document.querySelector("#quiz-box");
let startBtn = document.querySelector("#start-button");
let list = document.querySelector("#list");

//Knappar
let nextBtn = document.createElement("button");
nextBtn.innerText = "Next question";

//Counters
let index = 0;
let score = 0;

//Funktioner

//Funktion för nästa fråga
let nextQuestion = () => {
  //Rensa text
  quizBox.innerHTML = "";
  //Skapa "div" samt lägg till text och knapp
  let div = document.createElement("div");
  div.innerHTML = `
      <h2>Question ${index + 1}</h2>
      <p>${questions[index].question}</p>
      `;
  quizBox.append(div);
  //if-sats för typ av fråga
  if (questions[index].type === "radio") {
    radioFunction();
  } else if (questions[index].type === "bool") {
    boolFunction();
  } else if (questions[index].type === "checkbox") {
    checkboxFunction();
  }
  //Knapp för nästa fråga
  quizBox.append(nextBtn);
  //index får +1
  index++;
};

//Funktion för radio
let radioFunction = () => {
  let radioBtns = document.createElement("div");
  radioBtns.innerHTML = `
    <label for="radio-1">${questions[index].alt1}</label>
    <input type="radio" id="radio-1" name="radio" value="${questions[index].alt1}>

    <label for="radio-2">${questions[index].alt2}</label>
    <input type="radio" id="radio-2" name="radio" value="${questions[index].alt2}>

    <label for="radio-3">${questions[index].alt3}</label>
    <input type="radio" id="radio-3" name="radio" value="${questions[index].alt3}>

    <label for="radio-4">${questions[index].alt4}</label>
    <input type="radio" id="radio-4" name="radio" value="${questions[index].alt4}">
    `;
  quizBox.append(radioBtns);
};

//Funktion för true/false
let boolFunction = () => {
  let boolBtns = document.createElement("div");
  boolBtns.innerHTML = `
    <button>True</button>
    <button>False</button>
    `;
  quizBox.append(boolBtns);
};

//Funktion för checkbox
let checkboxFunction = () => {
  let checkboxes = document.createElement("div");
  checkboxes.innerHTML = `
  <label for="checkbox-1"></label>
  <input type="checkbox" id="checkbox-1" value="">

  <label for="checkbox-2"></label>
  <input type="checkbox" id="checkbox-2" value="">

  <label for="checkbox-3"></label>
  <input type="checkbox" id="checkbox-3" value="">

  <label for="checkbox-4"></label>
  <input type="checkbox" id="checkbox-4" value="">
  `;
  quizBox.append(checkboxes);
};

//Knapp för att starta quiz
startBtn.addEventListener("click", () => {
  startBtn.remove();
  nextQuestion();
});

//Knapp för nästa fråga
nextBtn.addEventListener("click", () => {
  nextQuestion();
});
