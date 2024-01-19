import React from "react";
import { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
 
} from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
const CreateAccount = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isChecked, setChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic
    Alert("Form submitted:", formData);
  };
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div className="section p-5">
          <div className="container p-5">
            <div className="card shadow">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-12">
                    <hr />
                    <h4>CREATE CV </h4>
                    <hr />

                    <Container>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col>
                            <Form.Group controlId="firstName">
                              <Form.Label>TC Number </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="11 digit citizenship code ... "
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="lastName">
                              <Form.Label> Full Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your  full name "
                                name="fullname"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group controlId="email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group controlId="password">
                              <Form.Label>Age </Form.Label>
                              <Form.Control
                                type="Date"
                                placeholder=""
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group  >
                              <Form.Label>District</Form.Label>
                              <Form.Control
                                
                                placeholder=""
                                name="confirmPassword"
                               
                                require
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group  >
                              <Form.Label>Provinces</Form.Label>
                              <Form.Control
                               
                                placeholder=""
                                name="confirmPassword"
                               
                                require
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group  >
                              <Form.Label>Country</Form.Label>
                              <Form.Control
                                 
                                placeholder=""
                                name="confirmPassword"
                                 
                                require
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group  >
                              <Form.Label>GSM</Form.Label>
                              <Form.Control
                                 type="Number"
                                placeholder=""
                                name="confirmPassword"
                           
                                require
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <div className="card-body">
                          <div className="row">
                            <div className="pull-left">
                              <hr />
                              <h4>Main Certificates</h4>
                              <hr />
                            </div>
                            <Row>
                              <Col>
                                <Form.Group  >
                                  <Form.Label>License Type</Form.Label>
                                  <div>
                                        <select>
                                          <option value="">
                                            Select an option
                                          </option>
                                          <option value=" ">Type 1</option>
                                          <option value="option2">
                                            Type 2
                                          </option>
                                          <option value="option3">
                                            Type 3
                                          </option>
                                        </select>
                                      </div>
                                </Form.Group>
                              </Col>
                              <Col>
                              <Form.Group  >
                                  <Form.Label>Psikoteknik</Form.Label>
                                  <Form.Control
                                    type="Date"
                                    placeholder=""
                                   
                                    required 
                                   
                                  />
                                </Form.Group>

                              </Col>
                            </Row>
                            <Row>
                              <Col>
                              <Form.Label>SRC BOX</Form.Label>
                                <div className="Row">
                                  <div className="Col">
                                  <input
                                    type="checkbox"
                          
                                   
                                  /> SRC 1
                               
                                  <input
                                    type="checkbox"
                                   
                                    /> SRC 2
                              
                                  <input
                                    type="checkbox"
                                   
                                    onChange={handleCheckboxChange}  /> SRC 3
                               
                                  <input
                                    type="checkbox"
                                     
                                    onChange={handleCheckboxChange}   /> SRC 4
                                    </div>
                                </div>
                              </Col>
                              <Col>
                                <Form.Group controlId="password">
                                  <Form.Label>
                                    SRC-5/ADR Driver License
                                  </Form.Label>
                                  <Form.Control
                                    type="Date"
                                    placeholder=""
                                    value={formData.password}
                                     
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div className="section">
                          <div className="container pt-3">
                            <div className="card-body">
                              <div className="Row">
                                <hr />
                                <h4>Abilities</h4>
                                <hr />
                                <Form.Group  >
                                  <Form.Label>Experience</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Experience in Year"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    
                                    require
                                  />
                                </Form.Group>
                                <Row>
                                  <Col>
                                    <Form.Group  >
                                      <Form.Label>Passport</Form.Label>
                                      <div>
                                        <select>
                                          <option value="">
                                            Select an option
                                          </option>
                                          <option value=" ">Option 1</option>
                                          <option value="option2">
                                            Option 2
                                          </option>
                                          <option value="option3">
                                            Option 3
                                          </option>
                                        </select>
                                      </div>
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group  >
                                      <Form.Label>Visa</Form.Label>
                                      <div>
                                        {/* Select element for the dropdown */}
                                        <select>
                                          <option value="">
                                            Select an option
                                          </option>
                                          <option value=" ">Option 1</option>
                                          <option value="option2">
                                            Option 2
                                          </option>
                                          <option value="option3">
                                            Option 3
                                          </option>
                                        </select>
                                      </div>
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Form.Group  >
                                  <Form.Label>Abroad</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder=" How much  Abroad Experience..  "
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    require
                                  />
                                </Form.Group>
                                <input type="checkbox" />
                                Blind spot training <br />
                                <input type="checkbox" /> Safe driving training{" "}
                                <br />
                                <input type="checkbox" />
                                Fuel economy training
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          type="submit"
                          className="btn btn-primary m-5"
                        >
                          Register
                        </Button>
                      </Form>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="pt-5">
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
