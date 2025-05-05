import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { btn, shop } from "../shopSlice";

import { useDispatch } from "react-redux";

const Blog = () => {
    let { id } = useParams();
    const [list, setlist] = useState(''); 

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(res => res.json())
            .then(json => setlist(json))
        
    },)

    const dispatch  = useDispatch();

    return (
        <div className="row ">
            <div className="col-sm-4 Description box_border1">
                <h4> Item: {id}</h4>
                <p>Category: {list.category}</p>
                <p className="price">Price: ${list.price}</p>
                <p>Discount Percentage: {list.discountPercentage}%</p>
                <p>Brand: {list.brand}</p>
            </div>
            <div className="col-sm-8 box_border1">
                <h2 className=""><img className="imges" src={list.thumbnail}/></h2>
                <h2>{list.title}</h2>
                <h4>Description:</h4>
                <p>{list.description}</p>
                {/* <button className="btn" onClick={()=>{dispatch(btn(list))}}>Add to Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn" onClick={()=>{dispatch(shop(list))}}>Shop Now</button> */}
            </div>
        </div>
    );
};

export default Blog;