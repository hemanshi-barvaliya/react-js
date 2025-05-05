import React, { useEffect, useState } from 'react'

function Cart() {

    const [list,setlist]=useState('');
    const [cat,setcat]=useState('');

    useEffect(() => {

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setlist(json.products));
    },[])
    useEffect(() => {

        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(json => setlist(json.products));
    },[])
  return (
    <div>Cart</div>
  )
}

export default Cart
