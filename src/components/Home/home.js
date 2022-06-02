import React, { useState,useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel ,Button, Col, Row, Form, Modal } from 'react-bootstrap';
import  Card  from "react-bootstrap/Card";
//import { fetchAllSubject } from "../../actions/auth";
import './home.scss';


function Home() {

  //const dispatch = useDispatch();
  
  
 
  const { subject } = useSelector(state => state.subject);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return (
        <div>

        <div className='container-fluid'>
                <div className="row" style={{ height: 14 }}>&nbsp;</div>
            <div className="row mb-3">
                <div className="col-12">
                    <Carousel pause={'hover' | false}>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                    src="https://picsum.photos/800/400?img=1"
                    height="400"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                    src="https://picsum.photos/800/400?img=2"
                    height="400"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                    src="https://picsum.photos/800/400?img=3"
                    height="400"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
            </div>
            <div className='container-fluid' >
            <div className="row">
            <h3>Need Text Two</h3>
             <Row xs={1} md={4} className="g-2">
                    {subject && subject.map((item,index)=>(
                    <Col>
<Card style={{ marginBottom: 15 }}>     
  <Card.Img variant="top" src={"https://picsum.photos/100/50?img="+index} />
  <Card.Body style={{ minHeight: 272 }}>
                            <Card.Title>{item.title}</Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    <label className="details-label">Details &gt;&gt;</label>
  </Card.Body>
                    </Card>
                    </Col>
                     ))}
              </Row>



            </div>
        </div> 
    </div>
    )
}

export default Home;