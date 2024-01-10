import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'


function View() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const dispatch=useDispatch()
  const wishlist = useSelector(state => state.wishlistReducer)
  const handleWishlist = (product) => {
    const existingProduct = wishlist?.find(i => i.id == product.id)
    if(existingProduct){
      alert("Product already in wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
    setProduct(allProducts?.find(i => i.id == id))
  }, [])
  console.log(wishlist);

  return (
    <div>
      <Container className='p-5 m-5'>
        <Row>
          <Col md={6} style={{ overflowX: 'clip' }}>
            <img src={product?.thumbnail} alt={product?.title} height={"300px"} />
          </Col>

          <Col md={6} className='ps-5'>
            <p>PID:{product?.id}</p>
            <h2>{product?.title}</h2>
            <h4>${product?.price}</h4>
            <p>{product?.description}</p>
            <button className='btn btn-light m-3' onClick={() => handleWishlist(product)}
            >
              <i className="fa-solid fa-heart text-danger"></i>Add to wishlist</button>
            <button className='btn btn-light m-3' onClick={()=>dispatch(addToCart(product))}
            ><i className="fa-solid fa-cart-plus"></i>Add to cart</button>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default View