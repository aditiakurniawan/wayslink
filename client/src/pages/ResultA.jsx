import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import avatar from "../assets/images/userdefault.png";
import logo from "../assets/icon/user.png";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { API } from "../config/api";
import fb from "../assets/icon/fb.png";
import ig from "../assets/icon/ig.png";
import tw from "../assets/icon/tw.png";
import wa from "../assets/icon/wa.png";
import yt from "../assets/icon/yt.png";

function ResultA() {
  document.title = `Wayslink`;
  let { id } = useParams();
  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/link/" + id);
    console.log("detail data", response);
    return response.data.data;
  });

  return (
    <>
      <div className="py-2" style={{ backgroundColor: "#8DB2BE" }}>
        <Container
          className="my-3 py-5 "
          style={{
            width: "420px",
            backgroundColor: "#D2DDD8",
            borderRadius: "20px",
          }}
        >
          <center>
            <img
              src={detail?.image}
              alt=""
              className="w-25"
              style={{ borderRadius: "50px", width: "100px", height: "100px" }}
            />
            <h2>{detail?.title}</h2>
            <p>{detail?.description}</p>
            <div>
              <Row
                className="bg-light my-4 mx-2"
                style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col sm={2}>
                  {/* <img src={fb} alt="" className="w-75 m-2" /> */}
                </Col>
                <Col sm={8} className="my-2 ">
                  <a
                    href={detail?.linkFb}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    FaceBook
                  </a>
                </Col>
              </Row>
              <Row
                className="bg-light my-4 mx-2"
                style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col sm={2}>
                  {/* <img src={tw} alt="" className="w-75 m-2" /> */}
                </Col>
                <Col sm={8} className="my-2">
                  <a
                    href={detail?.linkTw}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Twitter
                  </a>
                </Col>
              </Row>
              <Row
                className="bg-light my-4 mx-2"
                style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col sm={2}>
                  {/* <img src={ig} alt="" className="w-75 m-2" /> */}
                </Col>
                <Col sm={8} className="my-2 ">
                  <a
                    href={detail?.linkIg}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Instagram
                  </a>
                </Col>
              </Row>
              <Row
                className="bg-light my-4 mx-2"
                style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col sm={2}>
                  {/* <img src={yt} alt="" className="w-75 m-2" /> */}
                </Col>
                <Col sm={8} className="my-2 ">
                  <a
                    href={detail?.linkYt}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Youtube
                  </a>
                </Col>
              </Row>
              <Row
                className="bg-light my-4 mx-2"
                style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col sm={2}>
                  {/* <img src={wa} alt="" className="w-75 m-2" /> */}
                </Col>
                <Col sm={8} className="my-2 ">
                  <a
                    href={detail?.linkWa}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Whatsapp
                  </a>
                </Col>
              </Row>
            </div>
          </center>
        </Container>
      </div>
    </>
  );
}

export default ResultA;
