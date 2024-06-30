import { Avatar, CircularProgress } from "@mui/material";
import { PlayerCardStyle, PlayerDeck } from "../styles/lobby.styles";
import { useEffect, useState } from "react";

const PlayerCard = ({ playername, symbol }) => {
  return playername && symbol ? (
    <PlayerCardStyle>
      <Avatar style={{ height: "3.5em", width: "3.5em" }} />
      <div>{playername}</div>
      <div>{symbol}</div>
    </PlayerCardStyle>
  ) : (
    <PlayerCardStyle>
      <CircularProgress></CircularProgress>
      <div style={{ textAlign: "center", font: "0.5em", fontWeight: "400" }}>
        Waiting for other player...
      </div>
    </PlayerCardStyle>
  );
};

export const Lobby = ({ playerDetails, setOpponentDetails }) => {
  const [otherPlayer, setOtherPlayer] = useState({
    username: "",
    symbol: "",
  });

  const url = `http://localhost:3000/game/other-player/${playerDetails.id}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ name, symbol }) => {
          if (name && symbol) {
            clearInterval(intervalId);
            setOtherPlayer({ username: name, symbol });
            setOpponentDetails({ username: name, symbol });
          }
        });
    }, 1000);
  }, []);

  return (
    <div
      style={{
        margin: "10em auto",
        padding: "2em",
        width: "30em",
        height: "20em",
        border: "1px solid rgb(200, 200, 200)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2em" }}>Players</h1>
      <PlayerDeck>
        <PlayerCard
          playername={playerDetails.username}
          symbol={playerDetails.symbol}
        />
        <PlayerCard
          playername={otherPlayer.username}
          symbol={otherPlayer.symbol}
        ></PlayerCard>
      </PlayerDeck>
    </div>
  );
};
