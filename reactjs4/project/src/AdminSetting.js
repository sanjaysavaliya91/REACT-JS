import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminSetting() {
    return (
        <>
            <div className="main-wrapper">
                <div className="header">
                    <div className="header-left">
                        <a href="index.html" className="logo">
                            <img src="assets/img/Logo_Hospital.png" width={35} height={35} alt />
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
                                <span className="user-img"><img className="rounded-circle" src="assets/img/user.jpg" width={40} alt="Admin" />
                                    <span className="status online" /></span>
                                <span>Admin</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="profile.html">My Profile</a>
                                <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                                <a className="dropdown-item" href="settings.html">Settings</a>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown mobile-user-menu float-right">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="profile.html">My Profile</a>
                            <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                            <a className="dropdown-item" href="settings.html">Settings</a>
                            <a className="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div className="sidebar-menu">
                            <ul>
                                <li>
                                    <a href="index.html"><i className="fas fa-home back-icon" /> Back to Home</a>
                                </li>
                                <li className="menu-title">Settings</li>
                                <li className="active">
                                    <a href="settings.html">Company Settings</a>
                                </li>
                                <li>
                                    <a href="localization.html">Localization</a>
                                </li>
                                <li>
                                    <a href="theme-settings.html">Theme Settings</a>
                                </li>
                                <li>
                                    <a href="roles-permissions.html">Roles &amp; Permissions</a>
                                </li>
                                <li>
                                    <a href="email-settings.html">Email Settings</a>
                                </li>
                                <li>
                                    <a href="invoice-settings.html">Invoice Settings</a>
                                </li>
                                <li>
                                    <a href="salary-settings.html">Salary Settings</a>
                                </li>
                                <li>
                                    <a href="notifications-settings.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="change-password.html">Change Password</a>
                                </li>
                                <li>
                                    <a href="leave-type.html">Leave Type</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <form>
                                    <h3 className="page-title">Company Settings</h3>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Company Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" defaultValue="Medifab" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Contact Person</label>
                                                <input className="form-control " defaultValue="Daniel Porter" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input className="form-control " defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control select">
                                                    <option>USA</option>
                                                    <option>United Kingdom</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input className="form-control" defaultValue="Sherman Oaks" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>State/Province</label>
                                                <select className="form-control select">
                                                    <option>California</option>
                                                    <option>Alaska</option>
                                                    <option>Alabama</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input className="form-control" defaultValue={91403} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input className="form-control" defaultValue="danielporter@example.com" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input className="form-control" defaultValue="818-978-7102" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Mobile Number</label>
                                                <input className="form-control" defaultValue="818-635-5579" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Fax</label>
                                                <input className="form-control" defaultValue="818-978-7102" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Website Url</label>
                                                <input className="form-control" defaultValue="https://www.example.com" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center m-t-20">
                                            <button type="button" className="btn btn-primary submit-btn">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="msg-sidebar notifications msg-noti">
                            <div className="topnav-dropdown-header">
                                <span>Messages</span>
                            </div>
                            <div className="drop-scroll msg-list-scroll">
                                <ul className="list-box">
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">R</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Richard Miles </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item new-message">
                                                <div className="list-left">
                                                    <span className="avatar">J</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">John Doe</span>
                                                    <span className="message-time">1 Aug</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">T</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Tarah Shropshire </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">M</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Mike Litorus</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">C</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Catherine Manseau </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">D</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Domenic Houston </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">B</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Buster Wigton </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">R</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Rolland Webber </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">C</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Claire Mapes </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">M</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Melita Faucher</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">J</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Jeffery Lalor</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">L</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Loren Gatlin</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="chat.html">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">T</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Tarah Shropshire</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix" />
                                                    <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="chat.html">See all messages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}