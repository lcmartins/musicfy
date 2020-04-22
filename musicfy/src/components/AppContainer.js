import React from "react";
import "./App.scss";
import { Router, Switch, Route } from 'react-router-dom';
import ArtistPlayingGranHeader from "./header/ArtistPlayingGranHeader";
import MainLeftNav from "./mainLeftNav/MainLeftNav";
import SearchResult from "./searchResult/SearchResult";
import MainPlaying from './mainPlaying/MainPlaying';
import history from "../history";
function AppContainer() {
  return (
    <div className="app-container">
      <MainLeftNav />
      <section className="main-section" >
        {/* <ArtistPlayingGranHeader /> */}
        <Router history={history}>   
          <Switch>
            <Route path="/" exact component={MainPlaying} />
            <Route path="/nowPlaying" exact component={ArtistPlayingGranHeader}/>
            <Route path="/search" exact render={(props)=> <SearchResult {...props} />} />
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default AppContainer;
