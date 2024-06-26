import styles from "../styles/imageGallery.module.css";
import close from "../icons/close-2.svg";
import share from "../icons/share.svg";
import next from "../icons/next.svg";
import previous from "../icons/previous.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import ShareButtons from "./ShareButtons";

interface LightboxProps {
    closeLightBox : () => void
    prevSlide : () => void
    nextSlide : () => void
    userUrl: string
    userEmail: string
    userCaption: string
    userDesc: string
}

export default function LightBox({closeLightBox, userUrl, userEmail, userCaption, userDesc, prevSlide, nextSlide }: LightboxProps) {

  const [ showEdit, setShowEdit ] = useState(false)
  let imageObj: ImageEditorComponent;

  const openImage = () => {
    imageObj.open(userUrl)
  }


  return (
    <div>
      <div className={styles.lightBox}>
            <div className={styles.lightBox1}>
              <div className={styles.closeDiv}>
                <button className={styles.closeLightbox} onClick={closeLightBox}>
                    <img src={close} alt="close" width="30px"/>
                  </button>
              </div>

              
                
              <div className={styles.lightBox2}>
                <div className={styles.lightContainer}>
                  <div className={styles.lightboxDetails}>
                        <div className={styles.heading}>
                            <div>
                              <div className={styles.profilePic}>{userEmail.charAt(0)}</div>
                              <h4>{userEmail}</h4>
                            </div>

                            <p>Caption: {userCaption}</p>
                          <p>Description: {userDesc}</p>
                        </div>
                      
                      <div>
                        <button className={styles.share} onClick={()=> setShowEdit(!showEdit)}>
                          <img src={share} alt="share" width={22}/>
                          {!showEdit ? "Edit" : "Close Edit"}
                        </button>
                      </div>
                  </div>
                
                {showEdit === false && <div className={styles.lightBoxImageContainer}> 
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={userUrl} alt="img" className={styles.mainImg} height={300}/></SwiperSlide>
                  </Swiper>

                  <div className={styles.navigation}>
                    <button
                      onClick={prevSlide}
                      // onKeyDown={prevKeydown}
                      >
                      <img
                        alt="left-arrow"
                        width="80px"
                        src={previous} />
                    </button>

                    <button
                      onClick={nextSlide}
                      // onKeyDown={nextKeydown}
                      >
                      <img
                        alt="right-button"
                        width="80px"
                        src={next}/>
                    </button>
                </div>
                </div>}

                {showEdit === true && 
                <div>
                  <div id="wrapperDiv" style={{height:'500px'}}>
                      <ImageEditorComponent created={openImage.bind({userUrl})} ref={ImageEditor=> {imageObj = ImageEditor as ImageEditorComponent}}> 
                      </ImageEditorComponent>
                  </div>
                </div>}

                {/* <div className="styles.mobileView"> */}
                          <ShareButtons/>
                        {/* </div> */}
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

