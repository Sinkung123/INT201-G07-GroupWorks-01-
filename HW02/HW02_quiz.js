class questions{
    constructor(question, choice, answer){
        this._question = question;
        this._choice = choice;
        this._answer = answer;
    }
}
class Player{
    constructor(name){
        this._name = name; // player name
        this._points = 0; // starting point
    }
    doQuiz(num, choose){
        if(questionsList[num-1]._answer === choose){
            this._points +=1;
            return `Player ${this._name} has answered the question "${questionsList[num-1]._question}"\nchoice chosen: ${choose}(${questionsList[num-1]._choice[choose]})\ncorrect choice : ${questionsList[num-1]._answer}(${questionsList[num-1]._choice[questionsList[num-1]._answer]})\nStatus: 'Correct!'\nTotal Scores: ${this._points}`;
        }
        return `Player ${this._name} has answered the question "${questionsList[num-1]._question}"\nchoice chosen: ${choose}(${questionsList[num-1]._choice[choose]})\ncorrect choice : ${questionsList[num-1]._answer}(${questionsList[num-1]._choice[questionsList[num-1]._answer]})\nStatus: 'Wrong!'\nTotal Scores: ${this._points}`;
    }
}

let questionsList = new Array();
questionsList[0] = new questions('What is 7 times 3', { 1: 19, 2: 20, 3: 21, 4: 22 },3);
questionsList[1] = new questions('Which one is different from the others?', { 1: 'HTML', 2: 'JavaScript', 3: 'PHP', 4: 'C++' }, 1);
questionsList[2] = new questions('Which one is a mammal?', { 1: 'Crocodile', 2: 'Shark', 3: 'Dolphin', 4: 'Ant' }, 3);
questionsList[3] = new questions('when was microsoft established?', { 1: 2021, 2: 1987, 3: 1999, 4: 1975 }, 4);
questionsList[4] = new questions('What is root of 121', { 1: 10, 2: 11, 3: 12, 4: 13 }, 2);

let A = new Player('A');
console.log(A.doQuiz(1,3));



let B = new Player('B');
console.log(B.doQuiz(1,2));