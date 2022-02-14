import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAa-SV8NOdp9o1WgdcADV0FpHW1MuatITI",
    authDomain: "fish-store-2022.firebaseapp.com",
    databaseURL: "https://fish-store-2022-default-rtdb.firebaseio.com",
    // projectId: "fish-store-2022",
    // storageBucket: "fish-store-2022.appspot.com",
    // messagingSenderId: "132631468803",
    // appId: "1:132631468803:web:cb24e6dad522bd5b07a736",
    // measurementId: "G-LT5B3PNQR5"
})

// firebase  App - rebase binding
const base = Rebase.createClass(firebaseApp.database());

// this is a named export 
export { firebaseApp };

// this is the default export 
export default base;