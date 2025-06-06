var teacher = "sanket"; // teacher -> global scope.
function ask(question){ // ask -> global scope ; question -> ask scope.
    console.log(teacher, question);
}

function fun(){ // fun -> global scope
    var teacher  = "Pulkit"; // teacher -> fun scope
    ask("Why");
}
fun();