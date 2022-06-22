import { useState} from 'react'
import './Button.css';

function Button({addOne}) {
  return (
    <div onClick={addOne}>
        Click here
    </div>
  );
}

export default Button;
