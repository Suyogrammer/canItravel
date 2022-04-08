import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

export default function Dropdown({ label, choices, parameter, setParameter }) {
  const handleChange = (event) => {
    setParameter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parameter === null ? " " : parameter}
          label={label}
          onChange={handleChange}
        >
          {Object.entries(choices).map((i, index) => {
            return (
              <MenuItem key={index} value={i[0]}>
                {i[1]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

Dropdown.propTypes = {
  choices: PropTypes.object,
};

// Write conditional rendering using 3 ways I showSecondDD
//
