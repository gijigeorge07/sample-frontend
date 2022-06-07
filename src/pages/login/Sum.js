import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
// import { FormControlLabel } from '@mui/material';
// import { Checkbox } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../components/helper/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../components/constants/constant";

toast.configure();

const Sum = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  // const navigate = useNavigate();
  const sum = async () => {
    var access_token = localStorage.getItem("token");
    var axios = require("axios");

    var data = JSON.stringify({
      num1: parseInt(num1),

      num2: parseInt(num2),
    });

    var config = {
      method: "post",

      url: baseUrl + "/sum/sum",

      headers: {
        Authorization: "Bearer " + access_token,

        "Content-Type": "application/json",
      },

      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === true) {
          toast.success(response.data.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        } else {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  };
  const handelChange = (e) => {
    setNum1(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      sum();
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
            label="Value1"
            placeholder="Enter value"
            fullWidth
            required
            style={{ marginTop: "60px" }}
            onChange={handelChange}
            onKeyPress={handleKeyPress}
          />

          <TextField
            label="Value2"
            placeholder="Enter value"
            fullWidth
            required
            style={{ marginTop: "15px" }}
            onChange={(e) => setNum2(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          {/* <FormControlLabel

    control={

        <Checkbox

            name="checkedB"

            color="primary"

        />

    }

    label="Remember me"

/> */}

          <Button
            type="submit"
            variant="contained"
            style={btnstyle}
            onClick={sum}
          >
            Submit
          </Button>
        </Paper>
      </Grid>
      <ToastContainer />
    </>
  );
};
export default Sum;
