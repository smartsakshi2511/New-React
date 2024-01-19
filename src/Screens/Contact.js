import React from "react";
import Footer from "../Pages/Footer/Footer";
import NavBar from "../Pages/NavBar";
const Contact = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <section className="section">
        <div className="container pt-3">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-left">
                  <h5>Contact Form</h5>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1" for="">
                      {" "}
                      Full Name :
                    </label>
                    <input type="text" name="" placeholder="Enter full Name" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1" for="">
                      {" "}
                      Phone Number :
                    </label>
                    <input type="text" name="" placeholder="Enter full Name" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1" for="">
                      Email Address :
                    </label>
                    <input type="text" name="" placeholder="Enter full Name" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1" for="">
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Type your message...."
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>
                    123 Street, <br />
                    New York, USA
                    <br />
                    <strong>Phone:</strong> 987654321
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-5">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Contact;
