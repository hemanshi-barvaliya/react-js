import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Blog from "./Blog";

function Cartitem() {
    return (
        <>
            <br />
            <div className="App nav-item text-uppercase text-lg-center p-3 mb-2 bg-light text-dark">

                <Link className="p-3 mb-2 bg-light text-dark link-underline-light" to={'item/1'}>Kids</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="p-3 mb-2 bg-light text-dark link-underline-light" to={'item/2'}>Men</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="p-3 mb-2 bg-light text-dark link-underline-light" to={'item/3'}>Women</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="p-3 mb-2 bg-light text-dark link-underline-light" to={'item/4'}>Offer</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <a href="http://192.168.0.152:3000/item/4">Test</a> */}
        </div>

            <br />

        </>
    );
}

export default Cartitem;