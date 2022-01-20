import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Watch} from "react-loader-spinner";

const CustomLoader = () => {
    return (
        <div className='d-flex justify-content-lg-center loader'>
            <Watch 
                height={100}
                width={100}
                color="#6c807c"
                arialLabel="loading-indicator" />
        </div>
    );
};

export default CustomLoader;