import axios from "axios";
import { useEffect, useState } from "react";


function Apiimages(){

    const[list,setlist] = useState([])


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
                        <div  key={v.id} className="box">
                            <div class="main"> 
                                <img src={v.image} width={250} height={190}/>
                                <div className="text">
                                <div><h3>{v.name}</h3></div> 
                                
                                <div>Alive:{v.species} </div> <br/>
                                <div>Last known location:<br/>{v.location.name}</div>
                               
                               </div>
                            </div>   
                        </div>
                )})


                // list.map((v,i)=>{

                //         return(

                //                 <>
                //                 <div>{v.id}</div>
                //                 <div>{v.title}</div>
                //                 <div>{v.body}</div>
                //                 </>

                //         )


                // })
        }   
    
        
        </>
    )
}


export default Apiimages;