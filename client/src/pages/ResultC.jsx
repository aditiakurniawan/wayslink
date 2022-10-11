import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import avatar from "../assets/images/userdefault.png";
import logo from "../assets/icon/user.png";
import "../assets/css/home.css";
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
      <div className="py-2" style={{ backgroundColor: "#8C8A88" }}>
        {/* <img className="background1" src={detail?.image} alt="" fluid /> */}
        <Container
          className="my-3 bg-light"
          style={{
            width: "420px",
            backgroundColor: "#D2DDD8",
          }}
        >
          <center>
            <img
              src={detail?.image}
              alt=""
              className="w-100"

              // style={{ width: "100px", height: "100px" }}
            />
            <h2>{detail?.title}</h2>
            <p>{detail?.description}</p>
            <div>
              <Row
                className="bg-light my-4 mx-2 pb-3"
                // style={{ borderRadius: "48px", border: "2px solid #8DB2BE" }}
              >
                <Col className="my-2 ">
                  <a href={detail?.linkFb}>
                    <img
                      src={fb}
                      alt=""
                      className=" m-3"
                      style={{ width: "30px" }}
                    />
                  </a>
                  <a
                    href={detail?.linkTw}
                    // style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={tw}
                      alt=""
                      className=" m-3"
                      style={{ width: "30px" }}
                    />
                  </a>
                  <a
                    href={detail?.linkIg}
                    // style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={ig}
                      alt=""
                      className="m-3"
                      style={{ width: "30px" }}
                    />
                  </a>
                  <a
                    href={detail?.linkYt}
                    // style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={yt}
                      alt=""
                      className="m-3"
                      style={{ width: "30px" }}
                    />
                  </a>
                  <a
                    href={detail?.linkWa}
                    // style={{ color: "black", textDecoration: "none" }}
                  >
                    <img
                      src={wa}
                      alt=""
                      className=" m-3"
                      style={{ width: "30px" }}
                    />
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
