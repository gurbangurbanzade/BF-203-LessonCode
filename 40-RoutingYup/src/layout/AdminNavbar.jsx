import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/productsA">Product</Link>
        </li>
        <li>
          <Link to="/admin/productsAdd">Add Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
