import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "public/img/Logomark.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import Link from "next/link";
function NavBar() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/Login");
  };

  return (
    <Box bgcolor="#FFD4DE">
      <Grid container columns={18} py="40px" px="100px" alignItems="center">
        <Grid item xs={3}>
          <Box>
            <Link href={"/"}>
              <Grid container columns={26}>
                <Grid item xs={3}>
                  <Image src={logo} alt="" />
                </Grid>
                <Grid item xs={23}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      marginBottom: "2px",
                      fontSize: "40px",
                      color: "#000000",
                    }}
                  >
                    Cavila Store
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={10} px="100px">
          <Box>
            <Grid container columns={8}>
              <Grid item xs={2} display="flex" justifyContent="center">
                <Link href={"/"}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      marginBottom: "2px",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                  >
                    TRANG CHỦ
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="center">
                <Link href={"/MenPage"}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      marginBottom: "2px",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                  >
                    NAM
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="center">
                <Link href={"/WomenPage"}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      marginBottom: "2px",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                  >
                    NỮ
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="center">
                <Link href={"/Cart"}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      marginBottom: "2px",
                      fontSize: "20px",
                      color: "#000000",
                    }}
                  >
                    GIỎ HÀNG
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Grid container columns={8}>
            <Grid item xs={4}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#FFD4DE",
                  border: "2px solid #000000",
                  borderRadius: "30px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, color: "#000000", label: "Outlined" }}
                  placeholder="Tìm kiếm"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "#000000" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#FF3366",
                  padding: "12px 24px",
                  width: "100%",
                  maxWidth: "100%",
                  marginLeft: "20px",
                  textTransform: "none",
                }}
                onClick={handleLogin}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                >
                  Login
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
