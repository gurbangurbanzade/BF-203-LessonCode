import React from "react";
import Header from "./../../layout/header";
import { v4 as uuidv4 } from "uuid";
import Card from "./../../components/card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
function Favorites({ basketFav, setBasketFav }) {
  console.log(basketFav);
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {basketFav &&
            basketFav?.favorites?.map((prod) => {
              return <Card key={uuidv4()} product={prod} />;
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Favorites;
