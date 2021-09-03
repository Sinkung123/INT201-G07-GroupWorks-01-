const questions = {
    question1: { q: 'What is 7 times 3', 
                c: { a: 19, b: 20, c: 21, d: 22 },
                a: 'c'
    },
    question2: { q: 'Which one is different from the others?', 
                c: { 1: 'HTML', 2: 'JavaScript', 3: 'PHP', 4: 'C++' },
                a: 1
    },
    question3: { q: 'Which one is a mammal?', 
                c: { 1: 'Crocodile', 2: 'Shark', 3: 'Dolphin', 4: 'Ant' },
                a: 3
    },
    question4: { q: 'when was microsoft established?', 
                c: { 1: 2021, 2: 1987, 3: 1999, 4: 1975 },
                a: 4
    },
    question5: { q: 'What is root of 121', 
                c: { 1: 10, 2: 11, 3: 12, 4: 13 },
                a: 2
    }
}

class Player{
    constructor(name, chosenQ, chosenAns, points){
        this._name = name;
        this._chosenQ = chosenQ;
        this._chosenAns = chosenAns;
        this._points = points;
    }
    checkAnswer(){
        if(questions.question1.c == questions.question1.a){
            Player.points += 1;
            return 'Correct!';
        }
        return 'Wrong!';
    }
}

let A = new Player('A', questions["question1"], questions['question1']['c']['3']);
console.log(A.checkAnswer());



// function checkAnswer(Player){
//     if(Player.questions["chosenQ"]["chosenAns"] == Player.questions[chosenQ][a]){
//         Player.points += 1;
//         return 'Correct!';
//     }
//     return 'Wrong!';
// }
