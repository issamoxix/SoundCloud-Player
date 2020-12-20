import React from "react";
import "./App.css";
import Search from "./components/Search";
import SongPlayer from "./components/SongPlayer";

function App() {
  return (
    <div className="App">
      <SongPlayer />
      <Search />
    </div>
  );
}

export default App;
