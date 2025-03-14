const points = [70, 75, 25, 35, 10, 80, 27];

const successfullStudents = points.filter(point => {
    return point > 50;
})
console.log(successfullStudents);

const students = [
    { name: 'Ali', passed: true },
    { name: 'Ayşe', passed: false },
    { name: 'Burak', passed: false },
    { name: 'Canan', passed: true }
];

const passingStudents = students.filter(student => {
    return student.passed;
})
console.log(passingStudents);