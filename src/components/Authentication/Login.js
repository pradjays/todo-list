import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {userLogin} from "../../api/Endpoints";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const params = {
            email: email,
            password: password
        };
        userLogin(params)
            .then()
            .then()
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='todo-form'>
                <div className="mt-1">
                    <TextField
                        id="email"
                        label="Email Address"
                        value={email}
                        onChange={event => {setEmail(event.target.value)}}
                        variant="outlined"
                        color="primary"
                        focused
                        fullWidth
                    />
                </div>

                <div className="mt-1">
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={event => {setPassword(event.target.value)}}
                        variant="outlined"
                        color="primary"
                        focused
                        fullWidth
                    />
                </div>

                <div className="mt-1">
                    <Button variant="contained" onClick={handleSubmit}>LOGIN</Button>
                </div>

            </form>
        </div>
    )
}
