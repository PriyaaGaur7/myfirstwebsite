import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.avif"
import img2 from "../assets/4.avif"

const Services = () => {
    return <div >
        <Carousel infiniteLoop
        autoPlay showStatus={false} showArrows={false}
        interval={5000}
        showThumbs={false}
        sc>
            <div>
                <img src={img1} alt="item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="item2" />
                <p className='legend'>Work on AI</p>
            </div>
        </Carousel>
    </div>
};

export default Services