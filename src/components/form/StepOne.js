import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import styles from "../../styles/Form.module.css";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";

const StepOne = () => {
    const [errors, setErrors] = useState({});
    const [taskData, setTaskData] = useState({
      title: "",
      description: "",
    });
    const { title, description } =
    taskData;
  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Form>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="title">Title</InputLabel>
          <OutlinedInput
            autoComplete="title"
            onChange={handleChange}
            value={title}
            name="title"
            id="title"
            type="text"
            label="Title"
          />
        </FormControl>
        {errors.title?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput
            multiline
            rows={4}
            autoComplete="description"
            onChange={handleChange}
            value={description}
            name="description"
            id="description"
            type="text"
            label="Description"
          />
        </FormControl>
        {errors.description?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}
       
      </Form>
    </div>
  )
}

export default StepOne
