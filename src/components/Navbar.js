import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import logo from '../img/logo_transparent.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            jgibbs.io
        </Link>
      </div>
      {/* <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div> */}
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/jongibbs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://instagram.com/the_jon_gibbs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={instagram} alt="Instagram" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://linkedin.com/in/gibbsjp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={linkedin} alt="LinkedIn" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
