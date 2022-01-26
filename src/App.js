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
import TourDetails from "./Components/Shared/TourDetails/TourDetails";
import TourVlogs from "./Components/Home/TourVlogs/TourVlogs";
import Contact from "./Components/Home/Contact/Contact";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/tours"> <TourVlogs></TourVlogs> </Route>
          <Route path="/contact"> <Contact></Contact> </Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <Route path="/tourDetails/:id"> <TourDetails></TourDetails> </Route>
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
