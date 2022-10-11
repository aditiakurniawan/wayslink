import React from "react";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import phone1 from "../assets/images/phone1.png";
import upload from "../assets/images/upload.png";
import fb from "../assets/icon/fb.png";
import ig from "../assets/icon/ig.png";
import tw from "../assets/icon/tw.png";
import wa from "../assets/icon/wa.png";
import yt from "../assets/icon/yt.png";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router";
import { API } from "../config/api";

function Link() {
  document.title = `Create Link`;
  const navigate = useNavigate();
  const titlePage = "Create Link";
  const [message, setMessage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    titleWeb: "",
    linkWeb: "",
    titleFb: "",
    linkFb: "",
    titleIg: "",
    linkIg: "",
    titleTw: "",
    linkTw: "",
    titleYt: "",
    linkYt: "",
    titleWa: "",
    linkWa: "",

    // titlelink: "",
    // link: "",
    // links: [],
  });

  const addAnotherLink = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      links: [...form.links, { titleWeb: "", linkWeb: "" }],
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

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
    console.log(form);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set("description", form?.description);
      formData.set("image", form?.image[0], form?.image[0]?.name);
      // formData.set("titlelink", form?.titlelink);
      // formData.set("link", form?.link);
      formData.set("titleWeb", form?.titleWeb);
      formData.set("linkWeb", form?.linkWeb);
      formData.set("titleFb", form?.titleFb);
      formData.set("linkFb", form?.linkFb);
      formData.set("titleIg", form?.titleIg);
      formData.set("linkIg", form?.linkIg);
      formData.set("titleTw", form?.titleTw);
      formData.set("linkTw", form?.linkTw);
      formData.set("titleYt", form?.titleYt);
      formData.set("linkYt", form?.linkYt);
      formData.set("titleWa", form?.titleWa);
      formData.set("linkWa", form?.linkWa);
      // formData.set("links", JSON.stringify(form?.links));

      const response = await API.post("/link", formData, config);

      console.log(response);
      console.log("ini form", form);
      navigate("/datalink");
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
  }, [form.image]);

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
                        {message && message}
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
                              <img src={preview} alt="" className="w-100" />
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
                            </Col>
                          </Row>
                          <div className="my-5">
                            <p className="text-dark">Title</p>
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

                            <p className="text-dark">Description</p>
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
                                  <p className="text-dark">
                                    Title Link website
                                  </p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="ex. Your Title Link"
                                      type="text"
                                      name="titleWeb"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Link</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="ex. Link Here"
                                      type="text"
                                      name="linkWeb"
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
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={fb} alt="" className="w-100" />
                              </Col>
                              <Col>
                                <div>
                                  <p className="text-dark">Facebook</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Facebook Account"
                                      type="text"
                                      name="titleFb"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Link Facebook </p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Link Facebook Here"
                                      type="text"
                                      name="linkFb"
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
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={ig} alt="" className="w-100" />
                              </Col>
                              <Col>
                                <div>
                                  <p className="text-dark">Instagram</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Instagram Account"
                                      type="text"
                                      name="titleIg"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Instagram Link</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Link Instagram"
                                      type="text"
                                      name="linkIg"
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
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={tw} alt="" className="w-100" />
                              </Col>
                              <Col>
                                <div>
                                  <p className="text-dark">Twitter</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Twitter Account"
                                      type="text"
                                      name="titleTw"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Link Twitter</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Link Twitter"
                                      type="text"
                                      name="linkTw"
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
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={yt} alt="" className="w-100" />
                              </Col>
                              <Col>
                                <div>
                                  <p className="text-dark">Youtube</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Youtube Channel"
                                      type="text"
                                      name="titleYt"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Link Youtube</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Link Youtube"
                                      type="text"
                                      name="linkYt"
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
                            <Row
                              className="p-3"
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <Col sm={3}>
                                <img src={wa} alt="" className="w-100" />
                              </Col>
                              <Col>
                                <div>
                                  <p className="text-dark">Whatsapp</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Whatsapp Number"
                                      type="text"
                                      name="titleWa"
                                      onChange={handleChange}
                                      style={{
                                        border: "0px white",
                                        backgroundColor: "#ECECEC",
                                      }}
                                      // value="adit"
                                    />
                                  </Form.Group>

                                  <p className="text-dark">Link Whatsapp</p>
                                  <Form.Group className="mb-3 border-bottom border-dark">
                                    <Form.Control
                                      placeholder="Input Link Here"
                                      type="text"
                                      name="linkWa"
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
                              {/* <Button
                                className="w-100 my-5"
                                type="submit"
                                style={{
                                  backgroundColor: "#FF9F00",
                                  border: "none",
                                }}
                              >
                                Add New Link
                              </Button> */}
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
