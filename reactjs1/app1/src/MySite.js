import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import './MyStyle.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function MenuLink(props) {
    return (<li className="nav-item fs-5 text-white p-2">
        <a className="nav-link" href={props.Link}><i className={props.Symbol} /> {props.Text}</a>
    </li>)
}

function HowWeWork(props) {
    return (<div>
        <div className="row ">
            <div className="col-8 col-sm-6 col-md-6 col-12">
                <br />
                <h3>{props.heading1}</h3>
                <p>
                    {props.taxt1}
                </p>
            </div>
            <div className="col-4 col-sm-6 col-md-6 col-12 mb-4">
                <img src={props.image1} height="150px" alt="" />
            </div>
            <hr className="col-8" />
        </div>
        <div className="row ">
            <div className="col-4 col-sm-6 col-md-6 col-12 mb-4">
                <img src={props.image2} height="150px" alt="" />
            </div>
            <div className="col-8 col-sm-6 col-md-6 col-12">
                <br />
                <br />
                <h3>{props.Heading2}</h3>
                <p>
                    {props.text2}
                </p>
            </div>
            <hr className="col-8 offset-sm-4" />
        </div>
    </div>)
}

function MySite() {
    return (<div>
        <nav className="navbar navbar-expand-lg  nav-bg-color sticky-lg-top">
            <div className="container-fluid">
                <span className="fs-3 fw-bold"> icon Bike Service</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 fw-bold mb-lg-0">
                        <MenuLink Link='#' Symbol='fa-solid fa-house fa-lg' Text='Home' />
                        <MenuLink Link='#bike_inspection' Symbol='fa-sharp fa-solid fa-motorcycle fa-lg' Text='Bike inspection' />
                        <MenuLink Link='#battery' Symbol='fa-sharp fa-solid fa-car-battery fa-lg' Text='Battery' />
                        <MenuLink Link='#engine_work' Symbol='fa-sharp fa-solid fa-screwdriver-wrench fa-lg' Text='Engine Work' />
                        <MenuLink Link='#electrical_repair' Symbol='fa-solid fa-heart-circle-bolt fa-lg' Text='Electrical Repair' />
                        <MenuLink Link='#review' Symbol='fa-light fa-star-sharp fa-lg' Text='Review' />
                    </ul>
                </div>
            </div>
        </nav>
        <div id="banner_image" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#banner_image" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#banner_image" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#banner_image" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="image/banner_image.jpg" className="d-block w-100 img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>
                            Affordable service packages to keep your motorbike running smoothly.
                        </h5>
                        <p>
                            Experienced mechanics providing comprehensive motorbike maintenance.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="image/banner2.jpg"
                        className="d-block w-100 img-fluid"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Expert diagnosis and repairs for all motorbike models.</h5>
                        <p>Quick turnaround time to minimize your downtime.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="image/banner3.jpg"
                        className="d-block w-100 img-fluid"
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Transparent pricing with no hidden costs.</h5>
                        <p>
                            Customization options to enhance your motorbike's aesthetics and
                            functionality.
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#banner_image"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#banner_image"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="container how-work my-5 ">
            <div className="row mt-5">
                <div className="col-12 p-2">
                    <div className="logo">
                        <span className="logo-font">How </span>We work ?
                    </div>
                </div>
            </div>
            <hr />
            <HowWeWork Heading1='(1) Bike Service Package' taxt1='Choose the Bike Service package in Bhavnagar that best fits your bike
          condition for repair and maintenance services. The Bike Service at
          Garage in Bhavnagar comes to your doorstep at your convenience' image1='image/service.jpg' Heading2='(2) Schedule your Service' taxt2='The Bike Service at Garage in Bhavnagar comes to your doorstep at your
          convenience' image2='image/Schedule_Service.png' />

            <HowWeWork Heading1='(3) Real time Update' taxt1='Track the Bike Service Booking on your phone as we service it at your
          doorstep.' image1='image/Real_time_Updates.gif' Heading2='(4) Refer and Earn' taxt2='Bike Service Online for You and Your Friends .. Spread the word! You
          get Rs.150. Your friends get Rs.100!' image2='image/refer_earn.jpg' />
        </div>
        <section className="pt-5 pb-5 mt-5 bgc-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Top </span>Categories
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <a
            className="btn btn-primary mb-3 mr-1"
            href="#carouselExampleIndicators3"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-arrow-left" />
          </a>
          <a
            className="btn btn-primary mb-3 "
            href="#carouselExampleIndicators3"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-arrow-right" />
          </a>
        </div>
        <div className="col-12">
          <div
            id="carouselExampleIndicators3"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card shadow">
                      <div className="card-header">
                        <h4 className="fw-bold text-center">
                          Periodic Service
                        </h4>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Engine Oil Change</li>
                          <li>3m Engine Flush</li>
                          <li>Idling Adjustment</li>
                          <li>Throttle Setting</li>
                          <li>Joint Greasing</li>
                          <li>park Plug Cleaning</li>
                          <li>Air Filter Cleaning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card shadow  ">
                      <div className="card-header">
                        <h4 className="fw-bold text-center">Repair work</h4>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Elecrical</li>
                          <li>Brakes</li>
                          <li>Suspension</li>
                          <li>Lubes &amp; Fluids</li>
                          <li>Engine</li>
                          <li>Clutch</li>
                          <li>Gearbox</li>
                          <li>Meter &amp; Cables</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card shadow">
                      <div className="card-header">
                        <h4 className="fw-bold text-center">Inspection</h4>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Bike Not Starting Check</li>
                          <li>Bike Revival Inspection</li>
                          <li> Low Mileage Inspection</li>
                          <li>Battery Condition Inspection</li>
                          <li>
                            Doorstep Inspection <br /> (Visit &amp; Inspect
                            Only)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card shadow">
                      <div className="card-header">
                        <h4 className="fw-bold text-center"> Battery</h4>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Battery Charging</li>
                          <li>New Battery</li>
                          <li>Replace Battery</li>
                          <li>Battery buyback offers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card shadow me-4 mb-2">
                      <div className="card-header">
                        <h4 className="fw-bold text-center"> Bike care</h4>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Eco Clean Basic</li>
                          <li>Super Shiner</li>
                          <li>Foam Wash Basic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>)

}


root.render(<MySite />);