import React from 'react'
import AdminMenu from './AdminMenu';
import { useEffect, useState } from 'react'
import axios from 'axios';
import IsLogin from './AdminWithLogin';

export default function AdminOrders() {
    var [orders, setOrders] = useState([]); 

    let DisplayOrders = function (item) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>
                    {item.fullname}  <br />
                    {item.address1} <br />
                    {item.address2} <br />
                    {item.city} - {item.pincode}
                </td>
                <td>{item.billdate}</td>
                <td>{item.amount}</td>
                <td>{item.orderstatus}</td>
                <td>
                    <a href="view-order-detail.html">
                        <i className="fa fa-eye fa-2x" />
                    </a>
                </td>
            </tr>
        );
    }

    useEffect(() => {
        let apiAddress = 'http://theeasylearnacademy.com/shop/ws/orders.php'
        if (orders.length === 0) {
            axios({
                method: 'get',
                url: apiAddress,
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                if (response.status == 200) {
                    let data = response.data;
                    let error = data[0]['error'];
                    if (error != 'no') {
                        alert(error);
                    }
                    else if (data[1]['total'] == 0) {
                        alert('No Orders Found');
                    }
                    else {
                        data.splice(0, 2)
                        setOrders(data);
                    }
                }
            })
        }
    })


    return (
        <>
            <AdminMenu />
            <IsLogin />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="h1 border-bottom pb-2 mb-2">User Management</div>
                        <div className="card">
                            <div className="card-header text-bg-primary">
                                <h3>Existing Orders</h3>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-bordered">
                                    <tbody><tr>
                                        <th width="8%">Sr No</th>
                                        <th width="40%">Customer Detail</th>
                                        <th width={10}>Date</th>
                                        <th width={10}>Amount</th>
                                        <th width={10}>Status</th>
                                        <th width="15%">View Detail</th>
                                    </tr>
                                        {orders.map((item) => DisplayOrders(item))}
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}