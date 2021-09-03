class questions{
    constructor(question, choice, answer){
        this._question = question;
        this._choice = choice;
        this._answer = answer;
    }
}
class Player{
    constructor(name, chosenQ, chosenAns, points){
        this._name = name; // player name
        this._chosenQ = chosenQ; // object of the chosen question
        this._chosenAns = chosenAns; // player's answer
        this._points = points; // starting point
    }
    checkAnswer(){
      let correctAns = this._chosenQ._choice[this._chosenQ._answer]
        if(correctAns === this._chosenAns){
            this._points += 1;
            return 'Correct!';
        }
        return 'Wrong!';
    }
}
let q1 = new questions('What is 7 times 3', { 1: 19, 2: 20, 3: 21, 4: 22 },3);
let q2 = new questions('Which one is different from the others?', { 1: 'HTML', 2: 'JavaScript', 3: 'PHP', 4: 'C++' }, 1);
let q3 = new questions('Which one is a mammal?', { 1: 'Crocodile', 2: 'Shark', 3: 'Dolphin', 4: 'Ant' }, 3);
let q4 = new questions('when was microsoft established?', { 1: 2021, 2: 1987, 3: 1999, 4: 1975 }, 4);
let q5 = new questions('What is root of 121', { 1: 10, 2: 11, 3: 12, 4: 13 }, 2);

let A = new Player('A',
                   q1,
                   22,
                   0
                  );
console.log(A.checkAnswer());
let B = new Player('B',
                   q1,
                   21,
                   0
                  );
console.log(B.checkAnswer());