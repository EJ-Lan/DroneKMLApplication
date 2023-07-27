import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
    return (
      <Form>
         <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>.kmz File</Form.Label>
            <Form.Control type="file" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>.srt File</Form.Label>
            <Form.Control type="file" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>.mp4 File</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default Form;