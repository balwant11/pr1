import React from "react";

function Navbar() {
  return (
    <nav className="container">
      <div>
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="">Menu</li>
        <li href="">Location</li>
        <li href="">About</li>
        <li href="">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Navbar;
