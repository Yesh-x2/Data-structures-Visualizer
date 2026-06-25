let arr=[];

let maxSize=0;

let foundIndex=-1;

function createArray(){

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

arr=[];

foundIndex=-1;

display();

showMessage(
"Array Created Successfully 🚀"
);

}

function insertElement(){

if(maxSize===0){

showMessage(
"Create Array First"
);

return;

}

if(arr.length>=maxSize){

showMessage(
"Array Overflow ❌"
);

return;

}

let value=
document.getElementById("value").value;

let pos=
parseInt(
document.getElementById("position").value
);

if(value===""){

showMessage(
"Enter Value"
);

return;

}

if(
isNaN(pos)
||
pos<1
||
pos>arr.length+1
){

arr.push(value);

}
else{

arr.splice(
pos-1,
0,
value
);

}

display();

showMessage(
"Inserted Successfully ✅"
);

}

function deleteElement(){

let value=
document.getElementById("value").value;

let index=
arr.indexOf(value);

if(index===-1){

showMessage(
"Element Not Found"
);

return;

}

arr.splice(index,1);

display();

showMessage(
"Deleted Successfully 🗑️"
);

}

function searchElement(){

let value=
document.getElementById("value").value;

foundIndex=
arr.indexOf(value);

display();

if(foundIndex===-1){

showMessage(
"Element Not Found ❌"
);

}
else{

showMessage(
"Found At Position "
+
(foundIndex+1)
+
" 🎯"
);

document.body.classList.add(
"success"
);

setTimeout(()=>{

document.body.classList.remove(
"success"
);

},1000);

}

}

function resetArray(){

arr=[];

foundIndex=-1;

display();

showMessage(
"Array Reset 🔄"
);

}

function display(){

let container=
document.getElementById(
"arrayContainer"
);

container.innerHTML="";

arr.forEach(
(item,index)=>{

let box=
document.createElement(
"div"
);

box.className="box";

if(index===foundIndex){

box.classList.add(
"highlight"
);

}

box.innerHTML=

`
<span>
${item}
</span>
`;

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