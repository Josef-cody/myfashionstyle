import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

	const handleUpdateCartQty = (lineItemId, quantity) => {
		onUpdateCartQty(lineItemId, quantity);
	}

	const handleRemoveFromCart = () => {
		onRemoveFromCart(item.id);
	}


	return (
		<div className="cart-item">
			<Row>
				<Col sm={4}>
					<Card.Img className="cart-item__image mb-4" src={item.image.url} alt={item.name} />
				</Col>
				<Col sm={8}>
					<Row>

						<div className="cart-item__details">
							<Col><h4 className="production_title_text">{item.name}</h4></Col>
							<Row className='mb-1'>
								<Col sm={4}>
									<div className="d-flex">
										<Button variant='outline-secondary' size="sm" type="button" onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</Button>
										<span style={{ lineHeight: '15px' }} className="p-2">{item.quantity}</span>
										<Button variant='outline-secondary' size="sm" type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
									</div>
								</Col>
								<Col sm={8}>
									<h6 className="text-end m-0 p-0">{item.line_total.formatted_with_symbol}</h6>
								</Col>
							</Row>
						</div>
						<Button
							variant='danger'
							size="sm" 
							type="button"
							className="cart-item__remove mb-2"
							onClick={handleRemoveFromCart}
						>
							Remove
						</Button>
					</Row>
				</Col>

			</Row>
		</div>
	);
};

export default CartItem;

CartItem.propTypes = {
	item: PropTypes.object,
	handleUpdateCartQty: PropTypes.func,
	onUpdateCartQty: () => { },
	onRemoveFromCart: () => { }
};