function getUserName()
{
    const email = window.localStorage.getItem("email")
    let username = email.slice(0, email.indexOf("@")).replace(".", "")
    return(username)
}


function getAllCurrentData()
{
    land = window.localStorage.getItem("landName")
    firebase.database().ref("Countries/"+land+"/stats").once('value', function(snapshot)
    {
        var li=[]
        snapshot.forEach(function(childSnapshot)
        {
            li.push(childSnapshot.val())
            if (li.length == 5)
            {
                
            }
        })

    })
}


function getProperties()
{
    land = window.localStorage.getItem("landName")    
}

function useNuclearWeapons()
{
    //token
}

function assassinate()
{
    //token
}

function decWar()
{
    //token
}

function enforce()
{
    //token
}

function allign()
{
    //token
}

function advertiseCountry()
{
    land = window.localStorage.getItem("landName")
    firebase.database().ref("Countries/"+land+"/stats/population").once('value', function(snapshot)
    {
        
        var num = (Math.floor(Math.random() * 10)*100) + snapshot.val()
        
    
        firebase.database().ref("Countries/"+land+"/stats").once('value', function(snapshot)
        {
            var li=[]
            snapshot.forEach(function(childSnapshot)
            {
                li.push(childSnapshot.val())
                if (li.length == 5)
                {
                    firebase.database().ref("Countries/"+land+"/stats").set({
                        Allies: li[0],
                        GDPC: li[1],
                        PO: li[2],
                        cval: li[3],
                        population: num
                    })
                }
            })

        })  
    })
}





function getSelfData()
{
    console.log("updating")
    land = window.localStorage.getItem("landName")

    firebase.database().ref("Countries/" + land + "/stats").once('value', function(snapshot)
    {
        var li = []

        snapshot.forEach(function(childSnapshot)
        {
            li.push(childSnapshot.val())
            
        })

        var pop = li[3];
        var gdpc = li[2];
        var cval = li[1];
        var pov = li[4];
        var allies = li[0];



        var presentableData = "<h1>Stats:</h1><h4>Population: "+ pop +"</h4><h4>GDP Per Capita: " + gdpc + "</h4><h4>Currency Value: "+cval+"</h4><h4>Poverty Level: " + pov + "</h4><h4>Allies: " + allies        
        
        document.getElementById("information").innerHTML = presentableData
        
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

function leaderBoard()
{
    firebase.database().ref("Countries").once('value', function(snapshot)
    {
     
        snapshot.forEach(function(childSnapshot)
        {
            
            firebase.database().ref("Countries/"+childSnapshot.key)
            
            

        })

    })
}

if (window.localStorage.getItem("firstTime") != true)
{
    checkFirstSetup()
}

localStorageWriteLandName()
getSelfData()


leaderBoard()
var inte = setInterval(getSelfData, 1000)

