import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
// import Navbars from "./components/navbar/Navbar";
import Home from "./Home/Home";
import Detail from "./containers/user_pages/detail/Detail";
import Register from "./containers/user_pages/register/Register";
import Login from "./containers/user_pages/login/Login";
import Payment from "./containers/user_pages/payment/Payment";
import IncomTrip from "./containers/admin_pages/incomTrip/incomTrip";
import ListTransaction from "./containers/admin_pages/list_transaction/ListTransaction";
import Profile from "./containers/user_pages/profile/Profile";
import ModalApproved from "./containers/admin_pages/modal_approved/ModalApproved";
import AddTrip from "./containers/admin_pages/add_trip/AddTrip";


function App() {
  return (
    <Router>
      {/* <Navbars/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail" element={<Detail/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/profile" element={<Profile/>}/>

        <Route exact path="/list_transaction" element={<ListTransaction/>}/>
        <Route exact path="/incom_trip" element={<IncomTrip/>}/>
        <Route exact path="/modal_approved" element={<ModalApproved/>}/>
        <Route exact path="/add_trip" element={<AddTrip/>}/>

      </Routes>
    </Router>
  );
}

export default App;
