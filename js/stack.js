let stack=[];

let maxSize=0;

function createStack(){

maxSize=
parseInt(
document.getElementById("size").value
);

if(
isNaN(maxSize)
||
maxSize<=0
){

showMessage(
"Enter Valid Size"
);

return;

}

stack=[];

display();

showMessage(
"Stack Created 🚀"
);

}

function pushElement(){

if(maxSize===0){

showMessage(
"Create Stack First"
);

return;

}

if(stack.length>=maxSize){

showMessage(
"Stack Overflow ❌"
);

return;

}

let value=
document.getElementById("value").value;

if(value===""){

showMessage(
"Enter Value"
);

return;

}

stack.push(value);

display();

showMessage(
"Element Pushed ✅"
);

}

function popElement(){

if(stack.length===0){

showMessage(
"Stack Underflow ❌"
);

return;

}

let removed=
stack.pop();

display();

showMessage(
removed+
" Removed"
);

}

function peekElement(){

if(stack.length===0){

showMessage(
"Stack Empty"
);

return;

}

showMessage(
"Top Element : "
+
stack[stack.length-1]
);

}

function searchElement(){

let value=
document.getElementById("value").value;

let pos=
stack.lastIndexOf(value);

if(pos===-1){

showMessage(
"Element Not Found"
);

}
else{

showMessage(
"Found At Position "
+
(pos+1)
);

}

}

function resetStack(){

stack=[];

display();

showMessage(
"Stack Reset 🔄"
);

}

function display(){

let container=
document.getElementById(
"stackContainer"
);

container.innerHTML="";

for(
let i=stack.length-1;
i>=0;
i--
){

let box=
document.createElement("div");

box.className=
"stackBox";

if(i===stack.length-1){

box.classList.add(
"topBox"
);

}

box.innerHTML=
stack[i];

container.appendChild(
box
);

}

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}