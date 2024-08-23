import { Outlet , Navigate } from "react-router-dom";


function ProtectRoute(){
    
    // const navigate = useNavigate()

    const isLoggedIn = localStorage.getItem('userInfo')
    
    return isLoggedIn === null ? <Navigate to="/"/> : <Outlet/>
}


export default ProtectRoute