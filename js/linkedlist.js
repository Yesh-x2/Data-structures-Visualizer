let linkedList=[];

let maxSize=0;

let foundIndex=-1;

function createList(){

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

linkedList=[];

display();

showMessage(
"Linked List Created 🚀"
);

}

function insertNode(){

if(maxSize===0){

showMessage(
"Create List First"
);

return;

}

if(
linkedList.length>=maxSize
){

showMessage(
"List Full ❌"
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

linkedList.push(value);

display();

showMessage(
"Node Inserted ✅"
);

}

function deleteNode(){

let value=
document.getElementById("value").value;

let index=
linkedList.indexOf(value);

if(index===-1){

showMessage(
"Node Not Found"
);

return;

}

linkedList.splice(index,1);

display();

showMessage(
"Node Deleted 🗑️"
);

}

function searchNode(){

let value=
document.getElementById("value").value;

foundIndex=
linkedList.indexOf(value);

display();

if(foundIndex===-1){

showMessage(
"Node Not Found ❌"
);

}
else{

showMessage(
"Node Found 🎯"
);

}

}

function resetList(){

linkedList=[];

foundIndex=-1;

display();

showMessage(
"Linked List Reset 🔄"
);

}

function display(){

let container=
document.getElementById(
"listContainer"
);

container.innerHTML="";

linkedList.forEach(
(item,index)=>{

let node=
document.createElement("div");

node.className="node";

if(index===foundIndex){

node.classList.add(
"highlightNode"
);

}

node.innerHTML=item;

container.appendChild(node);

if(
index<
linkedList.length-1
){

let arrow=
document.createElement("div");

arrow.className="arrow";

arrow.innerHTML="➜";

container.appendChild(
arrow
);

}

});

if(
linkedList.length>0
){

let nullBox=
document.createElement("div");

nullBox.className=
"nullBox";

nullBox.innerHTML=
"NULL";

container.appendChild(
nullBox
);

}

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}