tower = [playery = step = sy = scrolly = 0];
a.style.cssText = 'width:480px;image-rendering:pixelated';

mod = (x, y, z) => (x + 360) % 360,
between = (x, y, z) => x < y && y < z;
div60 = (x, y, z) => x / 60 | 0,
windowat = (x, y, z) => (x = div60(y) * 6 + div60(mod(x))) * 28 % 64 < 39 - x / 4;

// precompute tower wall for faster rendering
for (x = 1230 * 360; x--;)
    y = x / 360 | 0,
    tower[x] =
        y < 42 && between(126, mod(x), magic = 150)
            // door
            ? x & 3
            // windows
            : windowat(x, y) && (
                between(24, y % 60, 30) && between(0, x % 60, 36)
                    ? 9
                    : between(30, y % 60, 54) && between(6, x % 60, 30)
            )
            // wall
            || (between(0, y / 6 % 51, 1)
                ? 7
                : y % 6 && (x + (y / 6 & 1) * 6) % 12
                    ? (1 + x + (y / 6 & 1) * 6) % 12
                        ? 8
                        : 6
                    : 0
            );

onkeydown = onkeyup = (x, y, z) => c[39 - x.which] = x.type[5];

setInterval(x = (x, y, z) => {
    dir = !c[2] - !c[0];
    scrollx = mod(scrollx + dir * 4);

    // update position
    z = playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy);
    scrolly += 110 < (y = playery - scrolly) ? y - 110 : y < 5 && y - 5;

    // check tower top collision
    win = 1228 < playery ? playery = c[sy = 0] = 1230 : 0,

    // check window collision
    (div60(z) - 19 || step % 60 < 30) && windowat(98 + scrollx, playery) && between(sy, playery % 60 - 30, 1) && between(0, (scrollx + 38) % 60, 52) && (
        playery += 30 - playery % 60,
        sy = 13
    );

    // check ground collision
    0 < playery || (sy = 13, playery = -2);

    // draw
    (x = (x, y, z) => {
        data = new ImageData(120, 160);
        for (x = 120 * 160; x--;)
            y = x / -120 + 159 | 0,
            e = mod(~dir ? x % 120 - 53 : 69 - x % 120),
            z = scrolly + y,
            l =
                // player
                between(0, f = z - playery + !win * Math.sin(x % 120/2)*(14-Math.hypot(sy))/8|0, 24) && between(52, x % 120, 68) && !(f < 0 || 47 - e < f * 2 || f / 3 < 6 - e && e * 5 - 4 < f || 37 - f < e * 2 && f < e + 4)
                    ? e + 7 - f
                        ? 30 - f < e * 2 && f < e + 4
                            ? 18
                            : 3
                        : 5
                // world
                : z < 0
                    // ground
                    ? z + 6
                    : 1230 < z
                        // sky
                        ? win
                            ? (x % 120 - 60) / (100 - y) * 5 + step / 5 & 1 && 4
                            : 1
                        // tower
                        : Math.sin(r = Math.acos(x % 120 / 60 % 2 - 1)) * 9 - 12 + tower[(div60(z) - 19 || step % 60 < 30 ? z : z % 12 + 60) * 360 + mod((1 - r / Math.PI) * 180 + scrollx | 0)] * 2,
                d = Math.min(1, -Math.min(0, Math.hypot(60 - x % 120, 12 - z + playery) / 12 - 2)) * magic * l / 80,
                data.data.set([9 * d + l * 8, 6 * d + l * 8, l * 6 + d + l * 8, 255], x * 4);
        c.putImageData(data, 0, 0)
    })(step++)
}, scrollx = 33)