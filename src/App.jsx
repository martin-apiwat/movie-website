import { Routes, Route } from "react-router-dom";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";

function App() {
  return (
    <div className="App">
      <h1>Hej</h1>
      <Routes>
        <Route path="/" element={<h3>Home page</h3>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
