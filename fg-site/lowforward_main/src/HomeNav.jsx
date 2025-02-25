import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeItem from "./HomeItem.jsx";
import Logo from "../src/assets/images/Logo.png";
import meditation from "../src/assets/images/meditation.png";
import master from "../src/assets/images/master.png";

const HomeNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  // Handle key navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setSelectedItem((prev) => (prev + 1) % 2); // 2 is the number of slides
    } else if (e.key === "ArrowLeft") {
      setSelectedItem((prev) => (prev - 1 + 2) % 2); // 2 is the number of slides
    }
  };

  // Set up event listener for keydown
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id="pages"
      className="max-w-[1040px] m-auto md:pl-20 p-4 overflow-hidden"
    >
      <img
        className="w-full max-w-screen-md h-600 object-cover justify-center"
        src={master}
        alt="/"
      />
      <div className="relative flex justify-center items-center">
        <Carousel
          selectedItem={selectedItem}
          onChange={setSelectedItem}
          showThumbs={false}
          infiniteLoop
          autoPlay={false}
          swipeable={true}
          emulateTouch={true}
          centerMode={false}
          showStatus={false}
          width="100%"
          dynamicHeight={false}
        >
          <div className="flex justify-center items-center w-full h-full">
            <div className="max-w-[90%] md:max-w-[700px] md:max-h-[500px] w-full h-[350px] min-h-0">
              <HomeItem
                img={Logo}
                title="Form and implement an unstoppable gameplan in fighting games, for absolute newcomers and veterans alike."
                page="https://lowforward.com/#/concepts"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-[90%] md:max-w-[700px] md:max-h-[500px] w-full h-[350px] min-h-0">
              <HomeItem
                img={meditation}
                title="Need to brush up on your fighting game terminology or need some character resources?"
                page="https://lowforward.com/#/resources"
              />
            </div>
          </div>
        </Carousel>
      </div>
      <h1 className="text-2xl font-bold text-center text-[whitesmoke]">
        The ultimate guide for learning fighting games, for beginners and
        experts!
      </h1>
    </div>
  );
};

export default HomeNav;
