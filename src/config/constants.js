import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDWsAEg983OYIsK2cnPpv6qC9kWUjFpM2E",
  authDomain: "svartingknas-1296.firebaseapp.com",
  databaseURL: "https://svartingknas-1296.firebaseio.com",
  storageBucket: "svartingknas-1296.appspot.com",
  messagingSenderId: "449322754463"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
