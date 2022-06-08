import * as React from "react";
// import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { deletUser, editUser } from "../Action/Action";
import { useNavigate } from "react-router-dom";

export default function Table() {
  const myState = useSelector((state) => state.newNumber.userData);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (b) => {
    // console.log(a.id,"iddddd");
    dispatch(deletUser(b));
    navigate("/table");
  };

  const handleEdit = (id) => {
   
    dispatch(editUser(id));

    navigate(`/edit/${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "email",
      type: "email",
      width: 90,
    },
    {
      field: "password",
      headerName: "password",
      type: "password",
      width: 90,
    },
    {
      field: "delete",
      headerName: "delete",
      type: "delete",
      width: 90,
      renderCell: (b) => {
        return (
          <Button variant="contained" onClick={() => handleDelete(b.row.id)}>
            DELETE
          </Button>
        );
      },
    },

    {
      field: "edit",
      headerName: "edit",
      type: "edit",
      width: 150,
      renderCell: (a) => {
        console.log(a, "a edit");
        return (
          <Button variant="contained" onClick={() => handleEdit(a.row.id)}>
            EDIT
          </Button>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={myState}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
