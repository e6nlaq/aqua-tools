
# Aqua Tools
# download.py

import requests
import sys

arg = sys.argv

url = arg[1]
filename = arg[2]

urlData = requests.get(url).content

with open(filename, mode='wb') as f:  # wb でバイト型を書き込める
    f.write(urlData)
