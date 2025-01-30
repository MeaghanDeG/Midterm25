import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError('')

    //Login API Call

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      
      // Handle successful login response 
      if(response.data && response.data.accessToken){
        localStorage.setItem("token", response.data.accessToken)
        navigate('/dashboard')
      }

    } catch (error) {
      // Handle login error
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
         <div className="w-96 border rounded bg-white px-7 py-10 shadow-lg">

          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>

            <input 
              type="text" 
              placeholder="Email" 
              className="input-box" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <PasswordInput 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">Login</button>

            <p className="text-sm text-center mt-4">
              Not registered yet? <Link to='/signUp' className="font-medium text-primary underline">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
