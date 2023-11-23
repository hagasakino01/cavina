"use client";
import NavBar from "@/components/NavBar/NavBar";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem as MuiMenuItem,
} from "@mui/material";

import CartTable from "@/components/cartTable/cartTable";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import ImgItem from "public/img/ItemItem.png";
import Image from "next/image";
import axios from "axios";

function YourOderDetail() {
  return (
    <Box bgcolor="#FFD4DE">
      <NavBar />
    </Box>
  );
}

export default YourOderDetail;
