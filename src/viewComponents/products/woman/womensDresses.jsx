import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import WomanDressesCard from "./woman-dresses-card"
import PropTypes from 'prop-types';

function WomensDressesList({ products, onAddToCart }) {

    return <>
        <Container className="text-start p-5 mb-2 mt-2">
            <Col>
                <Row><h2>DRESSES</h2></Row>
                <Row><p className='CTA-module-text'>Romantic, trendy or casual – shop our full selection of ladies’ dresses here. Whether you’re on the lookout for cocktail or fitted styles, our evening dresses have got you covered. Wedding coming up? Browse our lace and sheen bridesmaid dresses for a big day to remember. Or, if you’ve got a big night out planned, look no further than our party dresses, including everything from shimmery sequin dresses to flattering bodycon styles. We’ve also got a number of pluz-size dresses to show off your silhouette.</p></Row>
                <Row></Row>
                <Row>{products.map((product) => {
                    return <>
                        <WomanDressesCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </>
                })}</Row>
            </Col>
        </Container>
    </>
}
export default WomensDressesList

WomensDressesList.propTypes = {
    products: PropTypes.array,
    onAddToCart: PropTypes.func,
};