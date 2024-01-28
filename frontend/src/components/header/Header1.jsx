import { Box, Container, Stack, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";
import ColorIcon from "./ColorIcon";
import SelectedMenu from "./SelectMenu";

const Header1 = () => {
  const options = ["EN", "AR"];
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        color: "#fff",
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <ColorIcon />
          <SelectedMenu options={options} color width />
          <SocialLinks />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
