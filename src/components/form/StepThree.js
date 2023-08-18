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

const StepThree = () => {
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
    <div>
      Step 3
    </div>
  )
}

export default StepThree
