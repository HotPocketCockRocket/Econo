
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

function setup(name, polphil, econsys)
{

    email = window.localStorage.getItem("email")
    
    firebase.database().ref("Countries/"+name).set({
        name: name,
        econsys: econsys,
        polphil: polphil,
        founder: email
        
    })
    alert("All Set Up!")
    move()

    
}
function move()
{
    window.location.href="home.html"
}

function show(item)
{
    document.getElementById(item).style.display = "block";
    
}

function hide(item)
{
    document.getElementById(item).style.display = "none";
    

}

function setName()
{
 
    window.landname = document.getElementById("country").value
    
    hide("q1")
    show("q2")
    
}

function setEcoSys()
{
    window.ecosys=document.getElementById("ecosys").value

    hide("q2")
    show("q3")

}

function setPilPhil()
{
    window.polphil= document.getElementById("polphil").value
    
    
    setup(window.landname, window.polphil, window.ecosys)
}