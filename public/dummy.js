// import React, { useState } from "react";
// import "./bmi.scss";
// import { GrCircleInformation } from "react-icons/gr";
// import images from "../constants/images";
// import Tooltip from "./Tooltip";
// import { FaNimblr } from "react-icons/fa";
// const BMI = () => {
//   const [toggleTooltip, setToggleTooltip] = useState(false);

//   const [bmi, setBmi] = useState(() => {
//     const saved = localStorage.getItem("bmi");
//     const initialValue = JSON.parse(saved);
//     return initialValue || "";
//   });

//   const [submitBMI, setSubmitBMI] = useState({
//     weight: "",
//     height: "",
//     error: "",
//   });

//   const handleBMIChange = (e) => {
//     const { name, value } = e.target;
//     setBmi((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const handleBMISubmit = (e) => {
//     e.preventDefault();
//     setSubmitBMI({
//       weight: bmi.weight,
//       height: bmi.height,
//       error: "",
//       bmi: "",
//     });
//     if (submitBMI.weight === "" || submitBMI.height === "") {
//       setSubmitBMI({
//         error: "Please enter weight and height",
//       });
//     } else {
//       let bmiCalc = (bmi.weight / ((bmi.height * bmi.height) / 10000)).toFixed(
//         1
//       );
//       setSubmitBMI({
//         bmi: bmiCalc,
//       });
//     }
//   };

//   let resultBMI;
//   if (submitBMI.bmi) {
//     resultBMI = <p className="app__bmr-resultBMI">{submitBMI.bmi}</p>;
//   }

//   return (
//     <div className="app__bmi">
//       <GrCircleInformation
//         color="#000"
//         fontSize={16}
//         onMouseEnter={() => setToggleTooltip(true)}
//         onMouseLeave={() => setToggleTooltip(false)}
//       />
//       {toggleTooltip && (
//         <Tooltip text="Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women." />
//       )}
//       <h2 className="app__bmi-header">BMI</h2>
//       <p className="app__bmi-error">{submitBMI.error}</p>
//       <div className="app__bmi-container">
//         <form className="app__bmi-form" onSubmit={handleBMISubmit}>
//           <div className="app__bmi-input_container">
//             <label htmlFor="bmi-weight" className="app__bmi-label">
//               Weight(kg)
//             </label>
//             <br />
//             <input
//               type="number"
//               id="bmi-weight"
//               name="weight"
//               value={bmi.weight}
//               onChange={handleBMIChange}
//             />
//           </div>
//           <div className="app__bmi-input_container">
//             <label htmlFor="bmi-weight" className="app__bmi-label">
//               Height(cm)
//             </label>
//             <br />
//             <input
//               type="number"
//               id="bmi-weight"
//               name="height"
//               value={bmi.height}
//               onChange={handleBMIChange}
//             />
//           </div>
//           <button type="submit" className="app__bmi-btn">
//             CALCULATE BMI
//           </button>
//         </form>
//         <h3 className="app__bmr-resultBMI_heading">Your BMI result:</h3>
//         {resultBMI}
//       </div>

//       <img src={images.performance} alt="" />
//     </div>
//   );
// };

// export default BMI;

// import React, { useState } from "react";
// import "./bmr.scss";
// import images from "../constants/images";
// import { GrCircleInformation } from "react-icons/gr";
// import Tooltip from "./Tooltip";

// const BMR = () => {
//   const [toggleTooltip, setToggleTooltip] = useState(false);

//   const [bmr, setBmr] = useState(() => {
//     const savedBMR = localStorage.getItem("bmr");
//     const initialValueBMR = JSON.parse(savedBMR);
//     return initialValueBMR || "";
//   });

//   const [submitBMR, setSubmitBMR] = useState({
//     gender: "",
//     weight: "",
//     age: "",
//     height: "",
//     error: "",
//   });

//   const handleBMRChange = (e) => {
//     const { name, value } = e.target;
//     setBmr((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const calculateBMR = () => {
//     setSubmitBMR({
//       gender: bmr.gender,
//       weight: bmr.weight,
//       age: bmr.age,
//       height: bmr.height,
//       calories: "",
//       bmr: "",
//       error: "",
//     });

