import React, { useEffect, useState } from "react";


const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandle(e) {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("");
    setPassword("");
  }


  return (
    <div className="bg-[url('/Images/loginBackgroundMobile.jpg')] bg-cover bg-center w-full h-screen flex justify-center items-center md:bg-[url('/Images/loginBackground.jpg')] ">

      <form
        className="border-2 border-black rounded-lg w-80 h-72 flex flex-col justify-center items-center gap-5  md:bg-[#c9c2af] md:border-[1px] md:w-96 md:h-72"
        onSubmit={submitHandle}
      >

        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 h-10 bg-slate-200 border-[1px] border-black rounded-lg text-center "
          type="email"
          placeholder="Email Address"
        />
        <input
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-72 h-10 bg-slate-200 border-[1px] border-black rounded-lg text-center"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
