import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/slices/productSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  const dispatch = useDispatch()
  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  useEffect(() => { dispatch(fetchProducts()) }, [])
  console.log(allProducts);
  return (
    <Container style={{ paddingTop: '10px' }} className='d-flex justify-content-center'>
      {loading ?
        <div className='d-flex justify-content-center align-items-center'>
          <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div> :
        <Row className='justify-content-center'>
          {allProducts?.length > 0 &&
            allProducts?.map((product, index) =>
              <Col xl={3} lg={4} md={6} key={index} className='d-flex justify-content-center pb-3' >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product?.thumbnail} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0, 20)}...</Card.Title>
                    <Link to={`view/${product?.id}`}>
                      <Button variant="primary">View more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )}
        </Row>
      }
    </Container>
  )
}

export default Home