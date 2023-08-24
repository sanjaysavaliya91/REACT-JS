import React from 'react'

class SimpleIntrest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    calculateEmi = (event) => {
        console.log('this.state');
        event.reventDefalt();
    }
    onInputChange = (event) => {
       this.satState({
        [event.target.name]: event.target.value
       });
    }
    render() {
        return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Simple Interest Calculator</h1>
                            <form method='post' onSubmit={this.calculateEmi}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Principal Amount</label>
                                    <input type="number" className="form-control" id="amount" name='amount' required value={this.state.amount} onChange={this.onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rate" className="form-label">Interest Rate (%)</label>
                                    <input type="number" className="form-control" id="rate" name='rate' required value={this.state.rate} onChange={this.onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="year" className="form-label">Time Period (years)</label>
                                    <input type="number" className="form-control" id="time" name='year' required value={this.state.year} onChange={this.onInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" >Calculate</button>
                                <div className='card-footer mt-3'>
                                    <h2>{}</h2>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        )
    }
}
export default SimpleIntrest;