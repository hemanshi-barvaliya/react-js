import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {

    const [count, setcount] = useState(0);
    const [item, setitem] = useState(0);


    const memorized = useEffect(() => 
        {
        console.log("CNT = " + (item * 10));
        // return item * item;
    },[item])



    return (

        <>
            <center>
                <h1>Count : {count}</h1>
                <h1>Square : {memorized}</h1>
                <br />
                <button onClick={() => { setcount(count + 1) }}>Count Update</button>
                <button onClick={() => { setitem(item + 1) }}>Item Update</button>
            </center>
        </>

    )
}

export default Memo