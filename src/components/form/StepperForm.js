// import React, { useState } from 'react'
// import StepOne from './StepOne';
// import StepTwo from './StepTwo';
// import StepThree from './StepThree';

// import Button from "@mui/material/Button";
// import Alert from "@mui/material/Alert";
// import styles from "../../styles/Form.module.css";
// import Typography from "@mui/material/Typography";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormLabel from "@mui/material/FormLabel";
// import Form from "react-bootstrap/Form";
// import FormCheck from "react-bootstrap/FormCheck";

// import { Step, StepLabel, Stepper } from "@mui/material";
// const steps = ["Information", "Wizardy world", "Final"];

// const StepperForm = (stepIndex) => {
//     const [activeStep, setActiveStep] = useState(0);
//     const handleNext = () => {
//         setActiveStep(activeStep + 1);
//         };
//         const handleBack = () => {
//             setActiveStep(activeStep-1);
//             };
//             const handleReset = () => {
//                 setActiveStep(0);
//               }
//     switch(stepIndex){
//         case 0:
//             return (
// <div>
// <StepOne />
// </div>
//             )
//         case 1:
//             return (
// <div>
//     <StepTwo />
// </div>
//             )
//         case 2: 
//         return (
// <div>
//     <StepThree />
//     </div>
//         )
        
//         default:
//             return 'Unknown stepIndex'
//     }

// }

// export default StepperForm
