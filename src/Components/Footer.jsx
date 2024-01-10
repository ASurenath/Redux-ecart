import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Navbar expand="lg" className="bg-primary w-100 text-light">
            <Container className='w-100'>
            <Row className='w-100'>
  
  <Col lg={3} md={6}>
  <Navbar.Brand className='fw-bold fs-3 text-light'><i className='fa-solid fa-shop'></i>E-Cart</Navbar.Brand>

 </Col>

 <Col  lg={3} md={6}>
  <h5 className='px-5'>
    Links
  </h5>
  <ul>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/main'}>Create videos</Link></li>
    <li><Link to={'/main'}>Playlists</Link></li>
  </ul>
 </Col>
 <Col lg={3} md={6}>
 <h5 className='px-5'>
    Guides
  </h5>
  <ul>
    <li><Link to={'/main'}>Help</Link></li>
    <li><Link to={'/main'}>FAQ</Link></li>
    <li><Link to={'/main'}>Community</Link></li>
  </ul>
 </Col>
 <Col lg={3} md={6}>
 <h5 className='px-5'>
    Contact Us
  </h5>
  <form action="">
    <input type="email" name="" id="" placeholder='Your email id' className='form-control'/>
    <button className='btn btn-secondary mt-2 ms-5'>Send an E-mail</button>
  </form>
 </Col>
 </Row> 
            </Container>
        </Navbar>
  )
}

export default Footer