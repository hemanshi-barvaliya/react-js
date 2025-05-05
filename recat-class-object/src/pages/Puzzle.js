import { useState } from "react";

function Puzzle(){
    
    const[list, setlist] = useState([5,'',1,2,4,7,6,8,3])

    const btn = (i,value)=>
    {
        var d=[...list];

        if(i==0)
        {
            if(d[1]=='')
            {
                d[1]=value;
                d[i]='';
            }
            if(d[3]=='')
            {
                d[3]=value;
                d[i]='';
            }
        }
        if(i==1)
        {
            if(d[0]=='')
            {
                d[0]=value;
                d[i]='';
            }
            if(d[2]=='')
            {
                d[2]=value;
                d[i]='';
            }
            if(d[4]=='')
            {
                d[4]=value;
                d[i]='';
                }
        }
            
        if(i==2)
        {
            if(d[1]=='')
            {
                d[1]=value;
                d[i]='';
            }
            if(d[5]=='')
            {
                d[5]=value;
                 d[i]='';
            }
        }
        if(i==3)
        {
            if(d[0]=='')
            {
                d[0]=value;
                d[i]='';
            }
          
            if(d[4]=='')
            {
                d[4]=value;
                d[i]='';
            }
            if(d[6]=='')
            {
                    d[6]=value;
                    d[i]='';
            }
        }  
        if(i==4)
        {
            if(d[1]=='')
            {
                d[1]=value;
                d[i]='';
            }
            if(d[3]=='')
            {
                d[3]=value;
                d[i]='';
            }
            if(d[5]=='')
            {
                d[5]=value;
                d[i]='';
            }
            if(d[7]=='')
            {
                d[7]=value;
                d[i]='';
            }
        }  
        if(i==5)
        {
            if(d[2]=='')
            {
                d[2]=value;
                d[i]='';
            }
            if(d[4]=='')
            {
                d[4]=value;
                d[i]='';
            }
            if(d[8]=='')
            {
                d[8]=value;
                d[i]='';
                }
        }
        if(i==6)
        {
            if(d[3]=='')
            {
                d[3]=value;
                d[i]='';
            }
            if(d[7]=='')
            {
                d[7]=value;
                d[i]='';
            }
        }
        if(i==7)
        {
            if(d[4]=='')
            {
                d[4]=value;
                d[i]='';
            }
            if(d[6]=='')
            {
                d[6]=value;
                d[i]='';
            }
            if(d[8]=='')
            {
                d[8]=value;
                d[i]='';
            }
        }
        if(i==8)
            {
                if(d[5]=='')
                {
                    d[5]=value;
                    d[i]='';
                }
                if(d[7]=='')
                {
                    d[7]=value;
                    d[i]='';
                }
                
            }
            setlist(d);
    }

  

    return (
        <>
          <h1> Number Puzzle </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '10px', height:'100px' }}>
    
            {/* <input type='button' value={list[0]} onClick={(e) => {btn(0, e.target.value)}} />
            <input type='button' value={list[1]} onClick={(e) => {btn(1, e.target.value)}} />
            <input type='button' value={list[2]} onClick={(e) => {btn(2, e.target.value)}} />
            <input type='button' value={list[3]} onClick={(e) => {btn(3, e.target.value)}} />
            <input type='button' value={list[4]} onClick={(e) => {btn(4, e.target.value)}} />
            <input type='button' value={list[5]} onClick={(e) => {btn(5, e.target.value)}} />
            <input type='button' value={list[6]} onClick={(e) => {btn(6, e.target.value)}} />
            <input type='button' value={list[7]} onClick={(e) => {btn(7, e.target.value)}} />
            <input type='button' value={list[8]} onClick={(e) => {btn(8, e.target.value)}} /> */}

            {
                list.map((v,i)=>{
                    return(
                        <input type='button' value={list[i]} onClick={(v) => {btn(i, v.target.value)}} />
                    )
                })
            }
    
          </div>
        </>
      )
    
    }
    
export default Puzzle;

