import AdminHome from "./AdminHome";
import { Link } from "react-router-dom";

export default function AdminAppointment() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Appointments</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <Link to="/admin-add-appointment" className="btn btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Appointment</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped dt-responsive nowrap" cellSpacing={0} width="100%">
                                    <thead>
                                        <tr>
                                            <th>Appointment ID</th>
                                            <th>Patient Name</th>
                                            <th>Age</th>
                                            <th>Doctor Name</th>
                                            <th>Department</th>
                                            <th>Appointment Date</th>
                                            <th>Appointment Time</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>APT0001</td>
                                            <td>Denise Stevens</td>
                                            <td>35</td>
                                            <td>Henry Daniels</td>
                                            <td>Cardiology</td>
                                            <td>30 Dec 2018</td>
                                            <td>10:00am - 11:00am</td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="/admin-edit-appointment"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appointment"><i className="fas fa-trash m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}