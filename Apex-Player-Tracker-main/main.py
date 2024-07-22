# Apex Legends Player Tracker
# Utilizes API data provided by https://apexlegendsapi.com
# Written by returnMarcco on 18/08/2022
# github.com/returnMarcco

import requests as rq
import json
import random

def playerToQuery():
    userToQuery = input("Enter the username of the player you would like to query: ")
    return userToQuery

def randomQuip():
    wavesGoodbye = "waves goodbye and says: "
    randomQuipList = ["Edgelord Bangers " + wavesGoodbye + "'Clips are what civvies put in their hair... '", "Edgelord Bangers " + wavesGoodbye + "'Pop the smoke, make 'em broke.' ", "Pathy " + wavesGoodbye + "'Let's make some new friends, and then destroy them.' ", "Octane " + wavesGoodbye + "'All aboard the Octrain!' "]
    print(random.choice(randomQuipList))

def platformChoice():
    userToQuery = playerToQuery()
    pcPlatform = "PC"
    playstationPlatform = "PS4"
    xboxPlatform = "X1"
    apexPlayerDataAPI = ""
    
    print("Enter the number corresponding to the platform user [ " + userToQuery + " ] plays on: ")
    print("1 - PC")
    print("2 - Playstation")
    print("3 - Xbox")
    print("4 - Exit Program")
    platformOfUser = input()
    
    if (platformOfUser == "1"):
        apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + pcPlatform
        return apexPlayerDataAPI
        
    elif (platformOfUser == "2"):
        apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + playstationPlatform
        return apexPlayerDataAPI
        
    elif (platformOfUser == "3"):
        apexPlayerDataAPI = "https://api.mozambiquehe.re/bridge?auth=d1878ee75a74ec99525d4dc4debf235d&player=" + userToQuery + "&platform=" + xboxPlatform
        return apexPlayerDataAPI
        
    elif (platformOfUser == "4"):
        randomQuip()
    
    else:
        print("That choice is invalid. Please select from one of the available options.")
        platformChoice()

def apiCall():
    
    apexPlayerDataAPI = platformChoice()
    
    try:
        r = rq.get(apexPlayerDataAPI) # Made API call and stored data in variable r
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
            randomQuip()

    except rq.exceptions.HTTPError:
        print("Error " + str(r.status_code) + ": The queried player was not found. Please try again.")
        apiCall()
    except rq.exceptions.MissingSchema:
        print("")
    except:
        print("An unidentified error has occured.")

apiCall() # Driver function
