import Breadcrumb from "../components/Breadcrumb";

import { useState } from "react";
import iconMail from "../assets/white-icon-mail.png";
import iconPhone from "../assets/white-icon-phone.png";
import HorizontalDevider from "../components/HorizontalDevider";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleSendMessage = () => {
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (number === "") {
      setNumberError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    if ((nameError, emailError, numberError, messageError)) {
      alert("Please fill the required fields to send us the message");
    } else {
      const messageData = {
        name: name,
        email: email,
        number: number,
        message: message,
      };
      console.log(messageData);
      alert("From submitted we will get back to you soon.");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    }
  };

  return (
    <div className="contactpage">
      <Breadcrumb
        linkToPreviousPage={"/"}
        previousPage={"Home"}
        currentPage={"Contact"}
      />
      <div className="contact-wrapper flex flex-col-reverse md:flex-row">
      <div className="left-section flex flex-col gap-8 md:max-w-xs w-full px-4 md:px-8 py-10 ">
          <article className="phone-container">
            <div className="article-header flex flex-row items-center gap-4">
              <figure className="icon-container bg-red rounded-full w-10 h-10">
                <img src={iconPhone} alt="icon for phone" />
              </figure>
              <h4 className="text-16px font-medium text-black">Call Us</h4>
            </div>
            <div className="article-body flex flex-col gap-4 mt-6">
              <p className="text-14px font-regular text-black">
                We are available 24/7.
              </p>
              <p className="text-14px font-regular text-black">
                Phone: 1800 1212 1212
              </p>
            </div>
          </article>
          <HorizontalDevider />
          <article className="mail-container">
            <div className="article-header flex flex-row items-center gap-4">
              <figure className="icon-container bg-red rounded-full w-10 h-10">
                <img src={iconMail} alt="icon for email" />
              </figure>
              <h4 className="text-16px font-medium text-black">Write To US</h4>
            </div>
            <div className="article-body flex flex-col gap-4 mt-6">
              <p className="text-14px font-regular text-black">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-14px font-regular text-black">
                Email: customer@exclusive.com
              </p>
              <p className="text-14px font-regular text-black">
                Email: support@exclusive.com
              </p>
            </div>
          </article>
        </div>
        <div className="right-section flex flex-col gap-8  px-4 md:px-8 py-10 ">
          <div className="top-section flex flex-col md:flex-row gap-4 items-center">
            <div className="name-container w-full relative">
              <input
                className=" bg-secondary w-full p-4 rounded text-black"
                placeholder="Your Name *"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
              />
              {nameError ? (
                <span className="absolute top-full left-0 z-10 text-red text-14px">
                  Name is required
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="email-container w-full relative">
              <input
                className=" bg-secondary w-full p-4 rounded text-black"
                placeholder="Your email *"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
              />
              {emailError ? (
                <span className="absolute top-full left-0 z-10 text-red text-14px">
                  Email is required
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="phone-container w-full relative">
              <input
                className=" bg-secondary w-full p-4 rounded text-black"
                placeholder="Your phone *"
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  setNumberError(false);
                }}
              />
              {numberError ? (
                <span className="absolute top-full left-0 z-10 text-red text-14px">
                  Number is required
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="bottom-section relative">
            <textarea
              className=" bg-secondary w-full p-4"
              placeholder="Your Message"
              name="message"
              id="message"
              rows="8"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
            ></textarea>
            {messageError ? (
              <span className="absolute top-full left-0 z-10 text-red text-14px">
                Message is required
              </span>
            ) : (
              ""
            )}
          </div>
          <button
            onClick={handleSendMessage}
            className="px-12 py-4 bg-red text-white font-medium w-max rounded ms-auto"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
