import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../../utilities/SignupUtility";

import './styles.css'


const Signup = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    const handleSignup = async () =>
    {
        var result = await signup(name,email,password)
        console.log('Signup Returned',result)
        if(result)
        {
            toast("User Registration Successfull !")
            setLoginStatus(true)
        }
        else
        {
            toast("User Registration Successfull Failed !")
        }
            
    }
    return(

        <div className="login_form_container">
            <h1>Sign Up</h1>
            <table>
            <tr>
                    <td>
                        <label for='name'>Name</label>
                    </td>
                    <td>
                        <input onChange={e => setName(e.target.value)} type='name' name="name"/>
                    </td>
                </tr>
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
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}

export default Signup;