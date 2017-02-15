playery = step = sy = scrolly = 0,
a.style.cssText = 'height:100%;image-rendering:pixelated;image-rendering:-moz-crisp-edges';

mod = (x, y, z) => (x + 360) % 360,
between = (x, y, z) => x < y && y < z;
windowat = (x, y, z) => (x = (y / 60 | 0) * 6 + (mod(x) / 60 | 0)) * 28 % 64 < 39 - x / 4;

magic = 150,

onkeydown = onkeyup = (x, y, z) => c[39 - x.which] = x.type[5];

setInterval(x = (x, y, z) => {
    dir = !c[2] - !c[0];
    scrollx = mod(scrollx + dir * 4);

    // update position
    z = playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy);
    scrolly += 110 < playery - scrolly ? playery - scrolly - 110 : playery - scrolly < 5 && playery - scrolly - 5;

    // check tower top collision
    win = 1228 < playery ? playery = c[sy = 0] = 1230 : 0,

    // check window collision
    ((z / 60 | 0) - 19 || step % 60 < 30) && windowat(98 + scrollx, playery) && between(sy, playery % 60 - 30, 1) && between(0, (scrollx + 38) % 60, 52) && (
        playery += 30 - playery % 60,
        sy = 13
    );

    // check ground collision
    0 < playery || (sy = 13, playery = -2);

    // draw
    (x = (x, y, z) => {
        data = new ImageData(120, 160);
        for (x = 120 * 160; x--;)
            y = 160 - (x / 120 | 0),
            e = mod(~dir ? x % 120 - 53 : 69 - x % 120),
            z = scrolly + y,
            l =
                // player
                between(0, f = z - playery + !win * Math.sin(x % 120/2)*(14-Math.hypot(sy))/8|0, 24) && between(52, x % 120, 68) && !(f < 0 || 47 - e < f * 2 || f < 18 - e * 3 && e * 5 - 4 < f || 37 - f < e * 2 && f < e + 4)
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
                            ? (x % 120 - 60) / (100 - y) * 5 + step / 5 & 1 && 5 - x * x / Math.PI % 1
                            : 1
                        // tower
                        : Math.sin(r = Math.acos(x % 120 / 60 % 2 - 1)) * 9 - 12 + (
                            e = mod((1 - r / Math.PI) * 180 + scrollx | 0),
                            f = (z / 60 | 0) - 19 || step % 60 < 30 ? z : z % 12 + 60,
                            // door
                            f < 42 && between(126, e, 150) && e % 3 + 1
                            // windows
                            || windowat(e, f) && between(24, f % 60, 30) && between(0, e % 60, 36) && 10
                            || windowat(e, f) && between(30, f % 60, 54) && between(6, e % 60, 30)
                            // wall
                            || between(0, f / 6 % 51, 1) && 7
                            || f % 6 && (e + (f / 6 & 1) * 6) % 12 && ((1 + e + (f / 6 & 1) * 6) % 12 && 8 || 6)
                        ) * 2 - (g = f * 360 + e) * g / Math.PI % 1 * 2,
                d = Math.min(1, -Math.min(0, Math.hypot(60 - x % 120, 12 - z + playery) / 12 - 2)) * magic * l / 80,
                data.data.set([9 * d + l * 8, 6 * d + l * 8, l * 6 + d + l * 8, 255], x * 4);
        c.putImageData(data, 0, 0)
    })(step++)
}, scrollx = 33)