import React, { useEffect, useState } from "react"
import { getGoals } from "../../managers/GoalManager"
import { getRoutines } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { deleteGoal } from "../../managers/GoalManager"
import { getSingleRoutine } from "../../managers/RoutineManager"

export const Homepage = (props) => {
    const [ goals, setGoals ] = useState([])
    const [routineList, setRoutineList] = useState([])
    const [ routines, setRoutines ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getRoutines().then(data => setRoutines(data))
    }, [])

    useEffect(() => {
        getGoals().then(data => setGoals(data))
    }, [])

    useEffect(() => {
        getSingleRoutine().then(data => setRoutineList(data))
    }, [])

    return  ( <>
        <article className="goals">
            {
                goals.map(goal => {
                    return <section key={`goal--${goal.id}`} className="goal">
                        <div className="goal__currentWeight">Current Weight: {goal.currentWeight}</div>
                        <div className="goal__goalWeight">Goal Weight: {goal.goalWeight}</div>
                        <div className="goal__timeframe">Completion Date: {goal.timeframe}</div>
                        <div className="goal__footer">
                            <button
                                onClick={() => {
                                    navigate({ pathname: `/editgoal/${goal.id}`})
                                }}>Edit</button>
                        </div>
                        <div className="goal__footer">
                            <button
                                onClick={() => {
                                    deleteGoal(goal.id)
                                    .then(window.location.reload(false))
                                }}>Delete</button>
                        </div>
                    </section>
                })
            }
        </article>

        <article className="routines">
        {
            routines.map(routine => {
                    return routine.exercise_routine.map(workout => {
                            return <section key={`exerciseRoutine--${workout.exercise.id}`} className="exerciseRoutine">
                                <div className="routine__exerciseRoutine">{workout.exercise.name}</div>
                                <div className="routine__exerciseRoutine">{workout.exercise.description}</div>
                                <video width="750" height="500" controls>
      <source src={workout.exercise.video} />

</video>
                                <div></div>
                            </section>
                        })
                    })
                }
        </article>
        
</>
)
} 

