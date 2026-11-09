console.log("Welcome to Javascript Class!");

//Datatypes
let myName = "Emeka Okafor"; //String
let score = 72;                 //number
let isRegistered = true;     //boolean
let result = null;           //object
let address;                 //undefined

//console.log(typeof address)

//Operators
let a = 15;
let b = 4;
console.log(a + b); //addition
console.log(`sum of ${a} and ${b} is ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} modulus ${b} = ${a % b}`);

//comparism operators
console.log(`is ${a} > ${b}: ${a > b} `);
console.log(`is ${a} equal to ${b} : ${a == b}`);
console.log(` ${a} is not equal to ${b} : ${a != b}`);

//logical operators
let hasPaid = true;
let hasID = false;

console.log(`has the user paid and has ID? : ${hasPaid && hasID}`);
console.log(`has the user paid Or has ID? : ${hasPaid || hasID}`);
console.log(!hasID);

//conditional statements
if (score >= 70) {
    console.log("Grade A")
} else if (score >= 60) {
    console.log("Grade B")
} else if (score >= 50) {
    console.log("Grade C")
} else {
    console.log("Fail")
}

//switch case
let time = 12;
switch (true) {
    case (time < 12):
        console.log("Good morning");
        break;

    case (time <= 16):
        console.log("Good Afternoon");
        break;
    default:
        console.log("Good Evening");
        break;
}

// for loops
// for(let i = 5; i >= 1; i-- ){
//     console.log(`Number ${i}`);
// }

//While loop
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++ ;
// }

//do while loop
// let count2 = 1;
// do {
//     console.log(count2);
//     count2++;
// } while(count2 <= 5);

//multiplication table 2*1 to 12 *12
// for (i = 2; i <=12; i++){
//     console.log(`${i} Times table`);
//     for (j = 1; j <= 12; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
//functions
function sum(a = 5, b = 3) {
    console.log(`sum of ${a} and ${b} is ${a + b}`)
    //return a + b ;
}

//console.log(sum(69, 50));
sum();
sum(70, 89)

//student grade calculator
function calculateGrade(studentName = 'Emeka', studentScore = 89) {
    if (typeof studentScore !== "number" || !Number.isFinite(studentScore) || studentScore < 0 || studentScore > 100) { return "Invalid Score" };

    let grade;
    if (studentScore >= 70) {
        grade = 'A';
    } else if (studentScore => 60) {
        grade = 'B';
    } else if (studentScore >= 50) {
        grade = 'C';
    } else if (studentScore >= 45) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `${studentName}: ${studentScore}/100 - Grade ${grade}`;
}
console.log(calculateGrade('John', 70));
console.log(calculateGrade())
console.log(calculateGrade('James', 54));

// electricity bill calculation
function electricityBill(units, rate) {
    if (![units, rate].every(v => typeof v === "number"
        && Number.isFinite(v) && v >= 0)) {
        return "Invalid input";
    }
    return units * rate;
}
console.log(`Bill: ${electricityBill(120, 209)}`);

//even/ odd number
function checkNumber(a) {
    if ((a % 2) === 0) {
        return `${a} is an even number`;
    } else {
        return `${a} is an Odd number`;
    }
}
console.log(checkNumber(10));

//Arrays
// const students = ["Ada", "John", "Grace"];
// console.log(students); // output all
// console.log(students[1]); 
// students.push("Emeka");
// console.log(students);
// //students.pop();
// console.log(students);
// students.splice(1, 1)
// console.log(students)
// for (let i = 0; i < students.length; i++){
//     console.log(`${students[i]} how are you doing today`);
// }

//Objects
const student = {
    name: 'Ada',
    age: 20,
    course: "Frontend Development",
    score: 85
}

console.log(student);
student.score = 90;
console.log(student.name);
console.log(student["course"]);
console.log(student)

//Array of Objects

const students = [
    { id: 1, name: 'Ada', score: 85 },
    { id: 2, name: 'John', score: 65 },
    { id: 3, name: 'James', score: 50 },
    { id: 4, name: 'Eze', score: 45 },
]
console.log(students)

students.forEach((student) =>{
    console.log(student.name, student.score)
});
const passedStudents = students.filter(
    (student) => student.score >= 50
);
console.log(passedStudents);
const studentNames = students.map(
    (student) => student.name
);
console.log(studentNames);

const average = students.reduce(
    (sum, student) => 
        sum + student.score, 0
) / students.length;
console.log(average);

//html DOM
const myHeader = document.getElementById('myHeader');
console.log(myHeader);

const heading = document.querySelector('#heading');
const button = document.querySelector('#changeButton');

button.addEventListener("click", 
    () =>{
        heading.textContent = "Welcome to Genius Hub";
        heading.style.color = "blue";
})

//Form handling
const form = document.querySelector("#studentForm");
const nameInput = document.querySelector("#studentName");
const list = document.querySelector("#studentList");

form.addEventListener("submit", 
    (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        if(!name) {
            return
        };

        const item = document.createElement("li");
        item.textContent = name;
        list.appendChild(item);

        form.reset();

    } );
