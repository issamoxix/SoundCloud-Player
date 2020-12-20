// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGStZkyTvyEqCiFC5uAXMn7QdZXOYcNUE",
  authDomain: "soundcloud-player-4d9c4.firebaseapp.com",
  projectId: "soundcloud-player-4d9c4",
  storageBucket: "soundcloud-player-4d9c4.appspot.com",
  messagingSenderId: "853154686586",
  appId: "1:853154686586:web:99edeb35342bea7458bdc3",
  measurementId: "G-ENZPW7L4BL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
