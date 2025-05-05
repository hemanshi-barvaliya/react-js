import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 function Category()
 {

    const [list, setList] = useState([]);
    const [product , setproduct] = useState([]);
    

    useEffect(()=>{

        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
         .then(json => setList(json))
        // .then(console.log);
       
    },[]);

    useEffect(() => {
        fetch('https://dummyjson.com/products' )
            .then(res => res.json())
             .then(json => setproduct(json.products))
           
            // .then(console.log);
           
    }, []);



  return(
        <>
        <div className="row "> 
            <div className="col-sm-2"> 
                {list.map((v,i) => (
                    <>
                    
                        <div key={v.id}> 
                           { v.name}    
                         </div>     
                        </>
                    ))}
            </div>
            <div className="col-sm-10"> 
                <div className="row">

                {product.map((v,i) => (

                        <div className="box_border col-sm-6" key={v.id}> 
                            <div className="img_border">   
                                <Link to={"item/"+v.id} >
                                    <img src={v.thumbnail} />
                                </Link>
                            </div >
                            <div className="title">
                            <div>Title: {v.title}</div>
                            <div>Category: {v.category}</div>
                            <div className="price">${v.price}</div>
                            </div>  
                        </div>

                ))}
                </div>
           </div>
        </div>

        </>
    )
 
 }
 

 export default Category;