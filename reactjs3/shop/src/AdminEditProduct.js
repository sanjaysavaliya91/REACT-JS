import axios from "axios";
import { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
function AdminEditProduct() {
    let [title, setTitle] = useState('');
    let [categoryid, setCategoryId] = useState('');
    let [category, setCategory] = useState([]);
    let [price, setPrice] = useState('');
    let [detail, setDetail] = useState('');
    let [photo, setPhoto] = useState('');
    let [stock, setStock] = useState('');
    let [id , setId] = useState('');
    let [isDataFetched, setIsDataFetched] = useState('');
    let FetchProductData = function () {
        if (isDataFetched == false) {
            let url = window.location.href; //localhost:3000/admin-edit-product/350
            //console.log(url);
            let last_position_of_slash = url.lastIndexOf("/") + 1;
            let id = url.substring(last_position_of_slash);
            setId(id);
            let apiAddress = 'http://theeasylearnacademy.com/shop/ws/product.php?productid=' + id;
            //console.log(apiAddress);
            axios({
                url: apiAddress,
                method: 'get',
                encodingType: 'json',
            }).then((response) => {
                if (response.status == 200) {
                    let data = response.data;
                    if (data[0]['error'] != 'no') {
                        alert(data[0]['error']);
                    }
                    else if (data[1]['total'] == 0) {
                        alert("no product found")
                    }
                    else {
                        setTitle(data[2]['title']);
                        setDetail(data[2]['detail']);
                        setPrice(data[2]['price']);
                        setStock(data[2]['stock']);
                        setCategoryId(data[2]['categoryid']);
                        setPhoto(data[2]['photo']);
                        setIsDataFetched(true);
                    }
                }
            });
        }
    }
    let FetchCategoryData = function () {
        if (isDataFetched == false) {
            let apiAddress = "http://theeasylearnacademy.com/shop/ws/category.php";
            axios({
                url: apiAddress,
                method: 'get',
                encodingType: 'json',
            }).then((response) => {
                if (response.status == 200) {
                    let data = response.data;
                    if (data[0]['error'] != 'no') {
                        alert(data[0]['error']);
                    }
                    else if (data[1]['total'] == 0) {
                        alert("no category found")
                    }
                    else {
                        data.splice(0, 2);
                        setCategory(data);
                        setIsDataFetched(true);
                    }
                }
            });
        }
    }
    let UpdatePrduct = function (event) {
        event.preventDefault();
        let apiAddress = "http://theeasylearnacademy.com/shop/ws/update_product.php";
        let formData = new FormData();
        // input : name,photo,price,stock,detail,productid,categoryid (required) 
        formData.append("name", title);
        formData.append("photo", photo);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("detail", detail);
        formData.append("productid", id);
        formData.append("categoryid", categoryid);
        // console.log("form data has", formData.keys, formData.values);
        axios({
            method: 'post',
            encType: 'json',
            url: apiAddress,
            data: formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != "no") {
                    alert(data[0]['error']);
                }
                alert(data[2]['message']);
                if (data[1]['success'] == 'yes') {
                    window.location = "/admin-product";
                }
            }
        });
    }
    useEffect(() => {
        FetchProductData();
        FetchCategoryData();
    });

    return (<>
        {<AdminMenu />}
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
                    <div className="card shadow">
                        <div className="card-header text-bg-primary">
                            <h3>Edit product</h3>
                        </div>
                        <div className="card-body">
                            <form action method="post" encType="multipart/form-data"
                                onSubmit={(event) => UpdatePrduct(event)}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="title" placeholder="Product title" name="title" value={title} required onChange={(event) => setTitle(event.target.value)} />
                                            <label htmlFor="title">Edit product title</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <select className="form-select form-select-lg" aria-label="Large select" name="categoryid" required onChange={(event) => setCategoryId(event.target.value)}>
                                            <option>Select</option>
                                            {category.map((item) => {
                                                let temp;
                                                if (item.id == categoryid)
                                                    temp = <option value={item.id} selected>{item.title}</option>
                                                else
                                                    temp = <option value={item.id}>{item.title}</option>
                                                return temp
                                            })};
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="photo" className="form-label">Change Photo</label>
                                        <input className="form-control" type="file" id="photo" name="photo" accept="image/*" required onChange={(event) => setPhoto(event.target.files[0])} />
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3 mt-3">
                                            <input type="number" className="form-control" id="price" placeholder="Product price" name="price" value={price} required onChange={(event) => setPrice(event.target.value)} />
                                            <label htmlFor="price">Edit price</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3 mt-3">
                                            <input type="number" className="form-control" id="stock" placeholder="Product stock" name="stock" value={stock} required onChange={(event) => setStock(event.target.value)} />
                                            <label htmlFor="stock">Edit stock</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={"http://www.theeasylearnacademy.com/shop/images/product/" + photo} className="img-fluid" />
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail" defaultValue={detail} required
                                                    onChange={(event) => setDetail(event.target.value)} />
                                                <label htmlFor="detail">Edit detail</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="col pt-4">
                                                <button type="submit" className="btn btn-primary w-100">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default AdminEditProduct