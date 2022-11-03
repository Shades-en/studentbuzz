// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getStorage } from "firebase/storage";

//const firebase = require('firebase');

const { initializeApp } = require('firebase/app')
const { getStorage, } = require('firebase/storage')

//var getStorage = require('firebase').getStorage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMKnmM_a1tHne5a_-xhsVLmxZK5SPEoc",
  authDomain: "reva-hack-e99dd.firebaseapp.com",
  projectId: "reva-hack-e99dd",
  storageBucket: "reva-hack-e99dd.appspot.com",
  messagingSenderId: "931368211632",
  appId: "1:931368211632:web:2271bb35a14cede6695775"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


//console.log(spaceRef)

module.exports =  storage 