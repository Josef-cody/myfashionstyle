import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles.css';


function HeroSlide() {
    return (
        <Container>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Img/Hero-women-fasion.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Container>
                        <Row><Col md={6}><h1 className="hero-text1-sub">SALE</h1></Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Img/Hero-shoes-fasion2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Container>
                        <Row><Col md={6}><h1 className="hero-text1-sub">SALE</h1></Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Img/Hero-man-fasion2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Container>
                        <Row><Col md={6}><h1 className="hero-text1-sub">SALE</h1></Col>
                        </Row>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default HeroSlide;