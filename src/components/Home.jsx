import React from 'react'
import vg from "../assets/2.jpg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>MY FIRST WEBSITE</h1>
                    <p>Solution to all problems</p>
                </main>
            </div>
            <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    "Exceeding your expectations, consistently.
                    We don’t just sell products, we provide solutions.
                    Our service sets us apart from the rest."
                </p>
            </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        We are living in a world driven by technology. The advancement of technology has played an important role in the development of human civilization, along with cultural changes. Technology provides innovative ways of doing work through various smart and innovative means.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay: "0.3s",}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s", }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s", }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "0.9s", }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}

export default Home