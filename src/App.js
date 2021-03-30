import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home";
import SearchMovie from "./components/searchMovie";
import MovieDetails from "./components/movieDetails";
import SearchTV from "./components/searchTV";
import TvDetails from "./components/tvDetails";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route exact={true}
               path={["/"]}>
          <Home/>
        </Route>
        <Route exact={true}
               path={["/search/movie","/search/movie/:title"]}>
          <SearchMovie/>
        </Route>
        <Route exact={true}
               path={["/search/tv","/search/tv/:title"]}>
          <SearchTV/>
        </Route>
        <Route exact={true}
               path={["/details/movie/:movieId"]}>
          <MovieDetails/>
        </Route>
        <Route exact={true}
               path={["/details/tv/:tvId"]}>
          <TvDetails/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
