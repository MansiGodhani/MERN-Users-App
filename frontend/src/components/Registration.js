import axios from 'axios';
import User from './User';

function Registration() {
  const fetchUsers = () =>{
    axios.get('/api/User').then(res => console.log(res.data));
  };

  const user={
    username:"",
    password:"",
    name :"",
    age :0,
  }
  const registerUser = () => {
    axios.post('/api/Registration',user).then(res => console.log(res.data));
  };
  return (
    <div className="App">
      <div></div>
      <div className='container'>
        <form className="add-form" >
          <h2>Registration</h2>
          <div className="form-control">
            <label>User Name</label>
            <input type="text" placeholder = "Enter username" onChange={(e) =>(user.username = e.target.value)}/>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder = "Enter password" onChange={(e) =>(user.password = e.target.value)}/>
          </div>
          <div className="form-control">
            <label>Name</label>
            <input placeholder = "name" onChange={(e) =>(user.name = e.target.value)}/>
          </div>
          <div className="form-control">
            <label>Age</label>
            <input placeholder = "age" onChange={(e) =>(user.age = Number(e.target.value))}/>
          </div>
          <button className='btn' onClick={registerUser}>Registration</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;