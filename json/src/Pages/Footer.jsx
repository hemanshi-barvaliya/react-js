import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './style.css';



function Footer(){

    const [list,setlist] = useState([]);
   

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setlist(json))

    },[]);
    return(

        <>

                {
                    list.map((v,i)=>{
                        return(
                            <div  key={i} className="box">
                                <div >id: {v.id}</div>
                                <div >name: {v.name}</div>
                                <div >email: {v.email}</div>
                                <div >address: </div>
                                <div >street: {v.address.street}</div>
                                <div >suite: {v.address.suite}</div>
                                <div >city: {v.address.city}</div>
                                <div >zipcode: {v.address.zipcode}</div>
                                <div >lat: {v.address.geo.lat}</div>
                                <div >lng: {v.address.geo.lng}</div>
                               
                        </div>
                        )
                    })
                }
  
   
        
        </>
    );
}
export default Footer

