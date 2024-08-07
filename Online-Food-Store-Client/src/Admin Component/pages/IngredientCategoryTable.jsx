import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CreateFoodCategoryForm from "./CreateFoodCategoryForm";
import { style } from "./FoodCategory";
import IngredeintCategoryCreate from "./IngredeintCategoryCreate";

const orders = [1, 2, 3, 4, 5];
const IngredientCategoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={handleOpen}>
              <CreateIcon />
            </IconButton>
          }
          title={"Ingredient Category"}
          sx={{ pt: 2, alignItems: "center" }}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row}</TableCell>
                  <TableCell>{"Pratahm"}</TableCell>
                  <TableCell>{"Pratahm"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IngredeintCategoryCreate />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientCategoryTable;
