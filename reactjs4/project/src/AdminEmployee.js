import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminEmployee() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Employee</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <Link to="/admin-add-employee" className="btn btn-primary float-right btn-rounded"><i className="fas fa-plus" /> Add Employee</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered dt-responsive nowrap" cellSpacing={0} width="100%">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th style={{ "width": "30%" }}>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Join Date</th>
                                            <th>Role</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>NS-0001</td>
                                            <td>
                                                <h2>Albina Simonis</h2>
                                            </td>
                                            <td style={{ "width": "30%" }}><a href="https://medifab.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c9a8a5aba0a7a8baa0a4a6a7a0ba89acb1a8a4b9a5ace7aaa6a4">[email&nbsp;protected]</a></td>
                                            <td>828-634-2744</td>
                                            <td>7 May 2015</td>
                                            <td>
                                                <span className="custom-badge status-green">Nurse</span>
                                            </td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="/admin-edit-employee"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fas fa-trash m-r-5" /> Delete</a>
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