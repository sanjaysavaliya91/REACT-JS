import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminMenu from './adminMenu';
import AdminHome from './AdminHome';
import AdminDashbord from './AdminDashbord';
import AdminDoctor from './AdminDoctor';
import AdminAddDoctor from './AdminAddDoctor';
import AdminEditDoctor from './AdminEditDoctor';
import AdminPatient from './AdminPatient';
import AdminAddPatient from './AdminAddPatient';
import AdminEditPatient from './AdminEditPatient';
import AdminAppointment from './AdminAppointment';
import AdminAddAppointment from './AdminAddAppointment';
import AdminEditAppointment from './AdminEditAppointment';
import AdminSchedule from './AdminSchedule';
import AdminAddSchedule from './AdminAddSchedule';
import AdminEditSchedule from './AdminEditSchedule';
import AdminEmployee from './AdminEmployee';
import AdminAddEmployee from './AdminAddEmployee';
import AdminEditEmployee from './AdminEditEmployee';
import AdminAttendance from './AdminAttendance';
import AdminPayment from './AdminPayment';
import AdminExpense from './AdminExpense';
import AdminAddExpense from './AdminAddExpense';
import AdminEditExpense from './AdminEditExpense';
import AdminSetting from './AdminSetting';
import AdminProfile from './AdminProfile';
import AdminEditProfile from './AdminEditProfile';

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<AdminHome />} />
                <Route path='/admin-dashbord' element ={<AdminDashbord />} />
                <Route path='/admin-doctor' element ={<AdminDoctor />} />
                <Route path='/admin-add-doctor' element ={<AdminAddDoctor />} />
                <Route path='/admin-edit-doctor' element ={<AdminEditDoctor />} />
                <Route path='/admin-patient' element ={<AdminPatient />} />
                <Route path='/admin-add-patient' element ={<AdminAddPatient />} />
                <Route path='/admin-edit-patient' element ={<AdminEditPatient />} />
                <Route path='/admin-appointment' element ={<AdminAppointment />} />
                <Route path='/admin-add-appointment' element ={<AdminAddAppointment />} />
                <Route path='/admin-edit-appointment' element ={<AdminEditAppointment />} />
                <Route path='/admin-schedule' element ={<AdminSchedule />} />
                <Route path='/admin-add-schedule' element ={<AdminAddSchedule />} />
                <Route path='/admin-edit-schedule' element ={<AdminEditSchedule />} />
                <Route path='/admin-employee' element ={<AdminEmployee />} />
                <Route path='/admin-add-employee' element ={<AdminAddEmployee />} />
                <Route path='/admin-edit-employee' element ={<AdminEditEmployee />} />
                <Route path='/admin-attendance' element ={<AdminAttendance />} />
                <Route path='/admin-payment' element ={<AdminPayment />} />
                <Route path='/admin-expense' element ={<AdminExpense />} />
                <Route path='/admin-add-expense' element ={<AdminAddExpense />} />
                <Route path='/admin-edit-expense' element ={<AdminEditExpense />} />
                <Route path='/admin-setting' element ={<AdminSetting />} />
                <Route path='/admin-profile' element ={<AdminProfile />} />
                <Route path='/admin-edit-profile' element ={<AdminEditProfile />} />

            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

