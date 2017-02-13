mod = (x, y, z) => (x + 360) % 360,
between = (x, y, z) => x < y && y < z;
wall = (x, y, z) => between(0, y / 6 % 51, 1) ? 7 : y % 6 && (x + (y / 6 & 1) * 6) % 12 && (wall(x + 1, y) ? 8 : 6);
div60 = (x, y, z) => x / 60 | 0,
windowat = (x, y, z) => (z = div60(y) * 6 + div60(x)) * 28 % 64 < 39 - z / 4;

// precompute tower wall for faster rendering
for (tower = [x = 360]; playery = step = sy = x--;) {
    for (tower[x] = [y = 1230]; y--;)
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

a.style = 'width:480px;height:640px;image-rendering:pixelated';

onkeydown = onkeyup = (x, y, z) => c[39 - x.which] = x.type[5];

setInterval(x = (x, y, z) => {
    dir = !c[2] - !c[0];
    scrollx = mod(scrollx + dir * 4);

    // update position
    playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy);
    scrolly += (y = playery - scrolly) > 110 ? y - 110 : y < 5 && y - 5;

    // check tower top collision
    win = playery > 1228 ? playery = c[sy = 0] = 1230 : 0,

    // check window collision
    (div60(playery) - 19 || step % 60 < 30) && windowat(mod(98 + scrollx), playery) && between(sy, playery % 60 - 30, 1) && between(0, (scrollx + 38) % 60, 52) && (
        playery += 30 - playery % 60,
        sy = 13
    );

    // check ground collision
    playery > 0 || (sy = 13, playery = -2);

    // draw
    (x = (x, y, z) => {
        for (data = c.createImageData(x = 120, 160); x--;)
            for (e = mod(~dir ? x - 53 : 69 - x), y = 160; y--;)
                z = scrolly + y,
                l =
                    // player
                    between(0, f = z - playery + !win * Math.sin(x/2)*(14-Math.hypot(sy))/8|0, 24) && between(52, x, 68) && !(f < 0 || 47 - e < f * 2 || f / 3 < 6 - e && f > e * 5 - 4 || e * 2 > 37 - f && e + 4 > f)
                        ? e + 7 - f
                            ? e * 2 > 30 - f && e + 4 > f
                                ? 9
                                : 2
                            : 4
                    // world
                    : z < 0
                        // ground
                        ? 2 + z / 6
                        : z > 1230
                            // sky
                            ? win
                                ? (x - 60) / (100 - y) * 5 + step / 5 & 1 && 4
                                : 1
                            // tower
                            : Math.sin(r = Math.acos(x / 60 % 2 - 1)) * 4 - 6 + tower[mod((1 - r / Math.PI) * 180 + scrollx | 0)][div60(z) - 19 || step % 60 < 30 ? z : z % 12 + 60],
                    d = Math.min(1, -Math.min(0, Math.hypot(60 - x, 12 - z + playery) / 12 - 2)) * magic * l / 10,
                    data.data[((159 - y) * 120 + x) * 4] = 30 + l * 8 + d * 3 | 0,
                    data.data[((159 - y) * 120 + x) * 4 + 1] = 30 + l * 8 + d * 2 | 0,
                    data.data[((159 - y) * 120 + x) * 4 + 2] = 40 + l * 16 + d | 0,
                    data.data[((159 - y) * 120 + x) * 4 + 3] = 255;
        c.putImageData(data, 0, 0)
    })(step++)
}, scrollx = 33)