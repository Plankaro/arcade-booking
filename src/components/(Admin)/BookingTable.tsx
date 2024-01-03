import { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from "material-react-table";
import { Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useGetAllBookingQuery } from "@/store/api/admin";

//example data type
type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    Email: string;
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
        Email: "261 Erdman Ford",
        city: "East Daphne",
        state: "Kentucky",
    },
    {
        name: {
            firstName: "Jane",
            lastName: "Doe",
        },
        Email: "769 Dominic Grove",
        city: "Columbus",
        state: "Ohio",
    },
    {
        name: {
            firstName: "Joe",
            lastName: "Doe",
        },
        Email: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "Kevin",
            lastName: "Vandy",
        },
        Email: "722 Emie Stream",
        city: "Lincoln",
        state: "Nebraska",
    },
    {
        name: {
            firstName: "Joshua",
            lastName: "Rolluffs",
        },
        Email: "32188 Larkin Turnpike",
        city: "Omaha",
        state: "Nebraska",
    },
];

const Example = () => {
    const {data:datas} = useGetAllBookingQuery()
    console.log(datas);
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
                accessorKey: "Email", //normal accessorKey
                header: "Email Address",
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
                Cell: ({ row, i }: any) => (
                    <div className="flex items-center gap-3  justify-center">
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() => console.log(row.id)}
                            size="large"
                        >
                            {" "}
                            <VerifiedIcon />
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => console.log(row.id)}
                            size="large"
                        >
                            {" "}
                            <DeleteIcon />
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => console.log(row.id)}
                            size="large"
                        >
                            {" "}
                            <HighlightOffIcon />
                        </Button>
                    </div>
                ),
            },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table} />;
};

export default Example;
