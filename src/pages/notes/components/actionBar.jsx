//actionbar.jsx
import SearchBar from "./SearchBar";
import AddIcon from '@mui/icons-material/Add';

export const ActionBar = ({ onAddNote, onSortChange, onSearch }) => {
    return (
        <div>
            <SearchBar
                onSortChange={onSortChange}
                onSearch={onSearch}
            />
            <AddIcon onClick={onAddNote} />
        </div>
    )
}

export default ActionBar;