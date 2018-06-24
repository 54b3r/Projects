#!/bin/bash
# Launches a map in the browser using an address from the CLI or Clipboard

import webbrowser, sys, pyperclip, requests
if len(sys.argv) > 1:
    #Get address from command line
    address = ' '.join(sys.argv[1:])
else:
    #Get address from Clipboard.
    address = pyperclip.paste()

webbrowser.open('https://www.google.com/maps/place/' + address)  
