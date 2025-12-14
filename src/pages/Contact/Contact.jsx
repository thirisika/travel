import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import {
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import image from "../../images/contact/contact-us.png";
import BookingContext from "../../components/context/BookingContext";

const Contact = () => {
  const { setBookingData } = useContext(BookingContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact us";
    window.scroll(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData(formData);
    navigate("/");
  };

  return (
    <section className="contact pt-5">
      <Container>


      <Row>
            <Col md="12">
              <h1 className="mb-2 h1 font-bold" style={{ color: "black" }}>
                {" "}
                Let's connect and get to konw each other
              </h1>
              <p className="body-text mt-1" style={{ color: "black" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-3 mb-2 ">
                      <i className="bi bi-headset h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Call US</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>
                      +12 3456 789
                    </a>
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-telephone me-1"></i>
                      +12 3456 789
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-3 mb-2 ">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Email Us</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-2"></i>
                      demo@gmail.com
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="12" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-3 mb-2 ">
                      <i className="bi bi-globe h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Social Media</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-center">
                    <ListGroup horizontal className="justify-content-center">
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-youtube"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-instagram"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-twitter"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <i className="bi bi-youtube"></i>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>


        <Row className="py-5 align-items-center">
          <Col xl="6" md="6" className="d-none d-md-block">
            <img src={image} alt="" className="img-fluid me-3" />
          </Col>
          <Col xl="6" md="6">
            <Card className="bg-light p-4 border-0 shadow-sm">
              <div className="form-box">
                <h1 className="h3 font-bold mb-4">Send us a message</h1>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FloatingLabel controlId="name" label="Full Name" className="mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="6">
                      <FloatingLabel controlId="email" label="Email address" className="mb-4">
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="12">
                      <FloatingLabel controlId="phone" label="Phone Number" className="mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="12">
                      <FloatingLabel controlId="message" label="Message">
                        <Form.Control
                          as="textarea"
                          placeholder="Message"
                          style={{ height: "126px" }}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <button className="primaryBtn mt-3" type="submit">
                    Send Message
                  </button>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
