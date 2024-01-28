import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const MegaMenu = () => {
  const theme = useTheme();

  const pages = [
    {
      item: "Home",
      icon: <HomeIcon />,
    },
    {
      item: "Account",
      icon: <PermIdentityIcon />,
    },
    {
      item: "Cart",
      icon: <ShoppingCartIcon />,
    },
  ];

  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.selectColor.main,
        color: theme.palette.text.secondary,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ textAlign: "center" }}>
        <IconButton
          sx={{
            ":hover": { rotate: "180deg", transition: ".3s linear " },
            mb: "30px",
          }}
        >
          <CloseIcon onClick={toggleDrawer("top", false)} />
        </IconButton>
        {pages.map(({ item, icon }) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <MenuIcon
        sx={{ cursor: "pointer" }}
        onClick={toggleDrawer("top", true)}
      />
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </React.Fragment>
  );
};

export default MegaMenu;
