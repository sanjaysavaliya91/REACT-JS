import React from 'react'
import AdminMenu from './AdminMenu'
import { useEffect , useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IsLogin from './AdminWithLogin';


export default function AdminProduct() {
    var [product, setProduct] = useState([]);
    let DisplayProduct = function(item){
        return(
            <tr>
                <td>{item.id} <br />
                  <a href="#"><i className="fa fa-trash fa-2x" /></a>
                  <a href="edit-product.html"><i className="fa fa-pencil fa-2x" /></a>
                </td>
                <td>{item.categoryid}</td>
                <td>{item.categorytitle}</td> 
                <td>
                  <img src={"http://www.theeasylearnacademy.com/shop/images/product/" + item.photo} className="img-fluid" />
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                  {item.stock}
                </td>
                <td>
                  {item.detail}
                </td>
              </tr>
        );
    }

    useEffect(() => {
      let  ApiAddress = 'http://theeasylearnacademy.com/shop/ws/product.php';
        if(product.length === 0)
        {
            axios({
                method : 'get',
                url : ApiAddress,
                responseType : 'json'
            }).then((response) => {
                console.log(response);
                if(response.status == 200){
                    let data = response.data;
                    let error = data[0]['error'];
                    if(error != 'no'){
                        alert(error);
                    }
                    else if(data[1]['total'] == 0){
                        alert('no Product Found');
                    }
                    else{
                        data.splice(0,2);
                        setProduct(data); 
                    }

                }
            })
        }
    });


    return (
        <>
            <AdminMenu />
            <IsLogin />
            <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
      <p className="text-end">
        <Link to="/AdminInsertProduct" className="btn btn-primary">Add Product</Link>
      </p>
      <div className="card">
        <div className="card-header text-bg-primary">
          <h3>Existing Product</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <tbody><tr>
                <th width="8%">Sr No</th>
                <th width="10%">Category</th>
                <th width="20%">Title</th>
                <th>Photo</th>
                <th width="8%">Price</th>
                <th width="8%">Stock</th>
                <th>Detail</th>
              </tr>
              {product.map((item) => DisplayProduct(item))}
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}