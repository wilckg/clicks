import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slide() {

    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img key="slide_1" src={require('../../images/slide-1.jpg')} alt="slide" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img key="slide_2" src={require('../../images/slide-2.jpg')} alt="slide" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img key="slide_2" src={require('../../images/slide-3.jpg')} alt="slide" />
                    </div>
                </div>
            </Fade>
        </div>
    );

}