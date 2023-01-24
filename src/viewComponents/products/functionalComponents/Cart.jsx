import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './cartItem';
import { Button,ButtonGroup,Col,Row } from 'react-bootstrap';

const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart?.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  const renderItems = () => (
    cart?.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        onUpdateCartQty={onUpdateCartQty}
        onRemoveFromCart={onRemoveFromCart}
        key={lineItem.id}
        className="cart__inner"
      />
    ))
  )

  const renderTotal = () => (
    <Row className="cart__total">
      <Col><p className="cart__total-title">Subtotal:</p></Col>
      <Col><p className="text-end m-0 p-0">{cart?.subtotal.formatted_with_symbol}</p></Col>
    </Row>
  )


  return (
    <Col className="cart">
      {renderEmptyMessage()}
      {renderItems()}
      {renderTotal()}
      <Row className="mt-5">
        <ButtonGroup vertical>
          <Button variant="outline-secondary" size="lg" className='mb-2'><span >Empty the bag</span></Button>
          <Button variant="dark" size="lg" ><span >Check out</span></Button>
        </ButtonGroup>
      </Row >
    </Col>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => { },
  onUpdateCartQty: () => { },
  onEmptyCart: () => { },
};