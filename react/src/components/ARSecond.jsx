import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import residential from "../assets/residential-construction.jpg";
import residential2 from "../assets/residential-construction2.jpg";
import commercial from "../assets/residential-work2.jpg";
import renovation from "../assets/renovational-work.jpg";
import structural2 from "../assets/structural-work2.jpg";
import interior from "../assets/interior.jpg";
import interior2 from "../assets/interior2.jpg";
import road3 from "../assets/road3.jpg";
import architectural from "../assets/architectural.jpg";
import management from "../assets/project-management.jpg";
import modern from "../assets/modernhouse.jpg";
import officebuilding2 from "../assets/officebuilding2.jpg";
import shoppingmall from '../assets/shoppingmall.jpg';
import shoppingmall2 from '../assets/shoppingmall2.jpg';
import shoppingmall3 from '../assets/shoppingmall3.jpg';


import vella from "../assets/vella.jpg"
function ARSecond() {
  return (
    <>
      <div className="container">
        <div className="top-text">
          <h6>WHAT WE DO</h6>
          <div className="services">
            <div className="view-services">
              <h2>Our Services</h2>
              <p>
                <a href="">View All Services</a>
              </p>
            </div>
          </div>
          <p className="intro">
            We offer a wide range of construction and building services to{" "}
            <br />
            meet your needs from residential homes to large commercial projects.
          </p>
        </div>
        <div className="card-components">
          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={residential2} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>
                  Residential <br />
                  Construction
                </h5>
              </Card.Title>
              <Card.Text className="card-text">
                Build your dream home with <br />
                quality and trust.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={commercial} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>
                  Commercial <br />
                  Construction
                </h5>
              </Card.Title>
              <Card.Text className="card-text">
                Modern spaces for <br />
                better tomorrow.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={renovation} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>
                  Renovation & <br />
                  Remodeling
                </h5>
              </Card.Title>
              <Card.Text className="card-text">
                Upgrade your space with <br />
                modern designs.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={structural2} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>Structural Work</h5>
              </Card.Title>
              <Card.Text className="card-text">
                Strong foundations for <br />a lasting future.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card-components">
          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={interior2} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>
                  Interior & Exterior <br />
                  Finishing
                </h5>
              </Card.Title>
              <Card.Text className="card-text">
                Enhance beauty and value
                <br />
                of your property.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={road3} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>Road & Civil Works</h5>
              </Card.Title>
              <Card.Text className="card-text">
                Infrastructure for <br />
                progress and development.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={architectural} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>Architectural Planning</h5>
              </Card.Title>
              <Card.Text className="card-text">
                Smart designs for
                <br />
                better living.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "13rem" }}>
            <Card.Img className="card-img" variant="top" src={management} />
            <Card.Body>
              <Card.Title className="card-title">
                <h5>Project Management</h5>
              </Card.Title>
              <Card.Text className="card-text">
                On-time, on-budget,
                <br />
                with excellence.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="projects">
              <h2>Our Projects</h2>

          <div className="card-components">
            <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={modern} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Modern Houses</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

             <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={officebuilding2} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Office Building</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

             <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={shoppingmall3} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Shopping Mall</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

          <div className="card-components">
            <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={vella} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Villa Project</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

             <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={residential} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Ongoing Project</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

             <Card className="card" style={{ width: "17rem" }}>
              <Card.Img className="card-img" variant="top" src={interior} />
              <Card.Body>
                <Card.Title className="card-title">
                  <h5>Interior Design</h5>
                </Card.Title>
                <Card.Text className="card-text">
                  Sukkur, Sindh
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

          
        </div>
      </div>
    </>
  );
}
export default ARSecond;
