import axios from 'axios'
import * as actionTypes from '../actionTypes'

export const registerUser = (user) => {
    return (dispatch) => {
        return axios.post("/api/v1/register", user)
            .then((res) => {
                dispatch(successfulUserAuth(res.data))
            })
            .catch(() => {
                dispatch(failedUserAuth())
            })
    }
}

export const authenticateUser = () => {
    return (dispatch) => {
        return axios.post("/api/v1/auth")
            .then((res) => {
                dispatch(successfulUserAuth(res.data))
            })
            .catch((e) => {
                dispatch(failedUserAuth())
            })
    }
}

export const successfulUserAuth = (user) => ({
    type: actionTypes.SUCCESSFUL_USER_AUTH,
    user
})

export const failedUserAuth = () => ({
    type: actionTypes.FAILED_USER_AUTH
})
