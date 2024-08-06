import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const orders = [1, 2, 3, 4, 5];
const IngredientCategoryTable = () => {
  return (
    <Box>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <CreateIcon />
            </IconButton>
          }
          title={"Food Category"}
          sx={{ pt: 2, alignItems: "center" }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>name</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default IngredientCategoryTable;
