import React from 'react'
import Icon from './Icon'

const IconGoogle = ({
    svgClass
}) => {
    return (
        <Icon svgclassName={svgClass}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 18 18" style={{ enableBackground: "new 0 0 18 18" }}>
                <path className="IconGoogle1" d="M17.8,7.2h-0.7v0H9v3.6h5.1c-0.7,2.1-2.7,3.6-5.1,3.6C6,14.4,3.6,12,3.6,9S6,3.6,9,3.6c1.4,0,2.6,0.5,3.6,1.4
	l2.5-2.5C13.5,0.9,11.4,0,9,0C4,0,0,4,0,9s4,9,9,9s9-4,9-9C18,8.4,17.9,7.8,17.8,7.2z"/>
                <path className="IconGoogle2" d="M1,4.8L4,7c0.8-2,2.7-3.4,5-3.4c1.4,0,2.6,0.5,3.6,1.4l2.5-2.5C13.5,0.9,11.4,0,9,0C5.5,0,2.5,2,1,4.8z" />
                <path className="IconGoogle3" d="M9,18c2.3,0,4.4-0.9,6-2.3l-2.8-2.4c-0.9,0.7-2,1.1-3.2,1.1c-2.3,0-4.3-1.5-5.1-3.6L1,13.1C2.5,16,5.5,18,9,18z
	"/>
                <path className="IconGoogle4" d="M17.8,7.2h-0.7v0H9v3.6h5.1c-0.4,1-1,1.9-1.8,2.5c0,0,0,0,0,0l2.8,2.4c-0.2,0.2,3-2.2,3-6.7
	C18,8.4,17.9,7.8,17.8,7.2z"/>
            </svg>
        </Icon>
    )
}
export default IconGoogle;