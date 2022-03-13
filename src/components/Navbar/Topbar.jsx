import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default class Topbar extends React.Component {

  render() {
    return (
      <div>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">News</Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    );
  }
}