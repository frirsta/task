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

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RadioGroup from "@mui/material/RadioGroup";
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
  const { title, description, due_date, priority } = taskData;
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
      setTaskData(data);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  console.log(taskData);
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
        <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
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
        <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
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
        <FormControl name="due_date">
          <InputLabel htmlFor="due_date">Due date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={due_date} onChange={(newValue) => setTaskData(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
   
        </FormControl>
        {errors.title?.map((message, idx) => (
          <Alert key={idx} severity="warning">
            {message}
          </Alert>
        ))}

        <FormControl sx={{ width: "100%" }}>
          <FormLabel id="priority">
            Priority
            <RadioGroup
              sx={{
                width: "100%",
                justifyContent: "space-evenly",
                padding: "20px",
              }}
              id="priority"
              row
              aria-labelledby="priority"
              name="priority"
            >
              <FormCheck
                value={priority}
                type="radio"
                onChange={handleChange}
                name="priority"
                label="High"
                id="High"
              />
              <FormCheck
                value={priority}
                type="radio"
                onChange={handleChange}
                name="priority"
                label="Medium"
                id="Medium"
              />

              <FormCheck
                value={priority}
                type="radio"
                onChange={handleChange}
                name="priority"
                label="Low"
                id="Low"
              />
            </RadioGroup>
          </FormLabel>
        </FormControl>
        <Button
          sx={{ margin: "10px 0" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default AddTask;
