import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setTokenTimestamp } from "../../utils/utils";
import { useSetCurrentUser } from "../../context/UserContext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import styles from "../../styles/Form.module.css";
import Typography from "@mui/material/Typography";

const Signin = () => {
  const setCurrentUser = useSetCurrentUser();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signinData;
  const handleChange = (event) => {
    setSigninData({
      ...signinData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signinData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ textAlign: "center", margin: "100px 0" }}>
      {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} severity="error">
          {message}
        </Alert>
      ))}
      <Typography sx={{ margin: "20px 0" }} variant="h2">
        Sign in
      </Typography>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            autoComplete="username"
            onChange={handleChange}
            value={username}
            name="username"
            id="username"
            type="text"
            label="Username"
          />
        </FormControl>
        {errors.username?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            autoComplete="current-password"
            onChange={handleChange}
            value={password}
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {errors.password?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
        <Button
          sx={{ margin: "10px 0" }}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Typography>
        Don't have an account? <Link to={"/signin"}>Sign in</Link>
      </Typography>
    </Box>
  );
};

export default Signin;
