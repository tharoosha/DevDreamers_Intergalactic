import http from "../http-common"

const entityName = "trip"

const getTrips = (data) => {
    return http.get(`${entityName}/`, {
        params: data
    })
}

const getTripById = (id) => {
    return http.get(`${entityName}/${id}`)
}

export {
    getTrips,
    getTripById
}