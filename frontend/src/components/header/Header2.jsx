import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  styled,
} from "@mui/material";
import { Stack, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SelectedMenu from "./SelectMenu";
import { useTheme } from "@emotion/react";
import ProfileLinks from "./AccountMenu";
import { auth } from "../../firebase/config";
import Button from "@mui/material/Button";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Header2 = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setUser] = useState({});
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
      setUser(user); // Check if user is signed in or not
    });
    
    return () => unsubscribe(); // Unsubscribe on unmount
  }, []);

  const options = ["All Categories", "Men", "Women", "Kids"];
  const theme = useTheme();

  const Search = styled("div")(({ theme }) => ({
    flex: 0.8,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "2px solid #777",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "270px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        href="/"
        sx={{
          display: "flex",
          flexDirection: "column",
          "&:hover": { backgroundColor: "transparent" },
          color: theme.palette.text.primary,
        }}
      >
        <ShoppingBasketIcon sx={{ fontSize: "30px" }} />
        <Typography
          variant="body2"
          sx={{ fontSize: "18px", fontWeight: "700" }}
        >
          E-Commerce
        </Typography>
      </Button>
      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          overflow: "hidden",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Category"
          inputProps={{ "aria-label": "search" }}
        />
        <SelectedMenu
          options={options}
          color={theme.palette.selectColor.main}
          width={"160px"}
        />
      </Search>
      {isUserSignedIn ? (
        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
          <IconButton href="/cart" aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <ProfileLinks user={user} />
        </Stack>
      ) : (
        <Box display={"flex"} gap={3}>
          <Button href="/login" variant="outlined" size="medium">
            Sign In
          </Button>
          <Button href="/register" variant="outlined" size="medium">
            Sign up
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Header2;
