import DashBoard from "./dashBoard";
import LoginPage from "./loginPage";
import CartItems from "./cartInfo";
import ProtectRoute from "./RouteProtect";
import { BrowserRouter as  Router,Route , Routes } from "react-router-dom";

function App(){
  

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                {/* ProtectedRoute */}
                <Route element={<ProtectRoute/>}>
                   <Route path="/dashboard" element={<DashBoard/>}/>
                   <Route path="/cartitems" element={<CartItems/>}/>
                </Route>
              
            </Routes>
        </Router>
    )
}

export default App