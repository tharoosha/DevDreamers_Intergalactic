import http from "../http-common"

const entityName = "booking"

const makeBooking = (tripId, spaceCraftId, data) => {
    return http.post(`${entityName}/${tripId}/${spaceCraftId}`, data)
}


export {
    makeBooking
}