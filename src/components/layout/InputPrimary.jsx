import React from 'react';

function InputPrimary({ type, label, value, onChange }) {
    return (
        <div>
            <label className='label-primary'>{label}</label>
            <input  className="input-primary" type={type} value={value} onChange={onChange} />
        </div>
    );
}

export default InputPrimary;
