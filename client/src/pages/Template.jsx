import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import phone3 from "../assets/images/phone3.png";
import phone4 from "../assets/images/phone4.png";

function Template() {
  const title = "Template";
  let { id } = useParams();
  return (
    <>
      <Row>
        <Sidebar />
        <Col>
          <h3 className="w-100 px-5 py-4">Template</h3>
          <Row
            style={{ backgroundColor: "#ECECEC", height: "100vh" }}
            className="pt-5"
          >
            <div>
              <Link to={`/result/${id}`}>
                <img src={phone1} alt="" className="w-25" />
              </Link>
              <Link to={`/resultA/${id}`}>
                <img src={phone2} alt="" className="w-25" />
              </Link>
              <Link to={`/resultB/${id}`}>
                <img src={phone3} alt="" className="w-25" />
              </Link>
              <Link to={`/resultC/${id}`}>
                <img src={phone4} alt="" className="w-25" />
              </Link>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Template;
