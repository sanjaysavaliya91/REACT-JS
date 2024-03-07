import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminAddEmployee() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h4 className="page-title fw-bolder">Add Employee</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>First Name <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Username <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Email <span className="text-danger">*</span></label>
                                            <input className="form-control" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" type="password" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input className="form-control" type="password" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Employee ID <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Joining Date <span className="text-danger">*</span></label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Phone </label>
                                            <input className="form-control" type="number" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <select className="select form-control">
                                                <option>Admin</option>
                                                <option>Doctor</option>
                                                <option>Nurse</option>
                                                <option>Laboratorist</option>
                                                <option>Pharmacist</option>
                                                <option>Accountant</option>
                                                <option>Receptionist</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="display-block">Status</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="employee_active" defaultValue="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="product_active">
                                            Active
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="employee_inactive" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="employee_inactive">
                                            Inactive
                                        </label>
                                    </div>
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}