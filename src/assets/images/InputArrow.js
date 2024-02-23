import React from 'react'

const InputArrow = ({isOpen}) => {
    return (
        <svg
            className='drop-down-svg'
            style={{
                transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                position: 'absolute',
                top: '50%',
                right: '10px', // Adjust the positioning as needed
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
        </svg>
    )
}

export default InputArrow