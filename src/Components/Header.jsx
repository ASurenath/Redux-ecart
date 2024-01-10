import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
    const wishlist=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)

    // const [wishlistLength,setWishlistLength]=useState(0)
    // useEffect(()=>{
    //     setWishlistLength(wishlist.length)
    // },[wishlist])
    return (
        <Navbar expand="lg" className="bg-primary w-100 text-light position-sticky" style={{zIndex:"2"}}>
            <Container className='w-75'>
                <Link to={'/'}>
                    <Navbar.Brand className='fw-bold fs-3 text-light'><i className='fa-solid fa-shop'></i>E-Cart</Navbar.Brand>
                </Link>        
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fw-bold'><Link to={'/wishlist'}>Wishlist <Badge className='bg-danger'>{wishlist?.length}</Badge></Link></Nav.Link>
                        <Nav.Link className='fw-bold'><Link to={'/cart'}>Cart <Badge className='bg-danger'>{cart?.length}</Badge></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header