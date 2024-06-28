import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHeader } from "./components/Page-header";
import { HomePage } from "./components/Home-page";
import { JoinPage } from "./components/Join-Page";
import { useState } from "react";
import { Lobby } from "./components/Lobby";

function App() {
  const [playerDetails, setPlayerDetails] = useState();
  const [opponentDetails, setOpponentDetails] = useState();
  return (
    <BrowserRouter basename="tic-tac-toe">
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/join"
          element={<JoinPage setPlayerDetails={setPlayerDetails} />}
        />
        <Route
          path="/lobby"
          element={<Lobby playerDetails={playerDetails} setOpponentDetails={setOpponentDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
