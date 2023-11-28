import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [data, setData] = useState({});

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products/" + id).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.quantityPerUnit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.unitPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Detail;
