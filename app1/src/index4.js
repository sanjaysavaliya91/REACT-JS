import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variables
var page = (<div>
    <h1>Coutry name it's capital & currency</h1>
    <table border='2' align='center'>
  <thead>
    <tr>
      <th>Country</th>
      <th>Capital</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Afghanistan</td>
      <td>Kabul</td>
      <td>Afghani</td>
    </tr>
    <tr>
      <td>Armenia</td>
      <td>Yerevan</td>
      <td>Dram</td>
    </tr>
    <tr>
      <td>Azerbaijan</td>
      <td>Baku</td>
      <td>Manat</td>
    </tr>
    <tr>
      <td>Bahrain</td>
      <td>Manama</td>
      <td>Bahraini dinar</td>
    </tr>
    <tr>
      <td>Bangladesh</td>
      <td>Dhaka</td>
      <td>Taka</td>
    </tr>
    <tr>
      <td>Bhutan</td>
      <td>Thimphu</td>
      <td>Ngultrum</td>
    </tr>
    <tr>
      <td>Brunei</td>
      <td>Bandar Seri Begawan</td>
      <td>Brunei dollar</td>
    </tr>
    <tr>
      <td>Cambodia</td>
      <td>Phnom Penh</td>
      <td>Riel</td>
    </tr>
    <tr>
      <td>China</td>
      <td>Beijing</td>
      <td>Yuan</td>
    </tr>
    <tr>
      <td>Christmas Island</td>
      <td>Flying Fish Cove</td>
      <td>Australian dollar</td>
    </tr>
    <tr>
      <td>Cocos (Keeling) Islands</td>
      <td>West Island</td>
      <td>Australian dollar</td>
    </tr>
    <tr>
      <td>Cyprus</td>
      <td>Nicosia</td>
      <td>Euro</td>
    </tr>
    <tr>
      <td>East Timor</td>
      <td>Dili</td>
      <td>United States dollar</td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>Tbilisi</td>
      <td>Lari</td>
    </tr>
    <tr>
      <td>Hong Kong</td>
      <td>Hong Kong</td>
      <td>Hong Kong dollar</td>
    </tr>
    <tr>
      <td>India</td>
      <td>New Delhi</td>
      <td>Indian rupee</td>
    </tr>
    <tr>
      <td>Indonesia</td>
      <td>Jakarta</td>
      <td>Indonesian rupiah</td>
    </tr>
    <tr>
      <td>Iran</td>
      <td>Tehran</td>
      <td>Rial</td>
    </tr>
    <tr>
      <td>Iraq</td>
      <td>Baghdad</td>
      <td>Dinar</td>
    </tr>
    <tr>
      <td>Israel</td>
      <td>Jerusalem</td>
      <td>New Israeli shekel</td>
    </tr>
    <tr>
      <td>Japan</td>
      <td>Tokyo</td>
      <td>Yen</td>
    </tr>
    <tr>
      <td>Jordan</td>
      <td>Amman</td>
      <td>Jordanian dinar</td>
    </tr>
    <tr>
      <td>Kazakhstan</td>
      <td>Nur-Sultan</td>
      <td>Tenge</td>
    </tr>
    </tbody>
    </table>
</div>);
root.render(page);