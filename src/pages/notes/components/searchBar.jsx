import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Divider from "@mui/material/Divider";

// to search for notes by name
export const SearchBar = ({ onSortChange }) => {
    const [window, windowOpen] = useState(null);
    const [currentField, setCurrentField] = useState("updated_at");
    const open = Boolean(window);

    const handleFilterClick = (event) => {
        windowOpen(event.currentTarget);
    };

    const handleClose = () => {
        windowOpen(null);
    };

    const handleSelect = (option) => {
        handleClose();

        let sortBy = currentField;
        let order = "asc";

        if (option === "ascending") {
            order = "asc";
        } else if (option === "descending") {
            order = "desc";
        } else if (["title", "created_at", "updated_at"].includes(option)) {
            // user picked a new field → default to desc
            sortBy = option;
            setCurrentField(option);
            order = "desc";
        }

        console.log(sortBy, order);

        if (onSortChange) onSortChange(sortBy, order);
    };

    return (
        <div>
            <TextField id="outlined-basic" label="Search..." variant="outlined"
                // puts a search icon on the right side
                fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end"> <SearchIcon /> </InputAdornment>),
                }} /> <FilterAltIcon onClick={handleFilterClick} />
            <FilterButton window={window}
                open={open}
                handleClose={handleClose}
                handleSelect={handleSelect} />
        </div>
    );
};

// filter window
// if click FilterAltIcon:
export const FilterButton = ({ anchorEl, open, handleClose, handleSelect }) => {
    return (
        <Menu
            window={window}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={() => handleSelect("ascending")}>Ascending</MenuItem>
            <MenuItem onClick={() => handleSelect("descending")}>Descending</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleSelect("title")}>Title</MenuItem>
            <MenuItem onClick={() => handleSelect("updated_at")}>Updated At</MenuItem>
            <MenuItem onClick={() => handleSelect("created_at")}>Created At</MenuItem>
        </Menu>
    )
}

export default SearchBar;