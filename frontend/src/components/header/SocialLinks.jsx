import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Stack } from '@mui/material';

const SocialLinks = () => {
  return (
    <Stack direction={'row'} gap={'10px'}>
      <FacebookIcon  sx={{'&:hover': {cursor: 'pointer'}}} />
      <TwitterIcon sx={{'&:hover': {cursor: 'pointer'}}} />
      <InstagramIcon sx={{'&:hover': {cursor: 'pointer'}}} />
    </Stack>
  );
};

export default SocialLinks;
