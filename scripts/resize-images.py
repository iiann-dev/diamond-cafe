#!/usr/bin/env python3
"""Optimize Diamond Cafe local images: max 1600px, quality 82."""
from PIL import Image
import os, glob

d = "/home/alfiano/Projects/vibecoderproject/diamond-cafe/public/images/dc"
for p in sorted(glob.glob(os.path.join(d, "IMG_*.jpg"))):
    im = Image.open(p)
    w, h = im.size
    target_w = 1600
    if w > target_w:
        nh = int(h * target_w / w)
        im = im.resize((target_w, nh), Image.LANCZOS)
    im.save(p, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{os.path.basename(p)}: {w}x{h} -> {im.size}, {os.path.getsize(p)//1024}KB")