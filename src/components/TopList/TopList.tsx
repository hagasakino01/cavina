import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ImgItem from "public/img/ItemItem.png";
import ItemDefault from "../ItemDefault/ItemDefault";
import { useRouter } from "next/navigation";
function TopList() {
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
  ];
  const router = useRouter();
  const handleViewTopProduct = () => {
    router.push("/TopProduct");
  };
  return (
    <Box px="80px" py="40px">
      <Typography
        sx={{ fontWeight: 500, fontSize: "64px", color: "#000000" }}
        mb="60px"
      >
        Top sản phẩm nổi bật
      </Typography>
      <Grid container columns={8}>
        {cloneData.map((item, index) => (
          <Grid key={item.id} item xs={2}>
            <ItemDefault
              img={item.img}
              name={item.name}
              price={item.price}
              size={item.size}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mr="100px">
        <Button
          variant="text"
          sx={{
            color: "#000000",
            backgroundColor: "#070707",
            border: "2px solid #000000",
            borderRadius: "30px",
            px: "64px",
            py: "12px",
            mt: "60px",
          }}
          onClick={handleViewTopProduct}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "16px", color: "#000000" }}
          >
            Xem thêm
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default TopList;
