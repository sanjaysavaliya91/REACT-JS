import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function getCurrentDateTime()
{
    var now = new Date();
    var output = (<div class="row">
    <div class="col-lg-3 offset-4">
        <div class=" mt-5 card">
            <div class="card-header text-center">
                <h2>Digital Clock</h2>
            </div>
            <div class="card-body text-center">
                <h2>{now.toLocaleTimeString()}</h2> <hr/>
                <h3>{now.getDate()} - {now.getMonth() + 1} - {now.getFullYear()}</h3>
            </div>
        </div>
    </div>
</div>);
    root.render(output);

}
setInterval(getCurrentDateTime,1000);