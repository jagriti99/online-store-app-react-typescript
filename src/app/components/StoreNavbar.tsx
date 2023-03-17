import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const StoreNavbar =()=> {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link style = {{color:"white",padding:"10px"}} to="/">
              Home
              </Link>
            <Link style = {{color:"white",padding:"10px"}} to="/cart">
              Cart
              </Link>
            
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default StoreNavbar;