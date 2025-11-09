const questionSet = [
    {
    question:"what is the power house of a cell",
    options:["mitochondria","white bloodcells","golgi apparatus"],
    answer:"mitochondria",
    },

    {
    question:"Whats the best Os for learning ethical hacking",
    options:["linux","windowa","Distros ubuntu"],
    answer:"linux",
    },
    
    {
    question:"which of these isnt a body organ",
    options:["liver","heart","hands"],
    answer:"hands",
    }
    
];
let currentIndex = 0;
let score=0;

const questionEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const answerEl = document.getElementById("results")
const showresults = document.getElementById("para")


function showQuestion(){
    const currentQuestion = questionSet[currentIndex];
    questionEl.textContent = currentQuestion.question;

    optionsEl.innerHTML= "";



    currentQuestion.options.forEach(option=>{
        const btn = document.createElement("button");
        btn.textContent = option;
       btn.classList.add("option-button")
       btn.addEventListener("click",()=>checkAnswer(option))
       optionsEl.appendChild(btn);
    });


    function checkAnswer(selectedOption){ 
         const QuestionT=questionSet[currentIndex];
         if(selectedOption===QuestionT.answer){
          showresults.textContent = ("correct");
           score++;
         }
         else{
        showresults.textContent = ("wrong choice try again");
         }
        currentIndex++;
         if(currentIndex<questionSet.length){
            showQuestion();
         }else{
           showresults.textContent = `your score is :${score}/${questionSet.length}`;
         }  
         
     } 
    }
     showQuestion();