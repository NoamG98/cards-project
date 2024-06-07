import React, { useState } from "react";
import { Box, IconButton, CardActions } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useSnackbar } from "../../../providers/SnackbarProvider";
import { useAlert } from "../../../providers/AlertProvider";

export default function CardActionBar({
  handleCardDelete,
  handleCardLike,
  cardId,
  userId,
  cardLikes,
  cardTitle,
  cardPhone,
}) {
  const { user } = useUser();
  const navigate = useNavigate();
  const { snackbarActivation } = useSnackbar();
  const { alertActivation } = useAlert();

  let userLoginInfo = 0;
  if (user) {
    userLoginInfo = user._id;
  }

  const [liked, setLiked] = useState(Array.isArray(cardLikes) && cardLikes.includes(userLoginInfo));

  const toggleLike = () => {
    setLiked(!liked);
    const changeLikeStatus = handleCardLike(cardId);
    if (changeLikeStatus) {
      if (!liked) {
        return snackbarActivation(
          "info",
          `You added ${cardTitle} card to favorites`
        );
      } else {
        return snackbarActivation(
          "info",
          `You removed ${cardTitle} card from favorites`
        );
      }
    } else {
      setLiked(!liked);
    }
  };

  const handleCardEdit = (id) => {
    console.log("Navigate to edit page for card", id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
      <Box>
        <IconButton
          onClick={() =>
            alertActivation(
              "info",
              `The phone number of ${cardTitle} is:`,
              cardPhone
            )
          }
        >
          <CallIcon />
        </IconButton>
        {user ? (
          <IconButton onClick={toggleLike}>
            {liked ? <Favorite sx={{ color: "red" }} /> : <Favorite />}
          </IconButton>
        ) : null}
      </Box>
    </CardActions>
  );
}
