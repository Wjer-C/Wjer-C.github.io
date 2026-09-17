import threading
import pygame
import time
import os
import random
from pathlib import Path
from pynput.keyboard import Listener
import keyboard 



folder = Path(r"Web/Wjer-C.github.io/songs")  
playlist = [f.name for f in folder.iterdir() if f.is_file()]
for x in playlist:
    print(f'"{x}",')