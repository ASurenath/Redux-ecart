import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, nextPage, prevPage } from '../Redux/slices/productSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


function Home() {
  const dispatch = useDispatch()
  const { allProducts, loading, error, productsPerPage, currentPage } = useSelector(state => state.productReducer)
  const totalPages=Math.ceil(allProducts.length/productsPerPage)
  const lastProductIndex=currentPage*productsPerPage
  const firstProductIndex=lastProductIndex-productsPerPage
  const visibleProducts=allProducts?.slice(firstProductIndex,lastProductIndex)
  useEffect(() => { dispatch(fetchProducts()) }, [])
  console.log(firstProductIndex,lastProductIndex);
  const handlePrev=()=>{
    if(currentPage>1){
      dispatch(prevPage())
    }
  }

  const handleNext=()=>{
    if(currentPage<totalPages){
      dispatch(nextPage())
    }
  }
  return (
    <>
      <Header insideHome />

      <Container style={{ paddingTop: '10px' }} className='d-flex flex-column justify-content-center'>
        {loading ?
          <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div> :
          <Row className='justify-content-center w-100'>
            {allProducts?.length > 0 ?
            // .slice(currentPage*productsPerPage,(currentPage+1)*productsPerPage)
              visibleProducts?.map((product, index) =>
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
              ):
              <div className='p-5 d-flex justify-content-center align-items-center text-primary flex-column'>
          <h1>No product found...</h1>
        </div>
              }
          </Row>
        }
        <div className='d-flex justify-content-center w-100'>
          <Button variant='light' onClick={handlePrev}><i className="fa-solid fa-angle-left"></i></Button>
          Page {currentPage} of {totalPages}
          <Button variant='light' onClick={handleNext}><i className="fa-solid fa-angle-right"></i></Button>
        </div>

      </Container>
    </>
  )
}

export default Home