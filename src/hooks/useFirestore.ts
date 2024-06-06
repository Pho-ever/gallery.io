import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';

const useFIrestore = (collectionName: string) => {

    type Image = {
        userEmail: string,
        createdAt: string;
        imageUrl: string,
        userCaption: string,
        userDescription: string
    }
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [orderByAction, setOrderByAction] = useState<string>("createdAt");

    useEffect(() => {
        let unsubscribe: () => void
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy(orderByAction, "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                  const images: Image[] = [];
                  querySnapshot.forEach((doc) => {
                    const imageUrl = doc.data().imageUrl;
                    const createdAt = doc.data().createdAt.toDate();
                    const userEmail = doc.data().userEmail;
                    const userCaption = doc.data().userCaption;
                    const userDescription = doc.data().userDescription;
                    images.push({
                        imageUrl, 
                        createdAt,
                        userEmail,
                        userCaption,
                        userDescription
                    })
                  });
                  setDocs(images);
                  setIsLoading(false)
                });
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
 
        getData();
        return () => unsubscribe && unsubscribe();
    }, [collectionName])

  return {
    docs, isLoading
  }
}

export default useFIrestore;
