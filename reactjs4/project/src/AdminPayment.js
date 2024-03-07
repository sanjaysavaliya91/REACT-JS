import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminPayment() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title fw-bolder ">Payments</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table datatable m-b-0">
                                    <thead>
                                        <tr>
                                            <th>Invoice ID</th>
                                            <th>Patient</th>
                                            <th>Payment Type</th>
                                            <th>Paid Date</th>
                                            <th>Paid Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="invoice-view.html">#INV-0001</a></td>
                                            <td>
                                                <h2><a href="#">Charles Ortega</a></h2>
                                            </td>
                                            <td>Paypal</td>
                                            <td>8 Aug 2017</td>
                                            <td>$500</td>
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