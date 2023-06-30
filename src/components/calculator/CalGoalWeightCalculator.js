import React, { useState } from 'react';

function DailyCalorieCalculator() {
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [calorieDeficit, setCalorieDeficit] = useState(0);

  const handleCurrentWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const handleGoalWeightChange = (e) => {
    setGoalWeight(e.target.value);
  };

  const handleGoalDateChange = (e) => {
    setGoalDate(e.target.value);
  };

  const calculateCalorieDeficit = () => {
    const differenceInWeight = currentWeight - goalWeight;
    const differenceInDays = Math.floor(
      (new Date(goalDate) - new Date()) / (1000 * 60 * 60 * 24)
    );
    const dailyCalorieDeficit = differenceInWeight / differenceInDays;
    setCalorieDeficit(dailyCalorieDeficit);
  };

  return (
    <div>
      <h2>Daily Calorie Calculator</h2>
      <label>
        Current Weight:
        <input
          type="number"
          value={currentWeight}
          onChange={handleCurrentWeightChange}
        />
      </label>
      <label>
        Goal Weight:
        <input
          type="number"
          value={goalWeight}
          onChange={handleGoalWeightChange}
        />
      </label>
      <label>
        Goal Date:
        <input
          type="date"
          value={goalDate}
          onChange={handleGoalDateChange}
        />
      </label>
      <button onClick={calculateCalorieDeficit}>Calculate</button>
      {calorieDeficit > 0 && (
        <p>
          To reach your goal weight by {goalDate}, you need a daily calorie deficit of {calorieDeficit} calories.
        </p>
      )}
    </div>
  );
}

export default DailyCalorieCalculator;
