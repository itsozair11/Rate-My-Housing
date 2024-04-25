// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVLgfE93zstjSBe2cr8tabgpOong_rHhE",
    authDomain: "ratemyhousing-98264.firebaseapp.com",
    databaseURL: "https://ratemyhousing-98264-default-rtdb.firebaseio.com/",
    projectId: "ratemyhousing-98264",
    storageBucket: "ratemyhousing-98264.appspot.com",
    messagingSenderId: "493054559658",
    appId: "1:493054559658:web:9d9ea9e5554983202857d3",
    measurementId: "G-MGL6Q8113X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const database = firebaseConfig.database();