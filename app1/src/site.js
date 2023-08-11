import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


function ManuLink(props) {
  return (<li className="nav-item">
    <a className="nav-link text-white" aria-current="page" href={props.link}>{props.text}

    </a>
  </li>)
}

function SlideItem(props) {
  let active = '';
  if (props.active !== undefined) {
    active = 'active';
  }
  return (<div className={"carousel-item" + active}>
    <img src={props.image} className="d-block w-100" alt='...' />
    <div className="carousel-caption d-none d-sm-block">
      <h5>{props.Heading}</h5>
      <p>{props.text} </p>
    </div>
  </div>)
}

function ServiceItem(props) {
  return (
   
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
      <div className="card text-bg-danger shadow ">
        <div className="card-body">
          <h6 className="text-uppercase text-center fw-bold">
            {props.text}
          </h6>
        </div>
      </div>
    </div>)
}

function BrandsItem(props) {

  return (<div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-5">
    <img src={props.image} className="img-fluid" />
  </div>)
}

function ReviewItem(props) {

  return (<div className="col-sm-4 col-12">
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <p>{props.text}<br /> <b>{props.name}</b> </p>
      </div>
    </div>
  </div>)
}

function Site() {
  return (<div>
    <nav className="navbar navbar-expand-xl navbar-dark bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#active">
          <h3>CarCare Service</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBasic"
          aria-controls="navbarBasic"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse show justify-content-end "
          id="navbarBasic"
        >
          <ul className="navbar-nav mb-2 mb-xl-0">

            <ManuLink link='#active' text='Home' />
            <ManuLink link='#whatwedo' text=' What we do' />
            <ManuLink link='#service' text='Service' />
            <ManuLink link='#brands' text='Brands' />
            <ManuLink link='#reviews' text='Customer Reviews' />
            <ManuLink link='#book' text='Book Appointment' />

          </ul>
        </div>
      </div>
    </nav>
    <div id="carouselWithCaptions" className="carousel slide" data-bs-ride="carousel" >
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselWithCaptions" data-bs-slide-to={0} className="active" />
        <li data-bs-target="#carouselWithCaptions" data-bs-slide-to={1} />
        <li data-bs-target="#carouselWithCaptions" data-bs-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <SlideItem image="images/slider-1.jpg" Heading='First slide label' text='Nulla vitae elit libero, a pharetra augue mollis interdum' active='active' />
        <SlideItem image="images/slider-2.jpg" Heading='Second slide label ' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        <SlideItem image="images/slider-3.jpg" Heading='Third slide label' text='Praesent commodo cursus magna, vel scelerisque nisl consectetur.' />

      </div>
      <a
        className="carousel-control-prev"
        href="#carouselWithCaptions"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselWithCaptions"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
    <div className="container">
      <div className="row my-3 ">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header text-bg-primary">
              <h3>What we do</h3>
            </div>
            <div className="card-body">
              <div className="row" id="whatwedo">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img
                    src="images/aboutus.jpg"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 fs-5">
                  <p>
                    CarCare is a premier establishment dedicated to providing
                    exceptional and expert repair services exclusively for luxury
                    vehicles. We understand the challenges that come with owning
                    and maintaining a premium car, which often hinder us from
                    fully enjoying our driving experience. Recognizing the
                    exorbitant costs associated with authorized service centers
                    for even the most basic car maintenance, we aim to alleviate
                    this burden and offer an affordable alternative without
                    compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center text-uppercase fw-bold my-3">
                Services
              </h3>
            </div>
          </div>
          <div className="row pb-3" id="service">
            <ServiceItem text='Regular maintainance' />
            <ServiceItem text='Bodyshop & Paintwork' />
            <ServiceItem text='Regular Mechanical repair' />
            <ServiceItem text='Regular BRAKE SERVICE' />
            <ServiceItem text='Regular  EGR REPAIR' />
            <ServiceItem text='Regular DPF REGENERATE' />
            <ServiceItem text='Regular SUSPENSION REPAIR' />
            <ServiceItem text='Regular Regular car Service' />
            <ServiceItem text='Regular  BATTERY SERVICE' />
            <ServiceItem text='Regular ELECTRICAL & ELECTRONICS REPAIR' />
            <ServiceItem text='Regular ENGINE & TRANSMISSION REBUILD' />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <h3 className="text-center text-uppercase fw-bold">Brands</h3>
        </div>
      </div>
      <div className="row" id="brands">
        <BrandsItem image='images/bmw.png' />
        <BrandsItem image='images/ford.png' />
        <BrandsItem image='images/honda.png' />
        <BrandsItem image='images/hundai.png' />
        <BrandsItem image='images/kia.png' />
        <BrandsItem image='images/toyota.png' />
      </div>
    </div>
    <div className="container-fluid bg-light pb-3">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold">Customer Reviews</h3>
        </div>
      </div>
      <div className="row" id="reviews">
        <div className="col-10 offset-1">
          <div className="row">
            <ReviewItem image="images/customer-1.jpg" text='I recently had my car serviced at CarCare, and I must say, it
                    was an outstanding experience from start to finish. The staff
                    was incredibly friendly and professional, making me feel
                    confident that my vehicle was in good hands. The service
                    itself was top-notch; they thoroughly inspected my car,
                    addressed all the necessary maintenance tasks. The turnaround
                    time was impressive, and the pricing was fair and transparent.
                    I highly recommend their services to anyone seeking reliable
                    and trustworthy car servicing.' name='Hitesh Singh' />
            <ReviewItem image="images/customer-2.jpg" text='I recently had my car repainted at CarCare Services, and I       am absolutely thrilled with the results. The level of
                    craftsmanship and attention to detail displayed by their team
                    was truly exceptional. They meticulously prepared the surface,
                    ensuring a smooth and flawless finish. The color matching was
                    spot-on, and the new paint gave my car a stunning,
                    showroom-like appearance.I highly recommend their car repaint services for an
                    outstanding and remarkable outcome.' name='Suresh desai' />
            <ReviewItem image="images/customer-3.jpg" text='I recently experienced a sudden breakdown on the road and
                    reached out to CarCare Services for help. I must say, their
                    response was nothing short of remarkable. Their team arrived
                    promptly, equipped with the necessary tools and expertise to
                    diagnose and resolve the issue. They were incredibly
                    professional and understanding, keeping me informed throughout
                    the process. Their swift and efficient repairs got my car up
                    and running in no time. The pricing was reasonable, and the
                    service was worth every penny. I am immensely grateful to
                    CarCare Services for their reliable breakdown assistance. They
                    truly saved the day and earned my highest recommendation.' name='Riddhi Bose' />
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-primary py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-uppercase fw-bold  text-white">
            Let's us work upon your car
          </h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold">Book Appointment</h3>
        </div>
      </div>
      <div className="row" id="book">
        <div className="card shadow">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label"> Name </label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label"> Phone </label>
                <input type="number" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"> Email address </label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label"> Preferred Time to Call </label>
                <input type="time" className="form-control" id="time" name="time" required />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-primary py-3 mt-3">
      <div className="row">
        <div className="col-sm-4 col-12">
          <h3 className="text-white mb-3 fw-bolder border-bottom">Car Care</h3>
          <p className="text-white fs-3">
            Address: 123, ABC Building, XYZ Road <br />
            City: Bhavnagar - 364001 <br />
            State: Gujarat <br />
          </p>
        </div>
        <div className="col-sm-8 col-12">
          <h3 className="text-white">Map</h3>
          <iframe
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.13657379150392%2C21.75992321650511%2C72.14219570159914%2C21.76239435569958&layer=mapnik&marker=21.761158791420442%2C72.13938474655151"
            style={{ border: "1px solid black", width: "100%", height: 300 }}
          />
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=21.76116&mlon=72.13938#map=18/21.76116/72.13938">
              View Larger Map
            </a>
          </small>
        </div>
      </div>
    </div>
  </div>)
}
root.render(<Site />);