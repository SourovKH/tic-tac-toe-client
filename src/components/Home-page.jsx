import { Button } from "@mui/material";

export const HomePage = () => {
  return (
    <div
      style={{
        height: "40em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          width: "700px",
          border: "1px solid grey",
        }}
      >
        <Button variant="contained" href="/tic-tac-toe/join">
          Join Game
        </Button>
      </div>
    </div>
  );
};
