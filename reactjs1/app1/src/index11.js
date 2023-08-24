import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Photos extends React.Component
{
  constructor(props)
  {
    super(props);
    this.caption = props.caption;
    this.imageurl = props.imageurl;
    this.state = {
      like : 0
    };
  }

  increaseLike = () =>
  {
    this.setState({
      like : this.state.like +1
    });
  }
  render()
  {
    return (<div className='col-lg-4 my-3'>
      <div className='card shadow'>
        <div className='card-header'><h2>{this.caption}</h2></div>
        <div className='card-body'>
        <img className="img-fluid img-thumbnail" alt='' src={this.imageurl} />
        </div>
        <div className='card-footer'>
        <button onClick={() => this.increaseLike()} className='btn btn-primary'>Like {this.state.like}</button>
        </div>
      </div>
    </div>)
  }
}

class Gallary extends React.Component
{
  constructor(props)
  {
    super(props);
    this.tital = props.tital;
    this.waddingdate = props.waddingdate;
    this.vanue = props.vanue;
  }
  render(){
    return (<div className='containet'>
      <div className='row'>
        <div className='col-12 text-center mb-3'>
          <h1>Image Gallary</h1><hr />
        </div>
        <div className='col-lg-4' mt-5>{this.tital}</div>
        <div className='col-lg-4' mt-5>Date :-{this.waddingdate}</div>
        <div className='col-lg-4' mt-5>Vanue :-{this.vanue}</div>
      </div>
      <div className='row'>
        <Photos caption='Mandap Muhrt' imageurl='https://www.picsum.photos/300?random=1' />
        <Photos caption='Ras Garba' imageurl='https://www.picsum.photos/300?random=2' />
        <Photos caption='Chandlo' imageurl='https://www.picsum.photos/300?random=3' />
        <Photos caption='Jamanvar' imageurl='https://www.picsum.photos/300?random=4' />
      </div>
    </div>)
  }
}


root.render(<Gallary tital='ABC Wadding' waddingdate='19th-Jan-2014' vanue='At Home town Rikadiya' />);