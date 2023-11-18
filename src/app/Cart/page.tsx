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
import { Controller, useForm, useWatch } from "react-hook-form";
import { get, includes, isEmpty, remove } from "lodash";
import { useStyles } from "../Login/style";
import LoadingButton from "@mui/lab/LoadingButton";

interface Values {
  fullName: string;
  phoneNumber: string;
  address: string;
  note: string;
  typePay: string;
}
function Cart() {
  const classes = useStyles();

  const optionPay = [
    { label: "Thanh toán khi nhận hàng", value: "COD" },
    { label: "Thanh toán bằng QR code", value: "QRCode" },
    { label: "Chuyển khoản ngân hàng", value: "Bank" },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {},
    mode: "onSubmit",
  });
  const onSubmit = (values: Values) => {
    console.log(values);
  };
  return (
    <Box bgcolor="#FFD4DE">
      <NavBar />
      <Grid container columns={12} px="50px">
        <Grid item xs={6} mt="80px" ml="50px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "36px", color: "#DFA32E" }}
            >
              Thông tin vận chuyển
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Grid container columns={12} px="80px">
                <Grid item xs={6} px="20px">
                  <Controller
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Họ và tên không được bỏ trống",
                      },
                    }}
                    name="fullName"
                    render={({ field }) => (
                      <Box>
                        <InputLabel
                          sx={{ color: "#015A94", mb: "5px" }}
                          htmlFor="fullName"
                        >
                          Họ và tên
                        </InputLabel>
                        <OutlinedInput
                          {...field}
                          sx={{ backgroundColor: "#E8E3E3", my: "10px" }}
                          id="fullName"
                          placeholder="Họ và tên"
                          error={!isEmpty(errors.fullName)}
                          autoComplete="off"
                          className={classes.input}
                          fullWidth
                        />
                        {!isEmpty(errors.fullName) && (
                          <Typography fontSize={12} color="#ff0000" my="5px">
                            {get(errors, "fullName.message", "")}
                          </Typography>
                        )}
                      </Box>
                    )}
                  />
                </Grid>
                <Grid item xs={6} px="20px">
                  <Controller
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Số điện thoại không được bỏ trống",
                      },
                    }}
                    name="phoneNumber"
                    render={({ field }) => (
                      <Box>
                        <InputLabel
                          sx={{ color: "#015A94", mb: "5px" }}
                          htmlFor="phoneNumber"
                        >
                          Tên đăng nhập
                        </InputLabel>
                        <OutlinedInput
                          {...field}
                          sx={{ backgroundColor: "#E8E3E3", my: "10px" }}
                          id="phoneNumber"
                          placeholder="Số điện thoại"
                          error={!isEmpty(errors.phoneNumber)}
                          autoComplete="off"
                          className={classes.input}
                          fullWidth
                        />
                        {!isEmpty(errors.phoneNumber) && (
                          <Typography fontSize={12} color="#ff0000" my="5px">
                            {get(errors, "phoneNumber.message", "")}
                          </Typography>
                        )}
                      </Box>
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box px="100px">
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "địa chir nhận hàng không được bỏ trống",
                  },
                }}
                name="address"
                render={({ field }) => (
                  <Box>
                    <InputLabel
                      sx={{ color: "#015A94", mb: "5px" }}
                      htmlFor="address"
                    >
                      Địa chỉ nhận hàng
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      sx={{ backgroundColor: "#E8E3E3", my: "10px" }}
                      id="address"
                      placeholder="địa chỉ nhận hàng"
                      error={!isEmpty(errors.address)}
                      autoComplete="off"
                      className={classes.input}
                      fullWidth
                    />
                    {!isEmpty(errors.address) && (
                      <Typography fontSize={12} color="#ff0000" my="5px">
                        {get(errors, "address.message", "")}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Box>
            <Box px="100px">
              <Controller
                control={control}
                rules={{
                  required: {
                    value: false,
                    message: "Ghi chú nhận hàng không được bỏ trống",
                  },
                }}
                name="note"
                render={({ field }) => (
                  <Box>
                    <InputLabel
                      sx={{ color: "#015A94", mb: "5px" }}
                      htmlFor="note"
                    >
                      Ghi chú
                    </InputLabel>
                    <OutlinedInput
                      {...field}
                      sx={{ backgroundColor: "#E8E3E3", my: "10px" }}
                      id="note"
                      placeholder="Ghi chú"
                      error={!isEmpty(errors.note)}
                      autoComplete="off"
                      className={classes.input}
                      fullWidth
                    />
                    {!isEmpty(errors.note) && (
                      <Typography fontSize={12} color="#ff0000" my="5px">
                        {get(errors, "note.message", "")}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Box>
            <Box px="100px">
              <Typography
                sx={{ fontWeight: 600, fontSize: "36px", color: "#DFA32E" }}
              >
                phương thức thanh toán
              </Typography>
              <Controller
                control={control}
                name="typePay"
                defaultValue={"COD"}
                rules={{
                  required: {
                    value: true,
                    message: "Phương thức thanh toán không được dể trống",
                  },
                }}
                render={({ field }) => {
                  return (
                    <Box>
                      <InputLabel
                        id="status-select"
                        sx={{ color: "#282828", fontSize: 14, mb: "5px" }}
                      >
                        Phương thức thanh toán
                        <span>
                          (<span style={{ color: "#FF0000" }}>*</span>)
                        </span>
                      </InputLabel>
                      <Select
                        {...field}
                        labelId="status-select"
                        fullWidth
                        sx={{ height: "40px", backgroundColor: "white" }}
                      >
                        {optionPay?.map((opt) => (
                          <MuiMenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </MuiMenuItem>
                        ))}
                      </Select>
                    </Box>
                  );
                }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <LoadingButton
                type="submit"
                sx={{ backgroundColor: "#FF3366", my: "10px" }}
                variant="contained"
                className={classes.btn}
              >
                Đặt hàng
              </LoadingButton>
            </Box>
          </form>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
