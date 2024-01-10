"use client";
import { FC, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Button, Tooltip, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useGetAllBookingQuery } from "@/store/api/admin";
import { Booking } from "@/types/bookingTypes";
import { usePathname } from "next/navigation";

//DataTable data type
type Person = {
  propertyType: string;
  floorId: string;
  roomId: string;
  userName: string;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
// const data: Person[] = [
//   {
//     propertyType: "HOUSE",
//     floorId: "617c7b1eb1c8ea60f0b4d1a4",
//     roomId: "617c7b1eb1c8ea60f0b4d1a5",
//     userName: "alice_smith89",
//     firstName: "Alice",
//     lastName: "Smith",
//     description: "Booking for a family vacation.",
//     email: "alice.smith@example.com",
//   },
//   {
//     propertyType: "CONDO",
//     floorId: "617c7b1eb1c8ea60f0b4d1a6",
//     roomId: "617c7b1eb1c8ea60f0b4d1a7",
//     userName: "bob_johnson77",
//     firstName: "Bob",
//     lastName: "Johnson",
//     description: "Booking for a business trip.",
//     email: "bob.johnson@example.com",
//   },
//   {
//     propertyType: "VILLA",
//     floorId: "617c7b1eb1c8ea60f0b4d1a8",
//     roomId: "617c7b1eb1c8ea60f0b4d1a9",
//     userName: "sara_wilson123",
//     firstName: "Sara",
//     lastName: "Wilson",
//     description: "Booking for a weekend getaway.",
//     email: "sara.wilson@example.com",
//   }
// ]
interface TableProps {
  handelModelClick?: (value: any) => void;
  AllBookings: Booking[];
}
const DataTable: FC<TableProps> = ({ handelModelClick, AllBookings }) => {

  const pathName = usePathname()
  console.log(pathName)
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Booking>[]>(
    () => [
      {
        accessorKey: `Name`, //access nested data with dot notation
        header: "Name",
        size: 150,
        Cell: ({ row }) => (
          <div>
            {" "}
            {`${row?.original?.firstName}  ${row?.original?.lastName}`}{" "}
          </div>
        ),
      },
      {
        accessorKey: "type", //normal accessorKey
        header: "Property Type",
        size: 200,
      },
      {
        accessorKey: "floor.name",
        header: "Floor",
        size: 150,
        Cell: ({ row }) => <div> {`${row?.original?.floor?.[0]?.name}`} </div>,
      },
      {
        accessorKey: "room.name",
        header: "Room",
        size: 150,
        Cell: ({ row }) => <div> {`${row?.original?.room?.[0]?.name}`} </div>,
      },
      {
        accessorKey: "email",
        header: "email",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "description",
        size: 150,
      },
      {
        header: "Action",
        accessorKey: "action",
        Cell: ({ row }) => (
          <div className="flex items-center gap-3 justify-center">
            {row?.original?.isBooked === "locked" ? (
              <Typography variant="h3" color={"#EE9B00"}>Sold</Typography>
            ): pathName === "/history" ? (
              <Typography variant="h5" color={"#EE9B00"}>Session Completed</Typography>
            ): row?.original?.isBooked === "pending" ? (
              <>
                <Tooltip title="confirm" placement="top">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() =>
                      handelModelClick?.({
                        model: "confirm",
                        modelLable: "Accept",
                        value: row.original,
                      })
                    }
                    size="large"
                  >
                    {" "}
                    <VerifiedIcon />
                  </Button>
                </Tooltip>

                <Tooltip title="cancell" placement="top">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      handelModelClick?.({
                        model: "cancelled",
                        modelLable: "Reject",
                        alue: row.original,
                      })
                    }
                    size="large"
                  >
                    {" "}
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Sold" placement="top">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>
                      handelModelClick?.({
                        model: "locked",
                        modelLable: "Sold",
                        value: row.original,
                      })
                    }
                    size="large"
                  >
                    {" "}
                    <BlockIcon />
                  </Button>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="unlock" placement="top">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    handelModelClick?.({
                      model: "pending",
                      modelLable: "Unlock",
                      value: row.original,
                    })
                  }
                  size="large"
                >
                  {" "}
                  <LockOpenIcon />
                </Button>
              </Tooltip>
            )}
          </div>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: AllBookings ? AllBookings : [],
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default DataTable;
