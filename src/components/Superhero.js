import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/kibraka.jpg"
import avengerImage from "../assets/images/superhero/tradisional.jpg"
import batmanImage from "../assets/images/superhero/tari.jpg"
import robinhoodImage from "../assets/images/superhero/WIKFN.jpg"
import spidermanImage from "../assets/images/superhero/guru.jpg"
import supermanImage from "../assets/images/superhero/ftsl.jpg"
import kopi from "../assets/images/superhero/kopiskuling.jpg"
import mpls from "../assets/images/superhero/mpls.jpg"
import rapat from "../assets/images/superhero/rapat.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-center text-dok">
          <div className="hero-title">
            DOKUMENTASI SMA NU
          </div>
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
              
                </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={mpls} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={kopi} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col><Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={rapat} alt="Dune Movies" className="images" />
              
              <div className="p-0 m-0 text-white">
                  
                </div>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
