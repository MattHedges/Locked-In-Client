import React, { useState } from 'react';
import {ReactComponent as BodyFront } from "./muscle_man_front.svg";
import {ReactComponent as BodyBack } from "./muscle_man_back.svg";
import { Box, Button } from "@mui/material";

export function BodySwitch() {
  const [showFront, setShowFront] = useState(true);

  const toggleComponent = () => {
    setShowFront(!showFront);
  };

  return (
    <Box>
      <Button onClick={toggleComponent}
        variant="contained"
        color="primary"
        sx={{
          display: "block",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
        Toggle Component
      </Button>
      {showFront ? <BodyFront /> : <BodyBack />}
    </Box>
  );
}