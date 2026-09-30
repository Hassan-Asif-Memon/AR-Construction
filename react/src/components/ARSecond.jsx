 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import residential from "../assets/residential-construction.jpg";
function ARSecond(){
    return(<>
    <div className="container">
      <div className="top-text">
    <h6>WHAT WE DO</h6>
    <div className="services">
      <div className="view-services">
    <h2>Our Services</h2>
    <p><a href="">View All Services</a></p>
    </div>
    </div>
    <p className='intro'>We offer a wide range of construction and building services to <br />
    meet your needs from residential homes to large commercial projects.</p>
    </div>
    <div className="card-components">

    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Residential Construction</Card.Title>
        <Card.Text>
          Build your dream home with quality and trust.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Commercial Construction</Card.Title>
        <Card.Text>
          Modern spaces for better tomorrow.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Renovation & Remodeling</Card.Title>
        <Card.Text>
          Upgrade your space with modern designs.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Structural Work</Card.Title>
        <Card.Text>
          Strong foundations for a lasting future.
        </Card.Text>
      </Card.Body>
    </Card>


    </div>
    </div>
    </>)
}
export default ARSecond;