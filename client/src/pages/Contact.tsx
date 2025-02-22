// import React from 'react';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "text") {
      setText(value);
    }

    setErrorMessage("");
  };

  // Function to validate email
  function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Please fill out the name field");
      return;
    } else if (!email) {
      setErrorMessage("Please fill out the email address field");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!text) {
      setErrorMessage("Please fill out the message field");
      return;
    }

    alert("Thank you for filling out the form! We'll be in touch soon.");

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <>
      {/* Contact Form */}
      <div className="container py-5">
        <h1 className="text-center mb-1">Contact Us!</h1>

        <form className="form" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              className="form-control external-background"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control external-background"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              value={text}
              name="text"
              onChange={handleInputChange}
              className="form-control external-background"
              id="message"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Error message for validation */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button type="submit" className="btn btn-primary external-button">Submit</button>
        </form>
      </div>

      {/* Developers Section */}
      {/* <div className="custom-flex container py-5"> */}
      {/* <div className="custom-flex row justify-content-center shadow-lg p-4 rounded-4"> */}
      <h1 style={{ textAlign: "center", paddingBottom: "20px", fontWeight: "bolder" }}>Our Developers</h1>
      <h5 style={{ textAlign: "center", paddingBottom: "20px" }}>
  From left to right: <strong>Stanley Bertrand</strong>, <strong>Gilmer Perez</strong>, <strong>Adi Patel</strong> and <strong>Freddy Laboy</strong>.
</h5>


      <div className="custom-flex col-12 col-md-3">
        <div
          className="card stanley contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto"></li>
            </ul>
            <div className="center d-flex justify-content-between mt-3">
              
              {/* Action 1 button - GitHub redirect */}
              <a href="https://github.com/bertrandstanley" target="_blank" rel="noopener noreferrer">
                <button className="contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </button>
              </a>

              {/* Action 3 button - LinkedIn redirect */}
              <a href="https://www.linkedin.com/in/stanleybertrand/" target="_blank" rel="noopener noreferrer">
                <button className="contact-button contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card gilmer contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto"></li>
            </ul>
            <div className="center d-flex justify-content-between mt-3">
              {/* Action 1 button - GitHub redirect */}
              <a href="https://github.com/gilmerperez" target="_blank" rel="noopener noreferrer">
                <button className="contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </button>
              </a>

              {/* Action 3 button - LinkedIn redirect */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <button className="contact-button contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="card adi contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto"></li>
            </ul>
            <div className="center d-flex justify-content-between mt-3">
              {/* Action 1 button - GitHub redirect */}
              <a href="https://github.com/AdiPatel095/" target="_blank" rel="noopener noreferrer">
                <button className="contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </button>
              </a>

              {/* Action 3 button - LinkedIn redirect */}
              <a href="https://www.linkedin.com/in/095-adi-patel/" target="_blank" rel="noopener noreferrer">
                <button className="contact-button contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card freddy contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto"></li>
            </ul>
            <div className="center d-flex justify-content-between mt-3">
              {/* Action 1 button - GitHub redirect */}
              <a href="https://github.com/Fredbo561" target="_blank" rel="noopener noreferrer">
                <button className="contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </button>
              </a>

              {/* Action 3 button - LinkedIn redirect */}
              <a href="https://www.linkedin.com/in/freddy-laboy-4a1513144/" target="_blank" rel="noopener noreferrer">
                <button className="contact-button contact-card-button card-btn btn text-white svg-button btn-sm border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>


      </div>
      {/* </div> */}
      {/* </div> */}



    </>
  );
};

export default Contact;
