import React from "react";

function HomeContent() {
    return (
        <div className="home-content">
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
                                src="homepage.jpg"
                                alt="about"
                                className="homepage-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;