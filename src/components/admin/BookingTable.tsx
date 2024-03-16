"use client";
import { FC, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Booking, Floor } from "@/types/bookingTypes";
import { usePathname } from "next/navigation";
import CachedIcon from "@mui/icons-material/Cached";

interface TableProps {
  handelModelClick?: (value: any) => void;
  AllBookings: Booking[];
  historyRefetch?: () => void;
}
const BookingTable: FC<TableProps> = ({
  handelModelClick,
  AllBookings,
  historyRefetch,
}) => {
  const pathName = usePathname();

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
        Cell: ({ row }) => {
          console.log(row?.original);
          return (<div>{row?.original?.floor?.name} </div>)
        },
      },
      {
        accessorKey: "room.name",
        header: "Room",
        size: 150,
        Cell: ({ row }) => <div> {`${row?.original?.room?.name}`} </div>,
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
              <Typography
                variant="subtitle1"
                color={`${row?.original?.isBooked === "confirm" ? "#257FB5" : "#E79700"
                  }`}
              >
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
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: AllBookings ? AllBookings : [],
  });

  return (
    <div className="relative w-full">
      {historyRefetch && (
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 9,
            zIndex: 100,
          }}
        >
          <Tooltip title="Refresh Table">
            <IconButton onClick={historyRefetch}>
              <CachedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <MaterialReactTable table={table} />
    </div>
  );
};

export default BookingTable;
