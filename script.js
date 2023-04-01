var num1 = Math.ceil((Math.random()*21|0));
document.getElementById('A').innerHTML = num1;

var num2 = Math.ceil((Math.random()*21|0));
document.getElementById('B').innerHTML = num2;

var num3 = Math.ceil((Math.random()*21|0));
document.getElementById('C').innerHTML = num3;


if(num1>num2 && num1>num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City A (' +num1+ ')';
}else if(num1<num2 && num2>num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City B (' +num2+ ')';
}else if(num1<num3 && num2<num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City C (' +num3+ ')';
}else if(num1==num2 && num2>num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City A and City B (' +num1+ ')';
}else if(num1<num2 && num2==num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City B and City C (' +num2+ ')';
}else if(num2<num3 && num1==num3){
    document.getElementById('most').innerHTML = 'The city with the largest amount of poor starving homeless children is:    City A and City C (' +num1+ ')';
}   


if(num1 == 0){
    var letter = 'A';
}else{
var letter = String.fromCharCode((num1-1) + 'A'.charCodeAt(0));
}
document.getElementById('letter').innerHTML = "The mayor of City A, who has little concern for the plight of homeless children, has a family name that begins with the letter:    " +letter;


var multiply = num2 * num3;
var hr = Math.floor(multiply / 60);
var min = multiply % 60;
document.getElementById('multiply').innerHTML = 'The last time someone donated to these children was:  (' +multiply+ ' mins) : ' +hr+ "hr " +min+ "min";
