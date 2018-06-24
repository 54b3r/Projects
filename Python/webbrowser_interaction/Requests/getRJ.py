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
    print('File has been saved.')
    return filename

def convertWebpageToBs4():
    #via saved file user input specifies in working dir
    filename = raw_input('Please enter the File to Beautify: ')
    fileFromWebDl = open(filename, 'r')
    fileToSoup = bs4.BeautifulSoup(fileFromWebDl.read(), 'lxml')
    #The below option i added for user to input the element, implement
    #a menu so that this can be selected, and you print eg of selector
    #elems = fileToSoup.select(raw_input('element to select?: ')

    #hardcoded element
    elems = fileToSoup.select('div')

    #via hard coded file in working dir
    #exampleFile = open('example.html')
    #exampleSoup = bs4.BeautifulSoup(exampleFile.read(), 'lxml')
    #elems = exampleSoup.select('#author')
    print(len(elems))
    print(elems[0].getText(), str(elems[0]), elems[0].attrs)

#saveWebpageToHdd()
convertWebpageToBs4()

'''
print('Character count: '+ str(len(res.text)))
print('This is the first 250 characters of the file: %s\n' %res.text[:250])
'''





