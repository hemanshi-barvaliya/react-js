import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaCertificate } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';






function Header()
{
    return(
        <>
        <div className='bg-blue font-10'>
    
            <Row className='padding-left-10 padding-10 text-align'>
                <Col >
                <IoIosMail />info@cdmi.in 
                </Col>
                <Col md={2}>
                    <FaCertificate />Verify Certificate
                </Col>
                <Col xs={4}>HAVE ANY QUESTION ? +91 90333 16003</Col>
                <Col >
                <select className='bg-blue select-box' >
                    <option >Select city:surat</option>
                    <option>Surat</option>
                    <option>Navsari</option>
                    <option>Ahemdabad</option>
                    </select>
                    </Col>
                <Col>
                    <CgFacebook className='margin-right-5' />
                    <GrTwitter className='margin-right-5' />
                    <FaLinkedinIn className='margin-right-5'/>
                    <FaInstagram className='margin-right-5'/>
                    <FaYoutube className='margin-right-5'/>
                    <MdWhatsapp className='margin-right-5'/>



                </Col>
            </Row>
        
        </div> 

<OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
        </>
    )
}
export default Header;