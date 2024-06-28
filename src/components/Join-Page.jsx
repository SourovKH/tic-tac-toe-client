import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const JoinPage = ({ setPlayerDetails }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleJoin = (event) => {
    event.preventDefault();
    if (!username) return setError(true);

    setPlayerDetails({ username });
    navigate("/lobby");
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
        alignItems: 'center',
        rowGap: "1.5em",
      }}
    >
      <div>Join Game</div>
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
        {!error ? (
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
            helperText="Please Enter username"
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
