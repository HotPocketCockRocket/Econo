function getUserName()
{
    alert("OMG IT WORK")
    const email = window.localStorage.getItem("email")
    var username = email.slice(0, email.indexOf("@"))
    return(username)
 

}

// function getCountryInfo()
// {
//     firebase.database().ref("Countries/localStorage.")
// }

getUserName()