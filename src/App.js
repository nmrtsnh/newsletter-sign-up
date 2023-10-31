import MySvg from "./illustration-sign-up-desktop.svg";
import IconList from "./icon-list.svg";

import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // console.log("Email:", email);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMsg("Valid email required");
    } else {
      setErrorMsg("");
      setShowSuccess(true);
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(emailRegex);
    return emailRegex.test(email);
  }

  function handleDismissed() {
    setShowSuccess(false);
    setDismissed(true);
    setEmail("");
  }

  return (
    <div className="main">
      <div className={`container ${showSuccess ? "hidden" : ""}`}>
        <div className="container-1">
          <h1>Stay updated!</h1>
          <span>
            Join 60,000+ product managesrs receiving monthly updates on:
          </span>
          <div className="list">
            <div className="list-item">
              <img src={IconList} alt="icon" />
              <span>Product discovery and building what matters</span>
            </div>
            <div className="list-item">
              <img src={IconList} alt="icon" />
              <span>Measuring to ensure updates are a success</span>
            </div>
            <div className="list-item">
              <img src={IconList} alt="icon" />
              <span>And much more!</span>
            </div>
          </div>
          <form
            className={`form ${errorMsg ? "error" : ""}`}
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="email@company.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="error-msg">{errorMsg}</span>
            <button className="button" onClick={handleFormSubmit}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="container-2">
          <img src={MySvg} alt="illustration" />
        </div>
      </div>
      <div
        className={`success-container container ${showSuccess ? "" : "hidden"}`}
      >
        <img className="icon-success" src={IconList} alt="icon" />
        <h2 className="heading-2">Thanks for subscribing!</h2>
        <p className="text">
          A confirmation email has been sent to
          <span className="text-bold"> {email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button className="button success-btn" onClick={handleDismissed}>
          Dismiss message
        </button>
      </div>
    </div>
  );
}
