import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Menu from "./Menu";
import Home from "./Home";
import Objective from "./Objective";
import Organization from "./Organization";
import District from "./District";
import Branches from "./Branches";
import HumanResources from "./HumanResources";
import Staff from "./Staff";
import Download from "./Download";
import Result from "./Result";
import Links from "./Links";
import News from "./News";
import ContactUs from "./ContactUs";
import Nopage from "./Nopage";

function MySites() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
            <Route index path="/Home" element={<Home />} />
            <Route path="/Objective" element={<Objective />} />
            <Route path="/Organization" element={<Organization />} />
            <Route path="/District" element={<District />} />
            <Route path="/Branches" element={<Branches />} />
            <Route path="/HumanResources" element={<HumanResources />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/Result" element={<Result />} />
            <Route path="/News" element={<News />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path='*' element={<Nopage />} />
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MySites />);