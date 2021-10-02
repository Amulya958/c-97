const firebaseConfig = {
      apiKey: "AIzaSyD3ydVcd8GhELCiBr2f6u7gBJul3gjBkOY",
      authDomain: "amul-debf2.firebaseapp.com",
      databaseURL: "https://amul-debf2-default-rtdb.firebaseio.com",
      projectId: "amul-debf2",
      storageBucket: "amul-debf2.appspot.com",
      messagingSenderId: "80914614791",
      appId: "1:80914614791:web:2906c886eca3073a23f8a2",
      measurementId: "G-TX2MR4F0NJ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML= "Welcome"+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output_trendingrooms").innerHTML += row;
});
});
}
 getData();

      function add_room(){
            room_name= document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
            });
localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";

}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logout_page()
{
localStorage.removeItem("user_name");
window.location="index.html";
localStorage.removeItem("room_name");
}
