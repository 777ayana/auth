import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://jwt-ulios-test.herokuapp.com',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export const authScene = {
    regist(userData) {
        return instanse.post('/auth/reg', userData).then(responce => responce.data)
    },
    login(userData) {
        return instanse.post('/auth/sign-in', userData).then(responce => responce.data)
    }

}