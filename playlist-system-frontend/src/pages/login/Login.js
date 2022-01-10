import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'
import {login} from '../../utilities/LoginUtility'
import { logout } from "../../utilities/LogoutUtility";

const Login = (props) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async () =>
    {
        var result = await login(email,password)
        if(result)
        {
            toast("Login Successfull !")
            props.p1(true)
            props.p2(localStorage.getItem('user'))
        }
        else
        {
            console.log("Login Failure")
            toast("Login Failed !")
        }
            
    }
    const handleLogout = () =>
    {
        logout()
    }

    return(
        <div className="login_form_container">
            <h1>Login</h1>
            <table>
                <tr>
                    <td>
                        <label for='email'>Email</label>
                    </td>
                    <td>
                        <input onChange={e => setEmail(e.target.value)} type='email' name="email"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for='password'>Password</label>
                    </td>
                    <td>
                        <input onChange={e => setPassword(e.target.value)} type='password' name='password'/>
                    </td>
                </tr>
            </table>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login;