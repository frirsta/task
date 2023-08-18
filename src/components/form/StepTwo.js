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

const StepTwo = () => {
    const [errors, setErrors] = useState({});
    const [taskData, setTaskData] = useState({
      due_date: "",
      priority: "medium",
      assigned_to: "",
    });
    const { due_date, priority } =
      taskData;
    const handleChange = (event) => {
      setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
      });
    };
  return (
 <Form>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="due_date">due_date</InputLabel>
          <OutlinedInput
            autoComplete="due_date"
            onChange={handleChange}
            value={due_date}
            name="due_date"
            id="due_date"
            type="text"
            label="due_date"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast />
          </LocalizationProvider>
        </FormControl>
        {errors.title?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Priority
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormCheck
              type="radio"
              value="high"
              onChange={handleChange}
              name="priority"
              label="high"
            />
            <FormCheck
              type="radio"
              value="medium"
              onChange={handleChange}
              name="priority"
              label="Medium"
            />

            <FormCheck
              type="radio"
              value="low"
              onChange={handleChange}
              name="priority"
              label="Low"
            />
          </RadioGroup>
        </FormControl>
 </Form>
  )
}

export default StepTwo
