import './StartPage.css';
import "./Start.css";
import { useEffect, useState } from 'react';
import { Radio, Spin, message } from 'antd';

function DriversPage({ changeIcon, handleNavigationClick }) {
  const [formData, setFormData] = useState({
    printName: "",
    title: "",
    signature: "",
    date: "",
    email: "",
    paymentMethod: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check localStorage for saved data
    window.scrollTo(0, 0);

    const savedData = JSON.parse(localStorage.getItem("driversFormData"));
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

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: e.target.value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const gotonext = () => {
    // Check if all fields are filled
    const { printName, title, signature, date, email, paymentMethod } = formData;
    if (!printName || !title || !signature || !date || !email || !paymentMethod) {
      message.error("Please fill out all fields before proceeding.");
      return;
    }
    if (!isValidEmail(email)) {
      message.error("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("driversFormData", JSON.stringify(formData));
    changeIcon('fa-regular fa-circle-check green-icon');
    handleNavigationClick('about');
  };

  const goback = () => {
    handleNavigationClick('vehicles');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { printName, title, signature, date, email, paymentMethod } = formData;
    if (!printName || !title || !signature || !date || !email || !paymentMethod) {
      message.error("Please fill out all fields before proceeding.");
      return;
    }
    if (!isValidEmail(email)) {
      message.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    localStorage.setItem("driversFormData", JSON.stringify(formData));
    changeIcon('fa-regular fa-circle-check green-icon');
    handleNavigationClick('vehicles');
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="small-screen-header">
        <div className="Start_Nav d-flex">
          <div className="Page_Position gap-2 d-flex align-items-center">
            <span className="circle_position">
              <span className="first_name">3</span>
              <span className="outof">/5</span>
            </span>
            <span className="Page_Name">Driver Info</span>
          </div>
        </div>
      </div>
      <section className='start-hero-section'>
        <div className="name-part">
          <p className="name-txt">Print Name:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="text"
              name="printName"
              value={formData.printName}
              placeholder="Print Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="name-part">
          <p className="name-txt">Title:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="name-part">
          <p className="name-txt">Signature:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="text"
              name="signature"
              value={formData.signature}
              placeholder="Signature"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="name-part">
          <p className="name-txt">Date:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="name-part">
          <p className="name-txt">Email:</p>
          <div className="name-fields">
            <input
              className="form-control form-control-lg border"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
        </div>
        <p>
          32390 454TH ST MOTLEY, MN 56466 PH# 210-463-4468 FAX# 210-463-4468


        </p>
        <p><b>President:</b> James Martin

        </p>
        <p><b>KF  BROKERAGE LLC ( INCORPORATED SINCE 2020)

        </b></p>
        <p><b>INFORMATION</b></p>
        <p>MC# 554393 USDOT# 2236006

        </p>
        <div className="name-part">
          <p className="name-txt"><b>Select Payment Option:</b></p>
          <div className="name-fields">
            <div className="radiobutns inputflds flex-wrap">
              <label className="radio-label">
                <Radio value="CASHAPP TRANSFER" onChange={handleRadioChange} checked={formData.paymentMethod === "CASHAPP TRANSFER"} />
                CASHAPP TRANSFER
              </label>
              <label className="radio-label">
                <Radio value="ZELLE TRANSFER" onChange={handleRadioChange} checked={formData.paymentMethod === "ZELLE TRANSFER"} />
                ZELLE TRANSFER
              </label>
              <label className="radio-label">
                <Radio value="VENMO TRANSFER" onChange={handleRadioChange} checked={formData.paymentMethod === "VENMO TRANSFER"} />
                VENMO TRANSFER
              </label>
            </div>
          </div>
        </div>
        <p><b>ENTIRE CONTRACT:</b></p>
        <p>
        The provisions contained in this AGREEMENT properly express and memorialize the complete understanding and agreement between the parties, including those contained in all prior agreements, both verbal or written, and there are no other agreements or understandings between the parties, express or implied, except as set forth herein.


        </p>
        <p><b>
        NOTICES:

</b></p>
<p>If carrier wants to end the contract or want to switch the jobs, carrier must give prior notice of 3 days before ending the contract.

</p>
        <div className="btns_position">
          <button className="back_button" type="button" onClick={goback}>
            Back &nbsp;&nbsp;
          </button>
          <button className="small-screen" type="button">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="continous_button" type="button" onClick={gotonext}>
            Continue &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default DriversPage;