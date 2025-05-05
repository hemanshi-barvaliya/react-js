import { useState } from "react";

function Footer()
{

    var aa = "Hello";

    const [name, setname] = useState('');
    const [rec, setrec]= useState([]);

    [...name, setrec]

    
    ['one','five','tow','three']




    const addvalue = (add) => {
        setName(add.target.value);
    };


    return(
        <h1>
           <input type="text" placeholder="Enter name" onChange={(e)=>(setname(e.target.value))}/>
           
            <button onClick={(()=>btn("Creative"))}>Click</button>
           
            Name: {name}

        </h1>
    )
}

export default Footer;