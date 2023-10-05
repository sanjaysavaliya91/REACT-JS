import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

function AdminLogin()
{
    //state variables 
    let [email,setEmail] = useState();
    let [password,setPassword] = useState();
    const [cookies ,setCookie] = useCookies(['user'])

    let ConfirmLogin = function(event) {
      var apiAddress = 'http://theeasylearnacademy.com/shop/ws/login.php';
      var formData = new FormData();
      formData.append("email",email);
      formData.append("password",password);

      axios({
        method:'post',
        encType:'json',
        url:apiAddress,
        data:formData
      }).then((response) =>{
          console.log(response.data);
          if(response.status == 200){
            let data = response.data
            if(data[0]['error'] != 'no'){
              alert(data[0]['error'])
            }
            else if(data[1]['success'] == 'no'){
              alert(data[2]['message'])
            }
            else if(data[1]['success'] == 'yes'){
              setCookie('userid',data[3]['id'], { path: '/' });
              alert(data[2]['message']);
             window.location = '/AdminHome';
            }
            
              
          }
      });
      event.preventDefault();
    }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <div className="card shadow">
            <div className="card-header text-bg-primary">
              <h2>Admin Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={(event) => ConfirmLogin(event)} method="post" encType="multipart/form-data" >
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={(event) => setEmail(event.target.value)} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                  <label htmlFor="floatingPassword">Password</label>  
                </div>
                <button type="submit" className="btn btn-primary">Login</button> <br />
                <p className="text-center"><a href="forgot_password.html">Recover Account</a></p>
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
export default AdminLogin