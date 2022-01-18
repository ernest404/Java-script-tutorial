/*
you can run JavaScript in several ways:

    Using console tab of web browsers: type and execute javascript interactively 
    Using Node.js: calling node on js scripts to execute it or by launching node interactive environment(a kind of console) by calling node.
    By creating web pages: And linking them to js scripts

*/
//*!---- Console.log() -----
// All modern browsers have a web console for debugging. The console.log() method is used to write messages to these consoles. For example,
console.log("Jonas"); //prints values to the console
console.log(23);

//*! ---- Variables ----
// Labeled container for storing data values

let firstName = 'Anne'; //declaring and initializing a variable.Here, firstName is a variable. It's storing "Ann". 
var x = 5; // var is used in older versions of JS.

// You declare variables in a single statement
let x = 5,
    y = 6,
    z = 7;

// Variable once declared can be called multiple times 
console.log(firstName)
console.log(firstName)
console.log(firstName)

// If you use a variable without initializing it, it will have an undefined value.
let x; // x is the name of the variable
console.log(x); // undefined because it does not contain any value.

// It is possible to change the value of the variable
let x = 5;
// To reassign a variable value we don't use let
x = 10;
// This changed value is reflected on all variable calls.

// -- Rules for Naming Variables --
/*
1. Variable names can only start with either a letter, an underscore _, or the dollar sign $
2. Variable names cannot start with numbers.
3. JavaScript is case-sensitive. So y and Y are different variables.
4. Keywords cannot be used as variable names.
*/

// The recommended way to name variables in JS is to:
// 1. Use descriptive names for variables
// 2. Use camelCaseNotation
let firstName = 'Bobby';

/*-- JavaScript Constants --*/
const x = 5; //initializing constants
// Once a constant is initialized we cannot change its value
x = 10; //*!error!

// you cannot declare a constant without initializing it.
const x; //*!error!
// Use const when you are sure the value won't change throughout the program.

//*! ---- Data types -----
/*There are eight basic data types in JavaScript. They are:
Data Types             Description                               Example
Primitive- only stores a single data			
String          represents textual data                     'hello', "hello world!", `hello ${name}`etc
			
Number          an integer or a floating-point number       3, 3.234, 3e-2 etc.
			
BigInt          represents xxbig number by appending n to it.         900719925124740999n , 1n etc.
			
Boolean         Any of two values: true or false            true and false
			
undefined       a data type whose variable is not initialized     let a;
			
null            denotes a empty/unknown value                     let a = null; (not same as NULL or Null)
			
Symbol          data type whose instances are unique and immutable.  let value = Symbol('hello'); Symbol('hello') != Symbol('hello')

non-primitive- store collections of data
Object          key-value pairs of collection of data           let student = {name: "Ernest", age: 25,.. };*/

// typeof: Used to find the type of variable.
let javascriptIsFun = true;
typeof(javascriptIsFun);

/*JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.

It also means that a variable can be of one data type and later it can be changed to another data type. */

//*!--- Operators ----
// is a special symbol used to perform operations on operands (values and variables)
/*
 */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Mwendwa';
console.log(firstName + ' ' + lastName); //Template string is better for this operation

let x = 10 + 5;
console.log(x);
x += 10; //x = x + 10
console.log(x);
x *= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// Comparison Operator return a boolean value
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah >= 17);
console.log(ageSarah >= 19);

// Console has access to the variables loaded in a webpage, but any definition get lost when page is reloaded.

// Operator Precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

const averageage = (ageJonas + ageSarah) / 2; // Brackets have the highest preceedence 
console.log(averageage)

// Coding Challenge #1

// Data 1
let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight / markHeight ** 2

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

// Data 2
markWeight = 95;
markHeight = 1.88;
markBMI = markWeight / markHeight ** 2

johnWeight = 85;
johnHeight = 1.76;
johnBMI = johnWeight / johnHeight ** 2

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)

String and Template Literals
const firstName = 'Ernest';
const job = 'Software Engineer';
const birthYear = 1991;
const year = 2037;

const ernest = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(ernest);

// Template Literals: Used to assemble several string values.
const jonasNew = `I'm ${firstName}, a ${year - birthYear}`

console.log(jonasNew)

// We can also use back ticks for all strings.
console.log(`Just a string `)

// Multiline strings
console.log('String with \n\
multiple \n\
lines');

// Multiline Template strings
console.log(`String
with
multiple
lines`);

Take Decision using control structures.
Check
if someone is old enough to take a driver 's license.

const age = 17;

if (age >= 18) {
    console.log('You can have your driving lincense 🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`You are underage wait another ${yearsLeft} years`)
}

// Another variable
const birthYear = 1991;

// Find the century the person was born in 
let century; //First declare a variable that is to be used in the control structure.
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21
}

console.log(century)

// Data 1
let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight / markHeight ** 2

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is greater than John's (${johnBMI})`)
} else {
    console.log(`Mark's BMI (${markBMI}) is less than John's (${johnBMI})`)
}

// Type Conversion and Coercion

// Type Conversion we manually convert from one type to another

// We can convert strings to numbers using Number function.example"

