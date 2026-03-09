//actionbar.jsx
import SearchBar from "./searchbar";
import AddIcon from '@mui/icons-material/Add';

export const ActionBar = ({ onAddNote, onSortChange }) => {
    return (
        <div>
            <SearchBar
                onSortChange={onSortChange}
            />
            <AddIcon onClick={onAddNote} />
        </div>
    )
}

export default ActionBar;