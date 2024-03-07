import AdminHome from "./AdminHome";

export default function AdminAddSchedule() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h4 className="page-title fw-bolder">Add Schedule</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Doctor Name</label>
                                            <select className="select form-control">
                                                <option>Select</option>
                                                <option>Doctor Name 1</option>
                                                <option>Doctor Name 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Available Days</label>
                                            <select className="select form-control">
                                                <option>Select Days</option>
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Start Time</label>
                                            <div className="time-icon">
                                                <input type="time" className="form-control" id="datetimepicker3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>End Time</label>
                                            <div className="time-icon">
                                                <input type="time" className="form-control" id="datetimepicker4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea cols={30} rows={4} className="form-control" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label className="display-block">Schedule Status</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="product_active">
                                            Active
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue="option2" />
                                        <label className="form-check-label" htmlFor="product_inactive">
                                            Inactive
                                        </label>
                                    </div>
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Schedule</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}