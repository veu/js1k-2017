mod = x => (x + 360) % 360;
between = (x, y, z) => x < y && y < z;

tower = (x, y) =>
    // door
    between(18, y, 20) & between(130, x, 133)
        ? 20
        : y && y < 42 & between(126, x, 150)
            ? 40
            // windows
            : windows[(y / 60 | 0) * 6 + x / 60 | 0] && (
                between(24, y % 60, 30) & between(0, x % 60, 36)
                    ? 90
                    : between(30, y % 60, 54) & between(6, x % 60, 30)
            ) || y % 6 && (x + (y / 6 | 0) % 2 * 6) % 12 && 80;

M = Math;
windows = [];

for(sy = magic = 120; playery = move = sy--;)
    windows[sy] = (sy * 11 + sy * 17) % 64 < 39 - sy / 4;

scrollx = 17;
last = 2;
scrolly = -20;

keys = [];
onkeydown = onkeyup = e => {
    keys[key = e.which - 37] = e.type[5];
    last = key % 2 ? last : key
}

setInterval(e => {
    scrollx = mod(scrollx - !!keys[0]*4 + !!keys[2]*4);

    // update speed
    sy > -(keys[1] && magic && magic-- ? 3 : 12) && sy--;

    // update position
    playery += sy;
    scrolly += playery - scrolly > 110 ? playery - scrolly - 110 : playery - scrolly < 5 ? playery - scrolly - 5 : 0;

    // check collision
    if (sy < 0 & windows[(playery / 60 | 0) * 6 + mod(98 + scrollx) / 60 | 0] & between(sy, playery % 60 - 31, 0) & between(0, 52 - (scrollx + 38) % 60, 52))
        playery += 30 - playery % 30,
        sy = 12;

    sy = playery > 0 ? sy : 12;

    for (x = 120; x--;) {
        a = M.acos(x / 60 % 2 - 1);
        xp = (1 - a / M.PI) * 180 | 0;
        for (y = 160; y--;)
            color = 
                // player
                between(playery, y + scrolly, playery + 24) & between(82, xp, 98) && (
                    e = mod(last ? xp - 83 : 99 - xp),
                    f = y + scrolly - playery,
                    f < 0 | 47 - e < f * 2 | f < 20 - e * 3 & f > e * 5 - 4 | e * 2 > 37 - f & e + 4 > f
                        ? 0
                        : e + 7 - f
                            ? e * 2 > 30 - f & e + 4 > f
                                ? 99
                                : 9
                            : 30
                )
                // world
                || (scrolly < -y || scrolly + y > 1230
                    // sky / ground
                    ? 10
                    // tower
                    : M.sin(a) * 40 - 60 + tower(mod(xp + scrollx), y + scrolly)
                ),
            d = M.min(1, M.max(0, 2 - M.hypot(60 - x, playery - y - scrolly + 12) / 12)) * magic,
            c.fillStyle = `hsl(${240 + d | 0},20%,${color + d / 6 | 0}%`,
            c.fillRect(x * 4, 640 - y * 4, 4, 4)
    }
}, 42)