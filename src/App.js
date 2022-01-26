import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Nopage from "./Components/Shared/Nopage/Nopage";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/Route/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Products/Products";
import TourDetails from "./Components/Shared/TourDetails/TourDetails";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/products"> <Products></Products> </Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <PrivateRoute path="/tourDetails/:id"> <TourDetails></TourDetails> </PrivateRoute>
          <PrivateRoute path="/dashboard"> <Dashboard></Dashboard> </PrivateRoute>


          <Route path='/404'><Nopage></Nopage></Route>
          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
