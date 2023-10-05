import { instanceOf } from 'prop-types';
import { Component } from 'react';
import { Cookies } from 'react-cookie'; 

export class AdminWithLogin2 extends Component {
    // Define static propTypes here, outside of the constructor
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
    };
    constructor(props) {
        super(props);
        try 
        {
            this.userid = this.props.cookies.get('userid') || undefined;
        } 
        catch (error) 
        {
            this.userid = undefined;
        }
        if (this.userid === undefined) {
            alert('Please log in');
            window.location = '/';
        }
    }
}