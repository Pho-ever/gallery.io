import React from 'react';
import background from "../icons/background.jpg";
import styles from "../styles/imageGallery.module.css";

export default function ImageGallery() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <div className={styles.image}>
                <img src={background} alt="img" width={300}/>
            </div>
        <p>caption</p>
        <p>Date created</p>
        <p>Description</p>
      </div>
    </div>
  )
}
