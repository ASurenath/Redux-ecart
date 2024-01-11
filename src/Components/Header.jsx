import React, { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProducts } from '../Redux/slices/productSlice';



function Header({ insideHome }) {
    const wishlist = useSelector(state => state.wishlistReducer)
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    // const [wishlistLength,setWishlistLength]=useState(0)
    // useEffect(()=>{
    //     setWishlistLength(wishlist.length)
    // },[wishlist])
    return (
        <Navbar expand="lg" className="bg-primary w-100 text-light position-sticky" data-bs-theme={'dark'} style={{ zIndex: "2" }}>
            <Container className='w-75 d-flex justify-content-between'>
                <Link to={'/'}>
                    <Navbar.Brand className='fw-bold fs-3 text-light'><i className='fa-solid fa-shop'></i>E-Cart</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        {insideHome &&
                            <InputGroup aria-label="search" className='w-50 border border-light rounded-3'>
                                <InputGroup.Text className='bg-primary border-0'><i className="fa-solid fa-search"></i></InputGroup.Text>
                                <input onChange={e => dispatch(searchByProducts(e.target.value.toLowerCase()))} className={'form-control bg-primary border-0'} placeholder='Search...' />
                            </InputGroup>}

                        <Nav.Link className='fw-bold'><Link to={'/wishlist'}>Wishlist <Badge className='bg-danger'>{wishlist?.length}</Badge></Link></Nav.Link>
                        <Nav.Link className='fw-bold'><Link to={'/cart'}>Cart <Badge className='bg-danger'>{cart?.length}</Badge></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header