// question #1:
var studentNames=[];


// question #2:
var studentNames=new Array();


// question #3:
var stringArray=["a","b","c"];


// question #4:
var numbersArray=[1,2,2,3,6,7];


// question #5:
var booleanArray=[true,false];


// question #6:
var mixedArray=[6,7,"bob",false,"john",9,true];



// question #7:
var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
for(var i=0; i<qualification.length; i++){
    document.write(i+1+")"+" "+qualification[i]+"<br>");
}




// question #8:
var names=["Michael","John","Tony"]
var scores=[320,230,480]
for(var i=0; i<3; i++){
    percen=(scores[i]/500)*100;
    document.write("Score of "+names[i]+" is "+scores[i]+". Percentage: "+percen+"%"+"<br>");
}



// question #9:

var colors=["Red","Brown","Purple","Green","Blue"]
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9a:

var colors=["Red","Brown","Purple","Green","Blue"]
var newColor=prompt("enter color you want to add in beginning:");
colors.unshift(newColor);
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9b:

var colors=["Red","Brown","Purple","Green","Blue"]
var newColor=prompt("enter color you want to add at end:");
colors.push(newColor);
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9c:

var colors=["Red","Brown","Purple","Green","Blue"]
colors.unshift("Margenta","Yellow");
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9d:

var colors=["Red","Brown","Purple","Green","Blue"];
colors.shift();
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9e:

var colors=["Red","Brown","Purple","Green","Blue"];
colors.pop();
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9f:

var colors=["Red","Brown","Purple","Green","Blue"];
var newInd=prompt("enter index number you want to add a new color: ");
var newColor=prompt("enter new color you want to add: ");
colors[newInd]=newColor;
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}

// 9g:

var colors=["Red","Brown","Purple","Green","Blue"];
var newInd=prompt("enter index number you want to delete colors: ");
var size=prompt("enter how many colors you want to delete: ");
colors.splice(newInd,size);
for(var i=0; i<colors.length; i++){
    document.write(colors[i]+"<br>");
}





// question #10:
var scores=[320,230,480,120];
document.write("Scores of Students: "+scores+"<br>");
document.write("Ordered Scores of Students: "+scores.sort());





// question #11:
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities=cities.slice(2,4);
document.write("Cities list:"+"<br>"+cities+"<br>");
document.write("Selected cities list:"+"<br>"+selectedCities);




// question #12:
var  arr=["This","is","my","cat"]; 
document.write("Array:"+"<br>"+arr+"<br>");
document.write("String:"+"<br>"+arr.join(" "));




// question #13:
var devices=[];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices:<br>"+devices+"<br>");
for(var i=0; i<4; i++){
    document.write("Out:<br>"+devices.shift()+"<br>");
}



// question #14:
var newArr=[];
newArr.push("Keyboard");
newArr.push("Mouse");
newArr.push("Printer");
newArr.push("Monitor");
document.write("Devices:<br>"+newArr+"<br>");
for(var i=0; i<4; i++){
    document.write("Out:<br>"+newArr.pop()+"<br>");
}




// QUESTION #15 ON HTML FILE!