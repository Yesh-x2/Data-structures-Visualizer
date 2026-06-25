function getArray(){

return document
.getElementById("arrayInput")
.value
.split(",")
.map(Number);

}

function displayBars(arr){

let container=
document.getElementById(
"barContainer"
);

container.innerHTML="";

arr.forEach(value=>{

let bar=
document.createElement("div");

bar.className=
"bar";

bar.style.height=
(value*3)+"px";

bar.innerHTML=
value;

container.appendChild(
bar
);

});

}

function bubbleSort(){

let arr=getArray();

for(let i=0;i<arr.length;i++){

for(
let j=0;
j<arr.length-i-1;
j++
){

if(arr[j]>arr[j+1]){

[arr[j],arr[j+1]]
=
[arr[j+1],arr[j]];

}

}

}

displayBars(arr);

showMessage(
"Bubble Sort Completed ✅"
);

}

function selectionSort(){

let arr=getArray();

for(let i=0;i<arr.length;i++){

let min=i;

for(
let j=i+1;
j<arr.length;
j++
){

if(arr[j]<arr[min]){

min=j;

}

}

[arr[i],arr[min]]
=
[arr[min],arr[i]];

}

displayBars(arr);

showMessage(
"Selection Sort Completed ✅"
);

}

function insertionSort(){

let arr=getArray();

for(
let i=1;
i<arr.length;
i++
){

let key=
arr[i];

let j=i-1;

while(
j>=0 &&
arr[j]>key
){

arr[j+1]=arr[j];

j--;

}

arr[j+1]=key;

}

displayBars(arr);

showMessage(
"Insertion Sort Completed ✅"
);

}

function mergeSort(arr){

if(arr.length<=1){

return arr;

}

let mid=
Math.floor(
arr.length/2
);

let left=
mergeSort(
arr.slice(0,mid)
);

let right=
mergeSort(
arr.slice(mid)
);

let result=[];

while(
left.length &&
right.length
){

if(left[0]<right[0]){

result.push(
left.shift()
);

}
else{

result.push(
right.shift()
);

}

}

return [

...result,
...left,
...right

];

}

function mergeSortDisplay(){

let arr=getArray();

displayBars(
mergeSort(arr)
);

showMessage(
"Merge Sort Completed ✅"
);

}

function quickSort(arr){

if(arr.length<=1){

return arr;

}

let pivot=
arr[arr.length-1];

let left=[];

let right=[];

for(
let i=0;
i<arr.length-1;
i++
){

if(arr[i]<pivot){

left.push(arr[i]);

}
else{

right.push(arr[i]);

}

}

return [

...quickSort(left),

pivot,

...quickSort(right)

];

}

function quickSortDisplay(){

let arr=getArray();

displayBars(
quickSort(arr)
);

showMessage(
"Quick Sort Completed ✅"
);

}

function resetSorting(){

document.getElementById(
"arrayInput"
).value="";

document.getElementById(
"barContainer"
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