import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSlide from "./HeroSlide"
import { Container } from "react-bootstrap";
import MemberModal from "./products/particals/MemberShipModal"
import Feature from "./Feature"
import NavBar from './products/woman/NavbarTop';

function Index() {

    return <>
        <NavBar />
        <Container className="text-center p-5 CTA-member-text mb-5 mt-1">
            <div className="d-flex">
                <h6 className="CTA-member-text m-auto">Member deal: 15% off $60, 20% off $80, or 25% off $110 + free shipping</h6>
                <MemberModal />
            </div>
        </Container>
        <HeroSlide />
        <Feature />

    </>
}
export default Index