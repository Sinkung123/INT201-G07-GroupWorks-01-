
class questions{ //คลาสสำหรับตั้งคำถาม
    constructor(question, choice, answer){
        this._question = question; //คำถาม
        this._choice = choice; //ตัวเลือกคำตอบ
        this._answer = answer; //คำตอบที่ถูฏ
    }
}

let questionsList = new Array(); 
questionsList[0] = new questions('What is 7 times 3', { 1: 19, 2: 20, 3: 21, 4: 22 },3); //ในตัวอาเรย์จะเท่ากับตวคลาสquestions(คำถาม,ตัวเลือก,คำตอบ)
questionsList[1] = new questions('Which one is different from the others?', { 1: 'HTML', 2: 'JavaScript', 3: 'PHP', 4: 'C++' }, 1);
questionsList[2] = new questions('Which one is a mammal?', { 1: 'Crocodile', 2: 'Shark', 3: 'Dolphin', 4: 'Ant' }, 3);
questionsList[3] = new questions('when was microsoft established?', { 1: 2021, 2: 1987, 3: 1999, 4: 1975 }, 4);
questionsList[4] = new questions('What is root of 121', { 1: 10, 2: 11, 3: 12, 4: 13 }, 2);

function checkAns(quest,choose){  //ฟังชั่นสำหรับเช็คคำตอบ checkAns(คำถาม,คำตอบ) แล้ว return ผลลัพธ์ออกมาเป็น String

    if(choose === questionsList[quest]._answer) //เช็คคำตอบที่ผู้เล่นเลือกว่าตรงกับคำตอบที่ถูกไหม
    return `\nStatus: 'Correct!` //ถ้าตรงให้ return ผลลัพธ์ Correct
    else return `\nStatus: 'Wrong!` //ถ้าผิดให้ return ผลลัพธ์ Wrong

};

function score(q1,ans1,q2,ans2,q3,ans3){ //ฟังชั่นคิดคะแนนสะสม score(คำถาม1,คำตอบ1,คำถาม2,คำตอบ2,คำถาม3,คำตอบ3)
    let point = 0; //ตัวแปรสำหรับเก็บคะแนน
    if(questionsList[q1]._answer === ans1) point += 1; //ถ้าคำถามที่1ถูก +1 คะแนน ถ้าผิดจะ +0
    if(questionsList[q2]._answer === ans2) point += 1; //ถ้าคำถามที่2ถูก +1 คะแนน ถ้าผิดจะ +0
    if(questionsList[q3]._answer === ans3) point += 1; //ถ้าคำถามที่3ถูก +1 คะแนน ถ้าผิดจะ +0
    return `Points : ${point}`; //return คะแนนสะสมจากการตอบคำถามทั้ง3ข้อ
}

let pl1 = { //ผู้เล่นคนที่ 1
    
    name:"Peter", //ชื่อผู้เล่น
    quest:{q1:`Question1 : ${questionsList[0]._question}`,q2:`Question1: ${questionsList[1]._question}`,q3:`Question3 : ${questionsList[2]._question}`},
    ans:{ans1:`choice chosen: ${questionsList[0]._choice[2]}\ncorrect choice : ${questionsList[0]._choice[questionsList[0]._answer]}${checkAns(0,2)}`,ans2:`choice chosen: ${questionsList[1]._choice[4]}\ncorrect choice : ${questionsList[1]._choice[questionsList[1]._answer]}${checkAns(1,4)}`,ans3:`choice chosen: ${questionsList[2]._choice[2]}\ncorrect choice : ${questionsList[2]._choice[questionsList[2]._answer]}${checkAns(2,2)}`},
    point : score(0,2,1,4,2,2)
    // quest เป็น obj ที่เก็บคำถามที่ผู้เล่นเลือกไว้ 3 ข้อ
    // ans เป็น obj ที่เก็บคำตอบของคำถามแต่ละข้อและจะแสดงคำตอบที่ผู้เล่นเลือกพร้อมกับคำตอบที่ถูก และผลลัพธ์คำตอบที่ถูก return จากฟังชั่น checkAns()
    //point คือ คะแนนสะสมของผู้เล่นที่ผู้เล่นตอบคำถามถูก โดยจะส่งคำตอบและคำถามไปเช็คกับฟังชั่น score() แล้ว return ผลลัพธ์มายัง obj ผู้เล่น 
}

let pl2 = {
    
    name:"Jame",
    quest:{q1:`Question1 : ${questionsList[2]._question}`,q2:`Question1: ${questionsList[3]._question}`,q3:`Question3 : ${questionsList[4]._question}`},
    ans:{ans1:`choice chosen: ${questionsList[2]._choice[3]}\ncorrect choice : ${questionsList[2]._choice[questionsList[2]._answer]}${checkAns(2,3)}`,ans2:`choice chosen: ${questionsList[3]._choice[4]}\ncorrect choice : ${questionsList[3]._choice[questionsList[3]._answer]}${checkAns(3,4)}`,ans3:`choice chosen: ${questionsList[4]._choice[2]}\ncorrect choice : ${questionsList[4]._choice[questionsList[2]._answer]}${checkAns(4,2)}`},
    point : score(2,3,3,4,4,2)

}

let pl3 = {
    
    name:"Harry",
    quest:{q1:`Question1 : ${questionsList[0]._question}`,q2:`Question1: ${questionsList[2]._question}`,q3:`Question3 : ${questionsList[4]._question}`},
    ans:{ans1:`choice chosen: ${questionsList[0]._choice[3]}\ncorrect choice : ${questionsList[0]._choice[questionsList[0]._answer]}${checkAns(0,3)}`,ans2:`choice chosen: ${questionsList[2]._choice[4]}\ncorrect choice : ${questionsList[2]._choice[questionsList[2]._answer]}${checkAns(2,4)}`,ans3:`choice chosen: ${questionsList[4]._choice[2]}\ncorrect choice : ${questionsList[4]._choice[questionsList[1]._answer]}${checkAns(4,2)}`},
    point : score(0,3,2,4,4,2)

}

console.log('\n-------------------------------------\n')
console.log(`Name: ${pl1.name}\n${pl1.quest.q1}\n${pl1.ans.ans1}\n\n${pl1.quest.q2}\n${pl1.ans.ans2}\n\n${pl1.quest.q3}\n${pl1.ans.ans3}\n\n${pl1.point}`);
console.log('\n-------------------------------------\n')
console.log(`Name: ${pl2.name}\n${pl2.quest.q1}\n${pl2.ans.ans1}\n\n${pl2.quest.q2}\n${pl2.ans.ans2}\n\n${pl2.quest.q3}\n${pl2.ans.ans3}\n\n${pl2.point}`);
console.log('\n-------------------------------------\n')
console.log(`Name: ${pl3.name}\n${pl3.quest.q1}\n${pl3.ans.ans1}\n\n${pl3.quest.q2}\n${pl3.ans.ans2}\n\n${pl3.quest.q3}\n${pl3.ans.ans3}\n\n${pl3.point}`);
console.log('\n-------------------------------------\n')
