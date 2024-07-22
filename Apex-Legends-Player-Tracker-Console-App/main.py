# Apex Legends Player Tracker
# Utilizes API data provided by https://apexlegendsapi.com
# Written by returnMarcco
# github.com/returnMarcco

import requests as rq
import json
import random


def playerToQuery():
    userToQuery = input("Enter the username of the player you would like to query: ")
    return userToQuery

def platformChoice():
    
    userToQuery = playerToQuery()
    pcPlatform = "PC"
    playstationPlatform = "PS4"
    xboxPlatform = "X1"
    apexPlayerDataAPI = ""
    wavesGoodbye = "waves goodbye and says: "
    randomQuipList = ["Edgelord Bangers " + wavesGoodbye + "'Clips are what civvies put in their hair... '", "Edgelord Bangers " + wavesGoodbye + "'Pop the smoke, make 'em broke.' ", "Pathy " + wavesGoodbye + "'Let's make some new friends, and then destroy them.' ", "Octane " + wavesGoodbye + "'All aboard the Octrain!' "]
    
    print("Enter the number relevant to the platform user [ " + userToQuery + " ] plays on: ")
    print("1 - PC")
    print("2 - Playstation")
    print("3 - Xbox")
    print("4 - Exit Program")
    platformOfUser = input()
    
    if (platformOfUser == "1"):
       
       apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + pcPlatform
        

    elif (platformOfUser == "2"):
        apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + playstationPlatform
        

    elif (platformOfUser == "3"):
        apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + xboxPlatform
        
    
    elif (platformOfUser == "4"):
        print(random.choice(randomQuipList))
        return
    
    else:
        print("That choice is invalid. Please select from one of the available options.")
        platformChoice()
    
    
    return apexPlayerDataAPI

def apiCall():
    apexPlayerDataAPI = platformChoice()
    try:
        r = rq.get(apexPlayerDataAPI) # Made API call and stored data in variable requestedData
        r.raise_for_status()
        response = r.json() # Storing json format data from the api call in variable response


        print(json.dumps(response, indent = 4)) # Convert python object data to formatted JSON string
        print("\n")
        print("Would you like to query another player?: ")
        print("1 - Yes")
        print("2 - No")
        
        queryAgain = input()
        
        if (queryAgain == "1"):
            apiCall()
        else:
            print("Goodbye Legend")

    except rq.exceptions.HTTPError as err:
        print("Error " + str(r.status_code) + ": The queried player was not found. Please try again.")
        apiCall()

apiCall() # Function Call