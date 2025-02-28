import React from 'react'
import '../App.css'
import footerData from '../api/footerData.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />


  }



  return (
    <footer className='footer-section'>
      <div className="container grid grid-three-cols">
        {footerData.map(({ icon, title, details, id }) => {
          return <div className="footer-contact" key={id}>
            <div className="icon">
              {footerIcons[icon]}
            </div>
            <div className="footer-contact-text">
              <p>{title}</p>
              <p>{details}</p>
            </div>

          </div>
        })}
      </div>











      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://github.com/tanish4787" target="_blank">
                  Tanish Kaloiya
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/tanishkaloiya/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/tanish4787"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer
