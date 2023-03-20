export const getSingleDifficulty = (difficultyId) => {
    return fetch(`http://localhost:8000/difficulty/${difficultyId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}

export const getDifficulty = () => {
    return fetch("http://localhost:8000/difficulty", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}