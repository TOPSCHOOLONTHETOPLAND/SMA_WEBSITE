import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  

  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col md={6}>
            <div className="title-button" variant="white">SMA NU
              
            </div>
          </Col>
          <Col md={4}>
            <div className="intro-gombeng" variant="white">GOMBENGSARI</div>
          </Col>
        </Row>

        <div className="intro-topschool" variant="white">TOP SCHOOL ON THE TOP LAND</div>
      </Container>
    </div>
  );
};

export default Intro;