import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { ImInstagram } from "react-icons/im";
import { LiaTripadvisor } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import owalimg1 from './Images/asset 11.jpeg';
import owalimg2 from './Images/asset 8.jpeg';
import owalimg3 from './Images/asset 13.jpeg';
import wpbimg1 from './Images/asset 15.jpeg'
import wpbimg2 from './Images/asset 16.jpeg'
import wpbimg3 from './Images/asset 17.jpeg'
import { Col, Container, Row } from 'react-bootstrap';










function Header()
{
    return(
        <>
        <div className='d-flex bg-black text-white justify-content-between main_header '>
                <div className='px-5 d-flex'>
                    <p   className='px-2 text-nowrap'>FOLLOW UP  </p>
                    <div className='px-2'><RiFacebookFill /></div>
                    <div className='px-2'><IoLogoTwitter /></div>
                    <div className='px-2'><ImInstagram /></div>
                    <div className='px-2'><LiaTripadvisor /></div>
                  
                </div>
            <div className='d-flex justify-content-end phone_number'>
                <p className='px-2'>RESERVATIONS + 1-444-123-459</p>
                <div><FaRegCalendarAlt /></div>
                <p className='px-2 text-nowrap'>BOOK NOW</p>
            </div>
        </div>
        <div>
            <OwlCarousel  loop margin={10} items={1} nav>
                <div class='item'>
                    <img src={owalimg1} height="800px"/>
                </div>
                <div class='item'>
                    <img src={owalimg2}  height="800px"/>
                </div>
                <div class='item'>
                    <img src={owalimg3}  height="800px"/>
                </div>wpbimg1
            </OwlCarousel>
        </div>
        <div>
            <Container>
                <Row>
                    <Col><img src={wpbimg1} height={270} width={355} /></Col>
                    <Col><img src={wpbimg2} height={270} width={355}/></Col>
                    <Col><img src={wpbimg3} height={270} width={355}/></Col>
                </Row>
            </Container>
        </div>
        <div>
            <h1 className='text-center pt-5'>WHAT WE OFFER</h1>
            <div className='container text-center px-5 pt-2 mx-5'>
                <p className=' px-5 pt-2 mx-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseruntm.</p>
            </div>
        </div>

        
        </>
    )
}

export default Header;