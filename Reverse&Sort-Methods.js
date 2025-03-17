
const names = ['can', 'tuba', 'elif', 'hakan', 'osman'];
names.sort();
names.reverse();
console.log(names);

const points = [70, 65, 25, 35, 10, 80, 27];
// points.sort();
// points.reverse();
points.sort((a,b)=>b-a);
console.log(points);
points.sort((a,b)=>a-b)
console.log(points);

const students = [
    { name: 'Ali', point: 40 },
    { name: 'Ayşe', point: 60 },
    { name: 'Hakan', point: 30 },
    { name: 'Mehmet', point: 100 },
];
// students.sort((a, b) => {
//     if (a.point > b.point) {
//         return -1;
//     }
//     if (b.point > a.point) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// });

students.sort((a, b) => b.point - a.point)
console.log(students);