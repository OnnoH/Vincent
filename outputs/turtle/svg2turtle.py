from svgpathtools import svg2paths2
from math import ceil
import numpy as np
import turtle

svg_file = r'D:\Pokemon data\dream-world\227.svg'
sprite_path = r'D:\Pokemon data\Skarmory_resource\sprites\mystrey_dungeon_explorers_of_time\gif\a{}_{}.gif'

paths, attrs, svg_attr = svg2paths2(svg_file)
svg_size = int(svg_attr['width'][:-2]), int(svg_attr['height'][:-2])
mx = max(svg_size)

seg_res = 5
polys = []
for path in paths:
    poly = []
    for subpaths in path.continuous_subpaths():
        points = []
        for seg in subpaths:
            interp_num = ceil(seg.length()/seg_res)
            points.append(seg.point(np.arange(interp_num)/interp_num))
        points = np.concatenate(points)
        points = np.append(points, points[0])
        poly.append(points)
    polys.append([[(p.real, p.imag) for p in pl] for pl in poly])


turtle_window = turtle.Screen()
t = turtle

frame = 0


def change_shape(t, h):
    i = int(round((h+90)/45) % 8)

    global frame
    frame += 1
    f = (frame//20) % 2
    f = 2 if f else 3
    t.shape(sprite_path.format(i, f))


def head_to(t, x, y, draw=True):
    wasdown = t.isdown()
    heading = t.towards(x, y)
    t.pen(pendown=draw)
    t.seth(heading)
    t.clearstamps()
    t.stamp()
    change_shape(t, heading)
    t.goto(x, y)
    t.pen(pendown=wasdown)


def draw_polygon(t, poly, fill='black'):
    t.color(fill, fill)
    p = poly[0]
    head_to(t, p[0], -(p[1]), False)
    for p in poly[1:]:
        head_to(t, p[0], -(p[1]))
    t.up()


def draw_multipolygon(t, mpoly, fill='black'):
    p = mpoly[0][0]
    head_to(t, p[0], -(p[1]), False)
    t.begin_fill()
    for i, poly in enumerate(mpoly):
        draw_polygon(t, poly, fill)
        if i != 0:
            head_to(t, p[0], -(p[1]), False)
    t.end_fill()


t.reset()
t.setworldcoordinates(-50, -(mx+50), mx+50, 50)
t.mode(mode='world')
t.tracer(n=8, delay=0)
for i in range(8):
    for f in [2, 3]:
        t.register_shape(sprite_path.format(i, f))

for poly, attr in zip(polys, attrs):
    draw_multipolygon(t, poly, fill=attr['fill'])
head_to(t, mx/2, -(mx+40), False)

t.hideturtle()
t.clearstamps()
turtle.done()
