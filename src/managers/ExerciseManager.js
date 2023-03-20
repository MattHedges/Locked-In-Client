
export const getExercises = () => {
    return fetch("http://localhost:8000/exercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}
export const createExercise = (exercise) => {
    return fetch("http://localhost:8000/exercises", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(exercise)
    })
}

export const updateExercise = (exercise, exerciseId) => {
    return fetch(`http://localhost:8000/exercises/${exerciseId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(exercise)
    })
}

export const getSingleExercise = (exerciseId) => {
    return fetch(`http://localhost:8000/exercises/${exerciseId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}

export const deleteExercise = (id) => {
    return fetch(`http://localhost:8000/exercises/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
}

export const getMuscleGroups = () => {
    return fetch("http://localhost:8000/musclegroups", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}