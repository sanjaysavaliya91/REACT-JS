import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Heder(){
    return (
        <div className="card-header text-bg-danger"><h1>Student Details</h1></div>
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
function Page(props){
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 offset-4 mt-5'>
                <div className='card'>
                    <Heder />
                    <div className='card-body'>
                       <p>
                        Student Name:- {props.name} <br />
                        Student Age :- {props.age} <br />
                        Surname     :- {props.surname}
                       </p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </div>)
}
root.render(<Page name= 'Sanjay' age = '32' surname='Savaliya' />);
