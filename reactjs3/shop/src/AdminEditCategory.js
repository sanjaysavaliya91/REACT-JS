import React from 'react'
import AdminMenu from "./AdminMenu";
import { AdminWithLogin2 } from "./AdminWithLogin2";
import { withCookies } from "react-cookie";
import axios from "axios";

class AdminEditCategory extends AdminWithLogin2 {
    constructor(props) {
        super(props);
        this.state = {
            title : null,
            photo : null,
            islive : null,
            id : null,
            oldPhoto : null
        }
    }
    setStatus = (value) => 
    {
        this.setState({
            islive : value
        });
    }

    UpdateTitle = (value) =>
    {
        this.setState({
            title:value
        });
    }

    UpdatePhoto = (value) =>
    {
        this.setState({
            photo: value
        });
    }
    
    UpdateCategory = (event) => 

    {
       // console.log(this.state.title , this.state.photo , this.state.islive)
        event.preventDefault();
        let formData = new FormData;
        let apiAddress =  "http://theeasylearnacademy.com/shop/ws/update_category.php"
        formData.append('id',this.state.id);
        formData.append('title',this.state.title);
        formData.append('photo',this.state.photo);
        formData.append('islive',this.state.islive);

        axios({
            method : 'post',
            url : apiAddress,
            responseType : 'json',
            data : formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response.data);
            if(response.status == 200)
            {
                let data = response.data;
                if(data[0]['error'] != "no")
                    alert(data[0]['error']);
                else if (data[1]['success'] == "no")
                {
                    alert(data[2]['message']);
                }
                else 
                {
                    alert(data[2]['message']);
                    window.location = "/AdminCategory";
                }
            }
        });
    }
    
    componentDidMount(){
        var url = window.location.href;
        var last_slash = url.lastIndexOf('/') +1;
        var id = url.substring(last_slash);
        let ApiAddress = "http://theeasylearnacademy.com/shop/ws/category.php?id=" +id;
        let context = this;
        axios({
            method : 'get',
            url : ApiAddress,
            responseType : 'json'
        }).then((response) => {
            console.log(response.data)
            if(response.status == 200)
            {
                let data = response.data;
                if(data[0]['error'] !='no')
                {
                    alert(data[0]['error']);
                }
                else if(data[1]['total'] == 0)
                {
                    alert('Category not found');
                }
                else {
                    context.setState({
                      id : data[2]['id'],
                      title : data[2]['title'],
                      oldPhoto : data[2]['photo'],
                      islive : data[2]['islive']
                    });
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
                            <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
                            <div className="card">
                                <div className="card-header text-bg-primary">
                                    <h3>Edit category</h3>
                                </div>
                                <div className="card-body">
                                    <form action method='post' onSubmit={(event => this.UpdateCategory(event))} encType='multipart/form-data'>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="title" placeholder="Category title"  value={this.state.title} onChange={(event) => this.UpdateTitle(event.target.value)} required />
                                            <label htmlFor="title">Edit category title</label>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="photo" className="form-label">Change Photo</label>
                                                <input className="form-control" type="file" id="photo" name="photo" accept="image/*" onChange={(event) => this.UpdatePhoto(event.target.files[0])} /> <br />
                                                <img src={'http://www.theeasylearnacademy.com/shop/images/category/' + this.state.oldPhoto} className='img-fluid' />
                                            </div>
                                            <div className="col">
                                                <p><b>is this category Live?</b></p>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="status" id="yes" defaultChecked value={1} onChange={(event) => this.setStatus(event.target.value)} required />
                                                    <label className="form-check-label" htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="status" id="no" value={0} onChange={(event) => this.setStatus(event.target.value)} required />
                                                    <label className="form-check-label" htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <div className="col pt-4 d">
                                                <button type="submit" className="btn btn-primary w-100">Save changes</button>
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
}
export default withCookies(AdminEditCategory);