import React, { useEffect, useState } from "react"
import { getExercises } from "../../managers/ExerciseManager"
import { getRoutines } from "../../managers/RoutineManager"

import { useNavigate } from "react-router-dom"
import { createExerciseRoutine } from "../../managers/ExerciseRoutineManager"

export const ExerciseList = (props) => {
    const [ exercises, setExercises ] = useState([])
    const [ routines, setRoutines ] = useState([])
    const navigate = useNavigate()
    const [ exerciseRoutines, setExerciseRoutines ] = useState({
        exercise: 0,
        routine: 0
    })

    useEffect(() => {
        getExercises().then(data => setExercises(data))
    }, [])

    useEffect(() => {
        getRoutines().then(data => setRoutines(data))
    }, [])

    useEffect(() => {
        createExerciseRoutine().then(data => setExerciseRoutines(data))
    }, [])


    return (
        <article className="exercises">
            <button className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            navigate(`/createroutine`)
                        }}
                        >Create Routine</button>
            {
                exercises.map(exercise => {
                    return <section key={`exercise--${exercise.id}`} className="exercise">
                        
                        <div className="exercise__title">Exercise Name: {exercise.name}</div>
                        <div className="exercise__players">Exercise Description: {exercise.description}</div>
                        <div className="exercise__game">Difficulty: {exercise.difficulty.description}</div>
                        <div className="exercise__datetime">Targeted Muscle Group: {exercise.muscleGroup.muscle}</div>
                        <div className="exercise__datetime">Equipment Needed: {exercise.equipment.name}</div>
                        <div className="exercise__datetime">Form Demonstration: {exercise.video}</div>
                        {
                            <fieldset>
                                <div className="form-group">
                                <label htmlFor="routine-dropdown">Routine</label>
                                <select
                                onChange={(evt) => {
                                    const copy= {...exerciseRoutines}
                                        copy.patient = parseInt(evt.target.value)
                                        setRoutines(copy)}}>
                                <option value={0} type="select" className="form-dropdown" required>Select a Routine</option>
                                {
                                    routines.map(
                                        (routine) => {
                                            return <option key={`routine--${routine.id}`} value={routine.id}>{routine.name}</option>
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