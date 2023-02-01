import {
    initializeApp,
    getApp
} from "firebase/app";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import {
    getAuth
} from "firebase/auth"
import {
    v4
} from "uuid";


const initializeFirebaseAppIfNecessary = () => {
    try {
        return getApp();
    } catch (any) {
        const firebaseConfig = {
            apiKey:process.env.NEXT_PUBLIC_FRBS_APIKEY_ENVKEY,
            authDomain:process.env.NEXT_PUBLIC_FRBS_AUTHDOMAIN_ENVKEY,
            projectId:process.env.NEXT_PUBLIC_FRBS_PROJECTID_ENVKEY,
            storageBucket:process.env.NEXT_PUBLIC_FRBS_STORAGEBUCKET_ENVKEY,
            messagingSenderId:process.env.NEXT_PUBLIC_FRBS_MESSAGINGSENDERID_ENVKEY,
            appId:process.env.NEXT_PUBLIC_FRBS_APPID_ENVKEY,
        };
        return initializeApp(firebaseConfig);
    }
}

const app = initializeFirebaseAppIfNecessary()

// initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)

export const uploadFileToFirebase = async (file, location) => {
    const storageRef = ref(storage, `${location}/${v4()}`)
    await uploadBytes(storageRef, file)
    const imgUrl = await getDownloadURL(storageRef)
    return imgUrl
}

export default function getFirestoreApp() {
    return app
}