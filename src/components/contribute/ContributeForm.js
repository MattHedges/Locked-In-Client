import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createExercise } from "../../managers/ExerciseManager"
import { getEquipment } from "../../managers/EquipmentManager"
import { getDifficulty } from "../../managers/DifficultyManager"
import { getMuscleGroups } from "../../managers/ExerciseManager"



export const ContributeForm = () => {
    const navigate = useNavigate()
    const [equipment, setEquipment] = useState([])
    const [difficulty, setDifficulty] = useState([])
    const [muscleGroups, setMuscleGroups] = useState([])
    const [currentExercise, setCurrentExercise] = useState({
        name: "",
        description: "",
        difficulty: 0,
        muscleGroup: 0,
        equipment: 0,
        video: ""
    })

    useEffect(() => {
        getEquipment().then(res => setEquipment(res))
    }, [])

    useEffect(() => {
        getDifficulty().then(res => setDifficulty(res))
    }, [])

    useEffect(() => {
        getMuscleGroups().then(res => setMuscleGroups(res))
    }, [])

    const changeExerciseState = (event) => {
        const copy = { ...currentExercise }
        copy[event.target.name] = event.target.value
        setCurrentExercise(copy)
    }

    return (
        <form className="exerciseForm">
            <h2 className="exerciseForm__title">Register New Exercise</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Exercise Name: </label>
                    <input type="text" name="name" required className="form-control"
                        
                        onChange={changeExerciseState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description"> Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentExercise.description}
                        onChange={changeExerciseState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label className="label">Level of Difficulty: </label>
                <select
                        name="Muscle Group"
                        className="form-control"
                        value={currentExercise.difficulty}
                        onChange={(event) => {
                            const copy = { ...currentExercise }
                            copy.difficulty = parseInt(event.target.value)
                            setCurrentExercise(copy)
                        }}>
                        <option value="0">Choose Difficulty:</option>
                        {difficulty.map(difficulty => ( 
                                    <option key={`difficulty--${difficulty.id}`} value={difficulty.id} name={difficulty.description}>{difficulty.description}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label className="label">Targeted Muscle Group: </label>
                <select
                        name="Muscle Group"
                        className="form-control"
                        value={currentExercise.muscleGroup}
                        onChange={(event) => {
                            const copy = { ...currentExercise }
                            copy.muscleGroup = parseInt(event.target.value)
                            setCurrentExercise(copy)
                        }}>
                        <option value="0">Choose Muscle Group:</option>
                        {muscleGroups.map(muscleGroup => ( 
                                    <option key={`muscleGroup--${muscleGroup.id}`} value={muscleGroup.id} name={muscleGroup.muscle}>{muscleGroup.muscle}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label className="label">Equipment Needed: </label>
                <select
                        name="equipment"
                        className="form-control"
                        value={currentExercise.equipment}
                        onChange={(event) => {
                            const copy = { ...currentExercise }
                            copy.equipment = parseInt(event.target.value)
                            setCurrentExercise(copy)
                        }}>
                        <option value="0">Choose:</option>
                        {equipment.map(equipment => ( 
                                    <option key={`equipment--${equipment.id}`} value={equipment.id} name={equipment.name}>{equipment.name}</option>                         
                            ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Video Link: </label>
                    <input type="text" name="video" required autoFocus className="form-control"
                        value={currentExercise.video}
                        onChange={changeExerciseState}
                    />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const exercise = {
                        name: currentExercise.name,
                        description: currentExercise.description,
                        genre: currentExercise.genre,
                        muscleGroup: currentExercise.muscleGroup,
                        difficulty: currentExercise.difficulty,
                        equipment: currentExercise.equipment,
                        video: currentExercise.video
                    }

                    // Send POST request to your API
                    createExercise(exercise)
                        .then(() => navigate("/exercises"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}