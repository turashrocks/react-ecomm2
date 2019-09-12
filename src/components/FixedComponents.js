import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { TimelineLite } from 'gsap/all'
import CollapsibleNav from './CollapsibleNav'
import { Container , Accordion, Card, Button} from 'react-bootstrap'
import logo from '../svg/logo.svg'
import styled from 'styled-components'
import NavItems from './NavItems'

var diePadder = {
    paddingTop: '0px',
    paddingLeft: '2rem',
    paddingRight: '0px',
    position:'relative'
}

const FixedComponents = function () {
    const [toggle, setToggle] = useState(false);
    const [tl] = useState(new TimelineLite({paused: true}));

    let tweenTarget = null;

    const toggleTimeline = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        tl
        .to(tweenTarget, 0.35, {x: -300})
        .reverse();
    }, []);

    useEffect(() => {
        tl.reversed(!toggle);
    }, [toggle]);
        return (
            <>
               <div className="high-line">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2 col-md-2 col-lg-2 high-blank">
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Call Us: +880 1717 177777</span>
                                </button>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 high-line-content">
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Avail Discount</span>
                                </button>
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Customer Care</span>
                                </button>
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Login</span>
                                </button>
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">SignUp</span>
                                </button>
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Bangla</span>
                                </button>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 high-blank">
                                <button type="button" className="btn btn-primary">
                                    <span class="vt-high">Email: info@vt-dev.com</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar fixed-top flex-md-nowrap p-0">
                    
                    <div className="bar-brand col-lg-2 col-md-2" style={diePadder}>
                        <Link to="/" className="navbar-brand">
                            <Logo src={logo} alt="logo"/>
                        </Link>
                        <ToggleSidenav>
                            <div className="button" onClick={toggleTimeline}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </ToggleSidenav>
                    </div>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                    {/* <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul> */}
                </nav>
                <nav className="col-md-2 d-none d-md-block sidebar">
                <div 
                    className="sidebar-sticky"
                    ref={e => tweenTarget = e}
                >
                <NavItems/>
                {/* Hot offers commented out  */}
                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-2 mb- text-muted">
                  <span>Hot Offers</span>
                  <a className="d-flex align-items-center text-muted" href="#">
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Monthly Discount
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Discount with Bkash
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Avail Coupon Card
                    </a>
                  </li>
                </ul> */}
              </div>
            </nav>
        </>
        )

}

export default FixedComponents

const Logo = styled.img`
    width: 85%;
    height: auto;
    padding-top: 0rem;
    position: relative;
    float: left;
    z-index: 1;
`

const ToggleSidenav = styled.div`
    width: 10%;
    float: right;
    height: 100%;
    position: relative;
    font-size: 1.2rem;
    right: 0.85rem;
    cursor: pointer;
    color: #aaaaaa;
    padding-top: 0.5rem;
`

