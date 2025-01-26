
import './forma.css';
import headerlogo from '../Pages/images/colorlogo.png';
import done from "./images/Group 6674.png"
function Lastpage(){
    return(
        <>
            <div className="main_header_section">
        <div className="Header_text">
        <img src={headerlogo} alt="headerlogo" width='100px' className="header_logo pe-3" />
        <span className="onboarding">Broker/Carrier Agreement</span>
        </div>
      </div>
      <div className="header_body_section">
        <div className='container'>
            <div className='done-main'>
            <img src={done} alt='done'/>
            <p className="doneheading">Congratulations on a successful budget!</p>
            <p className="donecontent">Our team will contact you within 24 hours with all the details of the quote.</p>
            </div>
        </div>
      </div>
        </>
    )
}
export default Lastpage