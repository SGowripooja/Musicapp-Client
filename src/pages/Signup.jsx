import '../index.css'
import { useSignup } from '../hooks/useSignup';

import { useState } from "react";

const Signup = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup  , error , isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(email, password)
        //window.location.href = '/login'
        //console.log(email,password)
    }

    return (
      
        <form className="signup" onSubmit={handleSubmit}>
            <div className="shadow-lg p-4 mb-5 bg-white rounded">
            <h1>Sign Up</h1>


            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" // Change input type to 'password'
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

         <button disabled={isLoading} className="btn btn-primary mt-3">Sign Up</button>
         </div>
         {error && <div className = "error">{error}</div>}
        </form>
    )
}

export default Signup