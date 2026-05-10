import React from "react";
import  INFO  from "../Data/user";
import "../Styles/HomeContent.css";
import yo from "../Assets/YO.jpg";

function HomeContent() {
    return (
        <>
        <div className="home-container">
            <div className="homepage-first-area">
                <div className="homepage-first-area-left-side">
                    <div className="title homepage-title">
                        {INFO.homepage.title}
                    </div>

                    <div className="subtitle homepage-subtitle">
                        {INFO.homepage.description}
                    </div>
                </div>

                <div className="homepage-first-area-right-side">
                    <div className="homepage-image-container">
                        <div className="homepage-image-wrapper">
                            <img
                                src={INFO.main.logo}
                                alt="image not found"
                                className="homepage-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeContent;