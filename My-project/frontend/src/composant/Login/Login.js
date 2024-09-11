import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Assuming you store authentication status in localStorage or context
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app/privateRoute');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save the token
      navigate('/app/privateRoute');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const goRegister = ()=>{
    navigate('/register')
  }

  return (
    <div className="login">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bttt" onClick={handleLogin}>Login</button>
          <button className="bttt" onClick={()=>goRegister()} >Go to Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;