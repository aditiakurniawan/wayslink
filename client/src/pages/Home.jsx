import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/home.css";
import logo from "../assets/images/icon.png";
import background from "../assets/images/bg.png";
import Login from "../components/modal/Login";
import Register from "../components/modal/Register";
import Sidebar from "../components/Sidebar";

function Home() {
  document.title = `Home`;
  return (
    <>
      <Container fluid style={{ backgroundColor: "#E5E5E5" }}>
        <Container>
          <Row className="py-3">
            <Col md={4}>
              <img src={logo} />
            </Col>
            <Col md={{ span: 3, offset: 5 }}>
              <Login />
              <Register />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        style={{ backgroundColor: "#E5E5E5" }}
        className="background"
      >
        <Container className="homeText ">
          <Row className="w-50">
            <h1 style={{ fontSize: "72px" }}>
              The Only Link You’ll Ever Need{" "}
            </h1>
            <div>
              <p style={{ fontSize: "25px" }}>
                Add a link for your Social Bio and optimize your social media
                traffic.
              </p>
              <p style={{ fontSize: "25px" }} className="py-4">
                safe, fast and easy to use
              </p>
            </div>
          </Row>
          <button className="get py-2 px-3 mt-4 fs-5">
            Get Started For Free
          </button>
        </Container>
      </Container>
    </>
  );
}

export default Home;
