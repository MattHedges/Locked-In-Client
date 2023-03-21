import React, { useEffect, useState } from "react"
import { getRoutines } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { createGoal } from "../../managers/GoalManager"
import { UpdateGoal } from "../../managers/GoalManager"
import { getSingleGoal } from "../../managers/GoalManager"

export const GoalEdit = () => {
    const navigate = useNavigate()
    const { goalId } = useParams()
    const [currentGoal, setCurrentGoal] = useState({
        currentWeight: "",
        goalWeight: "",
        timeframe: ""
    })

    useEffect(() => {
        getSingleGoal().then(res => setCurrentGoal(res))
    }, [goalId])


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
                    <input type="integer" name="Current Weight" required autoFocus className="form-control"
                    value={currentGoal.currentWeight}
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Goal Weight: </label>
                    <input type="integer" name="description" required className="form-control"
                        value={currentGoal.goalWeight}
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Timeframe: </label>
                    <input type="datefield" name="timeframe" required className="form-control"
                        value={currentGoal.timeframe}
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
                    UpdateGoal(goal)
                        .then(() => navigate("/home"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}