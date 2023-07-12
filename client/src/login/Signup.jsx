import React,{useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then((res)=>{
            console.log(res)
            navigate('/login')
        })
        .catch((er)=>console.log(er))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-white p-5 rounded w-10'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>
                        <strong>Name</strong>
                    </label><br />
                    <input type='text' autoComplete='off' name='name' placeholder='Enter your name' className='form-controlled rounded-0' onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label><br />
                    <input type='email' autoComplete='off' name='email' placeholder='Enter your email ' className='form-controlled rounded-0' onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label><br />
                    <input type='password' autoComplete='off' name='password' placeholder='Enter your password' className='form-controlled rounded-0' onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                    
                </button>
                </form>
                <p>Already Having an Account</p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login</Link>
            
        </div>
    </div>
  )
}

export default Signup