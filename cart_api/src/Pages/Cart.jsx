import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { btn } from "../shopSlice";

const Cart = () => {
    
    const [list, setlist] = useState([]); 
    const [cat, catlist] = useState(''); 

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setlist(json.products))
        
    },[]);

    console.log({list});

    useEffect(() => {
      fetch('https://dummyjson.com/products/category-list')
          .then(res => res.json())
          .then(json => catlist(json))
      
  },[cat]);

  function catproduct(c)
  {
    fetch(`https://dummyjson.com/products/category/${c}`)
      .then(res => res.json())
      .then(json => setlist(json.products))
   
  }
  const dispatch  = useDispatch();
  

    return (    
            <>
                <Container>
                    <Row>
                      <Col xs={3}>
                        {
                            cat && cat.map((v,i) => {

                              return(
                                <div className="cart_items">
                                  <div class="cart_item" key={i} onClick={()=>{catproduct(v)}}>{v}</div>
                                </div>
                              )

                            })
                        }
                      </Col>
                      <Col xs={9}>
                      {
                        <div className="row">
                          {
                            list && list.map((v,i)=>
                            (
                                <div className="box_border col-sm-6" key={v.id}> 
                                <div className="img_border">   
                                    <Link to={"item/" + v.id} >
                                        <img className="imges" src={v.thumbnail} />
                                    </Link>
                                </div>

                                <div className="title">
                                    <div>Title: {v.title}</div>
                                    <div>Category: {v.category}</div>
                                    <div className="price">${v.price}</div>
                                    <button className="btn" onClick={()=>{dispatch(btn(v))}}>Add to Cart</button>
                                    
                                    
                                </div>  
                                </div>  

                            ))
                          }

                        </div>
                      }
                      </Col>
                    </Row>
                </Container>
            </>
               
    );
};

export default Cart;