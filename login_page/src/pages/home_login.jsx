import React, { useState } from "react";
import "./home_login.css";

const home_login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h1>LOGIN</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Submit"></input>
      </form>

    </div>
  
  );
};

export default home_login;