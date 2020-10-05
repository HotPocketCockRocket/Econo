
var firebaseConfig = {
    apiKey: "AIzaSyA885hREVDaEQj26_I1gLSgjmtfu9LwZVE",
    authDomain: "econo-22b24.firebaseapp.com",
    databaseURL: "https://econo-22b24.firebaseio.com",
    projectId: "econo-22b24",
    storageBucket: "econo-22b24.appspot.com",
    messagingSenderId: "358567154682",
    appId: "1:358567154682:web:4d9fe622d794355a3f0a43"
};

firebase.initializeApp(firebaseConfig);

alert("running")
firebase.database().ref("Countries/").once('value' function(snapshot)
{
    var list
    snapshot.forEach(function(childSnapshot)
    {
        list.push(childSnapshot.val())
        
        
    })

})








