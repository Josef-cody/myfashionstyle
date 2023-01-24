import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import AppOrdersModal from "../particals/AppOrders"
import WomanShoesCard from "./woman-shoes-card"

function womanShoes() {

    return <>

        <Container className="text-center p-5 CTA-member-text mb-2 mt-2">
            <div className="d-flex">
                <h3 className="CTA-member-text m-auto">15% off app orders!</h3>
                <AppOrdersModal />
            </div>
        </Container>
        <Container className="text-start p-5 mb-2 mt-2">
            <Col>
                <Row><h2>SHOES</h2></Row>
                <Row><p className='CTA-module-text'>Romantic, trendy or casual – shop our full selection of ladies’ dresses here. Whether you’re on the lookout for cocktail or fitted styles, our evening dresses have got you covered. Wedding coming up? Browse our lace and sheen bridesmaid dresses for a big day to remember. Or, if you’ve got a big night out planned, look no further than our party dresses, including everything from shimmery sequin dresses to flattering bodycon styles. We’ve also got a number of pluz-size dresses to show off your silhouette.</p></Row>
                <Row></Row>
                <Row><WomanShoesCard /></Row>
            </Col>
        </Container>
    </>
}
export default womanShoes