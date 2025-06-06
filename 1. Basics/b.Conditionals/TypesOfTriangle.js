let a = 10, b = 12, c = 12;

if(a == b && a == c ){
    console.log("equilateral triangle");
}
else if(a == b || a == c || b == c){
    console.log("isosceles triangle");
}
else{
    console.log("scalene triangle");
}