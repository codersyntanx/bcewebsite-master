
import hero from "./images/hero_content_shape.png"
import greenshield from "./images/ShieldCheck.svg"
import thumbnaill from "./images/platform_thumb_1.png"
import envolope from "./images/EnvelopeOpen.svg"
import phonee from "./images/Phone.svg"
import Sponsorslider from "./Sponsorslider"
import Scrollable from "./Scrollable"
import Navbar from "./Navbar"
import Educate from "./Educate"
import Testonomial from "./Testonomial"
import Footer from "./Footer"
import sectionimg from "./images/section_title_shape.png"
import dollar from "./images/CurrencyDollar.svg"
import jeep from "./images/Jeep.svg"
import call from "./images/PhoneCall.svg"
import medal from "./images/Medal.svg"
import { useState } from "react"
import axios from "axios"
import { notification } from 'antd';
import { useNavigate,Link } from "react-router-dom"
import HeroSection from "./images/HeroSection"
import videotruck from "./images/truck.mp4";

function Tester (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const handleButtonClick = async () => {
    // Check if any input field is empty
    if (!name || !email || !phone) {
      openerrorNotificationWithIcon('error');
      return;
    }
    setLoading(false);
    const formData = {
      data: [
        {
          Name: name,
          Email: email,
          Phone: phone,
        },
      ],
    };

    try {
      // Call the Google Apps Script API to append data to the Google Sheet
      await axios.post(
        'https://script.google.com/macros/s/AKfycbxmu6FJDDLYx18wTFBopr_OQrMmIvU7yXBQh7ENg0mlLgx_5QIFN9m_6Yb1srDu1LH57g/exec?action=addData',
        {
          Name: name,
          Email: email,
          Phone: phone,
        },
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "User-Agent":"insomnia/8.4.5"
          }
        }
      );
  
      // Call the second API to send an email
      await axios.post(
        'https://serverforstripe.vercel.app/api/sendemail',
        {
          Name: name,
          Email: email,
          Phone: phone,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Show success notification
      openNotificationWithIcon('success', formData);
  
      // Reset form data after successful submission
      setName('');
      setEmail('');
      setPhone('');
      navigate("/quote")
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }finally {
      setLoading(true);
    }
  };
  const openNotificationWithIcon = (type, formData) => {
    notification[type]({
      message: 'Thank you for registering',
      description: `${formData.data[0].Name}, Thank you for providing your contact information!`,
    });
  };
  
  const openerrorNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Missing Field',
      description:"Please Fill All Of The Fields",
    });
  };

    return(
      
        <>
 <Navbar/>

  {/* =================== HERO AREA START ===================== */}
<HeroSection/>

  {/* =================== HERO AREA END ===================== */}
  {/* =================== BRAND AREA START ===================== */}
 <Sponsorslider/>
  {/* =================== BRAND AREA END ===================== */}
  {/* =================== QUOTES AREA START ===================== */}
<Scrollable/>
  {/* =================== QUOTS AREA END ===================== */}
  {/* =================== TRUCKING AREA START ===================== */}
  <section
    className="trucking__area"
   
  >
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-4 smallbger" >

        </div>
        <div className="col-xl-8 truckingnature">
          <div
            className="trucking__inner__blk"
            data-aos="zoom-in"
            data-aos-delay={50}
            data-aos-duration={1000}
          >
            <div className="section__title text-start ms-0">
              <h3 className="white mb-20">
              Have Any Questions?
              </h3>
              <p>
              At KF BROKERAGE LLC, we offer a full range of 3PL services to ensure your business runs smoothly. We coordinate freight of all shapes and sizes from point A to point B, saving time and money. 
              </p>
            </div>
            <div className="trucking__card__wrapper">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="trucking__card">
                    <a href="tel:+13015916550">
                      <span>
                        <img src={phonee} alt="" />
                      </span>
                      <small>Talk to us by Phone</small>
                      <h4>(301) 591 - 6550</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="trucking__card">
                    <a href="mailto:alex@kfbrokerage.com">
                      <span>
                        <img src={envolope} alt="" />
                      </span>
                      <small>Contact us by Email</small>
                      <h4>alex@kfbrokerage.com</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="medal__content">
              <h4>
                <span>
                  <img src={medal} alt="" />
                </span>{" "}
                <small>
                  Have the best deal in your hands right now,{" "}
                  <Link to="/quote">
                    Send a Agreement <i style={{fontWeight:"bold"}} class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </small>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =================== TRUCKING AREA END ===================== */}
  {/* =================== PLATFORM AREA START ===================== */}
  <section className="platform__area">
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-5">
          <div
            className="section__title text-start"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1000}
          >
            <span>The best Broker company</span>
            <h3>How our platform works</h3>
            <div className="section__title__shape">
              <img src={sectionimg} alt="" />
            </div>
            <p>
            At KF  Brokerage LLC, we specialize in the transportation, storage, and distribution of goods with unmatched efficiency.


            </p>
          </div>
          <div
            className="platform__content"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1000}
          >
            <div className="single__platform__step">
              <a href="#">
                <span>
                <img src={jeep} alt="" />
                </span>{" "}
                Dedicated Loads
              </a>
            </div>
            <div className="single__platform__step">
              <a href="#">
                <span>
                <img src={jeep} alt="" />

                </span>{" "}
                Amazon Loads
              </a>
            </div>
            <div className="single__platform__step">
              <a href="#">
                <span>
                  <img src={dollar}alt="" />
                </span>{" "}
                Government Contracts
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div
            className="platform__thumb"
            data-aos="zoom-in"
            data-aos-delay={50}
            data-aos-duration={1000}
          >
            <img src={thumbnaill} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =================== PLATFORM AREA END ===================== */}
  {/* =================== MANAGE AREA START ===================== */}
 <Educate/>
  {/* =================== MANAGE AREA END ===================== */}
  {/* =================== TESTIMONIAL AREA START ===================== */}
<Testonomial/>
  {/* =================== TESTIMONIAL AREA END ===================== */}
  {/* =================== FOOTER AREA START ===================== */}
<Footer/>
  {/* =================== FOOTER AREA END ===================== */}
</>

        
     
    )
}
export default Tester
