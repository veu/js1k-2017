wizard = (x,y) => {
    return y<0 || 47-x<y*2 || y<20-x*3&&y>x*5-4 || x*2>37-y&&x+4>y
        ? 0
        : x+7-y
            ? x*2>30-y&&x+4>y
                ? 99
                : 10
            : 30;
}

mod = x => (x + 360) % 360;
between = (x,y,z) => x < y && y < z;

world = (x, y) => {
    // player
    if (between(playery, y, playery + 24) && between(82, mod(x - scrollx), 98) && wizard(mod(last?x-scrollx-83:16-x+scrollx+83),y-playery)) {
        return wizard(mod(last?x-scrollx-83:16-x+scrollx+83),y-playery);
    }

    // door
    if (between(18, y, 22) && between(90, x, 94)) {
        return 20;
    }
    if (y < 36 && between(84, x, 108)) {
        return 40;
    }

    // windows
    if ((windows[y / 60 | 0]||[])[x / 60 | 0]) {
        if (between(24, y % 60, 30) && between(0, x % 60, 36)) {
            return 90;
        }
        if (between(30, y % 60, 54) && between(6, x % 60, 30)) {
            return 0;
        }
    }

    // wall
    return y % 6 && (x + (y / 6 | 0) % 2 * 6) % 12 && 80;
}

scrollx = 1;

windows = [];
for(y=12;y--;) {
    windows[y] = [];
    for (x=6;x--;) {
        windows[y][x] = Math.random()<.5;
    }
}

last = 2;
scrolly = -20;
playery = sy = move = lost = 0;
magic = 180;

keys=[];
onkeydown = onkeyup = (x,y) => {
    key = x.which-37;
    keys[key>>2 ? 4 : key] = x.type[5];
    key % 2 || (last = key);
}

update = (x,y) => {
    if (lost) return;

    scrollx = mod(scrollx - !!keys[0]*4 + !!keys[2]*4);

    // update speed
    sy = Math.max(-12, sy - 1);
    if (keys[1] && magic) {
        magic--;
        sy = Math.max(-4, sy);
    }

    // update position
    playery += sy;
    if (playery - scrolly > 120 && sy > 0) {
        scrolly += sy;
    }

    // check collision
    if (sy < 0 && (windows[playery / 60 | 0]||[])[mod(98 + scrollx) / 60 | 0] && playery % 60 <= 30 && 30 <= playery % 60 - sy && between(0, 52 - (scrollx + 38) % 60, 52)) {
        playery += 30 - playery % 30;
        sy = 15;
    }

    if (playery <= 0) {
        sy = 15;
    }

    // check death
    lost |= scrolly - playery > 30;

    //requestAnimationFrame(() => {
        for (x=120;x--;) {
            a = Math.acos(x/60%2-1);
            xp = (1-a/Math.PI)*180|0;
            s = Math.sin(a)*40+40|0;
            for (y=160;y--;) {
                w = world(mod(xp+scrollx),y+scrolly);
                d = Math.min(1, Math.max(0,2-Math.hypot(60-x, playery-y-scrolly+12)/12));
                c.fillStyle = `hsl(${240+d*magic|0},20%,${scrolly < -y ? 10 : s-100+w+d*magic/10|0}%)`;
                c.fillRect(x*4,160*4-y*4,4,4);
            }
        }

        // debugging
        /*
        for (x=360;x--;) {
            for(y=160;y--;) {
                w = world(x,y);
                c.fillStyle = `hsl(240,20%,${w}%)`;
                c.fillRect(300 + x, 160 - y, 1,1);
            }
        }
        c.fillStyle = 'rgba(255,255,0,0.2)';
        c.fillRect(300 + scrollx,0,180,160);
        
        c.fillStyle = 'red';
        c.fillRect(300 + scrollx + 90, 0, 1, 180);

        for (x=15;x--;) {
            for(y=23;y--;) {
                c.fillStyle = `hsl(240,20%,${wizard(x,y)}%)`;
                c.fillRect(300+x, 300-y, 1, 1);
            }
        }
        */
    //});
}

//update();
setInterval(update, 1000/24);