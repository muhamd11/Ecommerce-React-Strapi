import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";

const ColorIcon = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleToggleColorMode = () => {
    localStorage.setItem("mode", isDarkMode ? "light" : "dark");
    colorMode.toggleColorMode();
  };    
  return (
    <Box>
      <IconButton onClick={handleToggleColorMode} color="inherit">
        {isDarkMode ? (
          <DarkModeOutlined fontSize="small" />
        ) : (
          <LightModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};

export default ColorIcon;
