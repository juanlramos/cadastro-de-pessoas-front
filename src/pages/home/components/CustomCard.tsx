import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

type CustomCardProps = {
  name: string;
  email: string;
  birthday: string;
};

export const CustomCard = ({ name, email, birthday }: CustomCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "200px",
        width: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
      }}
    >
      <CardContent>
        <Typography variant="h5" mb={2} fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2">Email: {email}</Typography>
        <Typography variant="body2">
          Birthday: {dayjs(birthday).format("DD/MM/YYYY")}
        </Typography>

        <ButtonGroup
          sx={{
            mt: "25px",
          }}
        >
          <Button variant="contained" startIcon={<EditOutlined />}>
            Editar
          </Button>
          <Button
            variant="contained"
            startIcon={<DeleteOutlineOutlined />}
            color="error"
          >
            Deletar
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
