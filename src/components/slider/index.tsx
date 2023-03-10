import { Carousel } from "react-bootstrap";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{height: "100%", maxHeight: 400, minHeight: 350, aspectRatio: "16/9", objectFit: "cover"}}
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgholder.js/800x400?text=First slide&bg=373940"
                alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "100%", maxHeight: 400, minHeight: 350, aspectRatio: "16/9", objectFit: "cover"}}
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "100%", maxHeight: 400, minHeight: 350, aspectRatio: "16/9", objectFit: "cover"}}
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU"
                alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;