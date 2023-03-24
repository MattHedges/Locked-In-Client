import React, { useEffect, useState } from "react"
import { getRoutines } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { createGoal } from "../../managers/GoalManager"
import { UpdateGoal } from "../../managers/GoalManager"
import { getSingleGoal } from "../../managers/GoalManager"
import { Params, useParams } from "react-router"
import "./GoalEdit.css"

export const GoalEdit = () => {
    const navigate = useNavigate()
    const { goalId } = useParams()
    const user = localStorage.getItem("user")
    const [currentGoal, setCurrentGoal] = useState({
        user: user,
        currentWeight: "",
        goalWeight: "",
        timeframe: ""
    })

    useEffect(() => {
        getSingleGoal(goalId).then(res => setCurrentGoal(res))
    }, [goalId])


    const changeGoalState = (event) => {
        const copy = { ...currentGoal }
        copy[event.target.name] = event.target.value
        setCurrentGoal(copy)
    }

    return (
        <article>

            <form className="goalForm">
                <h2 className="goalForm__title">My New Goal</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="currentWeight">Current Weight in Pounds: </label>
                        <input type="integer" name="currentWeight" required autoFocus className="form-control"
                        value={currentGoal.currentWeight}
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
                            value={currentGoal.timeframe}
                            onChange={changeGoalState}
                        />
                    </div>
                </fieldset>

                <button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const goal = {
                            user: parseInt(user),
                            currentWeight: currentGoal.currentWeight,
                            goalWeight: currentGoal.goalWeight,
                            timeframe: currentGoal.timeframe
                        }

                        // Send POST request to your API
                        UpdateGoal(goal, goalId)
                            .then(() => navigate("/home"))
                    }}
                    className="btn btn-primary">Update</button>
            </form>
            </article>
    )
}