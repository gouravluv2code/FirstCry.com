import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
const {auth}=useSelector((store)=>store.adminAuth)
return auth? children:<Navigate to={"/adminlogin"} />
}