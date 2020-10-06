
function getUserName()
{
    const email = window.localStorage.getItem("email")
    var username = email.slice(0, email.indexOf("@"))
    return(username)
}
function setup(name, polphil, econsys)
{

    email = window.localStorage.getItem("email")
    console.log(name, econsys, polphil, email)
    
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
    var username = getUserName().toString()
    alert(username)
    firebase.database().ref("Users/+username").set({
        landName: "bruh",
        email: "bruh"

        
        
    })
    //setup(window.landname, window.polphil, window.ecosys)
}