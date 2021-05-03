// multiplication

const a = 5,
    b = 10;

const firstResult = a * b;
console.log('firstResult =', firstResult);

// division

const c = 100,
    d = 5;

const secondResult = c / d;
console.log('secondResult =', secondResult);

// addition

const e = 50,
    f = 50;

const thirdResult = e + f;
console.log('thirdResult =', thirdResult);

// Some variables

const elevenNumber = 11,
    bolleanType = true,
    stringType = "java script",
    numberType = 100;

// Quick writes

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// prompt tasks

const userAnswer = +prompt('Enter a number');

const userAnswerTwo = userAnswer * 2;
console.log('userAnswerTwo =', userAnswerTwo);

const firstQuestion = +prompt('Enter first number'),
    secondQuestion = +prompt('Enter second number'),
    questionSum = firstQuestion * secondQuestion;
console.log('questionSum =', questionSum);

// how much seconds in a one minute

const someMinutes = prompt('Enter a minutes'),
    oneMinuteIs = 60,
    minutesIsSec = someMinutes * oneMinuteIs;
console.log(`There is a ${minutesIsSec} seconds in a ${someMinutes} minutes`);

// Greeting

const greeting = 'Hello,',
    userName = prompt('What is your name?'),
    userNameAnswer = alert(`${greeting} ${userName}`);

// IF TASKS

const user = 10;

if(user === 10) {
    console.log('Right!')
} else {
    console.log('Wrong!')
};

const test1 = true,
    test2 = false;

if (test1 === true) {
    console.log('Right!')
} else {
    console.log('Wrong!')
};

if (test2 != true) {
    console.log('Right!')
} else {
    console.log('Wrong!')
};

const priceOfSomething = +prompt('Enter amount');

const discountMinSum = (3 / 100) * priceOfSomething,
    discountMaxSum = (5 / 100) * priceOfSomething;

if(priceOfSomething <= 500) {
    console.log(`Your total amount is ${discountMinSum} dollars!`)
} else {
    console.log(`Your total amount is ${discountMaxSum} dollars!`)
};

// Loops

// For loop

for(let i = 25; i >= 0; i--) {
    console.log(i)
};

// while loop
let someValue = 25;

while(someValue >= 0) {
    someValue--;
    console.log(someValue)
};

// do loop
let someValueTwo = 25;

do {
    console.log(someValueTwo)
    someValueTwo--;
} while (someValueTwo >= 0);

// Second part of loops

// for loop

for(let i = 10; i <= 50; i = i + 5) {
    console.log(i)
};

// while loop

let myNum = 10;

while (myNum <= 50) {
    console.log(myNum)
    myNum +=  + 5;
};

// // do loop
let myNumTwo = 10;

do {
    myNumTwo += + 5;
    console.log(myNumTwo)

} while (myNumTwo < 50);

// Third part of loops

// for loop

for(let z = 1; z <= 100; z++) {
    console.log(z)
};

// while loop

let k = 1;
while(k <= 100) {
    console.log(k);
    k++;
};
// do loop

let h = 1;
do {
    console.log(h)
    h++;
} while(h <= 100);

// last task

// for loop

let taskForUser = 2 + (2 * 2),
    userVariant = +prompt('What amount it will be?');

for(let d = 0; d <= 1; d++) {
    if(userVariant === taskForUser) {
        console.log('Congrats!')
    } else {
        userVariant = +prompt('What amount it will be?')
        d--;
    }
};

// while loop

let userVariantTwo = +prompt('What amount it will be?'),
    exampleForUser = 2 + (2 * 2);

while (userVariantTwo != exampleForUser) {
    userVariant = +prompt('What amount it will be?');
};

// do loop

let userVariantThree = +prompt('What amount it will be?'),
    exampleForUserTwo = 2 + (2 * 2);

do {
    userVariantThree = +prompt('What amount it will be?');

} while (userVariantThree !== exampleForUserTwo );
















