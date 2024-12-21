
export default function Button({ children, onClick, className = "", ...props }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white bg-dark3/50 hover:bg-dark3 rounded-md transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}