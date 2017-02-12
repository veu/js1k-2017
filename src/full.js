i30 = 30;
i60 = 60;

mod = x => (x + i360) % i360;
between = (x, y, z) => x < y & y < z;
wall = (x, y) => between(0, y / 6 % 51, 1) ? 7 : y % 6 && (x + (y / 6 & 1) * 6) % 12 && (wall(x + 1, y) ? 8 : 6);
div60 = x => x / i60 | 0;
windowat = (x, y) => (z = div60(y) * 6 + div60(x)) * 28 % 64 < 39 - z / 4;

tower = [{min: min, sin: sin, hypot: hypot, PI: PI} = M = Math];
for (step = i360 = 360; playery = win = sy = step--;)
    for (tower[step] = [f = top = 1231]; f--;)
        tower[step][f] =
            f < 42 & between(126, step, magic = 150)
                // door
                ? 1 + step % 3
                // windows
                : windowat(step, f) && (
                    between(24, f % i60, i30) & between(0, step % i60, 36)
                        ? 9
                        : between(i30, f % i60, 54) & between(6, step % i60, i30)
                )
                // wall
                || wall(step, f);

scrolly = -12;

keys = [];
onkeydown = onkeyup = e => keys[39 - e.which] = e.type[5];

setInterval(e => {
    step++;
    dir = !keys[2] - !keys[0];
    scrollx = mod(scrollx + dir * 4);

    // update speed
    sy = -min(keys[1] && magic && magic-- ? 5 : 10, 1 - sy);

    // update position
    playery += sy;
    scrolly += (y = playery - scrolly) > 110 ? y - 110 : y < 5 && y - 5;

    // check tower top collision
    if (win = playery > 1228)
        playery = keys[sy = 0] = top;

    // check window collision
    if (windowat(mod(98 + scrollx), playery) & between(sy, playery % i60 - i30, 1) & between(0, (scrollx + 38) % i60, 52))
        playery += i30 - playery % i60,
        sy = 14;

    // draw
    (x => {
             // check ground collision
        for (playery > 0 || (sy = 14, playery = -2); x--;)
            for (e = mod(~dir ? x - 53 : 69 - x), y = 160; y--; c.fillRect(x * 4, 636 - y * 4, 4, 4))
                z = scrolly + y,
                d = min(1, -min(0, hypot(i60 - x, 12 - z + playery) / 12 - 2)) * magic,
                c.fillStyle = `hsl(${240 + d},25%,${d / 6 + 9 * (
                    // player
                    between(0, f = z - playery + !win * sin(x/2)*(14-hypot(sy))/8|0, 24) & between(52, x, 68) & !(f < 0 | 47 - e < f * 2 | f < 20 - e * 3 & f > e * 5 - 4 | e * 2 > 37 - f & e + 4 > f)
                        ? e + 7 - f
                            ? e * 2 > i30 - f & e + 4 > f
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
                                ? M.atan2(120 - y, x - i60) * 8 + scrollx/9*PI & 1 && 4
                                : 1
                            // tower
                            : sin(a = M.acos(x / i60 % 2 - 1)) * 4 - 6 + tower[mod((1 - a / PI) * 180 + scrollx | 0)][div60(z) - 19 || step % i60 < i30 ? z : z % 12 + i60]
                )}%)`
    })(120)
}, scrollx = 42)