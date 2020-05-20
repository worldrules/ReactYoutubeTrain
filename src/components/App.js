import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const KEY = "AIzaSyBC5QBpNk711Ign99PSO4HFR00HyVLBJxU";

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    let datavideos = response.data.items;
    this.setState({ videos: datavideos });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length}
      </div>
    );
  }
}
