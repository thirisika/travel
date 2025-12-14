import React, { useState, useContext } from "react";
import { Col, Container, Form, Row, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./booking.css";
import BookingContext from "../../components/context/BookingContext";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { bookingdata, setBookingData } = useContext(BookingContext); // Use context
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData(formData); // Store first name in context
    navigate('/');
  };

  return (
    <>
      <section className="booking-section py-5">
        <Container>
          {/* Welcome message */}
          {/* {bookingdata && (
            <div className="alert alert-success text-center">
              <h2>Welcome, {bookingdata.firstName}!</h2>
            </div>
          )} */}

          <Row>
            <Col md="8">
              <div className="booking-form-warp border rounded-3">
                <div className="form-title px-4 border-bottom py-3">
                  <h3 className="h4 font-bold m-0" style={{ color: "black" }}>Your Details</h3>
                </div>

                <Form className="p-4" onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label className="d-block">Check In</Form.Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="form-control w-100"
                        dateFormat="dd, MMMM, yyyy"
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-4">
                      <Form.Label className="d-block">Check Out</Form.Label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd, MMMM, yyyy"
                        className="form-control w-100"
                      />
                    </Form.Group>

                    <Col md="12">
                      <button type="submit" className="primaryBtn">
                        Submit Now
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            {/* Price Summary */}
            <Col md="4">
              <Card className="card-info p-0 shadow-sm bg-white">
                <Card.Header>
                  <h1 className="font-bold h4 mt-2">Price Summary</h1>
                </Card.Header>
                <Card.Body className="pb-0">
                  <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Base Price</span>
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>
                        Total Discount{" "}
                        <span className="badge bg-danger">10%</span>
                      </span>
                      <strong>$20</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                      <span>Taxes & Fees</span>
                      <strong>$28,660</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between py-4">
                  <span className="font-bold h5">Payable Now</span>
                  <strong className="font-bold h5">$28,660</strong>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Booking;
