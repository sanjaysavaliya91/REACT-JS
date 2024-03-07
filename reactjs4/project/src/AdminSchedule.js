import AdminHome from "./AdminHome";
import { Link } from "react-router-dom";

export default function AdminSchedule() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Schedule</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <Link to="/admin-add-schedule" className="btn btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Schedule</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-border table-striped custom-table m-b-0">
                                    <thead>
                                        <tr>
                                            <th>Doctor Name</th>
                                            <th>Department</th>
                                            <th>Available Days</th>
                                            <th>Available Time</th>
                                            <th>Status</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img width={28} height={28} src="assets/img/user.jpg" className="rounded-circle m-r-5" /> Henry Daniels</td>
                                            <td>Cardiology</td>
                                            <td>Sunday, Monday, Tuesday</td>
                                            <td>10:00 AM - 7:00 PM</td>
                                            <td><span className="custom-badge status-green">Active</span></td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="/admin-edit-schedule"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule"><i className="fas fa-trash m-r-5" /> Delete</a>
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