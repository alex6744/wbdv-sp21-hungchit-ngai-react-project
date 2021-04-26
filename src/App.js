import {BrowserRouter,Route,Redirect} from "react-router-dom";
import Home from "./components/Home";

import MovieDetails from "./components/details/movieDetails";
import SearchTV from "./components/search/searchTV";
import TvDetails from "./components/details/tvDetails";
import Main from "./components/manager"
import Search from "./components/search/search";
import Manager from "./components/manager";
import {combineReducers, createStore} from "redux";
import userReducer from "./reducers/user-reducer";
import {Provider} from "react-redux";
const reducer=combineReducers({
    userReducer:userReducer
})
const store=createStore(reducer)
function App() {



  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/*<Route exact={true}*/}
        {/*       path={["/"]}>*/}
        {/*  <Home/>*/}
        {/*</Route>*/}


        <Route exact={true}
               path={["/","/home","/:layout","/:layout/:type","/:layout/:type/:title"]}>
            <Provider store={store}>
                <Manager/>
            </Provider>

        </Route>
          <Route exact path="/">
              <Redirect to="/home" />
          </Route>


      </BrowserRouter>
    </div>
  );
}

export default App;
