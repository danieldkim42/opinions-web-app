import React from "react";

function BotContainer() {
  async function onClickHandler() {
    const inp = document.getElementById('input-text');
    const obj = {
      "text": inp.value
    }
    fetch('/db/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="bot-container">
      <input id="input-text" type="text" placeholder="Type Here"></input>
      <button onClick={onClickHandler}>Submit</button>
    </div>
  );
}

export default BotContainer;