let queue=[];

let maxSize=0;

function createQueue(){

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

queue=[];

display();

showMessage(
"Queue Created 🚀"
);

}

function enqueueElement(){

if(maxSize===0){

showMessage(
"Create Queue First"
);

return;

}

if(queue.length>=maxSize){

showMessage(
"Queue Overflow ❌"
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

queue.push(value);

display();

showMessage(
"Element Enqueued ✅"
);

}

function dequeueElement(){

if(queue.length===0){

showMessage(
"Queue Underflow ❌"
);

return;

}

let removed=
queue.shift();

display();

showMessage(
removed+
" Removed"
);

}

function frontElement(){

if(queue.length===0){

showMessage(
"Queue Empty"
);

return;

}

showMessage(
"Front : "
+
queue[0]
);

}

function rearElement(){

if(queue.length===0){

showMessage(
"Queue Empty"
);

return;

}

showMessage(
"Rear : "
+
queue[queue.length-1]
);

}

function searchElement(){

let value=
document.getElementById("value").value;

let pos=
queue.indexOf(value);

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

function resetQueue(){

queue=[];

display();

showMessage(
"Queue Reset 🔄"
);

}

function display(){

let container=
document.getElementById(
"queueContainer"
);

container.innerHTML="";

queue.forEach(
(item,index)=>{

let box=
document.createElement("div");

box.className=
"queueBox";

if(index===0){

box.classList.add(
"frontBox"
);

}

if(index===queue.length-1){

box.classList.add(
"rearBox"
);

}

box.innerHTML=item;

container.appendChild(
box
);

});

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}