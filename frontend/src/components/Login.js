import axios from 'axios';
import User from './User';

function Login() {
  const fetchUsers = () =>{
    axios.get('/api/User').then(res => console.log(res.data));
  };

  const user={
    username:"",
   password:"",
  }
  const loginUser = () => {
    axios.post('/api/logindata',user).then(res => console.log(res.data));
  };
  return (
    <div className="App">
      <div></div>
      <div className='container'>
        <form className="add-form" >
          <h2>Log In</h2>
          <div className="form-control">
            <label>User Name</label>
            <input type="text" placeholder = "username" onChange={(e) =>(user.username = e.target.value)}/>
          </div>

          <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder = "password" onChange={(e) =>(user.password = e.target.value)}/>
          </div>

          <input type="submit" onClick={loginUser} value="Login" className="btn btn-login " />
        </form>
      </div>
      
    </div>
  );
}

export default Login;