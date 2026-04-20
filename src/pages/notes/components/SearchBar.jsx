import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { useWindow } from "../../../hooks/notes/useWindow";
import { StyledTextField } from "../../../components/components";

import ClickIcon from './ClickIcon';
import search from '../../../assets/icons/Notes_assets/search.png'
import filter from '../../../assets/icons/Notes_assets/filter.png'

// to search for notes by name
export const SearchBar = ({ onSortChange, onSearch }) => {
    const { open, window, handleOpen, handleClose } = useWindow();
    const [currentField, setCurrentField] = useState("updated_at");
    const [input, setInput] = useState("");

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

    const handleSearch = () => {
        if (onSearch) onSearch(input);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="searchBar">
            <StyledTextField id="outlined-basic" label="Search..." variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ClickIcon
                                src={search}
                                alt="Search"
                                onClick={handleSearch}
                                size={20}
                            />
                        </InputAdornment>),
                }} />
            <ClickIcon
                src={filter}
                alt="Filter"
                onClick={handleOpen}
                size={24}
            />
        </div>
    );
};

// filter window
// if click FilterAltIcon:
export const FilterButton = ({ anchorEl, open, handleClose, handleSelect }) => {
    return (
        <Menu
            anchorEl={anchorEl}
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