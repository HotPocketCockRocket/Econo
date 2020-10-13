



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

let abt =  document.getElementById("SubmitLogin")

abt.addEventListener('click', () => 
{
    login()
})

let abt2 = document.getElementById("submitSignUp")

abt2.addEventListener("click", () =>
{
    signUp()
})

function show(item)
{
    document.getElementById(item).style.display = "block";
}
function hide(item)
{
    document.getElementById(item).style.display = "none";
}



function login()
{
    
    var email = document.getElementById("email").value;
    window.localStorage.setItem('email', email);
    var password = document.getElementById("password").value;
    console.log(email, password)
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){  
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    }); 
}

function signOut(){
    console.log("signing out")
    firebase.auth().signOut().then(function() {
        
        window.location.href = "index.html"
    }).catch(function(error) {
        console.log('Signed out Failed')
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    }); 
}



function createUserId(email)
{
    var total
    firebase.database().ref("userIds/").once('value', function(snapshot)
    {
        snapshot.forEach(function(childSnaphot)
        {
            total = childSnapshot.key
            console.log("Total: ", total)
        })

        firebase.database().ref("userIds/" + String(total+1)).set({
            username: email
        })
    })
}

function signUp(){
    
    
    window.email = document.getElementById("semail").value;
    window.localStorage.setItem('email', window.email);
    var password = document.getElementById("spassword").value;
    

    
      
    firebase.auth().createUserWithEmailAndPassword(window.email, password).catch(function(error) {
    // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message)
    });
    


    
}


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var username = user.email;
        window.username = username;
        console.log("logged in")
        window.location.href = "home.html"
        

    } else {
        

    }
    
});