import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Blog = () => {
    let { id } = useParams();
    const [list, setlist] = useState(''); 

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(res => res.json())
            .then(json => setlist(json))
        
    },)

  

    return (
        <div >
           
                <h4> Item: {id}</h4>
             
            </div>
          
      
    );
};

export default Blog;