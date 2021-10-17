import axios from 'axios'
// import { getCookie, setCookie } from '../pages/helpers/Helperfunctions';;

const URL = 'https://jobs-api.squareboat.info/api/v1/'

const API = axios.create({
    baseURL: URL,
    headers: {

    }
})

const SignUpApi =  (email, password, userRole, confirmPassword, name, skills) => {
   console.log("api ",email, password, userRole, confirmPassword, name, skills)
    return  API.post('/auth/register/', {
        email,
        password,
        userRole,
        password,
        confirmPassword,
        name,
        skills
    })
}

const LoginApi = (email, password,) => {
    return API.post('/auth/login/', {
        email,
        password
    })
}
const PostData = (token, name, description, location) => {
    console.log(token, name, description, location);
    return API.post('/jobs/', {
        title: name,
        description: description,
        location: location
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization:  token //the token is a variable which holds the token
        }

    })
}

const VerifyPasswordToken = (token) => {
    return API.get(`/auth/resetpassword/${token}`, {
    })
}

const ChangePassword = (token, password, confirmPassword) => {
    return API.get(`/auth/resetpassword/${token}`, {
        password,
        token,
        confirmPassword
    })
}
// Get Reset Password Token

const GetResetPasswordToken = (email) => {
    return API.get(`/auth/resetpassword?email=${email}`, {
    })
}



const GetAllJobs = (email) => {
    return API.get(`/jobs`, {
    })
}
export {
    GetAllJobs,
    LoginApi,
    PostData,
    SignUpApi,
    VerifyPasswordToken,
    ChangePassword,
    GetResetPasswordToken
}

