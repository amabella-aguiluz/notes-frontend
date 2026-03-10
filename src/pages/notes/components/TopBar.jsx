//topbar.jsx
import Link from "@mui/material/Link";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

// app name + log out button
export const TopBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="topBar">
            <h1>Find Your Pages</h1>
            {/* TODO: aesthetically pleasing log out button */}
            <Link onClick={handleLogout}>Log Out</Link>
        </div>
    );
};

export default TopBar;