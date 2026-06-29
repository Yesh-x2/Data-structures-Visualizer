function showSection(id){

document.querySelectorAll(".queueSection")
.forEach(section=>{

section.style.display="none";

});

document.getElementById(id)
.style.display="block";

}

/* SIMPLE QUEUE */

let simpleQueue=[];

function enqueueSimple(){

let value=
document.getElementById("simpleValue").value;

simpleQueue.push(value);

displaySimple();

}

function dequeueSimple(){

if(simpleQueue.length>0){

simpleQueue.shift();

}

displaySimple();

}

function displaySimple(){

let display=
document.getElementById("simpleDisplay");

display.innerHTML="";

simpleQueue.forEach(item=>{

display.innerHTML+=
`<div class="box">${item}</div>`;

});

}

/* CIRCULAR QUEUE */

let circularQueue=[];

function enqueueCircular(){

let value=
document.getElementById("circularValue").value;

circularQueue.push(value);

displayCircular();

}

function dequeueCircular(){

if(circularQueue.length>0){

circularQueue.shift();

}

displayCircular();

}

function displayCircular(){

let display=
document.getElementById("circularDisplay");

display.innerHTML="";

circularQueue.forEach(item=>{

display.innerHTML+=
`<div class="box">${item}</div>`;

});

}

/* PRIORITY QUEUE */

let priorityQueue=[];

function insertPriority(){

let value=
document.getElementById("priorityValue").value;

let priority=
Number(
document.getElementById("priorityNumber").value
);

priorityQueue.push({
value,
priority
});

priorityQueue.sort(
(a,b)=>a.priority-b.priority
);

displayPriority();

}

function deletePriority(){

priorityQueue.shift();

displayPriority();

}

function displayPriority(){

let display=
document.getElementById("priorityDisplay");

display.innerHTML="";

priorityQueue.forEach(item=>{

display.innerHTML+=

`<div class="box">
${item.value}
(${item.priority})
</div>`;

});

}

/* DEQUE */

let deque=[];

function insertFront(){

let value=
document.getElementById("dequeValue").value;

deque.unshift(value);

displayDeque();

}

function insertRear(){

let value=
document.getElementById("dequeValue").value;

deque.push(value);

displayDeque();

}

function deleteFront(){

deque.shift();

displayDeque();

}

function deleteRear(){

deque.pop();

displayDeque();

}

function displayDeque(){

let display=
document.getElementById("dequeDisplay");

display.innerHTML="";

deque.forEach(item=>{

display.innerHTML+=
`<div class="box">${item}</div>`;

});

}