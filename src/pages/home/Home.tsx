import { AddOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
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
  const [person, setPerson] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const handleOpenModal = () => setOpen(!open);

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      const getAllPeople = async () => {
        try {
          const res = await PersonService.getAll(filter);
          setPerson(res);
        } catch (error) {
          console.error("Erro ao buscar pessoas:", error);
        } finally {
          setLoading(false);
        }
      };

      getAllPeople();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

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
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
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
          {loading ? (
            <CircularProgress />
          ) : (
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
              {person.length > 0 ? (
                person.map((per: any) => (
                  <CustomCard
                    key={per.id}
                    name={per.name}
                    email={per.email}
                    birthday={per.birthday}
                  />
                ))
              ) : (
                <>Nenhum Registro encontrado</>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
