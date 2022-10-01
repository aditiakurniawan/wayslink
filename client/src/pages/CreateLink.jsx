import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import phone1 from "../assets/images/phone1.png";
import upload from "../assets/images/upload.png";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router";
import { API } from "../config/api";

function Link() {
  const navigate = useNavigate();
  const titlePage = "Create Link";
  const [message, setMessage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    titlelink: "",
    link: "",
    links: [],
  });

  const addAnotherLink = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      links: [...form.links, { titlelink: "", link: "" }],
    });
  };

  const handleChange = (e) => {
    // const newLinks = form.links;
    // newLinks[i] = { ...newLinks[i], [e.target.name]: e.target.value };
    // setForm({ links: newLinks });

    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // if (e.target.type === "file") {
    //   let url = URL.createObjectURL(e.target.files[0]);
    //   setPreview(url);
    // }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authozation: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set("description", form?.description);
      formData.set("image", form?.image[0], form?.image[0]?.name);
      formData.set("titlelink", form?.titlelink);
      formData.set("link", form?.link);
      // formData.set("links", JSON.stringify(form?.links));

      const response = await API.post("/link", formData, config);

      console.log(response);
      console.log(form);
      navigate("/link");

      // setForm({
      //   title: "",
      //   description: "",
      //   image: "",
      //   titlelink: "",
      //   link: "",
      //   links: [],
      // });

      // setPreview(null);

      // if (response.data.status === "success") {
      //   const alert = (
      //     <Alert
      //       variant="success"
      //       className="py-1 d-flex justify-content-center"
      //     >
      //       Add Link Success
      //     </Alert>
      //   );
      //   setMessage(alert);

      //   new FormData();
      // } else {
      //   const alert = (
      //     <Alert
      //       variant="danger"
      //       className="py-1 d-flex justify-content-center"
      //     >
      //       Add Link Failed
      //     </Alert>
      //   );
      //   setMessage(alert);
      // }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  useEffect(() => {
    console.log(form);
  }, [form.images]);

  return (
    <>
      <Row>
        <Sidebar />
        <Col>
          <h3 className="w-100 px-5 py-4">Templete</h3>
          <Row>
            <Col>
              <Row
                style={{ backgroundColor: "#ECECEC", paddingBottom: "30vh" }}
                className="pt-5"
              >
                <Container className="w-100 px-5 py-3">
                  <Form
                    className="secondary text-white"
                    onSubmit={(e) => {
                      handleSubmit.mutate(e);
                    }}
                  >
                    <Row>
                      <Col>
                        <h3 className="text-dark">Create Link</h3>
                      </Col>

                      <Col sm={2}>
                        <Button
                          md={3}
                          className="mx-3 "
                          type="submit"
                          style={{ backgroundColor: "#FF9F00", border: "none" }}
                        >
                          Publish Link
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col>
                        <div
                          sm={2}
                          className="bg-white p-4 w-100"
                          style={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            overflowY: "scroll",
                            height: 380,
                          }}
                        >
                          <Row
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Col md={3}>
                              <img src={upload} alt="" />
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Label
                                  for="images"
                                  type="file"
                                  className="mx-3 my-auto px-3 py-1"
                                  onChange={handleChange}
                                  style={{
                                    backgroundColor: "#FF9F00",
                                    border: "none",
                                    borderRadius: "6px",
                                  }}
                                >
                                  Upload
                                </Form.Label>
                                <Form.Control
                                  id="images"
                                  name="image"
                                  type="file"
                                  onChange={handleChange}
                                  hidden
                                />
                              </Form.Group>
                              {/* <Button
                                type="file"
                                onChange={handleChange}
                                className="mx-3 my-auto"
                                style={{
                                  backgroundColor: "#FF9F00",
                                  border: "none",
                                }}
                              >
                                Upload
                              </Button> */}
                            </Col>
                          </Row>
                          <div className="my-5">
                            <p>Title</p>
                            <Form.Group className="mb-3 border-bottom border-dark">
                              <Form.Control
                                placeholder="ex. Your Title"
                                type="text"
                                name="title"
                                style={{ border: "0px white" }}
                                onChange={handleChange}
                                // value="adit"
                              />
                            </Form.Group>

                            <p>Description</p>
                            <Form.Group className="mb-3 border-bottom border-dark">
                              <Form.Control
                                placeholder="ex. Description Here"
                                type="text"
                                name="description"
                                style={{ border: "0px white" }}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          </div>
                          <div className="my-5">
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={upload} alt="" />
                              </Col>
                              <Col>
                                <div>
                                  <p>Title Link</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="ex. Your Title Link"
                                      type="text"
                                      name="titlelink"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p>Link</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="ex. Link Here"
                                      type="text"
                                      name="link"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                    />
                                  </Form.Group>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Button
                                className="w-100 my-5"
                                style={{
                                  backgroundColor: "#FF9F00",
                                  border: "none",
                                }}
                              >
                                Add New Link
                              </Button>
                            </Row>
                          </div>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <img src={phone1} alt="" className="px-5 w-100" />
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Link;
