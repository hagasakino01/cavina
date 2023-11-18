"use client";

import ItemDefault from "@/components/ItemDefault/ItemDefault";
import NavBar from "@/components/NavBar/NavBar";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Card } from "antd";
import ImgItem from "public/img/ItemItem.png";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function MenPage() {
  const cloneData = [
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 1,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 2,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 3,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 4,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 1,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 2,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 3,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 4,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 1,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 2,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 3,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 4,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 1,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 2,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 3,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 4,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 1,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 2,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 3,
    },
    {
      img: ImgItem,
      name: "Thit chó",
      price: 300000,
      size: ["S", "M", "L", "XL"],
      id: 4,
    },
  ];
  const handleChangePaginate = (
    event: React.ChangeEvent<unknown>,
    pageSelected: number
  ) => {
    console.log(pageSelected);
  };
  return (
    <Box bgcolor="#FFD4DE">
      <NavBar />
      <Box px="80px">
        <Typography
          sx={{ fontWeight: 500, fontSize: "48px", color: "#000000" }}
          my="30px"
        >
          Sản phẩm nam
        </Typography>
      </Box>
      <Box>
        <Grid container columns={8}>
          {cloneData.map((item, index) => (
            <Grid key={item.id} item xs={2} px="80px" py="40px">
              <ItemDefault
                img={item.img}
                name={item.name}
                price={item.price}
                size={item.size}
              />
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="30px"
        >
          <Stack spacing={2}>
            <Pagination
              count={10}
              onChange={handleChangePaginate}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MenPage;
