import React, { useState } from 'react';
var cnt=0;
const Tictac = () => {
   
 
   
         const [list, setlist] = useState(['','','','','','','','','']);
         const [winner, setWinner] = useState(""); 
         const [isButtonDisabled, setButtonDisabled] = useState(false);
        
        
         
           const btn = (i,v) => {
             
             var d = [...list];
             
             if(v=='')
             {
               
               if(cnt % 2 == 0)
               {
                 
                 d[i]='X'; 
                
             }
               else
             {
                
                 d[i]='O';
                 
   
             }
   
             cnt+=1;
           }
           
             setlist(d);
             checkWinner(d);
         };
         
   
         const resetGame  = () => {
           setlist(['','','','','','','','','']);
           setWinner('');
           setButtonDisabled(false);
           cnt = 0;
           
       };
         const checkWinner = (d) => 
         {
          
           if(d[0] == 'X' && d[1] == 'X' && d[2] == 'X' ||
               d[3] == 'X' && d[4] == 'X' && d[5] == 'X' ||
               d[6] == 'X' && d[7] == 'X' && d[8] == 'X' ||
               d[2] == 'X' && d[4] == 'X' && d[6] == 'X' ||
               d[0] == 'X' && d[3] == 'X' && d[6] == 'X' ||
               d[1] == 'X' && d[4] == 'X' && d[7] == 'X' ||
               d[2] == 'X' && d[5] == 'X' && d[8] == 'X' ||
               d[0] == 'X' && d[4] == 'X' && d[8] == 'X' )
           {
             setWinner('x is winner');
             setButtonDisabled(true);
            //  alert({winner});
            
           }
           else if(d[0] == 'O' && d[1] == 'O' && d[2] == 'O' ||
               d[3] == 'O' && d[4] == 'O' && d[5] == 'O' ||
               d[6] == 'O' && d[7] == 'O' && d[8] == 'O' ||
               d[2] == 'O' && d[4] == 'O' && d[6] == 'O' ||
               d[0] == 'O' && d[3] == 'O' && d[6] == 'O' ||
               d[1] == 'O' && d[4] == 'O' && d[7] == 'O' ||
               d[2] == 'O' && d[5] == 'O' && d[8] == 'O' ||
               d[0] == 'O' && d[4] == 'O' && d[8] == 'O' )
           {
             setWinner('O is winner');
             setButtonDisabled(true);
            //  alert({winner});
            
           }
           else if(d[0]!='' && d[1]!='' && d[2]!=''  && d[3]!='' && d[4]!='' && d[5]!='' && d[6]!='' && d[7]!='' && d[8]!='' )
           {
              setWinner('game is draw');
           }
  
         }
         
     return (
   
      <>
     <h1> tic tak toe </h1>
     <h2>{winner}</h2>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '10px', height:'100px' }}> 
             
               {
                   list.map((v,i)=>{
                       return(
                       
                      (setWinner !== '')?
                        
                       <input type='button'  disabled={isButtonDisabled} value={list[i]} onClick={(v) => {btn(i, v.target.value)}} />:
                       <input type='button'  disabled={isButtonDisabled} value={list[i]} onClick={(v) => {btn(i, v.target.value)}} />
   
                       )
                   })
               }
             </div>
             <button onClick={resetGame}>Reset Game</button>
   
       </>
     )
   }
   
   
   
   export default Tictac;
   
   
   
   