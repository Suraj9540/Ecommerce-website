import DashBoard from "./dashBoard";
import LoginPage from "./loginPage";
import CartItems from "./cartInfo";
import { BrowserRouter as  Router,Route , Routes } from "react-router-dom";

function App(){
  

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path="/cartitems" element={<CartItems/>}/>
            </Routes>
        </Router>
    )
}

export default App