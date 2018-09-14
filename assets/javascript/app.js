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
    //building HTML in JavaScript
    //1. create the element/node using document.createElement("tagName"), where tagName is the name of the tag
    //2. assign the element/node to a variable, example: let newNode = document.createElement("p");
    //3. change the node as needed
    //      * alter its text by using the textContent property of the element node, example newNode.textContent = "some text"
    //      * alter an attribute of the node using the setAttribute property of the element/node, example: newNode.setAttribute("class", "super-awesome");
    //4. select the node you want to insert your new element/node into and assign it to a variable; example let parentNode = document.querySelector("#parent");
    //      * if inserting into a node that's already in the dom, you can select the node you're inserting into using $() or document.querySelector()
    //      * if inserting into a node that is not in the DOM yet, make sure you've created the parent node and assigned it to a variable (see steps 1 and 2)
    //5. insert your new node into its parent
    //      * parentNode.appendChild(newNode) inserts the new node after all existing children
    //      * you can also pick a sibling node and use siblingNode.insertBefore(newNode) to put your new node before an element already in the DOM.

    var questionNode = document.createElement("p");
    
    var answersNode = document.createElement("ul");
    for (let i = 0; i < object.choices.length; i++) {
       let answerItem = document.createElement("li");
        // answerItem.textContent = object.choices[i];
       
        let radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("name", "question-" + index); //limits answers to one per question
        answerItem.appendChild(radioButton); 
        let radioLabel = document.createElement("label");
        radioLabel.textContent = object.choices[i];
        answerItem.appendChild(radioLabel);
        answersNode.appendChild(answerItem);
    //    <input type="radio" name="gender" value="female"> <label>object.choices[i]</label>
    //    <li>answer text</li>
        
    }
    
    questionNode.textContent = object.question;
    $("#quiz").append(questionNode);
    // answersNode.textContent = object.choices;
    $("#quiz").append(answersNode);
    console.log(index);
    console.log(object.question); 


    // <h3>Your question:</h3>
    //             <p id="questionOne"></p>
    //             <h3>Availible answers: </h3>
    //             <ul id="choicesOne"></ul>
}

setTimeout(function () {
    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
    console.log("30 seconds left");
  }, 1000 * 30);

  setTimeout(timeUp, 1000 * 60);
  

  function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }
triviaQuestions();