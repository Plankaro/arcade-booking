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

interface TableProps {
  handelModelClick?: (value: any) => void;
  AllBookings: Booking[];
  isPropertyTable?: boolean;
}
const BookingTable: FC<TableProps> = ({
  handelModelClick,
  AllBookings,
  isPropertyTable,
}) => {
  const pathName = usePathname();
  // console.log(pathName)
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Booking>[]>(
    () =>
      !isPropertyTable
        ? [
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
            Cell: ({ row }) => (
              <div> {`${row?.original?.floors?.[0]?.name}`} </div>
            ),
          },
          {
            accessorKey: "room.name",
            header: "Room",
            size: 150,
            Cell: ({ row }) => (
              <div> {`${row?.original?.rooms?.[0]?.name}`} </div>
            ),
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
                  <Typography variant="h3" color={"#EE9B00"}>
                    Sold
                  </Typography>
                ) : pathName === "/history" ? (
                  <Typography variant="subtitle1" color={"#257FB5"}>
                    {row?.original?.isBooked}
                  </Typography>
                ) : pathName === "/property" ? (
                  <Tooltip title="Mark as Sold" placement="top">
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
                ) : row?.original?.isBooked === "notConfirmed" ? (
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
                            value: row.original,
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
        ]
        : [
          {
            accessorKey: "type", //normal accessorKey
            header: "Property Type",
            size: 200,
          },
          {
            accessorKey: "floor.name",
            header: "Floor",
            size: 150,
            Cell: ({ row }) => (
              <div> {`${row?.original?.floors?.[0]?.name}`} </div>
            ),
          },
          {
            accessorKey: "room.name",
            header: "Room",
            size: 150,
            Cell: ({ row }) => (
              <div> {`${row?.original?.floors?.[0]?.rooms?.[0]?.name}`} </div>
            ),
          },
          {
            header: "Action",
            accessorKey: "action",
            Cell: ({ row }) => (
              <div className="flex items-center gap-3 justify-center">
                <Tooltip title="Mark as Sold" placement="top">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() =>{
                      console.log("click");
                      handelModelClick?.({
                        model: "locked",
                        modelLable: "Sold",
                        value: row.original,
                      })}
                    }
                    size="large"
                  >
                    {" "}
                    <BlockIcon />
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
    data: AllBookings ? AllBookings : [],
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default BookingTable;
