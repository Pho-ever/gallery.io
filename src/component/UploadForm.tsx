import { useState } from "react";
import upload from "../icons/upload.svg";
import close from "../icons/close.svg";
import styles from "../styles/home.module.css";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from 'firebase/firestore';
import { useAuth } from './../hooks/useAuth';
import { toast } from "react-toastify";
import { TailSpin } from 'react-loader-spinner';


const UploaderForm = () => {

  const [ selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [uploadModal, setUploadModal] = useState(false);

  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const { user } = useAuth();



      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
          setSelectedFile(e.target.files[0]);
        }
      }

      const startUpload = (file: File) => {
        if(!file) {
            return;
      } 



      const fileId = uuidv4();
      const formatFile = file.type.split('/')[1]
      const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress)
          }, (error) => {
              setError(error)
              toast.error(error.message, {
                position: "top-center",
              });
          }, async() => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          setProgress(progress)
          await addDoc(collection(db, "images"), {
              imageUrl: downloadURL,
              createdAt: new Date(),
              userEmail: user?.email,
              userCaption: caption,
              userDescription: description
              })
      })}


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(selectedFile) {
      try {
      // start uploading the image
      setCaption(caption)
      setDescription(description)
      startUpload(selectedFile)
      toast.success("Uploading Image...", {
        position: "top-center",
      });
      setUploadModal(false)
      } catch (error) {
        toast.error("Please try again", {
          position: "top-center",
        });
      }
    }
    setSelectedFile(null)
    setDescription("")
    setCaption("")

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
                <button className={styles.submit} disabled={!selectedFile}>
                  {progress ? 
                    <TailSpin color='#fff' height={24} width={24} ariaLabel='loading' />
                  : "Upload"}
                </button>
            </form>
        </div>
      </div>}

    </div>
  )
}

export default UploaderForm
