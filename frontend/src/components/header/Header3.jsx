import React, { useState } from "react";
import { Box, Button, Container, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from "@emotion/react";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme()
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{width: '220px', bgcolor: theme.palette.selectColor.main, color: theme.palette.text.secondary}}
          >
            <ViewModuleIcon />
            <Typography sx={{textTransform: 'capitalize', mx:'8px'}}>
              Categories
            </Typography>
            <Box flexGrow={1}/>
            <ChevronRightIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Bikes</MenuItem>
            <MenuItem onClick={handleClose}>Elctronics</MenuItem>
            <MenuItem onClick={handleClose}>Books</MenuItem>
            <MenuItem onClick={handleClose}>Games</MenuItem>
          </Menu>
        </Box>
        <IconButton>
          <MenuIcon sx={{cursor: 'pointer'}} />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header3;
