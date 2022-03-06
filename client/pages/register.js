import { useState } from "react";
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name,email,password,secret);
        axios.post('http://localhost:8000/api/register', {
            name: name,
            email: email,
            password: password,
            secret: secret
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err) );
    }

    return (
        <div className = "container-fluid">
            <div className = "row py-5 bg-secondary text-light">
                <div className = "col text-center">
                    <h1>Register</h1>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <label className="text-muted">Your Name</label>
                            <input
                                value = {name} 
                                className="form-control"
                                type="text" 
                                placeholder="Enter Your Name" 
                                onChange={ (e) => setName(e.target.value) } 
                            />
                        </div>
                        <div className="form-group p-2">
                            <label className="text-muted">Email Adress</label>
                            <input 
                                value = {email}
                                className="form-control" 
                                type="email" 
                                placeholder="Enter Your Email"
                                onChange={ (e) => setEmail(e.target.value) } 
                            />
                        </div>
                        <div className="form-group p-2">
                            <label className="text-muted">Password</label>
                            <input
                                value = {password} 
                                className="form-control" 
                                type="password" 
                                placeholder="Enter Your Password" 
                                onChange={ (e) => setPassword(e.target.value) } 
                            />
                        </div>
                        <div className="form-group p-2">
                            <label className="text-muted">Pick A Question</label>
                            <select className="form-control">
                                <option>What is your fav color?</option>
                                <option>What is your first car manufacturer?</option>
                                <option>Which city you were born?</option>
                            </select>

                            <small className="form-text text-muted">
                                You can use this to reset your password
                            </small>
                        </div>
                        <div className="form-group p-2">
                            <input
                                value={secret} 
                                type="text" 
                                className="form-control" 
                                placeholder="Write your Answer here"
                                onChange={ (e) => setSecret(e.target.value) }
                            />
                        </div>
                        <div className="form-group p-2" >
                            <button className="btn btn-primary col-12">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
