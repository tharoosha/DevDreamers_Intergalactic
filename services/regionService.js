import http from "../http-common"

const entityName = "region"

const getRegions = () => {
    return http.get(`${entityName}/`)
}