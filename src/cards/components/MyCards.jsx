import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import CardsFeedback from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useUser } from "../../users/providers/UserProvider"; 
import ROUTES from "../../routes/routesModel";
import Spinner from "../../components/Spinner";

export default function MyCardsPage() {
  const { value, getAllCards, handleCardLike, handleCardDelete } = useCards();
  const { filteredCards, error, isLoading, FilterCount } = value;
  const { user } = useUser();
  const [isUserChecked, setIsUserChecked] = useState(false);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    setIsUserChecked(true);
  }, [user]);

  if (!isUserChecked) {
    return <Spinner />;
  }

  if (!user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <div>
      <PageHeader
        title="My Cards"
        subtitle="On this page you can find your business cards"
      />
      <CardsFeedback
        cards={filteredCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
        count={FilterCount}
      />
      <AddNewCardButton />
    </div>
  );
}
