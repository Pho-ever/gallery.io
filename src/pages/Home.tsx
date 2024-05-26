import React from 'react';
import Navbar from "../component/Navbar";
import ImageGallery from "../component/ImageGallery";
import UploaderForm from "../component/UploadForm";
import styles from "../styles/home.module.css";


export default function Home() {

  return (
    <div className={styles.container}>
      <Navbar/>
      <UploaderForm/>
      <ImageGallery/>
    </div>
    
  )
}
