import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import MoviePage from "./Components/MoviePage/MoviePage";
import MovieSearch from "./Components/MovieSearch/MovieSearch";

import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Saved from "./Components/Saved/Saved";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} exact></Route>

        <Route path="/movie" component={MoviePage}></Route>
        <Route path="/movies" component={MovieSearch}></Route>
        <Route path="/about">
          <NavBar showSearchBar={true}></NavBar>
          <About></About>
        </Route>
        <Route path="/saved">
          <NavBar showSearchBar={true}></NavBar>
          <Saved></Saved>
        </Route>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
