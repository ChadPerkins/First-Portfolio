import React from "react";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

function ContactForm() {
  return (
    <section id="container">
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <h1 className="contact-header">&#60;Contact Me&#47;&#62;</h1>
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  <IoLocation className="contact-icon" />
                  Ashland, Virginia
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <IoCall className="contact-icon" />
                  <a href="tel:1-814-412-8475" title="Give me a call">
                    (804) 412-8475
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <IoMail className="contact-icon" />
                  <a
                    href="mailto:web3.engineering@gmail.com"
                    title="Send me an email"
                  >
                    web3.engineering@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
        </div>

        <div className="contact-form">
          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>
            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <span class="send-text">SEND</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
