import lxml.html
import urllib, urllib2, webbrowser, requests

#TODO: Add User-input to avoid hardcoding UN/PW
print("Now Opening and Loggin into CA Servicedesk")

un=raw_input("Please enter the desired Username to login with: ")
pin=raw_input("Please enter the desired password to login with: ")


payload = urllib.urlencode({'USERNAME': un, 'PIN': pin})
url = 'http://sykpcasd12ap1v:80/CAisd/pdmweb.exe'
full_url = url + '?' + payload
response = urllib2.urlopen(full_url)
webbrowser.open(full_url)

def saveResponseToDisk():
    with open("results.html", "w") as f:
        f.write(response.read())
