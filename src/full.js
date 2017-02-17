playery = step = sy = scrolly = 0,
a.style.cssText = 'height:100%;image-rendering:pixelated;image-rendering:-moz-crisp-edges',

mod = (x, y) => (x + 360) % 360,
between = (x, y) => (0 < x && x < y),
windowat = (x, y) => (x = (y / 60 | 0) * 6 + (mod(x) / 60 | 0)) * 28 % 64 < 39 - x / 4,

onkeydown = onkeyup = (x, y) => (c[39 - x.which] = x.type[5]),

data = new ImageData(120, magic = 160),

setInterval(x = (x, y) => (
    dir = !c[2] - !c[0],
    scrollx = mod(scrollx + dir * 4),

    // update position
    z = playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy),
    scrolly += 110 < playery - scrolly ? playery - scrolly - 110 : playery - scrolly < 5 && playery - scrolly - 5,

    // check tower top collision
    win = 1228 < playery ? playery = c[sy = 0] = 1230 : 0,

    // check window collision
    ((z / 60 | 0) - 19 || step % 60 < 30) && windowat(98 + scrollx, playery) && between(playery % 60 - 30 - sy, 1 - sy) && between((scrollx + 38) % 60, 52) && (
        sy = 13, playery += 30 - playery % 60
    ),

    // check ground collision
    0 < playery || (sy = 13, playery = -2),

    step++,

    // draw
    requestAnimationFrame(x = (x, y) => {
        for (i = 120 * 160; i--;)
            x = i % 120,
            y = 160 + (x - i) / 120,
            e = mod(~dir ? x - 53 : 69 - x),
            z = scrolly + y,
            l =
                // player
                between(f = z - playery + !win * Math.sin(x / 2)*(14-Math.hypot(sy))/8|0, 24) && between(x - 52, 16) && !(f < 0 || 47 - e < f * 2 || f < 18 - e * 3 && e * 5 - 4 < f || 37 - f < e * 2 && f < e + 4)
                    ? e + 7 - f
                        ? 30 - f < e * 2 && f < e + 4
                            ? 18
                            : 3 - (x + z) % 2 / 4
                        : 5
                    // world
                    : z < 0
                        // ground
                        ? z + 6 - (x + z) % 2 / 3
                        : 1230 < z
                            // sky
                            ? win
                                ? (x - 60) / (100 - y) * 5 + step / 5 & 1 && 5 - i * i / Math.PI % 1
                                : 1
                            // tower
                            : Math.sin(r = Math.acos(x / 60 % 2 - 1)) * 9 - 12 + (
                                e = mod((1 - r / Math.PI) * 180 + scrollx | 0),
                                // door
                                z < 42 && between(e - 126, 24) && e % 3 + 1
                                // windows
                                || ((z / 60 | 0) - 19 || step % 60 < 30) && windowat(e, z) && between(z % 60 - 24, 6) && between(e % 60, 36) && 10
                                || ((z / 60 | 0) - 19 || step % 60 < 30) && windowat(e, z) && between(z % 60 - 30, 24) && between(e % 60 - 6, 24)
                                // wall
                                || between(z / 6 % 51, 1) && 7
                                || z % 6 && (e + z - z % 6) % 12 && (11 - (e + z - z % 6) % 12 && 8 || 6)
                            ) * 2 - (g = z * 360 + e) * g / Math.PI % 1 * 2,
            d = Math.min(1, -Math.min(0, Math.hypot(60 - x, 12 - z + playery) / 12 - 2)) * magic * l / 80,
            data.data.set([9 * d + l * 8, 6 * d + l * 8, 6 * l + d + l * 8, 6 * 60], i * 4);
        c.putImageData(data, 0, 0)
    })
), scrollx = 33)
