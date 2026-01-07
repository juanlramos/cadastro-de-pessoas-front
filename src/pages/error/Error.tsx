import { Box, Typography } from "@mui/material";

export const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h3">ERROR 404</Typography>
      <Typography variant="h5">NOT FOUND</Typography>
    </Box>
  );
};
