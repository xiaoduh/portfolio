import React from 'react';
import cv from "../../assets/img/cv.pdf";

const Btn = () => {
    return (
        <div className='cta'>
            <a href={cv} download className='btn'>Mon CV au format PDF</a>
            <a href="#contact" className='btn btn-primary'>Me contacter</a>
        </div>
    );
};

export default Btn;