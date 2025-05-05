import React, { useState } from 'react'

function Todolist() {
    const [name,setname]=useState('');
    const [rec,setrec]=useState([]);
    const [uid,setuid]=useState('');
    const [status,setstatus]=useState(false);

    const Addvalue=(e)=>{
        setname(e.target.value)
    }
    const btn=()=>
    {
        if(status)
        {
            var update = rec;
            update[uid]=name;
            setrec(update)
            setstatus(false);
        }
        else{
            setrec([...rec,name]);
        }
        setname('');
    }

    const edit=(i)=>{
        setname(rec[i])
        setuid(i);
        setstatus(true);

    }
    const deleterecord=(index)=>{
            var deletedata = rec.filter((v,i)=>{return i!== index})
            setrec(deletedata);
           
    }



  return (
    <>
    <input type="text" value={name} onChange ={Addvalue} />
    <input type="button" value={status ? 'Add' : 'edit'} onClick={btn}/>

    <table border={1}>
        <thead>
            <tr>
                <th>No.</th>
                <th>name</th>
                <th>delete</th>
                <th>edit</th>
            </tr>
        </thead>
        <tbody>
            {
                rec && rec.map((v,i)=>(
                    <tr>
                        <td>{i+1}</td>
                        <td>{v}</td>
                        <td><button onClick={()=>{edit(i)}}>edit</button></td>
                        <td><button onClick={()=>{deleterecord(i)}}>delete</button></td>
                    </tr>
                ))
            }
        </tbody>
        
    </table>
    </>
  )
}

export default Todolist