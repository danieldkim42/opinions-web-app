import React from "react";
import TopContainer from "../containers/TopContainer";
import BotContainer from "../containers/BotContainer";

function Home() {
  return (
    <div className='whole-container'>
      <TopContainer />
      <BotContainer />
    </div>
  );
}

export default Home;