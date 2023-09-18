import React from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios'

class AdminUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    DisplayUsers = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                    <a href="#"><i className="fa fa-eye fa-2x" /></a>
                </td>
            </tr>
        )

    }
    componentDidMount() {
        let ApiAddress = 'https://theeasylearnacademy.com/shop/ws/users.php';
        let contex = this;
        axios({
            method: 'get',
            url: ApiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error'])
                }
                else if (data[1]['total'] == 0) {
                    alert('no user found')
                }
                else {
                    data.splice(0, 2);
                    contex.setState({
                        users: data
                    })
                }
            }
        })
    }
    render() {
        return (
            <>
                <AdminMenu />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="h1 border-bottom pb-2 mb-2">User Management</div>
                            <div className="card">
                                <div className="card-header text-bg-primary">
                                    <h3>Existing Users</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped table-bordered">
                                        <tbody>
                                            <tr>
                                                <th width="8%">Sr No</th>
                                                <th>Email</th>
                                                <th width="40%">Mobile</th>
                                                <th width="15%">View Orders</th>
                                            </tr>
                                            {this.state.users.map((item) => this.DisplayUsers(item))}
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default AdminUsers