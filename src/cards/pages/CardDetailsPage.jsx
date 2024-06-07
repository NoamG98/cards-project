import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import OneCardData from "../components/card/OneCardData";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useCards from "../hooks/useCards";
import MapComponent from "../components/MapComponent";

export default function CardDetailPage() {
  const { id } = useParams();
  const { value, getCardDetails } =
    useCards();
    const { isLoading, error, cardData } = value;

  useEffect(() => {
    getCardDetails(id);
  }, [id, getCardDetails]);


  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cardData) {
    return (
      <Container>
        <PageHeader
          title="Card Details"
          subtitle="Here you can find all the details about specific card"
        />

        <OneCardData cardData={cardData} />
        <MapComponent cardData={cardData}/>
      </Container>
    );
  }
}