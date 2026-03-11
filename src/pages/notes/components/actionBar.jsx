//actionbar.jsx
import SearchBar from "./searchBar";
import AddIcon from '@mui/icons-material/Add';

export const ActionBar = ({ onAddNote, onSortChange, onSearch }) => {
    return (
        <div className="actionBar py-5">
            <SearchBar
                onSortChange={onSortChange}
                onSearch={onSearch}
            />
            <AddIcon onClick={onAddNote} />
        </div>
    )
}

export default ActionBar;