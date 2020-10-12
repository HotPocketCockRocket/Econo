
function getUserName()
{
    const email = window.localStorage.getItem("email")
    var username = email.slice(0, email.indexOf("@")).replace(".", "")
    return(username)
}
function setup(name, polphil, econsys)
{

    var username = getUserName().toString()
    email = window.localStorage.getItem("email")
    console.log(name, econsys, polphil, email)
    window.localStorage.setItem("landName", name)
    document.getElementById("moveButton").style.display = "block";



    firebase.database().ref("Users/" + username).set({
        landName: name,
        email: window.localStorage.getItem("email"),
        created: true
    })

    
    
    firebase.database().ref("Countries/"+name).set({
        name: name,
        econsys: econsys,
        polphil: polphil,
        founder: email
    })

    firebase.database().ref("Countries/"+name+"/stats").set({
        population: 10000,
        GDPC: 5000,
        PO: 0.3,
        cval: 0.5,
        Allies: "none"
    })

}


function move(){
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