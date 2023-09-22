import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminMenu from './AdminMenu';
import AdminCategory from './AdminCategory';
import AdminUsers from './AdminUsers';
import AdminProduct from './AdminProduct';
import AdminOrders from './AdminOrders';
import AdminHome from './AdminHome';
import AdminInsertCategory from './AdminInsertCategory';
import AdminInsertProduct from './AdminInsertProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyRouter(){

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<AdminHome />} />
            <Route path='/AdminCategory' element={<AdminCategory />} />
            <Route path='/AdminProduct' element={<AdminProduct />} />
            <Route path='/AdminUsers' element={<AdminUsers />} />
            <Route path='/AdminOrders' element={<AdminOrders />} />
            <Route path='/AdminInsertCategory' element={<AdminInsertCategory />} />
            <Route path='/AdminInsertProduct' element={<AdminInsertProduct />} />
            <Route path='/AdminLogin' element={<AdminLogin   />} />
            {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);