import React from "react";
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
