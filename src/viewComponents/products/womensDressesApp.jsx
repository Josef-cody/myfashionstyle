import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import AppOrdersModal from "./particals/AppOrders"
import { Container } from "react-bootstrap";
import WomensDressesList from "./woman/womensDresses"
import NavBarTop from './woman/NavbarTop';

const DressApp = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})
    console.log(cart)

    /**
     * Fetch products data from Chec and stores in the products data object.
     */
    const fetchProducts = async () => {
        await commerce.products.list({
            category_slug: ['womens-dresses']
        }).then((products) => {
            setProducts(products.data);
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }

    /**
     * Adds a product to the current cart in session
     *
     * @param {string} productId The ID of the product being added
     * @param {number} quantity The quantity of the product being added
     */
    const handleAddToCart = async (productId, quantity) => {
        await commerce.cart.add(productId, quantity).then((item) => {
            setCart(item.cart);
        }).catch((error) => {
            console.error('There was an error adding the item to the cart', error);
        });
    }

    /**
     * Removes line item from cart
     *
     * @param {string} lineItemId ID of the line item being removed
     */
    const handleRemoveFromCart = async (lineItemId) => {
        await commerce.cart.remove(lineItemId).then((resp) => {
            setCart(resp.cart);
        }).catch((error) => {
            console.error('There was an error removing the item from the cart', error);
        });
    }

    /**
     * Updates line_items in cart
     *
     * @param {string} lineItemId ID of the cart line item being updated
     * @param {number} newQuantity New line item quantity to update
     */
    const handleUpdateCartQty = async (lineItemId, quantity) => {
        await commerce.cart.update(lineItemId, { quantity }).then((resp) => {
            setCart(resp.cart);
        }).catch((error) => {
            console.log('There was an error updating the cart items', error);
        });
    }
    /**
     * Retrieve the current cart or create one if one does not exist
     */
    const fetchCart = async () => {
        await commerce.cart.retrieve().then((cart) => {
            setCart(cart);
        }).catch((error) => {
            console.log('There was an error fetching the cart', error);
        });
    }
    /**
     * Empties cart contents
     */
    const handleEmptyCart = async () => {
        await commerce.cart.empty().then((resp) => {
            setCart(resp.cart);
        }).catch((error) => {
            console.error('There was an error emptying the cart', error);
        });
    }

    // Because React rendering can be triggered for many different reasons, 
    // it is best practice to wrap our commerce object method calls into a 
    // useEffect() hook. This hook acts as the replacment to componentWillMount() 
    // function when using class components. By leaving the second argument array 
    // empty, this method will run once before the initial render.
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (<>
        <NavBarTop
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
        />
        <Container className="text-center p-5 CTA-member-text mb-2 mt-2">
            <div className="d-flex">
                <h3 className="CTA-member-text m-auto">15% off app orders!</h3>
                <AppOrdersModal />
            </div>
        </Container>
        <Container>
            <WomensDressesList
                products={products}
                onAddToCart={handleAddToCart}
            />
        </Container>
    </>
    );
}

export default DressApp;