const inputYear = '1996';
console.log(Number(inputYear) + 18)
console.log(inputYear + 18) //original input is still a string, the number() gives us a converted value

// To a string

console.log(String(23));

// Type Coercion: JavaScript automaically converts value in the background.
// Happens when operator is dealing with values of different type.

// When there is an operation btn string and number, and the operator is asting operator the number will be converted to string.

console.log('I am ' + 23 + ' years old');
console.log('10' + 3);

console.log('10' - 3); // 10 converted to number because that's the only way - can work.This works for all operators except for additon.

let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and Falsy Values.
// Falsy values that are not false but will be converted to false when converted to boolean.They include 0, '', undefined, null, NaN (non values)
// Everthing else will be Truthy.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Jonas'));

// Check if someone has money

const money = 0;

if (money) {
    console.log('Funds avaible')
} else {
    console.log('Not funds avaible')
}

Equality Operators loose == Vs strict ===
    strict === because it does not perform type coercion
const age = 18;
if (age === 18) console.log('Strict')
    // loose == becuase it does type coercion
const age1 = '18';
if (age1 == 18) console.log('Loose') //has some weird rules to be avoided

// always use strict equality even if we need type conversion.

const favourite = prompt('What is your favourite number?')
console.log(favourite); // favourite is a string value.
console.log(typeof(favourite))

// As a numeric type
const favouriteNum = Number(prompt('What is your favourite number?'))
console.log(favouriteNum); // favourite is a Numeric value.
console.log(typeof(favouriteNum))

// else if 
yearOfBirth = Number(prompt('In which year were you born ?'))

if (yearOfBirth === 2000) {
    console.log(`Born in 21 Century !`);
} else if (yearOfBirth === 1999) {
    console.log('Born in 20th Century');
} else {
    console.log('error!!');
}

Not equal to !== strict Vs != loose
Always use strict version of operator.

Boolean Logic Operators: AND, OR & NOT.

const hasDriversLicense = true
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision);
console.log(true || false);
console.log(true && !(true));

// Coding Challenge

let dolphinesAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

if (dolphinesAvg > koalasAvg) {
    console.log("Dophines win");
} else if (dolphinesAvg < koalasAvg) {
    console.log("Koalas win");
} else {
    console.log("Draw");
}

// Bonus

dolphinesAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 123) / 3;

if (dolphinesAvg > 100 && dolphinesAvg > koalasAvg) {
    console.log("Dophines win");
} else if (koalasAvg > 100 && dolphinesAvg < koalasAvg) {
    console.log("Koalas win");
} else if (dolphinesAvg > 100 && koalasAvg > 100 && dolphinesAvg === koalasAvg) {
    console.log("Draw");
} else {
    console.log("Minimum score not achieved no Team wins");
}

dolphinesAvg = (97 + 112 + 101) / 3;
koalasAvg = (109 + 95 + 106) / 3;

if (dolphinesAvg > 100 && dolphinesAvg > koalasAvg) {
    console.log("Dophines win");
} else if (koalasAvg > 100 && dolphinesAvg < koalasAvg) {
    console.log("Koalas win");
} else if (dolphinesAvg > 100 && koalasAvg > 100 && dolphinesAvg === koalasAvg) {
    console.log("Draw");
} else {
    console.log("Minimum score not achieved no Team wins");
}

// Switch statement: Complicated alternative to ifelse.

const day = 'Sunday';

switch (day) { //value we are testing
    case 'Monday': // day === 'Monday'
        console.log('Plan course');
        break; // without break code continues executing to the next case
    case 'Tuesday':
        console.log('Create course');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('practice course');
        console.log('Create course questions');
        break;
    case 'Friday':
        console.log('Review course');
        break;
    case 'Saturday':
        console.log('Deliver the course');
        break;
    case 'Sunday':
        console.log('Relax');
        break;
    default:
        console.log('Invalid Day');
        break;
}

if (day === 'Monday') {
    console.log('Plan course');
} else if (day === 'Tuesday') {
    console.log('Create course');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Practice course');
    console.log('Create course questions');
} else if (day === 'Friday') {
    console.log('Review course');
} else if (day === 'Saturday') {
    console.log('Deliver course');
} else if (day === 'Sunday') {
    console.log('Relax');
} else {
    console.log('Invalid Day');
}

// Statements vs expression

// Expressions statements that produce a value, operations, values are also expressions.
// Statements a bigger piece of code that does not produce any value. translate actions.
// An expression is something, while a statement does something.

// conditional(Ternary) operator ? is if, : is else
const age = 23;
age >= 18 ? console.log('I can drink alcohol') : console.log("I can't drink alcohol");

// Can be used to conditionally declare a variable
const drink = age >= 18 ? 'alcohol' : "water";
console.log(drink);

// if else implementation

let drink2;
if (age >= 18) {
    drink2 = 'alcohol'
} else {
    drink2 = 'water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'alcohol' : "water"}`);

// Perfect for small and quick decisions.Not applicable for large blocks of code.

// Code challenge.
const billValue = 240;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
console.log(tip)

console.log(`The bill was ${billValue}, the tip was ${billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2} and the total value ${billValue + tip}`);