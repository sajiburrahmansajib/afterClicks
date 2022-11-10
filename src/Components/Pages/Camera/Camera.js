import React from 'react';
import './Camera.css'
import img from './camera.png'

const Camera = () => {
    return (
        <div className='camera-container'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h2>NIKON D850 TARGETS MULTIMEDIA MOVIE MAKERS</h2>
                <p>There is full-frame 4K recording at 24/25/30p, 120fps shooting in HD, focus peaking in HD, zebra stripes, mic and headphone sockets, a tilting 3.2″ 2.36M-dot touchscreen and uncompressed 4:2:2 8-bit 4K HDMI output. There’s dual card slots: one SD and one XQD, as used on the Nikon D4 and D5 and Sony FS7 camera.

                    The D850 also offers the 153-point AF system from the flagship D5, ISO from 64-25,600 (expandable to 32 or up to 102,400). The D850’s magnesium alloy body is weather sealed, and illuminated controls. It will go on sale on September 7 £3,499.99/ $3299.95 body only.</p>
            </div>

        </div>
    );
};

export default Camera;