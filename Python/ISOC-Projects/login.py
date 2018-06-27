import urllib, urllib2, webbrowser, requests, getpass


print("Now Opening and Loggin into CA Servicedesk")
#User-input to avoid hardcoding UN/PW
un=raw_input("Please enter the desired Username to login with: ")
pin=getpass.getpass("Please enter the desired password to login with: ")

payload = urllib.urlencode({'USERNAME': un, 'PIN': pin})
ibmPayload = urllib.urlencode({'':un})

caURL = 'http://sykpcasd12ap1v:80/CAisd/pdmweb.exe'
caLoginURL = caURL + '?' + payload
v5000URL = "https://10.170.82.207/login"
v5000LoginURL = v5000URL + '?' + ibmPayload


webbrowser.open(caLoginURL)
webbrowser.open_new_tab(v5000LoginURL)

def saveResponseToDisk():
    response = urllib2.urlopen(caLoginURL)
    with open("results.html", "w") as f:
        f.write(response.read())
