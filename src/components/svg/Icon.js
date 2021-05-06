import React from 'react'

const Icon = ({
    svgClass,
    children
}) => {
    return (
        <i className={`icon d-flex flex-wrap${svgClass}`}>
            {children}
        </i>
    )
}
export default Icon;