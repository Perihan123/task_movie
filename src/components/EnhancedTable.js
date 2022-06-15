import * as React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelected } from "../redux/movies/movieSlice";
import Empty from "./Empty";
const columns = [
  { id: "Title", label: "Film Adı", minWidth: 200 },

  { id: "Year", label: "Yayınlandığı Tarih", minWidth: 100 },
  {
    id: "imdbID",
    label: "IMDB ID",
    minWidth: 100,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "Type",
    label: "Tür",
    minWidth: 100,
    align: "right",
    //format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Poster",
    label: "Poster",
    align: "right",
    minWidth:100
  },
];

export default function StickyHeadTable() {
  const items = useSelector((state) => state.movies.items);
  const dispatch = useDispatch();
  const history= useHistory();
  const goDetail = (movie) => {
    dispatch(setSelected(movie));
    history.push('/detail')
  };
  if (items.length < 1) {
    return <Empty />
  }

  return (
    <div className=" flex items-center justify-center">
      <Paper sx={{ width: "80%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.length > 0 &&
                items
                  .map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.Title}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              onClick={() => goDetail(row)}
                            >
                              {column.id === "Poster" ? <img src={value} className="w-10 h-10 float-right" /> : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
