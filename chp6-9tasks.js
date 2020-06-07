// question # 1:
document.write("Result:"+"<br>");
var a=10;
document.write("The value of a is:"+a+"<br>");
document.write("..............................."+"<br>"+"<br>");
a=++a
document.write("The value of ++a is:"+a+"<br>");
document.write("Now the value of a is:"+a+"<br>"+"<br>"+"<br>");
document.write("The value of a++ is:"+ a++ +"<br>");
document.write("Now the value of a is:"+ a +"<br>"+"<br>"+"<br>");
document.write("The value of --a is:"+ --a +"<br>");
document.write("Now the value of a is:"+ a +"<br>"+"<br>"+"<br>");
document.write("The value of a-- is:"+ a-- +"<br>");
document.write("Now the value of a is:"+ a +"<br>"+"<br>"+"<br>");



// question # 2:
var a=2;
document.write("a is:"+a+"<br>");
var b=1;
document.write("b is:"+b+"<br>");
var result=--a - --b + ++b + b--;
document.write("The answer of the (--a - --b + ++b + b--) is: "+result);



// question #3:
var name=prompt("Enter your name:");
document.write("Welcome"+" "+name+"!");

// question #4:
var x=+prompt("enter an interger: ");
for(var i=1; i>0; i++){
    y=x;
    for(var a=1; a<=10; a++){
        document.write(x+"X"+a+"="+x*a+"<br>");
    }
    var x=+prompt("enter an interger: ");
    if (y===x){
        for(var j=1; j<=10; j++){
            document.write("5 X"+j+"="+5*j+"<br>")
        }
        break
    }
}




// question #4:
var x=+prompt("enter an interger: ");
// for(var i=1; i>0; i++){
    var y=x;
    for(var a=1; a<=10; a++){
        document.write(x+"X"+a+"="+x*a+"<br>");
    }
    var x=+prompt("enter an interger: ");
    if (y !== x){
        for(var j=1; j<=10; j++){
            document.write("5 X"+j+"="+5*j+"<br>")
        }
        break
    }


    // question #5 is on html file: