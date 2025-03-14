const points = [70, 65, 25, 35, 10, 80, 27];
const highPoint=points.find(point =>{
    return point>70
});
console.log(highPoint);