import AdminHome from "./AdminHome"
export default function AdminDashbord() {
    return (
        <>
            <AdminHome />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="dash-widget">
                                <span className="dash-widget-bg1"><i className="fas fa-stethoscope" aria-hidden="true" /></span>
                                <div className="dash-widget-info text-right">
                                    <h3>$998</h3>
                                    <span className="widget-title1">Doctors <i className="fas fa-check" aria-hidden="true" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 ">
                            <div className="dash-widget">
                                <span className="dash-widget-bg2"><i className="fas fa-user" /></span>
                                <div className="dash-widget-info text-right">
                                    <h3>1072</h3>
                                    <span className="widget-title2">Patients <i className="fas fa-check" aria-hidden="true" /></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="dash-widget">
                                <span className="dash-widget-bg3"><i className="fas fa-user-md" aria-hidden="true" /></span>
                                <div className="dash-widget-info text-right">
                                    <h3>72</h3>
                                    <span className="widget-title3">Attend <i className="fas fa-check" aria-hidden="true" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="dash-widget">
                                <span className="dash-widget-bg4"><i className="fas fa-heartbeat" aria-hidden="true" /></span>
                                <div className="dash-widget-info text-right">
                                    <h3>618</h3>
                                    <span className="widget-title4">Pending <i className="fas fa-check" aria-hidden="true" /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}