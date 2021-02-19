// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

// * All students with an average grade higher than 3

let studentsAverageGradeHigherThan3 = students.filter(student => student.averageGrade > 3);
console.log(studentsAverageGradeHigherThan3); 

// * All female student names with an average grade of 5

let femaleStudentAverageGrade5 = students
    .filter(student => student.gender === "Female")
    .filter(student => averageGrade === 5);
    console.log(femaleStudentAverageGrade5);

// * All male student full names who live in Skopje and are over 18 years old

let maleStudentsSkopje = students
    .filter (student => student.gender ==="male")
    .filter (city => city.city ==="Skopje")
    .filter (age => age.age === 18)
    maleStudentsSkopje.forEach(student => console.log(`${student.firstName} ${student.lastName}`));

// * The average grades of all female students over the age  of 24

let femaleOver24AverageGrade = students
    .filter (student => student.gender === "Female")
    .filter (age => age.age > 24)

    femaleOver24AverageGrade.map (student => (
        console.log(`${student.firstName} ${student.lastName}:average grade (${sstudent.averageGrade})`)
    ))

// * All male students with a name starting with B and average grade over 2

let maleNameBGradeOver2 = students
        .filter(student => student.gender === "Male")
        .filter(grade => grade.verageGrade > 2)
        .filter(name => name.firstName.StartWith ("B"))
        maleNameBGradeOver2.map(student => (
            console.log(`${student.firstName} ${student.lastName}:average grade (${sstudent.averageGrade}`)
        ))

///////////////////////////////

$(document).ready(function(){

    $.ajax({
        url:
        success: function(response) {

        }
    })
})