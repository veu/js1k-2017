mod = (x, y, z) => (x + 360) % 360,
between = (x, y, z) => x < y && y < z;
wall = (x, y, z) => between(0, y / 6 % 51, 1) ? 7 : y % 6 && (x + (y / 6 & 1) * 6) % 12 && (wall(x + 1, y) ? 8 : 6);
div60 = (x, y, z) => x / 60 | 0,
windowat = (x, y, z) => (z = div60(y) * 6 + div60(x)) * 28 % 64 < 39 - z / 4;

// precompute tower wall for faster rendering
for (tower = [x = 360]; playery = win = step = sy = x--;) {
    for (tower[x] = [top = y = 1231]; y--;)
        tower[x][y] =
            y < 42 && between(126, x, magic = 150)
                // door
                ? x & 3
                // windows
                : windowat(x, y) && (
                    between(24, y % 60, 30) && between(0, x % 60, 36)
                        ? 9
                        : between(30, y % 60, 54) && between(6, x % 60, 30)
                )
                // wall
                || wall(x, y);
    scrolly = -12
}

onkeydown = onkeyup = (x, y, z) => c[39 - x.which] = x.type[5];

setInterval(x = (x, y, z) => {
    step++;
    dir = !c[2] - !c[0];
    scrollx = mod(scrollx + dir * 4);

    // update position
    playery += sy = -Math.min(c[1] && magic && magic-- ? 3 : 10, 1 - sy);
    scrolly += (y = playery - scrolly) > 110 ? y - 110 : y < 5 && y - 5;

    // check tower top collision
    win = playery > 1228 ? playery = c[sy = 0] = top : 0,

    // check window collision
    (div60(playery) - 19 || step % 60 < 30) && windowat(mod(98 + scrollx), playery) && between(sy, playery % 60 - 30, 1) && between(0, (scrollx + 38) % 60, 52) && (
        playery += 30 - playery % 60,
        sy = 14
    );

    // draw
    (x = (x, y, z) => {
             // check ground collision
        for (playery > 0 || (sy = 14, playery = -2); x--;)
            for (e = mod(~dir ? x - 53 : 69 - x), y = 160; y--;)
                z = scrolly + y,
                // calculate light around player
                d = Math.min(1, -Math.min(0, Math.hypot(60 - x, 12 - z + playery) / 12 - 2)) * magic,
                c.fillStyle = `hsl(${240 + d},25%,${d / 6 + 9 * (
                    // player
                    between(0, f = z - playery + !win * Math.sin(x/2)*(14-Math.hypot(sy))/8|0, 24) && between(52, x, 68) && !(f < 0 || 47 - e < f * 2 || f / 3 < 6 - e && f > e * 5 - 4 || e * 2 > 37 - f && e + 4 > f)
                        ? e + 7 - f
                            ? e * 2 > 30 - f && e + 4 > f
                                ? 9
                                : 1
                            : 3
                    // world
                    : z < 0
                        // ground
                        ? 2 + z / 6
                        : z > top
                            // sky
                            ? win
                                ? Math.atan2(120 - y, x - 60) * 8 + scrollx/9*Math.PI & 1 && 4
                                : 1
                            // tower
                            : Math.sin(a = Math.acos(x / 60 % 2 - 1)) * 4 - 6 + tower[mod((1 - a / Math.PI) * 180 + scrollx | 0)][div60(z) - 19 || step % 60 < 30 ? z : z % 12 + 60]
                )}%)`,
                c.fillRect(x * 4, 636 - y * 4, 4, 4)
    })(120)
}, scrollx = 42)