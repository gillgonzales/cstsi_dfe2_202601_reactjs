/* eslint-disable react/prop-types */

import './button.css'
const Button = ({ onClickFun, children }) => {
    return (
        <button
            onClick={onClickFun}> 
            {children}
        </button>
    )
}

export default Button