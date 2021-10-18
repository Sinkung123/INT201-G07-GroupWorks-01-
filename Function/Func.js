

//Higher-Order Function 
function studentList(studentId,studentName) { //ฟังก์ชันเก็บ ไอดีกับชื่อนักเรียน
   
    listStudent = []; // อาเรย์ สำหรับเก็บ ไอดีกับชื่อนักเรียน
    listStudent.push({id : `${studentId}`, name : `${studentName}`}); //เพิ่ม ไอดีกับชื่อนักเรียน ที่รับจาก parameter เข้าไปในอาเรย์

    //closure Function 
    function newStudent(newStudentId,newStudentName){  //ฟังก์ชันรับ ไอดีกับชื่อนักเรียน ที่เพิ่มเข้ามาใหม่
      
        listStudent.push({id : `${newStudentId}`, name : `${newStudentName}`}); //เพิ่ม ไอดีกับชื่อนักเรียน ที่เข้ามาใหม่ที่รับจาก parameter เข้าไปในอาเรย์โดยต่อจากรายชื่อคนก่อน
        return listStudent; //รีเทิร์นอาเรย์ listStudent      
    }

    return newStudent; //รีเทิร์นฟังก์ชัน newStudent
}

let myStudent = studentList("1","Bob");
console.log(myStudent("2","peter"))
console.log(myStudent("3","Joey"))


//rest parameter

function restPara(...x) // rest parameter เติม ... หน้าตัวแปรตัวสุดท้ายจะทำให้รับ parameter ได้ไม่ทำจัด จะทำหน้าที่คล้ายอาเรย์และสามารถใช้งานคำสั่งอาเรย์ได้
{    
    return x //รีเทิร์น parameter x
}

console.log(restPara(1,2,3,4))
console.log(restPara(1,2,3,4).fill(1)) 

export {studentList,restPara};