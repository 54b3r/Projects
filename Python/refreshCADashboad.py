'''
This will be to auto refresh the CA Service Desk Dashboard
so that I do not timeout and have to log back into CA to see
the tickets. Ernie used an app he found online. I will attempt
to create my own. Using instructions from: 
https://automatetheboringstuff.com/chapter11/
'''

import webbrowser
webbrowser.open('http://sykpcasd12ap1v/caisd/pdmweb.exe')