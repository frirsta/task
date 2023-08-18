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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
const AddTask = () => {
  const [errors, setErrors] = useState({});
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "medium",
    assigned_to: "",
  });
  const { title, description, due_date, priority, status, assigned_to } =
    taskData;
  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/task/", taskData);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      {errors.non_field_errors?.map((message, idx) => (
        <Alert key={idx} severity="error">
          {message}
        </Alert>
      ))}
      <Typography sx={{ margin: "20px 0" }} variant="h2">
        Add Task
      </Typography>
      <Form className={styles.Form} onSubmit={handleSubmit}>
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
        <Button
          sx={{ margin: "10px 0" }}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default AddTask;
