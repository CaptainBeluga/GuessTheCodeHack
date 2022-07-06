from pynput.keyboard import Key, Controller
from time import *

keyboard = Controller()

while True:
    keyboard.type('guess()')
    keyboard.press(Key.enter)

    sleep(1)
