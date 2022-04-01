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


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}