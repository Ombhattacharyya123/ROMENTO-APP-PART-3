const firebaseConfig = {
    apiKey: "AIzaSyCqmT5GiqKxNTRVyQ1SEVF3-1FUiEFjwO8",
    authDomain: "romento-social-center.firebaseapp.com",
    projectId: "romento-social-center",
    storageBucket: "romento-social-center.appspot.com",
    messagingSenderId: "769125013055",
    appId: "1:769125013055:web:544981f3b2217f2bf78a8a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    })
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
  console.log("room_name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html"
}