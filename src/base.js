import Rebase from 're-base';
import firebase from 'firebase';
import 'dotenv/config'

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
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