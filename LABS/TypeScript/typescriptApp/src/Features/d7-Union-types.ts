function printID(id:string| number){
    console.log(id);
}
printID("101");
printID(101);

interface Circle{
    kind: "circle";
    radius: number;
}
interface Square{
    kind:"square";
    side: number;
}

function getarea(shape: Circle | Square):number{
    switch(shape.kind){
        case "circle":
            return Math.PI *shape.radius**2;
        case "square":
            return shape.side**2;
    }
}
const circle:Circle= {kind:"circle",radius:10};
const square:Square= {kind:"square",side:10};
console.log("area of circle",getarea(circle));
console.log("area of square",getarea(square));
