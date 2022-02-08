import axios from "axios";

function User() {
    const user = {
        username:"",
        password:"",
        name:"",
        age:0,
    }
    var getData = "";
    const userData = () => {
        axios.post("/api/userdata",user).then((res) => {getData = res.data;console.log(getData)});
    };

    return(
        <div className="container container-fluid">
            <h2>User Data</h2>
            <form>
                <div className="form-control">
                    <label>User Name</label>
                    <input placeholder="Enter username" onChange={(e) => user.username = e.target.value}/>
                </div>
               
                <button className="btn" onClick={userData} li>Display</button>
            </form>
            
        </div>
    );
}

export default User;