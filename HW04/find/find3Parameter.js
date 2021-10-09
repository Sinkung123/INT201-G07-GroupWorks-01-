const num = [9, 1, 8, 2, 7, 3, 6, 4, 5];
const obj = [{id: 0, name: 'Alex'}, 
             {id: 1, name: 'Bob'}, 
             {id: 2, name: 'Chad'}, 
             {id: 3, name: 'Dan'}, 
             {id: 99, name: 'Alex'}];
const arr = [[5, 4], 
             [4, 6], 
             [2, 4], 
             [9, 0], 
             [7, 8], 
             [1, 3]];

const found1 = num.find((element, index, arr) => {
    return element > arr[arr.length-1] && index > 1;
})

const found2 = obj.find((element, index, arr) => {
    return element.name == arr[0].name && index != 0;
})

const found3 = arr.find((element, index, arr) => {
    return element[0] + element[1] == arr[0][0] + arr[0][1] && index != 0;
})

console.log(found1)
console.log(found2)
console.log(found3)


// const foundtest1 = num.find((element, index, arr) => {
//     if(index >0){
//         console.log(`element: ${element} index: ${index} arr: ${arr}`)
//         return element >5;
//     }
// })

// const foundtest2 = obj.find((element, index, arr) => {
//     console.log(`name: ${element.name} index: ${index} arr: ${arr[index].name}`);
// })

// const foundtest3 = arr.find((element, index, arr) => {
//     console.log(`name: ${element} index: ${index} arr: ${arr}`);
// })