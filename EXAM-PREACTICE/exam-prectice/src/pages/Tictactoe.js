import React, { useState } from 'react'
let cnt=0;
function Tictactoe() {

const [list,setlist]=useState(['','','','','','','','','']);
const[winner,setwinner]=useState('');
const[disable,setdisable]=useState(false);



const btn = (i,v)=>{

    var d = [...list];
    alert({v});

    if(v=='')
    {
        if(cnt % 2 ==0 )
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
    checkwinner(d);
}

const resetgame=()=>{

    setlist(['','','','','','','','',''])
    setwinner('');
    setdisable(false);
    cnt=0;
}

const checkwinner=(d)=>{
    

    if( d[0] == 'X' && d[1] == 'X' && d[2] == 'X' ||
        d[3] == 'X' && d[4] == 'X' && d[5] == 'X' ||
        d[6] == 'X' && d[7] == 'X' && d[8] == 'X' ||
        d[2] == 'X' && d[4] == 'X' && d[6] == 'X' ||
        d[0] == 'X' && d[3] == 'X' && d[6] == 'X' ||
        d[1] == 'X' && d[4] == 'X' && d[7] == 'X' ||
        d[2] == 'X' && d[5] == 'X' && d[8] == 'X' ||
        d[0] == 'X' && d[4] == 'X' && d[8] == 'X' )
    {
        setwinner('X is winner');
        setdisable(true);
        
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
        setwinner('O is winner');
      setdisable(true);
     
    }
    else if(d[0]!='' && d[1]!='' && d[2]!='' && d[3]!='' && d[4]!='' && d[5]!='' && d[6]!='' && d[7]!='' && d[8]!='' )
    {
        setwinner('Game is Draw');
        setdisable(true);
    }

}





  return (
    <>
    <div>Tictactoe</div>
   
    <div style={{display:'grid',gridTemplateColumns: 'repeat(3, 50px)', gap: '10px', height: '100px' }}>


        {
            list && list.map((v,i)=>{
                return(
                  
                       (setwinner !=='') ?
                       <input type='button' disabled={disable} value={list[i]} onClick={(v)=>{btn(i,v.target.value)}}/> :
                       <input type='button' disabled={disable} value={list[i]} onClick={(v)=>{btn(i,v.target.value)}}/>
                      
                   
                )
            })
        }

    </div>
    <button onClick={resetgame}>Reset</button>
    </>
  )
}

export default Tictactoe