export const createExerciseRoutine = (exerciseRoutine) => {
    return fetch("http://localhost:8000/exerciseRoutines", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(exerciseRoutine)
    })
}
export const deleteExercise = (id) => {
    return fetch(`http://localhost:8000/exerciseRoutines/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
}