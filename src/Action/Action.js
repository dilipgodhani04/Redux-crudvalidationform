 import { ADD_USER, DELETE_USER,EDIT_USER,UPDATE_USER } from "./Constant"
export const addUser =(data)=> {
    return{
        type:ADD_USER,
        payload:data
    }
}

export const deletUser =(id)=>{
    // console.log(id,"id");
    return {
        type:DELETE_USER,
        payload:id
    }
}
export const editUser=(id)=>{
 return{
     type:EDIT_USER,
     paylaod:id
 }
}

export const updateUser=(id)=>{
    return {
        type:UPDATE_USER,
        payload:id
    }
}