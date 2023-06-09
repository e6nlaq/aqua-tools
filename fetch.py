
# Aqua Tools
# fetch.py

import requests
import sys


def write(data):
    f = open("./node_modules/aqua-tools/return.txt", "w")
    f.write(data)
    f.close()


def fetch(url, method='GET', data=''):
    if data == '':
        res = requests.request(method, url)
        write(res.text)
    else:
        res = requests.request(method, url, params=data)
        write(res.text)


args = sys.argv
size = len(args)

if size == 2:
    fetch(args[1])
elif size == 3:
    fetch(args[1], args[2])
elif size == 4:
    fetch(args[1], args[2], args[3])
