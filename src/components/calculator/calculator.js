import React, { useState } from 'react';

function DailyCalorieCalculator() {
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const calculateBmr = (weight, age, gender, height, activityLevel) => {
    return (
      161.4 * age +
      9.25 * gender +
      4.79 * height -
      5.67 * weight
    ) / 255.0;
  };

  const calculateTdee = (bmr, activityLevel) => {
    return bmr * activityLevel;
  };

  const calculateCaloriesToLose = (tdee, goalDuration, weeks) => {
    const caloriesToLosePerWeek = (tdee * activityLevel) * 7 * weeks;
    return caloriesToLosePerWeek;
  };

  const calculateCaloriesToGain = (tdee, goalDuration, weeks) => {
    const caloriesToGainPerWeek = (tdee * activityLevel) * 7 * weeks;
    return caloriesToGainPerWeek;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the state corresponding to the input field
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your current weight in pounds"
        value={currentWeight}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Enter your goal weight in pounds"
        value={goalWeight}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Enter your height in inches"
        value={height}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleInputChange}
      />
      <select
        value={gender}
        onChange={handleInputChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="number"
        placeholder="Enter your activity level (1.4-2.3):"
        value={activityLevel}
        onChange={handleInputChange}
      />
      <button onClick={() => {}}>Calculate</button>
      {/* Display the results here */}
    </div>
  );
}

export default DailyCalorieCalculator;
