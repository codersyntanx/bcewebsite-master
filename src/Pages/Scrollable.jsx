import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import quotesicon from "./images/quotes_ico_1.svg";
import quotesicon2 from "./images/quotes_ico_2.svg";
import quotesicon3 from "./images/quotes_ico_3.svg";
import truck from "./images/Truck.svg";
import sheild from "./images/ShieldChevron.svg";
import main from "./images/content-bg-8.jpg";
import quotes from "./images/content-bg-1.jpg";
import call from "./images/PhoneCall.svg";
import jeep from "./images/Jeep.svg";
import dollar from "./images/CurrencyDollar.svg";
import sectionimg from "./images/section_title_shape.png";

function Scrollable() {

  useEffect(() => {
    const owl = window.jQuery(".quotes__slide__wrapper");

    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      nav: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      onChanged: (event) => {
        const isUpArrow = event.page.index === 0; // Condition to change nav icons as an example
        const navText = isUpArrow
          ? ['<i class="fas fa-chevron-up"></i>', '<i class="fas fa-chevron-left"></i>']
          : ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'];

        owl.find('.owl-nav button.owl-prev').html(navText[0]);
        owl.find('.owl-nav button.owl-next').html(navText[1]);
      },
      touchDrag: false, 
      mouseDrag: false,
    });
  }, []);

  // Framer Motion variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 2000px) {
            /* Add any large-screen styles if needed */
          }
          @media (max-width: 1200px) {
            .owl-nav {
              position: absolute;
              top: 0%;
              transform: translateY(-50%);
              left: 50px;
              right: auto;
            }
            .owl-prev, .owl-next {
              margin-right: 5px;
            }
            .owl-next {
              margin-left: 5px;
            }
          }
        `}
      </style>

      {/* Use motion.section for the container to animate it in. */}
      <motion.section 
        className="quotes__area"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          
          {/* Title Section */}
          <motion.div 
            className="section__title"
            variants={fadeUpVariant}
          >
            <span>Trusted Path to Global Shipping!</span>
            <h3>Dedicated Lane Slot Fee Payment</h3>
            <div className="section__title__shape">
              <img src={sectionimg} alt="" />
            </div>
            <p>
              We charge a $395 slot fee for our dedicated lanes, which can be paid via Zelle Transfer, Cash App, Wire Transfer, or Venmo. This fee is required to secure the pickup number for your load and ensure a smooth scheduling process. Once the truck driver completes the payment, they will receive both the pickup number and a refundable receipt from us. The slot fee is fully refundable upon completion of the first delivery, offering both convenience and transparency for your shipments.
            </p>
          </motion.div>

          {/* Owl Carousel Wrapper */}
          <div className="quotes__slide__wrapper owl-carousel">
            
            {/* Slide 1 */}
            <motion.div 
              className="quotes__single__slide"
              variants={fadeUpVariant}
            >
              <div className="row g-4">
                <div className="col-xl-7">
                  <div className="quotes__content">
                    <div className="single__quotes__content__blk">
                      <span>
                        <img src={quotesicon} alt="" />
                      </span>
                      <div className="single__quotes__content">
                        <h5>Why We Charge a Slot Fee:</h5>
                        <p>
                          We charge a slot fee to help ensure commitment and reliability from carriers. In the past, we’ve experienced situations where carriers book dedicated lanes and then disappear at the last moment, leaving us with little time to find a replacement. This last-minute scramble can disrupt the entire shipment process. The slot fee helps mitigate this risk by securing the carrier’s commitment upfront, allowing us to better plan and provide smooth, on-time service. The fee is refundable upon the first delivery, ensuring fairness and transparency.
                        </p>
                      </div>
                    </div>
                    <div className="single__quotes__content__blk">
                      <span>
                        <img src={quotesicon2} alt="" />
                      </span>
                      <div className="single__quotes__content">
                        <h5>Government Contract Fee:</h5>
                        <p>
                          For government contracts, we require an upfront payment of $1,299 for a 1-year agreement. This fee ensures the reservation of your contract and covers administrative and operational costs. The fee is fully refundable after the completion of the one-year term, providing peace of mind and commitment from both parties. This upfront payment helps streamline the process, ensuring we can efficiently fulfill your government shipment needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="quotes__thumb__blk">
                    <div className="quotes__thumb">
                      <img src={quotes} alt="" style={{ maxHeight: "400px" }} />
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
                          <img src={sheild} alt="" />
                        </span>
                        <p>24 hour protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Slide 2 */}
            <motion.div 
              className="quotes__single__slide"
              variants={fadeUpVariant}
            >
              <div className="row g-4">
                <div className="col-xl-7">
                  <div className="quotes__content">
                    <div className="single__quotes__content__blk">
                      <span>
                        <img src={call} alt="" />
                      </span>
                      <div className="single__quotes__content">
                        <h5>Dedicated Loads</h5>
                        <p>
                          We offer reliable trucking services for dedicated lanes and routes.
                        </p>
                      </div>
                    </div>
                    <div className="single__quotes__content__blk">
                      <span>
                        <img src={jeep} alt="" />
                      </span>
                      <div className="single__quotes__content">
                        <h5>Amazon Loads</h5>
                        <p>
                          We specialize in efficient Amazon load handling for on-time deliveries.
                        </p>
                      </div>
                    </div>
                    <div className="single__quotes__content__blk">
                      <span>
                        <img src={dollar} alt="" />
                      </span>
                      <div className="single__quotes__content">
                        <h5>Competitive rates</h5>
                        <p>
                          As a trusted broker, we provide secure logistics for government contracts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="quotes__thumb__blk">
                    <div className="quotes__thumb">
                      <img src={main} alt="" />
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
                          <img src={sheild} alt="" />
                        </span>
                        <p>24 hour protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Scrollable;
