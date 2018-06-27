import lxml.html
import urllib, urllib2, webbrowser, requests

#TODO: Add User-input to avoid hardcoding UN/PW
payload = urllib.urlencode({'USERNAME': 'mmatos2', 'PIN': 'Ilovemy@udia4'})
url = 'http://sykpcasd12ap1v:80/CAisd/pdmweb.exe'
full_url = url + '?' + payload
response = urllib2.urlopen(full_url)
webbrowser.open(full_url)