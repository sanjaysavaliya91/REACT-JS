import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-2 ">
            <div className="sidebar border" id="sidebar">
              <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                  <ul>
                    <li className="menu-title fw-bold">Main</li>
                    <li className="active">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="doctors.html">Doctors</a>
                    </li>
                    <li>
                      <a href="patients.html">Patients</a>
                    </li>
                    <li>
                      <a href="appointments.html"> Appointments</a>
                    </li>
                    <li>
                      <a href="schedule.html"> Doctor Schedule</a>
                    </li>
                    <li>
                      <a href="departments.html"> Departments</a>
                    </li>
                    <li className=" dropdown">
                      <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Employees
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Employees List</a></li>
                        <li><a className="dropdown-item" href="#">Leaves </a></li>
                        <li><a className="dropdown-item" href="#">Holidays</a></li>
                        <li><a className="dropdown-item" href="#">Attendance</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Accounts
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Invoices</a></li>
                        <li><a className="dropdown-item" href="#">Payments</a></li>
                        <li><a className="dropdown-item" href="#">Expenses</a></li>
                        <li><a className="dropdown-item" href="#">Taxes</a></li>
                        <li><a className="dropdown-item" href="#">Provident Fund</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-book" /> <span> Payroll </span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"> Employee Salary </a></li>
                        <li><a className="dropdown-item" href="#"> Payslip </a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="chat.html"> Chat <span className="badge badge-pill bg-primary float-right">5</span></a>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"><span> Calls</span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Voice Call</a></li>
                        <li><a className="dropdown-item" href="#">Video Call</a></li>
                        <li><a className="dropdown-item" href="#">Incoming Call</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#">Email</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdoen-item" href="#">Compose Mail</a></li>
                        <li><a className="dropdoen-item" href="#">Inbox</a></li>
                        <li><a className="dropdoen-item" href="#">Mail View</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#"><span> Blog</span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                        <li><a className="dropdown-item" href="blog-details.html">Blog View</a></li>
                        <li><a className="dropdown-item" href="add-blog.html">Add Blog</a></li>
                        <li><a className="dropdown-item" href="edit-blog.html">Edit Blog</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="assets.html"><i className="fas fa-cube" /> Assets</a>
                    </li>
                    <li>
                      <a href="activities.html"><i className="far fa-bell" /> Activities</a>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#"><span> Reports </span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="expense-reports.html"> Expense Report </a></li>
                        <li><a className="dropdown-item" href="invoice-reports.html"> Invoice Report </a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="settings.html"><i className="fas fa-cog" /> Settings</a>
                    </li>
                    <li className="menu-title fw-bold">UI Elements</li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#"><span> Components</span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="uikit.html">UI Kit</a></li>
                        <li><a className="dropdown-item" href="typography.html">Typography</a></li>
                        <li><a className="dropdown-item" href="tabs.html">Tabs</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="widgets.html">Widgets</a>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#"><i className="far fa-edit" /> <span> Forms</span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu" >
                        <li><a className="dropdown-item" href="#">Basic Inputs</a></li>
                        <li><a className="dropdown-item" href="#">Input Groups</a></li>
                        <li><a className="dropdown-item" href="#">Horizontal Form</a></li>
                        <li><a className="dropdown-item" href="#">Vertical Form</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#"><span> Tables</span> <span className="menu-arrow" /></a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="tables-basic.html">Basic Tables</a></li>
                        <li><a className="dropdown-item" href="tables-datatables.html">Data Table</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="calendar.html"><i className="far fa-calendar-alt" /> Calendar</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>

    </>
  );
}