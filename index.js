//Lista med frågor
let questions = [
  {
    question: "I frankrike är det olagligt att döpa en gris till 'Napoleon'",
    correctAnswer: true,
    type: "bool",
  },
  {
    question: "Vilken av följande är INTE en karaktär i 'Sagan om Ringen'",
    correctAnswer: "Beowulf",
    type: "radio",

    alt1: "Aragorn",
    alt2: "Legolas",
    alt3: "Beowulf",
    alt4: "Boromir",
  },
  {
    question: "Vad heter Gustav i mellannamn?",
    correctAnswer: "Lars Gunnar",
    type: "radio",

    alt1: "Henning",
    alt2: "Lars Gunnar",
    alt3: "Preben",
    alt4: "Bolvar",
  },
  {
    question: "Vilka av följande ingredienser innehåller en 'Pasta Carbonara'?",
    correctAnswer: "Bacon",
    correctAnswer2: "Äggula",
    type: "checkbox",

    alt1: "Bacon",
    alt2: "Sparris",
    alt3: "Tomat",
    alt4: "Äggula",
  },
  {
    question: "Banan är en baljväxt",
    correctAnswer: false,
    type: "bool",
  },
  {
    question: "Vilka av följande är INTE svenska kungar?",
    correctAnswer: "Hans IV",
    correctAnswer2: "Erland II",
    type: "checkbox",

    alt1: "Gustav Vasa",
    alt2: "Hans IV",
    alt3: "Karl XII",
    alt4: "Erland II",
  },
  {
    question:
      "Vad heter den mest grundläggande vågformen, som alla andra är uppbyggda utav?",
    correctAnswer: "Sinus",
    type: "radio",

    alt1: "Sågtand",
    alt2: "Sinus",
    alt3: "Square",
    alt4: "Distortion",
  },
  {
    question: "Vilket djur bet Ozzy Osbourne av huvudet på under en konsert?",
    correctAnswer: "Fladdermus",
    type: "radio",

    alt1: "Hyena",
    alt2: "Sork",
    alt3: "Fladdermus",
    alt4: "Råtta",
  },
  {
    question: "Vem är 'E-type'?",
    correctAnswer: "Långhårig eurodisco legend",
    type: "radio",

    alt1: "Jesus",
    alt2: "Discons fader",
    alt3: "Vikingahövding",
    alt4: "Långhårig eurodisco legend",
  },
  {
    question: "Vad är 'E-type' väldigt intresserad av?",
    correctAnswer: "Vikingar",
    correctAnswer2: "Mjöd",
    type: "checkbox",

    alt1: "Aliens",
    alt2: "Mjöd",
    alt3: "Vikingar",
    alt4: "Kattungar",
  },
];

//Element i HTML
let quizBox = document.querySelector("#quiz-box");
let viewer = document.querySelector("#viewer");
let startBtn = document.querySelector("#start-button");
let darkMode = document.querySelector("#dark-mode");

//Knappar

//Knapp för nästa fråga samt kolla svar
let nextBtn = document.createElement("button");
nextBtn.innerText = "Next question";
let trueBtn = document.querySelector("#true");
let falseBtn = document.querySelector("#false");

//Counters
let index = 0;
let score = 0;

//Arrayer
let answerArray = [];
let scoreboard = {
  totalScore: 0,
  answeredQuestions: [],
};

//Funktioner

//Funktion för nästa fråga
let nextQuestion = (isStart = false) => {
  //index får +1 om det inte är "start button"
  if (isStart === false) {
    index++;
  }

  //Tömmer answerArray
  answerArray = [];
  //Rensa text
  quizBox.innerHTML = "";

  //Gör om "Next question" till "Show results" på sista frågan
  if (index === questions.length - 1) {
    nextBtn.innerText = "Show results";
  }
  //Om index är över objektet.length - skriv ut scoreboard
  if (index >= questions.length) {
    scoreboardFunction();
  } else {
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
    //Skapar "next question" om inte bool
    if (questions[index].type !== "bool") {
      //Knapp för nästa fråga
      quizBox.append(nextBtn);
    }
  }
};

//Funktion för att se om svaret stämmer
let validateAnswer = () => {
  console.log(answerArray);
  //Om type = checkbox
  if (questions[index].type === "checkbox") {
    //Kollar answer 1
    const isFirstAnswerCorrect = answerArray.includes(
      questions[index].correctAnswer
    );
    //Kollar answer 2
    const isSecondAnswerCorrect = answerArray.includes(
      questions[index].correctAnswer2
    );
    //Matchar om båda stämmer
    if (isFirstAnswerCorrect && isSecondAnswerCorrect) {
      return true;
    } else {
      return false;
    }
    //Om type = radio/bool
  } else {
    if (answerArray.includes(questions[index].correctAnswer)) {
      return true;
    } else {
      return false;
    }
  }
};

