import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/search";
import Details from "./components/details";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route exact={true}
               path={["/"]}>
          <Home/>
        </Route>
        <Route exact={true}
               path={["/search","/search/:title"]}>
          <Search/>
        </Route>
        <Route exact={true}
               path={["/details/:movieId"]}>
          <Details/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
