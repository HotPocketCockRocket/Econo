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

function align()
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



        var presentableData = "<h1>Statistics</h1><h4>Population: "+ pop +"</h4><h4>GDP Per Capita: " + gdpc + "</h4><h4>Currency Value: "+cval+"</h4><h4>Poverty Level: " + pov + "</h4><h4>Allies: " + allies        
        
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
            var key = childSnapshot.key
            
            firebase.database().ref("Countries/"+key+"/stats").once('value', function(snapshot)
            {


            })  

        })

    })
}

function sendChatMessage() 
{
    window.message = document.getElementById("messageInput").value
    if (window.message == "") {
        return
    }

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    window.dateTime = date + ' ' + time;

    firebase.database().ref("Chat/MessageIDs/").once('value', function (snapshot) {
        document.getElementById('messageInput').value = ''
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val()
            var localMessageID = childData + 1;

            firebase.database().ref("Chat/MessageIDs/").set
            ({
                Messageid: localMessageID
            })

            firebase.database().ref("Chat/Messages/" + localMessageID).set
            ({
                Message: window.message,
                User: getUserName(),
                Time: window.dateTime
            });


        })
    })
}

function chatUpdate() 
{
    var textarea = document.getElementById('chatOutput');
    textarea.scrollTop = textarea.scrollHeight;
    
    var output = "";
    firebase.database().ref('Chat/MessageIDs/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            firebase.database().ref("Chat/Messages").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();

                    output += "\n(" + childData["User"] + "): " + childData['Message']+"<br>";
                    window.latestmessageuser = childData["User"]
                    window.latestmessage = childData["Message"]

                })

                if (window.prevmessage != output && getUserName() != window.latestmessageuser) {
                    var notify = new Notification
                        (window.latestmessageuser,
                            {
                                body: window.latestmessage 
                            });
                    setTimeout(notify.close.bind(notify), 2000);
                }

                window.prevmessage = output
                document.getElementById("chatOutput").innerHTML = output;
            })
        });
    })
}

function update()
{
    getSelfData()
    chatUpdate()
}

if (window.localStorage.getItem("firstTime") != true)
{
    checkFirstSetup()
}

localStorageWriteLandName()
getSelfData()


leaderBoard()
var inte = setInterval(update, 1000)

