import React from "react";
import seo from "../../assets/seo.jpg";
import "./services.css";

export const Services = () => {
    return (
        <div className="services-container">
            <div className="service-item">
                <div className="service-image-container">
                    <img src={seo} alt="Service 1" />
                    <div className="service-overlay"></div>
                </div>
                <h2>Service 1</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
                <button className="btn">View More</button>
            </div>
            <div className="service-item">
                <div className="service-image-container">
                    <img src={seo} alt="Service 2" />
                    <div className="service-overlay"></div>
                </div>
                <h2>Service 2</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
                <button className="btn">View More</button>
            </div>
            <div className="service-item">
                <div className="service-image-container">
                    <img src={seo} alt="Service 3" />
                    <div className="service-overlay"></div>
                </div>
                <h2>Service 3</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
                <button className="btn">View More</button>
            </div>
        </div>
    );
};
