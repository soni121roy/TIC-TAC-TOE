let board = ["","","","","","","","",""];
let turn = "X";
let boardDiv = document.getElementById("board");
let statusText = document.getElementById("status");

function draw(){
 boardDiv.innerHTML="";
 board.forEach((v,i)=>{
  boardDiv.innerHTML+=`<div class="cell" onclick="move(${i})">${v}</div>`;
 });
}
function move(i){
 if(board[i]!="" ) return;
 board[i]=turn;
 if(checkWin()){ statusText.innerText = `${turn} Jeet Gaya! 🎉`; return; }
 turn = turn==="X"?"O":"X";
 statusText.innerText = `${turn} ki Baari`;
 draw();
}
function checkWin(){
 let w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 return w.some(([a,b,c])=> board[a] && board[a]==board[b] && board[a]==board[c]);
}
function reset(){ board=["","","","","","","","",""]; turn="X"; statusText.innerText="X ki Baari"; draw(); }
draw();