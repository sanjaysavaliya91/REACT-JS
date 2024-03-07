import { Link } from "react-router-dom";
import React from "react";
import AdminDashbord from "./AdminDashbord";
export default function AdminHome() {
    return (
        <>
            <div className="main-wrapper">
                <div className="header">
                    <div className="header-left">
                        <a href="index.html" className="logo">
                            <img src="assets/img/Logo_Hospital.png" width={35} height={35} alt /><span className="text-danger fw-bolder">Hospital</span>
                        </a>
                    </div>
                    <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fas fa-bars" /></a>
                    <ul className="nav user-menu float-right">
                        <li className="nav-item dropdown d-none d-sm-block">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="far fa-bell" /> <span className="badge badge-pill bg-danger float-right">3</span></a>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span>Notifications</span>
                                </div>
                                <div className="drop-scroll">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">
                                                        <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid" />
                                                    </span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">V</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                        <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">L</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                        <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">G</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                                        <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="activities.html">
                                                <div className="media">
                                                    <span className="avatar">V</span>
                                                    <div className="media-body">
                                                        <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                                        <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <a href="activities.html">View all Notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown d-none d-sm-block">
                            <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="far fa-comment" /> <span className="badge badge-pill bg-danger float-right">8</span></a>
                        </li>
                        <li className="nav-item dropdown has-arrow">
                            <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                                <span className="user-img">
                                    <img className="rounded-circle" src="assets/img/user.jpg" width={24} alt="Admin" />
                                    <span className="status online" />
                                </span>
                                <span>Admin</span>
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/admin-profile">My Profile</Link>
                                <Link className="dropdown-item" to="/admin-edit-profile">Edit Profile</Link>
                                <Link className="dropdown-item" to = "/admin-setting">Settings</Link>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown mobile-user-menu float-right">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    </div>
                </div>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                <li className="menu-title fw-bolder">Main</li>
                                <li className="active">
                                    <Link to="/admin-dashbord" ><i className="fas fa-tachometer-alt" /> Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/admin-doctor"><i className="fas fa-user-md" /> Doctors</Link>
                                </li>
                                <li>
                                    <Link to="/admin-patient"><i className="fas fa-wheelchair" /> Patients</Link>
                                </li>
                                <li>
                                    <Link to="/admin-appointment"><i className="far fa-calendar-alt" /> Appointments</Link>
                                </li>
                                <li>
                                    <Link to="/admin-schedule"><i className="far fa-calendar-check" /> Doctor Schedule</Link>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-user" /> <span> Employees </span> <span className="menu-arrow" /></a>
                                    <ul >
                                        <li><Link to="/admin-employee">Employees List</Link></li>
                                        <li><Link to="/admin-attendance">Attendance</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="far fa-money-bill-alt" /> <span> Accounts </span> <span className="menu-arrow" /></a>
                                    <ul >
                                        <li><Link to="/admin-payment">Payments</Link></li>
                                        <li><Link to="/admin-Expense">Expenses</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#"><i className="fas fa-envelope" /> <span> Email</span> <span className="menu-arrow" /></a>
                                    <ul>
                                        <li><a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new">Compose Mail</a></li>
                                        <li><a href="https://mail.google.com/mail/u/0/?pli=1#inbox">Inbox</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/admin-setting"><i className="fas fa-cog" /> Settings</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}