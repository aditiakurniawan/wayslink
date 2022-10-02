import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/icon.png";
import template from "../assets/icon/cubes.png";
import templateActive from "../assets/icon/cubes2.png";
import profile from "../assets/icon/user.png";
import profileActive from "../assets/icon/user2.png";
import myLink from "../assets/icon/chain.png";
import myLinkActive from "../assets/icon/chain2.png";
import out from "../assets/icon/logout.png";
import "../assets/css/side.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/UserContext";

function Sidebar(props) {
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <Container className="w-25 pl-5 " style={{ marginLeft: "-12px" }}>
      <Row className=" justify-content-center  ">
        <Col md={4} className="py-4  mb-5 ">
          <Link to="/template">
            <img src={logo} />
          </Link>
        </Col>
      </Row>
      <div
        className="ms-5 justify-content-between"
        style={{ paddingRight: "40px" }}
      >
        <Row className="ps-5 py-4">
          <Col md={2}>
            <img
              alt="template"
              src={props?.title === "Template" ? templateActive : template}
            />
          </Col>
          <Col>
            <Link
              to="/template"
              style={
                props?.title === "Template"
                  ? { textDecoration: "none", color: "#ff9f00" }
                  : { textDecoration: "none", color: "black" }
              }
            >
              <h4>Template</h4>
            </Link>
          </Col>
        </Row>
        <Row className="ps-5 py-4">
          <Col md={2}>
            <img src={profile} />
          </Col>
          <Col>
            <Link
              to="/profile"
              style={
                props?.title === "Template"
                  ? { textDecoration: "none", color: "#ff9f00" }
                  : { textDecoration: "none", color: "black" }
              }
            >
              <h4>Profile</h4>
            </Link>
          </Col>
        </Row>
        <Row className="ps-5 py-4">
          <Col md={2}>
            <img src={myLink} />
          </Col>
          <Col>
            <Link
              to="/datalink"
              style={
                props?.title === "Template"
                  ? { textDecoration: "none", color: "#ff9f00" }
                  : { textDecoration: "none", color: "black" }
              }
            >
              <h4>My Link</h4>
            </Link>
          </Col>
        </Row>
        <Row
          className="ps-5 py-5"
          style={{ marginTop: "30vh", marginBottom: 40 }}
        >
          <Col md={2}>
            <img src={out} />
          </Col>
          <Col>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <h4 onClick={logout}>Logout</h4>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Sidebar;
