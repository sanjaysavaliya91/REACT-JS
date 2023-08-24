import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Page extends React.Component {
    constructor(props){
        super(props) //calling class constructor
        this.state = {
            name : 'Sanjay Savaliya',
            contact : 9639118788,
            age : 32
        }
    }
    render() {
        return (
            <div className="container">
                <p>
                    Name = {this.state.name} <br />
                    Contact Number = {this.state.contact} <br />
                    Age = {this.state.age} <br />
                    Email = {this.props.email} <br />
                    Gender = {this.props.gender}

                </p>
            </div>
            )
    }
}


root.render(<Page email='sanjay@gmail.com' gender='Male' />);