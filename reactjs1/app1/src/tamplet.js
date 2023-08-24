<>
  {/* menu  */}
  <nav className="navbar navbar-expand-lg  nav-bg-color sticky-lg-top">
    <div className="container-fluid">
      <span className="fs-3 fw-bold"> icon Bike Service</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mb-2 fw-bold mb-lg-0">
          <li className="nav-item fs-5 text-white p-2">
            <a className="nav-link active" href="#">
              <i className="fa-solid fa-house fa-lg" /> Home
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#bike_inspection">
              {" "}
              <i className="fa-sharp fa-solid fa-motorcycle fa-lg" /> Bike
              inspection
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#battery">
              <i className="fa-sharp fa-solid fa-car-battery fa-lg" />
              Battery
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#engine_work">
              {" "}
              <i className="fa-sharp fa-solid fa-screwdriver-wrench fa-lg" />
              Engine Work
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#electrical_repair">
              <i className="fa-solid fa-heart-circle-bolt fa-lg" /> Electrical
              Repair
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#book_service">
              {" "}
              <i className="fa-light fa-star-sharp fa-lg" />
              Book Service
            </a>
          </li>
          <li className="nav-item fs-5 text-dark p-2">
            <a className="nav-link" href="#review">
              {" "}
              <i className="fa-light fa-star-sharp fa-lg" />
              Review
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* menu  */}
  {/* slider  */}
  <div id="banner_image" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#banner_image"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#banner_image"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#banner_image"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="image/banner_image.jpg"
          className="d-block w-100 img-fluid"
          alt="..."
        />
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
  {/* slider  */}
  {/* how we work  */}
  <div className="container how-work my-5 ">
    <div className="row mt-5">
      <div className="col-12 p-2">
        <div className="logo">
          <span className="logo-font">How </span>We work ?
        </div>
      </div>
    </div>
    <hr />
    <div className="row ">
      <div className="col-8 col-sm-6 col-md-6 col-12">
        <br />
        <h3>(1) Bike Service Package</h3>
        <p>
          Choose the Bike Service package in Bhavnagar that best fits your bike
          condition for repair and maintenance services. The Bike Service at
          Garage in Bhavnagar comes to your doorstep at your convenience
        </p>
      </div>
      <div className="col-4 col-sm-6 col-md-6 col-12 mb-4">
        <img src="image/service.jpg" height="150px" alt="" />
      </div>
      <hr className="col-8" />
    </div>
    <div className="row ">
      <div className="col-4 col-sm-6 col-md-6 col-12 mb-4">
        <img src="image/Schedule_Service.png" height="150px" alt="" />
      </div>
      <div className="col-8 col-sm-6 col-md-6 col-12">
        <br />
        <br />
        <h3>(2) Schedule your Service</h3>
        <p>
          The Bike Service at Garage in Bhavnagar comes to your doorstep at your
          convenience
        </p>
      </div>
      <hr className="col-8 offset-sm-4" />
    </div>
    <div className="row">
      <div className="col-8 col-sm-6 col-md-6 col-12">
        <br />
        <br />
        <h3>(3) Real time Update</h3>
        <p>
          Track the Bike Service Booking on your phone as we service it at your
          doorstep.
        </p>
      </div>
      <div className="col-4 col-sm-6 col-md-6 col-12 mb-4 py-2">
        <img src="image/Real_time_Updates.gif" height="150px" alt="" />
      </div>
      <hr className="col-8" />
    </div>
    <div className="row ">
      <div className="col-4 col-sm-6 col-md-6 col-12 mb-4">
        <img
          src="image/refer_earn.jpg"
          className="pl-2 pb-3"
          height="150px"
          alt=""
        />
      </div>
      <div className="col-8 col-sm-6 col-md-6 col-12">
        <br />
        <br />
        <h3>(4) Refer and Earn</h3>
        <p>
          Bike Service Online for You and Your Friends .. Spread the word! You
          get Rs.150. Your friends get Rs.100!
        </p>
      </div>
    </div>
  </div>
  {/* how we work  */}
  {/* (1) Top categories */}
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
  {/* (1) Top categories */}
  {/* (2) Bike inspection Service  */}
  <section id="bike_inspection">
    <div className="container-fluid bgc-3 py-2 pb-5 pt-5">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Bike Inspection </span>Service
          </div>
        </div>
      </div>
      <div className="row justify-content-center p-4 ">
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img
                src="image/bike_inspection.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">Full Bike Inspection</h3>
              <hr />
              <b>(1)Package Inclusions</b> <br />
              Checking of Vehicle Condition <br />
              Quick Turnaround time based on Approval <br />
              Test ride of Vehicle is Done to Identify Issues <br />
              21 Days Warranty on Spares Used <br />
              <br />
              <b>(2)Package Excluded</b> <br />
              Spares Not Included <br />
              Repair or Service Work
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img src="image/bike_buysell.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center"> Bike Buy Sell Inspection</h3>
              <hr />
              <b>Package Inclusions</b>
              Immediate Quote is provided by Icon Team <br />
              Incase vehicle is not in running condition, basic diagnostics is
              done to access scope of work
              <br />
              Test ride of vehicle is done to identify issues <br />
              Mechanic visit at doorstep for inspection <br />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img src="image/engine_work.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">Engine Work Inspection</h3>
              <hr />
              <b>(1)Package Inclusions</b>
              Checking for Emission from Exhaust <br />
              Checking the Oil Leakage <br />
              Check Engine Oil Level <br />
              <b>(2)Package Excluded</b>
              Spares Not Included done <br />
              Repair or Service Work
              <br />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img
                src="image/petrol_leakage.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">Petrol Leakage Inspection</h3>
              <hr />
              Test ride of Vehicle is Done to Identify Issues <br />
              Checking of Vehicle Condition <br />
              Physical Inspection of Fuel Supply Line <br />
              Complete Estimate of Work will be Provided Instantly <br />
              Quick Turnaround time based on Approval <br />
              21 Days Warranty on Labour
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img src="image/oil_leakage.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">
                Engine Oil Leakage Inspection
              </h3>
              <hr />
              Test ride of Vehicle is Done to Identify Issues <br />
              Checking of Vehicle Condition <br />
              Physical Inspection of Fuel Supply Line <br />
              Complete Estimate of Work will be Provided Instantly <br />
              Quick Turnaround time based on Approval <br />
              Discount on Spares and Repair Labour
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img src="image/Gear_Shiftng.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">Gear Shiftng Issue</h3>
              <hr />
              <b>(1)Package Inclusions</b> <br />
              Test ride of Vehicle is Done to Identify Issues
              <br />
              Checking the Chain Play Condition <br />
              Complete Estimate of Work will be Provided Instantly <br />
              21 Days Warranty on Labour <br />
              <b>(2)Package Excluded</b>
              Spares and Labour not included
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img src="image/carborator.jpg" className="img-fluid" alt="" />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center"> Bike Carburator Issue</h3>
              <hr />
              Test ride of Vehicle is Done to <br />
              Identify Issues <br />
              Checking of Vehicle Condition <br />
              Checking the Chain Play Condition
              <br />
              Complete Estimate of Work will be Provided Instantly
              <br />
              Quick Turnaround time based on <br />7 Days Warranty on Labour
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-sm-6 mb-3">
          <div className="card card_border">
            <div className="card-header">
              <img
                src="image/Doorstep _nspection.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="card-body">
              <h3 className="fw-bold text-center">
                Doorstep Inspection (visit and inspection only)
              </h3>
              <hr />
              Mechanic at Doorstep to Inspect Bike <br />
              Complete Estimate Provided <br />
              Get Repairs Done at Doorstep**
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* (2) Bike inspection Service  */}
  {/* brand  */}
  <div className="container mt-5 pt-5 how-work">
    <div className="row">
      <div className="col-12">
        <div className="logo">
          <span className="logo-font">We Service In </span>Brand
        </div>
      </div>
    </div>
    <div className="row justify-content-center  ">
      <div className=" col-sm-3 col-md-1 col-4 my-4">
        <img src="image/bajaj_logo3.jpg" className="img-fluid" alt="" />
      </div>
      <div className=" col-sm-3 col-md-1 col-4 my-2">
        <img src="image/bullet_logo.webp" className="img-fluid" alt="" />
      </div>
      <div className=" col-sm-3 col-md-1 col-4 my-2">
        <img src="image/hero_logo.jpg" className="img-fluid" alt="" />
      </div>
      <div className=" col-sm-3 col-md-1 col-4 my-2">
        <img src="image/honda_logo.jpeg" className="img-fluid" alt="" />
      </div>
      <div className=" col-sm-3 col-md-1 col-4 my-2">
        <img src="image/mahindra_logo.png" className="img-fluid" alt="" />
      </div>
      <div className=" col-sm-3 col-md-1 col-4 my-2">
        <img src="image/tvs_logo.jpeg" className="img-fluid" alt="" />
      </div>
    </div>
  </div>
  {/* brand  */}
  {/* Battery  */}
  <section id="battery">
    <div className="container-fluid mt-5 pt-5 bgc-4">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Battery </span>Care
          </div>
        </div>
      </div>
      <div className="row card_border p-5">
        <div className="col-12 col-md-3 ">
          <div className="card shadow ">
            <div className="card-header">
              <img
                src="image/battery_charging.jpeg"
                className="img-fluid card-img-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <h4 className="card-title fw-bold text-center">
                {" "}
                Battery Charging
              </h4>
              <p>
                Check Voltage &amp; AMPS at different stages <br />
                Check water level/acid levels (For Wet Batteries)
                <br />
                10 Hour Slow Charging process
                <br />
                24 Hours Pickup &amp; Drop at Doorstep
                <br />
                Specifications
                <br />
                Charging Process
                <br />
                6-24 Hours
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card shadow ">
            <div className="card-header">
              <img
                src="image/new_battery.jpg"
                className="img-fluid card-img-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <h4 className="card-title fw-bold text-center"> New Battery</h4>
              <p>
                Amaron &amp; Exide Compunies Battery avalable <br />
                Woranty and Garanty is an depended on compunies offers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card shadow ">
            <div className="card-header">
              <img
                src="image/replace_battery.jpg"
                className="img-fluid card-img-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <h4 className="card-title fw-bold text-center"> Replace</h4>
              <p>
                If the battery is under worany then replace as per condition of
                Compuny Battery buyback offers <br />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card shadow ">
            <div className="card-header">
              <img
                src="image/buy_bake.jpg"
                className="img-fluid card-img-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <h4 className="card-title fw-bold text-center">
                Battery buyback offers
              </h4>
              <p>
                If you buy a new battery and return the old battery, we will
                give you a cash discount
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Battery  */}
  {/* engine work  */}
  <section id="engine_work">
    <div className="container mt-4 pt-5 pb-5 bgc-2">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Engine </span>Work
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12 col-md-4 card_border justify-content-center p-4">
          <img
            src="image/engine_cylinder_head.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-12 col-md-8 card_border p-4">
          <h4 className="fw-bold">Cylinder Head Reboring</h4>
          <p className="fs-5">
            {" "}
            Includes Cylinder reboring and Labour costs only. <br />
            Spare Parts Cost is additional <br />
            Doorstep Inspection of Vehicle <br />
            Vehicle Towing done by Bykmo <br />
            Complete Estimate provided on Engine Opening
            <br />
            Standardised Repair Process
            <br />
            21 Day Warranty on Spares and Labour
          </p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12 col-md-4 card_border justify-content-center p-4">
          <img src="image/half_engine.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-8 card_border p-4">
          <h4 className="fw-bold"> Half Engine Repair</h4>
          <p className="fs-5">
            Reviving the dormant core, mechanics meticulously explore
            <br />
            With skilled hands and knowledge, they restore
            <br />
            Half engine's ailments, they deftly repair
            <br />
            Bike's heartbeat revived, ready to dare.
            <br />
            With a final touch, the key is turned <br />
            The bike exhales, its power returned.
            <br />
            Revving to life, it roars with delight
          </p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12 col-md-4 card_border justify-content-center p-4">
          <img src="image/full_engine.jpeg" className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-8 card_border p-4">
          <h4 className="fw-bold">Full Engine Repair</h4>
          <p className="fs-5">
            In the depths of the garage, a silent machine awaits <br />
            Its engine's whispers drowned by mechanical debates.
            <br />
            Wrenches twist, spark plugs ignite, as expertise takes the lead{" "}
            <br />
            Repairing the heart, restoring its power, fulfilling its need.
            <br />
            With skilled hands and determination, the engine comes alive
            <br />
            Roaring to life, the motorbike triumphantly thrives.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* engine work  */}
  {/* Motorbike Electrical Repair  */}
  <section className="pt-5 pb-5 bgc-3" id="electrical_repair">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Motorbike </span>Elecrical Repair
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <a
            className="btn btn-primary mb-3 mr-1"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-arrow-left" />
          </a>
          <a
            className="btn btn-primary mb-3 "
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-arrow-right" />
          </a>
        </div>
        <div className="col-12">
          <div
            id="carouselExampleIndicators2"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-header">
                        <img
                          className="img-fluid card-img-top"
                          alt="100%x280"
                          src="image/Horn_fitting.jpeg"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Horn Fitting</h4>
                        <p className="card-text">
                          Checking of Vehicle Condition <br />
                          Test ride of Vehicle
                          <br />
                          Doorstep Spare Part Fitting
                          <br />
                          Quick Turnaround time
                          <br />
                          Discount on Spares
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-header">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src="image/indicator_switch.jpg"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Indicator Switch Fitting</h4>
                        <p className="card-text">
                          Checking of Vehicle Condition Test ride of Vehicle{" "}
                          <br />
                          Doorstep Spare Part Fitting
                          <br />
                          Quick Turnaround time <br />
                          Discount on Spares
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-header">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src="image/starter_switch.jpg"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          Starter Switch Repair And Fitting
                        </h4>
                        <p className="card-text">
                          Checking of Vehicle Condition Test ride of Vehicle{" "}
                          <br />
                          Doorstep Spare Part Fitting
                          <br />
                          Quick Turnaround time
                          <br />
                          Discount on Spares
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-header">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src="image/wiring_kit.png"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title"> Wiring Kit Fitting</h4>
                        <p className="card-text">
                          Package includes Labour Only Parts Cost Additional{" "}
                          <br />
                          Part Image only for illustration purpose and not
                          included in packageMagnet Coil Recharging and Testing
                        </p>
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
  {/* Motorbike Electrical Repair  */}
  {/* Review */}
  <div className="container mt-5 pt-5" id="review">
    <div className="row">
      <div className="col-12">
        <div className="logo">
          <span className="logo-font">Costumer </span>Review
        </div>
      </div>
    </div>
    <div className="mt-4 pt-4">
      <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contentEditable="false">
            "I recently had my motorbike serviced at [Icon Bike Care], and I
            must say it was an exceptional experience from start to finish."
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contentEditable="false"
          >
            Sanjay Savaliya
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contentEditable="false"
          >
            Business Man -Bhavnagar
          </small>
        </li>
        <li>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar4.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contentEditable="false">
            "First and foremost, the staff at [Icon Bike Care] were incredibly
            friendly and welcoming. From the moment I walked in, I was greeted
            with a warm smile and felt valued as a customer. "
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contentEditable="false"
          >
            Manish Dudhat
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contentEditable="false"
          >
            Youtuber - Bhavnagar
          </small>
        </li>
        <li>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contentEditable="false">
            "The technicians at [Icon Bike Care] demonstrated their expertise
            and attention to detail throughout the servicing process. They
            meticulously inspected my motorbike, diagnosing any issues and
            explaining them to me in a clear and understandable manner."
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contentEditable="false"
          >
            Mohit Patel
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contentEditable="false"
          >
            Fund Manager - Bhavnagar
          </small>
        </li>
      </ul>
    </div>
  </div>
  {/* Review */}
  {/* Book Service  */}
  <div className="container mt-5 pt-5" id="book_service">
    <div className="">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <span className="logo-font">Book </span>Service
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <br />
          <h3 className="header-title">Book Service Appointment</h3>
          <form className="login-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email or UserName"
              />
            </div>
            <div className="form-group">
              <input
                type="Password"
                className="form-control"
                placeholder="Password"
              />
              <a href="#!" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">LOGIN</button>
            </div>
            <div className="form-group">
              <div className="text-center">
                New Member? <a href="#!">Sign up Now</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Book Service  */}
  {/* footer  */}
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="container-fluid mt-5">
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#ddd9d9" }}
    >
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin" />
          </a>
          {/* Github */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github" />
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>{" "}
        <br />
        -::Developed by Sanjay Savaliya::-
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
  {/* footer  */}
</>
