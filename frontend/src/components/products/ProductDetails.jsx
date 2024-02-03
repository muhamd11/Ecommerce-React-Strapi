import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAddToCartMutation } from "../../redux/cart";

const ProductDetails = ({ product }) => {
  const [selectedImg, setselectedImg] = useState(0);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const [addToCart, { error, isLoading, isSuccess }] = useAddToCartMutation();

  const navigate = useNavigate();

  const data = {
    data: {
      data: { products: [product] },
    },
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
      setUser(user); // Check if user is signed in or not
    });
    return () => unsubscribe(); // Unsubscribe on unmount
  }, []);

  const handleCart = () => {
    if (isUserSignedIn) {
      addToCart(data);
      navigate('/cart')
    } else {
      navigate("/login");
    }
  };

  

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        px: 3,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={`${import.meta.env.VITE_BASE_URL}${
            product.attributes.productImg.data[selectedImg].attributes.url
          }`}
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{product.attributes.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${product.attributes.productPrice}
        </Typography>
        <Typography variant="body1" pr={5}>
          {product.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {product.attributes.productImg.data.map((item, index) => {
              return (
                <ToggleButton
                  key={product.attributes.productTitle}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    src={`${import.meta.env.VITE_BASE_URL}${
                      item.attributes.url
                    }`}
                    alt={product.attributes.productTitle}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
          onClick={handleCart}
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
