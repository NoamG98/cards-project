import React from "react";
import { Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardComponent({ card, handleCardLike, handleCardDelete }) {
  const navigate = useNavigate();
  const { _id, image, title, subtitle, phone, address, bizNumber, user_id } = card;

  const handleNavigate = () => {
    navigate(`${ROUTES.CARD_INFO}/${_id}`);
  };

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea onClick={handleNavigate}>
        <CardHeaderComponent image={image} />
        <CardBody
          title={title}
          subtitle={subtitle}
          phone={phone}
          address={address}
          cardNumber={bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cardId={_id}
        userId={user_id}
      />
    </Card>
  );
}
