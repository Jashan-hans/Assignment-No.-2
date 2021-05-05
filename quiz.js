
const readline = require('readline');
const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
   });
   let quizObj = [

    {
        ques: 1,
        question: "What does HTML stand for?",
        choice1: "Hyper text markup language",
        choice2: "hyperlinks markup language",
        choice3: "hyper makeup language",
        correct: 1
    }, {
        ques: 2,
        question: "What does CSS stand for?",
        choice1: "cascading simulating sheets",
        choice2: "Cascading style sheets",
        choice3: "case style sheets",
        correct: 2
    }, {
        ques: 3,
        question: "What does XML stand for?",
        choice1: "eXtra Modern link",
        choice2: "example Markup Language",
        choice3: "eXtensible Markup Language",
        correct: 3
    }, {
        ques: 4,
        question: "What does XHTML stand for?",
        choice1: "Extension Hypertext Markup Language",
        choice2: "Extensible Hypertext Markup Language,",
        choice3: "Extensible Hyperlink Markup Language",
        correct: 2

    }, {
        ques: 5,
        question: "Is JS same as JAVA?",
        choice1: "yes",
        choice2: "no",
        choice3: "not exact same",
        correct: 2
    }, {
        ques: 6,
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<javascript>",
        choice2: "<js>",
        choice3: "<script>",
        correct: 3

    }, {
        ques: 7,
        question: "How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function = myFunction()",
        choice3: "function: myFunction()",
        correct: 1
    }, {
        ques: 8,
        question: "Which operator is used to assign a value to variable?",
        choice1: "*",
        choice2: "+",
        choice3: "=",
        correct: 3
    }, {
        ques: 9,
        question: "JS was designed for which purpose?",
        choice1: "To style HTML pages",
        choice2: "To add interactivity to HTML pages",
        choice3: "To execute query related to DB on server",
        correct: 2
    }, {
        ques: 10,
        question: "Executable single line of script is calles as _",
        choice1: "Breakpoint in JS",
        choice2: "Statement in JS",
        choice3: "Line in JS",
        correct: 2
    }, {
        ques: 11,
        question: "Which of the following function terminates the Java statements?",
        choice1: "Semicolon",
        choice2: "slash",
        choice3: "Comma",
        correct: 1
    }, {
        ques: 12,
        question: "Which of the following event occurs when the user clicks on an HTML element?",
        choice1: "onmouseclick",
        choice2: "onmouseover",
        choice3: "onclick",
        correct: 3

    }, {
        ques: 13,
        question: "the correct place to insert JS is?",
        choice1: "The section",
        choice2: "The section",
        choice3: "Both 1&2",
        correct: 3

    }, {
        ques: 14,
        question: "How we write Hello World in the alert box?",
        choice1: "alertBoc('Hello World');",
        choice2: "alert('Hello World');",
        choice3: "msg('Hello World');",
        correct: 2

    }, {
        ques: 15,
        question: "Which of the following is an IF statement in JS?",
        choice1: "if i=5",
        choice2: "if i=5 then",
        choice3: "if(i==5)",
        correct: 3

    }, {
        ques: 16,
        question: "Which of the following is the correct statement for comment?",
        choice1: "//This is a comment",
        choice2: "/* This is a comment",
        choice3: "'This is a comment'",
        correct: 1

    }, {
        ques: 17,
        question: "Which of the following is the correct statement for while loop start?",
        choice1: "while i=0 to 10",
        choice2: "while(i<10)",
        choice3: "while(i<=10 , i++)",
        correct: 2

    }, {
        ques: 18,
        question: "Is JS a case-sensitive?",
        choice1: "yes",
        choice2: "No",
        choice3: "not strictly ",
        correct: 1

    }, {
        ques: 19,
        question: "Which operator is used to concatenate two strings?",
        choice1: "Arrow",
        choice2: "Comma",
        choice3: "Plus",
        correct: 3

    }, {
        ques: 20,
        question: "In how many days JS was developed?",
        choice1: "20",
        choice2: "10",
        choice3: "50",
        correct: 2

    }, {
        ques: 21,
        question: "How we declare a JS variable?",
        choice1: "var carname;",
        choice2: "variable carname;",
        choice3: "v carname;",
        correct: 1

    }, {
        ques: 22,
        question: "Which of the following attribute is used to specify the character encoding used in an external script file?",
        choice1: "type",
        choice2: "charset",
        choice3: "character",
        correct: 2

    }, {
        ques: 23,
        question: "Which of the following function of boolean object returns the primitive value of the boolean object?",
        choice1: "toString()",
        choice2: "toSource()",
        choice3: "valueOf()",
        correct: 3

    }, {
        ques: 24,
        question: "Which of the following is the server side JS?",
        choice1: "File Upload",
        choice2: "Date",
        choice3: "File",
        correct: 3

    }, {
        ques: 25,
        question: "Which statement is used to declare variable in JS?",
        choice1: "Executable statement",
        choice2: "Declaration statement",
        choice3: "Contiditon statement",
        correct: 2

    }

];

// var showedQues={};
// var usedQuesCount = 0;

// const r1 = require('r1').createInterface({
//   input: process.stdin,
//   output: process.stdout
// // });

/*r1.question(' For how many seconds you want to give the quiz?', name => {
  console.log(`Your quiz will be ended after ${name} seconds`),start ;
  r1.close();
  start();
});
*/
run();
let time;
async function run() {
    time = await help();
    timer(time);
}

start();
function help() {
    return new Promise(resolve => {
        r1.question(' For how many seconds you want to give the quiz  (1sec = 1000)?', sec => {
            r1.close();
            resolve(+sec);
        });
    });
}

function timer(t) {
    setTimeout(() => {
        scoreboard();

    }, t);
}
async function start()
{
    var alreadyDone = [];
    for(var num=0;num<quizObj.length;num++){
    //var num = Math.floor(Math.random()*quizObj.length);
    var num = (Math.floor(Math.random() * quizObj.length));
        var c = quizObj[num].ques;
       if (alreadyDone.includes(c)) {
           continue;
       }
       else{
          console.log(quizObj[num].question +"\n" + quizObj[num].choice1 +"\n" +quizObj[num].choice2 +"\n"+ quizObj[num].choice3);
          alreadyDone.push(c);
    // const r1 = require('r1').createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   });
    var a = await quiz();
 
    if(a == quizObj[num].correct)
    {
        console.log("your ans is right");
        
    }
    else{
        console.log("wrong answer");
    }
}
}
}

function quiz(){
    return new Promise(resolve => {
    r1.question(' choose the correct option', name => {
    //    if(name === quizObj[num].correct)
    //    {
    //        console.log("your ans is right");
           
    //    }
    //    else{
    //        console.log("wrong answer");
    //    }
        //r1.close();
        resolve(+name);
        // r1.close();
      });
    });
      
}
