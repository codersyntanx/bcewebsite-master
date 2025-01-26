import Modals from "./Modal"
import "./Table.css"
import { Modal, Skeleton } from 'antd';
import { Modal as AntModal } from 'antd';
import { useEffect } from "react";
import Select from 'react-select';

function VehiclesPage({ changeIcon, handleNavigationClick }) {
const gotonext = ()=>{
  handleNavigationClick('drivers')
  changeIcon('fa-regular fa-circle-check green-icon')
}
const goback = ()=>{
  handleNavigationClick('start')
  // changeIcon('fa-regular fa-circle-check green-icon')
}
useEffect(()=>{
  window.scrollTo(0, 0);

},[])
  return (
    <>
      <div className="small-screen-header">
        <div className="Start_Nav d-flex">
          <div className="Page_Position gap-2 d-flex  align-items-center">

            <span className="circle_position"><span className="first_name">2</span><span className="outof">/5</span></span>
            <span className="Page_Name">Conditions</span>
          </div>
          <div className="next-page">
            <span className="next-step">Next step</span>
            <span className="vehicles" onClick={() => { handleNavigationClick("drivers") }}>Agrement Info</span>
          </div>
        </div>
      </div>
      <div className='business-type-section'>
        <div className="before_press">
          <p className="Device_information">Term and Conditions</p>
          <p >
            Broker Obligations: Broker shall pay CARRIER for services rendered in an amount equal to the rates and charges agreed to as set forth on any Load Confirmation(s) that is issued and that supplements and amends this Agreement to the extent its terms conflict with those in this Agreement. This Agreement or the Load Confirmation also governs all assessorial services which may be required or performed. CARRIER shall not bill for any accessorial or other charge not approved in this Agreement or in any Load Confirmation(s). Rates may be amended orally but must be confirmed in writing within five working days of the modification in order to remain binding between the PARTIES. As a condition precedent to payment
          </p>

          <p>
            CARRIER must submit proof of delivery with its invoices, and the invoices must reflect that CARRIER delivered the freight to its final destination. a. BROKER agrees to arrange for the transportation of a shipper’s freight with CARRIER pursuant to the terms of this Agreement, and to comply with all federal, state, and local laws and regulations pertaining to the brokerage services covered by this Agreement


          </p>
          <p>
            The Parties agree that BROKER’S responsibilities under this Agreement are limited to arranging for the transportation of a shipper’s freight with CARRIER, and not actually performing the transportation services, possessing the freight, or controlling the means or methods of the transportation.

          </p>
          <p className="Device_information">SLOT FEE (REFUNDABLE)
          </p>
<p>
The Carrier shall make a security deposit of $365 by direct payment, through instant payment methods to the EISCHEID TRUCKING BROKERAGE LLC. It is a refundable fee upon the first delivery, along with the payment of the load, for the securement of the load. Once carrier pays $365 to EISCHEID TRUCKING BROKERAGE LLC, carrier must get a Receipt for the Deposit Fee by the representative. The security deposit shall be refundable upon the termination of this Agreement, subject to any outstanding obligations or damages incurred by the Carrier. The Carrier may terminate this Agreement with one week's written notice to the Company. Broker is responsible for Detention.
</p>
<p className="Device_information">Payment Terms:
</p>
<p>
Signed Copy of Rate confirmation and the company’s Invoice to the broker to get paid. We have two options. We charge 2% for Quick-pay ( same-day deposit). No fees for 24 hours deposit. Factoring
</p>
<p className="Device_information">Carrier Obligations:
</p>
<p>
To be eligible for Accessorials/Incidentals, Carrier must: Be checked in to shipper OR receiver by the appointment time. Submit all proof of detention, accessorial, incidentals within 24-48 hours of delivery. Detention accrual begins 2 hours after appointment time at shipper/receiver IF: Carrier must notify Broker after 60 minutes of waiting. Provide time stamped BOL within 48 hours of delivery. Detention Rate-$40/hr after 2 hours. Max $200 detention per stop. Layover, Truck Order Not Used (TONU): Carrier must contact Broker to request Delays or cancellations must be confirmed by Broker Layovers: $200 Dry Van or $250 Running Reefers. TONU: $200.
</p>
<p className="Device_information"> Terms:
</p>
<p>
The term of this Agreement shall be 60 day’s, commencing on the date listed above. If not cancelled by one of The Parties, the Agreement shall automatically renew itself for consecutive one year terms. The Agreement can be terminated at any time by either of The Parties with thirty (30) days written or electronic notice to the other party provided all balances are settled. This Agreement cannot, by law, exempt the Carrier/Broker from any regulatory sanctions in the event that discrepancies are discovered during a physical examination of cargo or the review of documents associated with the carrier's Customs transactions.
</p>
<p>
Nothing in the Agreement relieves Carrier/Broker of any responsibilities with respect to Canadian and United States law, including Customs Regulations.


</p>
        </div>
        <div className="btns_position">
            <button className="back_button" type="button" onClick={()=>{goback()}}>
              Back &nbsp;&nbsp;
            </button>
            <button className="small-screen" type="button">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="continous_button" type="submit" onClick={()=>{gotonext()}}>
                Continue &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
      </div>



    </>
  );
}

export default VehiclesPage;
