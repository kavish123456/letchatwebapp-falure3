

var firebaseConfig = {
  apiKey: "AIzaSyCjzRs_UR8V4fptz8Eks7L8dnGno6-L6o0",
  authDomain: "lets-chat-web-app-f0a3e.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f0a3e-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f0a3e",
  storageBucket: "lets-chat-web-app-f0a3e.appspot.com",
  messagingSenderId: "641700850149",
  appId: "1:641700850149:web:6d6616e63278dfadff670c"
};
firebasse.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hello " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name - " + Room_names); 
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
 document.getElementById("output").innerHTML += row; });
 });}
getData();

function redirectToRoomName(name) 
{ 
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; }

