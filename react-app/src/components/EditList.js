import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function EditList({ elementId, singledata, updateList }) {
  const [show, setShow] = useState(false);
  const [localData, setLocalData] = useState(singledata);

  const handleLocalChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  return (
    <>
      <Button variant="warning" className="me-2" onClick={() => setShow(true)}>
        Edit
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            className="form-control mb-3"
            name="title"
            value={localData.title}
            onChange={handleLocalChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="author"
            value={localData.author}
            onChange={handleLocalChange}
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
              updateList(elementId, localData);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditList;
