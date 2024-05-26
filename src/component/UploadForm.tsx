import { useState } from "react";
import styles from "../styles/home.module.css";
import upload from "../icons/upload.svg";
import close from "../icons/close.svg";


const UploaderForm = () => {

  const [ selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [uploadModal, setUploadModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(selectedFile) {
      // start uploading the image
      console.log(
        selectedFile,
        "caption :", caption,
        "description :", description
      )
    }
    setSelectedFile(null)
  }

  return (
    <div>
      <button 
      className={styles.upload}
      onClick={()=> setUploadModal(true)}
      >
        <img src={upload} alt="upload" width="20px"/>
        Upload here
      </button>

     { uploadModal && <div className={styles.uploadOverlay}>
        <div className={styles.input}>
          <button 
            onClick={()=> setUploadModal(false)}
            className={styles.close}>
            <img src={close} alt="close" width="45px"/>
          </button>

          <form  onSubmit={handleSubmit}>
              <input
                onChange={handleFileChange}
                type="file"/>

                <input 
                type="text"  
                placeholder="Caption"
                onChange={e => setCaption(e.target.value)}
                />
                <textarea 
                name="" 
                id="" 
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
                />
                <button className={styles.submit}>Upload</button>
            </form>
        </div>
      </div>}

    </div>
  )
}

export default UploaderForm
