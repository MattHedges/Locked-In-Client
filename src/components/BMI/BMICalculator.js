import React, { useState } from "react";

 export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(0);

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height * 0.0254;
    const weightInKg = weight * 0.453592;
    const calculatedBMI = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(calculatedBMI);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <label>
          Height (in inches):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Weight (in pounds):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <button type="submit">Calculate BMI</button>
      </form>
      <p>Your BMI: {bmi}</p>
    </div>
  );
};

export default BMICalculator;
