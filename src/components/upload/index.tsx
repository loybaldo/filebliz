import { Button, Form, ProgressBar } from "react-bootstrap";

function Upload() {
    return (
        <Form method="post" className="p-4 mt-5 bg-light">
            <Form.Group controlId="formFile">
                <h2 className="fw-bold">Upload File</h2>
                <Form.Control type="file" className="mt-4"/>
            </Form.Group>
            <ProgressBar striped now={60} className="mt-3"/>
            <Button variant="primary" type="submit" className="mt-3" style={{borderRadius: 15}}>
                Submit
            </Button>
        </Form>
    );
}

export default Upload;