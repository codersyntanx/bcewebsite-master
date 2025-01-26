import { useEffect } from "react";
import circle from "./images/CircleWavyCheck.svg"
import medal from "./images/Medal_black.svg"
import arrowright from "./images/ArrowRight_black.svg"
import sectionimg from "./images/section_title_shape.png"
import firstimage from "./images/postimage.jpg"
import secnd from "./images/post-2.jpg"
import third from "./images/post-3.jpg"
import {Link} from "react-router-dom"
function Educate (){
  useEffect(() => {
    const owlOptions = {
      loop: false, // Set loop to false initially
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      margin: 20,
    };

    // Check screen width and set items accordingly
    if (window.innerWidth >= 768) {
      owlOptions.items = 3;
      owlOptions.loop = false;

      window.jQuery(".manage__inner__blk").owlCarousel(owlOptions);

      // Refresh Owl Carousel on window resize
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          owlOptions.items = 1;
          owlOptions.loop = true; // Set loop to true for small screens
          window.jQuery(".manage__inner__blk").trigger("destroy.owl.carousel").owlCarousel(owlOptions);
        } else {
          owlOptions.items = 3;
          owlOptions.loop = false; // Set loop to false for large screens
          window.jQuery(".manage__inner__blk").trigger("destroy.owl.carousel").owlCarousel(owlOptions);
        }
      });
    } else {
      owlOptions.items = 1;
      owlOptions.loop = true; // Set loop to true for small screens
      window.jQuery(".manage__inner__blk").owlCarousel(owlOptions);
    }

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
      
    return(
        <>
         <section className="manage__area">
    <div className="container">
      <div
        className="section__title"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1000}
      >
        <span>Our Logistics Services!</span>
        <h3>What we are Offering!</h3>
        <div className="section__title__shape">
          <img src={sectionimg} alt="" />
        </div>
        <p>
        KF BROKERAGE LLC specializes in managing the transportation
        storage and distribution of goods.
        </p>
      </div>
      <div className="manage__inner__blk owl-carousel">
        <div className="manage__single__card__blk">
<img src={firstimage} alt="this image" style={{height:"200px"}}/>         <div className="mt-3"><span>Dedicated Lanes:</span></div>   
          <p>
          We provide reliable and consistent trucking services for dedicated lanes, ensuring seamless, on-time deliveries tailored to your specific route needs. Whether you’re shipping regionally or across the country, our dedicated lanes offer the flexibility and reliability your business depends on.
          Routes for
Box Trucks.
Sprinter / Cargo.
Hotshots.
Flatbed/Stepdeck.
          </p>
         <br></br>
        </div>
        <div className="manage__single__card__blk">
        <img src={secnd} alt="this image" style={{height:"200px"}}/>  
        <div className="mt-3"><span>Amazon Loads:</span></div>  
          <p>
          We specialize in handling Amazon loads with precision and efficiency. Our drivers are experienced in meeting Amazon’s strict delivery requirements, ensuring your shipments are delivered on time and in perfect condition. Trust us for smooth and timely deliveries that keep your supply chain moving.
          </p>
          <br></br> <br></br>
        </div>
        <div className="manage__single__card__blk">
        <img src={third} alt="this image" style={{height:"200px"}}/> 
        <div className="mt-3">
          <span>Government Contracts:</span></div>   
          <p>
          As a trusted Broker, we provide expert logistics solutions for government contracts, handling everything from sensitive materials to large-scale shipments. We ensure compliance with all regulations and deadlines, delivering your cargo safely and on time. Our team is experienced in meeting the specific requirements of government contracts, offering reliable, secure transportation services that you can count on.
          </p>
   
        </div>
        
      </div>





      <div className="medal__content medal__content__black">
        <h4>
          <span>
            <img src={medal} alt="" />
          </span>{" "}
          <small>
          KF BROKERAGE LLC specializes in managing the transportation
          storage and distribution of goods,{" "}
            <Link to="/quote">
              Send a Agreement <img src={arrowright} alt="" />
            </Link>
          </small>
        </h4>
      </div>
    </div>
  </section>
        </>
    )
}
export default Educate