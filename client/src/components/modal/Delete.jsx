import React from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";

function Delete({ handleClose, setConfirmDelete, show, setShow }) {
  const handleDelete = () => {
    setConfirmDelete(true);
  };
  return (
    <>
      {/* <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "#FF0000", border: "none" }}
      >
        Delete Account
      </Button> */}

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Body className="px-5 ">
          <p style={{ color: "#469F74" }}>
            you are sure you want to remove this link
          </p>
        </Modal.Body>
        <Row className="px-5 d-flex justify-content-end">
          <Col sm={4}>
            <Button
              className="px-5 py-0 mb-3"
              style={{
                backgroundColor: "#FF0000",
                color: "white",
                border: "none",
              }}
              onClick={handleDelete}
            >
              Yes
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              className="px-5 py-0"
              style={{
                backgroundColor: "#E5E5E5",
                color: "white",
                border: "none",
              }}
              onClick={handleClose}
            >
              No
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default Delete;
