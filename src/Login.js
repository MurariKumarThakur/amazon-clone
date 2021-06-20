import React,{useState} from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom';
import {auth} from './firebase'

const Login = () => {
  const history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const onSignIn =e=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then(auth=>{
          history.push('/')
      })
      .catch(error=> alert(error.message))

  }
   const onRegister=e=>{
     e.preventDefault()
     auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
          if(auth){
              history.push('/')
          }
     }).catch(error=>alert(error.message))
  }
    return (
        <div className='login'>
         <Link to="/">
         <img className="header_logo" src="https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png" alt="" />
         </Link>
         <div className="login_container">
           <h3>SignIn</h3>
            <form >
              
              <h5>E-mail</h5>
               <input type="text"  value={email} onChange={e=>setEmail(e.target.value)} />

               <h5>Password</h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />

               <button type='submit' onClick={onSignIn} className='Login_signInButton'>SignIn</button>
            </form>
             <p>
             By signing-in you agree to the AMAZON FAKE
             CLONE conditions of use & Sale. Please see our
             Privacy Notice,our Cookies Notice and our Interest Based Ads Notice
             </p>
              <button onClick={onRegister} type='submit' className='login_registration'>Create Your Amazon account</button>
         </div>

        </div>
    )
}

export default Login