//     if (
//       bmr.gender === "" ||
//       bmr.weight === "" ||
//       bmr.age === "" ||
//       bmr.height === "" ||
//       bmr.activity === ""
//     ) {
//       setSubmitBMR({
//         error: "Please fill in all required fields",
//       });
//     } else {
//       let bmrCalc = "";
//       if (bmr.gender === "male") {
//         bmrCalc = (
//           88.362 +
//           13.397 * bmr.weight +
//           4.799 * bmr.height -
//           5.677 * bmr.age
//         ).toFixed(2);
//       } else if (bmr.gender === "female") {
//         bmrCalc = (
//           447.593 +
//           9.247 * bmr.weight +
//           3.098 * bmr.height -
//           4.33 * bmr.age
//         ).toFixed(2);
//       }

//       setSubmitBMR({
//         bmr: bmrCalc,
//       });
//     }

//     localStorage.setItem("bmr", JSON.stringify(bmr));
//   };

//   let resultBMR;
//   if (submitBMR.bmr) {
//     resultBMR = <p className="app__bmr-resultBMR">{submitBMR.bmr}</p>;
//   }

//   return (
//     <div className="app__bmr">
//       <GrCircleInformation
//         color="#000"
//         fontSize={16}
//         onMouseEnter={() => setToggleTooltip(true)}
//         onMouseLeave={() => setToggleTooltip(false)}
//       />
//       {toggleTooltip && (
//         <Tooltip text="The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting)." />
//       )}
//       <h2 className="app__bmr-heading">BMR & DAILY CALORIE REQUIREMENT</h2>
//       <p className="app__bmr-error">{submitBMR.error}</p>
//       <div className="app__bmr-calculator_container">
//         <div className="app__bmr-calculator_data">
//           <div className="input-container">
//             <label className="app__bmr-label">Gender</label>
//             <label className="app__bmr-label_radio">
//               <br />
//               <input
//                 type="radio"
//                 name="gender"
//                 id="genderM"
//                 value="male"
//                 onChange={handleBMRChange}
//               />
//               Male
//             </label>
//             <label className="app__bmr-label_radio">
//               <input
//                 type="radio"
//                 name="gender"
//                 id="genderF"
//                 value="female"
//                 onChange={handleBMRChange}
//               />
//               Female
//             </label>
//           </div>
//           <div className="input-container">
//             <label htmlFor="bmr-weight" className="app__bmr-label">
//               Weight (kg)
//             </label>
//             <br />
//             <input
//               type="number"
//               id="bmr-weight"
//               name="weight"
//               value={bmr.weight}
//               onChange={handleBMRChange}
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="bmr-height" className="app__bmr-label">
//               Height (cm)
//             </label>
//             <br />
//             <input
//               type="number"
//               id="bmr-height"
//               name="height"
//               value={bmr.height}
//               onChange={handleBMRChange}
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="bmr-age" className="app__bmr-label">
//               Age
//             </label>
//             <br />
//             <input
//               type="number"
//               id="bmr-age"
//               min="0"
//               max="120"
//               name="age"
//               value={bmr.age}
//               onChange={handleBMRChange}
//             />
//           </div>
//         </div>
//         <div className="app__bmr-workout">
//           <div className="input-container">
//             <label className="app__bmr-label app__bmr-activity">
//               Activity level
//             </label>
//             <br />
//           </div>
//           <div className="app__bmr-buttons">
//             <button
//               type="button"
//               className="app__bmr-button"
//               onClick={calculateBMR}
//             >
//               CALCULATE BMR
//             </button>
//           </div>
//           <h3 className="app__bmr-resultBMR_heading">Your BMR result:</h3>
//           {resultBMR}
//         </div>

//         <img src={images.fitnessStats} alt="" />
//       </div>
//     </div>
//   );
// };

// export default BMR;

// import React, { useState, useEffect } from "react";
// import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Fitness from "./pages/Fitness";
// import UserPage from "./pages/UserPage";

// function App() {
//   const [form, setForm] = useState(() => {
//     const saved = localStorage.getItem("form");
//     const initialValue = JSON.parse(saved);
//     return initialValue || "";
//   });

//   const [submitForm, setSubmitForm] = useState({
//     weight: 0,
//     height: 0,
//     shoulder: 0,
//     chest: 0,
//     abdominal: 0,
//     hips: 0,
//     thigh: 0,
//     calf: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitForm({
//       weight: form.weight,
//       height: form.height,
//       shoulder: form.shoulder,
//       chest: form.chest,
//       abdominal: form.abdominal,
//       hips: form.hips,
//       thigh: form.thigh,
//       calf: form.calf,
//     });
//     localStorage.setItem("form", JSON.stringify(form));
//   };

