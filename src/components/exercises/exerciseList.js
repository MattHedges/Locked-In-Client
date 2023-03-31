import React, { useEffect, useState } from "react"
import { getExercises, getMuscleGroups, getSingleMuscleGroups } from "../../managers/ExerciseManager"
import { getRoutinesByUser } from "../../managers/RoutineManager"
import "./exercises.css"
import { useNavigate } from "react-router-dom"
import { createExerciseRoutine } from "../../managers/ExerciseRoutineManager"


// add a message to show users that they have successfully added an exercise to their routine. 

export const ExerciseList = (props) => {
    const [ exercises, setExercises ] = useState([])
    const [ muscleGroups, setMuscleGroups ] = useState([])
    const user = localStorage.getItem("user")
    const navigate = useNavigate()
    const [ routines, setRoutines ] = useState([
        {
            id: 0,
            name: ""
        }
    ])
    const [ exerciseRoutines, setExerciseRoutines ] = useState({
        exercise: 0,
        routine: 0
    })

    useEffect(() => {
        getRoutinesByUser(user).then(data => setRoutines(data))
    }, [])

    useEffect(() => {
        createExerciseRoutine().then(data => setExerciseRoutines(data))
    }, [])

    useEffect(() => {
        getMuscleGroups().then(data => setMuscleGroups(data))
    }, [])

    const handleClick = (newExerciseRoutine) => {
        createExerciseRoutine(newExerciseRoutine)
        // getExercises().then(data => setExercises(data))
        // getRoutinesByUser(user).then(data => setRoutines(data))
    }
    return (
        <article className="exercises">
            <button className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            navigate(`/createroutine`)
                        }}
                        >Create Routine</button>
            <fieldset>
                <div className="muscleform-group">
                    <label htmlFor="muscleGroup-dropdown"></label>
                    <select
                        onClick={evt => {
                                getSingleMuscleGroups(evt.target.value)
                                .then(data => setExercises(data))
                        }}
                        >
                    <option value={0} type="select" className="form-dropdown" required>Select Muscle Group</option>
                    {
                        muscleGroups.map(
                            (muscle) => {
                                return <option key={`muscle--${muscle.id}`} value={muscle.id}>{muscle.muscle}</option>
                            }
                        )
                    }
                    </select>
                </div>
            </fieldset>
            {
                exercises.map(exercise => {
                    return <section key={`exercise--${exercise.id}`} className="exercise">
                        
                        <div className="exercise__title">Exercise: {exercise.name}</div><br></br>
                        <p className="exercise__description">Description:<br></br> {exercise.description}</p><br></br>
                        <div className="exercise__difficulty">Difficulty: {exercise.difficulty.description}</div><br></br>
                        <div className="exercise__musclegroup">Muscle Group: {exercise.muscleGroup.muscle}</div><br></br>
                        <div className="exercise__equipment">Equipment Needed: {exercise.equipment.name}</div><br></br>
                        <a href={exercise.video} className="btn btn-2 btn-sep icon-create" target="_blank">Form Demonstration</a>
                        
                        {
                            <fieldset>
                                <div className="form-group">
                                <label htmlFor="routine-dropdown"></label>
                                <select className="dropdown"
                                onChange={(evt) => {
                                    const copy = {...setExerciseRoutines}
                                    copy.exercise = exercise.id
                                    copy.routine= parseInt(evt.target.value)
                                    
                                    handleClick(copy)}}>
                                        
                                <option value={0} type="select" className="form-dropdown" required>Select a Routine</option>
                                {
                                    routines.map(
                                        (routine) => {
                                            return <option 
                                            key={`routine--${routine.id}`} value={routine.id}>{routine.name}</option>
                                        }
                                    )
                                }
                                </select>
                            </div>
                        </fieldset>
                        }
                    
                    </section>
                })
            }
        </article>
    )
}
