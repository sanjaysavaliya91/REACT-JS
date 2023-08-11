import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'KGF',
            photo : 'https://www.picsum.photos/400',
            year : 2021
        };
    }
    changeDetail = () => {
        this.setState({
            photo : 'https://www.picsum.photos/500',
            year : 2023
        });
    }
    render(){
        return (
            <div className="card col-lg-3 offset-4">
                <div className="card-header"><h4>Movie Name :- {this.state.name}</h4></div>
                <div className="card-body">
                <img className='img-fluid' src={this.state.photo} />
                </div>
                <div className="card-footer">
                    <h4>{this.state.year}</h4>
                    <input type="button"  className='btn btn-primary' onClick={this.changeDetail} value='Change' />
                </div>
            </div>
        )
    }
}
root.render(<Movie />);