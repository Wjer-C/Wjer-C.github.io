from pathlib import Path

folder = Path(r"Web/Wjer-C.github.io/songs")  
playlist = [f.name for f in folder.iterdir() if f.is_file()]
for x in playlist:
    print(f'"{x}",')