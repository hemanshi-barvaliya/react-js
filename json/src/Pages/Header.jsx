import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";



function Header(){

    const [list,setlist] = useState([]);
   

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => setlist(json))

    },[]);
    return(

        <>

        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((v,i)=>{
                        return(
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.completed ? 'true' : 'false'}</td>
                            </tr>
                        )
                    })
                }
                <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
            </tbody>
        </table>
        
        </>
    );
}
export default Header

