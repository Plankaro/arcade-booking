"use client";
import { FC, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Button, Tooltip } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import ConfirmModel from "./ConfirmModel";

//DataTable data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];
interface ShowModel {
  first: boolean;
  second: boolean;
  third: boolean;
}

interface TableProps {
  handelModelClick: (value: any) => void;
}
const DataTable: FC<TableProps> = ({ handelModelClick }) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
      {
        header: "Action",
        accessorKey: "action",
        Cell: ({ row }) => (
          <div className="flex items-center gap-3 justify-end">
            <Tooltip title="Accept" placement="top">
              <Button
                variant="outlined"
                color="success"
                onClick={() =>
                  handelModelClick({ model: "Accept", value: row.id })
                }
                size="large"
              >
                {" "}
                <VerifiedIcon />
              </Button>
            </Tooltip>

            <Tooltip title="Reject" placement="top">
              <Button
                variant="outlined"
                color="error"
                onClick={() =>
                  handelModelClick({ model: "Reject", value: row.id })
                }
                size="large"
              >
                {" "}
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default DataTable;
