import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import MoreButton from "./MoreButton";
import { getAllCardsService } from "../../../../cards/services/cardsApiService";

const RightNavBar = () => {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (["home", "about", "my cards"].includes(lowerCaseQuery)) {
      switch (lowerCaseQuery) {
        case "home":
          navigate("/home");
          return;
        case "about":
          navigate("/about");
          return;
        case "my cards":
          navigate("/my-cards");
          return;
        default:
          break;
      }
    }

    try {
      const cards = await getAllCardsService();
      const filteredCards = cards.filter(card => card.title.toLowerCase().includes(lowerCaseQuery));
      navigate(`/search-results?q=${searchQuery}`, { state: { cards: filteredCards } });
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <Box display="inline-flex">
          <FormControl variant="outlined">
            <OutlinedInput
              sx={{
                backgroundColor: isDark ? "#333333" : "#e8f5e9",
                color: isDark ? "#ffffff" : "#2e7d32", 
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDark ? "#ffffff" : "#2e7d32",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDark ? "#ffffff" : "#2e7d32",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDark ? "#ffffff" : "#2e7d32", 
                },
              }}
              placeholder="Search"
              size="small"
              value={searchQuery}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleSearch}>
                    <SearchIcon sx={{ color: isDark ? "#ffffff" : "#2e7d32" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user ? <Logged /> : <NotLogged />}
      </Box>
      <MoreButton sx={{ display: { md: "none", xs: "inline-flex" } }} />
    </>
  );
};

export default RightNavBar;
