playery = step = sy = scrolly = 0,
a.style.cssText = 'height:100%;image-rendering:pixelated;image-rendering:-moz-crisp-edges',

between = (x, y) => (x < y && x > 0),

onkeydown = onkeyup = (x, y) => (c[39 - x.which] = x.type[5]),

data = new ImageData(120, magic = 160),

setInterval(x = (x, y) => (
    scrollx = (scrollx + (!c[2] - !c[0]) * 4 + 360) % 360,

    // update position
    z = playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy),
    scrolly += 110 < playery - scrolly ? playery - scrolly - 110 : playery - scrolly < 5 && playery - scrolly - 5,

    // check tower top collision
    win = 1228 < playery ? playery = c[sy = 0] = 1230 : 0,

    // check window collision
    e = 98 + scrollx,
    ((z / 60 | 0) - 19 || step % 60 < 30) && ((g = (z / 60 | 0) * 6 + (((e + 360) % 360) / 60 | 0)) * 28 % 64 < 39 - g / 4) && between(z % 60 - 30 - sy, 1 - sy) && between((scrollx + 38) % 60, 52) && (
        sy = 13, playery += 30 - playery % 60
    ),

    // check ground collision
    0 < playery || (sy = 13, playery = -2),

    step += 1,

    // draw
    requestAnimationFrame(x = (x, y) => {
        for (i = 120 * 160; i--;)
            x = i % 120,
            y = 160 + (x - i) / 120,
            e = ((c[2] ? 69 - x : x - 53) + 360) % 360,
            z = scrolly + y,
            l =
                // player
                between(f = z - playery + !win * Math.sin(e / 2 + 14)*(c[1]?1:14-Math.hypot(sy))/8|0, 24) && between(e + 1, 16) && !(f < 0 || 47 - e < f * 2 || f < 18 - e * 3 && e * 5 - 4 < f || 37 - e * 2 < f && f < e + 4)
                    ? f - e - 7
                        ? 30 - e * 2 < f && f < e + 4
                            ? 18
                            : 3 - (x + z) % 2 / 3
                        : 5
                    // world
                    : z < 0
                        // ground
                        ? z + 6 - (x + z) % 2 / 3
                        : 1230 < z
                            // sky
                            ? !win || (x - 60) / (100 - y) * 5 + step / 5 & 1 && 5 - i * i / Math.PI % 1
                            // tower
                            : Math.sin(e = Math.acos(x / 60 % 2 - 1)) * 12 - 12 + (
                                e = (((1 - e / Math.PI) * 180 + scrollx | 0) + 360) % 360,
                                // door
                                z < 42 && between(e - 126, 24) && e % 3 + 1
                                // windows
                                || ((z / 60 | 0) - 19 || step % 60 < 30) && (g = (z / 60 | 0) * 6 + (((e + 360) % 360) / 60 | 0)) * 28 % 64 < 39 - g / 4 && between(z % 60 - 30 + 6, 6) && between(e % 60, 36) && 10
                                || ((z / 60 | 0) - 19 || step % 60 < 30) && (g = (z / 60 | 0) * 6 + (((e + 360) % 360) / 60 | 0)) * 28 % 64 < 39 - g / 4 && between(z % 60 - 30, 24) && between(e % 60 - 6, 24)
                                // wall
                                || between(z / 6 % 51, 1) && 6
                                || z % 6 && (z % 6 - z - e) % 12 && (11 + (z % 6 - z - e) % 12 && 8 + (z / 6 | 0) * ((z % 6 - z - e) / 12 | 0) / Math.PI % 1 || 6)
                            ) * 2 - (g = z * 360 - e) * g / Math.PI % 1 * 2,
            d = Math.min(1, -Math.min(0, Math.hypot(60 - x, 12 - z + playery) / 12 - 2)) * magic * l / 100,
            data.data.set([9 * d + l * 8, 6 * d + l * 8, 6 * l + d + l * 8, 6 * 60], i * 4);
        c.putImageData(data, 0, 0)
    })
), scrollx = 33)
