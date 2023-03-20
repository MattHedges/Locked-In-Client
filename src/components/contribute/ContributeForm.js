// import { useState, useEffect } from "react"
// import { useNavigate } from 'react-router-dom'
// import { createExercise } from "../../managers/ExerciseManager"
// import { getEquipment } from "../../managers/EquipmentManager"
// import { getDifficulty } from "../../managers/DifficultyManager"
// import { getMuscleGroups } from "../../managers/ExerciseManager"



// export const ContributeForm = () => {
//     const navigate = useNavigate()
//     const [equipment, setEquipment] = useState([])
//     const [difficulty, setDifficulty] = useState([])
//     const [muscleGroups, setMuscleGroups] = useState([])
//     const [currentExercise, setCurrentExercise] = useState({
//         name: "",
//         description: "",
//         genre: 0
//     })

//     useEffect(() => {
//         getEquipment().then(res => setEquipment(res))
//     }, [])

//     useEffect(() => {
//         getDifficulty().then(res => setDifficulty(res))
//     }, [])

//     useEffect(() => {
//         getMuscleGroups().then(res => setMuscleGroups(res))
//     }, [])

//     const changeGameState = (event) => {
//         const copy = { ...currentExercise }
//         copy[event.target.name] = event.target.value
//         setCurrentExercise(copy)
//     }

//     return (
//         <form className="gameForm">
//             <h2 className="gameForm__title">Register New Game</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="name">Game Name: </label>
//                     <input type="text" name="name" required autoFocus className="form-control"
//                         value={currentGame.name}
//                         onChange={changeGameState}
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Game Description: </label>
//                     <input type="text" name="description" required className="form-control"
//                         value={currentGame.description}
//                         onChange={changeGameState}
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                 <label className="label">Genre of Game: </label>
//                 <select
//                         name="genre"
//                         className="form-control"
//                         value={currentGame.game_type}
//                         onChange={(event) => {
//                             const copy = { ...currentGame }
//                             copy.genre = parseInt(event.target.value)
//                             setCurrentGame(copy)
//                         }}>
//                         <option value="0">Choose:</option>
//                         {genres.map(genre => ( 
//                                     <option key={`genre--${genre.id}`} value={genre.id} name={genre.genre}>{genre.genre}</option>                         
//                             ))}
//                     </select>
//                 </div>
//             </fieldset>


//             <button type="submit"
//                 onClick={evt => {
//                     // Prevent form from being submitted
//                     evt.preventDefault()

//                     const game = {
//                         name: currentGame.name,
//                         description: currentGame.description,
//                         genre: currentGame.genre
//                     }

//                     // Send POST request to your API
//                     createGame(game)
//                         .then(() => navigate("/games"))
//                 }}
//                 className="btn btn-primary">Create</button>
//         </form>
//     )
// }


// // use this to create a dropdown of equipment, and muscle groups in form. see gameform from either level up or gamerrater app for potenital need of use effect statements
// <fieldset>
//                 <div className="form-group">
//                 <label className="label">Timeframe: </label>
//                 <select
//                         name="timeframe"
//                         className="form-control"
//                         value={currentGame.game_type}
//                         onChange={(event) => {
//                             const copy = { ...currentGoal }
//                             copy.genre = parseInt(event.target.value)
//                             setCurrentGame(copy)
//                         }}>
//                         <option value="0">Choose:</option>
//                         {genres.map(genre => ( 
//                                     <option key={`genre--${genre.id}`} value={genre.id} name={genre.genre}>{genre.genre}</option>                         
//                             ))}
//                     </select>
//                 </div>
//             </fieldset>