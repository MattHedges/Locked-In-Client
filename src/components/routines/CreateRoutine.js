import React, { useEffect, useState } from "react"
import { getExercises } from "../../managers/ExerciseManager"
import { createRoutine } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import "./CreateRoutine.css"

export const CreateRoutine = (props) => {
    const navigate = useNavigate()
    const user = localStorage.getItem("user")
    const [ routine, setRoutine ] = useState({
        name: "",
        user: 0
    })

    const changeRoutineState = (event) => {
                const copy = { ...routine }
                copy[event.target.name] = event.target.value
                setRoutine(copy)
            }
    return (
            <form className="routineForm">
                <h2 className="routineForm__title">Register New Routine</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Routine Name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            onChange={changeRoutineState}
                        />
                    </div>
                </fieldset> 
                <button
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const routine1 = {
                        name: routine.name,
                        user: user
                    }

                    // Send POST request to your API
                    createRoutine(routine1)
                        .then(() => navigate("/exercises"))
                }}
                className="btn btn-primary">Submit</button>
    </form>
        )
}