import { useState } from "react";

function Footer()
{

    // const [Name , setname] = useState('');

    // function btn(n)
    // {
    //     setname(n);
    // }
   
    const [count, setCount] = useState(0);
    function btn1() 
    {
       
        if (count < 10) {
            setCount(count + 1); 
        }
    }
    function btn2()
    {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
   
    return(
            // <>
            // <input type="text" placeholder="enter name" onChange={(e)=>(setname(e.target.value))}/>
            // <button onClick={()=>btn("Creative")}>Click</button>
            // Name: {Name}
            // </>
            <>
           
           <button onClick={btn1}>+</button>
            {count}
            <button onClick={btn2}>-</button>
          

            </>


    )
}
export default Footer;