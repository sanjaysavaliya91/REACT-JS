import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminMenu from './AdminMenu';
import AdminCategory from './AdminCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminUsers from './AdminUsers';
import AdminProduct from './AdminProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminOrders from './AdminOrders';
import AdminHome from './AdminHome';
import AdminLogout from './AdminLogout';
import AdminInsertCategory from './AdminInsertCategory';
import AdminInsertProduct from './AdminInsertProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function MyRouter(){

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<AdminLogin />} />
            <Route path='/AdminCategory' element={<AdminCategory />} />
            <Route path='/AdminEditCategory/:id' element={<AdminEditCategory />} />
            <Route path='/AdminProduct' element={<AdminProduct />} />
            <Route path='/AdminEditProduct/:id' element={<AdminEditProduct />} />
            <Route path='/AdminUsers' element={<AdminUsers />} />
            <Route path='/AdminOrders' element={<AdminOrders />} />
            <Route path='/AdminInsertCategory' element={<AdminInsertCategory />} />
            <Route path='/AdminInsertProduct' element={<AdminInsertProduct />} />
            <Route path='/AdminHome' element={<AdminHome   />} />
            <Route path='/AdminLogout' element={<AdminLogout   />} />
            {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);