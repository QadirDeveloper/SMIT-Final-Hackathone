import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>

<header id="header" className="header">
          {/* Navigation */}
          <div className="navigation">
            <div className="container">
              <nav className="nav__center">
                <div className="nav__header">
                  <div className="nav__logo">
                    <h1>Health<span>Q</span></h1>
                  </div>
                  <div className="nav__hamburger">
                    <span>
                      <svg>
                        <use xlinkHref="" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="nav__menu">
                  <div className="menu__top">
                    <h1 className="nav__category">SHOPI<span>Q</span></h1>
                    <div className="close__toggle">
                      <svg>
                        <use xlinkHref="./images/sprite.svg#icon-cross" />
                      </svg>
                    </div>
                  </div>
                  {/* <ul className="nav__list">
                    <li className="nav__item">
                      <a href="#header" className="nav__link scroll-link">Home</a>
                    </li>
                    <li className="nav__item">
                      <Link href="/Services" className="nav__link scroll-link">Services</Link>
                    </li>
                    <li className="nav__item">
                      <a href="#blog" className="nav__link scroll-link">Blog</a>
                    </li>
                    <li className="nav__item">
                      <a href="#newsletter" className="nav__link scroll-link">Subscribe</a>
                    </li>
                    <li className="nav__item">
                      <a href="/Appointment" className="nav__link scroll-link">Appointment</a>
                    </li>
                    <li className="nav__item">
                      <Link href="/Login" className="nav__link">Login</Link>
                    </li>
                    <li className="nav__item">
                      <Link href="/Login" className="nav__link">Register</Link>
                    </li>
                  </ul> */}
                  <ul className="nav__icons">
                    <a href="#" className="icon__item">
                      <svg>
                        <use xlinkHref="./images/sprite.svg#icon-search" />
                      </svg>
                    </a>
                    <a href="#" className="icon__item">
                      <svg>
                        <use xlinkHref="./images/sprite.svg#icon-user" />
                      </svg>
                    </a>
                    <a href="#" className="icon__item">
                      <svg>
                        <use xlinkHref="./images/sprite.svg#icon-shopping-basket" />
                      </svg>
                      <span>2</span>
                    </a>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* Hero */}
          <div className="hero">
            <div className="hero__content container">
              <h1>
                <span>Get <span className="color">50%</span> off your first medicines
                  with</span>
                <span>Health<span className="color">Q</span> online shop</span>
              </h1>
              <a href="#" className="btn btn-hero">shop now</a>
            </div>
            <a href="#new_arrival" className="goto_next scroll-link">
              <span>
                <svg>
                  <use xlinkHref="./images/sprite.svg#icon-angle-down" />
                </svg>
              </span>
            </a>
          </div>
        </header>


    </div>
  )
}
