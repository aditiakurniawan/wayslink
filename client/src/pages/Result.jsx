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

function Result() {
  document.title = `Wayslink`;
  let { id } = useParams();
  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/link/" + id);
    console.log("detail data", response);
    return response.data.data;
  });

  return (
    <>
      <div>
        <Container className="my-3 py-5" style={{ width: "420px" }}>
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
              <Row className="bg-dark my-4 mx-2">
                <Col sm={2}>
                  <img src={fb} alt="" className="w-75 m-2" />
                </Col>
                <Col sm={8} className="mt-2 fw-bold">
                  <a
                    href={detail?.linkFb}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    FaceBook
                  </a>
                </Col>
              </Row>
              <Row className="bg-dark my-4 mx-2">
                <Col sm={2}>
                  <img src={tw} alt="" className="w-75 m-2" />
                </Col>
                <Col sm={8} className="mt-2 fw-bold">
                  <a
                    href={detail?.linkTw}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Twitter
                  </a>
                </Col>
              </Row>
              <Row className="bg-dark my-4 mx-2">
                <Col sm={2}>
                  <img src={ig} alt="" className="w-75 m-2" />
                </Col>
                <Col sm={8} className="mt-2 fw-bold">
                  <a
                    href={detail?.linkIg}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Instagram
                  </a>
                </Col>
              </Row>
              <Row className="bg-dark my-4 mx-2">
                <Col sm={2}>
                  <img src={yt} alt="" className="w-75 m-2" />
                </Col>
                <Col sm={8} className="mt-2 fw-bold">
                  <a
                    href={detail?.linkYt}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Youtube
                  </a>
                </Col>
              </Row>
              <Row className="bg-dark my-4 mx-2">
                <Col sm={2}>
                  <img src={wa} alt="" className="w-75 m-2" />
                </Col>
                <Col sm={8} className="mt-2 fw-bold">
                  <a
                    href={detail?.linkWa}
                    style={{ color: "white", textDecoration: "none" }}
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

export default Result;
