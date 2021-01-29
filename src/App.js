import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import MoviePage from "./Components/MoviePage/MoviePage";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Route path="/" component={HomePage} exact></Route>

        <Route path="/movie" component={MoviePage}></Route>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
