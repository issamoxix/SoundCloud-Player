import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongRe from "./SongRe";
import {
  selectQuery,
  selectSearch,
  setSearchState,
} from "../features/appSlice";
const Search = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const SearchState = useSelector(selectSearch);
  const seleQuery = useSelector(selectQuery);
  const handleSearch = async (query) => {
    dispatch(setSearchState({ search: "loading", query: query }));

    const { data } = await axios.get(
      `/search/tracks?q=${query}&sc_a_id=89c71e7048d8b7dbe860af3b3c34ba4d560b4bad&variant_ids=2077&facet=genre&user_id=23121-167625-690189-950869&client_id=wemqLM56wkD5McvdTn2KaZmQgQ0FC8Jg&limit=20&offset=0&linked_partitioning=1&app_version=1608213261&app_locale=en`
    );
    setSearch(data.collection);

    dispatch(setSearchState({ search: null, query: null }));
  };

  return (
    <div className="Search__main">
      <div className="Search__section">
        <form>
          <input
            type="text"
            value={input}
            className="SearchBar"
            placeholder="Search For a Song"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button
            className="SearchButton"
            onClick={(e) => {
              e.preventDefault();
              handleSearch(input);
              setInput("");
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="Search__container">
        {search && search.length <= 0 ? (
          SearchState ? (
            <h5>
              Searching for <b style={{ color: "#ff5500" }}>{seleQuery}</b> ...{" "}
            </h5>
          ) : (
            "Search for somthing ..."
          )
        ) : SearchState === "loading" ? (
          <h5>
            Searching for <b style={{ color: "#ff5500" }}>{seleQuery}</b> ...{" "}
          </h5>
        ) : (
          search.map((song, key) => (
            <SongRe
              key={key}
              title={song.title}
              imagesrc={song.artwork_url}
              id={song.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
