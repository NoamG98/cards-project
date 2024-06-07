import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

export default function MyCardsPage() {
  const { value, handleCardDelete, handleCardLike, getAllCards } = useCards();

  const { isLoading, error, filteredCards, filterCount } = value;

  const { user } = useUser();
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
        title="My cards"
        subtitle="On this page you can find all the bussines cards you create"
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