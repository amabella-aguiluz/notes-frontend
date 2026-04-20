const ClickIcon = ({ src, alt, onClick, size = 24, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`icon-button ${className}`}
            style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer"
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{ width: size, height: size }}
            />
        </button>
    );
};

export default ClickIcon;