/** @format */

import React from "react";
import BannerBackground from "../Assets/home-background.png";
import BannerImage from "../Assets/home-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h2 className="primary-heading">
            Your Favourite Food will be Delivery Fresh
          </h2>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis
            duis elementum interdum facilisi bibendum.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
