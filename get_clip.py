
# Aqua Tools
# get_clip.py

import pyperclip


def write(data):
    f = open("./node_modules/aqua-tools/return.txt", "w", encoding="utf-8")
    f.write(data)
    f.close()


write(pyperclip.paste())
