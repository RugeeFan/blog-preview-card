import React, { memo } from "react";
import Card from "./components/Card";

const App = memo(() => {
  return <div className="bg-yellow h-screen w-full flex justify-center items-center">
    <Card />
    <div class="attribution fixed bottom-0">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Rugee</a>.
    </div>
  </div>;
});

export default App;
