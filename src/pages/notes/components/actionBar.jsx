//actionbar.jsx
import SearchBar from "./searchbar";
import AddIcon from '@mui/icons-material/Add';

export const ActionBar = ({onAddNote}) => {
    return(
        <div>
            <SearchBar />
            <AddIcon onClick={onAddNote}/>
        </div>
    )
}

export default ActionBar;