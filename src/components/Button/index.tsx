interface ButtonProps {
    background: string;
    text: string;
    backgroundHover: string;
    disabled?: boolean;
}

export const Button = ({ background, text, backgroundHover, disabled}: ButtonProps) => {

    const handleMoudeEnter = (e) => e.target.style.background = backgroundHover;
    const handleMoudeLeave = (e) => e.target.style.background = background;

    return (
        <button 
            style={{
                background: background,
                padding: '15px 30px',
                color: 'white',
                borderRadius: '30px',
                cursor: 'pointer'
            }}
            onMouseEnter={handleMoudeEnter}
            onMouseLeave={handleMoudeLeave}
            disabled={disabled}
            >
                {text}
        </button>
    )
}