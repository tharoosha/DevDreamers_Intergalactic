import http from "../http-common"

const entityName = "auth"

const login = (data) => {
    return http.post(`${entityName}/login`, data)
}

const register = (data) => {
    return http.post(`${entityName}/register`, data)
}

const logout = () => {
    return http.post(`${entityName}/logout`)
}

export {
    login,
    register,
    logout
}