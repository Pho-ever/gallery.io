
import styles from "../styles/imageGallery.module.css";
import useFIrestore from '../hooks/useFirestore';
import { TailSpin } from 'react-loader-spinner';

export default function ImageGallery() {

  const { docs: images, isLoading } = useFIrestore('images');

  return (
    <div>
      {
          isLoading ? 
        <div className={styles.loader}>
          <TailSpin color='#b20110a4' height={150} width={150} ariaLabel='loading' />
        </div> 
        : 
        <div className={styles.container}>
          {
            images.map((image, index) => (
            <div className={styles.imageContainer} key={index}>
              <div className={styles.image}>
                  <img src={image.imageUrl} alt="img" width={350} height={200}/>
              </div>
              <div className={styles.info}>
                <p>Uploaded by: <span>{image.userEmail}</span></p>
                <p>Caption: {image.userCaption}</p>
                <p>Description : {image.userDescription}</p>
              </div>
          </div>
            ))
          }
        </div>
      }
    </div>
  )
}
