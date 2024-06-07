import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import Spinner from "../../components/Spinner";

export default function FavoritCardsPage() {
  const { user } = useUser();

  const { value, handleCardDelete, handleCardLike, getAllCards } = useCards();
  const { isLoading, error, filteredCards, filterCount } = value;
  const [isUserChecked, setIsUserChecked] = useState(false);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    if (user !== undefined) {
      setIsUserChecked(true);
    }
  }, [user]);

  if (!isUserChecked) {
    return <Spinner />;
  }

  if (!user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <div>
      <PageHeader
        title="Favorit cards"
        subtitle="On this page you can find all bussines cards you liked"
      />
      <CardsFeedBack
        cardsList={filteredCards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
        count={filterCount}
      />
      <AddNewCardButton />
    </div>
  );
}