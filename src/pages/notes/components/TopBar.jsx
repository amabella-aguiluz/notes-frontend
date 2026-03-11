//topbar.jsx
import Link from "@mui/material/Link";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import {StyledLink} from "../../auth/components/components";

// app name + log out button
export const TopBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="topBar justify-between">
            <h1>Find Your Pages</h1>
            {/* TODO: aesthetically pleasing log out button */}
            <StyledLink onClick={handleLogout}>Log Out</StyledLink>
        </div>
    );
};

export default TopBar;