import React from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useTheme } from "../providers/CustomThemeProvider";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const location = useLocation();
  const { cards } = location.state || { cards: [] };
  const { isDark } = useTheme();

  return (
    <Box sx={{ padding: 2, backgroundColor: isDark ? "#3A4D39" : "#ECE3CE" }}>
      <Typography variant="h4" sx={{ color: isDark ? "#ECE3CE" : "#3A4D39" }}>
        Search Results
      </Typography>
      {cards.length ? (
        cards.map(card => (
          <Card key={card._id} sx={{ marginTop: 2, border: "1px solid #2e7d32" }}>
            <CardActionArea component={Link} to={`/card-info/${card._id}`}>
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: isDark ? "#ECE3CE" : "#3A4D39" }}>
          No results found for "{query}"
        </Typography>
      )}
    </Box>
  );
};

export default SearchResultsPage;
