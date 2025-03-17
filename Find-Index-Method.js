const points = [70, 65, 25, 35, 10, 80, 27];
const arrayIndex = points.findIndex(point => point == 35);
points[arrayIndex] = 45;
console.log(points);

const students = [
    { name: 'Ali', point: 40 },
    { name: 'Ayşe', point: 60 },
    { name: 'Hakan', point: 30 },
    { name: 'Mehmet', point: 100 },
];
const objectIndex=students.findIndex(student=>student.name=='Mehmet');
students[objectIndex].name='Mahmut';
console.log(students);