import { AddOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { CustomCard } from "./components/CustomCard";
import { useEffect, useState } from "react";
import type { Person } from "../../shared/models";
import { PersonService } from "../../shared/services/api/people/PersonService";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(!open);
  const [person, setPerson] = useState<Person[]>([]);

  useEffect(() => {
    PersonService.getAll().then((res) => {
      setPerson(res);
    });
  }, []);

  return (
    <>
      <Modal open={open} onClose={handleOpenModal}>
        <Typography>teste</Typography>
      </Modal>

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
          <Button
            variant="contained"
            startIcon={<AddOutlined />}
            onClick={handleOpenModal}
          >
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
            {person.map((per: any) => (
              <CustomCard
                name={per.name}
                email={per.email}
                birthday={per.birthday}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
