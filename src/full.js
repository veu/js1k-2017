wizard = (x,y) =>
    y<0 || 47-x<y*2 || y<20-x*3&&y>x*5-4 || x*2>37-y&&x+4>y
        ? 0
        : x+7-y
            ? x*2>30-y&&x+4>y
                ? 99
                : 10
            : 30;

mod = x => (x + 360) % 360;
between = (x,y,z) => x < y && y < z;

tower = (x, y) =>
    // door
    between(18, y, 22) && between(90, x, 94)
        ? 20
        : y < 36 && between(84, x, 108)
            ? 40
            // windows
            : windows[(y / 60 | 0) * 6 + x / 60 | 0] && (
                between(24, y % 60, 30) && x % 60 < 36
                    ? 90
                    : between(30, y % 60, 54) && between(6, x % 60, 30) && 1
            ) || y % 6 && (x + (y / 6 | 0) % 2 * 6) % 12 && 80;

windows = [];
for(i=72;i--;)
    windows[i] = Math.random()*12<12-(i/6|0);

scrollx = 1;
last = 2;
scrolly = -20;
playery = sy = move = lost = 0;
magic = 180;

keys = [];
onkeydown = onkeyup = e => {
    keys[key = e.which-37] = e.type[5];
    last = key % 2 ? last : key;
}

setInterval(e => {
    if (!lost) {
        scrollx = mod(scrollx - !!keys[0]*4 + !!keys[2]*4);

        // update speed
        sy = Math.max(-12, sy - 1);
        if (keys[1] && magic)
            magic--,
            sy = Math.max(-4, sy);

        // update position
        playery += sy;
        if (playery - scrolly > 120 && sy > 0)
            scrolly += sy;

        // check collision
        if (sy < 0 && windows[(playery / 60 | 0) * 6 + mod(98 + scrollx) / 60 | 0] && playery % 60 <= 30 && 30 <= playery % 60 - sy && between(0, 52 - (scrollx + 38) % 60, 52))
            playery += 30 - playery % 30,
            sy = 15;

        sy = playery > 0 ? sy : 15;

        // check death
        lost |= scrolly - playery > 30;

        for (x=120;x--;) {
            a = Math.acos(x/60%2-1);
            xp = (1-a/Math.PI)*180|0;
            for (y=160;y--;) {
                color = 
                    between(playery, y+scrolly, playery + 24) && between(82, mod(xp), 98) && (w = wizard(mod(last?xp-83:99-xp),y+scrolly-playery))
                        // player
                        ? w
                        // sky / ground
                        : scrolly < -y || scrolly + y > 750
                            ? 10
                            // tower
                            : Math.sin(a) * 40 - 60 + tower(mod(xp+scrollx),y+scrolly);
                d = Math.min(1, Math.max(0,2-Math.hypot(60-x, playery-y-scrolly+12)/12)) * magic;
                c.fillStyle = `hsl(${240+d|0},20%,${color+d/10|0}%)`;
                c.fillRect(x*4,160*4-y*4,4,4);
            }
        }
    }
}, 42)