import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 function Beauty()
 {

    const [furniture, setfurniture] = useState([]);
    const [product , setproduct] = useState([]);
    
    useEffect(()=>{

        fetch('https://dummyjson.com/products/category/furniture')
        .then(res => res.json())
         //.then(json => setfurniture(json))
        .then(console.log);
       
    },[]);
   
    

    useEffect(() => {
        fetch('https://dummyjson.com/products' )
            .then(res => res.json())
             .then(json => setproduct(json.products))
           
            // .then(console.log);
           
    }, []);

     console.log({furniture});

 

  return(
        <>

               
                {furniture.map((v,i) => (
                    <div key={v.id}> 
                           <>
                           {v.id}
                                </>
                    </div> 
                ))}
                 

          

        </>
    )
 
 }
 

 export default Beauty;


//  const filteredData = setproduct.filter(product =>
//     product.tags == beauty);
// console.log(filteredData);


 
