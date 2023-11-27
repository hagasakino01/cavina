import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ImgFace from "public/img/🦆 icon _facebook_.png";
import ImgInsta from "public/img/🦆 icon _instagram_.png";
import ImgPhone from "public/img/🦆 icon _phone_.png";
import ImgLoca from "public/img/🦆 icon _location pin_.png";
function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: "40px",
        backgroundColor: "#0B0C25",
      }}
    >
      <Box></Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: "40px",
            my: "20px",
          }}
        >
          <Image src={ImgFace} alt="" />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "28px",
              color: "#000000",
              ml: "40px",
            }}
          >
            https://www.facebook.com/alexgriffin274
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: "40px",
            my: "20px",
          }}
        >
          <Image src={ImgInsta} alt="" />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "28px",
              color: "#000000",
              ml: "40px",
            }}
          >
            https://www.instagram.com/Koi.274_/
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: "40px",
            my: "20px",
          }}
        >
          <Image src={ImgPhone} alt="" />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "28px",
              color: "#000000",
              ml: "40px",
            }}
          >
            0123456789
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mr: "40px",
            my: "20px",
          }}
        >
          <Image src={ImgLoca} alt="" />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "28px",
              color: "#000000",
              ml: "40px",
            }}
          >
            XQJP+9X Hà Đông, Hà Nội, Việt Nam
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
