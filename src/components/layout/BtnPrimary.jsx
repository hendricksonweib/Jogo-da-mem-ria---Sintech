import React from 'react';
import '../../style/global.css'

const BtnPrimary = ({ text, onClick }) => {
    return (
        <button className="BtnPrimary" onClick={onClick}>
            {text}
        </button>
    );
};

export default BtnPrimary;
