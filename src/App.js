import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvent from "./component/Admin/AddEvent/AddEvent";
import Base from "./component/Admin/Base/Base";
import Dashboard from "./component/Admin/Dashboad/Dashboard";
import ManageEvent from "./component/Admin/ManageEvent/ManageEvent";
import OrderList from "./component/Admin/OrderList/OrderList";
import Login from "./component/Auth/Login";
import About from "./component/Body/About/About";
import Contact from "./component/Body/Contact/Contact";
import Home from "./component/Body/Home/Home";
import Order from "./component/Body/Order/Order";
import Tour from "./component/Body/Tours/Tour/Tour";
import TourDetails from "./component/Body/Tours/TourDetails/TourDetails";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Profile from "./component/Profile/Profile";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route exact path="tours" element={<Tour />}></Route>
            <Route exact path="contact" element={<Contact />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/tours/:id" element={<TourDetails />}></Route>
              <Route path="/order/:id" element={<Order />}></Route>
              <Route
                path="dashboard"
                element={
                  <Base>
                    <Dashboard></Dashboard>
                  </Base>
                }
              ></Route>
              <Route
                path="addevent"
                element={
                  <Base>
                    <AddEvent></AddEvent>
                  </Base>
                }
              ></Route>
              <Route
                path="manageevent"
                element={
                  <Base>
                    <ManageEvent></ManageEvent>
                  </Base>
                }
              ></Route>
              <Route
                path="orderlist"
                element={
                  <Base>
                    <OrderList></OrderList>
                  </Base>
                }
              ></Route>

              <Route path="profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
