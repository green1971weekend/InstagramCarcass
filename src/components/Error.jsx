import React from 'react';
import img from '../error.png';

const Error = () => {
    // <> </> - React fragment for rendering several elements. In this component serves as example and isn't necessary.
    return (
        <>      
            <img src={img} alt="error"></img>
        </>
    );
}

export default Error;
