i60 = 60;

mod = x => (x + 360) % 360;
between = (x, y, z) => x < y && y < z;
wall = (x, y) => between(0, y / 6 % 51, 1) ? 70 : y % 6 && (x + (y / 6 | 0) % 2 * 6) % 12 && (wall(x + 1, y) ? 80 : i60);
div60 = x => x / i60 | 0;

windows = [M = Math];
for(sy = magic = 120; playery = win = sy--;)
    windows[sy] = sy * 28 % 64 < 39 - sy / 4;

for (tower = [e = 360]; e--;)
    for (tower[e] = [f = top = 1231]; f--;)
        tower[e][f] =
            f && f < 42 & between(126, e, 150)
                // door
                ? 40 - e % 3
                // windows
                : windows[div60(f) * 6 + div60(e)] && (
                    between(24, f % i60, 30) & between(0, e % i60, 36)
                        ? 90
                        : between(30, f % i60, 54) & between(6, e % i60, 30)
                )
                // wall
                || wall(e, f);

min = M.min;
scrolly = -20;

keys = [];
onkeydown = onkeyup = e => {
    keys[key = e.which - 37] = e.type[5]
}

setInterval(e => {
    dir = !keys[0] - !keys[2];
    scrollx = mod(scrollx + dir * 4);

    // update speed
    sy = -min(keys[1] && magic && magic-- ? 5 : 10, 1 - sy);

    // update position
    playery += sy;
    scrolly += (y = playery - scrolly) > 110 ? y - 110 : y < 5 ? y - 5 : 0;

    // check tower top collision
    if (win = playery > 1228)
        playery = keys[2] = top, sy = 0;

    // check window collision
    if (sy < 0 & windows[div60(playery) * 6 + div60(mod(98 + scrollx))] & between(sy, playery % i60 - 30, 1) & between(0, (scrollx + 38) % i60, 52))
        playery += 30 - playery % i60,
        sy = 14;

    // check ground collision
    sy = playery > 0 ? sy : 14;

    (x => {
    // draw
    for (; x--;)
        for (e = mod(~dir ? x - 53 : 69 - x), y = 160; y--;)
            color =
                // player
                between(0, f = y + scrolly - playery, 24) & between(52, x, 68) & !(f < 0 | 47 - e < f * 2 | f < 20 - e * 3 & f > e * 5 - 4 | e * 2 > 37 - f & e + 4 > f)
                    ? e + 7 - f
                        ? e * 2 > 30 - f & e + 4 > f
                            ? 99
                            : 9
                        : 30
                // world
                : scrolly < -y
                    // ground
                    ? 9 + y + scrolly
                    : scrolly + y > top
                        // sky
                        ? win ? M.atan2(120 - y, x - i60) * 8 + scrollx/9*M.PI & 1 && 40 : 10
                        // tower
                        : M.sin(a = M.acos(x / i60 % 2 - 1)) * 40 - i60 + tower[mod((1 - a / M.PI) * 180 + scrollx | 0)][y + scrolly],
            d = min(1, -min(0, M.hypot(i60 - x, 12 - f) / 12 - 2)) * magic,
            c.fillStyle = `hsl(${240 + d},25%,${color + d / 6}%)`,
            c.fillRect(x * 4, 640 - y * 4, 4, 4)
    })(120)
}, scrollx = 42)