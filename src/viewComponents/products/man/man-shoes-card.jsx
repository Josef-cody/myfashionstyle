import Button from 'react-bootstrap/Button';
import { React, useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce"
import { Card, Col, Container, Row } from 'react-bootstrap';

function ManShoesCard() {
  const [product, setProduct] = useState([])

  const fetchProducts = () => {
    commerce.products.list(
 {
  category_slug:["mens-shoes"]
 }
    ).then((product) => {
      setProduct(product.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }



  useEffect(() => {
    fetchProducts()
  }, [])
  console.log(product)

  return (<>
    <Container>
      <Row>
        {product?.map((product) => {
          return (<>
            <Col sm="12" md="6" className='g-5'>
              <Card>
                <div style={{ backgroundColor: "rgb(250, 245, 235)" }}>
                  <Card.Img variant="top" src={product?.image.url} />
                  <i class="fa-regular fa-heart likeButton"></i>
                </div>
                <Card.Body style={{ backgroundColor: "rgb(250, 245, 235)" }}>
                  <a href='./productDetail'>
                    <Card.Title className='production_title_text'>{product?.name}</Card.Title>
                  </a>
                  <Row>
                    <Col>
                      <Card.Text style={{ fontSize: "12px" }}>
                        {product?.price.formatted_with_code}
                      </Card.Text>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                      <Button variant="outline-secondary" size="sm" >Buy</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </>)
        })}

      </Row>
    </Container>
  </>
  )
}
export default ManShoesCard

