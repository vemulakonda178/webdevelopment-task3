import React,{useState} from 'react';

let NameHooks=()=>{
	let [name,setName]=useState("ntr");
		return (
			<div>
			<h2> {name} </h2>
            
   
           <button onClick={()=>{setName(name="ram")}}> change </button>
        
        </div>	
			
		)
	}
export default NameHooks;
