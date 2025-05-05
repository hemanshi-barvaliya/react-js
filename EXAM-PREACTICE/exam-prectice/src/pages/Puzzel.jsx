import React, { useState } from 'react'

function Puzzel() {
    const[list,setlist]=useState([1,5,'',2,4,6,7,3,8]);

    const btn=(i,value)=>{
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
                d[i]=''
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
                    d[i]=''
                }
                if(d[4]=='')
                {
                    d[4]=value;
                    d[i]=''
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '10px', height:'100px' }}>
     {
        
        list && list.map((v,i)=>{

            return(

            <input type="button" value={v} onClick={(e)=>{btn(i,e.target.value)}} />
            )
        })
     }
     </div>
    </>
  )
}

export default Puzzel