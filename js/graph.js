let graph={};

function addVertex(){

let vertex=
document.getElementById(
"vertex"
).value;

if(vertex===""){

showMessage(
"Enter Vertex"
);

return;

}

if(!graph[vertex]){

graph[vertex]=[];

showMessage(
"Vertex Added ✅"
);

}

displayGraph();

}

function addEdge(){

let source=
document.getElementById(
"source"
).value;

let destination=
document.getElementById(
"destination"
).value;

if(
!graph[source]
||
!graph[destination]
){

showMessage(
"Create Vertices First"
);

return;

}

graph[source].push(
destination
);

graph[destination].push(
source
);

displayGraph();

showMessage(
"Edge Added 🔗"
);

}

function bfsTraversal(){

let start=
Object.keys(graph)[0];

if(!start){

showMessage(
"Graph Empty"
);

return;

}

let queue=[start];

let visited={};

let result=[];

visited[start]=true;

while(queue.length){

let current=
queue.shift();

result.push(
current
);

graph[current]
.forEach(neighbor=>{

if(
!visited[neighbor]
){

visited[neighbor]=true;

queue.push(
neighbor
);

}

});

}

showMessage(
"BFS : "
+
result.join(" → ")
);

}

function dfsTraversal(){

let start=
Object.keys(graph)[0];

if(!start){

showMessage(
"Graph Empty"
);

return;

}

let visited={};

let result=[];

dfs(start,visited,result);

showMessage(
"DFS : "
+
result.join(" → ")
);

}

function dfs(
vertex,
visited,
result
){

visited[vertex]=true;

result.push(vertex);

graph[vertex]
.forEach(neighbor=>{

if(
!visited[neighbor]
){

dfs(
neighbor,
visited,
result
);

}

});

}

function resetGraph(){

graph={};

displayGraph();

showMessage(
"Graph Reset 🔄"
);

}

function displayGraph(){

let vertexContainer=
document.getElementById(
"vertexContainer"
);

let edgeContainer=
document.getElementById(
"edgeContainer"
);

vertexContainer.innerHTML="";

edgeContainer.innerHTML="";

Object.keys(graph)
.forEach(vertex=>{

let node=
document.createElement(
"div"
);

node.className=
"vertex";

node.innerHTML=
vertex;

vertexContainer
.appendChild(node);

});

Object.keys(graph)
.forEach(vertex=>{

graph[vertex]
.forEach(neighbor=>{

let edge=
document.createElement(
"div"
);

edge.className=
"edge";

edge.innerHTML=

vertex
+
" ↔ "
+
neighbor;

edgeContainer
.appendChild(edge);

});

});

}

function showMessage(msg){

document.getElementById(
"message"
).innerHTML=msg;

}