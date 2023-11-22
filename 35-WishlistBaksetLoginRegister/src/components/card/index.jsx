import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getUser, putUser } from "../../middleware/api/users";
import { useEffect } from "react";

export default function ImgMediaCard({ product, basketFav, setBasketFav }) {
  return (
    <Grid item xs={3}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e) => {
              setBasketFav({
                basket: [...basketFav.basket, product],
                favorites: [...basketFav.favorites],
              });
              //   useEffect(() => {
              getUser(5).then((res) => {
                let obj = res;
                obj.basket = basketFav.basket;
                console.log(obj);

                putUser(5, obj); // });
              });
            }}
          >
            Add to Cart
          </Button>
          <IconButton
            aria-label="favorite"
            onClick={(e) => {
              if (basketFav?.favorites?.find((elem) => elem.id == product.id)) {
                console.log("mehsul orada var");

                let arr = [...basketFav.favorites];
                console.log(arr);
                arr = basketFav.favorites?.filter(
                  (elem) => elem.id != product.id
                );
                console.log(arr);
                setBasketFav({
                  basket: [...basketFav?.basket],
                  favorites: [...arr],
                });
              } else {
                setBasketFav({
                  basket: [...basketFav?.basket],
                  favorites: [...basketFav?.favorites, product],
                });
              }
            }}
          >
            <>
              {basketFav?.favorites?.find((elem) => elem.id == product.id) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="error" />
              )}
            </>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
