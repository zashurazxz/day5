function shows_form_part(n){
    var i = 1, p = document.getElementById("form_part"+1);
    while (p !== null){
        if (i === n){
            p.style.display = "";
        }
        else{
            p.style.display = "none";
        }
        i++;
        p = document.getElementById("form_part"+i);
    }
}
function submit_form() {
	// var sum = parseInt(document.getElementById("num1").value) +
    //         parseInt(document.getElementById("num2").value) +
    //         parseInt(document.getElementById("num3").value) +
    //         parseInt(document.getElementById("num4").value) +
    //         parseInt(document.getElementById("num5").value) +
    //         parseInt(document.getElementById("num6").value);
  alert("Your result is: " + 100);
}




// test code
(function() {
    const myQuestions = [
      {
        question: "Who is the Best Teacher?",
        answers: {
          a: "Yoda",
          b: "John Steinbeck",
          c: "Java coach Heather"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "Google",
          b: "Github",
          c: "Trick question; this is the best site"
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the best wow supervillan?",
        answers: {
          a: "Lich king",
          b: "Archimonde",
          c: "Illidan",
          d: "Sylvanas Windrunner"
        },
        correctAnswer: "d"
      },
      {
        question: "Whats the best thing you can do?",
        answers: {
          a: "Win a million dollars",
          b: "Solve world hunger",
          c: "Sleep",
          d: "Live forever"
        },
        correctAnswer: "c"
      },
      {
        question: "Who am I?",
        answers: {
          a: "Im Bat Man",
          b: "The Scat man",
          c: "SpongeBob SquarePants",
          d: "Stitch"
        },
        correctAnswer: "a"
      },
      {
        question: "What Element is the best",
        answers: {
          a: "Fire",
          b: "Water",
          c: "Earth",
          d: "Air"
        },
        correctAnswer: "d"
      },
      {
        question: "Whats the best weather",
        answers: {
          a: "Sunshine",
          b: "Rain",
          c: "Snow",
          d: "Cloudy"
        },
        correctAnswer: "c"
      },
      {
        question: "If i say jump you say",
        answers: {
          a: "What?",
          b: "How High!",
          c: "How many times",
          d: "You jump lazybones"
        },
        correctAnswer: "b"
      }
      ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();