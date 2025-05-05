import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { btn } from '../counterSlice';
import './Style.css'

function Index() {
  const [list, setList] = useState([]);
  const [cat, setCatList] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setList(json.products))

  }, []);

 
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then((res) => res.json())
      .then((json) => setCatList(json))
  }, [cat]);


  function catList(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setList(json.products))

  }

  return (

    <Row>
      <Col xs={3}>
        {cat &&
          cat.map((v, i) => (
            <div key={i}>
              <div className='cart-list' onClick={() => catList(v)}>
                {v}
              </div>
            </div>
          ))}
      </Col>
      <Col xs={9}>
        <div className="row ">
          {list &&
            list.map((product) => (
              <div className="col-sm-4 cart-item" key={product.id}>
                <div>
                  <Link to={`item/${product.id}`}>
                    <img className="cart-item" src={product.thumbnail} alt={product.title} height={250} width={270} />
                  </Link>
                </div>

                <div className='title1'>
                  <div className='title'>Title: {product.title}</div>
                  <div className='title'>Category: {product.category}</div>
                  <div className="price title">${product.price}</div>
                  <div className='title'>
                    <button onClick={() => dispatch(btn(product))} className='btn1 '>Add To Cart</button>
                  </div>

                </div>
              </div>
            ))}
        </div>
      </Col>
    </Row>

  );
}

export default Index;
