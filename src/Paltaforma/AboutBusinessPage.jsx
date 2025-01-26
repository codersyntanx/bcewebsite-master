import { useNavigate } from "react-router-dom";
import "./business.css";
import fmcsa from "./images/fm.png";
import signature from "./images/signature.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import brandlogo from "../Pages/images/colorlogo.png"
import { useEffect, useState } from "react";
function AboutBusinessPage({ changeIcon, handleNavigationClick }) {
  const [formData, setFormData] = useState("")
  const [driver, setDriver] = useState('')
  const goback = () => {
    handleNavigationClick("about");
  };

  useEffect(() => {
    // Check localStorage for saved data
    window.scrollTo(0, 0);

    const savedData = JSON.parse(localStorage.getItem("driversFormData"));
    if (savedData) {
      setDriver(savedData);
    }
  }, []);
  const navigate = useNavigate();


  const gotonext = () => {
    const content = document.querySelector(".pdfcontent");
    const originalWidth = content.style.width; // Store the original width
    content.style.width = "1034px"; // Force desktop width before snapshot
  
    // Increase scale if you need higher resolution (but watch for large file sizes)
    html2canvas(content, { scale: 1 }).then((fullCanvas) => {
      // PDF setup
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      // Define margins (in mm)
      const margin = 10;
      const usableWidth = pdfWidth - margin * 2; // width inside left/right margins
      const usableHeight = pdfHeight - margin * 2; // height inside top/bottom margins
  
      // Ratio between canvas px and PDF mm
      // If the entire canvas width maps to `usableWidth` in mm,
      // then 1 mm = (canvas.width / usableWidth) px
      const pxPerMm = fullCanvas.width / usableWidth;
  
      // The number of vertical px that fit on one PDF page (inside the margins).
      // e.g. if usableHeight=277mm => 277 * pxPerMm px tall
      const pageHeightPx = usableHeight * pxPerMm;
  
      let pageY = 0; // Tracks how far down (in px) we’ve processed the large canvas
      while (pageY < fullCanvas.height) {
        // sliceCanvas will hold a “page” of content from the full canvas
        const sliceCanvas = document.createElement("canvas");
        const sliceCtx = sliceCanvas.getContext("2d");
  
        // The remaining height in the original canvas
        const remainingHeightPx = fullCanvas.height - pageY;
        // The slice to draw on this page
        const sliceHeightPx = Math.min(pageHeightPx, remainingHeightPx);
  
        // Match slice canvas dimensions to the portion we need
        sliceCanvas.width = fullCanvas.width;
        sliceCanvas.height = sliceHeightPx;
  
        // Copy just the region for this PDF page from fullCanvas
        sliceCtx.drawImage(
          fullCanvas,
          0,         // source X in fullCanvas
          pageY,     // source Y in fullCanvas
          fullCanvas.width,
          sliceHeightPx,
          0,         // destination X in sliceCanvas
          0,         // destination Y in sliceCanvas
          fullCanvas.width,
          sliceHeightPx
        );
  
        // Convert sliceCanvas to JPEG
        const pageData = sliceCanvas.toDataURL("image/jpeg", 1);
  
        // The displayed height in PDF units (mm) for this slice
        const sliceHeightMm = sliceHeightPx / pxPerMm;
  
        // Render the slice into the PDF
        pdf.addImage(
          pageData,
          "JPEG",
          margin, // left margin
          margin, // top margin
          usableWidth,
          sliceHeightMm
        );
  
        pageY += sliceHeightPx; // Move down to next page slice
        if (pageY < fullCanvas.height) {
          pdf.addPage();
        }
      }
  
      pdf.save("Agreement.pdf");
      // Restore original width after PDF generation
      content.style.width = originalWidth;
    });
    navigate("/done")
  };
  


  useEffect(() => {
    // Check localStorage for saved data
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  return (
    <>
      <div className="small-screen-header">
        <div className="Start_Nav d-flex">
          <div className="Page_Position gap-2 d-flex align-items-center">
            <span className="circle_position">
              <span className="first_name">4</span>
              <span className="outof">/5</span>
            </span>
            <span className="Page_Name">Agreement</span>
          </div>
          <div className="next-page">
            <span className="next-step">Next step</span>
            <span className="vehicles">Done</span>
          </div>
        </div>
      </div>
  <div className="businesspage">
      <div className="pdfcontent">
       <div className="abovecontent">
          <div className="text-center">
            <img src={brandlogo} width='100px' alt="logo" />

          </div>
          <b>Broker/Carrier Agreement
          </b>
          <p>This Broker/Carrier Agreement is being entered into by and between:

          </p>
          <div className="d-flex">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Broker Name:</b>
            <p><u>{formData.brokerName}</u></p>

          </div>
          <p>EISCHEID TRUCKING BROKERAGE LLC, hereinafter referred to as “BROKER”), and:

          </p>
          <div className="d-flex flex-wrap">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Carrier Name:          </b>
            <p className="pe-4"><u>{formData.carrierName}</u></p>
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Carrier USDOT/MC:          </b>
            <p className="pe-4"><u>{formData.carrierUSDOT}</u></p>
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Carrier Phone number:       </b>
            <p className=" px-2" ><u>{formData.carrierPhone}</u></p>

          </div>
          <p>(hereinafter referred to as “CARRIER”) as defined below, on this:
          </p>
          <div className="d-flex">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Agreement Date:
            </b>
            <p className=" px-2" ><u>{formData.agreementDate}</u></p>
          </div>
          <p>
            This Agreement between EISCHEID TRUCKING BROKERAGE LLC and the Carrier/Broker is intended to enhance the joint efforts of both entities in developing a more secure environment by improving the security for the transportation of conveyances and cargo throughout the commercial process. The Carrier/Broker agrees to develop, implement and stay current, within a framework consistent with the listed recommendations, a verifiable, documented program to enhance security procedures throughout its supply chain process. Where the Carrier/Broker does not exercise control of the production facility, distribution entity, or process in the supply recommendations/guidelines to those entities.
          </p>
          <p>
            Specifically, Carriers/Brokers will attempt to meet at a minimum, the following Criteria:
          </p>
          <p>
            Broker Obligations: Broker shall pay CARRIER for services rendered in an amount equal to the rates and charges agreed to as set forth on any Load Confirmation(s) that is issued and that supplements and amends this Agreement to the extent its terms conflict with those in this Agreement. This Agreement or the Load Confirmation also governs all assessorial services which may be required or performed. CARRIER shall not bill for any accessorial or other charge not approved in this Agreement or in any Load Confirmation(s). Rates may be amended orally but must be confirmed in writing within five working days of the modification in order to remain binding between the PARTIES. As a condition precedent to payment
          </p>
          <p>
            CARRIER must submit proof of delivery with its invoices, and the invoices must reflect that CARRIER delivered the freight to its final destination. a. BROKER agrees to arrange for the transportation of a shipper’s freight with CARRIER pursuant to the terms of this Agreement, and to comply with all federal, state, and local laws and regulations pertaining to the brokerage services covered by this Agreement
          </p>
          <p>
            The Parties agree that BROKER’S responsibilities under this Agreement are limited to arranging for the transportation of a shipper’s freight with CARRIER, and not actually performing the transportation services, possessing the freight, or controlling the means or methods of the transportation.
          </p>
          <b>
            SLOT FEE (REFUNDABLE)
          </b>
          <p>
            The Carrier shall make a security deposit of $365 by direct payment, through instant payment methods to the EISCHEID TRUCKING BROKERAGE LLC. It is a refundable fee upon the first delivery, along with the payment of the load, for the securement of the load. Once carrier pays $365 to EISCHEID TRUCKING BROKERAGE LLC, carrier must get a Receipt for the Deposit Fee by the representative. The security deposit shall be refundable upon the termination of this Agreement, subject to any outstanding obligations or damages incurred by the Carrier. The Carrier may terminate this Agreement with one week's written notice to the Company. Broker is responsible for Detention.
          </p>
          <b>
            Payment Terms:
          </b>
          <p>
            Signed Copy of Rate confirmation and the company’s Invoice to the broker to get paid. We have two options. We charge 2% for Quick-pay ( same-day deposit). No fees for 24 hours deposit. Factoring
          </p>
          <b>
            Carrier Obligations:
          </b>
          <p>
            To be eligible for Accessorials/Incidentals, Carrier must: Be checked in to shipper OR receiver by the appointment time. Submit all proof of detention, accessorial, incidentals within 24-48 hours of delivery. Detention accrual begins 2 hours after appointment time at shipper/receiver IF: Carrier must notify Broker after 60 minutes of waiting. Provide time stamped BOL within 48 hours of delivery. Detention Rate-$40/hr after 2 hours. Max $200 detention per stop. Layover, Truck Order Not Used (TONU): Carrier must contact Broker to request Delays or cancellations must be confirmed by Broker Layovers: $200 Dry Van or $250 Running Reefers. TONU: $200.
          </p>
          <b>
            Term:

          </b>
          <p>
            The term of this Agreement shall be 60 day’s, commencing on the date listed above. If not cancelled by one of The Parties, the Agreement shall automatically renew itself for consecutive one year terms. The Agreement can be terminated at any time by either of The Parties with thirty (30) days written or electronic notice to the other party provided all balances are settled. This Agreement cannot, by law, exempt the Carrier/Broker from any regulatory sanctions in the event that discrepancies are discovered during a physical examination of cargo or the review of documents associated with the carrier's Customs transactions.
          </p>
          <b>
            Nothing in the Agreement relieves Carrier/Broker of any responsibilities with respect to Canadian and United States law, including Customs Regulations.


          </b>
          <div className="d-flex flex-wrap mt-3">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Print Name:</b>
            <p className="pe-4"><u>{driver.printName}</u></p>
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Title:</b>
            <p className="pe-4"><u>{driver.title}</u></p>
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Signature:</b>
            <p className=" px-2" ><u>{driver.signature}</u></p>
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Date:</b>
            <p className=" px-2" ><u>{driver.date}</u></p>
          </div>
          <p>32390 454TH ST MOTLEY, MN 56466 PH# 210-463-4468 FAX# 210-463-4468</p>
          <div className="d-flex">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>President:</b>
            <p className="pe-4"><u>James Martin</u></p>

          </div>
          <b>EISCHEID TRUCKING BROKERAGE LLC ( INCORPORATED SINCE 2020)</b>
          <p><b>INFORMATION</b></p>
          <p>MC# 554393 USDOT# 2236006

          </p>
          <div className="d-flex">
            <b className=" px-2" style={{ width: "auto", lineHeight: "23px" }}>Payment Option:</b>
            <p className="pe-4"><u>{driver.paymentMethod}</u></p>

          </div>
          <b>ENTIRE CONTRACT:

          </b>
          <p>The provisions contained in this AGREEMENT properly express and memorialize the complete understanding and agreement between the parties, including those contained in all prior agreements, both verbal or written, and there are no other agreements or understandings between the parties, express or implied, except as set forth herein.
          </p>
          <b>
            NOTICES:


          </b>
          <p>If carrier wants to end the contract or want to switch the jobs, carrier must give prior notice of 3 days before ending the contract.

          </p>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <img className="mb-2" src={fmcsa} width="80px" alt="FMCSA Logo" />
            <br />
            <b>U.S. Department of Transportation</b>
            <p className="mt-2">Federal Motor Carrier Safety Administration</p>
          </div>
          <div className="text-end">
            <p>1200 New Jersey Ave., S.E.</p>
            <p>Washington, DC 20590</p>
            <p>SERVICE DATE</p>
            <b>May 21, 2022</b>
          </div>
        </div>
        <div className="text-center">
          <b>CERTIFICATE</b>
          <p>MC-554393</p>
          <p>U.S. DOT No. 2236006</p>
          <p>KF BROKERAGE LLC</p>
          <p>32390 454TH ST MOTLEY, MN 56466</p>
          <p>ORLANDO, FL 32825</p>
        </div>
        <p>
          This License is evidence of the applicant's authority to engage in
          operations, in interstate or foreign as a broker, arranging for
          transportation of freight (except household goods) by Motor Vehicle.
        </p>
        <p>
          This authority will be effective as long as the broker maintains
          insurance coverage for the protection of the public (49 CFR 387) and
          the designation of agents upon whom process may be served (49 CFR
          366). The applicant shall also render reasonably continuous and
          adequate service to the public. Failure to maintain compliance will
          constitute sufficient grounds for revocation of this authority.
        </p>
        <img src={signature} alt="Signature" />
        <br />
        <b>Jeffrey L. Secrist, Chief</b>
        <p>Information Technology Operations Division</p>
        <b>NOTE:</b>
        <p>
          Willful and persistent noncompliance with applicable safety fitness
          regulations as evidenced by a DOT safety fitness rating of
          Unsatisfactory or by other indicators, could result in a proceeding
          requiring the holder of this certificate or permit to show cause why
          this authority should not be suspended or revoked.
        </p>
       </div>
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
       </div>
    </>
  );
}

export default AboutBusinessPage;
