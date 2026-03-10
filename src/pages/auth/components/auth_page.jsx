import "../../../styles/auth.css";

export const AuthPage = ({type, typeInput}) => {
    return(
    <div className="authPage">
        <div className="authSpace">
        {/* this is blank but fills up the whole half of the page*/}
        </div>

        {/* this block is opaque */}
        <div className="authInput">
            <h1>Find Your Pages</h1>
            <h2>{type}</h2>
            {typeInput}
        </div>
    </div>
    );
};

export default AuthPage;