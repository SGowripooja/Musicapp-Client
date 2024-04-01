import "../index.css";

import { useState } from "react";
import {useLogin} from '../hooks/useLogin';
import Loader from '../components/Loader'

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const {login , error , isLoading} = useLogin()
  const [loading, setloading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setloading(true)

    // await login(email, password);
    // setloading(false)
    // window.location.href = '/home'

    try {
      await login(email, password);
      // Simulate a delay of 2 seconds before redirecting to the home page
      setTimeout(() => {
        setloading(false);
        window.location.href = '/home';
      }, 2000); 
    } catch (error) {
      // Handle error
      console.error('Login failed:', error);
      setloading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <form className="login" onSubmit={handleSubmit}>
          <div className="shadow-lg p-4 mb-5 bg-white rounded">
            <h1>Login</h1>
  
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <button disabled={isLoading} className="btn btn-primary mt-3">
              Login
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </div>
  );
  
 
}

export default Login;





