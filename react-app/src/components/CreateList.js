import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function CreateList({ singledata, handleChange, CreateList }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Book
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter title"
            name="title"
            value={singledata.title}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter author"
            name="author"
            value={singledata.author}
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              CreateList();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateList;
