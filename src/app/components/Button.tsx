
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    [key: string]: any;
}

export default function Button({ children, onClick = undefined, className = "", ...props }: ButtonProps) {
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