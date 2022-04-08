//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();