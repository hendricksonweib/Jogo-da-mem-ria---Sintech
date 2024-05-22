import React from 'react'


function H1({ Title, color }) {
    return (
        <>
            <h1 className="title-main" style={{color:color}}>
                {Title}
            </h1>
        </>
    )
}

export default H1