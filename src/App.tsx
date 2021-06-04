import React from "react";
import "./App.css";
import PrimaryAppBar from "./components/PrimaryAppBar";
import Messages from "./components/Messages";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <PrimaryAppBar />
      <Messages />
      <MessageCard />
    </div>
  );
}

export default App;
