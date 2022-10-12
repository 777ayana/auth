import { authScene } from "../../API"
import { setLSToken } from './../../LocalStorage/index';



const initialState = {
    isLoading: false,
    email: null,
    token: null,
}
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const SET_TOKEN = 'SET_TOKEN'
const SET_EMAIL = 'SET_EMAIL'

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_TOKEN:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            }


        default:
            return state
    }
}
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setToken = (token) => ({ type: SET_TOKEN })
const setEmail = (email) => ({ type: SET_EMAIL, email })

export const signUp = (userData) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    authScene.regist(userData)

        .then(data => {
            dispatch(setToken(data.token))
            dispatch(setEmail(data.email))

        })
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}
export const signIn = (userData) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    authScene.login(userData)

        .then(data => {
            dispatch(setToken(data.token))
            dispatch(setEmail(data.email))
            setLSToken(data.token)


        })
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export default userReducer