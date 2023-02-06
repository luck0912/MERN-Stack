import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="details"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20%",
          margin: "2%",
          background: "#a9a9a930",
          border: "1px solid #80808033",
          fontFamily: "JetBrains Mono", 
          borderRadius: "23%",
        }}
      >
        <div className="phone">
          <h3>Phone</h3>
          <p>9982722894</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>avanti@getraisetechnologies.com</p>
        </div>
        <div className="adress">
          <h3>Address.</h3>
          <p>Mansarover,Jaipur</p>
        </div>
      </div>

      {/* Contact Form */}

      <section style={{fontFamily: "JetBrains Mono"}} className="mb-4 align-items-center">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Get in touch
        </h2>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5 mx-auto">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required="true"
                      placeholder="Your Name "
                    />
                    <label htmlFor="name" className=""></label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required="true"
                      placeholder=" Your Email"
                    />
                    <label htmlFor="email" className=""></label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="number"
                      id="number"
                      name="number"
                      className="form-control"
                      placeholder=" Your Phone Number"
                    />
                    <label htmlFor="number" className=""></label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="3"
                      className="form-control md-textarea"
                      placeholder="Your Message"
                    ></textarea>
                    <label htmlFor="message"></label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-md btn-success">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
