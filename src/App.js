import React ,{useState} from "react";
import "./style.css";
import {Questoins} from './Question'
import Accordion from  './Accordion'

export default function App() {
  const[x,setX]=useState(Questoins)
  

  
  return (
    <div>
      <h1 style={{display:'flex' , justifyContent: "center"}}>React interview Questions</h1>
      {x.map((current )=>{
        return(
          <>
         <Accordion  key = {current.id}{...current} />
          </>
        )
      })}
    </div>
  );
}
