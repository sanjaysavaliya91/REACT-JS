import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminProfile() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-7 col-4">
                            <h4 className="page-title fw-bolder">My Profile</h4>
                        </div>
                        <div className="col-sm-5 col-8 text-right m-b-30">
                            <Link to="/admin-edit-profile" className="btn btn-primary btn-rounded"><i className="fas fa-plus" /> Edit Profile</Link>
                        </div>
                    </div>
                    <div className="card-box profile-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-view">
                                    <div className="profile-img-wrap">
                                        <div className="profile-img">
                                            <a href="#"><img className="avatar" src="assets/img/doctor-03.jpg" alt /></a>
                                        </div>
                                    </div>
                                    <div className="profile-basic">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile-info-left">
                                                    <h3 className="user-name m-t-0 m-b-0">Sanjay Savaliya</h3>
                                                    <small className="text-muted">Gynecologist</small>
                                                    <div className="staff-id">Employee ID : DR-0001</div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="personal-info">
                                                    <li>
                                                        <span className="title">Phone:</span>
                                                        <span className="text"><a href="#">770-889-6484</a></span>
                                                    </li>
                                                    <li>
                                                        <span className="title">Email:</span>
                                                        <span className="text"><a href="#"><span className="__cf_email__" data-cfemail="5d3e2f342e2934333c3a2f322b382e1d38253c302d3138733e3230">[email&nbsp;protected]</span></a></span>
                                                    </li>
                                                    <li>
                                                        <span className="title">Birthday:</span>
                                                        <span className="text">3rd March</span>
                                                    </li>
                                                    <li>
                                                        <span className="title">Address:</span>
                                                        <span className="text">714 Burwell Heights Road, Bridge City, TX, 77611</span>
                                                    </li>
                                                    <li>
                                                        <span className="title">Gender:</span>
                                                        <span className="text">Female</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-tabs">
                        <ul className="nav nav-tabs nav-tabs-bottom">
                            <li className="nav-item"><a className="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
                            <li className="nav-item"><a className="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane show active" id="about-cont">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card-box">
                                            <h3 className="card-title">Education Informations</h3>
                                            <div className="experience-box">
                                                <ul className="experience-list">
                                                    <li>
                                                        <div className="experience-user">
                                                            <div className="before-circle" />
                                                        </div>
                                                        <div className="experience-content">
                                                            <div className="timeline-content">
                                                                <a href="#/" className="name">International College of Medical Science (UG)</a>
                                                                <div>MBBS</div>
                                                                <span className="time">2001 - 2003</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="experience-user">
                                                            <div className="before-circle" />
                                                        </div>
                                                        <div className="experience-content">
                                                            <div className="timeline-content">
                                                                <a href="#/" className="name">International College of Medical Science (PG)</a>
                                                                <div>MD - Obstetrics &amp; Gynaecology</div>
                                                                <span className="time">1997 - 2001</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-box m-b-0">
                                            <h3 className="card-title">Experience</h3>
                                            <div className="experience-box">
                                                <ul className="experience-list">
                                                    <li>
                                                        <div className="experience-user">
                                                            <div className="before-circle" />
                                                        </div>
                                                        <div className="experience-content">
                                                            <div className="timeline-content">
                                                                <a href="#/" className="name">Consultant Gynecologist</a>
                                                                <span className="time">Jan 2014 - Present (4 years 8 months)</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="experience-user">
                                                            <div className="before-circle" />
                                                        </div>
                                                        <div className="experience-content">
                                                            <div className="timeline-content">
                                                                <a href="#/" className="name">Consultant Gynecologist</a>
                                                                <span className="time">Jan 2009 - Present (6 years 1 month)</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="experience-user">
                                                            <div className="before-circle" />
                                                        </div>
                                                        <div className="experience-content">
                                                            <div className="timeline-content">
                                                                <a href="#/" className="name">Consultant Gynecologist</a>
                                                                <span className="time">Jan 2004 - Present (5 years 2 months)</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="bottom-tab2">
                                Tab content 2
                            </div>
                            <div className="tab-pane" id="bottom-tab3">
                                Tab content 3
                            </div>
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

        </>
    );
}