import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Beer = ({name, tagline, image, abv, desc, id}) => {

    return (
 
        <div>
          
      <Container>
        <Row>
        <Col>1 of 3
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} width="100px" class="img-fluid center-block" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
              <Card.Text>
                <p>{tagline}</p>
                  <h6> Alcohol content: {abv}% </h6>
                    <p> {desc} </p>
                    <p>{id}</p>
              </Card.Text>
            <Button variant="primary">Delete beer</Button>
          </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      

        </div>
     );
}

 

export default Beer;