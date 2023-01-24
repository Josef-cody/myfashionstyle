import React from 'react';
import MemberModal from "./products/particals/MemberShipModal"
import { Container, Col, Row, Stack, Button } from 'react-bootstrap';

function Feature() {
    return (
        <div>
            <Container className="text-center mt-5">
                <Row>
                    <Col md={6}>
                        <img
                            className="d-block w-100"
                            src="./Img/man-fasion3.jpg"
                            alt="First slide" />
                    </Col>
                    <Col className='flex-column m-auto ' md={6}>
                        <Stack gap={5}>
                            <div><h1 className='text-danger  mt-2'>FEEL</h1></div>
                            <div><p className='text-secondary CTA-module-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem asperiores expedita totam officiis reprehenderit in sunt. Placeat maxime laborum repellat ad nobis aliquam quisquam, quia sequi, aut animi veniam?</p>
                            </div>
                            <div>
                                <p className='text-secondary CTA-module-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <Button variant="warning" className='mb-3 CTA'>Shop now</Button>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col className='flex-column m-auto ' xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                        <Stack gap={5}>
                            <div><h1 className='text-danger  mt-2'>ALIVE</h1></div>
                            <div><p className='text-secondary CTA-module-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem asperiores expedita totam officiis reprehenderit in sunt. Placeat maxime laborum repellat ad nobis aliquam quisquam, quia sequi, aut animi veniam?</p>
                            </div>
                            <div>
                                <p className='text-secondary CTA-module-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <Button variant="warning" className='mb-3 CTA'>Shop now</Button>
                        </Stack>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                        <img
                            className="d-block w-100"
                            src="./Img/man-fasion1.jpg"
                            alt="First slide" />
                    </Col>
                </Row>
                <Container className="text-center p-5 CTA-member-text mb-5 mt-5">
                    <div className="d-flex">
                        <h6 className="CTA-member-text m-auto">Become an <em>MyFashionStyle</em> Member & get 10% off your first purchase + rewards just for shopping!</h6>
                        <MemberModal />
                    </div>
                </Container>
                <Col md={12}>
                    <img
                        className="d-block w-100"
                        src="./Img/home-deco.jpg"
                        alt="First slide"
                    />
                    <div className='homeDeco-text'>
                        <h2>Time for something new?</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant='warning' className='CTA'>Check them out</Button>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Feature;