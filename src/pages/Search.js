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
    const inp = document.getElementById('search-input');
    fetch('/db/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "text": inp.value })
    })
      .then(res => res.json())
      .then(res => {
        console.log('res:', res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <h1>What are they thinking?</h1>
      <input id="search-input" type="text" placeholder="Search" />
      <button onClick={onClickHandler}>Search</button>
    </div>
  );
}

export default Search;