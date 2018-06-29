import urllib, urllib2, webbrowser, requests, getpass


print("Now Opening and Loggin into CA Servicedesk")
#User-input to avoid hardcoding UN/PW
un=raw_input("Please enter the desired Username to login with: ")
pin=getpass.getpass("Please enter CA password for login: ")
pin2=getpass.getpass("Please enter V5000 password for login: ")

#Different UN/PW Payloads to encode in the url to login
payload = urllib.urlencode({'USERNAME': un, 'PIN': pin})
ibmPayload = urllib.urlencode({'login': un, 'password': pin2})
hmcPayload = urllib.urlencode({'j_username': un, 'password': pin2})

#URLs and encoded URLs
caURL = 'http://sykpcasd12ap1v:80/CAisd/pdmweb.exe'
caLoginURL = caURL + '?' + payload
v5000URL = "https://10.170.82.207/login"
v5000LoginURL = v5000URL + '?' + ibmPayload
hmcOpenURL = "http://10.170.176.18/hmc/connect"
hmcLoginRedirectURL = "https://10.170.176.18:12443/rest/ui/static/RedirectCCFWLogon"

hmcLoginURL = hmcOpenURL + '?' + hmcPayload

#Open tab with Logged in page
#webbrowser.open(caLoginURL)
webbrowser.open_new_tab(v5000LoginURL)
webbrowser.open_new_tab(hmcLoginURL)

def saveResponseToDisk():
    response = urllib2.urlopen(caLoginURL)
    with open("results.html", "w") as f:
        f.write(response.read())
