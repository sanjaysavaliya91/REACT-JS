import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function AdminEditExpense() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h4 className="page-title fw-bolder">Edit Expense</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Item Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Purchase From</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Purchase Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Purchased By </label>
                                            <input className="form-control" type="text">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input placeholder="Rs.50" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Paid By</label>
                                            <select className="select form-control">
                                                <option>Cash</option>
                                                <option>Cheque</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="select form-control">
                                                <option>Pending</option>
                                                <option>Approved</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Attachments</label>
                                            <input className="form-control" type="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn btn-rounded">SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}