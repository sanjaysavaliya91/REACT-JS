import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Heder(){
    return (
        <div className="card-header text-bg-danger"><h1>Login Form</h1></div>
    )
}

function Footer(){
    return (
        <div className="card-footer text-bg-danger">
            <button className='btn btn-primary me-2'>Submit</button>
            <button className='btn btn-primary'>Resate</button>
        </div>
    )
}
function Page(){
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-3 offset-4 mt-5'>
                <div className='card'>
                    <Heder />
                    <div className='card-body'>
                       <input type="email" className='form-control my-2' placeholder='Email Address' />
                       <input type="password" className='form-control my-2' placeholder='Password' />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </div>)
}
root.render(<Page />);