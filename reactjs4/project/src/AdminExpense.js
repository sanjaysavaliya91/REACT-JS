import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminExpense() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-8 col-5">
                            <h4 className="page-title fw-bolder">Expenses</h4>
                        </div>
                        <div className="col-sm-4 col-7 text-right m-b-30">
                            <Link to="/admin-add-expense" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Expense</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table m-b-0 datatable">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Item</th>
                                            <th>Purchase From</th>
                                            <th>Purchase Date</th>
                                            <th>Purchased By</th>
                                            <th>Amount</th>
                                            <th>Paid By</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <strong>Stretcher</strong>
                                            </td>
                                            <td>Hospital Equipment Inc</td>
                                            <td>17 Aug 2018</td>
                                            <td>Loren Gatlin</td>
                                            <td>$8048</td>
                                            <td>Cash</td>
                                            <td className="text-center">
                                                <div className="dropdown action-label">
                                                    <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                        Pending
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Pending</a>
                                                        <a className="dropdown-item" href="#">Approved</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="edit-expense.html"><i className="fas fa-pencil-alt m-r-5" /> Edit</a>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fas fa-trash m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <strong>Anaesthetic machine</strong>
                                            </td>
                                            <td>Biomedical Equipment Inc</td>
                                            <td>22 Jun 2018</td>
                                            <td>Tarah Shropshire</td>
                                            <td>$62480</td>
                                            <td>Cheque</td>
                                            <td className="text-center">
                                                <div className="dropdown action-label">
                                                    <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                        Approved
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Pending</a>
                                                        <a className="dropdown-item" href="#">Approved</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="/admin-edit-expense"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fas fa-trash m-r-5" /> Delete</a>
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