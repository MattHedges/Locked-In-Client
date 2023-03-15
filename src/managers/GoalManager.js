
export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}
export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
}

export const getGenres = () => {
    return fetch("http://localhost:8000/genres", { 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then((response => response.json()))
}

export const UpdateGame = (game, gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
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

export const deleteGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
}