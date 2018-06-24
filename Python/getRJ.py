import requests, bs4

res = requests.get ('http://nostarch.com')
try:
    res.raise_for_status()
except Exception as exc:
    print('There was a problem: $s' %(exc))

#Write file to HDD(will be in current workingdir)
#Write code to take raw input to name the file to save
#Store the the raw output in usr_inpt
def saveWebpageToHdd():
    print('Starting webpage download...')
    filename = raw_input('Please enter the desired filename...\n: ')
    saveFile = open(filename, 'wb')
    for chunk in res.iter_content(100000):
        saveFile.write(chunk)
    saveFile.close()

saveWebpageToHdd()
print('Character count: '+ str(len(res.text)))
print('This is the first 250 characters of the file: %s\n' %res.text[:250])






