R=(x,y,z)=>(x+360)%360,k=(x,y,z)=>x<y&&y<z;o=(x,y,z)=>k(0,y/6%51,1)?7:y%6&&(x+(y/6&1)*6)%12&&(o(x+1,y)?8:6);M=(x,y,z)=>x/60|0,s=(x,y,z)=>(z=M(y)*6+M(x))*28%64<39-z/4;for(n=[x=360];S=p=i=I=x--;){for(n[x]=[m=y=1230];y--;)n[x][y]=y<42&&k(126,x,P=150)?x&3:s(x,y)&&(k(24,y%60,30)&&k(0,x%60,36)?9:k(30,y%60,54)&&k(6,x%60,30))||o(x,y);h=-12}onkeydown=onkeyup=(x,y,z)=>c[39-x.which]=x.type[5];setInterval(x=(x,y,z)=>{i++;w=!c[2]-!c[0];$=R($+w*4);S+=I=-Math.min(c[1]&&P&&P--?3:10,1-I);h+=(y=S-h)>110?y-110:y<5&&y-5;p=S>1228?S=c[I=0]=m:0,(M(S)-19||i%60<30)&&s(R(98+$),S)&&k(I,S%60-30,1)&&k(0,($+38)%60,52)&&(S+=30-S%60,I=14);S>0||(I=14,S=-2);(x=(x,y,z)=>{for(c.fillRect(0,0,a.width^=0,640);x--;)for(e=R(~w?x-53:69-x),y=160;y--;)z=h+y,d=Math.min(1,-Math.min(0,Math.hypot(60-x,12-z+S)/12-2))*P,l=d/6+9*(k(0,f=z-S+!p*Math.sin(x/2)*(14-Math.hypot(I))/8|0,24)&&k(52,x,68)&&!(f<0||47-e<f*2||f/3<6-e&&f>e*5-4||e*2>37-f&&e+4>f)?e+7-f?e*2>30-f&&e+4>f?9:1:3:z<0?2+z/6:z>m?p?(x-60)/(100-y)*5+i/4&1&&4:1:Math.sin(r=Math.acos(x/60%2-1))*4-6+n[R((1-r/Math.PI)*180+$|0)][M(z)-19||i%60<30?z:z%12+60]),l>1&&(c.fillStyle=`hsl(${240+d},25%,${l}%)`,c.fillRect(x*4,636-y*4,4,4))})(120)},$=42)