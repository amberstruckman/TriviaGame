var correctAnswers = 0;
var wrongAnswers = 0;
var noAnswer = 0;
var timer = 30;

//this is an array of objects.
var UNQuestion = [{
    question: "What was the UN's predecessor organization?",
    choices: ["WTO", "NATO", "League of Nations", "EU" ],
    validAnswer: 2
    }, {
    question:"Who inspired the creation of the UN",
    choices: ["Woodrow Wilson", "Franklin D. Roosevelt", "Theodore Roosevelt", "Jimmy Carter"],
    validAnswer: 1
    
    }, {
    question:"What is the name of the first woman to be appionted Deputy-Secretary-General of the UN?",
    choices: ["Eleanor Roosevelt", "Abilgal Adams", "Mother Teresa", "Louise Frechette"],
    validAnswer: 3
    
    }, {
    question:"How many original member nations signed the charter of the United Nations back in 1945?",
    choices: ["5", "51", "195", "7"],
    validAnswer: 1
}];



function triviaQuestions(){
       for (let i = 0; i < UNQuestion.length; i++) {
        displayQuestion(UNQuestion[i], i);
        }
}

function displayQuestion(object, index){ 
    
    var questionNode = document.createElement("p");
    
    var answersNode = document.createElement("ul");
    for (let i = 0; i < object.choices.length; i++) {
       let answerItem = document.createElement("li");
       let radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("name", "question-" + index); //limits answers to one per question
        radioButton.setAttribute("value", i )
        answerItem.appendChild(radioButton); 
        let radioLabel = document.createElement("label");
        radioLabel.textContent = object.choices[i];
        answerItem.appendChild(radioLabel);
        answersNode.appendChild(answerItem);       
    }
    
    questionNode.textContent = object.question;
    $("#quiz").append(questionNode);
    // answersNode.textContent = object.choices;
    $("#quiz").append(answersNode);
    console.log(index);
    console.log(object.question); 
}

var halfTime = setTimeout(function () {
      
    $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
    alert("30 seconds left");
  }, 1000 * 30);

 var maxTime = setTimeout(timeUp, 1000 * 60);
  

  function timeUp() {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    alert("time is up");
    scoring();
  }
  
triviaQuestions();

$("#submit").click(scoring);
function scoring(){
    clearTimeout(maxTime);
    clearTimeout(halfTime);
    wrongAnswers = 0;
    correctAnswers = 0; 
    var checked = $("#quiz :checked");
    console.log(checked.length);
    checked.each(function(index, element){
        console.log(element.value);
        console.log(element.getAttribute("name"));
        let selectedName = element.getAttribute("name");
        selectedName = parseInt(selectedName.substring(selectedName.length-1));
        console.log(UNQuestion[selectedName]);
        let value = parseInt(element.value);

        if (value === UNQuestion[selectedName].validAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
            
     });
     wrongAnswers += UNQuestion.length - correctAnswers - wrongAnswers;  //blank scoring 
     

    $("#answersRight").text(correctAnswers);
    $("#answersWrong").text(wrongAnswers);

}
   