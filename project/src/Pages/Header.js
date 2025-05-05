
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillMail } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import './Style.css';



function Header()
{
    return(
        <>
             <Container>
                <Row>
                    <Col>
                    <a>
                        <FontAwesomeIcon icon="fa-brands fa-twitter" /> 
                        <p>info@cdmi.in </p>
                    </a>
                    </Col>
                    <Col >2 of 3 (wider)</Col>
                    <Col xs={6}>3 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            <FaEnvelope className='icon-color'/>
        </>
    )

}
export default Header;