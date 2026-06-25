class Node{

constructor(value){

this.value=value;

this.left=null;

this.right=null;

}

}

let root=null;

function insertNode(){

let value=
parseInt(
document.getElementById("value").value
);

if(isNaN(value)){

showMessage(
"Enter Value"
);

return;

}

root=
insert(root,value);

displayTree();

showMessage(
"Node Inserted 🌳"
);

}

function insert(node,value){

if(node===null){

return new Node(value);

}

if(value<node.value){

node.left=
insert(
node.left,
value
);

}
else if(value>node.value){

node.right=
insert(
node.right,
value
);

}

return node;

}

function searchNode(){

let value=
parseInt(
document.getElementById("value").value
);

let found=
search(root,value);

if(found){

showMessage(
"Node Found 🎯"
);

}
else{

showMessage(
"Node Not Found ❌"
);

}

}

function search(node,value){

if(node===null){

return false;

}

if(node.value===value){

return true;

}

if(value<node.value){

return search(
node.left,
value
);

}

return search(
node.right,
value
);

}

function inorder(){

let result=[];

inorderTraversal(
root,
result
);

showMessage(
"Inorder : "
+
result.join(" → ")
);

}

function inorderTraversal(
node,
result
){

if(node){

inorderTraversal(
node.left,
result
);

result.push(
node.value
);

inorderTraversal(
node.right,
result
);

}

}

function preorder(){

let result=[];

preorderTraversal(
root,
result
);

showMessage(
"Preorder : "
+
result.join(" → ")
);

}

function preorderTraversal(
node,
result
){

if(node){

result.push(
node.value
);

preorderTraversal(
node.left,
result
);

preorderTraversal(
node.right,
result
);

}

}

function postorder(){

let result=[];

postorderTraversal(
root,
result
);

showMessage(
"Postorder : "
+
result.join(" → ")
);

}

function postorderTraversal(
node,
result
){

if(node){

postorderTraversal(
node.left,
result
);

postorderTraversal(
node.right,
result
);

result.push(
node.value
);

}

}

function resetTree(){

root=null;

displayTree();

showMessage(
"Tree Reset 🔄"
);

}

function displayTree(){

let container=
document.getElementById(
"treeContainer"
);

container.innerHTML="";

let values=[];

collectNodes(
root,
values
);

values.forEach(item=>{

let node=
document.createElement("div");

node.className=
"treeNode";

node.innerHTML=item;

container.appendChild(
node
);

});

}

function collectNodes(
node,
arr
){

if(node){

arr.push(
node.value
);

collectNodes(
node.left,
arr
);

collectNodes(
node.right,
arr
);

}

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}