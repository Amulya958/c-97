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


firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);

name= message_data['name'];
message= message_data['message'];
like= message_data['like'];

name_withtag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4> <br>";
message_withtag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id + "value="+like+ "onlick='updateLike(this.id)'>";
span_withtag="<span class='glyphicon glyphicon-thumbs-up'> LIKE:"+like+"</span> </button> <hr>";

row=name_withtag + message_withtag + like_button + span_withtag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button-"+ message_id);

    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes= Number(likes) + 1 ;
     console.log(updated_likes);

     firebase.database().ref(room_name).child(message_id).update({
         like: updated_likes
     }); 
     
}

function logout_page()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}