//   const handleReset = (e) => {
//     e.preventDefault();
//     setForm({
//       weight: 0,
//       height: 0,
//       shoulder: 0,
//       chest: 0,
//       abdominal: 0,
//       hips: 0,
//       thigh: 0,
//       calf: 0,
//     });
//   };

//   const [bmr, setBmr] = useState(() => {
//     const savedBMR = localStorage.getItem("bmr");
//     const initialValueBMR = JSON.parse(savedBMR);
//     return initialValueBMR || "";
//   });

//   const [submitBMR, setSubmitBMR] = useState({
//     gender: "",
//     weight: "",
//     age: "",
//     height: "",
//     error: "",
//   });

//   const handleBMRChange = (e) => {
//     const { name, value } = e.target;
//     setBmr((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const calculateBMR = () => {
//     setSubmitBMR({
//       gender: bmr.gender,
//       weight: bmr.weight,
//       age: bmr.age,
//       height: bmr.height,
//       calories: "",
//       bmr: "",
//       error: "",
//     });

//     if (
//       bmr.gender === "" ||
//       bmr.weight === "" ||
//       bmr.age === "" ||
//       bmr.height === "" ||
//       bmr.activity === ""
//     ) {
//       setSubmitBMR({
//         error: "Please fill in all required fields",
//       });
//     } else {
//       let bmrCalc = "";
//       if (bmr.gender === "male") {
//         bmrCalc = (
//           88.362 +
//           13.397 * bmr.weight +
//           4.799 * bmr.height -
//           5.677 * bmr.age
//         ).toFixed(2);
//       } else if (bmr.gender === "female") {
//         bmrCalc = (
//           447.593 +
//           9.247 * bmr.weight +
//           3.098 * bmr.height -
//           4.33 * bmr.age
//         ).toFixed(2);
//       }

//       setSubmitBMR({
//         bmr: bmrCalc,
//       });
//     }

//     localStorage.setItem("bmr", JSON.stringify(bmr));
//   };

//   const [bmi, setBmi] = useState(() => {
//     const saved = localStorage.getItem("bmi");
//     const initialValue = JSON.parse(saved);
//     return initialValue || "";
//   });

//   const [submitBMI, setSubmitBMI] = useState({
//     weight: "",
//     height: "",
//     error: "",
//   });

//   const handleBMIChange = (e) => {
//     const { name, value } = e.target;
//     setBmi((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const handleBMISubmit = (e) => {
//     e.preventDefault();
//     setSubmitBMI({
//       weight: bmi.weight,
//       height: bmi.height,
//       error: "",
//       bmi: "",
//     });
//     if (submitBMI.weight === "" || submitBMI.height === "") {
//       setSubmitBMI({
//         error: "Please enter weight and height",
//       });
//     } else {
//       let bmiCalc = (bmi.weight / ((bmi.height * bmi.height) / 10000)).toFixed(
//         1
//       );
//       setSubmitBMI({
//         bmi: bmiCalc,
//       });
//     }
//   };
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route
//             exact
//             path="/fitness"
//             element={
//               <Fitness
//                 handleChange={handleChange}
//                 form={form}
//                 submitForm={submitForm}
//                 handleSubmit={handleSubmit}
//                 handleReset={handleReset}
//                 handleBMRChange={handleBMRChange}
//                 calculateBMR={calculateBMR}
//                 bmr={bmr}
//                 submitBMR={submitBMR}
//                 bmi={bmi}
//                 submitBMI={submitBMI}
//                 handleBMIChange={handleBMIChange}
//                 handleBMISubmit={handleBMISubmit}
//               />
//             }
//           />
//           <Route
//             exact
//             path="/user"
//             element={
//               <UserPage
//                 handleChange={handleChange}
//                 form={form}
//                 submitForm={submitForm}
//                 handleSubmit={handleSubmit}
//                 handleBMRChange={handleBMRChange}
//                 calculateBMR={calculateBMR}
//                 bmr={bmr}
//                 submitBMR={submitBMR}
//                 bmi={bmi}
//                 submitBMI={submitBMI}
//                 handleBMIChange={handleBMIChange}
//                 handleBMISubmit={handleBMISubmit}
//               />
//             }
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
