import React, { useEffect, useState } from "react"
import { getGoals } from "../../managers/GoalManager"
import { getRoutines } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { createGoal } from "../../managers/GoalManager"

export const GoalForm = () => {
    const navigate = useNavigate()
    const [currentGoal, setCurrentGoal] = useState({
        currentWeight: "",
        goalWeight: "",
        timeframe: ""
    })

    useEffect(() => {
        getGoals().then(res => setCurrentGoal(res))
    }, [])


    const changeGoalState = (event) => {
        const copy = { ...currentGoal }
        copy[event.target.name] = event.target.value
        setCurrentGoal(copy)
    }

    return (
        <form className="goalForm">
            <h2 className="goalForm__title">My New Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="currentWeight">Current Weight in Pounds: </label>
                    <input type="integer" name="currentWeight" required autoFocus className="form-control"
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Goal Weight: </label>
                    <input type="integer" name="goalWeight" required className="form-control"
                        value={currentGoal.goalWeight}
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Timeframe: </label>
                    <input type="datefield" name="timeframe" required className="form-control"
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const goal = {
                        currentWeight: currentGoal.currentWeight,
                        goalWeight: currentGoal.goalWeight,
                        timeframe: currentGoal.timeframe
                    }

                    // Send POST request to your API
                    createGoal(goal)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}