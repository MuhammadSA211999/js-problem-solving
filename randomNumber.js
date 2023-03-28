// print a random integer number between 1 and 6 //lodu
const getRandom = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1) + 1)
    return random
}
console.log(getRandom(1, 6));
