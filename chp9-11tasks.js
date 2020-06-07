// question #1:
var city=prompt("enter city name:");
if (city==="karachi"){
    alert("Welcome to city of lights. ");
}
else{
    alert("Welcome to"+" "+city);
}



// question #2:
var gender=prompt("enter your gender:");
if (gender==="male"){
    alert("Good Morning Sir. ");
}
else if (gender==="female"){
    alert("Good Morning Ma'am.");
}



// question #3:
var color=prompt("enter traffic signal color:");
if (color==="red"){
    alert("Must Stop. ");
}
else if (color==="yellow"){
    alert("Ready to move.");
}
else if (color==="green"){
    alert("Move now.");
}



// question #4:
var fuel=prompt("enter remaining fuel in litre:");
if (fuel < 0.25){
    alert("Please refill the fuel in your car. ");
}
else if (fuel >= 0.25){
    alert("you have enough fuel.");
}



// question #5:
var a=4;
if (++a === 5){
     alert("given condition for variable a is true");
     }
 var b = 82; 
 if (b++ === 83){
      alert("given condition for variable b is true");
     } 
 
 var c = 12;
  if (c++ === 13){
       alert("condition 1 is true"); 
    } 
    if (c === 13){
         alert("condition 2 is true");
         }
          if (++c < 14){
               alert("condition 3 is true");
             }
              if(c === 14)
              { alert("condition 4 is true"); 
            } 
 
 var materialCost = 20000;
  var laborCost = 2000;
   var totalCost = materialCost + laborCost; 
   if (totalCost === laborCost + materialCost){ 
       alert("The cost equals"); 
    } 
 if (true){
      alert("True"); 
    } if (false) {
        alert("False");
    }
if("car" < "cat"){
     alert("car is smaller than cat");
     }


// question #6 is on html file:


// question #7:
var a=7;
alert("Let's paly game..please press enter..");
var num=+prompt("i have a secret number from 1 to 10..please enter any number from 1 to 10 then i will let you that your answer is correct ot No:");
if (num === a){
    alert("Bingi! Correct answer");
}
else if(num === a+1){
    alert("Close enough to the correct answer.");
}
else{
    alert("oop's you lose the game.");
}




// question #8:
var num=+prompt("enter any number:");
if (num%3===0){
    alert(num+" "+"is divisible by 3.");
}
else{
    alert(num+" "+"is not divisible by 3.");   
}



// question #9:
var num=+prompt("enter any number:");
if (num%2==0){
    alert(num+" "+"is a even number..")
}
else if(num%2!==0){
    alert(num+" "+"is a odd number");
}



// question #10:
var t=+prompt("enter temperature:");
if(t>40){
    alert("It is too hot outside.");
}
else if(t>30){
    alert("The Weather today is Normal.");
}
else if(t>20){
    alert("Today's Weather is cool.");
}
else if(t>10){
    alert("OMG! Today's Weather is so cool.");
}



// question #11:
var num1=+prompt("enter 1st number:");
var ope=prompt("enter operation (+,-,*,/ and %):");
var num2=+prompt("enter 2nd number:");
if (ope == "+"){
    var sum=num1+num2;
    alert("the sum of"+" "+num1+" "+"and"+" "+num2+" "+"is:"+sum);
}
else if (ope == "-"){
    var sub=num1-num2;
    alert("the subtraction of"+" "+num1+" "+"and"+" "+num2+" "+"is:"+sub);
}
else if (ope == "*"){
    var mul=num1*num2;
    alert("the multiplication of"+" "+num1+" "+"and"+" "+num2+" "+"is:"+mul);
}
else if (ope == "/"){
    var div=num1/num2;
    alert("the division of"+" "+num1+" "+"and"+" "+num2+" "+"is:"+div);
}
else if (ope == "%"){
    var mod=num1-num2;
    alert("the modulus of"+" "+num1+" "+"and"+" "+num2+" "+"is:"+mod);
}
