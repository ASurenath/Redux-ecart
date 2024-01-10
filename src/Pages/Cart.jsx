import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'


function Cart() {
  const cart=useSelector(state=>state.cartReducer)
  return (
    <Container fluid={"sm"} className='pt-5'>
     {cart?.length>0?
      <Container>
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
              cart?.map((i,index)=>
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{i.title}</td>
                  <td><img src={i.thumbnail} alt={i.title} height={"60px"} width={"60px"}/></td>
                  <td>{i.quantity}</td>
                  <td>${i.totalPrice}</td>
                  <td><Button variant={'link'}>
                    <i src="" alt="" className="fa-solid fa-trash-can" />
                    </Button></td>
                </tr>
                )
              }
            </tbody>
          </Table>
        </Col>
        
        <Col lg={4}>
        </Col>
      </Container>
     :<div className='p-5 d-flex justify-content-center align-items-center'>
      <h1>No item in your cart!</h1>
     </div>
     }
    </Container>
  )
}

export default Cart