
import  {studentList,restPara} from './Func.js';

let list = studentList("1","bob")
console.log(list("2","peter"))
console.log(list("3","Joey"))

console.log(restPara(1,2,3,4))
console.log(restPara([1,2],[10,5],{id: '123'}))
console.log(restPara("sin",[1,2,3,4],{ name : "peter" ,sur: "smith"}))
