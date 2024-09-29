import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SubMain from "./components/SubMain";
import { Container } from "react-bootstrap";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Container fluid className="px-4">
          <SubMain />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movie-detail/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
