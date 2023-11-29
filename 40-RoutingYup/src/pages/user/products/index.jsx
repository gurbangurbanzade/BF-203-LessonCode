import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          {data &&
            data.map((elem, i) => {
              return (
                <tr key={i}>
                  <td>{elem.id}</td>

                  <td>{elem.name}</td>
                  <td>
                    <Link to={"/products/" + elem.id}>Detail</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
