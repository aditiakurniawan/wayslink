import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import avatar from "../assets/images/userdefault.png";
import logo from "../assets/icon/user.png";
import Delete from "../components/modal/Delete";

function Result() {
  return (
    <>
      <div>
        <Container className="my-5 py-5" style={{ width: "420px" }}>
          <center>
            <img
              src={avatar}
              alt=""
              className="w-25"
              style={{ borderRadius: "50px" }}
            />
            <h2>Your Brand Name</h2>
            <p>
              Add multiple link for your instagram Bio and optimising your
              instragram traffic by using instaBio
            </p>
            <Row className="bg-dark my-4">
              <Col sm={2}>
                <img src={logo} alt="" />
              </Col>
              <Col sm={8} className="text-white ">
                <h5>facebook</h5>
              </Col>
            </Row>
            <Delete />
          </center>
        </Container>
      </div>
    </>
  );
}

export default Result;
