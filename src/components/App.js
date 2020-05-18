import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends Component {
  onTermSubmit = (term) => {
    const KEY = "AIzaSyBC5QBpNk711Ign99PSO4HFR00HyVLBJxU";

    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
