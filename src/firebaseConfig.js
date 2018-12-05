import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAEap_1UUAiFqux3KU5SctBy96KRfoxRHo",
    authDomain: "dev-f-netflix.firebaseapp.com",
    databaseURL: "https://dev-f-netflix.firebaseio.com",
    projectId: "dev-f-netflix",
    storageBucket: "dev-f-netflix.appspot.com",
    messagingSenderId: "906879085558"
  };

  firebase.storage = {
    match: {
      bucket: {
        match: {
          allPaths:'**',
          allow: ['read', 'write']
        }
      }
    }
  }

  export default firebase.initializeApp(config);
