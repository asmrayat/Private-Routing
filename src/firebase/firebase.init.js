import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initauth = () => {
    const app = initializeApp(firebaseConfig);
}
export default initauth;