import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import Modal from '../Modal';
import ModeSwitch from '../ModeSwitch';
import Section from '../Section';
import './header.scss'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate=useNavigate();
  const [mobileToggle, setMobileToggle] = useState(false)
  const navigationMethod=()=>{
    setMobileToggle(false);
    navigate('/Privacy')
  }
  return (
    <>
      <Section tag='header' className="cs-site_header cs-style1 cs-sticky-header cs-primary_color">
        <Section className="cs-main_header">
          <Section className="container">
            <Section className="cs-main_header_in">
              <Section className="cs-main_header_left">
                <Link to='/' className="cs-site_branding cs-accent_color">
                  <img src="/nftfish/images/logo.svg" alt="Logo" className="cs-hide_dark" />
                  <img src="/nftfish/images/logo_white.svg" alt="Logo" className="cs-hide_white" />
                </Link>
              </Section>
              <Section className="cs-main_header_center">
                <Section className="cs-nav">
                  <ul className="cs-nav_list" style={{display:`${mobileToggle?'block':'none'}`}}>
                    <li><ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>navigate('/')}>Home</ScrollLink>
                    </li>
                    <li><ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>navigate('/dashboard')}>Dashboard</ScrollLink>
                    </li>
                    <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>About</ScrollLink></li>
                  {/*   <li><ScrollLink to="roadmap" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Roadmap</ScrollLink></li>
                    <li><ScrollLink to="team" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Team</ScrollLink></li>
                    <li><ScrollLink to="faq" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>FAQ</ScrollLink></li> */}
                    <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Contact</ScrollLink></li>
                    <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={navigationMethod}>Privacy & Terms</ScrollLink></li>
                  </ul>
                  <span className={mobileToggle?"cs-munu_toggle cs-toggle_active":"cs-munu_toggle"} onClick={()=>setMobileToggle(!mobileToggle)}><span></span></span>
                </Section>
              </Section>
              <Section className="cs-main_header_right">
                <Section className="cs-toolbox">
                  <ModeSwitch />
                  <Modal modalType='connect' btnText='Connect' btnIcon />
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}
