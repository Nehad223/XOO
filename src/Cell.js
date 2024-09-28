import React from 'react'
import './App.css';

type CellProps = {
 go: string;
 setGo: React.Dispatch<React.SetStateAction<string>>;
 id: number;
 cell: string[];
 setCells: React.Dispatch<React.SetStateAction<string[]>>;
 winningMessage:string;
};


const Cell = ({go,setGo,id,cell,setCell,winningMessage}:CellProps) => {
 const handleClick=(e)=>{
 if(winningMessage){
 return;
 }
 const nottaken= !cell[id];
 if(nottaken){
 if(go==="Player1"){
 handleCellchange("Player1");
 setGo("Player2");

 }
 else if(go==="Player2"){

 handleCellchange("Player2");
 setGo("Player1");

 }
 }
 
 }
 const handleCellchange=(e)=>{
 let copyCell=[...cell];
 copyCell[id]=e;
 setCell(copyCell); 

 }
 return (
 
 <div className='square'onClick={handleClick} >
 <div className={cell[id]}>
 {cell[id] ? (cell[id] === 'Player1' ? 'X' : 'O') : ''}
 </div>
 
 </div>
 )
}

export default Cell