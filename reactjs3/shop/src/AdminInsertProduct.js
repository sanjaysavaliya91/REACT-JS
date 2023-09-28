import AdminMenu from "./AdminMenu";
import React from 'react'
import {useState , useEffect} from 'react';
import axios from "axios";
import IsLogin from "./AdminWithLogin";

export default function AdminInsertProduct(){
    let [title , setTitle] = useState();
    let [category , setCategory] = useState([]);
    let [categoryid , setCategoryId] = useState();
    let [photo , setPhoto] = useState();
    let [price , setPrice] = useState();
    let [stock , setStock] = useState();
    let [detail , setDetail] = useState();
    
    useEffect(() => {
        if(category.length == 0){
            let apiAddress = 'http://theeasylearnacademy.com/shop/ws/category.php';
            axios({
                method : 'post',
                url : apiAddress,
                responseType : 'json',

            }).then((response) => {
                // console.log(response)
                if(response.status ==200){
                    let data = response.data;
                    if(data[0]['error'] != 'no'){
                        alert(data[0]['error']);
                    }
                    else if(data[1]['totle'] == 0){
                        alert('data not found');
                    }
                    else{
                        data.splice(0,2);
                        setCategory(data);
                    }
                }
            });

        }
    });

    let InsertProduct = function(event){
        event.preventDefault();
        let apiAddress = 'http://theeasylearnacademy.com/shop/ws/insert_product.php';
        var formData = new FormData();
        formData.append("categoryid",categoryid);
        formData.append("name",title);
        formData.append("price",price);
        formData.append("stock",stock);
        formData.append("photo",photo);
        formData.append("detail",detail);

        axios({
            method : 'post',
            url : apiAddress,
            responseType : 'json',
            data : formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response.data);
            if(response.status == 200){
                let data = response.data;
                if(data[0]['error'] != 'no'){
                    alert(data[0]['error']);
                }
                if(data[1]['success '] == 'yes'){
                    alert(data[2]['message']);
                    window.location = '/AdminProduct'
                }
            }
        })
    }



    return (
        <>
            <AdminMenu />
            <IsLogin />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
                        <div className="card shadow">
                            <div className="card-header text-bg-primary">
                                <h3>Add new product</h3>
                            </div>
                            <div className="card-body">
                                <form  encType="multipart/form-data" action method='post' onSubmit={(event) => InsertProduct(event)}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="title" placeholder="Product title" name="title" requird value={title} onChange={(event) => setTitle(event.target.value)} />
                                                <label htmlFor="title">Product title</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <select className="form-select form-select-lg" aria-label="Large select" name="categoryid" required onChange={(event) => setCategoryId(event.target.value)} >
                                                <option>Select</option>
                                                {category.map((item) => {
                                                    return (<option value={item.id}>{item.title}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="photo" className="form-label">Select Photo</label>
                                            <input className="form-control" type="file" id="photo" name="photo" accept="image/*" requird onChange={(event) => setPhoto(event.target.files[0])} />
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" className="form-control" id="price" placeholder="Product price" name="price" requird value={price} onChange={(event) => setPrice(event.target.value)} />
                                                <label htmlFor="price">Price</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" className="form-control" id="stock" placeholder="Product stock" name="stock" requird value={stock} onChange={(event) => setStock(event.target.value)} />
                                                <label htmlFor="stock">Stock</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-9">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail" defaultValue={""} requird onChange={(event) => setDetail(event.target.value)} />
                                                    <label htmlFor="detail">Detail</label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="col pt-4">
                                                    <button type="submit" className="btn btn-primary w-100">Save</button>
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
        </>
    );
}