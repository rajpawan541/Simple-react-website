import React from "react"
import seo from "../../assets/seo.jpg"
import "./services.css"

export const Services = () => {
    return(
        <div className="services">
        <div className="service-list">
          <div className="image-container">
            <img src={seo} alt="Service 1" />
            <div className="overlay"></div>
          </div>
          <h1>Service 1</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="service-list">
          <div className="image-container">
            <img src={seo} alt="Service 2" />
            <div className="overlay"></div>
          </div>
          <h1>Service 2</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="service-list">
          <div className="image-container">
            <img src={seo} alt="Service 3" />
            <div className="overlay"></div>
          </div>
          <h1>Service 3</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <button className="btn">View More</button>
        </div>
      </div>
    )
}