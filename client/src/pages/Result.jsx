import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import avatar from "../assets/images/userdefault.png";
import logo from "../assets/icon/user.png";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { API } from "../config/api";

function Result() {
  let { id } = useParams();
  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/link/" + id);
    console.log("detail data", response);
    return response.data.data;
  });

  return (
    <>
      <div>
        <Container className="my-5 py-5" style={{ width: "420px" }}>
          <center>
            <img
              src={detail?.image}
              alt=""
              className="w-25"
              style={{ borderRadius: "50px", width: "100px", height: "100px" }}
            />
            <h2>{detail?.title}</h2>
            <p>{detail?.description}</p>
            <Row className="bg-dark my-4">
              <Col sm={2}>
                <img src={logo} alt="" />
              </Col>
              <Col sm={8} className="text-white ">
                <h5>{detail?.titlelink}</h5>
              </Col>
            </Row>
          </center>
        </Container>
      </div>
    </>
  );
}

export default Result;
