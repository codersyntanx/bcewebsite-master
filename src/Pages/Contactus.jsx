import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import greenshield from "./images/ShieldCheck.svg";
import quotesthum from "./images/last.png";
import rightarrow from "./images/arrow_right.svg";
import maper from "./images/map_ico.svg";
import email from "./images/email_ico.svg";
import call from "./images/call_ico.svg";
import sectionline from "./images/section_title_shape.png";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";

// Framer Motion
import { motion } from "framer-motion";
// Our custom typewriter
import TypingText from "./TypingText"; // <-- import the component

function Contactus() {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = async () => {
    if (!name || !userEmail || !phone || !message) {
      openerrorNotificationWithIcon("error");
      return;
    }

    const formData = {
      data: [
        {
          Name: name,
          Email: userEmail,
          Phone: phone,
          Message: message,
        },
      ],
    };

    try {
      // 1) Append data
      await axios.post(
        "https://script.google.com/macros/s/AKfycbxmu6FJDDLYx18wTFBopr_OQrMmIvU7yXBQh7ENg0mlLgx_5QIFN9m_6Yb1srDu1LH57g/exec?action=addData",
        {
          Name: name,
          Email: userEmail,
          Phone: phone,
          Message: message,
        },
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "User-Agent": "insomnia/8.4.5",
          },
        }
      );

      // 2) Send email
      await axios.post(
        "https://serverforstripe.vercel.app/api/sendemail",
        formData.data[0],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      openNotificationWithIcon("success", formData);

      // Reset after success
      setName("");
      setUserEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const openNotificationWithIcon = (type, formData) => {
    notification[type]({
      message: "Thank you for registering",
      description: `${formData.data[0].Name}, you will be contacted shortly!`,
    });
  };

  const openerrorNotificationWithIcon = (type) => {
    notification[type]({
      message: "Missing Field",
      description: "Please Fill All Of The Fields",
    });
  };

  // Framer Motion Variants
  const fadeDownVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb with typewriting effect */}
      <motion.section
        className="breadcrumb__area"
        initial="hidden"
        animate="visible"
        variants={fadeDownVariant}
      >
        <div className="container">
          <div className="breadcrumb__inner__blk">
            {/* Use our TypingText component here */}
            <h4>
              <TypingText text="Coontact us" speed={80} />
            </h4>
          </div>
        </div>
      </motion.section>

      {/* Contact area */}
      <section className="contact__area">
        <div className="container">
          <div className="contact__inner__blk">
            <div className="row g-4">
              <div className="col-xl-5">
                {/* Fade in from below */}
                <motion.div
                  className="contact__content"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4>  <TypingText text="Geet in touch with us" speed={80} /></h4>
                  <div className="contact__info">
                    <h4>Find us at</h4>
                    <a href="#">
                      <span>
                        <img src={maper} alt="" />
                      </span>
                      134 BEDELL DR PORT JERVIS, NY 12771
                    </a>
                  </div>
                  <div className="contact__info">
                    <h4>Reach out to us at</h4>
                    <a href="#">
                      <span>
                        <img src={email} alt="" />
                      </span>
                      Operations@kfbrokecagellc.com
                    </a>
                    <a href="#">
                      <span>
                        <img src={call} alt="" />
                      </span>
                      301-591-6550
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="col-xl-7">
                <motion.div
                  className="hero__form__wrapper"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <form>
                    <div className="hero__form__blk">
                      <div className="hero__form__title">
                        <h4>Get a quote right now</h4>
                      </div>
                      <div className="hero__form__step">
                        <motion.div
                          className="hero__single__form__step matheus_input"
                          variants={fadeUpVariant}
                        >
                          <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </motion.div>
                        <motion.div
                          className="hero__single__form__step"
                          variants={fadeUpVariant}
                        >
                          <input
                            type="email"
                            placeholder="E-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                          />
                        </motion.div>
                        <motion.div
                          className="hero__single__form__step"
                          variants={fadeUpVariant}
                        >
                          <input
                            type="text"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </motion.div>
                        <motion.div
                          className="hero__single__form__step"
                          variants={fadeUpVariant}
                        >
                          <input
                            type="text"
                            className="mt-0"
                            placeholder="Message"
                            style={{ height: "108px" }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </motion.div>
                        <motion.div className="form__btn" variants={fadeUpVariant}>
                          <button onClick={handleButtonClick} type="button">
                            Send
                          </button>
                          <p>
                            By submitting your data, you authorize us to contact
                            you, To find out more, see our{" "}
                            <a href="#">Privacy policy</a>
                          </p>
                        </motion.div>
                        <motion.div
                          className="hero__data__safe"
                          variants={fadeUpVariant}
                        >
                          <p>
                            <span>
                              <img src={greenshield} alt="" />
                            </span>{" "}
                            Your data is safe with us
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map__area">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4614441738486!2d-74.59277569999999!3d41.3857842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c337d6072f515d%3A0x8810202dc209c6dd!2s134%20Bedell%20Dr%2C%20Port%20Jervis%2C%20NY%2012771%2C%20USA!5e0!3m2!1sen!2s!4v1737841138086!5m2!1sen!2s"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </section>
      <Footer />
    </>
  );
}

export default Contactus;
