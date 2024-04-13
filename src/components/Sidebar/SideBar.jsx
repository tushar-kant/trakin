import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SideBar() {
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className='nav-item'>
                    <Link to="/home/dashboard" className='nav-link'>
                        <a href="/" className='nav-link'>
                            <i className='bi bi-grid'></i>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#reports-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-person'></i>
                        <span>Reports</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="reports-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/report" className='nav-link'>
                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Performance</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/report/performancerange" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Performance Range</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/report/conversion" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Conversion</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/report/conversionLog" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Conversion logs</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/report/clicklog" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Click logs</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#offers-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-archive'></i>
                        <span>Offers</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="offers-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/offer" className='nav-link'>
                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Create</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/offer/offermanage" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Manage</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/offer/offercategory" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Offer Category</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/offer/offerapplication" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Offer Application</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#affiliates-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-award'></i>
                        <span>Affiliates</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="affiliates-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/affiliate" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Add</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/affiliate/manage" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Manage</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/affiliate/postback" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Postback</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/affiliate/payment" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Payment</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#advs-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-backpack4'></i>
                        <span>Advertiser</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="advs-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/adv" className='nav-link'>
                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Add</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/adv/manage" className='nav-link'>
                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Manage</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#emps-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-binoculars'></i>
                        <span>Employees</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="emps-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/emp" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Add</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/emp/manage" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Manage</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <Link to="/home/mail" className='nav-link'>

                        <a href="/" className='nav-link'>
                            <i className='bi bi-gear'></i>
                            <span>Mail Room</span>
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link collapsed'
                        data-bs-target="#preferences-nav"
                        data-bs-toggle='collapse'>
                        <i className='bi bi-cookie'></i>
                        <span>Preference</span>
                        <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul
                        id="preferences-nav"
                        className='nav-content collapse'
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/home/preference" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Company</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/preference/email" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Email</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/preference/paymentmethod" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Payment methods</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home/preference/signupquestion" className='nav-link'>

                                <a href="/" className='nav-link'>
                                    <i className='bi bi-circle'></i>
                                    <span>Signup question</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>

                        <a href="/" className='nav-link'>
                            <i className='bi bi-gear'></i>
                            <span>Logout</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar