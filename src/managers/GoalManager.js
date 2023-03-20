
export const getGoals = () => {
    return fetch("http://localhost:8000/goals", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}
export const createGoal = (goal) => {
    return fetch("http://localhost:8000/goals", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(goal)
    })
}

export const UpdateGoal = (goal, goalId) => {
    return fetch(`http://localhost:8000/goals/${goalId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(goal)
    })
}

export const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}

export const deleteGoal = (id) => {
    return fetch(`http://localhost:8000/goals/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
}