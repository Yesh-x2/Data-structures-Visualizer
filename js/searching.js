function getArray(){

return document
.getElementById("arrayInput")
.value
.split(",")
.map(Number);

}

function display(arr,index=-1){

let container=
document.getElementById(
"searchContainer"
);

container.innerHTML="";

arr.forEach(
(item,i)=>{

let box=
document.createElement("div");

box.className="box";

if(i===index){

box.classList.add(
"highlight"
);

}

box.innerHTML=item;

container.appendChild(
box
);

});

}

function linearSearch(){

let arr=getArray();

let key=
parseInt(
document.getElementById(
"target"
).value
);

let index=
arr.indexOf(key);

display(arr,index);

if(index===-1){

showMessage(
"Element Not Found ❌"
);

}
else{

showMessage(
"Found At Position "
+
(index+1)
+
" 🎯"
);

}

}

function binarySearch(){

let arr=
getArray().sort(
(a,b)=>a-b
);

let key=
parseInt(
document.getElementById(
"target"
).value
);

let low=0;

let high=
arr.length-1;

let found=-1;

while(low<=high){

let mid=
Math.floor(
(low+high)/2
);

if(arr[mid]===key){

found=mid;

break;

}

if(arr[mid]<key){

low=mid+1;

}
else{

high=mid-1;

}

}

display(arr,found);

if(found===-1){

showMessage(
"Element Not Found ❌"
);

}
else{

showMessage(
"Found At Position "
+
(found+1)
+
" 🎯"
);

}

}

function resetSearch(){

document.getElementById(
"arrayInput"
).value="";

document.getElementById(
"target"
).value="";

document.getElementById(
"searchContainer"
).innerHTML="";

showMessage(
"Reset Complete 🔄"
);

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}