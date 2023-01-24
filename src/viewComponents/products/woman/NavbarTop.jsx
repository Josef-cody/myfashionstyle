import { React, useState, useEffect } from 'react';
import { Container, Nav, Navbar, Form, Button, NavDropdown, Badge, Col, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingBag from "../functionalComponents/shoppingBag"
import PropTypes from 'prop-types';


function NavBarTop({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  const [modalShow, setModalShow] = useState(false);


  return (<>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Form className="d-flex me-auto searchBar">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
          />
          <Button variant="warning"><i className="fa-solid fa-magnifying-glass"></i></Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link className='CTA-module-right ms-4'><i class="fa-solid fa-arrow-right-to-bracket"></i><span className='CTA-topNavBar-text'> Sign in</span></Nav.Link>
          <Nav.Link className='CTA-module-right ms-4'><i class="fa-solid fa-location-dot"></i><span className='CTA-topNavBar-text'> Find Shop & Open time</span></Nav.Link>
          <Nav.Link className='CTA-module-right ms-4'><i class="fa-solid fa-phone"></i><span className='CTA-topNavBar-text'> Client service</span></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <Row className='m-auto mt-2'>
        <Col lg={5} md={5} sm={5} xs={5}>
          <Navbar collapseOnSelect expand="lg" className="navbar" variant="light">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className='Hamburger' />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
                  <NavDropdown title="Woman" id="basic-nav-dropdown" className='CTA-module-left'>
                    <NavDropdown.Item href="/products/woman-dresses">Dresses</NavDropdown.Item>
                    <NavDropdown.Item href="/products/woman-shoes">
                      Shoes
                    </NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title="Man" id="basic-nav-dropdown" className='CTA-module-left'>
                    <NavDropdown.Item href="/products/man-shirts">Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="/products/man-shoes">
                      Shoes
                    </NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title="Accessories" id="basic-nav-dropdown" className='CTA-module-left'>
                    <NavDropdown.Item href="#action/3.1">Womens-watches</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Womens-bags
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Womens-jewellery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mens-watches</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Sunglasses</NavDropdown.Item>

                  </NavDropdown>
                  <NavDropdown title="Home" id="basic-nav-dropdown" className='CTA-module-left'>
                    <NavDropdown.Item href="#action/3.1">Home-decoration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Furniture
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Groceries</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>

            </Container>
          </Navbar>
        </Col>
        <Col lg={2} md="auto" sm={2} xs={2}>
          <div>
            <a className="m-auto" href="/">
              <img
                src='/Img/MFS-Logo.png'
                className="d-block m-auto Logo"
                alt="Logo"
              />
            </a>
          </div>
        </Col>
        <Col lg={5} md={5} sm={5} xs={5}>
          <div className='d-flex justify-content-end FavoShop'>
            <Nav >
              <Nav.Link className='CTA-module-left' ><i className="fa-solid fa-heart"><span className='CTA-topNavBar-text'> Favourates</span></i></Nav.Link>
              <Nav.Link className='CTA-module-left'>
                <i className="fa-solid fa-bag-shopping" onClick={() => setModalShow(true)}>
                  <Badge className='shoppingItemAmount' bg="danger">
                    {cart !== null ? <span>{cart?.total_items}</span> : ''}
                  </Badge><span className='CTA-topNavBar-text'>  Shopping bag</span></i>
                <ShoppingBag
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  cart={cart}
                  onUpdateCartQty={onUpdateCartQty}
                  onRemoveFromCart={onRemoveFromCart}
                  onEmptyCart={onEmptyCart}
                />
              </Nav.Link>
            </Nav>
          </div>
        </Col>
      </Row>
    </Container>
  </>);
}

export default NavBarTop;

NavBarTop.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};

