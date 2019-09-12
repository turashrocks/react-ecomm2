import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion, Button } from 'react-bootstrap'

class NavItems extends Component {
    render() {
        return (
            <>
                 <ul className="nav flex-column">
                    <Accordion>
                        <Link className="nav-item" to="/building-materials" className="nav-link">
                            <li  className="v-panel">
                                <Accordion.Toggle as={Button} eventKey="0">
                                <span className="vt-panel-heading">Building Materials</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <ul className="panel-collapse">
                                        <li><span>Building 1</span></li>
                                        <li><span>Building 2</span></li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/electrical-electronics" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="1">
                                <span className="vt-panel-heading">Electrical</span>
                                <div className="arrow-right">
                                    <i className="fa fa-angle-right custom" ></i>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                    <ul className="panel-collapse">
                                        <li><span>Electronics 1</span></li>
                                        <li><span>Electronics 2</span></li>
                                        <li><span>Electronics 3</span></li>
                                        <li><span>Electronics 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="2">
                                <span className="vt-panel-heading">Interior Materials</span>
                                <div className="arrow-right">
                                    <i className="fa fa-angle-right custom" ></i>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                    <ul className="panel-collapse">
                                        <li><span>Interior 1</span></li>
                                        <li><span>Interior 2</span></li>
                                        <li><span>Interior 3</span></li>
                                        <li><span>Interior 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="3">
                                <span className="vt-panel-heading"> Furniture Fittings</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                    <ul className="panel-collapse">
                                        <li><span>Furniture 1</span></li>
                                        <li><span>Furniture 2</span></li>
                                        <li><span>Furniture 3</span></li>
                                        <li><span>Furniture 4</span></li>
                                        <li><span>Furniture 5</span></li>
                                        <li><span>Furniture 6</span></li>
                                        <li><span>Furniture 7</span></li>
                                        <li><span>Furniture 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="4">
                                <span className="vt-panel-heading">Sanitary Tiles</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                    <ul className="panel-collapse">
                                        <li><span>Sanitary 1</span></li>
                                        <li><span>Sanitary 2</span></li>
                                        <li><span>Sanitary 3</span></li>
                                        <li><span>Sanitary 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="5">
                                <span className="vt-panel-heading">Office Sta</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                    <ul className="panel-collapse">
                                        <li><span>Office 1</span></li>
                                        <li><span>Office 2</span></li>
                                        <li><span>Office 3</span></li>
                                        <li><span>Office 4</span></li>
                                        <li><span>Office 5</span></li>
                                        <li><span>Office 6</span></li>
                                        <li><span>Office 7</span></li>
                                        <li><span>Office 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="6">
                                <span className="vt-panel-heading">Paint Hardwa</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                    <ul className="panel-collapse">
                                        <li><span>Paint 1</span></li>
                                        <li><span>Paint 2</span></li>
                                        <li><span>Paint 3</span></li>
                                        <li><span>Paint 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        {/*  */}
                        
                        <Link className="nav-item" to="/building-materials" className="nav-link">
                            <li  className="v-panel">
                                <Accordion.Toggle as={Button} eventKey="7">
                                <span className="vt-panel-heading">Construction Equi</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                    <ul className="panel-collapse">
                                        <li><span>Construction 1</span></li>
                                        <li><span>Construction 2</span></li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/electrical-electronics" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="8">
                                <span className="vt-panel-heading">Home Appliance</span>
                                <div className="arrow-right">
                                    <i className="fa fa-angle-right custom" ></i>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="8">
                                    <ul className="panel-collapse">
                                        <li><span>Electronics 1</span></li>
                                        <li><span>Electronics 2</span></li>
                                        <li><span>Electronics 3</span></li>
                                        <li><span>Electronics 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="9">
                                <span className="vt-panel-heading">Construction Chemical</span>
                                <div className="arrow-right">
                                    <i className="fa fa-angle-right custom" ></i>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="9">
                                    <ul className="panel-collapse">
                                        <li><span>Interior 1</span></li>
                                        <li><span>Interior 2</span></li>
                                        <li><span>Interior 3</span></li>
                                        <li><span>Interior 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="10">
                                <span className="vt-panel-heading">Gardening</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="10">
                                    <ul className="panel-collapse">
                                        <li><span>Furniture 1</span></li>
                                        <li><span>Furniture 2</span></li>
                                        <li><span>Furniture 3</span></li>
                                        <li><span>Furniture 4</span></li>
                                        <li><span>Furniture 5</span></li>
                                        <li><span>Furniture 6</span></li>
                                        <li><span>Furniture 7</span></li>
                                        <li><span>Furniture 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="11">
                                <span className="vt-panel-heading">Glass Ware</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="11">
                                    <ul className="panel-collapse">
                                        <li><span>Sanitary 1</span></li>
                                        <li><span>Sanitary 2</span></li>
                                        <li><span>Sanitary 3</span></li>
                                        <li><span>Sanitary 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="12">
                                <span className="vt-panel-heading">Industrial Chemical</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="12">
                                    <ul className="panel-collapse">
                                        <li><span>Office 1</span></li>
                                        <li><span>Office 2</span></li>
                                        <li><span>Office 3</span></li>
                                        <li><span>Office 4</span></li>
                                        <li><span>Office 5</span></li>
                                        <li><span>Office 6</span></li>
                                        <li><span>Office 7</span></li>
                                        <li><span>Office 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="13">
                                <span className="vt-panel-heading">Medical Equipment</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="13">
                                    <ul className="panel-collapse">
                                        <li><span>Paint 1</span></li>
                                        <li><span>Paint 2</span></li>
                                        <li><span>Paint 3</span></li>
                                        <li><span>Paint 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        
                        {/*  */}
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="14">
                                <span className="vt-panel-heading">MS SS Materials</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="14">
                                    <ul className="panel-collapse">
                                        <li><span>Furniture 1</span></li>
                                        <li><span>Furniture 2</span></li>
                                        <li><span>Furniture 3</span></li>
                                        <li><span>Furniture 4</span></li>
                                        <li><span>Furniture 5</span></li>
                                        <li><span>Furniture 6</span></li>
                                        <li><span>Furniture 7</span></li>
                                        <li><span>Furniture 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="15">
                                <span className="vt-panel-heading">Thai Aluminium</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                    <ul className="panel-collapse">
                                        <li><span>Sanitary 1</span></li>
                                        <li><span>Sanitary 2</span></li>
                                        <li><span>Sanitary 3</span></li>
                                        <li><span>Sanitary 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="16">
                                <span className="vt-panel-heading">IT Products</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="16">
                                    <ul className="panel-collapse">
                                        <li><span>Office 1</span></li>
                                        <li><span>Office 2</span></li>
                                        <li><span>Office 3</span></li>
                                        <li><span>Office 4</span></li>
                                        <li><span>Office 5</span></li>
                                        <li><span>Office 6</span></li>
                                        <li><span>Office 7</span></li>
                                        <li><span>Office 8</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                        <li  className="v-panel">
                            <Accordion.Toggle as={Button} eventKey="17">
                                <span className="vt-panel-heading">Cars Bikes Corner</span>
                                    <div className="arrow-right">
                                        <i className="fa fa-angle-right custom" ></i>
                                    </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="17">
                                    <ul className="panel-collapse">
                                        <li><span>Paint 1</span></li>
                                        <li><span>Paint 2</span></li>
                                        <li><span>Paint 3</span></li>
                                        <li><span>Paint 4</span></li>
                                    </ul>
                            </Accordion.Collapse>
                            </li>
                        </Link>

                    </Accordion>
                </ul>

               
            </>
        )
    }
}

export default  NavItems