import React from "react";

function Search() {
  /**
   * onClickHandler for the Search button
   * 
   * 
   * need to fetch from the database
   * step 1: fetch keywords using the input text
   * step 2: fetch from the database using the keywords
   * step 3: display the results
   */
  async function onClickHandler() {
    fetch('/db/get')
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <h1>What are they thinking?</h1>
      <input type="text" placeholder="Search" />
      <button onClick={onClickHandler}>Search</button>
    </div>
  );
}

export default Search;