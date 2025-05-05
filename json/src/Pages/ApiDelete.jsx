import { useEffect, useState } from "react";

function ApiDelete()
{

     const[list,setlist]=useState([])
    
    
        useEffect(()=>{
    
            fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(json => setlist(json.results))
    
        },[]);
       
    
            
    
        

        return(
            <>
            
            {
                    list.map((v,i)=>{
                        return(
                            <div  key={v.id} className="box1">
                               
                                    <img src={v.image} width={250} height={190}/>
                                    <div className="main"> 
                                    <div><h3>{v.name}</h3></div> 
                                    <div>species:{v.species} </div> <br/>
                                </div>   
                            </div>
                    )})
            }   
        
            
            </>
        )
}
export default ApiDelete;