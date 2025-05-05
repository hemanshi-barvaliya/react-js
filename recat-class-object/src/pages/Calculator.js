import { useState } from "react";

function Calculator(){

    const [value,setvalue]=useState('');

    return(
        <>
     
            <div> <input type= "text" value={value}/></div>
            
            <div><input type="button" value="1" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="2" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="3" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="+" onClick={e=>setvalue(value + e.target.value)}/></div>
    
            <div><input type="button" value="4" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="5" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="6" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="-" onClick={e=>setvalue(value + e.target.value)}/></div>
        
            <div><input type="button" value="7" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="8" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="9" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="*" onClick={e=>setvalue(value + e.target.value)}/></div>
            
        
            <div><input type="button" value="0" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="00" onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="." onClick={e=>setvalue(value + e.target.value)}/>
                <input type="button" value="/" onClick={e=>setvalue(value + e.target.value)}/></div>
           
        
            <div><input type="button" value="ac" onClick={e => setvalue('')}/>
                <input type="button" value="del" onClick={e=>setvalue(value.slice(0, -1))}/>
                <input type="button" value="=" onClick={e => setvalue(eval(value))}/></div>
              
            
        
        </>
    );
}

  export default Calculator;

