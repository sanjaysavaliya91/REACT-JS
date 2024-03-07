import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminPatient() {
    return (
        <>
            <AdminHome />
            <div>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Patients</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <Link to = "/admin-add-patient" className="btn btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Patient</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-border table-striped custom-table datatable m-b-0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td> Jennifer Robinson</td>
                                                <td>35</td>
                                                <td>1545 Dorsey Ln NE, Leland, NC, 28451</td>
                                                <td>(207) 808 8863</td>
                                                <td><a href="https://medifab.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2b414e4545424d4e5959444942455844456b4e534a465b474e05484446">[email&nbsp;protected]</a></td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to = "/admin-edit-patient"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient"><i className="fas fa-trash m-r-5" /> Delete</a>
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
            </div>

        </>
    );
}