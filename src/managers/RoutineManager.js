export const getRoutines = () => {
    return fetch("http://localhost:8000/routines", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}
export const createRoutine = (routine) => {
    return fetch("http://localhost:8000/routines", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(routine)
    })
}

export const updateRoutine = (routine, routineId) => {
    return fetch(`http://localhost:8000/routines/${routineId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(routine)
    })
}

export const getSingleRoutine = (routineId) => {
    return fetch(`http://localhost:8000/routines/${routineId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}

export const deleteRoutine = (id) => {
    return fetch(`http://localhost:8000/routines/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
}