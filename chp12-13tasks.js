// question #1:
var inp=(prompt("enter any input:"));
if (inp>64 && ìnp<91){
    alert("this is an upper case letters");
}
else if(inp>96 && inp<123){
    alert("this is a lower case letters");
}
else{
    alert("this is digits");
}



// question #2:
var num1=+prompt("enter 1st intiger:");
var num2=+prompt("enter 2nd intiger:");
if (num1>num2 && num2<num1 && num1 !== num2 ){
    alert(num1+" "+"is greater")
}
else if (num2>num1 && num1<num2 && num1 !== num2 ){
    alert(num2+" "+"is greater")
}
else if (num1 == num2 ){
    alert("both are equal")
}




// question #3:
var num1=+prompt("enter an intiger:");
if (num1>0 ){
    alert("number is positive")
}
else if (num1<0){
    alert("number is negative")
}
else if (num1 == 0 ){
    alert("number is  equals to 0")
}



// question #4:
var num1=prompt("enter any vowel:");
if (num1 === 'a' || num1 === 'e' || num1 === 'i' || num1 === 'o' || num1 === 'u'  ){
    alert(true)
}
else{
    alert(false)
}



// question #5:
var inp=+prompt("enter your password only two try available:");
var pass=12345;
if(inp === pass){
    alert("Correct! The password you entered matches the original password")
}
else if(inp !== pass){
    alert("try last time");
    var inp=+prompt("enter your password only two try available:");
    if(inp === pass){
        alert("Correct! The password you entered matches the original password")
        }
        else{
            alert("Incorrect Password")
        }
    
}



// question #6:
var greeting; 
var hour = 13;
 if (hour < 18) {
      greeting = "Good day";
      alert(greeting);
 }
       else {
       greeting = "Good evening";
       alert(greeting)

    } 




// question #7:
var time=+prompt("enter time in 24 hours (e.g:0000 to 2359) :");
if (time >=0000 && time<1200){
    alert("Good morning!")
}
else if (time >=1200 && time<1700){
    alert("Good afternoon!")
}
else if (time >=1700 && time<2100){
    alert("Good evening!")
}
else if (time >=2100 && time<2359){
    alert("Good night!")
}