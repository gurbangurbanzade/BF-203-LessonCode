import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./../../layout/header";
import { getAllProducts } from "../../middleware/api/products";
import Card from "./../../components/card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Home({ basketFav, setBasketFav, isLogin, setLogin }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Header isLogin={isLogin} setLogin={setLogin} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products &&
            products.map((prod) => {
              return (
                <Card
                  key={uuidv4()}
                  product={prod}
                  basketFav={basketFav}
                  setBasketFav={setBasketFav}
                />
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
