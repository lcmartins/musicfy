import React from "react";
import "./App.scss";
import { Router, Switch, Route } from 'react-router-dom';
import MainLeftNav from "./mainLeftNav/MainLeftNav";
import SearchResult from "./searchResult/SearchResult";
import MainPlaying from './mainPlaying/MainPlaying';
import history from "../history";
import MainPlayer from "./mainPlayer/MainPlayer";
import AlsoLike from "./alsoLike/AlsoLike"
function AppContainer() {
  return (
    <div className="app-container">
      <MainLeftNav />
      <section className="main-section" >
        {/* <ArtistPlayingGranHeader /> */}
        <Router history={history}>   
          <Switch>
            <Route path="/" exact component={MainPlaying} />
            <Route path="/nowPlaying" exact component={MainPlayer}/>
            <Route path="/search" exact render={(props)=> <SearchResult {...props} />} />
            <Route path="/alsolike" exact component={AlsoLike}/>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default AppContainer;
