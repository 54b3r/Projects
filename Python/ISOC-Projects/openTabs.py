import webbrowser, bs4, requests

#General ISOC URLs
caServiceDeskURL = "http://sykpcasd12ap1v/caisd/pdmweb.exe"
caSpectrumURL = "http://sykpcaspecrpt1v/spectrum/"
uimURL = "https://sykpcansmump1v/web/jlepore/home?p_p_state=maximized&p_p_mode=view&saveLastPath=0&_58_struts_action=%2Flogin%2Flogin&p_p_id=58&p_p_lifecycle=0&_58_redirect=%2Fuser%2Fjlepore%2Fhome"
isocSharepointURL = "https://team.northwell.edu/team/dcoi/ops/SOPs/Forms/AllItems.aspx?RootFolder=%2Fteam%2Fdcoi%2Fops%2FSOPs%2FSOPs%20Approved&FolderCTID=0x0120003A9FE1B8D9855444AA445D083003DAE8&View={1074B05F-4812-461D-9211-2CAC711EDA63}"
#AS/400 Focused
ibmv5000_URL = "https://10.170.82.207/login"
ibmHMC_URLRedirect = "https://10.170.176.18/hmc/connect"

#Creating a list of urls
generalURLsToOpen = [

]

as400URLsToOpen = [

]
print("Now opening the General ISOC Web Browser Tabs\nPlease wait...")
webbrowser.open_new(caServiceDeskURL)
webbrowser.open_new_tab(caSpectrumURL)
webbrowser.open_new_tab(isocSharepointURL)
webbrowser.open_new_tab(ibmv5000_URL)  
#TODO: Add more robust way of opening URLs
#TODO#2: add url groups to help open easier
