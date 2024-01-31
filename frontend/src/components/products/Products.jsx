import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../redux/product";

const Products = () => {
  const theme = useTheme();

  const allProducts = 'products?populate=*'
  const menProducts = 'products?populate=*&filters[productCategory][$eq]=MEN'
  const womenProducts = 'products?populate=*&filters[productCategory][$eq]=WOMEN'

  const [selectedProducts, setSelectedProducts] = useState(allProducts)
 
  const { data, error, isLoading } = useGetProductsQuery(selectedProducts);

  const handleChange = (event, newAlignment) => {
    setSelectedProducts(newAlignment)
  };
  if (isLoading) {
    return(
      <Typography>
        Loading.................
      </Typography>
    )
  }
  if (error) {
    return(
      <Typography>
        {error.message}
      </Typography>
    )
  }
  if (data) {
    return (
      <Container>
        <Stack
          sx={{ py: 2 }}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand section
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={selectedProducts}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                value={allProducts}
                className="category-button"
              >
                All Products
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                value={menProducts}
                className="category-button"
              >
                MEN Category
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                value={womenProducts}
                className="category-button"
              >
                Women Category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {data.data.map((product) => {
            return <ProductCard product={product} />;
          })}
        </Stack>
      </Container>
    );
  }
};

export default Products;
