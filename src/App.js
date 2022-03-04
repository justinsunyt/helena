import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let heyBoyfriend = new Date("July 29, 2021 08:28:00");
  let heyBoyfriendUTC = Date.UTC(
    heyBoyfriend.getFullYear(),
    heyBoyfriend.getMonth(),
    heyBoyfriend.getDate()
  );

  const [day, setDay] = useState(findDateDiff());

  function findDateDiff() {
    let now = new Date();
    let nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    let dayInt = 1000 * 60 * 60 * 24;
    return (nowUTC - heyBoyfriendUTC) / dayInt;
  }

  useEffect(() => {
    setInterval(() => setDay(findDateDiff()), 1000);
  }, []);

  return (
    <div>
      <center>
        <h1>{day} days since "hey boyfriend" and "hey girlf" </h1>
      </center>
    </div>
  );
}

export default App;
