import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import sectionimg from "./images/section_title_shape.png";
import thumb6 from "./images/post-3.jpg";
import thumb5 from "./images/quotes_thumb_5.png";
import thumb7 from "./images/post-5.jpg";
import shield from "./images/ShieldChevron.svg";
import truck from "./images/Truck.svg";
import check from "./images/quotes_ico_3.svg";
import content from "./images/content-bg-1.jpg";

// 1) Import Framer Motion
import { motion } from "framer-motion";
import TypingText from "./TypingText";

// 2) Define animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const zoomVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// 3) More dramatic variants for the last sections
const fadeLeftBigVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0 },
  },
};

const fadeRightBigVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0 },
  },
};

const zoomLargeVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

function Generalliabilityinsurance() {
  return (
    <>
      <Navbar />

      {/* =================== BREADCRUMB AREA START ===================== */}
      <motion.section
        className="breadcrumb__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="container">
          <div className="breadcrumb__inner__blk">
            {/* Typing effect for heading */}
            <h4>
              <TypingText text="Ouur Services" speed={80} />
            </h4>
            <p></p>
          </div>
        </div>
      </motion.section>
      {/* =================== BREADCRUMB AREA END ===================== */}

      {/* =================== 1ST PLATFORM AREA START ===================== */}
      <motion.section
        className="platform__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row g-4">
            {/* Left Column */}
            <motion.div className="col-xl-6" variants={fadeUpVariant}>
              <div className="section__title text-start" style={{ maxWidth: "100%" }}>
                <span>Our services</span>
                <h3>International services Ocean and air freight!</h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                  KF Brokerage LLC understands the importance of all facets of the
                  supply chain. That’s why we offer international freight services
                  tailored for businesses with global shipping needs. Our expertise
                  ensures your products reach their destination on time and in
                  excellent condition. International freight shipping plays a crucial
                  role in the global supply chain, facilitating trade across borders.
                  At KF Brokerage LLC, we recognize its significance for businesses
                  looking to expand globally.
                </p>
              </div>
              <div className="similar__btn__blk">
                <Link to="/quote ">Send an Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div className="col-xl-6" variants={zoomVariant}>
              <div className="platform__thumb">
                <img src={thumb6} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* =================== 1ST PLATFORM AREA END ===================== */}

      {/* =================== QUOTES AREA START ===================== */}
      <motion.section
        className="quotes__area pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div className="section__title" variants={fadeUpVariant}>
            <span>Do the same as thousands of customers</span>
            <h3 style={{ textTransform: "lowercase" }}>
              3 Reasons for WHY CHOOSE KF BROKERAGE LLC FOR INTERNATIONAL FREIGHT?
            </h3>
            <div className="section__title__shape">
              <img src={sectionimg} alt="" />
            </div>
          </motion.div>

          <div className="quotes__second__style">
            <div className="row g-4 reverser">
              {/* Left image */}
              <motion.div className="col-lg-5" variants={zoomVariant}>
                <div className="quotes__thumb__blk">
                  <div className="quotes__thumb quotes__thumb__left__radius">
                    <img src={thumb5} alt="" />
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

              {/* Right content */}
              <motion.div className="col-lg-7" variants={fadeUpVariant}>
                <div className="quotes__content">
                  <div className="single__quotes__content__blk">
                    <span>
                      <img src={check} alt="" />
                    </span>
                    <div className="single__quotes__content">
                      <h5>Competitive pricing and flexible solutions</h5>
                      <p>
                        KF BROKERAGE LLC offers competitive pricing and flexible solutions
                        that cater to businesses of all sizes. We work with you to
                        understand your unique requirements and develop customized solutions
                        that meet your needs.
                      </p>
                    </div>
                  </div>
                  <div className="single__quotes__content__blk">
                    <span>
                      <img src={check} alt="" />
                    </span>
                    <div className="single__quotes__content">
                      <h5>Advanced security and safety measures for peace of mind</h5>
                      <p>
                        Using a knowledgeable and expert customs broker can assist you
                        with bonds, duties, taxes, and other international shipping
                        procedures. They will also be able to answer your questions and
                        help you successfully plan your shipment.
                      </p>
                    </div>
                  </div>
                  <div className="single__quotes__content__blk">
                    <span>
                      <img src={check} alt="" />
                    </span>
                    <div className="single__quotes__content">
                      <h5>Comprehensive coverage across the globe</h5>
                      <p>
                        Our full network of partners and carriers provides comprehensive
                        coverage across the globe, ensuring that your freight reaches its
                        destination wherever it needs to go.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* =================== QUOTS AREA END ===================== */}

      {/* =================== 2ND PLATFORM AREA (More Dramatic) ===================== */}
      {/*
        We'll apply bigger, more noticeable motion variants:
        - Left Image uses zoomLargeVariant
        - Right Content uses fadeRightBigVariant
      */}
      <motion.section
        className="platform__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row g-4">
            {/* Left Image */}
            <motion.div className="col-xl-5" variants={zoomLargeVariant}>
              <div className="platform__thumb">
                <img src={thumb7} alt="" />
              </div>
            </motion.div>

            <div className="col-xl-1" />

            {/* Right Content */}
            <motion.div className="col-xl-6" variants={fadeRightBigVariant}>
              <div className="section__title text-start" style={{ maxWidth: "100%" }}>
                <span>Our Commitment!</span>
                <h3>Our Commitment to International Freight!</h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                  KF BROKERAGE LLC is committed to delivering on-time and reliable
                  international freight solutions. We take a proactive and responsive
                  approach to problem-solving and resolution, ensuring that issues are
                  addressed quickly and efficiently. We also have comprehensive risk
                  management and quality control measures to ensure your goods are
                  transported safely and securely. Our commitment to quality and
                  reliability gives you confidence in us to deliver exceptional
                  international freight solutions that meet your unique needs.
                </p>
              </div>
              <div className="similar__btn__blk">
                <Link to="/quote ">Send an Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =================== 3RD PLATFORM AREA (More Dramatic) ===================== */}
      {/*
        We'll switch sides here:
        - Right Content uses fadeLeftBigVariant
        - Right Image uses zoomLargeVariant
      */}
      <motion.section
        className="platform__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row g-4">
            {/* Right Content */}
            <motion.div className="col-xl-6" variants={fadeLeftBigVariant}>
              <div className="section__title text-start" style={{ maxWidth: "100%" }}>
                <span>Our Services!</span>
                <h3>Our International Freight Services! </h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                  KF BROKERAGE LLC offers a wide range of international freight
                  solutions that cater to businesses of all sizes. Whether by air,
                  ocean, or ground, we provide flexible shipping options to ensure
                  your goods reach their destination efficiently and safely. Our
                  services, combined with the expertise of our in-house customs
                  broker, guarantee that your freight will arrive on time and in
                  excellent condition.
                  <br />
                  <br />
                  Our dedicated team of international logistics professionals and
                  experienced customs brokers is committed to providing personalized
                  service. We collaborate closely with you to understand your
                  specific needs and craft tailored solutions that enhance your supply
                  chain and improve operational efficiency. With KF BROKERAGE LLC,
                  you can rest assured that your international freight is in the most
                  capable hands.
                </p>
              </div>
              <div className="similar__btn__blk">
                <Link to="/quote ">Send an Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
            </motion.div>

            <motion.div className="col-xl-6" variants={zoomLargeVariant}>
              <div className="platform__thumb">
                <img src={thumb7} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =================== 4TH PLATFORM AREA (More Dramatic) ===================== */}
      <motion.section
        className="platform__area"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="row g-4">
            {/* Left Image */}
            <motion.div className="col-xl-4" variants={zoomLargeVariant}>
              <div className="platform__thumb">
                <img src={content} alt="" />
              </div>
            </motion.div>

            <div className="col-xl-1" />

            {/* Right Content */}
            <motion.div className="col-xl-6" variants={fadeRightBigVariant}>
              <div className="section__title text-start" style={{ maxWidth: "100%" }}>
                <span>Our Transport Expertise!</span>
                <h3>Our International Transport Expertise!</h3>
                <div className="section__title__shape">
                  <img src={sectionimg} alt="" />
                </div>
                <p>
                  KF BROKERAGE LLC has decades of experience in international
                  logistics and transportation. Our highly trained and experienced
                  team of international freight forwarders, customs broker, and
                  logistics professionals are dedicated to delivering exceptional
                  service and support, ensuring that your products reach their
                  destination seamlessly. We use advanced technology and tools to
                  optimize routing and scheduling, allowing us to deliver streamlined
                  and cost-effective international transportation solutions. Our
                  expertise allows you to be sure that your goods will be transported
                  as effectively and efficiently as possible.
                </p>
              </div>
              <div className="similar__btn__blk">
                <Link to="/quote ">Send an Agreement</Link>
                <Link to="/contactus" className="btn_bg_transparent">
                  Contact us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}

export default Generalliabilityinsurance;
