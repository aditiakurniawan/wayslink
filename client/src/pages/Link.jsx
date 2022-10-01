import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import example from "../assets/images/example.png";
import view from "../assets/icon/View.png";
import edit from "../assets/icon/Edit.png";
import delet from "../assets/icon/Delete.png";

function Link() {
  return (
    <>
      <Row>
        <Sidebar />
        <Col>
          <h3 className="w-100 px-5 py-4">My Link</h3>
          <Row
            style={{ backgroundColor: "#ECECEC", height: "100vh" }}
            className="pt-5"
          >
            <Container className="w-100 px-5 py-3">
              <Row xs="auto">
                <Col>
                  <h4>All Link</h4>
                </Col>
                <Col>
                  <h6
                    style={{
                      color: "white",
                      backgroundColor: "#FF9F00",
                      width: "25px",
                      borderRadius: "10px",
                      textAlign: "center",
                      marginTop: "6px",
                    }}
                  >
                    1
                  </h6>
                </Col>
                <Col sm={9}>
                  <Form.Group className=" mb-5 border-bottom border-secondary">
                    <Form.Control
                      placeholder="Find your link"
                      type="text"
                      name="email"
                      style={{
                        border: "0px ",
                        backgroundColor: "#ECECEC",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#FF9F00",
                      border: "none",
                    }}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
              <Row className="mt-5 w-100">
                <Col sm={2}>
                  <img src={example} alt="" />
                </Col>
                <Col>
                  <h3>WaysFood</h3>
                  <p>localhost:3000/waysfood</p>
                </Col>
                <Col>
                  <h3>10</h3>
                  <p>Visit</p>
                </Col>
                <Col sm={1}>
                  <img src={view} alt="" />
                </Col>
                <Col sm={1}>
                  <img src={edit} alt="" />
                </Col>
                <Col sm={1}>
                  <img src={delet} alt="" />{" "}
                </Col>
              </Row>
            </Container>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Link;
