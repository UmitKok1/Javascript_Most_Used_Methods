const points = [70, 75, 25, 35, 10, 80, 27];
const result = points.reduce((value, point) => {
    if (point > 50) {
        value++;
    }
    return value;
}, 0);
console.log(result);

const students = [
    { name: 'Ali', point: 40 },
    { name: 'Ayşe', point: 60 },
    { name: 'Burak', point: 30 },
    { name: 'Canan', point: 100 },
    { name: 'Ali', point: 80 },
    { name: 'Ayşe', point: 70 },
    { name: 'Burak', point: 20 },
    { name: 'Canan', point: 90 }
];
const aliTotalPoint = students.reduce((value, student) => {
    if (student.name === "Ali") {
        value += student.point;
    }
    return value;
}, 0);
console.log(aliTotalPoint);