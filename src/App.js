import {BrowserRouter,Route,Redirect} from "react-router-dom";
import Home from "./components/Home";

import MovieDetails from "./components/details/movieDetails";
import SearchTV from "./components/search/searchTV";
import TvDetails from "./components/details/tvDetails";
import Main from "./components/manager"
import Search from "./components/search/search";
import Manager from "./components/manager";
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/*<Route exact={true}*/}
        {/*       path={["/"]}>*/}
        {/*  <Home/>*/}
        {/*</Route>*/}


        <Route exact={true}
               path={["/","/main","/:layout","/:layout/:type","/:layout/:type/:title"]}>

          <Manager/>
        </Route>
          <Route exact path="/">
              <Redirect to="/main" />
          </Route>


      </BrowserRouter>
    </div>
  );
}

export default App;
