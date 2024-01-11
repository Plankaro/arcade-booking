// "use client";
// import { FC, useMemo, useState } from "react";
// import {
//     MaterialReactTable,
//     useMaterialReactTable,
//     type MRT_ColumnDef,
// } from "material-react-table";
// import { Button, Tooltip, Typography } from "@mui/material";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BlockIcon from "@mui/icons-material/Block";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
// import { useGetAllBookingQuery } from "@/store/api/admin";
// import { Booking, Floor } from "@/types/bookingTypes";
// import { usePathname } from "next/navigation";

// interface TableProps {
//     handelModelClick?: (value: any) => void;
//     AllBookings: Booking[];
// }
// const PropertyTable: FC<TableProps> = ({
//     handelModelClick,
//     AllBookings
// }) => {
//     const pathName = usePathname();
//     // console.log(pathName)
//     //should be memoized or stable
//     const columns = useMemo<MRT_ColumnDef<Booking>[]>(
//         () => [
//             {
//                 accessorKey: "type", //normal accessorKey
//                 header: "Property Type",
//                 size: 200,
//             },
//             {
//                 accessorKey: "floors.name",
//                 header: "Floor",
//                 size: 150,
//                 // Cell: ({ row }) => (
//                 //     <div> {`${row?.original?.floors?.[0]?.name}`} </div>
//                 // ),
//                 // Cell: ({ row }) => (
//                 //     <div>
//                 //         {row?.original?.floors?.map((floor: Floor) => (
//                 //             <div key={floor.id}>{floor.name}</div>
//                 //         ))}
//                 //     </div>
//                 // ),
//             },
//             {
//                 accessorKey: "floors.room.name",
//                 header: "Room",
//                 size: 150,
//                 // Cell: ({ row }) => (
//                 //     <div> {`${row?.original?.floors?.[0]?.rooms?.[0]?.name}`} </div>
//                 // ),
//                 // Cell: ({ row }) => (
//                 //     <div>
//                 //         {row?.original?.floors?.rooms.map((room: Room) => (
//                 //             <div key={room.id}>{room.name}</div>
//                 //         ))}
//                 //     </div>
//                 // ),
//             },
//             {
//                 header: "Action",
//                 accessorKey: "action",
//                 Cell: ({ row }) => (
//                     <div className="flex items-center gap-3 justify-center">
//                         <Tooltip title="Mark as Sold" placement="top">
//                             <Button
//                                 variant="outlined"
//                                 color="error"
//                                 onClick={() =>
//                                     handelModelClick?.({
//                                         model: "locked",
//                                         modelLable: "Sold",
//                                         value: row.original,
//                                     })
//                                 }
//                                 size="large"
//                             >
//                                 {" "}
//                                 <BlockIcon />
//                             </Button>
//                         </Tooltip>
//                     </div>
//                 ),
//             },
//         ],
//         []
//     );

//     const table = useMaterialReactTable({
//         columns,
//         data: AllBookings ? AllBookings : [],
//     });

//     return (
//         <>
//             <MaterialReactTable table={table} />
//         </>
//     );
// };

// export default PropertyTable;

import { FC, useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from "material-react-table";
import { Button, Tooltip } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
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
                header: "Action",
                accessorKey: "action",
                Cell: ({ row }) => (
                    <div className="flex items-center gap-3 justify-center">
                        {row?.original?.lock === "locked" ? (
                            <h4 className="font-semibold text-lg text-[#EE9B00]">Sold</h4>
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
