import { Button, Card, Col, Container, Row } from "react-bootstrap";


function Services() {
    return (
        <section className="my-5">
            <Container className="py-5 bg-light">

                <Row className="text-center">
                    <h3 className="fw-bold">Our Services</h3>
                </Row>

                <Container className="py-5 p-lg-5">
                    <Row className="row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: 900}}>
                        
                        <Col className="mb-5">
                            <Card className="shadow-sm" style={{borderRadius: 20}}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgholder.js/800x400?text=First slide&bg=373940" />
                                <Card.Body className="card-body px-4 py-5 px-md-5">
                                    <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                    <p className="text-muted card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-5">
                            <Card className="shadow-sm" style={{borderRadius: 20}}>
                            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgholder.js/800x400?text=First slide&bg=373940" />
                                <Card.Body className="card-body px-4 py-5 px-md-5">
                                    <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                    <p className="text-muted card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-5">
                            <Card className="shadow-sm" style={{borderRadius: 20}}>
                            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgholder.js/800x400?text=First slide&bg=373940" />
                                <Card.Body className="card-body px-4 py-5 px-md-5">
                                    <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                    <p className="text-muted card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-5">
                            <Card className="shadow-sm" style={{borderRadius: 20}}>
                            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgholder.js/800x400?text=First slide&bg=373940" />
                                <Card.Body className="card-body px-4 py-5 px-md-5">
                                    <h5 className="fw-bold card-title">Lorem ipsum dolor sit&nbsp;</h5>
                                    <p className="text-muted card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                
            </Container>
        </section>
    );
}

export default Services;