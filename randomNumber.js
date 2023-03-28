//prob 1 print a random integer number between 1 and 6 //lodu
const getRandom = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1) + 1)
    return random
}
// console.log(getRandom(1, 6));

//prob 2 alphabatically print a array name 
const student = ['Daris', 'Ahmed', 'SA', 'Muhammad', 'Saleh']
//sort changet the orginal array 
// console.log(student.slice().sort());//duplicate by slice method and sort
// console.log(student);//orginal array 

//prob 3 serially print an arrays number neumaric sort 
const numbers = [6, 4, 9, 7, 1, 56, 74, 87]
const serial = numbers.slice().sort((a, b) => a - b)
console.log(serial);


