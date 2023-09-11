import { Link, Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div id="page" className="container-fluid">
      <div id="header">
        <div id="menu">
          <ul>
            <li>
              <Link to="Home">Home</Link>
            </li>
            <li>
              <a href="#">DIET-Details</a>
            </li>
            <li>
              <Link to="News">News</Link>
            </li>
            <li>
              <Link to="ContactUs">Contact us</Link>
            </li>
          </ul>
        </div>
        <div id="logo">
          <img id="banner1" src="/images/banner.jpg" className="shadow-lg" width="850px" height="250px" />
        </div>
      </div>

      {/* Main */}
      <div id="page" className="container-fluid">
        <div id="content" className="row">
          <div className="col-8">
            <Outlet />

          </div>

          <div id="sidebar1">
            <ul>
              <li>
                <h2>DIET Links</h2>
                <ul>
                  <Link className="nav-link active" aria-current="page" to="/Home"> Home </Link>
                  <li><Link to="Objective">Objective</Link></li>
                  <li><Link to="Organization">Organization's Function</Link></li>
                  <li><Link to="District">District profile</Link></li>
                  <li><a href="support-system.php">Support System</a></li>
                  <li><Link to="Branches">Branches</Link></li>
                  <li><Link to="HumanResources">Human Resources</Link></li>
                  <li><Link to="Staff"> Staff</Link></li>
                  <li><a href="photo-gallary.php">Photo Gallary/Video Gallery</a></li>
                  <li><Link to="Download">Download</Link></li>
                  <li><Link to="Result">Result</Link></li>
                  <li><a href="research.php">Research</a></li>
                  <li><a href="training-program.php">Tranning Program</a></li>
                  <li><a href="website-link.php">Link/Resource</a></li>
                  <li><a href="rti.php">Right to Information Act</a></li>
                  <li><a href="download/bed_addmission.pdf" className="blink-text">B.Ed. Admission Program</a></li>
                </ul>
              </li>
            </ul>
            <p>
            </p><h1>News</h1>
            <br />
            દિવ્યાંગ ઉમેદવારો અને એક્સ આર્મીમેન તેમજ શહીદના સંતાનોએ તારીખ : 15/6/23 ના રોજ તમામ ઉમેદવારોએ બપોરે 12 કલાકે ઉપસ્થિત રહેવું.
            <p />
          </div>

          {/* <!-- <div style={{ clear: "both" }}>&nbsp;</div> --> */}
          <div className="hr1">&nbsp;</div>
          <div id="sidebar">
            <ul>
              <li>
                <h2>Thought of Day</h2>
                <ul>
                  <li>
                    <br />{" "}
                    <a>
                      One of the most beautiful things we can do is to help one
                      another. Kindness doesn't cost a thing.
                    </a>{" "}
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- <div style={{ clear: "both" }}>&nbsp;</div> --> */}
          </div>
        </div>
      </div>

      <div id="footer">
        <p align="center">
          Copyright © 2012 Diet Bhavnagar. All Rights Reserved. <br />
          Site Visit Count :- 25797
        </p>
        <p id="developer">
          <b>
            Developed By :-{" "}
            <a href="https://www.google.co.in/maps/place/The+Easy+Learn+Academy/@21.7540749,72.1415403,17z/data=!3m1!4b1!4m5!3m4!1s0x395f5a70ae66c5d9:0x79e1b3139eda8f90!8m2!3d21.7541453!4d72.1434957">
              The Easy Learn Academy
            </a>
          </b>
          <a href="https://www.google.co.in/maps/place/The+Easy+Learn+Academy/@21.7540749,72.1415403,17z/data=!3m1!4b1!4m5!3m4!1s0x395f5a70ae66c5d9:0x79e1b3139eda8f90!8m2!3d21.7541453!4d72.1434957"></a>
        </p>
      </div>
    </div>
  );
};
export default Menu;