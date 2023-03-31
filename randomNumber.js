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
// console.log(serial);

//prob 4 find the rsult is the given year is leap year or not

const isLeapYear = (year) => {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return `${year} is LeapYear`
    }
    else {
        return `${year} is not LeapYear`
    }
}

// const result = isLeapYear(2016)
// console.log(result);

//prob 5 find how much vowel are in a given sentence
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const countVowels = (sentence) => {
    let count = 0
    const lettersArray = Array.from(sentence)
    for (let i = 0; i < lettersArray.length; i++) {
        let letter = lettersArray[i]
        if (vowels.includes(letter)) {
            count = count + 1
        }
    }
    return count
}
const sentence = 'i love bangladeshe'
const totalVowels = countVowels(sentence)
// console.log(totalVowels);

//prob 6 find out the duplicate element/number of an array
const findDuplicate = (numbers) => {
    const duplicate = numbers.filter((value, index, numbersArray) => {
        return numbersArray.indexOf(value) !== index //false
    })
    return duplicate
}
// const numberss = [1, 4, 4, 7, 9, 2, 4, 5, 7, 9, 24, 45, 63, 23, 45, 34]
// console.log(findDuplicate(numberss));

//prob 7 findUnique element/number of an array basis on the condition
const findUnique = (numbers) => {
    const duplicate = numbers.filter((value, index, numbersArray) => {
        return numbersArray.indexOf(value) === index
    })
    return duplicate
}
const numberss = [1, 4, 4, 7, 9, 2, 4, 5, 7, 9, 24, 45, 63, 23, 45, 34]
// console.log(numberss.indexOf(0));

// console.log(findUnique(numberss));

// how much times is used the word 'SA' below sentence and what the first position of the word.
const sentences = 'Muhammad SA is an Edtech and Social entrepreuners. SA tried hard establis his own software company Tarmat Inc. Muhammad SA is well known as MSA'
const matches = sentences.match(/ SA/gi)
//match method match gulur array return kore
const matchCount = matches ? matches.length : 0
// console.log(matchCount);

let position = sentences.search(/sa/i)
//search first index return kore na pele -1 return kore
position = position >= 0 ? position : 'not found'
// console.log(position);

//find the longest string from an array and findout the index of longest string on the array 
const findLongestString = (names) => {
    let longestWord = ''
    const namesLength = names.length
    for (let i = 0; i < namesLength; i++) {
        const name = names[i]
        if (name.length > longestWord.length) {
            longestWord = name
        }

    }

    const index = names.indexOf(longestWord)
    return [longestWord, index]
}

const namesSentence = 'muhammad sa saleh ahmed parvej hussen abdus-samad-azad mehedi hussen miraz'
const names = namesSentence.split(' ')
const nameAndIndex = findLongestString(names)
// console.log(nameAndIndex);

//1 to 100 er moddhye kun nmber gulu 3 othoba 5 enbong 3,5 uboy dhara bibajjo
const fizBuzz = (number) => {
    let totalFizBuzz = { fizz: [], buzz: [], fizBuzz: [], general: [] }
    for (let i = 1; i <= number; i++) {
        // console.log('i=>', i, 'number=>', number);

        if (i % 15 === 0) {
            totalFizBuzz.fizBuzz.push(i)
            // console.log(`${i} is fizzBuzz`);

        }
        else if (i % 3 === 0) {
            totalFizBuzz.fizz.push(i)
            // console.log(`${i} is buzz`);

        }
        else if (i % 5 === 0) {
            totalFizBuzz.buzz.push(i)
            // console.log(`${i} is fizz`);

        }

        else {
            totalFizBuzz.general.push(i)
            // console.log(i);

        }
    }
    return totalFizBuzz
}
const calucation = fizBuzz(100)
// console.log(calucation.fizBuzz, calucation.fizz, calucation.buzz, calucation.general);

//explicite falsy value from an array
const findTruthy = (values) => {
    let truthy = []
    let falsy = []
    for (const value of values) {
        if (value) {
            truthy.push(value)
        }
        else {
            falsy.push(value)
        }
    }
    return [truthy, falsy]
}
// const value = findTruthy(values)
// console.log(value);
const values = [2, 0, '', null, 'sdfv', undefined, {}, [], 'sleh', ' ']
const truthy = values.filter(value => {
    if (value) {
        // console.log('value', value);
        return value
    }
})
// console.log(truthy);
const falsy = values.filter(value => !value)
// console.log(falsy);

// explicite falsy value from an object

const obj = { a: '', b: 0, c: null, d: undefined, e: {}, f: [], g: 'muha', h: 'saleh' }

const findTruth = (objs) => {
    for (const obj in objs) {

    }
}

















