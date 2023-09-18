import React from 'react'
import AdminManu from './AdminMenu';
import axios from 'axios'
class AdminCategory extends React.Component {
    DisplayCategory = function (item) {
        return (<tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>
            <img src={"http://www.theeasylearnacademy.com/shop/images/category/" + item.photo} className="img-fluid" />
          </td>
          <td>
            Yes
          </td>
          <td>
            <a href="edit-category.html"><i className="fa fa-pencil fa-2x" /></a>
          </td>
          <td>
            <a href="#"><i className="fa fa-trash fa-2x" /></a>
          </td>
        </tr>);
      }
    constructor(props){
        super(props)
        this.state = {
            category : []
        };
    }
    componentDidMount()
{
  let ApiAddress = "http://theeasylearnacademy.com/shop/ws/category.php";
    let contex = this;
  let context = this;
  axios({
    method : 'get',
    url : ApiAddress,
    responseType: 'json'
  }).then((response) => {
    console.log(response);
    if(response.status == 200)
    {
        let data = response.data;
        if(data[0]['error'] != 'no'){
            alert(data[0]['error']);
        }
        else if(data[1]['total'] == 0){
            alert('No Category Found');
        }
        else{
            data.splice(0,2);
            contex.setState({
                category : data
            });
        }
    }
        });
    }
    render()
    {
        return(
        <>
        <AdminManu />
        <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
      <p className="text-end">
        <a href="insert_category.html" className="btn btn-primary">Add Category</a>
      </p>
      <div className="card">
        <div className="card-header text-bg-primary">
          <h3>Existing Cateories</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <tbody><tr>
                <th width="8%">Sr No</th>
                <th>Title</th>
                <th width="15%">Photo</th>
                <th width="8%">Is Live</th>
                <th width="8%">Edit</th>
                <th width="8%">Delete</th>
              </tr>
              {this.state.category.map((item) => this.DisplayCategory(item))}
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>

        </>)
    }
}
export default AdminCategory