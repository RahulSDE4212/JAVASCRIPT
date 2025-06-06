function qe(a, b, c){
    let sqrt = Math.sqrt((b*b) - (4*a*c));
    let root1 = (((-1 * b) + (sqrt) )/ (2*a));
    let root2 = (b - (sqrt)) / (2*a);
    console.log(root1, root2);
}

let a = 5, b = 4, c = 1;
qe(a,b,c);