import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';
import Header from '../Components/Header';



function Wishlist() {
  const dispatch=useDispatch()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  //get wishlist from store
  const wishlist=useSelector(state=>state.wishlistReducer)
console.log(wishlist);
  return (
    <>
          <Header />

    <Container style={{ paddingTop: '10px' }} className='d-flex justify-content-center'>
      {
        <Row className='justify-content-center w-100'>
          {wishlist?.length > 0 ?
            wishlist?.map((product, index) =>
              (<Col xl={3} lg={4} md={6} key={index} className='d-flex justify-content-center pb-3' >
                <Card style={{ width: '18rem' }} className='shadow'>
                  <Card.Img variant="top" src={product?.thumbnail}  height={'200px'} />
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0, 20)}...</Card.Title>
                      <div className='d-flex justify-content-between'>
                        <Button variant="light" onClick={()=>dispatch(removeFromWishlist(product?.id))}>
                          <i className="fa-solid fa-trash-can"></i>
                          Remove
                          </Button>
                        <Button variant="light"
                        onClick={()=>handleAddToCart(product)}
                        >
                          <i className="fa-solid fa-cart-plus"></i>
                          Add to cart
                          </Button>
                      </div>

                  </Card.Body>
                </Card>
              </Col>)
            ):
            <div className='p-5 d-flex justify-content-center align-items-center text-primary flex-column'>
          <h1>No item in your wishlist!</h1>
          <img src="empty-cardboard-box.png" alt="Empty box clip-art"  width={'300px'}/>
        </div>}
        </Row>
      }
    </Container>
    </>
  )
}

export default Wishlist