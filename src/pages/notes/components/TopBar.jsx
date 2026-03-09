//topbar.jsx
import Link from "@mui/material/Link";
import { useLogin } from "../../../hooks/auth/useLogin";

// app name + log out button
export const TopBar = () => {
    const {logout} = useLogin();

    return(
        <div>
        <h1>Find Your Pages</h1>
        {/* TODO: aesthetically pleasing log out button */}
        <Link component="button" onClick={logout}>Log Out</Link>      
        </div>  
    );
};

export default TopBar; 