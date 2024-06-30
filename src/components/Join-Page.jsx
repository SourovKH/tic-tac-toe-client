import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const JoinPage = ({ setPlayerDetails }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [error, setError] = useState({ status: false, message: "" });

  const handleJoin = (event) => {
    event.preventDefault();
    if (!username)
      return setError({ status: true, message: "Please enter username" });

    const body = { name: username };

    fetch("http://localhost:3000/game/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        }

        return res.json();
      })
      .then((data) => {
        setPlayerDetails({ username, ...data });
        navigate("/lobby");
      })
      .catch((err) => {
        setError({ status: true, message: err.message });
      });
  };

  return (
    <div
      style={{
        margin: "10em auto",
        width: "20em",
        padding: "1.5em 3em",
        border: "1px solid rgb(200, 200, 200)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "1.5em",
      }}
    >
      <div>Join Game</div>
      <hr style={{width: '100%'}}/>
      <Box
        component="form"
        onSubmit={handleJoin}
        noValidate
        sx={{ mt: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1.5em",
        }}
      >
        {!error.status ? (
          <TextField
            id="standard-multiline-flexible"
            label="Username"
            multiline
            maxRows={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        ) : (
          <TextField
            error
            id="standard-error-helper-text"
            label="Username"
            helperText={error.message}
            onChange={() => setError(false)}
          />
        )}
        <Button variant="contained" type="submit">
          Join
        </Button>
      </Box>
    </div>
  );
};
