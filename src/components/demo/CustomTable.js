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
import { getAuthenticatedUser } from "../../helper functions/auth";

const useStyles = makeStyles((theme) => ({
  thead: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
}));

export default function CustomTable({ rows }) {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(1);
  const numberOfItemsForPage = 5;
  const numberOfPages = Math.ceil(rows.length / numberOfItemsForPage);
  const reducedRow = rows.slice(
    (pageNumber - 1) * numberOfItemsForPage,
    pageNumber * numberOfItemsForPage
  );
  const titles = Object.keys(rows[0]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.thead}>{titles[0]}</TableCell>
              {titles.slice(1, titles.length).map((t) => (
                <TableCell className={classes.thead}>{t}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reducedRow.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {titles.map((t) => (
                  <TableCell>{row[t]}</TableCell>
                ))}
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
