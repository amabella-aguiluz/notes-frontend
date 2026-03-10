//actionbar.jsx
import SearchBar from "./searchbar";
import AddIcon from '@mui/icons-material/Add';

export const ActionBar = ({ onAddNote, onSortChange, onSearch }) => {
    return (
        <div className="actionBar">
            <SearchBar
                onSortChange={onSortChange}
                onSearch={onSearch}
            />
            <AddIcon onClick={onAddNote} />
        </div>
    )
}

export default ActionBar;