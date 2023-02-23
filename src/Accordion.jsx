import React ,{useState} from 'react';

export default function Accordion({questoins, Answer}) {
  const[y , setY]= useState(false)
  return (
    <>
    <div style={{display:'flex'  , justifyContent: "center",
    alignItems: "center" }}>
      <div>
      <h3 style={{  color:'red' , width:'30rem' , display:'flex' , justifyContent:"space-between" ,  cursor: "pointer"
    }}  onClick={() => setY(!y)}>
        {questoins}
        <button onClick={() => setY(!y)}> {y ? '➖' : '➕'} </button>
      </h3>
     

      {y && <p style={{width:'30rem'  , width:'30rem' , height:'10vh' , backgroundColor:'gray' , color:'white' , textAlign :'center' , marginTop:'1rem'}}>{Answer}</p>}
      </div>
      </div>
    </>
  );
}
