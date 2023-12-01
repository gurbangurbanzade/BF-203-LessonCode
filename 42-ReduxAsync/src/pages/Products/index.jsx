import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductById,
  postProduct,
  updateProd,
} from "../../redux/slices/productSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function Products() {
  const name = useSelector((state) => state.product.name);
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const product = useSelector((state) => state.product.product);
  const postProd = useSelector((state) => state.product.postProd);
  const [check, setcheck] = useState(false);
  //   const product = useSelector((state) => state.product);
  //   console.log(product);
  //   console.log(name);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  let arr = [2, 3, 4, 5, 65, 6, 7, 7, 8, 1];
  //   let arr = new Array();

  //   arr.length = 10;
  console.log(arr);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [check]);

  return (
    <div>
      <button
        onClick={() => {
          let obj = { name: "eli", surname: "abdullazade" };

          dispatch(postProduct(obj));
          dispatch(updateProd(obj));
        }}
      >
        Pos data
      </button>
      {postProd && <h4>{postProd.name}</h4>}

      <hr />
      <input type="number" onChange={(e) => setInputVal(e.target.value)} />
      <button
        onClick={() => {
          dispatch(getAllProductById(inputVal));
        }}
      >
        Get By ID
      </button>

      {product && (
        <h3>
          {product.id ? product.id + "ayan diqqetli ol" : null} {product.name}
        </h3>
      )}
      <h3>Products</h3>
      <button
        onClick={() => {
          dispatch(getAllProducts());
          console.log(products);
        }}
      >
        Get All Data
      </button>
      <hr />
      {loading && (
        <>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
          <h1>yuklenir</h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {arr.map((elem, i) => {
                console.log("salam");
                return (
                  <Grid key={i} item xs={3}>
                    <Box sx={{ pt: 0.5 }} width="200px">
                      <Skeleton width="200px" height="50px" />
                      <Skeleton width="200px" height="30px" />
                      <Skeleton width="200px" height="100px" />
                      <Skeleton width="200px" height="30px" />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}
      {error && "Xeta bas verdi"}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {products &&
            products.map((elem, i) => {
              return (
                <Grid key={i} item xs={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="data:image/jpeg;base64,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"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
