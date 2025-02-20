import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "../../styles/Form.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [signupData, setSignupData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signupData;
  const handleChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signupData);
      navigate("/signin");
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
      <Typography sx={{ margin: "20px 0" }} variant="h2">
        Sign up
      </Typography>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            autoComplete="username"
            value={username}
            onChange={handleChange}
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
          <InputLabel htmlFor="password1">Password</InputLabel>
          <OutlinedInput
            autoComplete="new-password"
            onChange={handleChange}
            value={password1}
            name="password1"
            id="password1"
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
        {errors.password1?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="password2">Confirm Password</InputLabel>
          <OutlinedInput
            autoComplete="new-password"
            onChange={handleChange}
            value={password2}
            name="password2"
            id="password2"
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
            label="Confirm Password"
          />
        </FormControl>
        {errors.password2?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
      <Box>
        <Typography>
          Already have an account? <Link to={"/signup"}>Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
