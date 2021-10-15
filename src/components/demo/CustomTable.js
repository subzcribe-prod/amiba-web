import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  thead: {
    fontWeight: "bold",
  },
}));

export default function CustomTable({ rows }) {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(1);
  const numberOfItemsForPage = 5;
  const numberOfPages = rows.length / numberOfItemsForPage;
  const reducedRow = rows.slice(
    (pageNumber - 1) * numberOfItemsForPage,
    pageNumber * numberOfItemsForPage
  );
  const titles = Object.keys(rows[0]);
  console.log(titles);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.thead}>Name</TableCell>
              <TableCell className={classes.thead} align="center">
                Email
              </TableCell>
              <TableCell className={classes.thead} align="center">
                Phone
              </TableCell>
              <TableCell className={classes.thead} align="center">
                Username
              </TableCell>
              <TableCell className={classes.thead} align="right">
                Website
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reducedRow.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length > 5 && (
        <Pagination
          count={numberOfPages}
          onChange={(e, page) => setPageNumber(page)}
          page={pageNumber}
          sx={{
            "& ul": { display: "flex", justifyContent: "center" },
            "&": { marginTop: "1em" },
          }}
        />
      )}
    </>
  );
}
