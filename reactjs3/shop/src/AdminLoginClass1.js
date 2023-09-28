import React, {Component} from "react";
import { withCookies ,Cookies } from "react-cookie";

class IsLogin2 extends Component {

    constructor(props){
        super(props)
        const { cookies } = this.props;
        this.state = {
            userid: this.props.cookies.get('userid'),
            if (this.cookieValue.userid === undefined) {
                alert('Please log in');
                window.location = '/';
            }
    }

}