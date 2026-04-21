//actionbar.jsx
import SearchBar from "./SearchBar";
import ClickIcon from './ClickIcon';
import write from '../../../assets/icons/Notes_assets/write.png'

export const ActionBar = ({ onAddNote, onSortChange, onSearch }) => {
    return (
        <div className="actionBar py-5">
            <SearchBar
                onSortChange={onSortChange}
                onSearch={onSearch}
            />
            <ClickIcon
                src={write}
                alt="Add note"
                onClick={onAddNote}
            />
        </div>
    )
}

export default ActionBar;