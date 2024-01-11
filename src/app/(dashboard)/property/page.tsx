"use client";
import MainBody from "@/components/admin/MainBody";
import PropertyTable from "@/components/admin/PropertyTable";
import { useGetAllPropertyQuery } from "@/store/api/admin";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";


const options = ["Commercial", "Residential"];



const Property = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const { data,refetch } = useGetAllPropertyQuery(value);


  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <h1 className="font-semibold text-xl text-[#257FB5] mt-3">
        All Property Details
      </h1>
      <Box
        sx={{
          width: "100%",
          padding: 6,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Choose Property Type
        </Typography>
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Property Type" />
          )}
        />
      </Box>
      <div className="w-full h-full overflow-hidden">
        {" "}
        {/* <PropertyTable AllBookings={data ? data : []} /> */}
        <MainBody isPropertyTable propertyData={data ? data : []}  refetchData={refetch}/>
      </div>
    </div>
  );
};

export default Property;
