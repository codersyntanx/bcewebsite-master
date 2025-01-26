import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import sectionimg from "./images/section_title_shape.png";
import thumb4 from "./images/Laugh.png";
import thumb7 from "./images/content-bg-8.jpg";
import quotes from "./images/quotes_ico_3.svg";
import shield from "./images/ShieldChevron.svg";
import truck from "./images/Truck.svg";
import thumb5 from "./images/post-5.jpg";
// We won't need Aboutustestonomials here if it's not being used, but you can import if needed.
// import Aboutustestonomials from "./Aboutustestonomials";
import TypingText from "./TypingText"; // <-- import the component

// 1) Import Framer Motion
import { motion } from "framer-motion";

// 2) Define animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const zoomVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 },
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

function Aboutus() {
  return (
    <>
      <Navbar />

      {/* =================== BREADCRUMB AREA START ===================== */}
      {/*
        We can fade this entire breadcrumb area up from below.
      */}
      <motion.section
        className="breadcrumb__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="container">
          <div className="breadcrumb__inner__blk">
            <h4>

              <TypingText text="Abbout us" speed={80} />
            </h4>
          </div>
        </div>
      </motion.section>
      {/* =================== BREADCRUMB AREA END ===================== */}

      {/* =================== PLATFORM AREA START (Our Mission) ===================== */}
      <motion.section
        className="platform__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row g-4">
            {/* Left Column: Text */}
            <motion.div
              className="col-xl-6"
              variants={fadeRightVariant}
            >
              <div
                className="section__title text-start"
                style={{ maxWidth: "100%" }}
              >
                <span>Trusted Brokeage</span>
                <h3>   KF BROKERAGE LLC

                </h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                  Advance Transportation Systems, Inc. is passionate about providing
                  outstanding transportation and logistics services to businesses like
                  yours. We put our customers at the forefront of everything we do
                  and are committed to delivering top-notch customer service.
                  With our unwavering attention to detail, we ensure your shipment
                  arrives at its destination safely and on time. Our team is motivated
                  to exceed your expectations and eager to show you how we can
                  optimize your supply chain operations. Let us help you streamline
                  your transportation needs and take the stress out of shipping.
                </p>
              </div>
              <div className="similar__btn__blk">
                <Link to="/quote">Send a Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              className="col-xl-6"
              variants={zoomVariant}
            >
              <img height="100%" src={thumb4} alt="" />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* =================== PLATFORM AREA END ===================== */}

      {/* =================== QUOTES AREA START (Helping all truckers thrive) ===================== */}
      <motion.section
        className="quotes__area pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div
            className="section__title"
            variants={fadeUpVariant}
          >
            <span>Trusted Path to Global Shipping!</span>
            <h3>OUR STORY!</h3>
            <div className="section__title__shape">
              <img src={sectionimg} alt="" />
            </div>
          </motion.div>

          <div className="quotes__second__style">
            <div className="row g-4 reverser">
              {/* Left image */}
              <motion.div
                className="col-lg-5"
                variants={zoomVariant}
              >
                <div className="quotes__thumb__blk">
                  <div className="quotes__thumb quotes__thumb__left__radius">
                    <img src={thumb7} alt="" />
                  </div>
                  <div className="quptes__thumb__card__blk">
                    <div className="quotes__thumb__card">
                      <span>
                        <img src={truck} alt="" />
                      </span>
                      <p>Safety in your truck</p>
                    </div>
                    <div className="quotes__thumb__card">
                      <span>
                        <img src={shield} alt="" />
                      </span>
                      <p>24 hour protection</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-xl-6"
                variants={fadeLeftVariant}
              >
                <div
                  className="section__title text-start"
                  style={{ maxWidth: "100%", paddingLeft: "90px" }}
                >


                  <p>
                   KF Brokerage LLC has been a trusted name in logistics since 1980, growing from a small truckload carrier into a leading transportation provider. In 2001, Jim, the son of our founder, Bo Wyenandt, took the reins of the company and made the pivotal decision to expand into the less-than-truckload market. This strategic move paved the way for greater opportunities, allowing us to diversify into various transportation sectors, including air, intermodal, drayage, international, white glove services, and governmental bids. Our commitment to innovation, reliability, and customer satisfaction is what setsKF Brokerage LLC apart. We have continuously invested in cutting-edge technology to ensure that our clients receive the highest level of service. Our team consists of industry experts who are always striving to improve and enhance our services for the benefit of our clients.
                  </p>
                  <div className="similar__btn__blk">
                <Link to="/quote">Send a Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
                </div>
              </motion.div>
              {/* Right content */}

            </div>
          </div>
        </div>
      </motion.section>
      {/* =================== QUOTS AREA END ===================== */}

      {/* =================== PLATFORM AREA START (We Are Built for Truckers) ===================== */}
      <motion.section
        className="platform__area pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container" style={{ width: "100%" }}>
          <div className="row g-4 reverser">
            {/* Left image */}
            <motion.div
              className="col-xl-6"
              variants={zoomVariant}
            >
              <div className="platform__thumb p-0">
                <img src={thumb5} width="773px" height="462px" alt="" />
              </div>
            </motion.div>

            {/* Right content */}
            <motion.div
              className="col-xl-6"
              variants={fadeLeftVariant}
            >
              <div
                className="section__title text-start"
                style={{ maxWidth: "100%", paddingLeft: "90px" }}
              >
                <span>Trusted Broker</span>
                <h3>OUR SERVICES!</h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                AtKFBROKERAGE LLC, we offer comprehensive transportation services to meet your needs. We have you covered from FTL shipping to LTL shipping, expedited freight to intermodal shipping, international shipping to warehousing, and providing services to government agencies. We pride ourselves on our customized approach to transport solutions. We’ll work with you to develop a plan that meets your unique transportation requirements, delivering your goods safely and on time. Why Choose ATS Logistics We’re not just any logistics company; we take pride in offering a wide range of services tailored to your needs as “Service is our only product!” Here’s why we’re the right choice for your transportation requirements
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* =================== PLATFORM AREA END ===================== */}

      <Footer />
    </>
  );
}

export default Aboutus;
