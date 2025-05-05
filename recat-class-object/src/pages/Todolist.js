
import { useState } from "react";
import { Table } from "react-bootstrap";

function TodoList()
{
    const [name, setName] = useState('');
    const [rec, setrec] = useState([]);
    const [uid, setuid]= useState();
    const[status,setstatus] = useState(false);


    const addvalue = (add) => {
        setName(add.target.value);
    };

    function btn()
    {
        if(status)
        {
            var update= rec;
            update[uid]=name;
            setrec(update);
            setstatus(false);
        }
        else
        {
            setrec([...rec, name]);  
           
        }
        setName('');
       
    }
   
    function edit(index)
    {
        setName(rec[index]);
        setuid(index);
        setstatus(true);
    }

    function deleteRecord(index)
    {
        var deldata = rec.filter((v,i)=>{return i!==index})
        setrec(deldata);
    }

    return (
        <>
        <input type="text" value={name} onChange={addvalue}/>
        <input type="button" value={status?'Edit' : 'Add'} onClick={btn}/>
        
          <table border={1}>
            <thead>
              <tr>
              <th>No.</th>
                                <th>name</th>
                                <th>edit</th>
                                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {
                 rec.map((v,i) =>  (
    
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{v}</td>
                    <td><button onClick={() => {edit(i)}}>Edit</button> </td>
                    <td><button onClick={() => {deleteRecord(i)}}>Delete</button>   
                    </td>
                </tr>        
                ))
              }
            </tbody>
          </table>
    
    
        </>
      );

}
export default TodoList;