//Funktion för att få ut värdet från checkboxes
let checkboxAnswerFunction = () => {
  let checkbox = document.querySelectorAll("[type='checkbox']:checked");
  //Loopar alla checkade checkboxar
  checkbox.forEach((box) => {
    answerArray.push(box.value);
  });
};

//Funktion för att få ut värdet från radio buttons
let radioAnswerFunction = () => {
  let radio = document.querySelector("[type='radio']:checked");
  answerArray.push(radio.value);
};

//Funktion för radio
let radioFunction = () => {
  let radioBtns = document.createElement("div");
  radioBtns.innerHTML = `
    <label for="radio-1">${questions[index].alt1}</label>
    <input type="radio" id="radio-1" name="radio" value="${questions[index].alt1}">
    
    <label for="radio-2">${questions[index].alt2}</label>
    <input type="radio" id="radio-2" name="radio" value="${questions[index].alt2}">
    
    <label for="radio-3">${questions[index].alt3}</label>
    <input type="radio" id="radio-3" name="radio" value="${questions[index].alt3}">
    
    <label for="radio-4">${questions[index].alt4}</label>
    <input type="radio" id="radio-4" name="radio" value="${questions[index].alt4}">
    `;
  quizBox.append(radioBtns);
};

//Funktion för true/false
let boolFunction = () => {
  let boolBtns = document.createElement("div");

  boolBtns.innerHTML = `
      <button id="true">True</button>
      <button id="false">False</button>
      `;
  quizBox.append(boolBtns);
};

//Funktion för checkbox
let checkboxFunction = () => {
  let checkboxes = document.createElement("div");
  checkboxes.innerHTML = `
    <label for="checkbox-1">${questions[index].alt1}</label>
    <input type="checkbox" id="checkbox-1" value="${questions[index].alt1}">
  
    <label for="checkbox-2">${questions[index].alt2}</label>
    <input type="checkbox" id="checkbox-2" value="${questions[index].alt2}">
  
    <label for="checkbox-3">${questions[index].alt3}</label>
    <input type="checkbox" id="checkbox-3" value="${questions[index].alt3}">
  
    <label for="checkbox-4">${questions[index].alt4}</label>
    <input type="checkbox" id="checkbox-4" value="${questions[index].alt4}">
    `;
  quizBox.append(checkboxes);
};

//Funktion för att skriva ut resultat
let scoreboardFunction = () => {
  //Skriver ut total poäng
  let scoreText = document.createElement("h2");
  scoreText.innerText = `
  Total score: ${scoreboard.totalScore}
  (${scoreboard.totalScore * 10}%)
  `;
  //Ändrar färg beroende på resultat
  quizBox.append(scoreText);
  if (scoreboard.totalScore <= questions.length * 0.5) {
    scoreText.style.color = "red";
  } else if (scoreboard.totalScore <= questions.length * 0.75) {
    scoreText.style.color = "orange";
  } else {
    scoreText.style.color = "green";
  }

  //Sätter index till 0 för att kunna loopa igenom igen
  index = 0;
  //Loopar igenom scoreboard answers och skriver ut
  scoreboard.answeredQuestions.forEach((answer) => {
    let answerDiv = document.createElement("div");
    answerDiv.innerHTML = `
    <p>${answer.questionTitle}</p>
    <p>${answer.answer}</p>
    `;
    quizBox.append(answerDiv);
    //Rätt svar- görn färg, fel svar- röd färg
    if (answer.answer === questions[index].correctAnswer) {
      answerDiv.style.color = "green";
    } else {
      answerDiv.style.color = "red";
    }
    index++;
  });
};

//Knapp för att starta quiz
startBtn.addEventListener("click", () => {
  startBtn.remove();
  //isStart = true
  nextQuestion(true);
});

//Knapp för nästa fråga
nextBtn.addEventListener("click", () => {
  console.log(questions[index].type, index);
  //Kollar typ av fråga
  if (questions[index].type === "checkbox") {
    checkboxAnswerFunction();
  } else if (questions[index].type === "radio") {
    radioAnswerFunction();
  }
  //Lägger till poäng om svaret är rätt
  const isAnswerCorrect = validateAnswer();
  if (isAnswerCorrect === true) {
    scoreboard.totalScore++;
  }
  //Lägger till fråga + svar i scoreboard array
  scoreboard.answeredQuestions.push({
    questionTitle: questions[index].question,
    answer: answerArray.join(", "),
  });
  //Nästa fråga
  nextQuestion();
});

//Knapp för dark mode
darkMode.addEventListener("click", () => {
  viewer.classList.toggle("darkMode");
});

trueBtn.addEventListener("click", () => {
  answerArray.push(true);
  quizBox.append(nextBtn);
});
