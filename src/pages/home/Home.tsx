import { AddOutlined, Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { CustomCard } from "./components/CustomCard";

export const Home = () => {
  const people = [
    { name: "Alice", email: "alice@example.com", birthday: "1990-01-01" },
    { name: "Bob", email: "bob@example.com", birthday: "1985-05-15" },
    { name: "Charlie", email: "charlie@example.com", birthday: "1992-08-20" },
    { name: "Diana", email: "diana@example.com", birthday: "1988-12-10" },
    { name: "Ethan", email: "ethan@example.com", birthday: "1995-03-25" },
    { name: "Fiona", email: "fiona@example.com", birthday: "1991-07-05" },
    { name: "Alice", email: "alice@example.com", birthday: "1990-01-01" },
    { name: "Bob", email: "bob@example.com", birthday: "1985-05-15" },
    { name: "Charlie", email: "charlie@example.com", birthday: "1992-08-20" },
    { name: "Diana", email: "diana@example.com", birthday: "1988-12-10" },
    { name: "Ethan", email: "ethan@example.com", birthday: "1995-03-25" },
    { name: "Fiona", email: "fiona@example.com", birthday: "1991-07-05" },
  ];

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh",
        }}
      >
        <TextField
          variant="outlined"
          label="Pesquisar"
          sx={{
            width: { xs: "75%", sm: "50%", md: "25%" },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          height: "50px",
          mb: "15px",
        }}
      >
        <Button variant="contained" startIcon={<AddOutlined />}>
          Criar
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "65%",
            gap: 5,
          }}
        >
          {people.map((person) => (
            <CustomCard
              name={person.name}
              email={person.email}
              birthday={person.birthday}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
