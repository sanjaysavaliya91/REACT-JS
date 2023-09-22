import axios from 'axios';
import React, { useState } from 'react'
import AdminMenu from './AdminMenu';


export default function AdminInsertCategory() {
    let [title, setTitle] = useState();
    let [photo , setPhoto] = useState();
    let [islive , setIslive] = useState();
    let InsertCategory = (e) =>{
        e.preventDefault();
        console.log(title);
        console.log(photo);
        console.log(islive);
        let apiAddress = "http://www.theeasylearnacademy.com/shop/ws/insert_category.php";
        let formData = new FormData();

        formData.append("title", title);
        formData.append("islive", islive);
        formData.append("photo", photo);

        //api call

        axios({
            method :'post',
            url : apiAddress,
            responseType : 'json',
            data : formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) => console.log(response))

     
    }
    return (
        <>
        <AdminMenu />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
                        <div className="card">
                            <div className="card-header text-bg-primary">
                                <h3>Add new category</h3>
                            </div>
                            <div className="card-body">
                                <form action='' onSubmit={(e) => InsertCategory(e)}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="title" placeholder="Category title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
                                        <label htmlFor="title">Category title</label>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="photo" className="form-label">Select Photo</label>
                                            <input className="form-control" type="file" id="photo" name="photo" accept="image/*" onChange={(event) => setPhoto(event.target.files[0])} required />
                                        </div>
                                        <div className="col">
                                            <p><b>is this category Live?</b></p>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="status" id="yes" defaultChecked value={1} required onChange={(event) => setIslive(event)} />
                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="status" id="no" value={0} required onChange={(event) => setIslive(event)} />
                                                <label className="form-check-label" htmlFor="no">No</label>
                                            </div>
                                        </div>
                                        <div className="col pt-4 d">
                                            <button type="submit" className="btn btn-primary w-100">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}