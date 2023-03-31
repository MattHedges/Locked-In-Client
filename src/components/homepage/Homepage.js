import React, { useEffect, useState } from "react"
import { getGoals, getGoalsByUser } from "../../managers/GoalManager"
import { getRoutinesByUser, getSingleRoutineByUser } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { deleteGoal } from "../../managers/GoalManager"
import { getSingleRoutine } from "../../managers/RoutineManager"
import { UpdateExerciseRoutine } from "../../managers/ExerciseRoutineManager"
import { deleteRoutine } from "../../managers/RoutineManager"
import "./homepage.css"

// add a section that shows a users contributions to the site. 

export const Homepage = (props) => {
    const navigate = useNavigate()
    const [ goals, setGoals ] = useState([])
    const [routineLists, setRoutineList] = useState([])
    const [ routines, setRoutines ] = useState([])
    const user = localStorage.getItem("user")

    useEffect(() => {
        getRoutinesByUser(user).then(data => setRoutineList(data))
    }, [])

    useEffect(() => {
        getGoalsByUser(user).then(data => setGoals(data))
    }, [])






    return  ( <>
        <article className="goals">
            <button className="btn btn-primary"
                            onClick={() => {
                                navigate(`/goals`)
                            }}
                            >Create Goal</button>
            {
                goals.map(goal => {
                    return <section key={`goal--${goal.id}`} className="goal">
                        <div className="goal__currentWeight">Current Weight: {goal.currentWeight}</div>
                        <div className="goal__goalWeight">Goal Weight: {goal.goalWeight}</div>
                        <div className="goal__timeframe">Completion Date: {goal.timeframe}</div>
                        
                            
                            <button className = "btn btn-primary"
                                onClick={() => {
                                    navigate({ pathname: `/editgoal/${goal.id}`})
                                }}>Edit</button>
                        
                            <button className="btn btn-primary"
                                onClick={() => {
                                    deleteGoal(goal.id)
                                    .then(window.location.reload(false))
                                }}>Delete</button>
                        <div className="goal__footer">
                        </div>
                    </section>
                })
            }
        </article>

        <article className="routines">
        <fieldset>
                <div className="routineform-group">
                    <label htmlFor="routine-dropdown"></label>
                    <select
                        onClick={evt => {
                                getSingleRoutineByUser(user, evt.target.value)
                                .then(data => setRoutines(data))
                        }}
                        >
                    <option value={0} type="select" className="routine-dropdown" required>Select Routine</option>
                    {
                        routineLists.map(
                            (routine) => {
                                return <option key={`routine--${routine.id}`} value={routine.name}>{routine.name}</option>
                            }
                        )
                    }
                    </select>
                </div>
            </fieldset>
        {
            routines.map(routine => {
                    return routine.exercise_routine.map(workout => {
                            return <section key={`exerciseRoutine--${workout.exercise.id}`} className="exerciseRoutine">
                                <div className="routineName">Routine: {routine.name}</div> 
                                <div className="routine__exerciseName">{workout.exercise.name}</div>
                                <div className="routine__exerciseDescription">{workout.exercise.description}</div>
                                <a href={workout.exercise.video} className="btn btn-primary" target="_blank">Form Demonstration</a>
        <button 
                onClick={evt => {
                    UpdateExerciseRoutine(workout.id)
                        .then(() => navigate("/exercises"))
                }}
                className="btn btn-primary">Replace Exercise</button>
                                <div></div>
                            </section>
                        })
                    })
                }
        </article>
        
</>
)
}
