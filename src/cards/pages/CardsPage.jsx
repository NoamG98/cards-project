import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedBack from "../components/CardsFeedBack";

export default function CardPage() {
  const { value, handleCardDelete, handleCardLike, getAllCards } = useCards();
  const { isLoading, error, filteredCards } = value;

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const { user } = useUser();

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      <CardsFeedBack
        cardsList={filteredCards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      {user && (user.isAdmin === true || user.isBusiness === true) && (
        <AddNewCardButton />
      )}
    </div>
  );
}
