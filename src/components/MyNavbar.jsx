import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={img1} alt="img logo" style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <NavLink to="/" className="fw-bold nav-link">
                Home
              </NavLink>
              <NavLink to="/tv-shows" className="fw-bold nav-link">
                TV Shows
              </NavLink>
              <Nav.Link className="fw-bold" href="#pricing">
                Movies
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#pricing">
                Recently Added
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#pricing">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
