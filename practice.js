//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5D7yHHOBcI67KGMEDqIx_ZGGmA5Bxn2U",
    authDomain: "kwitter-41d47.firebaseapp.com",
    databaseURL: "https://kwitter-41d47-default-rtdb.firebaseio.com",
    projectId: "kwitter-41d47",
    storageBucket: "kwitter-41d47.appspot.com",
    messagingSenderId: "464579764301",
    appId: "1:464579764301:web:06036934e51a03ade67c04"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    }
    
    