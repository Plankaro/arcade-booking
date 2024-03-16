import { FC, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Button, Tooltip } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { CgUnblock } from "react-icons/cg";
import { Booking, Floor, Room } from "@/types/bookingTypes";
import { usePathname } from "next/navigation";

interface TableProps {
  handelModelClick?: (value: any) => void;
  AllBookings: Booking[];
}

interface BookingData {
  type: string;
  floor: string;
  room: string;
  floorId: string;
  roomId: string;
  lock: string;
}

const PropertyTable: FC<TableProps> = ({ handelModelClick, AllBookings }) => {
  const pathName = usePathname();
  // console.log(AllBookings);

  const transformedData = useMemo(() => {
    const data: BookingData[] = [];

    AllBookings.forEach((property) => {
      const { type, floors } = property;

      floors.forEach((floor) => {
        const { name: floorName, rooms } = floor;

        rooms.forEach((room) => {
          const { name: roomName, id: roomId, lock } = room;

          data.push({
            type,
            floor: `${floorName}`,
            room: `${roomName}`,
            floorId: floor.id,
            roomId: roomId,
            lock,
          });
        });
      });
    });

    return data;
  }, [AllBookings]);

  // console.log(transformedData);

  const columns = useMemo<MRT_ColumnDef<Booking>[]>(
    () => [
      {
        accessorKey: "type",
        header: "Property Type",
        size: 200,
        // Cell: ({ row }) => <div>{row.original.type}</div>,
      },
      {
        accessorKey: "floor",
        header: "Floor",
        size: 150,
        // Cell: ({ row }) => <div>{row.original.floor}</div>,
      },
      {
        accessorKey: "room",
        header: "Room",
        size: 150,
        // Cell: ({ row }) => <div>{row.original.room}</div>,
      },
      {
        header: "Sold status",
        accessorKey: "action",
        Cell: ({ row }) => {
          const status = row?.original?.lock === "locked";
          return (
            <h4 className={`font-semibold text-lg ${status ? "text-[#EE9B00]" : "text-green-600"}`}>
              {status ? "Sold" : "Available"}
            </h4>
          )
        },
      },
      {
        header: "Action",
        accessorKey: "action",
        Cell: ({ row }) => (
          <div className="flex items-center gap-3 justify-center">
            {row?.original?.lock === "locked" ? (
              <>
                <Tooltip title="Mark as Unsold" placement="top">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() =>
                      handelModelClick?.({
                        model: "notConfirmed",
                        modelLable: "Unsold",
                        value: {
                          floorId: row?.original?.floorId,
                          roomId: row?.original?.roomId,
                        },
                      })
                    }
                    size="large"
                  >
                    <CgUnblock size={28} />
                  </Button>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="Mark as Sold" placement="top">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    handelModelClick?.({
                      model: "locked",
                      modelLable: "Sold",
                      value: {
                        floorId: row?.original?.floorId,
                        roomId: row?.original?.roomId,
                      },
                    })
                  }
                  size="large"
                >
                  <BlockIcon />
                </Button>
              </Tooltip>
            )}
          </div>
        ),
      },
    ],
    [handelModelClick]
  );

  const table = useMaterialReactTable({
    columns,
    data: transformedData as any,
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default PropertyTable;
