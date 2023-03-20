export const getEquipment = () => {
    return fetch("http://localhost:8000/equipment", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}


export const getGenres = () => {
    return fetch("http://localhost:8000/genres", { 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then((response => response.json()))
}



export const getSingleEquipment = (equipmentId) => {
    return fetch(`http://localhost:8000/equipment/${equipmentId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lockedin_user")}`
        }
    })
        .then(response => response.json())
}

