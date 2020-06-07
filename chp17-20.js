// question #1:
var threeDimen=[];



// question #2:
threeDimen=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(var i=0; i<threeDimen.length; i++){
    document.write(threeDimen[i]+"<br>");
}








// question #3:
for(var i=1; i<=10; i++){
    document.write(i+"<br>")
}



// question #4:
var table=prompt("Enter the Number to see its mulplication table:");
var length=prompt("Enter lenght of multiplication table:");
document.write("Multiplication table of "+table+" of length "+length+"<br>");
for(var i=1; i<=length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br>");
}



// question #5:
var fruits=["Apple","Banana","Mango","Orange","Strawberry"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");    
}
for(var i=0; i<fruits.length; i++){
    document.write("Ëlement At Index "+i+" is "+fruits[i]+"<br>");
}



// question #6:(all parts!)
document.write("Counting: <br>");
for( var i=1; i<=15; i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting: <br>");
for(var a=10; a>0; a--){
    document.write(a+",");
}
document.write("<br>Even: <br>");
for(var a=0; a<=20; a+=2){
    document.write(a+",");
}
document.write("<br>Odd: <br>");
for(var a=1; a<=19; a+=2){
    document.write(a+",");
}
document.write("<br>Series: <br>");
for(var a=2; a<=20; a+=2){
    document.write(a+"k,");
}




// question #7:
var arry=["cake","Apple pie","cookie","chips","patties"];
var found=false;
var index;
var userInp=prompt("Welcome to our bakery! what would you like to order: ");
for(var i=0; i<arry.length; i++){
    if(arry[i]==userInp){
        found=true;
        index=i;
        break
    }
}
if(found===true){
    document.write(userInp+" is available in our bakery at index no. "+index);
}
else{
    document.write("We are sorry "+userInp+" is not available in our bakery!")
}






// question #8:
var numbers=[24,53,78,91,12];
var largest=numbers[0]
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
}
document.write("Array Items: "+numbers+"<br>");
document.write("The Largest Number IS "+largest);




// question #9:
var numbers=[24,53,78,91,12];
var smallest=numbers[0]
for(var i=0; i<numbers.length; i++){
    if(numbers[i]<smallest){
        smallest=numbers[i]
    }
}
document.write("Array Items: "+numbers+"<br>");
document.write("The smallest Number IS "+smallest);



// question #10:
for(var i=1; i<=100; i++){
    if(i%5==0){
        document.write(i+",");
    }
}