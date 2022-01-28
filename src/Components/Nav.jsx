import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


const Nav = () => {
    return ( 
        <div>
 
 {/* <Navbar bg="dark" variant="dark">
    <Container>
 
    <Nav className="me-auto">
      <Nav.Link to="/">Home</Nav.Link>
      <Nav.Link to="/about">About</Nav.Link>
      <Nav.Link to="/menu">menu</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

<Navbar bg="dark" variant= "dark" expand="lg">
  <Container>
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Brand href="/about">About</Navbar.Brand>
  <Navbar.Brand href="/menu">Menu</Navbar.Brand>
  <Navbar.Brand href="/contactUs">Contact Us</Navbar.Brand>
  


  </Container>
</Navbar>

        {/* <Link to = "/"> */}
            
            {/* <Button variant="primary" size="lg"> */}
                {/* Home */}
            {/* </Button> */}
        {/* </Link> */}
        {/* <Link to = "/about">
            <Button variant="secondary" size="lg">
                About
            </Button>
        </Link> */}
        {/* <Link to = "/menu">
            <Button variant="primary" size="lg">
                Menu
            </Button>   
        </Link> */}
        {/* <Link to = "/contactUs">
            <Button variant="secondary" size="lg">
                Contact Us
            </Button>
        </Link> */}

        </div>
     );
}
 
export default Nav;