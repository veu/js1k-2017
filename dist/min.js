i=60;n=x=>(x+h)%h;l=(x,y,z)=>x<y&y<z;T=(x,y)=>l(0,y/6%51,1)?7:y%6&&(x+(y/6&1)*6)%12&&(T(x+1,y)?8:6);R=x=>x/i|0;C=(x,y)=>(z=R(y)*6+R(x))*28%64<39-z/4;B=y=>R(y)-19||u%i<$;A=[({min:I,sin:t,hypot:S,PI:o}=M=Math)];for(u=h=360;p=U=u--;)for(A[u]=[v=Q=1231];v--;)A[u][v]=v<42&l(126,u,k=150)?1+u%3:C(u,v)&&(l(24,v%i,$=30)&l(0,u%i,36)?9:l($,v%i,54)&l(6,u%i,$))||T(u,v);s=-12;onkeydown=onkeyup=e=>c[39-e.which]=e.type[5];setInterval(e=>{u++;w=!c[2]-!c[0];r=n(r+w*4);v=-I(c[1]&&k&&k--?5:10,1-v);p+=v;s+=(y=p-s)>110?y-110:y<5&&y-5;if(U=p>1228)p=c[v=0]=Q;if(B(p)&&C(n(98+r),p)&l(v,p%i-$,1)&l(0,(r+38)%i,52))p+=$-p%i,v=14;(x=>{for(p>0||(v=14,p=-2);x--;)for(e=n(~w?x-53:69-x),y=160;y--;c.fillRect(x*4,636-y*4,4,4))z=s+y,d=I(1,-I(0,S(i-x,12-z+p)/12-2))*k,c.fillStyle=`hsl(${240+d},25%,${d/6+9*(l(0,f=z-p+!U*t(x/2)*(14-S(v))/8|0,24)&l(52,x,68)&!(f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f)?e+7-f?e*2>$-f&e+4>f?9:1:3:z<0?2+z/6:z>Q?U?M.atan2(120-y,x-i)*8+r/9*o&1&&4:1:t(a=M.acos(x/i%2-1))*4-6+A[n((1-a/o)*180+r|0)][B(z)?z:z%12+i])}%)`})(120)},r=42)