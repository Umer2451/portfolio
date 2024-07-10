import React, { useState, useEffect } from "react";
import styles from "../fakestore/fakestorestyles/slider.module.css"
import images1 from "../../images/image1.png";
import images2 from  "../../images/image2.png";
import images3 from  "../../images/image3.png";
const images = [images1, images2, images3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slidercontent}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className= {styles.sliderimage}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
