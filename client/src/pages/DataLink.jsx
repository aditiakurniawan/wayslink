import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import example from "../assets/images/example.png";
import view from "../assets/icon/View.png";
import edit from "../assets/icon/Edit.png";
import delet from "../assets/icon/Delete.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

function DataLink() {
  const state = useContext(UserContext);
  console.log("state", state);
  let { data } = useQuery("linkCache", async () => {
    const response = await API.get("/links");
    console.log("ini response", response);
    return response.data.data;
  });
  console.log("ini", data);

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
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  overflowY: "scroll",
                  height: "500px",
                }}
              >
                {data?.map((item, id) => {
                  return (
                    <Link
                      to={`/result/${item.id}`}
                      className="text-black"
                      style={{ textDecoration: "none" }}
                    >
                      <Row className="mt-5 w-100 d-flex">
                        <Col sm={1}>
                          <img src={item?.image} alt="" className="w-75" />
                        </Col>
                        <Col sm={4}>
                          <Row>
                            <Col>
                              <h3>{item?.title}</h3>

                              <p>{item?.link}</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col>
                          <h3>10</h3>

                          <p>Visit</p>
                        </Col>

                        <Col sm={1}>
                          <Link to={`/result/${item.id}`}>
                            <img src={view} alt="" />
                          </Link>
                        </Col>
                        <Col sm={1}>
                          <Link to={`/create_link`}>
                            <img src={edit} alt="" />
                          </Link>
                        </Col>
                        <Col sm={1}>
                          <img src={delet} alt="" />{" "}
                        </Col>
                      </Row>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default DataLink;
