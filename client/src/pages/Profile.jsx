import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Delete from "../components/modal/Delete";

function Profile() {
  document.title = `Profile`;
  const title = "Profile";
  const [state, dispatch] = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  let id = state.user.id;
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
  });
  const { fullName } = form;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(user);

      const response = await API.patch("/user/{id}", body, config);

      console.log(user);

      if (response.data.status === "success") {
        const alert = (
          <Alert
            variant="success"
            className="py-1 d-flex justify-content-center"
          >
            Save Complete
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert
            variant="danger"
            className="py-1 d-flex justify-content-center"
          >
            Save Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function getUserData() {
    if (!state.isLogin) {
      navigate("/");
      Error({ message: "Silahkan login terlebih dahulu!" });
    }
    console.log(state);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Row>
        <Sidebar />
        <Col>
          <h3 className="w-100 px-5 py-4">My Account</h3>
          <Row
            style={{ backgroundColor: "#ECECEC", height: "100vh" }}
            className="pt-5"
          >
            <Container className="w-100 px-5 py-3">
              <h3>My Informasi</h3>
              <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                <div
                  className="bg-white my-5 p-4"
                  style={{ borderRadius: "10px" }}
                >
                  <p>Name</p>
                  <Form.Group className="mb-3 border-bottom border-dark">
                    <Form.Control
                      placeholder={state?.user?.name}
                      type="text"
                      name="email"
                      style={{ border: "0px white" }}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <p>Email</p>
                  <Form.Group className="mb-3 border-bottom border-dark">
                    <Form.Control
                      placeholder={state?.user?.email}
                      type="text"
                      name="email"
                      style={{ border: "0px white" }}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <Row className="mt-5">
                  {message && message}
                  <Col className="d-flex justify-content-end ">
                    <Button
                      md={3}
                      className="mx-3 "
                      type="submit"
                      style={{ backgroundColor: "#FF9F00", border: "none" }}
                    >
                      Save Account
                    </Button>
                    <Delete />
                    {/* <Button
                      md={3}
                      className="mx-3"
                      style={{ backgroundColor: "#FF0000", border: "none" }}
                    >
                      Delete Account
                    </Button> */}
                  </Col>
                </Row>
              </Form>
            </Container>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
