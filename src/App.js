//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, newHomeS] = useState(0);
  let [awayScore, newAwayS] = useState(0);
  let [downs, newPlay] = useState(0);
  let [yards, left] = useState(10);
  let [yardline, position] = useState(20);
  let [quarters, time] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down={downs} togo={yards} ball={yardline} quarter={quarters} />
      </section>
      <section className="buttons">
        <div className="playButtons">
          <button className="playButtons__down" onClick={ () => newPlay( downs === 4 ? downs = 0 : downs + 1 )}>Down</button>
          <button className="playButtons__togo" onClick={ () => left(yards <= 0 ? yards = 10 : yards -= 3)}>Yards Gained</button>{/*convert to text field*/}
        </div>
        <div className="playButtons">
          <button className="playButtons__ball_on" onClick={ () => position(yardline >= 120 ? yardline = 20 : yardline += 3)}>Ball On</button>{/*convert to text field*/}
          <button className="playButtons__quarter" onClick={ () => time( quarters === 4 ? quarters = 1 : quarters + 1 )}>Quarter</button>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ () => newHomeS(homeScore += 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ () => newHomeS(homeScore += 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => newAwayS(awayScore += 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ () => newAwayS(awayScore += 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
