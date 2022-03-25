
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD5D7yHHOBcI67KGMEDqIx_ZGGmA5Bxn2U",
      authDomain: "kwitter-41d47.firebaseapp.com",
      projectId: "kwitter-41d47",
      storageBucket: "kwitter-41d47.appspot.com",
      messagingSenderId: "464579764301",
      appId: "1:464579764301:web:06036934e51a03ade67c04"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
