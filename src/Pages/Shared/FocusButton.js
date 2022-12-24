import React from 'react';

const FocusButton = ({children}) => {
    return (
        <button className="btn font-bold  border-none text-base-100 bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default FocusButton;