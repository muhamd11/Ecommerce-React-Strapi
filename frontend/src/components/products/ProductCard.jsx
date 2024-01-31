import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Dialog, IconButton, Rating, Stack } from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        my: 3,
        ":hover .MuiCardMedia-root": { scale: "1.1" },
      }}
    >
      <CardMedia
        sx={{
          height: 300,
          objectFit: "cover",
          transition: ".3s ease-in-out",
          cursor: "pointer",
        }}
        image={`${import.meta.env.VITE_BASE_URL}${product.attributes.productImg.data[0].attributes.url}`}
        title="green iguana"
      />
      <CardContent>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.attributes.productTitle}
          </Typography>
          <Typography>{product.attributes.productPrice}$</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {product.attributes.productDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          <AddShoppingCartIcon sx={{ mr: 1 }} />
          Buy Now
        </Button>
        <Box flexGrow={1} />
        <Button size="small">
          {" "}
          <Rating
            name="half-rating-read"
            value={product.attributes.productRating}
            precision={0.1}
            readOnly
          />
        </Button>
      </CardActions>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: 870 },
            wordBreak: "break-all",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails product={product} />
      </Dialog>
    </Card>
  );
};

export default ProductCard;
