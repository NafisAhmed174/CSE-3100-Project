import React from "react";
import Layout from "../components/Layout/Layout";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="contactUs">
        <div className="title">
          <h2>Get in touch</h2>
        </div>

        <div className="box">
          {/* Form */}
          <div className="contact form">
            <h3>Send a message</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="Your first name" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Your last name" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="Your Mobile" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Your message"></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="contact info">
            <h3>Contact info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <FaLocationDot />
                </span>
                <p>
                  Ranibazar, Rajshahi <br />
                  Bangladesh
                </p>
              </div>

              <div>
                <span>
                  <MdEmail />
                </span>
                <a href="mailto:example@example.com">example@example.com</a>
              </div>

              <div>
                <span>
                  <FaPhone />
                </span>
                <a href="tel:+919876543210">+91 987 654 3210</a>
              </div>

              <ul className="sci">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="contact map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3951161473747!2d88.60425759999998!3d24.367554700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefaeead9265b%3A0x5fdebf26ccb8110c!2sRanibazar%20Rd%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1720440073801!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ranibazar Rajshahi Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
