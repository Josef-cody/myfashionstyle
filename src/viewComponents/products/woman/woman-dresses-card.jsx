import Button from 'react-bootstrap/Button';
import { React} from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function WomanDressesCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  }

  return (<>

            <Col sm={12} md={6} className='g-5'>
              <Card key={product.id}
                product={product}
                onAddToCart={onAddToCart}>
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
                      <Button variant="outline-secondary" size="sm" onClick={handleAddToCart} >Buy</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
    
  </>
  )
};

WomanDressesCard.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};
export default WomanDressesCard
