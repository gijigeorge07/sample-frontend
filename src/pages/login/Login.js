import React, { useState } from "react";

import { Grid, Paper, TextField, Button } from "@mui/material";

import { FormControlLabel } from "@mui/material";

import { Checkbox } from "@mui/material";

// import { useNavigate } from "react-router-dom";

import axiosInstance from "../../components/helper/axios";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { baseUrl } from "../../components/constants/constant";

toast.configure();

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  const login = () => {
    axiosInstance
      .post(baseUrl + "/users/loginUser", {
        username: username,

        password: password,
      })

      .then((res) => {
        console.log(res);

        if (res.data.status === true) {
          // setLoading(false)

          localStorage.setItem("token", res.data.access_token);

          // navigate('/home')

          toast.success("Logged In Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          // navigate('/')

          //  setLoading(true)

          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        console.log(err.res);
      });
  };
  const handelChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      login();
    }
  };

  const paperStyle = {
    padding: 20,
    height: "63vh",
    width: 400,
    margin: "0 auto",
    marginTop: "50px",
    borderRadius: "30px",
  };

  const btnstyle = {
    marginLeft: "118px",
    backgroundColor: "#294e9f",
    marginTop: "10px",
  };

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <img
              src="https://whatsapp.inaipiapp.com/imperiumapp/assets/img/logo.png"
              alt=""
              style={{ height: "100px", width: "80px", objectFit: "content" }}
            />
          </Grid>

          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            style={{ marginTop: "60px" }}
            onChange={handelChange}
            onKeyPress={handleKeyPress}
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            style={{ marginTop: "15px" }}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            variant="contained"
            style={btnstyle}
            onClick={login}
          >
            Sign in
          </Button>
        </Paper>
      </Grid>

      <ToastContainer />
    </>
  );
};

export default Login;
