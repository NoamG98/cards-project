import React from "react";
import CardComponent from "./card/CardComponent";
import { Grid } from "@mui/material";

export default function Cards({ cardsList, handleCardDelete, handleCardLike }) {
  return (
    <Grid container spacing={1} justifyContent="center">
      {cardsList.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        </Grid>
      ))}
    </Grid>
  );
}
