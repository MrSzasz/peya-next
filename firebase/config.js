import {
    initializeApp
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


const firebaseConfig = {
    apiKey: "AIzaSyC331gkvDz4gIRP8fii485wsBrbkohqnt8",
    authDomain: "peya-pagos.firebaseapp.com",
    projectId: "peya-pagos",
    storageBucket: "peya-pagos.appspot.com",
    messagingSenderId: "146826736801",
    appId: "1:146826736801:web:968b38ad6b94d44c53ece0"
};
const app = initializeApp(firebaseConfig);
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