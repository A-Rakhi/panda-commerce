import React from "react";
import logo from "../Navbar/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { Nav, Navbar } from "react-bootstrap";

function Naav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="#link">Over View</Nav.Link>
            <Nav.Link href="/Login">Log In</Nav.Link>
            <Nav.Link href="#link">
              <FaCartPlus style={{ fontSize: "18px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Naav;
