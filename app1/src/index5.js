import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function ReportCard(student)
{
    let total = student.html + student.css + student.javascript;
    let average = total /3
    let grade = ''; //empty variable
    if (average>85)
      grade = 'S';
    else if(average>75)
      grade = 'A';
    else if(average>65)
      grade = 'B';
    else if(average>55)
      grade = 'C';
    else if(average>35)
      grade = 'Pass';
    else 
      grade = 'Fail';
    let output=( <div class="container">
    <div class="row">
        <div class="col-lg-4 ofset-3">
            <div class="card">
                <div class="card-header">
                    <h1>Report Card</h1>
                </div>
                <div class="card-body">
                    <table class="table table-bordered" width='100'>
                        <tr>
                            <td>Name</td>
                            <td>{student.name}</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>{student.html}</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>{student.css}</td>
                        </tr>
                        <tr>
                            <td>javascript</td>
                            <td>{student.javascript}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td>Average</td>
                            <td>{average}</td>
                        </tr>
                        <tr>
                            <td>Grade</td>
                            <td>{grade}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>);
    return output;
}
var student = {
  name: 'Sanjay Savaliya',
  html : 56,
  css : 66,
  javascript : 76
}
root.render(ReportCard(student));

