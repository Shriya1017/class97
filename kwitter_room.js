var firebaseConfig = {
      apiKey: "AIzaSyCa9YDWitnvvSrX2d2-d764rG6SYvjWiWg",
      authDomain: "class93-4e44a.firebaseapp.com",
      databaseURL: "https://class93-4e44a-default-rtdb.firebaseio.com",
      projectId: "class93-4e44a",
      storageBucket: "class93-4e44a.appspot.com",
      messagingSenderId: "1002811358610",
      appId: "1:1002811358610:web:47d0f1486c73f80a52554b",
      measurementId: "${config.measurementId}"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function add_room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"addingUser"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}