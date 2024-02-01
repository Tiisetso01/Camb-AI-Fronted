import './styles.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
       
       navigate("/Home", { state: { username} })
    };
  return (
    <div id="login-container" className="flex flex-col items-center justify-center h-screen">

      {/** Header Starts Here */}
      <div className="flex flex-row  justify-center items-center m-5">
        <h1 className="text-3xl font-bold mx-4">Camb AI</h1>

          <img src={require("./Assets/Images/sound-waves.png")} className='object-cover h-12 w-12'/>
      </div>
      {/** Hearder Ends Here */}
     

     {/** CENTERD CONTAINER OF THE FORM */}
      <div className="bg-white p-8 rounded shadow-md w-3/5">
        <h1 className="text-center text-2xl font-bold mb-8">Login</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              required
              type="text"
              id="username"
              className="w-full mt-1 p-2  border rounded-md mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            
          {/** LOGIN BUTTON */}
         <button
            type="button"
            id="login-btn"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default Login;
