const points = [70, 75, 25, 35, 10, 80, 27];

const updatedPoints = points.map(point => {
    return point + 10;
})
console.log(updatedPoints);

const students = [
    { name: 'Ali', point: 40 },
    { name: 'Ayşe', point: 60 },
    { name: 'Burak', point: 30 },
    { name: 'Canan', point: 100 }
];

const updatedStudentPoints = students.map(student => {
    if (student.point < 50) {
        student.point += 15;
        return student;
    }
    else {
        return student;
    }
});
console.log(updatedStudentPoints);