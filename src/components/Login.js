// import {Link} from 'react-router-dom';

// import './Login.css';

// function Login(){
//     return(
//         <div className='container'>
//             <div className='header'>
//                 <div className="text">Login</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                     <div className="input">
//                         <label>Email</label>
//                         <input type="email" />
//                     </div>
//                     <div className="input">
//                         <label>Password</label>
//                         <input type="password" />
//                     </div>
//                    <div className="forgot-password">Forgot password?<span className="click">Click here</span></div>
//                    <div className="forgot-password">New here?<Link to='/SignUp' className="click">Sign Up</Link></div>
//                     <div className="submit-container">
//                         <div className="submit">Login</div>
//                     </div>

//             </div>
           
//         </div>
//     );
// }

// export default Login;

import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";


import './Login.css';

function Login(){
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try {
            axios.get("http://localhost:4000/user/Login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                        history("/",{state:{id:email}})
                }
                else if (res.data==="notexist"){
                    alert("User has not signed up")
            }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e)
      
        }
    }
    return(
       

        <div className='container'>
            <div className='header'>
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                    <div className="input">
                        <label>Email</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                   <div className="forgot-password">Forgot password?<span className="click">Click here</span></div>
                   <div className="forgot-password">New here?<Link to='/SignUp' className="click">Sign Up</Link></div>
                    <div className="submit-container">
                        <div className="submit" onClick={submit}>Login</div>
                    </div>

            </div>
           
        </div>
    );
}

export default Login;