
import styles from "../styles/imageGallery.module.css";
import { useState } from 'react';
import useFIrestore from '../hooks/useFirestore';
import { TailSpin } from 'react-loader-spinner';
import LightBox from "./lightBox"
import FilterDropdown from "./filterDropdown"




export default function ImageGallery() {

  const { docs: images, isLoading, setOrderByAction } = useFIrestore('images');
  const [dropdownIndex, setIsDropdownIndex] = useState(-1);
  const [ selectedOption, setSelectedOption] = useState("createdAt")

  const filter = [
    { key: 'Sort by', value: '', disabled: true },
    { key: 'Most recent', value: 'createdAt' },
    { key: 'Email (Z-A)', value: 'userEmail' },
    { key: 'Description(Z-A)', value: 'userDescription' },
    { key: 'Caption(Z-A)', value: 'userCaption' },
  ];


  const handleDropdownChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    setOrderByAction(selectedValue)
    console.log(selectedValue)
  };

  
  const handleShowLightbox = (index: any) => {
    const activeIndex = dropdownIndex === index ? -1 : index
    setIsDropdownIndex(activeIndex)
  }

  const handledPrevImage = (index: any) => {
    return handleShowLightbox(index - 1)
  }

  const handledNextImage = (index: any) => {
    return handleShowLightbox(index + 1)
  }

  // useEffect((selectedValue: any) => {
  //   setOrderByAction(selectedValue); // Change the order by field as needed
  // }, [setOrderByAction]);

  return (
    <div>
      {
        isLoading ? 
        <div className={styles.loader}>
          <TailSpin color='#b20110a4' height={150} width={150} ariaLabel='loading' />
        </div> 
        : 
        <>
          <FilterDropdown data={filter} onChange={handleDropdownChange}/>

          <div className={styles.container}>
            {
            images.map((image, index) => (
              <div key={index}>
                  <div className={styles.imageContainer} key={index} onClick={()=> handleShowLightbox(index)}>
                  <div className={styles.image}>
                      <img src={image.imageUrl} alt="img" width={350} height={200}/>
                  </div>
                  <div className={styles.info}>
                    <p>Uploaded by: <span>{image.userEmail}</span></p>
                    <p>Caption: {image.userCaption}</p>
                    <p>Description : {image.userDescription}</p>
                  </div>
              </div>

              {
                dropdownIndex === index && 
                 <LightBox
                  closeLightBox={() => setIsDropdownIndex(-1)}
                  prevSlide={() => handledPrevImage(index)}
                  nextSlide={()=> handledNextImage(index)}
                  userUrl={image.imageUrl}
                  userEmail={image.userEmail}
                  userCaption={image.userCaption}
                  userDesc={image.userDescription}
                 />
              }
      </div>
      ))
    }
        </div>
      </>
        
  } 
  </div>
  )
}
