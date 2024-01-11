import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeFromCart } from '../Redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'


function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)
  const navigate = useNavigate()

  const handleCheckout = () => {
    alert("Order placed successfully")
    dispatch(emptyCart())
    navigate('/')
  }
  const handleDecQuantity=(product)=>{
    if (product.quantity==1){
      dispatch(removeFromCart(product.id))
    }
    else{
      dispatch(decQuantity(product.id))
    }
  }
  

  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => { cart?.length > 0 && setTotalAmount(cart?.map(i => i.totalPrice).reduce((a, b) => a + b)) })

  return (
    <>
          <Header />

    <Container fluid={"sm"} className='pt-5'>
      {cart?.length > 0 ?
        <Row>
          <Col lg={8}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart?.map((i, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i.title}</td>
                      <td><img src={i.thumbnail} alt={i.title} height={"60px"} width={"60px"} /></td>
                      <td>
                        <div className='d-flex'>
                          <Button variant={'light'} className='m-1' onClick={()=>handleDecQuantity(i)}><i className="fa-solid fa-minus"/></Button>
                          <input type='text' className='form-control text-center m-1' value={i.quantity} readOnly  style={{width:"50px"}}/>
                          <Button variant={'light'} className='m-1' onClick={()=>dispatch(incQuantity(i.id))}><i className="fa-solid fa-plus"/></Button>
                          </div>
                      </td>
                      <td>${i.totalPrice}</td>
                      <td>
                        <Button variant={'link'} onClick={() => dispatch(removeFromCart(i.id))}>
                          <i src="" alt="" className="fa-solid fa-trash-can" />
                        </Button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
            <div className='d-flex float-end'>
              <Button variant='danger' className='m-3' onClick={() => dispatch(emptyCart())}>
                Empty cart
              </Button>
              <Button variant='light' className='m-3'>
                Shop more
              </Button>
            </div>
          </Col>

          <Col lg={4} className='d-flex justify-content-center align-items-center'>
            <div className='border d-inline-block m-5 p-3'>
              <h5>Total Products:{cart?.length}</h5>
              <h5>Total Amount: ${totalAmount}</h5>
              <hr />
              <div className='d-flex justify-content-end'>
                <Button variant='success' onClick={handleCheckout} > Checkout</Button>
              </div>
            </div>
          </Col>
        </Row>
        : <div className='p-5 d-flex justify-content-center align-items-center text-primary flex-column'>
          <h1>No item in your cart!</h1>
          <img src="empty-cardboard-box.png" alt="Empty box clip-art" width={'300px'} />
        </div>
      }
    </Container>
    </>
  )
}

export default Cart