import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { comics } from "./comics";
import Comic from "./Comic";

function ComicList() {
  return (
    <section className="comiclist">
      {comics.map((comic) => {
        return <Comic {...comic}></Comic>;
      })}
    </section>
  );
}

ReactDOM.render(<ComicList />, document.getElementById("root"));
