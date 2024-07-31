import { Outlet , Navigate } from "react-router-dom";


function ProtectRoute(){
    
    // const navigate = useNavigate()

    const isLoggedIn = localStorage.getItem('userInfo')
    console.log(isLoggedIn , 'islogin')
    return isLoggedIn === null ? <Navigate to="/"/> : <Outlet/>
}


export default ProtectRoute