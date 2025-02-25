export const baseStyles = `
    inline-flex 
    justify-center i
    tems-center 
    px-4 
    py-2 
    rounded-md 
    font-medium 
    text-sm 
    uppercase 
    transition 
    disabled:opacity-60 
    disabled:cursor-not-allowed
`;

export const variantStyles = {
    text: `
        bg-transparent 
        text-blue-600 
        hover:bg-blue-100 
        disabled:text-gray-400`,
    contained: `
        bg-blue-600 
        text-white 
        shadow-md 
        hover:bg-blue-700 
        disabled:bg-gray-300 
        disabled:text-gray-500`,
    outlined: `
        border 
        border-blue-600 
        text-blue-600 
        hover:border-blue-700 
        hover:bg-blue-100 
        disabled:border-gray-300 
        disabled:text-gray-500`,
};
