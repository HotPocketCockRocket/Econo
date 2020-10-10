function getUserName()
{
    const email = window.localStorage.getItem("email")
    let username = email.slice(0, email.indexOf("@")).replace(".", "")
    return(username)
}

function getSelfData()
{
    firebase.database().ref("Countries/" + window.localStorage.getItem("landName")).once('value', function(snapshot)
    {
        var 
    })
}




function localStorageWriteLandName()
{
    username = getUserName()


    firebase.database().ref("Users/"+getUserName()).once('value', function(snapshot)
    {
        var country
        
        snapshot.forEach(function(childSnapshot)
        {
            country = childSnapshot.val()
            
        })

        window.localStorage.setItem("landName", country)

        //getSelfData()
    })
}



function checkFirstSetup()
{
    username = getUserName()  

    firebase.database().ref("Users/"+username).once('value', function(snapshot)
    {
        var info = []
        snapshot.forEach(function(childSnapshot)
        {
           info.push(childSnapshot.val())
        })

        if (info[0] == true)
        {
            window.localStorage.setItem("firstTime", true)
        }

        else
        {   
            window.location.href="setup.html"
        }
    })
}




// function leaderBoard()
// {
//     firebase.database().ref("Countries").once('value', function(snapshot)
//     {
//         var lis = []
//         var dic = []
//         snapshot.forEach(function(childSnapshot)
//         {

//             lis.push(childSnapshot.val())

//         })

//         for (i=0; i<=lis.length, i++)
//         {
//             var lin 
//             firebase.database().ref("Countries/"+lis[i]).once('value', function(snapshot)
//             {
//                 snapshot.forEach(function(childSnapshot)
//                 {
//                     lin = childSnapshot.val()

//                 })

//                 dic.push("Population": lin)
//                 alert(dic)
//             })
//         }
//     })
// }




if (window.localStorage.getItem("firstTime") != true)
{
    checkFirstSetup()
}

localStorageWriteLandName()

