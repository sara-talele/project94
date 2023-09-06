var firebaseConfig = {
      apiKey: "AIzaSyBvqtwn_C4fyKR0E70mUkkXeKIgCPra5Y4",
      authDomain: "kwitter-e8e13.firebaseapp.com",
      databaseURL: "https://kwitter-e8e13-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8e13",
      storageBucket: "kwitter-e8e13.appspot.com",
      messagingSenderId: "365771735773",
      appId: "1:365771735773:web:7a6c9371aec71e556d1134"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();