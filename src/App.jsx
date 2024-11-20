import React, { memo } from "react";
import Card from "./components/Card";

const App = memo(() => {
  return <div className="bg-yellow h-screen w-full flex justify-center items-center">
    <Card />
  </div>;
});

export default App;
