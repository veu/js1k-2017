$=30;i=60;o=x=>(x+h)%h;l=(x,y,z)=>x<y&y<z;B=(x,y)=>l(0,y/6%51,1)?7:y%6&&(x+(y/6&1)*6)%12&&(B(x+1,y)?8:6);R=x=>x/i|0;U=(x,y)=>(z=R(y)*6+R(x))*28%64<39-z/4;A=[({min:n,sin:u,hypot:S,PI:p}=M=Math)];for(e=h=360;r=T=v=e--;)for(A[e]=[f=Q=1231];f--;)A[e][f]=f<42&l(126,e,I=150)?1+e%3:U(e,f)&&(l(24,f%i,$)&l(0,e%i,36)?9:l($,f%i,54)&l(6,e%i,$))||B(e,f);t=-12;k=[];onkeydown=onkeyup=e=>k[39-e.which]=e.type[5];setInterval(e=>{w=!k[2]-!k[0];s=o(s+w*4);v=-n(k[1]&&I&&I--?5:10,1-v);r+=v;t+=(y=r-t)>110?y-110:y<5&&y-5;if(T=r>1228)r=k[v=0]=Q;if(U(o(98+s),r)&l(v,r%i-$,1)&l(0,(s+38)%i,52))r+=$-r%i,v=14;(x=>{for(r>0||(v=14,r=-2);x--;)for(e=o(~w?x-53:69-x),y=160;y--;c.fillRect(x*4,636-y*4,4,4))z=t+y,d=n(1,-n(0,S(i-x,12-z+r)/12-2))*I,c.fillStyle=`hsl(${240+d},25%,${d/6+9*(l(0,f=z-r+!T*u(x/2)*(14-S(v))/8|0,24)&l(52,x,68)&!(f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f)?e+7-f?e*2>$-f&e+4>f?9:1:3:z<0?2+z/6:z>Q?T?M.atan2(120-y,x-i)*8+s/9*p&1&&4:1:u(a=M.acos(x/i%2-1))*4-6+A[o((1-a/p)*180+s|0)][z])}%)`})(120)},s=42)