import React from "react";

import "./App.css";

export default function App() {
  return (
    <form>
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Your Name" />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Your Email" />

      <ul className="error-container">
        <li>Name is required</li>
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}
