import { GET_USER, USER_FAIL, USER_LOGIN, USER_REGISTER,LOGOUT } from "../types"


const initState={
    user:null,
    loading:true,
    isAuth:false
}

function authReducer(state=initState,{type,payload}){
    switch (type) {
        case USER_REGISTER:
        case USER_LOGIN:
            localStorage.setItem('token',payload.token)
  return {
      ...state,user:payload.user,isAuth:true,loading:false
  }
     case GET_USER:
         return {
            ...state,user:payload,isAuth:true,loading:false
        }
    case USER_FAIL:
    case LOGOUT:
        localStorage.removeItem('token')
        return {
            ...state,user:null,isAuth:false,loading:false
        }
        default:
      return state
    }
}
export default authReducer