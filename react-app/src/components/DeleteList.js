import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteList({ elementId, singledata, deleteList }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)}>
        Delete
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Delete this book?</p>
          <p><strong>{singledata.title}</strong> by {singledata.author}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShow(false);
              deleteList(elementId);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteList;
