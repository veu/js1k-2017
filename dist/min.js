g=(x,y,z)=>(x+360)%360,k=(x,y,z)=>x<y&&y<z;p=(x,y,z)=>k(0,y/6%51,1)?7:y%6&&(x+(y/6&1)*6)%12&&(p(x+1,y)?8:6);M=(x,y,z)=>x/60|0,t=(x,y,z)=>(z=M(y)*6+M(x))*28%64<39-z/4;for(o=[x=360];h=m=n=x--;){for(o[x]=[y=1230];y--;)o[x][y]=y<42&&k(126,x,P=150)?x&3:t(x,y)&&(k(24,y%60,30)&&k(0,x%60,36)?9:k(30,y%60,54)&&k(6,x%60,30))||p(x,y);D=-12}a.style='width:480px;height:640px;image-rendering:pixelated';onkeydown=onkeyup=(x,y,z)=>c[39-x.which]=x.type[5];setInterval(x=(x,y,z)=>{I=!c[2]-!c[0];i=g(i+I*4);z=h+=n=-Math.min(c[1]&&P&&P--?2:8,1-n);D+=110<(y=h-D)?y-110:y<5&&y-5;s=1228<h?h=c[n=0]=1230:0,(M(z)-19||m%60<30)&&t(g(98+i),h)&&k(n,h%60-30,1)&&k(0,(i+38)%60,52)&&(h+=30-h%60,n=13);0<h||(n=13,h=-2);(x=(x,y,z)=>{for(w=new ImageData(x=120,160);x--;)for(e=g(~I?x-53:69-x),y=160;y--;)z=D+y,l=k(0,f=z-h+!s*Math.sin(x/2)*(14-Math.hypot(n))/8|0,24)&&k(52,x,68)&&!(f<0||47-e<f*2||f/3<6-e&&e*5-4<f||37-f<e*2&&f<e+4)?e+7-f?30-f<e*2&&f<e+4?7:2:4:z<0?2+z/6:1230<z?s?(x-60)/(100-y)*5+m/5&1&&4:1:Math.sin(r=Math.acos(x/60%2-1))*8-6+o[g((1-r/Math.PI)*180+i|0)][M(z)-19||m%60<30?z:z%12+60],d=Math.min(1,-Math.min(0,Math.hypot(60-x,12-z+h)/12-2))*P*l/50,w.data.set([9*d+l*8,6*d+l*8,l*8+d+l*8,255],((159-y)*120+x)*4);c.putImageData(w,0,0)})(m++)},i=33)