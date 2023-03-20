import React, { useEffect, useState } from "react"
import { getGoals } from "../../managers/GoalManager"
import { getRoutines } from "../../managers/RoutineManager"
import { useNavigate } from "react-router-dom"
import { getGoals } from "../../managers/GoalManager"

export const GoalForm = () => {
    const navigate = useNavigate()
    const [currentGoal, setCurrentGoal] = useState({
        currentWeight: "",
        goalWeight: "",
        timeframe: ""
    })

    useEffect(() => {
        getGoals().then(res => setEquipment(res))
    }, [])


    const changeGoalState = (event) => {
        const copy = { ...currentgoal }
        copy[event.target.name] = event.target.value
        setCurrentgoal(copy)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">My New Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="currentWeight">Current Weight: </label>
                    <input type="integer" name="Current Weight" required autoFocus className="form-control"
                        value={currentGoal.currentWeight}
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Goal Weight: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentGoal.goalWeight}
                        onChange={changeGoalState}
                    />
                </div>
            </fieldset>

{/* create datefield input fieldset to replace genres map bewtween 49 and 63 */}
            <fieldset>
                <div className="form-group">
                <label className="label">Timeframe: </label>
                <select
                        name="timeframe"
                        className="form-control"
                        value={currentGame.game_type}
                        onChange={(event) => {
                            const copy = { ...currentGoal }
                            copy.genre = parseInt(event.target.value)
                            setCurrentGame(copy)
                        }}>
                        <option value="0">Choose:</option>
                        {genres.map(genre => ( 
                                    <option key={`genre--${genre.id}`} value={genre.id} name={genre.genre}>{genre.genre}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        name: currentGame.name,
                        description: currentGame.description,
                        genre: currentGame.genre
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => navigate("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}