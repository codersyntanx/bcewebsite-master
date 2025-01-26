import React, { useState } from 'react';
import mobilelogo from "./images/colorlogo.png"
import clossmenu from "./images/close_menu.svg"
import logo from "./images/colorlogo.png"
import menubar from "./images/menu_bar.svg"
import { Link } from 'react-router-dom';
function Navbar(){
  
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };
    return(
        <>
         
         <div className={`offcanvas__menu ${isMenuOpen ? 'open' : ''}`}>
    <div className="mobile_logo">
      <a href="#">
        <img className='headerlogo' style={{width:"136px", height:"71px"}} src={mobilelogo} alt="" />
      </a>
    </div>
    <div className="header__right__blk">
      <div className="main__menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                to="/general-liability-insurance"
              >
                Our Services 
              </Link>
        
            </li>
        
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          
          </ul>
        </nav>
      </div>
      <div className="header__btn">
     
        <Link to="/quote" className="common__btn dark_bg_btn">
          Send Agreement
        </Link>
      </div>
    </div>
    <div className="close__menu">
      <img src={clossmenu} alt="" onClick={handleMenuToggle} />
    </div>
  </div>
  {/* =================== HEADER AREA START ===================== */}
  <header className="header__area " >
    <div className="container" style={{padding:"10px"}}>
      <div className="header__inner__blk">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} className='' style={{width:"136px", height:"71px",marginRight:"-37px"}} alt="" />
          </Link>
        </div>
        <div className="header__right__blk">
          <div className="main__menu">
            <nav>
              <ul>
                <li>
                  <Link  to="/">Home</Link>
                </li>
                <li>
                  <Link to="/general-liability-insurance">
                    Our Services  
                  </Link>
              
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
                </li>
                <li>
                <Link to="/aboutus">About Us</Link>
                </li>
                {/* <li>
                  <Link to="/signup">Sign up</Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="header__btn">
            {/* <Link to="/login" className="common__btn dark_bg_btn">
              Login
            </Link> */}
            <Link to="/quote" className="common__btn" style={{background:"#024",color:"#fff"}}>
            Send Agreement
            </Link>
          </div>
        </div>
        <div className="open__menu">
          <img className='menuit' src={menubar} alt=""  onClick={handleMenuToggle} />
        </div>
      </div>
    </div>
  </header>
  {/* =================== HEADER AREA END ===================== */}
        </>
    )
}
export default Navbar