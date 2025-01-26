import './StartPage.css';
import "./Start.css";
import { useEffect, useState } from 'react';
import { Spin, message } from 'antd';

function StartPage({ changeIcon, handleNavigationClick }) {
  const [formData, setFormData] = useState({
    brokerName: "",
    carrierName: "",
    carrierUSDOT: "",
    carrierPhone: "",
    agreementDate: Date.now
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check localStorage for saved data
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { brokerName, carrierName, carrierUSDOT, carrierPhone, agreementDate } = formData;
    if (!brokerName || !carrierName || !carrierUSDOT || !carrierPhone || !agreementDate) {
      message.error("Please fill out all fields before proceeding.");
      return;
    }

    setLoading(true);
    localStorage.setItem("formData", JSON.stringify(formData));
    changeIcon('fa-regular fa-circle-check green-icon');
    handleNavigationClick('vehicles');
    setTimeout(() => {
      setLoading(false);
      // Add navigation or other actions here
    }, 1000);
  };
 
  return (
    <>
      <div className="small-screen-header">
        <div className="Start_Nav d-flex">
          <div className="Page_Position gap-2 d-flex align-items-center">
            <span className="circle_position">
              <span className="first_name">1</span>
              <span className="outof">/5</span>
            </span>
            <span className="Page_Name">Carrier Info</span>
          </div>
          <div className="next-page">
            <span className="next-step">Next step</span>
            <span className="vehicles" onClick={() => handleNavigationClick("vehicles")}>Conditions</span>
          </div>
        </div>
      </div>
      <section className='start-hero-section'>
        <p className="usdotheading">This Broker/Carrier Agreement is being entered into by and between:</p>
        <div className="name-part">
          <p className="name-txt">Broker Name:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="text"
              name="brokerName"
              value={formData.brokerName}
              placeholder="Broker Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <p>KF TRUCKING BROKERAGE LLC, hereinafter referred to as “BROKER”), and:</p>
      </section>

      <section className='business-type-section'>
        <form onSubmit={handleSubmit}>
          <p className="business-type-heading">Carrier Information:</p>
          <div className='owner-info-form'>
            <div className="name-part">
              <p className="name-txt">Carrier Name:</p>
              <div className="name-fields">
                <input
                  className="form-control form-control-lg full-field"
                  type="text"
                  name="carrierName"
                  value={formData.carrierName}
                  placeholder="Carrier Name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="name-part">
              <p className="name-txt">Carrier USDOT/MC:</p>
              <div className="name-fields">
                <input
                  className="form-control form-control-lg full-field"
                  type="text"
                  name="carrierUSDOT"
                  value={formData.carrierUSDOT}
                  placeholder="Carrier USDOT/MC"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="name-part">
              <p className="name-txt">Carrier Phone number: </p>
              <div className="name-fields">
                <input
                  className="form-control form-control-lg full-field"
                  type="text"
                  name="carrierPhone"
                  value={formData.carrierPhone}
                  placeholder="Carrier Phone number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="name-part">
              <p className="name-txt">Agreement Date: </p>
              <div className="name-fields">
                <input
                  className="form-control form-control-lg full-field"
                  type="date"
                  name="agreementDate"
                  value={formData.agreementDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <p>
              This Agreement between EISCHEID TRUCKING BROKERAGE LLC and the Carrier/Broker is intended to enhance the joint efforts of both entities in developing a more secure environment by improving the security for the transportation of conveyances and cargo throughout the commercial process.
            </p>
          </div>

          <div className="btns_position">
            <button className="back_button" type="button">
              Back &nbsp;&nbsp;
            </button>
            <button className="small-screen" type="button">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="continous_button" type="submit">
              <Spin spinning={loading}>
                Continue &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Spin>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default StartPage;