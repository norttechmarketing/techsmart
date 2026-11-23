/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var wc=0,qo=1,Tc=2;var $l=1,Cc=2,un=3,Ln=0,Ae=1,dn=2,Rn=0,Ci=1,$s=2,Yo=3,Zo=4,Rc=5,Wn=100,Pc=101,Ic=102,Lc=103,Dc=104,Uc=200,Nc=201,Fc=202,Bc=203,la=204,ca=205,Oc=206,zc=207,kc=208,Vc=209,Hc=210,Gc=211,Wc=212,Xc=213,qc=214,ha=0,ua=1,fa=2,Li=3,da=4,pa=5,ma=6,ga=7,tc=0,Yc=1,Zc=2,Pn=0,Jc=1,Kc=2,Qc=3,Ar=4,jc=5,$c=6,th=7;var ec=300,Di=301,Ui=302,xa=303,va=304,Er=306,ya=1e3,Yn=1001,_a=1002,Ye=1003,eh=1004;var bs=1005;var Fe=1006,Rr=1007;var Zn=1008;var xn=1009,nc=1010,ic=1011,as=1012,Do=1013,Jn=1014,pn=1015,gs=1016,Uo=1017,No=1018,Ni=1020,sc=35902,rc=1021,ac=1022,qe=1023,oc=1024,lc=1025,Ri=1026,Fi=1027,cc=1028,Fo=1029,hc=1030,Bo=1031;var Oo=1033,Zs=33776,Js=33777,Ks=33778,Qs=33779,Ma=35840,Sa=35841,ba=35842,Aa=35843,Ea=36196,wa=37492,Ta=37496,Ca=37808,Ra=37809,Pa=37810,Ia=37811,La=37812,Da=37813,Ua=37814,Na=37815,Fa=37816,Ba=37817,Oa=37818,za=37819,ka=37820,Va=37821,js=36492,Ha=36494,Ga=36495,uc=36283,Wa=36284,Xa=36285,qa=36286;var tr=2300,Ya=2301,Pr=2302,Jo=2400,Ko=2401,Qo=2402;var nh=3200,ih=3201;var fc=0,sh=1,Cn="",ye="srgb",Vi="srgb-linear",wr="linear",se="srgb";var ui=7680;var jo=519,rh=512,ah=513,oh=514,dc=515,lh=516,ch=517,hh=518,uh=519,$o=35044;var tl="300 es",mn=2e3,er=2001,Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=1234567,es=Math.PI/180,os=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function zo(i,t){return(i%t+t)%t}function fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dh(i,t,e){return i!==t?(e-i)/(t-i):0}function ns(i,t,e){return(1-e)*i+e*t}function ph(i,t,e,n){return ns(i,t,1-Math.exp(-e*n))}function mh(i,t=1){return t-Math.abs(zo(i,t*2)-t)}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yh(i,t){return i+Math.random()*(t-i)}function _h(i){return i*(.5-Math.random())}function Mh(i){i!==void 0&&(el=i);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(i){return i*es}function bh(i){return i*os}function Ah(i){return(i&i-1)===0&&i!==0}function Eh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Th(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xs={DEG2RAD:es,RAD2DEG:os,generateUUID:ri,clamp:_e,euclideanModulo:zo,mapLinear:fh,inverseLerp:dh,lerp:ns,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:xh,randInt:vh,randFloat:yh,randFloatSpread:_h,seededRandom:Mh,degToRad:Sh,radToDeg:bh,isPowerOfTwo:Ah,ceilPowerOfTwo:Eh,floorPowerOfTwo:wh,setQuaternionFromProperEuler:Th,normalize:Ee,denormalize:Ei},At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],y=s[0],p=s[3],d=s[6],C=s[1],E=s[4],S=s[7],z=s[2],P=s[5],L=s[8];return r[0]=o*y+a*C+l*z,r[3]=o*p+a*E+l*P,r[6]=o*d+a*S+l*L,r[1]=c*y+h*C+f*z,r[4]=c*p+h*E+f*P,r[7]=c*d+h*S+f*L,r[2]=u*y+m*C+g*z,r[5]=u*p+m*E+g*P,r[8]=u*d+m*S+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,m=c*r-o*l,g=e*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ir=new Zt;function pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=nr("canvas");return i.style.display="block",i}var nl={};function $i(i){i in nl||(nl[i]=!0,console.warn(i))}function Rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ph(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ih(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var il=[.64,.33,.3,.6,.15,.06],sl=[.2126,.7152,.0722],rl=[.3127,.329],al=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Vi]:{primaries:il,whitePoint:rl,transfer:wr,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:il,whitePoint:rl,transfer:se,toXYZ:al,fromXYZ:ol,luminanceCoefficients:sl,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var fi,Za=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=nr("canvas")),fi.width=t.width,fi.height=t.height;let n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lh=0,ir=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lr(s[o].image)):r.push(Lr(s[o]))}else r=Lr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dh=0,Le=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Fe,o=Zn,a=qe,l=xn,c=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ri(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=ec;Le.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],g=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(m+1)/2,z=(d+1)/2,P=(h+u)/4,L=(f+y)/4,N=(g+p)/4;return E>S&&E>z?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=L/n):S>z?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=N/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=L/r,s=N/r),this.set(n,s,r,e),this}let C=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(f-y)/C,this.z=(u-h)/C,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends Dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ir(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=y;return}if(f!==y||l!==u||c!==m||h!==g){let p=1-a,d=l*u+c*m+h*g+f*y,C=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let z=Math.sqrt(E),P=Math.atan2(z,d*C);p=Math.sin(p*P)/z,a=Math.sin(a*P)/z}let S=a*C;if(l=l*p+u*S,c=c*p+m*S,h=h*p+g*S,f=f*p+y*S,p===1-a){let z=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=z,c*=z,h*=z,f*=z}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*m-c*u,t[e+1]=l*g+h*u+c*f-a*m,t[e+2]=c*g+h*m+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"YZX":this._x=u*h*f+c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f-u*m*g;break;case"XZY":this._x=u*h*f-c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dr=new D,ll=new Un,Kn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),Es.subVectors(this.max,Zi),di.subVectors(t.a,Zi),pi.subVectors(t.b,Zi),mi.subVectors(t.c,Zi),Sn.subVectors(pi,di),bn.subVectors(mi,pi),Bn.subVectors(di,mi);let e=[0,-Sn.z,Sn.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!Ur(e,di,pi,mi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,di,pi,mi,Es))?!1:(ws.crossVectors(Sn,bn),e=[ws.x,ws.y,ws.z],Ur(e,di,pi,mi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},an=[new D,new D,new D,new D,new D,new D,new D,new D],Ge=new D,As=new Kn,di=new D,pi=new D,mi=new D,Sn=new D,bn=new D,Bn=new D,Zi=new D,Es=new D,ws=new D,On=new D;function Ur(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){On.fromArray(i,r);let a=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Uh=new Kn,Ji=new D,Nr=new D,ls=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Uh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);let e=Ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Nr)),this.expandByPoint(Ji.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},on=new D,Fr=new D,Ts=new D,An=new D,Br=new D,Cs=new D,Or=new D,Qa=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Fr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=An.dot(this.direction),l=-An.dot(Ts),c=An.lengthSq(),h=Math.abs(1-o*o),f,u,m,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,m=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fr).addScaledVector(Ts,u),m}intersectSphere(t,e){on.subVectors(t.center,this.origin);let n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){Br.subVectors(e,t),Cs.subVectors(n,t),Or.crossVectors(Br,Cs);let o=this.direction.dot(Or),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);let l=a*this.direction.dot(Cs.crossVectors(An,Cs));if(l<0)return null;let c=a*this.direction.dot(Br.cross(An));if(c<0||l+c>o)return null;let h=-a*An.dot(Or);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,u,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,m,g,y,p)}set(t,e,n,s,r,o,a,l,c,h,f,u,m,g,y,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,m=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,g=c*h,y=c*f;e[0]=u+y*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,g=c*h,y=c*f;e[0]=u-y*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,m=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=o*l,m=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nh,t,Fh)}lookAt(t,e,n){let s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),En.crossVectors(n,Pe),En.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),En.crossVectors(n,Pe)),En.normalize(),Rs.crossVectors(Pe,En),s[0]=En.x,s[4]=Rs.x,s[8]=Pe.x,s[1]=En.y,s[5]=Rs.y,s[9]=Pe.y,s[2]=En.z,s[6]=Rs.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],d=n[14],C=n[3],E=n[7],S=n[11],z=n[15],P=s[0],L=s[4],N=s[8],b=s[12],_=s[1],R=s[5],Y=s[9],O=s[13],X=s[2],tt=s[6],Z=s[10],at=s[14],q=s[3],gt=s[7],_t=s[11],K=s[15];return r[0]=o*P+a*_+l*X+c*q,r[4]=o*L+a*R+l*tt+c*gt,r[8]=o*N+a*Y+l*Z+c*_t,r[12]=o*b+a*O+l*at+c*K,r[1]=h*P+f*_+u*X+m*q,r[5]=h*L+f*R+u*tt+m*gt,r[9]=h*N+f*Y+u*Z+m*_t,r[13]=h*b+f*O+u*at+m*K,r[2]=g*P+y*_+p*X+d*q,r[6]=g*L+y*R+p*tt+d*gt,r[10]=g*N+y*Y+p*Z+d*_t,r[14]=g*b+y*O+p*at+d*K,r[3]=C*P+E*_+S*X+z*q,r[7]=C*L+E*R+S*tt+z*gt,r[11]=C*N+E*Y+S*Z+z*_t,r[15]=C*b+E*O+S*at+z*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],g=t[3],y=t[7],p=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*m-n*l*m)+y*(+e*l*m-e*c*u+r*o*u-s*o*m+s*c*h-r*l*h)+p*(+e*c*f-e*a*m-r*o*f+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],g=t[12],y=t[13],p=t[14],d=t[15],C=f*p*c-y*u*c+y*l*m-a*p*m-f*l*d+a*u*d,E=g*u*c-h*p*c-g*l*m+o*p*m+h*l*d-o*u*d,S=h*y*c-g*f*c+g*a*m-o*y*m-h*a*d+o*f*d,z=g*f*l-h*y*l-g*a*u+o*y*u+h*a*p-o*f*p,P=e*C+n*E+s*S+r*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=C*L,t[1]=(y*u*r-f*p*r-y*s*m+n*p*m+f*s*d-n*u*d)*L,t[2]=(a*p*r-y*l*r+y*s*c-n*p*c-a*s*d+n*l*d)*L,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*m-n*l*m)*L,t[4]=E*L,t[5]=(h*p*r-g*u*r+g*s*m-e*p*m-h*s*d+e*u*d)*L,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*d-e*l*d)*L,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*m+e*l*m)*L,t[8]=S*L,t[9]=(g*f*r-h*y*r-g*n*m+e*y*m+h*n*d-e*f*d)*L,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*d+e*a*d)*L,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*m-e*a*m)*L,t[12]=z*L,t[13]=(h*y*s-g*f*s+g*n*u-e*y*u-h*n*p+e*f*p)*L,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*p-e*a*p)*L,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,m=r*h,g=r*f,y=o*h,p=o*f,d=a*f,C=l*c,E=l*h,S=l*f,z=n.x,P=n.y,L=n.z;return s[0]=(1-(y+d))*z,s[1]=(m+S)*z,s[2]=(g-E)*z,s[3]=0,s[4]=(m-S)*P,s[5]=(1-(u+d))*P,s[6]=(p+C)*P,s[7]=0,s[8]=(g+E)*L,s[9]=(p-C)*L,s[10]=(1-(u+y))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=gi.set(s[0],s[1],s[2]).length(),o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);let c=1/r,h=1/o,f=1/a;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=f,We.elements[9]*=f,We.elements[10]*=f,e.setFromRotationMatrix(We),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),m,g;if(a===mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,m=(n+s)*h,g,y;if(a===mn)g=(o+r)*f,y=-2*f;else if(a===er)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gi=new D,We=new he,Nh=new D(0,0,0),Fh=new D(1,1,1),En=new D,Rs=new D,Pe=new D,cl=new he,hl=new Un,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bh=0,ul=new D,xi=new Un,ln=new he,Ps=new D,Ki=new D,Oh=new D,zh=new Un,fl=new D(1,0,0),dl=new D(0,1,0),pl=new D(0,0,1),ml={type:"added"},kh={type:"removed"},vi={type:"childadded",child:null},zr={type:"childremoved",child:null},Re=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new nn,n=new Un,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Zt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(dl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(dl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ki,Ps,this.up):ln.lookAt(Ps,Ki,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(ln),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kh),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new D(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new D,cn=new D,kr=new D,hn=new D,yi=new D,_i=new D,gl=new D,Vr=new D,Hr=new D,Gr=new D,Wr=new re,Xr=new re,qr=new re,Xn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),cn.subVectors(n,e),kr.subVectors(t,e);let o=Xe.dot(Xe),a=Xe.dot(cn),l=Xe.dot(kr),c=cn.dot(cn),h=cn.dot(kr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wr,r.x),o.addScaledVector(Xr,r.y),o.addScaledVector(qr,r.z),o}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),cn.subVectors(t,e),Xe.cross(cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Xe.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;yi.subVectors(s,n),_i.subVectors(r,n),Vr.subVectors(t,n);let l=yi.dot(Vr),c=_i.dot(Vr);if(l<=0&&c<=0)return e.copy(n);Hr.subVectors(t,s);let h=yi.dot(Hr),f=_i.dot(Hr);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Gr.subVectors(t,r);let m=yi.dot(Gr),g=_i.dot(Gr);if(g>=0&&m<=g)return e.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_i,a);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return gl.subVectors(r,s),a=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(gl,a);let d=1/(p+y+u);return o=y*d,a=u*d,e.copy(n).addScaledVector(yi,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=zo(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yr(o,r,t+1/3),this.g=Yr(o,r,t),this.b=Yr(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ne.fromWorkingColorSpace(be.copy(this),t),Math.round(_e(be.r*255,0,255))*65536+Math.round(_e(be.g*255,0,255))*256+Math.round(_e(be.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ye){ne.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Is);let n=ns(wn.h,Is.h,e),s=ns(wn.s,Is.s,e),r=ns(wn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new $t;$t.NAMES=mc;var Vh=0,Qn=class extends Dn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ri(),this.name="",this.blending=Ci,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ze=class extends Qn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new D,Ls=new At,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}};var ar=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hh=0,Ne=new he,Zr=new Re,Mi=new D,Ie=new Kn,Qi=new Kn,ve=new D,Je=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pc(t)?or:ar)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Ie.min,Qi.min),Ie.expandByPoint(ve),ve.addVectors(Ie.max,Qi.max),Ie.expandByPoint(ve)):(Ie.expandByPoint(Qi.min),Ie.expandByPoint(Qi.max))}Ie.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ve.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),ve.add(Mi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new D,l[N]=new D;let c=new D,h=new D,f=new D,u=new At,m=new At,g=new At,y=new D,p=new D;function d(N,b,_){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,N),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),a[N].add(y),a[b].add(y),a[_].add(y),l[N].add(p),l[b].add(p),l[_].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let N=0,b=C.length;N<b;++N){let _=C[N],R=_.start,Y=_.count;for(let O=R,X=R+Y;O<X;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new D,S=new D,z=new D,P=new D;function L(N){z.fromBufferAttribute(s,N),P.copy(z);let b=a[N];E.copy(b),E.sub(z.multiplyScalar(z.dot(b))).normalize(),S.crossVectors(P,b);let R=S.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,R)}for(let N=0,b=C.length;N<b;++N){let _=C[N],R=_.start,Y=_.count;for(let O=R,X=R+Y;O<X;O+=3)L(t.getX(O+0)),L(t.getX(O+1)),L(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new Oe(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xl=new he,zn=new Qa,Ds=new ls,vl=new D,Us=new D,Ns=new D,Fs=new D,Jr=new D,Bs=new D,yl=new D,Os=new D,Xt=class extends Re{constructor(t=new Je,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Jr.fromBufferAttribute(f,t),o?Bs.addScaledVector(Jr,h):Bs.addScaledVector(Jr.sub(e),h))}e.add(Bs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(Ds.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ds,vl)===null||zn.origin.distanceToSquared(vl)>(t.far-t.near)**2))&&(xl.copy(r).invert(),zn.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,z=E;S<z;S+=3){let P=a.getX(S),L=a.getX(S+1),N=a.getX(S+2);s=zs(this,d,t,n,c,h,f,P,L,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let C=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);s=zs(this,o,t,n,c,h,f,C,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,z=E;S<z;S+=3){let P=S,L=S+1,N=S+2;s=zs(this,d,t,n,c,h,f,P,L,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){let C=p,E=p+1,S=p+2;s=zs(this,o,t,n,c,h,f,C,E,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Gh(i,t,e,n,s,r,o,a){let l;if(t.side===Ae?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ln,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function zs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Us),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Fs);let h=Gh(i,t,e,n,Us,Ns,Fs,yl);if(h){let f=new D;Xn.getBarycoord(yl,Us,Ns,Fs,f),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,l,c,f,new At)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,l,c,f,new At)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Xn.getNormal(Us,Ns,Fs,u.normal),h.face=u,h.barycoord=f}return h}var yn=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function g(y,p,d,C,E,S,z,P,L,N,b){let _=S/L,R=z/N,Y=S/2,O=z/2,X=P/2,tt=L+1,Z=N+1,at=0,q=0,gt=new D;for(let _t=0;_t<Z;_t++){let K=_t*R-O;for(let kt=0;kt<tt;kt++){let Vt=kt*_-Y;gt[y]=Vt*C,gt[p]=K*E,gt[d]=X,c.push(gt.x,gt.y,gt.z),gt[y]=0,gt[p]=0,gt[d]=P>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(kt/L),f.push(1-_t/N),at+=1}}for(let _t=0;_t<N;_t++)for(let K=0;K<L;K++){let kt=u+K+tt*_t,Vt=u+K+tt*(_t+1),j=u+(K+1)+tt*(_t+1),ht=u+(K+1)+tt*_t;l.push(kt,Vt,ht),l.push(Vt,j,ht),q+=6}a.addGroup(m,q,b),m+=q,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Bi(i[e]);for(let s in n)t[s]=n[s]}return t}function Wh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Xh={clone:Bi,merge:we},qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Qn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=new D,_l=new At,Ml=new At,Me=class extends lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,Ml),e.subVectors(Ml,_l)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Si=-90,bi=1,ja=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Si,bi,t,e);s.layers=this.layers,this.add(s);let r=new Me(Si,bi,t,e);r.layers=this.layers,this.add(r);let o=new Me(Si,bi,t,e);o.layers=this.layers,this.add(o);let a=new Me(Si,bi,t,e);a.layers=this.layers,this.add(a);let l=new Me(Si,bi,t,e);l.layers=this.layers,this.add(l);let c=new Me(Si,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cr=class extends Le{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$a=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Rn});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Fe),new ja(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Kr=new D,Zh=new D,Jh=new Zt,fn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Kr.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jh.getNormalMatrix(t),s=this.coplanarPoint(Kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new ls,ks=new D,cs=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],m=s[8],g=s[9],y=s[10],p=s[11],d=s[12],C=s[13],E=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,p-m,S-d).normalize(),n[1].setComponents(l+r,u+c,p+m,S+d).normalize(),n[2].setComponents(l+o,u+h,p+g,S+C).normalize(),n[3].setComponents(l-o,u-h,p-g,S-C).normalize(),n[4].setComponents(l-a,u-f,p-y,S-E).normalize(),e===mn)n[5].setComponents(l+a,u+f,p+y,S+E).normalize();else if(e===er)n[5].setComponents(a,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kh(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rn=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,m=[],g=[],y=[],p=[];for(let d=0;d<h;d++){let C=d*u-o;for(let E=0;E<c;E++){let S=E*f-r;g.push(S,-C,0),y.push(0,0,1),p.push(E/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){let E=C+c*d,S=C+c*(d+1),z=C+1+c*(d+1),P=C+1+c*d;m.push(E,S,P),m.push(S,z,P)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ku=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Qh,alphahash_pars_fragment:jh,alphamap_fragment:$h,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:au,begin_vertex:ou,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:fu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:xu,color_pars_vertex:vu,color_vertex:yu,common:_u,cube_uv_reflection_fragment:Mu,defaultnormal_vertex:Su,displacementmap_pars_vertex:bu,displacementmap_vertex:Au,emissivemap_fragment:Eu,emissivemap_pars_fragment:wu,colorspace_fragment:Tu,colorspace_pars_fragment:Cu,envmap_fragment:Ru,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Iu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Gu,envmap_vertex:Du,fog_vertex:Uu,fog_pars_vertex:Nu,fog_fragment:Fu,fog_pars_fragment:Bu,gradientmap_pars_fragment:Ou,lightmap_pars_fragment:zu,lights_lambert_fragment:ku,lights_lambert_pars_fragment:Vu,lights_pars_begin:Hu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:qu,lights_phong_pars_fragment:Yu,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ju,lights_fragment_begin:Ku,lights_fragment_maps:Qu,lights_fragment_end:ju,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:sf,map_pars_fragment:rf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:ff,morphtarget_pars_vertex:df,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:xf,normal_pars_vertex:vf,normal_vertex:yf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Af,opaque_fragment:Ef,packing:wf,premultiplied_alpha_fragment:Tf,project_vertex:Cf,dithering_fragment:Rf,dithering_pars_fragment:Pf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Uf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Ff,skinbase_vertex:Bf,skinning_pars_vertex:Of,skinning_vertex:zf,skinnormal_vertex:kf,specularmap_fragment:Vf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:Yf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:Kf,background_vert:Qf,background_frag:jf,backgroundCube_vert:$f,backgroundCube_frag:td,cube_vert:ed,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:hd,meshbasic_vert:ud,meshbasic_frag:fd,meshlambert_vert:dd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:xd,meshnormal_frag:vd,meshphong_vert:yd,meshphong_frag:_d,meshphysical_vert:Md,meshphysical_frag:Sd,meshtoon_vert:bd,meshtoon_frag:Ad,points_vert:Ed,points_frag:wd,shadow_vert:Td,shadow_frag:Cd,sprite_vert:Rd,sprite_frag:Pd},wt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},en={basic:{uniforms:we([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:we([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:we([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:we([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:we([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:we([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:we([wt.points,wt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:we([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:we([wt.common,wt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:we([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:we([wt.sprite,wt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:we([wt.common,wt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:we([wt.lights,wt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};en.physical={uniforms:we([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Vs={r:0,b:0,g:0},Vn=new nn,Id=new he;function Ld(i,t,e,n,s,r,o){let a=new $t(0),l=r===!0?0:1,c,h,f=null,u=0,m=null;function g(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?e:t).get(E)),E}function y(C){let E=!1,S=g(C);S===null?d(a,l):S&&S.isColor&&(d(S,1),E=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(C,E){let S=g(E);S&&(S.isCubeTexture||S.mapping===Er)?(h===void 0&&(h=new Xt(new yn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Bi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(E.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(Vn)),h.material.toneMapped=ne.getTransfer(S.colorSpace)!==se,(f!==S||u!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Xt(new rn(2,2),new sn({name:"BackgroundMaterial",uniforms:Bi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ne.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,m=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,E){C.getRGB(Vs,gc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(C,E=1){a.set(C),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(a,l)},render:y,addToRenderList:p}}function Dd(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,R,Y,O,X){let tt=!1,Z=f(O,Y,R);r!==Z&&(r=Z,c(r.object)),tt=m(_,O,Y,X),tt&&g(_,O,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,S(_,R,Y,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,R,Y){let O=Y.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let tt=X[R.id];tt===void 0&&(tt={},X[R.id]=tt);let Z=tt[O];return Z===void 0&&(Z=u(l()),tt[O]=Z),Z}function u(_){let R=[],Y=[],O=[];for(let X=0;X<e;X++)R[X]=0,Y[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:O,object:_,attributes:{},index:null}}function m(_,R,Y,O){let X=r.attributes,tt=R.attributes,Z=0,at=Y.getAttributes();for(let q in at)if(at[q].location>=0){let _t=X[q],K=tt[q];if(K===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),_t===void 0||_t.attribute!==K||K&&_t.data!==K.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(_,R,Y,O){let X={},tt=R.attributes,Z=0,at=Y.getAttributes();for(let q in at)if(at[q].location>=0){let _t=tt[q];_t===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor));let K={};K.attribute=_t,_t&&_t.data&&(K.data=_t.data),X[q]=K,Z++}r.attributes=X,r.attributesNum=Z,r.index=O}function y(){let _=r.newAttributes;for(let R=0,Y=_.length;R<Y;R++)_[R]=0}function p(_){d(_,0)}function d(_,R){let Y=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;Y[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),X[_]!==R&&(i.vertexAttribDivisor(_,R),X[_]=R)}function C(){let _=r.newAttributes,R=r.enabledAttributes;for(let Y=0,O=R.length;Y<O;Y++)R[Y]!==_[Y]&&(i.disableVertexAttribArray(Y),R[Y]=0)}function E(_,R,Y,O,X,tt,Z){Z===!0?i.vertexAttribIPointer(_,R,Y,X,tt):i.vertexAttribPointer(_,R,Y,O,X,tt)}function S(_,R,Y,O){y();let X=O.attributes,tt=Y.getAttributes(),Z=R.defaultAttributeValues;for(let at in tt){let q=tt[at];if(q.location>=0){let gt=X[at];if(gt===void 0&&(at==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),at==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),gt!==void 0){let _t=gt.normalized,K=gt.itemSize,kt=t.get(gt);if(kt===void 0)continue;let Vt=kt.buffer,j=kt.type,ht=kt.bytesPerElement,Lt=j===i.INT||j===i.UNSIGNED_INT||gt.gpuType===Do;if(gt.isInterleavedBufferAttribute){let ut=gt.data,Ut=ut.stride,Ht=gt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<q.locationSize;Ot++)d(q.location+Ot,ut.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Ot=0;Ot<q.locationSize;Ot++)E(q.location+Ot,K/q.locationSize,j,_t,Ut*ht,(Ht+K/q.locationSize*Ot)*ht,Lt)}else{if(gt.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)d(q.location+ut,gt.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ut=0;ut<q.locationSize;ut++)p(q.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let ut=0;ut<q.locationSize;ut++)E(q.location+ut,K/q.locationSize,j,_t,K*ht,K/q.locationSize*ut*ht,Lt)}}else if(Z!==void 0){let _t=Z[at];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(q.location,_t);break;case 3:i.vertexAttrib3fv(q.location,_t);break;case 4:i.vertexAttrib4fv(q.location,_t);break;default:i.vertexAttrib1fv(q.location,_t)}}}}C()}function z(){N();for(let _ in n){let R=n[_];for(let Y in R){let O=R[Y];for(let X in O)h(O[X].object),delete O[X];delete R[Y]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let Y in R){let O=R[Y];for(let X in O)h(O[X].object),delete O[X];delete R[Y]}delete n[_.id]}function L(_){for(let R in n){let Y=n[R];if(Y[_.id]===void 0)continue;let O=Y[_.id];for(let X in O)h(O[X].object),delete O[X];delete Y[_.id]}}function N(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:p,disableUnusedAttributes:C}}function Ud(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function l(c,h,f,u){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y]*u[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==qe&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let N=L===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==xn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pn&&!N)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:z,maxSamples:P}}function Fd(i){let t=this,e=null,n=0,s=!1,r=!1,o=new fn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let C=r?0:n,E=C*4,S=d.clippingState||null;l.value=S,S=h(g,u,E,m);for(let z=0;z!==E;++z)S[z]=e[z];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let d=m+y*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,S=m;E!==y;++E,S+=4)o.copy(f[E]).applyMatrix4(C,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Bd(i){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=Di:a===va&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xa||a===va)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var hr=class extends lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wi=4,Sl=[.125,.215,.35,.446,.526,.582],qn=20,Qr=new hr,bl=new $t,jr=null,$r=0,ta=0,ea=!1,Gn=(1+Math.sqrt(5))/2,Ai=1/Gn,Al=[new D(-Gn,Ai,0),new D(Gn,Ai,0),new D(-Ai,0,Gn),new D(Ai,0,Gn),new D(0,Gn,-Ai),new D(0,Gn,Ai),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],jn=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){jr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,$r,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:gs,format:qe,colorSpace:Vi,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Od(r)),this._blurMaterial=zd(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,s){let a=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(bl),h.toneMapping=Pn,h.autoClear=!1;let m=new Ze({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new Xt(new yn,m),y=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(bl),y=!0);for(let d=0;d<6;d++){let C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let E=this._cubeSize;Hs(s,C*E,d>2?E:0,E,E),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Di||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Al[(s-r-1)%Al.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Xt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qn-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):qn;p>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);let d=[],C=0;for(let L=0;L<qn;++L){let N=L/y,b=Math.exp(-N*N/2);d.push(b),L===0?C+=b:L<p&&(C+=2*b)}for(let L=0;L<d.length;L++)d[L]=d[L]/C;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;let S=this._sizeLods[s],z=3*S*(s>E-wi?s-E+wi:0),P=4*(this._cubeSize-S);Hs(e,z,P,3*S,2*S),l.setRenderTarget(e),l.render(f,Qr)}};function Od(i){let t=[],e=[],n=[],s=i,r=i-wi+1+Sl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-wi?l=Sl[o-i+wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,y=3,p=2,d=1,C=new Float32Array(y*g*m),E=new Float32Array(p*g*m),S=new Float32Array(d*g*m);for(let P=0;P<m;P++){let L=P%3*2/3-1,N=P>2?0:-1,b=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];C.set(b,y*g*P),E.set(u,p*g*P);let _=[P,P,P,P,P,P];S.set(_,d*g*P)}let z=new Je;z.setAttribute("position",new Oe(C,y)),z.setAttribute("uv",new Oe(E,p)),z.setAttribute("faceIndex",new Oe(S,d)),t.push(z),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zd(i,t,e){let n=new Float32Array(qn),s=new D(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Tl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xa||l===va,h=l===Di||l===Ui;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new jn(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new jn(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vd(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hd(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,d=y.length;p<d;p++)t.remove(y[p])}u.removeEventListener("dispose",o),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let y=m[g];for(let p=0,d=y.length;p<d;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(f){let u=[],m=f.index,g=f.attributes.position,y=0;if(m!==null){let C=m.array;y=m.version;for(let E=0,S=C.length;E<S;E+=3){let z=C[E+0],P=C[E+1],L=C[E+2];u.push(z,P,P,L,L,z)}}else if(g!==void 0){let C=g.array;y=g.version;for(let E=0,S=C.length/3-1;E<S;E+=3){let z=E+0,P=E+1,L=E+2;u.push(z,P,P,L,L,z)}}else return;let p=new(pc(u)?or:ar)(u,1);p.version=y;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Gd(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function c(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*o,g),e.update(m,n,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function f(u,m,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,y,0,g);let d=0;for(let C=0;C<g;C++)d+=m[C]*y[C];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Wd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xd(i,t,e){let n=new WeakMap,s=new re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],E=0;m===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let S=a.attributes.position.count*E,z=1;S>t.maxTextureSize&&(z=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let P=new Float32Array(S*z*4*f),L=new sr(P,S,z,f);L.type=pn,L.needsUpdate=!0;let N=E*4;for(let _=0;_<f;_++){let R=p[_],Y=d[_],O=C[_],X=S*z*4*_;for(let tt=0;tt<R.count;tt++){let Z=tt*N;m===!0&&(s.fromBufferAttribute(R,tt),P[X+Z+0]=s.x,P[X+Z+1]=s.y,P[X+Z+2]=s.z,P[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(Y,tt),P[X+Z+4]=s.x,P[X+Z+5]=s.y,P[X+Z+6]=s.z,P[X+Z+7]=0),y===!0&&(s.fromBufferAttribute(O,tt),P[X+Z+8]=s.x,P[X+Z+9]=s.y,P[X+Z+10]=s.z,P[X+Z+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:L,size:new At(S,z)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function qd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ur=class extends Le{constructor(t,e,n,s,r,o,a,l,c,h=Ri){if(h!==Ri&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=Jn),n===void 0&&h===Fi&&(n=Ni),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vc=new Le,Cl=new ur(1,1),yc=new sr,_c=new Ka,Mc=new cr,Rl=[],Pl=[],Il=new Float32Array(16),Ll=new Float32Array(9),Dl=new Float32Array(4);function Hi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Rl[s];if(r===void 0&&(r=new Float32Array(s),Rl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Jd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Kd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Qd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),ge(e,n)}}function jd(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ll.set(n),i.uniformMatrix3fv(this.addr,!1,Ll),ge(e,n)}}function $d(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),ge(e,n)}}function tp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function sp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=dc,r=Cl):r=vc,e.setTexture2D(t||r,s)}function cp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_c,s)}function hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mc,s)}function up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yc,s)}function fp(i){switch(i){case 5126:return Yd;case 35664:return Zd;case 35665:return Jd;case 35666:return Kd;case 35674:return Qd;case 35675:return jd;case 35676:return $d;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function dp(i,t){i.uniform1fv(this.addr,t)}function pp(i,t){let e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function mp(i,t){let e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function gp(i,t){let e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function xp(i,t){let e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vp(i,t){let e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){let e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _p(i,t){i.uniform1iv(this.addr,t)}function Mp(i,t){i.uniform2iv(this.addr,t)}function Sp(i,t){i.uniform3iv(this.addr,t)}function bp(i,t){i.uniform4iv(this.addr,t)}function Ap(i,t){i.uniform1uiv(this.addr,t)}function Ep(i,t){i.uniform2uiv(this.addr,t)}function wp(i,t){i.uniform3uiv(this.addr,t)}function Tp(i,t){i.uniform4uiv(this.addr,t)}function Cp(i,t,e){let n=this.cache,s=t.length,r=Tr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vc,r[o])}function Rp(i,t,e){let n=this.cache,s=t.length,r=Tr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_c,r[o])}function Pp(i,t,e){let n=this.cache,s=t.length,r=Tr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mc,r[o])}function Ip(i,t,e){let n=this.cache,s=t.length,r=Tr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yc,r[o])}function Lp(i){switch(i){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return xp;case 35675:return vp;case 35676:return yp;case 5124:case 35670:return _p;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return bp;case 5125:return Ap;case 36294:return Ep;case 36295:return wp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}var to=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fp(e.type)}},eo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lp(e.type)}},no=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},na=/(\w+)(\])?(\[|\.)?/g;function Ul(i,t){i.seq.push(t),i.map[t.id]=t}function Dp(i,t,e){let n=i.name,s=n.length;for(na.lastIndex=0;;){let r=na.exec(n),o=na.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ul(e,c===void 0?new to(a,i,t):new eo(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new no(a),Ul(e,f)),e=f}}}var Ii=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Up=37297,Np=0;function Fp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Fl=new Zt;function Bp(i){ne._getMatrix(Fl,ne.workingColorSpace,i);let t=`mat3( ${Fl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fp(i.getShaderSource(t),o)}else return s}function Op(i,t){let e=Bp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(i,t){let e;switch(t){case Jc:e="Linear";break;case Kc:e="Reinhard";break;case Qc:e="Cineon";break;case Ar:e="ACESFilmic";break;case $c:e="AgX";break;case th:e="Neutral";break;case jc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gs=new D;function kp(){ne.getLuminanceCoefficients(Gs);let i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function Hp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ts(i){return i!==""}function Ol(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Wp,qp)}var Xp=new Map;function qp(i,t){let e=Kt[t];if(e===void 0){let n=Xp.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}var Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(Yp,Zp)}function Zp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Kp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ui:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ui&&(t="ENVMAP_MODE_REFRACTION"),t}function jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Yc:t="ENVMAP_BLENDING_MIX";break;case Zc:t="ENVMAP_BLENDING_ADD";break}return t}function $p(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jp(e),c=Kp(e),h=Qp(e),f=jp(e),u=$p(e),m=Vp(e),g=Hp(r),y=s.createProgram(),p,d,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ts).join(`
`),d.length>0&&(d+=`
`)):(p=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),d=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Op("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=io(o),o=Ol(o,e),o=zl(o,e),a=io(a),a=Ol(a,e),a=zl(a,e),o=kl(o),a=kl(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=C+p+o,S=C+d+a,z=Nl(s,s.VERTEX_SHADER,E),P=Nl(s,s.FRAGMENT_SHADER,S);s.attachShader(y,z),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(R){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(z).trim(),X=s.getShaderInfoLog(P).trim(),tt=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,z,P);else{let at=Bl(s,z,"vertex"),q=Bl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+at+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(O===""||X==="")&&(Z=!1);Z&&(R.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:O,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(z),s.deleteShader(P),N=new Ii(s,y),b=Gp(s,y)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,Up)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=z,this.fragmentShader=P,this}var em=0,so=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ro(t),e.set(t,n)),n}},ro=class{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}};function nm(i,t,e,n,s,r,o){let a=new rr,l=new so,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,_,R,Y,O){let X=Y.fog,tt=O.geometry,Z=b.isMeshStandardMaterial?Y.environment:null,at=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),q=at&&at.mapping===Er?at.image.height:null,gt=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let _t=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,K=_t!==void 0?_t.length:0,kt=0;tt.morphAttributes.position!==void 0&&(kt=1),tt.morphAttributes.normal!==void 0&&(kt=2),tt.morphAttributes.color!==void 0&&(kt=3);let Vt,j,ht,Lt;if(gt){let Jt=en[gt];Vt=Jt.vertexShader,j=Jt.fragmentShader}else Vt=b.vertexShader,j=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),Lt=l.getFragmentShaderID(b);let ut=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Ht=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,qt=!!b.map,et=!!b.matcap,ft=!!at,w=!!b.aoMap,Rt=!!b.lightMap,ct=!!b.bumpMap,xt=!!b.normalMap,Mt=!!b.displacementMap,It=!!b.emissiveMap,vt=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,k=b.clearcoat>0,J=b.dispersion>0,ot=b.iridescence>0,Q=b.sheen>0,rt=b.transmission>0,nt=x&&!!b.anisotropyMap,lt=k&&!!b.clearcoatMap,Dt=k&&!!b.clearcoatNormalMap,it=k&&!!b.clearcoatRoughnessMap,bt=ot&&!!b.iridescenceMap,dt=ot&&!!b.iridescenceThicknessMap,Bt=Q&&!!b.sheenColorMap,pt=Q&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,Nt=!!b.specularColorMap,te=!!b.specularIntensityMap,I=rt&&!!b.transmissionMap,St=rt&&!!b.thicknessMap,B=!!b.gradientMap,st=!!b.alphaMap,Tt=b.alphaTest>0,Pt=!!b.alphaHash,Wt=!!b.extensions,ae=Pn;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ae=i.toneMapping);let xe={shaderID:gt,shaderType:b.type,shaderName:b.name,vertexShader:Vt,fragmentShader:j,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:Lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&O.instanceColor!==null,instancingMorph:Ht&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Vi,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:et,envMap:ft,envMapMode:ft&&at.mapping,envMapCubeUVHeight:q,aoMap:w,lightMap:Rt,bumpMap:ct,normalMap:xt,displacementMap:u&&Mt,emissiveMap:It,normalMapObjectSpace:xt&&b.normalMapType===sh,normalMapTangentSpace:xt&&b.normalMapType===fc,metalnessMap:vt,roughnessMap:A,anisotropy:x,anisotropyMap:nt,clearcoat:k,clearcoatMap:lt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:it,dispersion:J,iridescence:ot,iridescenceMap:bt,iridescenceThicknessMap:dt,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:pt,specularMap:Yt,specularColorMap:Nt,specularIntensityMap:te,transmission:rt,transmissionMap:I,thicknessMap:St,gradientMap:B,opaque:b.transparent===!1&&b.blending===Ci&&b.alphaToCoverage===!1,alphaMap:st,alphaTest:Tt,alphaHash:Pt,combine:b.combine,mapUv:qt&&y(b.map.channel),aoMapUv:w&&y(b.aoMap.channel),lightMapUv:Rt&&y(b.lightMap.channel),bumpMapUv:ct&&y(b.bumpMap.channel),normalMapUv:xt&&y(b.normalMap.channel),displacementMapUv:Mt&&y(b.displacementMap.channel),emissiveMapUv:It&&y(b.emissiveMap.channel),metalnessMapUv:vt&&y(b.metalnessMap.channel),roughnessMapUv:A&&y(b.roughnessMap.channel),anisotropyMapUv:nt&&y(b.anisotropyMap.channel),clearcoatMapUv:lt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&y(b.sheenRoughnessMap.channel),specularMapUv:Yt&&y(b.specularMap.channel),specularColorMapUv:Nt&&y(b.specularColorMap.channel),specularIntensityMapUv:te&&y(b.specularIntensityMap.channel),transmissionMapUv:I&&y(b.transmissionMap.channel),thicknessMapUv:St&&y(b.thicknessMap.channel),alphaMapUv:st&&y(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(xt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!tt.attributes.uv&&(qt||st),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ut,skinning:O.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:kt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===se,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Ae,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function d(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)_.push(R),_.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(C(_,b),E(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function C(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function E(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){let _=g[b.type],R;if(_){let Y=en[_];R=Xh.clone(Y.uniforms)}else R=b.uniforms;return R}function z(b,_){let R;for(let Y=0,O=h.length;Y<O;Y++){let X=h[Y];if(X.cacheKey===_){R=X,++R.usedTimes;break}}return R===void 0&&(R=new tm(i,_,b,r),h.push(R)),R}function P(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function L(b){l.remove(b)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:z,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:N}}function im(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,m,g,y,p){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:p},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=p),t++,d}function a(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(f,u,m,g,y,p){let d=o(f,u,m,g,y,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||sm),n.length>1&&n.sort(u||Hl),s.length>1&&s.sort(u||Hl)}function h(){for(let f=t,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function rm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Gl,i.set(n,[o])):s>=r.length?(o=new Gl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new $t};break;case"SpotLight":e={position:new D,direction:new D,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lm=0;function cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hm(i){let t=new am,e=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new he,o=new he;function a(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,y=0,p=0,d=0,C=0,E=0,S=0,z=0,P=0,L=0;c.sort(cm);for(let b=0,_=c.length;b<_;b++){let R=c[b],Y=R.color,O=R.intensity,X=R.distance,tt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Y.r*O,f+=Y.g*O,u+=Y.b*O;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],O);L++}else if(R.isDirectionalLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let at=R.shadow,q=e.get(R);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=R.shadow.matrix,C++}n.directional[m]=Z,m++}else if(R.isSpotLight){let Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(Y).multiplyScalar(O),Z.distance=X,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[y]=Z;let at=R.shadow;if(R.map&&(n.spotLightMap[z]=R.map,z++,at.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[y]=at.matrix,R.castShadow){let q=e.get(R);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=tt,S++}y++}else if(R.isRectAreaLight){let Z=t.get(R);Z.color.copy(Y).multiplyScalar(O),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=Z,p++}else if(R.isPointLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let at=R.shadow,q=e.get(R);q.shadowIntensity=at.intensity,q.shadowBias=at.bias,q.shadowNormalBias=at.normalBias,q.shadowRadius=at.radius,q.shadowMapSize=at.mapSize,q.shadowCameraNear=at.camera.near,q.shadowCameraFar=at.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=Z,g++}else if(R.isHemisphereLight){let Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(O),Z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==p||N.hemiLength!==d||N.numDirectionalShadows!==C||N.numPointShadows!==E||N.numSpotShadows!==S||N.numSpotMaps!==z||N.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+z-P,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=p,N.hemiLength=d,N.numDirectionalShadows=C,N.numPointShadows=E,N.numSpotShadows=S,N.numSpotMaps=z,N.numLightProbes=L,n.version=lm++)}function l(c,h){let f=0,u=0,m=0,g=0,y=0,p=h.matrixWorldInverse;for(let d=0,C=c.length;d<C;d++){let E=c[d];if(E.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(E.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function Wl(i){let t=new hm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function um(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wl(i),t.set(s,[a])):r>=o.length?(a=new Wl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ao=class extends Qn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends Qn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pm(i,t,e){let n=new cs,s=new At,r=new At,o=new re,a=new ao({depthPacking:ih}),l=new oo,c={},h=e.maxTextureSize,f={[Ln]:Ae,[Ae]:Ln,[dn]:dn},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:fm,fragmentShader:dm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Xt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let d=this.type;this.render=function(P,L,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Rn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let O=d!==un&&this.type===un,X=d===un&&this.type!==un;for(let tt=0,Z=P.length;tt<Z;tt++){let at=P[tt],q=at.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let gt=q.getFrameExtents();if(s.multiply(gt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,q.mapSize.y=r.y)),q.map===null||O===!0||X===!0){let K=this.type!==un?{minFilter:Ye,magFilter:Ye}:{};q.map!==null&&q.map.dispose(),q.map=new vn(s.x,s.y,K),q.map.texture.name=at.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let _t=q.getViewportCount();for(let K=0;K<_t;K++){let kt=q.getViewport(K);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),Y.viewport(o),q.updateMatrices(at,K),n=q.getFrustum(),S(L,N,q.camera,at,this.type)}q.isPointLightShadow!==!0&&this.type===un&&C(q,N),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(b,_,R)};function C(P,L){let N=t.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vn(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,N,u,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,N,m,y,null)}function E(P,L,N,b){let _=null,R=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)_=R;else if(_=N.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let Y=_.uuid,O=L.uuid,X=c[Y];X===void 0&&(X={},c[Y]=X);let tt=X[O];tt===void 0&&(tt=_.clone(),X[O]=tt,L.addEventListener("dispose",z)),_=tt}if(_.visible=L.visible,_.wireframe=L.wireframe,b===un?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:f[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let Y=i.properties.get(_);Y.light=N}return _}function S(P,L,N,b,_){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===un)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);let O=t.update(P),X=P.material;if(Array.isArray(X)){let tt=O.groups;for(let Z=0,at=tt.length;Z<at;Z++){let q=tt[Z],gt=X[q.materialIndex];if(gt&&gt.visible){let _t=E(P,gt,b,_);P.onBeforeShadow(i,P,L,N,O,_t,q),i.renderBufferDirect(N,null,O,_t,P,q),P.onAfterShadow(i,P,L,N,O,_t,q)}}}else if(X.visible){let tt=E(P,X,b,_);P.onBeforeShadow(i,P,L,N,O,tt,null),i.renderBufferDirect(N,null,O,tt,P,null),P.onAfterShadow(i,P,L,N,O,tt,null)}}let Y=P.children;for(let O=0,X=Y.length;O<X;O++)S(Y[O],L,N,b,_)}function z(P){P.target.removeEventListener("dispose",z);for(let N in c){let b=c[N],_=P.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var mm={[ha]:ua,[fa]:ma,[da]:ga,[Li]:pa,[ua]:ha,[ma]:fa,[ga]:da,[pa]:Li};function gm(i,t){function e(){let I=!1,St=new re,B=null,st=new re(0,0,0,0);return{setMask:function(Tt){B!==Tt&&!I&&(i.colorMask(Tt,Tt,Tt,Tt),B=Tt)},setLocked:function(Tt){I=Tt},setClear:function(Tt,Pt,Wt,ae,xe){xe===!0&&(Tt*=ae,Pt*=ae,Wt*=ae),St.set(Tt,Pt,Wt,ae),st.equals(St)===!1&&(i.clearColor(Tt,Pt,Wt,ae),st.copy(St))},reset:function(){I=!1,B=null,st.set(-1,0,0,0)}}}function n(){let I=!1,St=!1,B=null,st=null,Tt=null;return{setReversed:function(Pt){if(St!==Pt){let Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let ae=Tt;Tt=null,this.setClear(ae)}St=Pt},getReversed:function(){return St},setTest:function(Pt){Pt?ut(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Pt){B!==Pt&&!I&&(i.depthMask(Pt),B=Pt)},setFunc:function(Pt){if(St&&(Pt=mm[Pt]),st!==Pt){switch(Pt){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Tt!==Pt&&(St&&(Pt=1-Pt),i.clearDepth(Pt),Tt=Pt)},reset:function(){I=!1,B=null,st=null,Tt=null,St=!1}}}function s(){let I=!1,St=null,B=null,st=null,Tt=null,Pt=null,Wt=null,ae=null,xe=null;return{setTest:function(Jt){I||(Jt?ut(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Jt){St!==Jt&&!I&&(i.stencilMask(Jt),St=Jt)},setFunc:function(Jt,ue,He){(B!==Jt||st!==ue||Tt!==He)&&(i.stencilFunc(Jt,ue,He),B=Jt,st=ue,Tt=He)},setOp:function(Jt,ue,He){(Pt!==Jt||Wt!==ue||ae!==He)&&(i.stencilOp(Jt,ue,He),Pt=Jt,Wt=ue,ae=He)},setLocked:function(Jt){I=Jt},setClear:function(Jt){xe!==Jt&&(i.clearStencil(Jt),xe=Jt)},reset:function(){I=!1,St=null,B=null,st=null,Tt=null,Pt=null,Wt=null,ae=null,xe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,m=[],g=null,y=!1,p=null,d=null,C=null,E=null,S=null,z=null,P=null,L=new $t(0,0,0),N=0,b=!1,_=null,R=null,Y=null,O=null,X=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,at=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=at>=2);let gt=null,_t={},K=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Vt=new re().fromArray(K),j=new re().fromArray(kt);function ht(I,St,B,st){let Tt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(I,Pt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<B;Wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Pt}let Lt={};Lt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Li),ct(!1),xt(qo),ut(i.CULL_FACE),w(Rn);function ut(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ut(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ht(I,St){return f[I]!==St?(i.bindFramebuffer(I,St),f[I]=St,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Ot(I,St){let B=m,st=!1;if(I){B=u.get(St),B===void 0&&(B=[],u.set(St,B));let Tt=I.textures;if(B.length!==Tt.length||B[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Wt=Tt.length;Pt<Wt;Pt++)B[Pt]=i.COLOR_ATTACHMENT0+Pt;B.length=Tt.length,st=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,st=!0);st&&i.drawBuffers(B)}function qt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let et={[Wn]:i.FUNC_ADD,[Pc]:i.FUNC_SUBTRACT,[Ic]:i.FUNC_REVERSE_SUBTRACT};et[Lc]=i.MIN,et[Dc]=i.MAX;let ft={[Uc]:i.ZERO,[Nc]:i.ONE,[Fc]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Hc]:i.SRC_ALPHA_SATURATE,[kc]:i.DST_COLOR,[Oc]:i.DST_ALPHA,[Bc]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[zc]:i.ONE_MINUS_DST_ALPHA,[Gc]:i.CONSTANT_COLOR,[Wc]:i.ONE_MINUS_CONSTANT_COLOR,[Xc]:i.CONSTANT_ALPHA,[qc]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,St,B,st,Tt,Pt,Wt,ae,xe,Jt){if(I===Rn){y===!0&&(Ut(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),I!==Rc){if(I!==p||Jt!==b){if((d!==Wn||S!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,S=Wn),Jt)switch(I){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}C=null,E=null,z=null,P=null,L.set(0,0,0),N=0,p=I,b=Jt}return}Tt=Tt||St,Pt=Pt||B,Wt=Wt||st,(St!==d||Tt!==S)&&(i.blendEquationSeparate(et[St],et[Tt]),d=St,S=Tt),(B!==C||st!==E||Pt!==z||Wt!==P)&&(i.blendFuncSeparate(ft[B],ft[st],ft[Pt],ft[Wt]),C=B,E=st,z=Pt,P=Wt),(ae.equals(L)===!1||xe!==N)&&(i.blendColor(ae.r,ae.g,ae.b,xe),L.copy(ae),N=xe),p=I,b=!1}function Rt(I,St){I.side===dn?Ut(i.CULL_FACE):ut(i.CULL_FACE);let B=I.side===Ae;St&&(B=!B),ct(B),I.blending===Ci&&I.transparent===!1?w(Rn):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let st=I.stencilWrite;a.setTest(st),st&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(I){_!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),_=I)}function xt(I){I!==wc?(ut(i.CULL_FACE),I!==R&&(I===qo?i.cullFace(i.BACK):I===Tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),R=I}function Mt(I){I!==Y&&(Z&&i.lineWidth(I),Y=I)}function It(I,St,B){I?(ut(i.POLYGON_OFFSET_FILL),(O!==St||X!==B)&&(i.polygonOffset(St,B),O=St,X=B)):Ut(i.POLYGON_OFFSET_FILL)}function vt(I){I?ut(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+tt-1),gt!==I&&(i.activeTexture(I),gt=I)}function x(I,St,B){B===void 0&&(gt===null?B=i.TEXTURE0+tt-1:B=gt);let st=_t[B];st===void 0&&(st={type:void 0,texture:void 0},_t[B]=st),(st.type!==I||st.texture!==St)&&(gt!==B&&(i.activeTexture(B),gt=B),i.bindTexture(I,St||Lt[I]),st.type=I,st.texture=St)}function k(){let I=_t[gt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){Vt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Vt.copy(I))}function pt(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Yt(I,St){let B=c.get(St);B===void 0&&(B=new WeakMap,c.set(St,B));let st=B.get(I);st===void 0&&(st=i.getUniformBlockIndex(St,I.name),B.set(I,st))}function Nt(I,St){let st=c.get(St).get(I);l.get(St)!==st&&(i.uniformBlockBinding(St,st,I.__bindingPointIndex),l.set(St,st))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},gt=null,_t={},f={},u=new WeakMap,m=[],g=null,y=!1,p=null,d=null,C=null,E=null,S=null,z=null,P=null,L=new $t(0,0,0),N=0,b=!1,_=null,R=null,Y=null,O=null,X=null,Vt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ut,bindFramebuffer:Ht,drawBuffers:Ot,useProgram:qt,setBlending:w,setMaterial:Rt,setFlipSided:ct,setCullFace:xt,setLineWidth:Mt,setPolygonOffset:It,setScissorTest:vt,activeTexture:A,bindTexture:x,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:ot,texImage2D:bt,texImage3D:dt,updateUBOMapping:Yt,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:it,texSubImage2D:Q,texSubImage3D:rt,compressedTexSubImage2D:nt,compressedTexSubImage3D:lt,scissor:Bt,viewport:pt,reset:te}}function Xl(i,t,e,n){let s=xm(n);switch(e){case rc:return i*t;case oc:return i*t;case lc:return i*t*2;case cc:return i*t/s.components*s.byteLength;case Fo:return i*t/s.components*s.byteLength;case hc:return i*t*2/s.components*s.byteLength;case Bo:return i*t*2/s.components*s.byteLength;case ac:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case js:case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(i){switch(i){case xn:case nc:return{byteLength:1,components:1};case as:case ic:case gs:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case Jn:case Do:case pn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):nr("canvas")}function y(A,x,k){let J=1,ot=vt(A);if((ot.width>k||ot.height>k)&&(J=k/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor(J*ot.width),rt=Math.floor(J*ot.height);f===void 0&&(f=g(Q,rt));let nt=x?g(Q,rt):f;return nt.width=Q,nt.height=rt,nt.getContext("2d").drawImage(A,0,0,Q,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+rt+")."),nt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,x,k,J,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){let rt=ot?wr:ne.getTransfer(J);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=rt===se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(A,x){let k;return A?x===null||x===Jn||x===Ni?k=i.DEPTH24_STENCIL8:x===pn?k=i.DEPTH32F_STENCIL8:x===as&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Ni?k=i.DEPTH_COMPONENT24:x===pn?k=i.DEPTH_COMPONENT32F:x===as&&(k=i.DEPTH_COMPONENT16),k}function z(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==Fe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){let x=A.target;x.removeEventListener("dispose",P),N(x),x.isVideoTexture&&h.delete(x)}function L(A){let x=A.target;x.removeEventListener("dispose",L),_(x)}function N(A){let x=n.get(A);if(x.__webglInit===void 0)return;let k=A.source,J=u.get(k);if(J){let ot=J[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(A),Object.keys(J).length===0&&u.delete(k)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let k=A.source,J=u.get(k);delete J[x.__cacheKey],o.memory.textures--}function _(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ot=0;ot<x.__webglFramebuffer[J].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[J][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=A.textures;for(let J=0,ot=k.length;J<ot;J++){let Q=n.get(k[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(A)}let R=0;function Y(){R=0}function O(){let A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function X(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function tt(A,x){let k=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,A,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Z(A,x){let k=n.get(A);if(A.version>0&&k.__version!==A.version){j(k,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function at(A,x){let k=n.get(A);if(A.version>0&&k.__version!==A.version){j(k,A,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function q(A,x){let k=n.get(A);if(A.version>0&&k.__version!==A.version){ht(k,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let gt={[ya]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},_t={[Ye]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},K={[rh]:i.NEVER,[uh]:i.ALWAYS,[ah]:i.LESS,[dc]:i.LEQUAL,[oh]:i.EQUAL,[hh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function kt(A,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Fe||x.magFilter===Rr||x.magFilter===bs||x.magFilter===Zn||x.minFilter===Fe||x.minFilter===Rr||x.minFilter===bs||x.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,gt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,gt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,gt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==bs&&x.minFilter!==Zn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));let J=x.source,ot=u.get(J);ot===void 0&&(ot={},u.set(J,ot));let Q=X(x);if(Q!==A.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ot[Q].usedTimes++;let rt=ot[A.__cacheKey];rt!==void 0&&(ot[A.__cacheKey].usedTimes--,rt.usedTimes===0&&b(x)),A.__cacheKey=Q,A.__webglTexture=ot[Q].texture}return k}function j(A,x,k){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);let ot=Vt(A,x),Q=x.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+k);let rt=n.get(Q);if(Q.version!==rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+k);let nt=ne.getPrimaries(ne.workingColorSpace),lt=x.colorSpace===Cn?null:ne.getPrimaries(x.colorSpace),Dt=x.colorSpace===Cn||nt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let it=y(x.image,!1,s.maxTextureSize);it=It(x,it);let bt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Bt=E(x.internalFormat,bt,dt,x.colorSpace,x.isVideoTexture);kt(J,x);let pt,Yt=x.mipmaps,Nt=x.isVideoTexture!==!0,te=rt.__version===void 0||ot===!0,I=Q.dataReady,St=z(x,it);if(x.isDepthTexture)Bt=S(x.format===Fi,x.type),te&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,dt,null));else if(x.isDataTexture)if(Yt.length>0){Nt&&te&&e.texStorage2D(i.TEXTURE_2D,St,Bt,Yt[0].width,Yt[0].height);for(let B=0,st=Yt.length;B<st;B++)pt=Yt[B],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,pt.width,pt.height,bt,dt,pt.data):e.texImage2D(i.TEXTURE_2D,B,Bt,pt.width,pt.height,0,bt,dt,pt.data);x.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(i.TEXTURE_2D,St,Bt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,bt,dt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,dt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,Yt[0].width,Yt[0].height,it.depth);for(let B=0,st=Yt.length;B<st;B++)if(pt=Yt[B],x.format!==qe)if(bt!==null)if(Nt){if(I)if(x.layerUpdates.size>0){let Tt=Xl(pt.width,pt.height,x.format,x.type);for(let Pt of x.layerUpdates){let Wt=pt.data.subarray(Pt*Tt/pt.data.BYTES_PER_ELEMENT,(Pt+1)*Tt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,Pt,pt.width,pt.height,1,bt,Wt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,pt.width,pt.height,it.depth,bt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Bt,pt.width,pt.height,it.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,pt.width,pt.height,it.depth,bt,dt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Bt,pt.width,pt.height,it.depth,0,bt,dt,pt.data)}else{Nt&&te&&e.texStorage2D(i.TEXTURE_2D,St,Bt,Yt[0].width,Yt[0].height);for(let B=0,st=Yt.length;B<st;B++)pt=Yt[B],x.format!==qe?bt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,pt.width,pt.height,bt,dt,pt.data):e.texImage2D(i.TEXTURE_2D,B,Bt,pt.width,pt.height,0,bt,dt,pt.data)}else if(x.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Bt,it.width,it.height,it.depth),I)if(x.layerUpdates.size>0){let B=Xl(it.width,it.height,x.format,x.type);for(let st of x.layerUpdates){let Tt=it.data.subarray(st*B/it.data.BYTES_PER_ELEMENT,(st+1)*B/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,it.width,it.height,1,bt,dt,Tt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,dt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,bt,dt,it.data);else if(x.isData3DTexture)Nt?(te&&e.texStorage3D(i.TEXTURE_3D,St,Bt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,dt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,bt,dt,it.data);else if(x.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(i.TEXTURE_2D,St,Bt,it.width,it.height);else{let B=it.width,st=it.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Bt,B,st,0,bt,dt,null),B>>=1,st>>=1}}else if(Yt.length>0){if(Nt&&te){let B=vt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,St,Bt,B.width,B.height)}for(let B=0,st=Yt.length;B<st;B++)pt=Yt[B],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,bt,dt,pt):e.texImage2D(i.TEXTURE_2D,B,Bt,bt,dt,pt);x.generateMipmaps=!1}else if(Nt){if(te){let B=vt(it);e.texStorage2D(i.TEXTURE_2D,St,Bt,B.width,B.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,dt,it)}else e.texImage2D(i.TEXTURE_2D,0,Bt,bt,dt,it);p(x)&&d(J),rt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ht(A,x,k){if(x.image.length!==6)return;let J=Vt(A,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let Q=n.get(ot);if(ot.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+k);let rt=ne.getPrimaries(ne.workingColorSpace),nt=x.colorSpace===Cn?null:ne.getPrimaries(x.colorSpace),lt=x.colorSpace===Cn||rt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Dt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let st=0;st<6;st++)!Dt&&!it?bt[st]=y(x.image[st],!0,s.maxCubemapSize):bt[st]=it?x.image[st].image:x.image[st],bt[st]=It(x,bt[st]);let dt=bt[0],Bt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Yt=E(x.internalFormat,Bt,pt,x.colorSpace),Nt=x.isVideoTexture!==!0,te=Q.__version===void 0||J===!0,I=ot.dataReady,St=z(x,dt);kt(i.TEXTURE_CUBE_MAP,x);let B;if(Dt){Nt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Yt,dt.width,dt.height);for(let st=0;st<6;st++){B=bt[st].mipmaps;for(let Tt=0;Tt<B.length;Tt++){let Pt=B[Tt];x.format!==qe?Bt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,Pt.width,Pt.height,Bt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,Pt.width,Pt.height,Bt,pt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,Yt,Pt.width,Pt.height,0,Bt,pt,Pt.data)}}}else{if(B=x.mipmaps,Nt&&te){B.length>0&&St++;let st=vt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Yt,st.width,st.height)}for(let st=0;st<6;st++)if(it){Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt[st].width,bt[st].height,Bt,pt,bt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,bt[st].width,bt[st].height,0,Bt,pt,bt[st].data);for(let Tt=0;Tt<B.length;Tt++){let Wt=B[Tt].image[st].image;Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Wt.width,Wt.height,Bt,pt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,Yt,Wt.width,Wt.height,0,Bt,pt,Wt.data)}}else{Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,pt,bt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Yt,Bt,pt,bt[st]);for(let Tt=0;Tt<B.length;Tt++){let Pt=B[Tt];Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Bt,pt,Pt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,Yt,Bt,pt,Pt.image[st])}}}p(x)&&d(i.TEXTURE_CUBE_MAP),Q.__version=ot.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Lt(A,x,k,J,ot,Q){let rt=r.convert(k.format,k.colorSpace),nt=r.convert(k.type),lt=E(k.internalFormat,rt,nt,k.colorSpace),Dt=n.get(x),it=n.get(k);if(it.__renderTarget=x,!Dt.__hasExternalTextures){let bt=Math.max(1,x.width>>Q),dt=Math.max(1,x.height>>Q);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,lt,bt,dt,x.depth,0,rt,nt,null):e.texImage2D(ot,Q,lt,bt,dt,0,rt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ot,it.__webglTexture,0,ct(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ot,it.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let J=x.depthTexture,ot=J&&J.isDepthTexture?J.type:null,Q=S(x.stencilBuffer,ot),rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=ct(x);xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Q,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,A)}else{let J=x.textures;for(let ot=0;ot<J.length;ot++){let Q=J[ot],rt=r.convert(Q.format,Q.colorSpace),nt=r.convert(Q.type),lt=E(Q.internalFormat,rt,nt,Q.colorSpace),Dt=ct(x);k&&xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,lt,x.width,x.height):xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);let ot=J.__webglTexture,Q=ct(x);if(x.depthTexture.format===Ri)xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(x.depthTexture.format===Fi)xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Ht(A){let x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,A)}else if(k){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[J],A,!1);else{let ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,k){let J=n.get(A);x!==void 0&&Lt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ht(A)}function qt(A){let x=A.texture,k=n.get(A),J=n.get(x);A.addEventListener("dispose",L);let ot=A.textures,Q=A.isWebGLCubeRenderTarget===!0,rt=ot.length>1;if(rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[nt]=[];for(let lt=0;lt<x.mipmaps.length;lt++)k.__webglFramebuffer[nt][lt]=i.createFramebuffer()}else k.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)k.__webglFramebuffer[nt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(rt)for(let nt=0,lt=ot.length;nt<lt;nt++){let Dt=n.get(ot[nt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let nt=0;nt<ot.length;nt++){let lt=ot[nt];k.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[nt]);let Dt=r.convert(lt.format,lt.colorSpace),it=r.convert(lt.type),bt=E(lt.internalFormat,Dt,it,lt.colorSpace,A.isXRRenderTarget===!0),dt=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,k.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kt(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)Lt(k.__webglFramebuffer[nt][lt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,lt);else Lt(k.__webglFramebuffer[nt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let nt=0,lt=ot.length;nt<lt;nt++){let Dt=ot[nt],it=n.get(Dt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),kt(i.TEXTURE_2D,Dt),Lt(k.__webglFramebuffer,A,Dt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),p(Dt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,J.__webglTexture),kt(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)Lt(k.__webglFramebuffer[lt],A,x,i.COLOR_ATTACHMENT0,nt,lt);else Lt(k.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,nt,0);p(x)&&d(nt),e.unbindTexture()}A.depthBuffer&&Ht(A)}function et(A){let x=A.textures;for(let k=0,J=x.length;k<J;k++){let ot=x[k];if(p(ot)){let Q=C(A),rt=n.get(ot).__webglTexture;e.bindTexture(Q,rt),d(Q),e.unbindTexture()}}}let ft=[],w=[];function Rt(A){if(A.samples>0){if(xt(A)===!1){let x=A.textures,k=A.width,J=A.height,ot=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(A),nt=x.length>1;if(nt)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[lt]);let Dt=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,ot,i.NEAREST),l===!0&&(ft.length=0,w.length=0,ft.push(i.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(Q),w.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[lt]);let Dt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function It(A,x){let k=A.colorSpace,J=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Vi&&k!==Cn&&(ne.getTransfer(k)===se?(J!==qe||ot!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=at,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=xt}function ym(i,t){function e(n,s=Cn){let r,o=ne.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===qe)return i.RGBA;if(n===oc)return i.LUMINANCE;if(n===lc)return i.LUMINANCE_ALPHA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===hc)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Ks||n===Qs)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===wa)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Ba||n===Oa||n===za||n===ka||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Ha||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var lo=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Be=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,co=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Mm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ho=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,g=null,y=new co,p=e.getContextAttributes(),d=null,C=null,E=[],S=[],z=new At,P=null,L=new Me;L.viewport=new re;let N=new Me;N.viewport=new re;let b=[L,N],_=new lo,R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=E[j];return ht===void 0&&(ht=new is,E[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=E[j];return ht===void 0&&(ht=new is,E[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=E[j];return ht===void 0&&(ht=new is,E[j]=ht),ht.getHandSpace()};function O(j){let ht=S.indexOf(j.inputSource);if(ht===-1)return;let Lt=E[ht];Lt!==void 0&&(Lt.update(j.inputSource,j.frame,c||o),Lt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let j=0;j<E.length;j++){let ht=S[j];ht!==null&&(S[j]=null,E[j].disconnect(ht))}R=null,Y=null,y.reset(),t.setRenderTarget(d),m=null,u=null,f=null,s=null,C=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){let ht={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new vn(m.framebufferWidth,m.framebufferHeight,{format:qe,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ht=null,Lt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=p.stencil?Fi:Ri,Lt=p.stencil?Ni:Jn);let Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),C=new vn(u.textureWidth,u.textureHeight,{format:qe,type:xn,depthTexture:new ur(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function tt(j){for(let ht=0;ht<j.removed.length;ht++){let Lt=j.removed[ht],ut=S.indexOf(Lt);ut>=0&&(S[ut]=null,E[ut].disconnect(Lt))}for(let ht=0;ht<j.added.length;ht++){let Lt=j.added[ht],ut=S.indexOf(Lt);if(ut===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=S.length){S.push(Lt),ut=Ht;break}else if(S[Ht]===null){S[Ht]=Lt,ut=Ht;break}if(ut===-1)break}let Ut=E[ut];Ut&&Ut.connect(Lt)}}let Z=new D,at=new D;function q(j,ht,Lt){Z.setFromMatrixPosition(ht.matrixWorld),at.setFromMatrixPosition(Lt.matrixWorld);let ut=Z.distanceTo(at),Ut=ht.projectionMatrix.elements,Ht=Lt.projectionMatrix.elements,Ot=Ut[14]/(Ut[10]-1),qt=Ut[14]/(Ut[10]+1),et=(Ut[9]+1)/Ut[5],ft=(Ut[9]-1)/Ut[5],w=(Ut[8]-1)/Ut[0],Rt=(Ht[8]+1)/Ht[0],ct=Ot*w,xt=Ot*Rt,Mt=ut/(-w+Rt),It=Mt*-w;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(Mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let vt=Ot+Mt,A=qt+Mt,x=ct-It,k=xt+(ut-It),J=et*qt/A*vt,ot=ft*qt/A*vt;j.projectionMatrix.makePerspective(x,k,J,ot,vt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function gt(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,Lt=j.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),_.near=N.near=L.near=ht,_.far=N.far=L.far=Lt,(R!==_.near||Y!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,Y=_.far),L.layers.mask=j.layers.mask|2,N.layers.mask=j.layers.mask|4,_.layers.mask=L.layers.mask|N.layers.mask;let ut=j.parent,Ut=_.cameras;gt(_,ut);for(let Ht=0;Ht<Ut.length;Ht++)gt(Ut[Ht],ut);Ut.length===2?q(_,L,N):_.projectionMatrix.copy(L.projectionMatrix),_t(j,_,ut)};function _t(j,ht,Lt){Lt===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(Lt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=os*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let K=null;function kt(j,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(C,m.framebuffer),t.setRenderTarget(C));let ut=!1;Lt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Ht=0;Ht<Lt.length;Ht++){let Ot=Lt[Ht],qt=null;if(m!==null)qt=m.getViewport(Ot);else{let ft=f.getViewSubImage(u,Ot);qt=ft.viewport,Ht===0&&(t.setRenderTargetTextures(C,ft.colorTexture,u.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(C))}let et=b[Ht];et===void 0&&(et=new Me,et.layers.enable(Ht),et.viewport=new re,b[Ht]=et),et.matrix.fromArray(Ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(qt.x,qt.y,qt.width,qt.height),Ht===0&&(_.matrix.copy(et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(et)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Ht=f.getDepthInformation(Lt[0]);Ht&&Ht.isValid&&Ht.texture&&y.init(t,Ht,s.renderState)}}for(let Lt=0;Lt<E.length;Lt++){let ut=S[Lt],Ut=E[Lt];ut!==null&&Ut!==void 0&&Ut.update(ut,ht,c||o)}K&&K(j,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Vt=new xc;Vt.setAnimationLoop(kt),this.setAnimationLoop=function(j){K=j},this.dispose=function(){}}},Hn=new nn,bm=new he;function Am(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,gc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,C,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,C,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ae&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ae&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let C=t.get(d),E=C.envMap,S=C.envMapRotation;E&&(p.envMap.value=E,Hn.copy(S),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Hn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,C,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=E*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ae&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let C=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Em(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){let S=E.program;n.uniformBlockBinding(C,S)}function c(C,E){let S=s[C.id];S===void 0&&(g(C),S=h(C),s[C.id]=S,C.addEventListener("dispose",p));let z=E.program;n.updateUBOMapping(C,z);let P=t.render.frame;r[C.id]!==P&&(u(C),r[C.id]=P)}function h(C){let E=f();C.__bindingPointIndex=E;let S=i.createBuffer(),z=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(C){let E=s[C.id],S=C.uniforms,z=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,L=S.length;P<L;P++){let N=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,_=N.length;b<_;b++){let R=N[b];if(m(R,P,b,z)===!0){let Y=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],X=0;for(let tt=0;tt<O.length;tt++){let Z=O[tt],at=y(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+X,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,X),X+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,E,S,z){let P=C.value,L=E+"_"+S;if(z[L]===void 0)return typeof P=="number"||typeof P=="boolean"?z[L]=P:z[L]=P.clone(),!0;{let N=z[L];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return z[L]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(C){let E=C.uniforms,S=0,z=16;for(let L=0,N=E.length;L<N;L++){let b=Array.isArray(E[L])?E[L]:[E[L]];for(let _=0,R=b.length;_<R;_++){let Y=b[_],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,tt=O.length;X<tt;X++){let Z=O[X],at=y(Z),q=S%z,gt=q%at.boundary,_t=q+gt;S+=gt,_t!==0&&z-_t<at.storage&&(S+=z-_t),Y.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=at.storage}}}let P=S%z;return P>0&&(S+=z-P),C.__size=S,C.__cache={},this}function y(C){let E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function p(C){let E=C.target;E.removeEventListener("dispose",p);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var hs=class{constructor(t={}){let{canvas:e=Ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),y=new Int32Array(4),p=null,d=null,C=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Pn,this.toneMappingExposure=1;let S=this,z=!1,P=0,L=0,N=null,b=-1,_=null,R=new re,Y=new re,O=null,X=new $t(0),tt=0,Z=e.width,at=e.height,q=1,gt=null,_t=null,K=new re(0,0,Z,at),kt=new re(0,0,Z,at),Vt=!1,j=new cs,ht=!1,Lt=!1,ut=new he,Ut=new he,Ht=new D,Ot=new re,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function ft(){return N===null?q:1}let w=n;function Rt(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),w===null){let U="webgl2";if(w=Rt(U,M),w===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ct,xt,Mt,It,vt,A,x,k,J,ot,Q,rt,nt,lt,Dt,it,bt,dt,Bt,pt,Yt,Nt,te,I;function St(){ct=new Vd(w),ct.init(),Nt=new ym(w,ct),xt=new Nd(w,ct,t,Nt),Mt=new gm(w,ct),xt.reverseDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),It=new Wd(w),vt=new im,A=new vm(w,ct,Mt,vt,xt,Nt,It),x=new Bd(S),k=new kd(S),J=new Kh(w),te=new Dd(w,J),ot=new Hd(w,J,It,te),Q=new qd(w,ot,J,It),Bt=new Xd(w,xt,A),it=new Fd(vt),rt=new nm(S,x,k,ct,xt,te,it),nt=new Am(S,vt),lt=new rm,Dt=new um(ct),dt=new Ld(S,x,k,Mt,Q,m,l),bt=new pm(S,Q,xt),I=new Em(w,It,xt,Mt),pt=new Ud(w,ct,It),Yt=new Gd(w,ct,It),It.programs=rt.programs,S.capabilities=xt,S.extensions=ct,S.properties=vt,S.renderLists=lt,S.shadowMap=bt,S.state=Mt,S.info=It}St();let B=new ho(S,w);this.xr=B,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let M=ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(Z,at,!1))},this.getSize=function(M){return M.set(Z,at)},this.setSize=function(M,U,G=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,at=U,e.width=Math.floor(M*q),e.height=Math.floor(U*q),G===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Z*q,at*q).floor()},this.setDrawingBufferSize=function(M,U,G){Z=M,at=U,q=G,e.width=Math.floor(M*G),e.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,U,G,W){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,G,W),Mt.viewport(R.copy(K).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,U,G,W){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,U,G,W),Mt.scissor(Y.copy(kt).multiplyScalar(q).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){Mt.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){_t=M},this.getClearColor=function(M){return M.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(M=!0,U=!0,G=!0){let W=0;if(M){let F=!1;if(N!==null){let mt=N.texture.format;F=mt===Oo||mt===Bo||mt===Fo}if(F){let mt=N.texture.type,Ct=mt===xn||mt===Jn||mt===as||mt===Ni||mt===Uo||mt===No,v=dt.getClearColor(),V=dt.getClearAlpha(),H=v.r,T=v.g,$=v.b;Ct?(g[0]=H,g[1]=T,g[2]=$,g[3]=V,w.clearBufferuiv(w.COLOR,0,g)):(y[0]=H,y[1]=T,y[2]=$,y[3]=V,w.clearBufferiv(w.COLOR,0,y))}else W|=w.COLOR_BUFFER_BIT}U&&(W|=w.DEPTH_BUFFER_BIT),G&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),lt.dispose(),Dt.dispose(),vt.dispose(),x.dispose(),k.dispose(),Q.dispose(),te.dispose(),I.dispose(),rt.dispose(),B.dispose(),B.removeEventListener("sessionstart",oi),B.removeEventListener("sessionend",_s),De.stop()};function st(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let M=It.autoReset,U=bt.enabled,G=bt.autoUpdate,W=bt.needsUpdate,F=bt.type;St(),It.autoReset=M,bt.enabled=U,bt.autoUpdate=G,bt.needsUpdate=W,bt.type=F}function Pt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Wt(M){let U=M.target;U.removeEventListener("dispose",Wt),ae(U)}function ae(M){xe(M),vt.remove(M)}function xe(M){let U=vt.get(M).programs;U!==void 0&&(U.forEach(function(G){rt.releaseProgram(G)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,W,F,mt){U===null&&(U=qt);let Ct=F.isMesh&&F.matrixWorld.determinant()<0,v=Ss(M,U,G,W,F);Mt.setMaterial(W,Ct);let V=G.index,H=1;if(W.wireframe===!0){if(V=ot.getWireframeAttribute(G),V===void 0)return;H=2}let T=G.drawRange,$=G.attributes.position,yt=T.start*H,Ft=(T.start+T.count)*H;mt!==null&&(yt=Math.max(yt,mt.start*H),Ft=Math.min(Ft,(mt.start+mt.count)*H)),V!==null?(yt=Math.max(yt,0),Ft=Math.min(Ft,V.count)):$!=null&&(yt=Math.max(yt,0),Ft=Math.min(Ft,$.count));let Gt=Ft-yt;if(Gt<0||Gt===1/0)return;te.setup(F,W,v,G,V);let ee,Qt=pt;if(V!==null&&(ee=J.get(V),Qt=Yt,Qt.setIndex(ee)),F.isMesh)W.wireframe===!0?(Mt.setLineWidth(W.wireframeLinewidth*ft()),Qt.setMode(w.LINES)):Qt.setMode(w.TRIANGLES);else if(F.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Mt.setLineWidth(Et*ft()),F.isLineSegments?Qt.setMode(w.LINES):F.isLineLoop?Qt.setMode(w.LINE_LOOP):Qt.setMode(w.LINE_STRIP)}else F.isPoints?Qt.setMode(w.POINTS):F.isSprite&&Qt.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Et=F._multiDrawStarts,jt=F._multiDrawCounts,zt=F._multiDrawCount,oe=V?J.get(V).bytesPerElement:1,Te=vt.get(W).currentProgram.getUniforms();for(let pe=0;pe<zt;pe++)Te.setValue(w,"_gl_DrawID",pe),Qt.render(Et[pe]/oe,jt[pe])}else if(F.isInstancedMesh)Qt.renderInstances(yt,Gt,F.count);else if(G.isInstancedBufferGeometry){let Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jt=Math.min(G.instanceCount,Et);Qt.renderInstances(yt,Gt,jt)}else Qt.render(yt,Gt)};function Jt(M,U,G){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=Ae,M.needsUpdate=!0,ci(M,U,G),M.side=Ln,M.needsUpdate=!0,ci(M,U,G),M.side=dn):ci(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),d=Dt.get(G),d.init(U),E.push(d),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),M!==G&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let W=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let mt=F.material;if(mt)if(Array.isArray(mt))for(let Ct=0;Ct<mt.length;Ct++){let v=mt[Ct];Jt(v,G,F),W.add(v)}else Jt(mt,G,F),W.add(mt)}),E.pop(),d=null,W},this.compileAsync=function(M,U,G=null){let W=this.compile(M,U,G);return new Promise(F=>{function mt(){if(W.forEach(function(Ct){vt.get(Ct).currentProgram.isReady()&&W.delete(Ct)}),W.size===0){F(M);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ue=null;function He(M){ue&&ue(M)}function oi(){De.stop()}function _s(){De.start()}let De=new xc;De.setAnimationLoop(He),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(M){ue=M,B.setAnimationLoop(M),M===null?De.stop():De.start()},B.addEventListener("sessionstart",oi),B.addEventListener("sessionend",_s),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(U),U=B.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,N),d=Dt.get(M,E.length),d.init(U),E.push(d),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ut),Lt=this.localClippingEnabled,ht=it.init(this.clippingPlanes,Lt),p=lt.get(M,C.length),p.init(),C.push(p),B.enabled===!0&&B.isPresenting===!0){let mt=S.xr.getDepthSensingMesh();mt!==null&&_n(mt,U,-1/0,S.sortObjects)}_n(M,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(gt,_t),et=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,et&&dt.addToRenderList(p,M),this.info.render.frame++,ht===!0&&it.beginShadows();let G=d.state.shadowsArray;bt.render(G,M,U),ht===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=p.opaque,F=p.transmissive;if(d.setupLights(),U.isArrayCamera){let mt=U.cameras;if(F.length>0)for(let Ct=0,v=mt.length;Ct<v;Ct++){let V=mt[Ct];Wi(W,F,M,V)}et&&dt.render(M);for(let Ct=0,v=mt.length;Ct<v;Ct++){let V=mt[Ct];Mn(p,M,V,V.viewport)}}else F.length>0&&Wi(W,F,M,U),et&&dt.render(M),Mn(p,M,U);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(S,M,U),te.resetDefaultState(),b=-1,_=null,E.pop(),E.length>0?(d=E[E.length-1],ht===!0&&it.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function _n(M,U,G,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){W&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ut);let Ct=Q.update(M),v=M.material;v.visible&&p.push(M,Ct,v,G,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){let Ct=Q.update(M),v=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ot.copy(Ct.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(Ut)),Array.isArray(v)){let V=Ct.groups;for(let H=0,T=V.length;H<T;H++){let $=V[H],yt=v[$.materialIndex];yt&&yt.visible&&p.push(M,Ct,yt,G,Ot.z,$)}}else v.visible&&p.push(M,Ct,v,G,Ot.z,null)}}let mt=M.children;for(let Ct=0,v=mt.length;Ct<v;Ct++)_n(mt[Ct],U,G,W)}function Mn(M,U,G,W){let F=M.opaque,mt=M.transmissive,Ct=M.transparent;d.setupLightsView(G),ht===!0&&it.setGlobalState(S.clippingPlanes,G),W&&Mt.viewport(R.copy(W)),F.length>0&&li(F,U,G),mt.length>0&&li(mt,U,G),Ct.length>0&&li(Ct,U,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Wi(M,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new vn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?gs:xn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let mt=d.state.transmissionRenderTarget[W.id],Ct=W.viewport||R;mt.setSize(Ct.z,Ct.w);let v=S.getRenderTarget();S.setRenderTarget(mt),S.getClearColor(X),tt=S.getClearAlpha(),tt<1&&S.setClearColor(16777215,.5),S.clear(),et&&dt.render(G);let V=S.toneMapping;S.toneMapping=Pn;let H=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),ht===!0&&it.setGlobalState(S.clippingPlanes,W),li(M,G,W),A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let T=!1;for(let $=0,yt=U.length;$<yt;$++){let Ft=U[$],Gt=Ft.object,ee=Ft.geometry,Qt=Ft.material,Et=Ft.group;if(Qt.side===dn&&Gt.layers.test(W.layers)){let jt=Qt.side;Qt.side=Ae,Qt.needsUpdate=!0,Ms(Gt,G,W,ee,Qt,Et),Qt.side=jt,Qt.needsUpdate=!0,T=!0}}T===!0&&(A.updateMultisampleRenderTarget(mt),A.updateRenderTargetMipmap(mt))}S.setRenderTarget(v),S.setClearColor(X,tt),H!==void 0&&(W.viewport=H),S.toneMapping=V}function li(M,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,mt=M.length;F<mt;F++){let Ct=M[F],v=Ct.object,V=Ct.geometry,H=W===null?Ct.material:W,T=Ct.group;v.layers.test(G.layers)&&Ms(v,U,G,V,H,T)}}function Ms(M,U,G,W,F,mt){M.onBeforeRender(S,U,G,W,F,mt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(S,U,G,W,M,mt),F.transparent===!0&&F.side===dn&&F.forceSinglePass===!1?(F.side=Ae,F.needsUpdate=!0,S.renderBufferDirect(G,U,W,F,M,mt),F.side=Ln,F.needsUpdate=!0,S.renderBufferDirect(G,U,W,F,M,mt),F.side=dn):S.renderBufferDirect(G,U,W,F,M,mt),M.onAfterRender(S,U,G,W,F,mt)}function ci(M,U,G){U.isScene!==!0&&(U=qt);let W=vt.get(M),F=d.state.lights,mt=d.state.shadowsArray,Ct=F.state.version,v=rt.getParameters(M,F.state,mt,U,G),V=rt.getProgramCacheKey(v),H=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?k:x).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,H===void 0&&(M.addEventListener("dispose",Wt),H=new Map,W.programs=H);let T=H.get(V);if(T!==void 0){if(W.currentProgram===T&&W.lightsStateVersion===Ct)return Xi(M,v),T}else v.uniforms=rt.getUniforms(M),M.onBeforeCompile(v,S),T=rt.acquireProgram(v,V),H.set(V,T),W.uniforms=v.uniforms;let $=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&($.clippingPlanes=it.uniform),Xi(M,v),W.needsLights=Yi(M),W.lightsStateVersion=Ct,W.needsLights&&($.ambientLightColor.value=F.state.ambient,$.lightProbe.value=F.state.probe,$.directionalLights.value=F.state.directional,$.directionalLightShadows.value=F.state.directionalShadow,$.spotLights.value=F.state.spot,$.spotLightShadows.value=F.state.spotShadow,$.rectAreaLights.value=F.state.rectArea,$.ltc_1.value=F.state.rectAreaLTC1,$.ltc_2.value=F.state.rectAreaLTC2,$.pointLights.value=F.state.point,$.pointLightShadows.value=F.state.pointShadow,$.hemisphereLights.value=F.state.hemi,$.directionalShadowMap.value=F.state.directionalShadowMap,$.directionalShadowMatrix.value=F.state.directionalShadowMatrix,$.spotShadowMap.value=F.state.spotShadowMap,$.spotLightMatrix.value=F.state.spotLightMatrix,$.spotLightMap.value=F.state.spotLightMap,$.pointShadowMap.value=F.state.pointShadowMap,$.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=T,W.uniformsList=null,T}function hi(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Ii.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Xi(M,U){let G=vt.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ss(M,U,G,W,F){U.isScene!==!0&&(U=qt),A.resetTextureUnits();let mt=U.fog,Ct=W.isMeshStandardMaterial?U.environment:null,v=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vi,V=(W.isMeshStandardMaterial?k:x).get(W.envMap||Ct),H=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,T=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),$=!!G.morphAttributes.position,yt=!!G.morphAttributes.normal,Ft=!!G.morphAttributes.color,Gt=Pn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Gt=S.toneMapping);let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=ee!==void 0?ee.length:0,Et=vt.get(W),jt=d.state.lights;if(ht===!0&&(Lt===!0||M!==_)){let Ce=M===_&&W.id===b;it.setState(W,M,Ce)}let zt=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==jt.state.version||Et.outputColorSpace!==v||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==V||W.fog===!0&&Et.fog!==mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==H||Et.vertexTangents!==T||Et.morphTargets!==$||Et.morphNormals!==yt||Et.morphColors!==Ft||Et.toneMapping!==Gt||Et.morphTargetsCount!==Qt)&&(zt=!0):(zt=!0,Et.__version=W.version);let oe=Et.currentProgram;zt===!0&&(oe=ci(W,U,F));let Te=!1,pe=!1,je=!1,ie=oe.getUniforms(),Ue=Et.uniforms;if(Mt.useProgram(oe.program)&&(Te=!0,pe=!0,je=!0),W.id!==b&&(b=W.id,pe=!0),Te||_!==M){Mt.buffers.depth.getReversed()?(ut.copy(M.projectionMatrix),Ph(ut),Ih(ut),ie.setValue(w,"projectionMatrix",ut)):ie.setValue(w,"projectionMatrix",M.projectionMatrix),ie.setValue(w,"viewMatrix",M.matrixWorldInverse);let $e=ie.map.cameraPosition;$e!==void 0&&$e.setValue(w,Ht.setFromMatrixPosition(M.matrixWorld)),xt.logarithmicDepthBuffer&&ie.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ie.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,pe=!0,je=!0)}if(F.isSkinnedMesh){ie.setOptional(w,F,"bindMatrix"),ie.setOptional(w,F,"bindMatrixInverse");let Ce=F.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ie.setValue(w,"boneTexture",Ce.boneTexture,A))}F.isBatchedMesh&&(ie.setOptional(w,F,"batchingTexture"),ie.setValue(w,"batchingTexture",F._matricesTexture,A),ie.setOptional(w,F,"batchingIdTexture"),ie.setValue(w,"batchingIdTexture",F._indirectTexture,A),ie.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&ie.setValue(w,"batchingColorTexture",F._colorsTexture,A));let Fn=G.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Bt.update(F,G,oe),(pe||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ie.setValue(w,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ue.envMap.value=V,Ue.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Ue.envMapIntensity.value=U.environmentIntensity),pe&&(ie.setValue(w,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&qi(Ue,je),mt&&W.fog===!0&&nt.refreshFogUniforms(Ue,mt),nt.refreshMaterialUniforms(Ue,W,q,at,d.state.transmissionRenderTarget[M.id]),Ii.upload(w,hi(Et),Ue,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ii.upload(w,hi(Et),Ue,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ie.setValue(w,"center",F.center),ie.setValue(w,"modelViewMatrix",F.modelViewMatrix),ie.setValue(w,"normalMatrix",F.normalMatrix),ie.setValue(w,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ce=W.uniformsGroups;for(let $e=0,tn=Ce.length;$e<tn;$e++){let Xo=Ce[$e];I.update(Xo,oe),I.bind(Xo,oe)}}return oe}function qi(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Yi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,U,G){vt.get(M.texture).__webglTexture=U,vt.get(M.depthTexture).__webglTexture=G;let W=vt.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let G=vt.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,G=0){N=M,P=U,L=G;let W=!0,F=null,mt=!1,Ct=!1;if(M){let V=vt.get(M);if(V.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(V.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(V.__hasExternalTextures)A.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $=M.depthTexture;if(V.__boundDepthTexture!==$){if($!==null&&vt.has($)&&(M.width!==$.image.width||M.height!==$.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}let H=M.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(Ct=!0);let T=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(T[U])?F=T[U][G]:F=T[U],mt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?F=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(T)?F=T[G]:F=T,R.copy(M.viewport),Y.copy(M.scissor),O=M.scissorTest}else R.copy(K).multiplyScalar(q).floor(),Y.copy(kt).multiplyScalar(q).floor(),O=Vt;if(Mt.bindFramebuffer(w.FRAMEBUFFER,F)&&W&&Mt.drawBuffers(M,F),Mt.viewport(R),Mt.scissor(Y),Mt.setScissorTest(O),mt){let V=vt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,V.__webglTexture,G)}else if(Ct){let V=vt.get(M.texture),H=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,V.__webglTexture,G||0,H)}b=-1},this.readRenderTargetPixels=function(M,U,G,W,F,mt,Ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ct!==void 0&&(v=v[Ct]),v){Mt.bindFramebuffer(w.FRAMEBUFFER,v);try{let V=M.texture,H=V.format,T=V.type;if(!xt.textureFormatReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(T)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&G>=0&&G<=M.height-F&&w.readPixels(U,G,W,F,Nt.convert(H),Nt.convert(T),mt)}finally{let V=N!==null?vt.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,W,F,mt,Ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ct!==void 0&&(v=v[Ct]),v){let V=M.texture,H=V.format,T=V.type;if(!xt.textureFormatReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(T))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-W&&G>=0&&G<=M.height-F){Mt.bindFramebuffer(w.FRAMEBUFFER,v);let $=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,$),w.bufferData(w.PIXEL_PACK_BUFFER,mt.byteLength,w.STREAM_READ),w.readPixels(U,G,W,F,Nt.convert(H),Nt.convert(T),0);let yt=N!==null?vt.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(w.FRAMEBUFFER,yt);let Ft=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Rh(w,Ft,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,$),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,mt),w.deleteBuffer($),w.deleteSync(Ft),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,G=0){M.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(M.image.width*W),mt=Math.floor(M.image.height*W),Ct=U!==null?U.x:0,v=U!==null?U.y:0;A.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,Ct,v,F,mt),Mt.unbindTexture()},this.copyTextureToTexture=function(M,U,G=null,W=null,F=0){M.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let mt,Ct,v,V,H,T,$,yt,Ft,Gt=M.isCompressedTexture?M.mipmaps[F]:M.image;G!==null?(mt=G.max.x-G.min.x,Ct=G.max.y-G.min.y,v=G.isBox3?G.max.z-G.min.z:1,V=G.min.x,H=G.min.y,T=G.isBox3?G.min.z:0):(mt=Gt.width,Ct=Gt.height,v=Gt.depth||1,V=0,H=0,T=0),W!==null?($=W.x,yt=W.y,Ft=W.z):($=0,yt=0,Ft=0);let ee=Nt.convert(U.format),Qt=Nt.convert(U.type),Et;U.isData3DTexture?(A.setTexture3D(U,0),Et=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Et=w.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Et=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);let jt=w.getParameter(w.UNPACK_ROW_LENGTH),zt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),oe=w.getParameter(w.UNPACK_SKIP_PIXELS),Te=w.getParameter(w.UNPACK_SKIP_ROWS),pe=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Gt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Gt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,V),w.pixelStorei(w.UNPACK_SKIP_ROWS,H),w.pixelStorei(w.UNPACK_SKIP_IMAGES,T);let je=M.isDataArrayTexture||M.isData3DTexture,ie=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Ue=vt.get(M),Fn=vt.get(U),Ce=vt.get(Ue.__renderTarget),$e=vt.get(Fn.__renderTarget);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,Ce.__webglFramebuffer),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let tn=0;tn<v;tn++)je&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,F,T+tn),M.isDepthTexture?(ie&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,F,Ft+tn),w.blitFramebuffer(V,H,mt,Ct,$,yt,mt,Ct,w.DEPTH_BUFFER_BIT,w.NEAREST)):ie?w.copyTexSubImage3D(Et,F,$,yt,Ft+tn,V,H,mt,Ct):w.copyTexSubImage2D(Et,F,$,yt,Ft+tn,V,H,mt,Ct);Mt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ie?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Et,F,$,yt,Ft,mt,Ct,v,ee,Qt,Gt.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Et,F,$,yt,Ft,mt,Ct,v,ee,Gt.data):w.texSubImage3D(Et,F,$,yt,Ft,mt,Ct,v,ee,Qt,Gt):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,F,$,yt,mt,Ct,ee,Qt,Gt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,F,$,yt,Gt.width,Gt.height,ee,Gt.data):w.texSubImage2D(w.TEXTURE_2D,F,$,yt,mt,Ct,ee,Qt,Gt);w.pixelStorei(w.UNPACK_ROW_LENGTH,jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,zt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,oe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,pe),F===0&&U.generateMipmaps&&w.generateMipmap(Et),Mt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,G=null,W=null,F=0){return M.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,G,W,F)},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){P=0,L=0,N=null,Mt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var $n=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ti=class extends Le{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new he;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(_e(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},us=class extends ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*f+this.aX,c=u*f+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},uo=class extends us{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vo(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,m*=h,s(o,a,u,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ws=new D,ia=new Vo,sa=new Vo,ra=new Vo,fo=class extends ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ws.subVectors(s[0],s[1]).add(s[0]),c=Ws);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ws.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ia.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,p),sa.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,p),ra.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),sa.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ra.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ql(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function wm(i,t){let e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Cm(i,t){return i*i*t}function ss(i,t,e,n){return wm(i,t)+Tm(i,e)+Cm(i,n)}function Rm(i,t){let e=1-i;return e*e*e*t}function Pm(i,t){let e=1-i;return 3*e*e*i*t}function Im(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function rs(i,t,e,n,s){return Rm(i,t)+Pm(i,e)+Im(i,n)+Lm(i,s)}var fr=class extends ze{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends ze{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y),rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dr=class extends ze{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends ze{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends ze{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends ze{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y),ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(ql(a,l.x,c.x,h.x,f.x),ql(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},xo=Object.freeze({__proto__:null,ArcCurve:uo,CatmullRomCurve3:fo,CubicBezierCurve:fr,CubicBezierCurve3:po,EllipseCurve:us,LineCurve:dr,LineCurve3:mo,QuadraticBezierCurve:pr,QuadraticBezierCurve3:go,SplineCurve:mr}),vo=class extends ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xo[s.type]().fromJSON(s))}return this}},gr=class extends vo{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new dr(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pr(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fr(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new us(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var xr=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let m=n+f/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Oi=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],g=0,y=[],p=n/2,d=0;C(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(m,2));function C(){let S=new D,z=new D,P=0,L=(e-t)/n;for(let N=0;N<=r;N++){let b=[],_=N/r,R=_*(e-t)+t;for(let Y=0;Y<=s;Y++){let O=Y/s,X=O*l+a,tt=Math.sin(X),Z=Math.cos(X);z.x=R*tt,z.y=-_*n+p,z.z=R*Z,f.push(z.x,z.y,z.z),S.set(tt,L,Z).normalize(),u.push(S.x,S.y,S.z),m.push(O,1-_),b.push(g++)}y.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){let _=y[b][N],R=y[b+1][N],Y=y[b+1][N+1],O=y[b][N+1];(t>0||b!==0)&&(h.push(_,R,O),P+=3),(e>0||b!==r-1)&&(h.push(R,Y,O),P+=3)}c.addGroup(d,P,0),d+=P}function E(S){let z=g,P=new At,L=new D,N=0,b=S===!0?t:e,_=S===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,p*_,0),u.push(0,_,0),m.push(.5,.5),g++;let R=g;for(let Y=0;Y<=s;Y++){let X=Y/s*l+a,tt=Math.cos(X),Z=Math.sin(X);L.x=b*Z,L.y=p*_,L.z=b*tt,f.push(L.x,L.y,L.z),u.push(0,_,0),P.x=tt*.5+.5,P.y=Z*.5*_+.5,m.push(P.x,P.y),g++}for(let Y=0;Y<s;Y++){let O=z+Y,X=R+Y;S===!0?h.push(X,X+1,O):h.push(X+1,X,O),N+=3}c.addGroup(d,N,S===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zi=class extends gr{constructor(t){super(t),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new gr().fromJSON(s))}return this}},Dm={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Sc(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,m;if(n&&(r=Om(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return fs(r,o,e,a,l,m,0),o}};function Sc(i,t,e,n,s){let r,o;if(s===Jm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yl(r,i[r],i[r+1],o);return o&&Cr(o,o.next)&&(ps(o),o=o.next),o}function ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||ce(e.prev,e,e.next)===0)){if(ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Gm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Nm(i,n,s,r):Um(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ps(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Fm(ei(i),t,e),fs(i,t,e,n,s,r,2)):o===2&&Bm(i,t,e,n,s,r):fs(ei(i),t,e,n,s,r,1);break}}}function Um(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&Ti(s,a,r,l,o,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,y=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,d=yo(m,g,t,e,n),C=yo(y,p,t,e,n),E=i.prevZ,S=i.nextZ;for(;E&&E.z>=d&&S&&S.z<=C;){if(E.x>=m&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ti(a,h,l,f,c,u,E.x,E.y)&&ce(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Ti(a,h,l,f,c,u,S.x,S.y)&&ce(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=d;){if(E.x>=m&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Ti(a,h,l,f,c,u,E.x,E.y)&&ce(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=C;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Ti(a,h,l,f,c,u,S.x,S.y)&&ce(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fm(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Cr(s,r)&&bc(s,n,n.next,r)&&ds(s,r)&&ds(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ps(n),ps(n.next),n=i=r),n=n.next}while(n!==i);return ei(n)}function Bm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qm(o,a)){let l=Ac(o,a);o=ei(o,o.next),l=ei(l,l.next),fs(o,t,e,n,s,r,0),fs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Om(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Sc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Xm(c));for(s.sort(zm),r=0;r<s.length;r++)e=km(s[r],e);return e}function zm(i,t){return i.x-t.x}function km(i,t){let e=Vm(i,t);if(!e)return t;let n=Ac(e,i);return ei(n,n.next),ei(e,e.next)}function Vm(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ti(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(r-e.x),ds(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Hm(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Hm(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Gm(i,t,e,n){let s=i;do s.z===0&&(s.z=yo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function yo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ti(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ym(i,t)&&(ds(i,t)&&ds(t,i)&&Zm(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||Cr(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cr(i,t){return i.x===t.x&&i.y===t.y}function bc(i,t,e,n){let s=qs(ce(i,t,e)),r=qs(ce(i,t,n)),o=qs(ce(e,n,i)),a=qs(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Xs(i,e,t)||r===0&&Xs(i,n,t)||o===0&&Xs(e,i,n)||a===0&&Xs(e,t,n))}function Xs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qs(i){return i>0?1:i<0?-1:0}function Ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ds(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function Zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ac(i,t){let e=new _o(i.i,i.x,i.y),n=new _o(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yl(i,t,e,n){let s=new _o(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _o(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var In=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zl(t),Jl(n,t);let o=t.length;e.forEach(Zl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Jl(n,e[l]);let a=Dm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var vr=class i extends Je{constructor(t=new zi([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,C=e.UVGenerator!==void 0?e.UVGenerator:Km,E,S=!1,z,P,L,N;d&&(E=d.getSpacedPoints(h),S=!0,u=!1,z=d.computeFrenetFrames(h,!1),P=new D,L=new D,N=new D),u||(p=0,m=0,g=0,y=0);let b=a.extractPoints(c),_=b.shape,R=b.holes;if(!In.isClockWise(_)){_=_.reverse();for(let et=0,ft=R.length;et<ft;et++){let w=R[et];In.isClockWise(w)&&(R[et]=w.reverse())}}let O=In.triangulateShape(_,R),X=_;for(let et=0,ft=R.length;et<ft;et++){let w=R[et];_=_.concat(w)}function tt(et,ft,w){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ft,w)}let Z=_.length,at=O.length;function q(et,ft,w){let Rt,ct,xt,Mt=et.x-ft.x,It=et.y-ft.y,vt=w.x-et.x,A=w.y-et.y,x=Mt*Mt+It*It,k=Mt*A-It*vt;if(Math.abs(k)>Number.EPSILON){let J=Math.sqrt(x),ot=Math.sqrt(vt*vt+A*A),Q=ft.x-It/J,rt=ft.y+Mt/J,nt=w.x-A/ot,lt=w.y+vt/ot,Dt=((nt-Q)*A-(lt-rt)*vt)/(Mt*A-It*vt);Rt=Q+Mt*Dt-et.x,ct=rt+It*Dt-et.y;let it=Rt*Rt+ct*ct;if(it<=2)return new At(Rt,ct);xt=Math.sqrt(it/2)}else{let J=!1;Mt>Number.EPSILON?vt>Number.EPSILON&&(J=!0):Mt<-Number.EPSILON?vt<-Number.EPSILON&&(J=!0):Math.sign(It)===Math.sign(A)&&(J=!0),J?(Rt=-It,ct=Mt,xt=Math.sqrt(x)):(Rt=Mt,ct=It,xt=Math.sqrt(x/2))}return new At(Rt/xt,ct/xt)}let gt=[];for(let et=0,ft=X.length,w=ft-1,Rt=et+1;et<ft;et++,w++,Rt++)w===ft&&(w=0),Rt===ft&&(Rt=0),gt[et]=q(X[et],X[w],X[Rt]);let _t=[],K,kt=gt.concat();for(let et=0,ft=R.length;et<ft;et++){let w=R[et];K=[];for(let Rt=0,ct=w.length,xt=ct-1,Mt=Rt+1;Rt<ct;Rt++,xt++,Mt++)xt===ct&&(xt=0),Mt===ct&&(Mt=0),K[Rt]=q(w[Rt],w[xt],w[Mt]);_t.push(K),kt=kt.concat(K)}for(let et=0;et<p;et++){let ft=et/p,w=m*Math.cos(ft*Math.PI/2),Rt=g*Math.sin(ft*Math.PI/2)+y;for(let ct=0,xt=X.length;ct<xt;ct++){let Mt=tt(X[ct],gt[ct],Rt);ut(Mt.x,Mt.y,-w)}for(let ct=0,xt=R.length;ct<xt;ct++){let Mt=R[ct];K=_t[ct];for(let It=0,vt=Mt.length;It<vt;It++){let A=tt(Mt[It],K[It],Rt);ut(A.x,A.y,-w)}}}let Vt=g+y;for(let et=0;et<Z;et++){let ft=u?tt(_[et],kt[et],Vt):_[et];S?(L.copy(z.normals[0]).multiplyScalar(ft.x),P.copy(z.binormals[0]).multiplyScalar(ft.y),N.copy(E[0]).add(L).add(P),ut(N.x,N.y,N.z)):ut(ft.x,ft.y,0)}for(let et=1;et<=h;et++)for(let ft=0;ft<Z;ft++){let w=u?tt(_[ft],kt[ft],Vt):_[ft];S?(L.copy(z.normals[et]).multiplyScalar(w.x),P.copy(z.binormals[et]).multiplyScalar(w.y),N.copy(E[et]).add(L).add(P),ut(N.x,N.y,N.z)):ut(w.x,w.y,f/h*et)}for(let et=p-1;et>=0;et--){let ft=et/p,w=m*Math.cos(ft*Math.PI/2),Rt=g*Math.sin(ft*Math.PI/2)+y;for(let ct=0,xt=X.length;ct<xt;ct++){let Mt=tt(X[ct],gt[ct],Rt);ut(Mt.x,Mt.y,f+w)}for(let ct=0,xt=R.length;ct<xt;ct++){let Mt=R[ct];K=_t[ct];for(let It=0,vt=Mt.length;It<vt;It++){let A=tt(Mt[It],K[It],Rt);S?ut(A.x,A.y+E[h-1].y,E[h-1].x+w):ut(A.x,A.y,f+w)}}}j(),ht();function j(){let et=s.length/3;if(u){let ft=0,w=Z*ft;for(let Rt=0;Rt<at;Rt++){let ct=O[Rt];Ut(ct[2]+w,ct[1]+w,ct[0]+w)}ft=h+p*2,w=Z*ft;for(let Rt=0;Rt<at;Rt++){let ct=O[Rt];Ut(ct[0]+w,ct[1]+w,ct[2]+w)}}else{for(let ft=0;ft<at;ft++){let w=O[ft];Ut(w[2],w[1],w[0])}for(let ft=0;ft<at;ft++){let w=O[ft];Ut(w[0]+Z*h,w[1]+Z*h,w[2]+Z*h)}}n.addGroup(et,s.length/3-et,0)}function ht(){let et=s.length/3,ft=0;Lt(X,ft),ft+=X.length;for(let w=0,Rt=R.length;w<Rt;w++){let ct=R[w];Lt(ct,ft),ft+=ct.length}n.addGroup(et,s.length/3-et,1)}function Lt(et,ft){let w=et.length;for(;--w>=0;){let Rt=w,ct=w-1;ct<0&&(ct=et.length-1);for(let xt=0,Mt=h+p*2;xt<Mt;xt++){let It=Z*xt,vt=Z*(xt+1),A=ft+Rt+It,x=ft+ct+It,k=ft+ct+vt,J=ft+Rt+vt;Ht(A,x,k,J)}}}function ut(et,ft,w){l.push(et),l.push(ft),l.push(w)}function Ut(et,ft,w){Ot(et),Ot(ft),Ot(w);let Rt=s.length/3,ct=C.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);qt(ct[0]),qt(ct[1]),qt(ct[2])}function Ht(et,ft,w,Rt){Ot(et),Ot(ft),Ot(Rt),Ot(ft),Ot(w),Ot(Rt);let ct=s.length/3,xt=C.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);qt(xt[0]),qt(xt[1]),qt(xt[3]),qt(xt[1]),qt(xt[2]),qt(xt[3])}function Ot(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function qt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xo[s.type]().fromJSON(s)),new i(n,t.options)}},Km={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new At(r,o),new At(a,l),new At(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new At(o,1-l),new At(c,1-f),new At(u,1-g),new At(y,1-d)]:[new At(a,1-l),new At(h,1-f),new At(m,1-g),new At(p,1-d)]}};function Qm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yr=class i extends Je{constructor(t=new zi([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(o,2));function c(h){let f=s.length/3,u=h.extractPoints(e),m=u.shape,g=u.holes;In.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){let C=g[p];In.isClockWise(C)===!0&&(g[p]=C.reverse())}let y=In.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){let C=g[p];m=m.concat(C)}for(let p=0,d=m.length;p<d;p++){let C=m[p];s.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let p=0,d=y.length;p<d;p++){let C=y[p],E=C[0]+f,S=C[1]+f,z=C[2]+f;n.push(E,S,z),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return jm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function jm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ke=class extends Qn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nn=class extends ke{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ys(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $m(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mo=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jo,endingEnd:Jo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ko:r=t,a=2*e-n;break;case Qo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:o=t,l=2*n-e;break;case Qo:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,d=-u*p+2*u*y-u*g,C=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-m)*p+(1.5+m)*y+.5*g,S=m*p-m*y;for(let z=0;z!==a;++z)r[z]=d*o[h+z]+C*o[c+z]+E*o[l+z]+S*o[f+z];return r}},So=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},bo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Pr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Pr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&$m(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Ya;var ni=class extends Ke{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=tr;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Ke{};Ao.prototype.ValueTypeName="color";var Eo=class extends Ke{};Eo.prototype.ValueTypeName="number";var wo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends Ke{InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Ke{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=tr;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends Ke{};To.prototype.ValueTypeName="vector";var Co=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},tg=new Co,Ro=class{constructor(t){this.manager=t!==void 0?t:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var aa=new he,Kl=new D,Ql=new D,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var jl=new he,ji=new D,oa=new D,Po=class extends Mr{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(ji),oa.copy(n.position),oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-ji.x,-ji.y,-ji.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl)}},Sr=class extends ms{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Po}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Io=class extends Mr{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Io}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},br=class extends ms{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ho="\\[\\]\\.:\\/",eg=new RegExp("["+Ho+"]","g"),Go="[^"+Ho+"]",ng="[^"+Ho.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",Go),sg=/(WCOD+)?/.source.replace("WCOD",ng),rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Go),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Go),og=new RegExp("^"+ig+sg+rg+ag+"$"),lg=["material","materials","bones","map"],Lo=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(t){let e=og.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Lo;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var vs=new D;function Ve(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;vs.copy(t),vs[n]=0,vs.normalize();let c=.5*o/(o+a),h=1-vs.angleTo(i)/l;return Math.sign(vs[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ai=class extends yn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=h.length/6,g=new D,y=.5/s;for(let p=0,d=0;p<h.length;p+=3,d+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),u[d+0]=Ve(g,l,"z","y",r,n),u[d+1]=1-Ve(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[d+0]=1-Ve(g,l,"z","y",r,n),u[d+1]=1-Ve(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[d+0]=1-Ve(g,l,"x","z",r,t),u[d+1]=Ve(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[d+0]=1-Ve(g,l,"x","z",r,t),u[d+1]=1-Ve(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[d+0]=1-Ve(g,l,"x","y",r,t),u[d+1]=1-Ve(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[d+0]=Ve(g,l,"x","y",r,t),u[d+1]=1-Ve(g,l,"y","x",r,e);break}}};var ys=class extends $n{constructor(){super();let t=new yn;t.deleteAttribute("uv");let e=new ke({side:Ae}),n=new ke,s=new Sr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Xt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Xt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Xt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Xt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Xt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Xt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let u=new Xt(t,Gi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let m=new Xt(t,Gi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let g=new Xt(t,Gi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new Xt(t,Gi(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let p=new Xt(t,Gi(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let d=new Xt(t,Gi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gi(i){let t=new Ze;return t.color.setScalar(i),t}await document.fonts.load("800 16px Manrope");var Wo=document.getElementById("inicio"),Qe=document.getElementById("ph3d"),hg=matchMedia("(prefers-reduced-motion: reduce)").matches,Ec=()=>Wo.classList.add("no3d");try{if(hg)throw 0;ug()}catch(i){i!==0&&Ec()}function ug(){let r=1.5699999999999998,o=.094,a=600,l=Math.round(a*r/.716),c=m()?400:480,h=c/a,f=Math.round(l*h),u="#F4510B";function m(){return(navigator.hardwareConcurrency||8)<=4||matchMedia("(max-width:700px)").matches}let g=(navigator.hardwareConcurrency||8)<=4||matchMedia("(max-width:700px)").matches,y=Math.min(devicePixelRatio||1,g?1.1:1.5),p=new hs({canvas:Qe,alpha:!0,antialias:y<1.5,powerPreference:g?"default":"high-performance"});p.setPixelRatio(y),p.outputColorSpace=ye,p.toneMapping=Ar,p.toneMappingExposure=1.05;let d=new $n,C=new jn(p),E=new ys;d.environment=C.fromScene(E,.04).texture,E.dispose(),C.dispose();let S=new si(16777215,1.6);S.position.set(2,3,4),d.add(S);let z=new si(16747088,1.2);z.position.set(-3,1,-2),d.add(z);let P=new Me(30,1,.02,50),L=Math.tan(xs.degToRad(15));function N(v,V,H){let T=new zi,$=-v/2,yt=-V/2;return T.moveTo($+H,yt),T.lineTo($+v-H,yt),T.quadraticCurveTo($+v,yt,$+v,yt+H),T.lineTo($+v,yt+V-H),T.quadraticCurveTo($+v,yt+V,$+v-H,yt+V),T.lineTo($+H,yt+V),T.quadraticCurveTo($,yt+V,$,yt+V-H),T.lineTo($,yt+H),T.quadraticCurveTo($,yt,$+H,yt),T}function b(v,V,H,T=20){let $=new yr(N(v,V,H),T),yt=$.attributes.position,Ft=$.attributes.uv;for(let Gt=0;Gt<yt.count;Gt++)Ft.setXY(Gt,(yt.getX(Gt)+v/2)/v,(yt.getY(Gt)+V/2)/V);return $}function _(v,V,H,T,$){let yt=new vr(N(v-2*$,V-2*$,Math.max(.01,H-$)),{depth:Math.max(5e-4,T-2*$),bevelEnabled:!0,bevelThickness:$,bevelSize:$,bevelSegments:4,curveSegments:20});return yt.translate(0,0,-(T-2*$)/2),yt.computeVertexNormals(),yt}let R=new Nn({color:14706218,metalness:.62,roughness:.34,clearcoat:.25,clearcoatRoughness:.4}),Y=new Nn({color:12144669,metalness:.7,roughness:.3}),O=new Nn({color:15170114,metalness:.15,roughness:.55,clearcoat:.6,clearcoatRoughness:.5}),X=new Nn({color:328965,metalness:.1,roughness:.08,clearcoat:1,clearcoatRoughness:.05}),tt=new Nn({color:658708,metalness:.3,roughness:.05,clearcoat:1,clearcoatRoughness:.02}),Z=new ke({color:1779008,metalness:.6,roughness:.15}),at=new Be,q=new Be;q.add(at),d.add(q),at.add(new Xt(_(.78,1.634,.125,.0875,.026),R));let gt=new Xt(b(.78-.044,1.634-.044,.125-.022,24),X);gt.position.z=.0875/2+6e-4,at.add(gt);let _t=document.createElement("canvas");_t.width=c,_t.height=f;let K=_t.getContext("2d");K.setTransform(h,0,0,h,0,0);let kt=new ti(_t);kt.colorSpace=ye,kt.anisotropy=4,kt.generateMipmaps=!1,kt.minFilter=Fe;let Vt=new Ze({map:kt,toneMapped:!1}),j=new Xt(b(.716,r,o,24),Vt);j.position.z=.0875/2+.0012,at.add(j);let ht=new Xt(b(.78-.05,1.634-.05,.125-.025,24),O);ht.rotation.y=Math.PI,ht.position.z=-.0875/2-6e-4,at.add(ht);let Lt=.4,ut=1.634/2-.026-Lt/2,Ut=new Xt(_(.78-.034,Lt,.11,.03,.012),R);Ut.position.set(0,ut,-.0875/2-.006),at.add(Ut);let Ht=-.0875/2-.021;function Ot(v,V){let H=new Be,T=new Xt(new Oi(.078,.08,.022,48),Y);T.rotation.x=Math.PI/2,H.add(T);let $=new Xt(new Oi(.064,.064,.024,48),tt);$.rotation.x=Math.PI/2,H.add($);let yt=new Xt(new xr(.03,32),Z);yt.rotation.y=Math.PI,yt.position.z=-.0125,H.add(yt),H.position.set(v,V,Ht-.01),at.add(H)}Ot(.235,ut+.09),Ot(.235,ut-.09),Ot(.085,ut);let qt=(v,V,H,T)=>{let $=new Xt(new Oi(H,H,.006,32),T);$.rotation.x=Math.PI/2,$.position.set(v,V,Ht-.002),at.add($)};qt(-.04,ut+.09,.03,new ke({color:15985368,roughness:.3,emissive:2234896})),qt(-.04,ut-.09,.026,tt),qt(-.13,ut+.09,.009,tt);let et=(v,V,H)=>{let T=new Xt(new ai(.012,H,.04,3,.005),R);T.position.set(v,V,0),at.add(T)};et(-.78/2-.002,1.634/2-.3,.07),et(-.78/2-.002,1.634/2-.43,.12),et(-.78/2-.002,1.634/2-.58,.12),et(.78/2+.002,1.634/2-.46,.2);let ft=new Xt(new ai(.01,.15,.036,3,.004),X);ft.position.set(.78/2+.002,-.2,0),at.add(ft);let w=()=>{let v=document.createElement("canvas");v.width=c,v.height=f;let V=v.getContext("2d");return V.setTransform(h,0,0,h,0,0),[v,V]},Rt=()=>new Date,ct=v=>v.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),xt=v=>{let V=v.toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"});return V.charAt(0).toUpperCase()+V.slice(1)},Mt=v=>v.toLocaleDateString("pt-BR",{weekday:"short"}).replace(".","").slice(0,3).toUpperCase(),It='"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',vt=(v,V,H,T,$,yt)=>{v.beginPath(),v.roundRect?v.roundRect(V,H,T,$,yt):v.rect(V,H,T,$)};function A(v){v.fillStyle="#0d0d0d",v.fillRect(0,0,a,l);let V=v.createRadialGradient(a*.2,l*.78,10,a*.2,l*.78,a*1.1);V.addColorStop(0,"#F4510B"),V.addColorStop(.45,"rgba(160,45,5,.65)"),V.addColorStop(1,"rgba(13,13,13,0)"),v.fillStyle=V,v.fillRect(0,0,a,l),V=v.createRadialGradient(a*.95,l*.2,10,a*.95,l*.2,a*.8),V.addColorStop(0,"rgba(255,140,70,.55)"),V.addColorStop(1,"rgba(13,13,13,0)"),v.fillStyle=V,v.fillRect(0,0,a,l)}function x(v,V=!1){v.fillStyle=V?"#111":"#fff",v.font=`600 30px ${It}`,v.textBaseline="middle",v.textAlign="left",v.fillText(ct(Rt()),64,62);for(let H=0;H<4;H++)v.fillRect(a-190+H*11,70-H*6,7,8+H*6);v.beginPath(),v.arc(a-128,74,18,-Math.PI*.78,-Math.PI*.22),v.lineTo(a-128,74),v.fill(),v.lineWidth=2.5,v.strokeStyle=v.fillStyle,vt(v,a-98,52,46,22,7),v.stroke(),vt(v,a-94,56,34,14,4),v.fill()}function k(v){v.fillStyle="#000",vt(v,a/2-92,26,184,56,28),v.fill()}function J(v,V=!1){v.fillStyle=V?"rgba(0,0,0,.75)":"rgba(255,255,255,.85)",vt(v,a/2-100,l-30,200,9,5),v.fill()}let ot=[["Telefone","#34C759"],["Mensagens","#30D158"],["C\xE2mera","#3a3a3c"],["Fotos","#ffffff"],["Chrome","#ffffff"],["Mapas","#5AC8FA"],["Clima","#0A84FF"],["Rel\xF3gio","#1c1c1e"],["Notas","#FFD60A"],["M\xFAsica","#FF375F"],["Ajustes","#8e8e93"],["Calend\xE1rio","#ffffff"]],Q={Telefone:["#4BE08A","#169A4F"],Mensagens:["#5CE38F","#1B9E5A"],C\u00E2mera:["#6B6F78","#2B2D33"],Fotos:["#FFB36B","#F4510B"],Chrome:["#6FB7FF","#1F5FD6"],Mapas:["#8EE3C8","#2C9F8A"],Clima:["#63B3FF","#1D4FBF"],Rel\u00F3gio:["#2E2F34","#0E0E10"],Notas:["#FFE27A","#F2B705"],M\u00FAsica:["#FF7A8E","#E0244A"],Ajustes:["#B4B7BF","#6C7079"],Calend\u00E1rio:["#FFFFFF","#ECECEF"]},rt={Telefone:"data:image/webp;base64,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",Mensagens:"data:image/webp;base64,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",C\u00E2mera:"data:image/webp;base64,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",Fotos:"data:image/webp;base64,UklGRkQMAABXRUJQVlA4IDgMAADQOQCdASq0ALQAPj0ajESiIaETOE1AIAPEpu4XKQ8FHf7DriKkd6/Kb2vay/a/wB+WPyN/uXdP1F51vKv+t/uf5b/BL1K/p7/Ae4J+l3+5/sPWz8wH7G/tl7wH+t9XH91/Y73AP7R/gP/r2GfoJfuB6ZH7ofCH/Wf9x+1HwK/sr/7PYA31DsB25f5nIlQG/tzoN7H9rvd+Mw+gNNliXfBhj39GbP+9b+wl0yip03xn4oUeRzcBa8tfJLL+tWQNJvi3rqm+HK3f9Ps9GxFnJnDJET6rJFJ/1eQb79eDL9QjO0IvTb1732O7KYjT/SpC+wLsMM78DUoHI0/+JkBE2UDmSejOhHAZV5VtiKmLznUSbtsNNu6OVzftw/RkRj/PfNzayd5uPwjfOcP//dxy9Rap/BSue+BlsppTdZVdJfCmC7wqfP6A/Cn5sZHwJYhy/kVDPYQNZhXuNHWF1//tIV4VR/MXcXfT2w3ya0x/LVqxH+KEMOWAHbgYPLyHuC38MPijeJLOB5iVxBFxvPa2PKhHsm+I6JQjX/v+8vwBRWsoZ/hlLLtTn6oXrSr1tHqKfyA6EwiKMYDCfLFUFvqSPn5MGi1YHFdwiFBs5dSWg0/Oqb4z8UKPHoAA/v+8CABI8vL8p5z0uotpOvOWAKgF+Fehf86/7kPoYHHfjtxZoMc5jrOxo+ilIda7ogUCMAvZEWIIbLNwrUmGA5XcgkmlaCljtYLkP+izzMrmz/92s5oDK8POuS/4tl9k9tv9NVi1SQEcEpBjWMzizotjlm097IGWL6/aM1VOQ78gvRXt39P92HqrtJ2/sdbq//0gbQkbAMCalGyN58bLQAD80JtI/GgySWYw3p0SfwtCqCNKnCu/SgafWRs6a9mhALnS7nfc6Ip4zzbEjc7oc3pRfy79+U3WfwWCAH+dB5FMiH4S1XJHm+zDq/5jKcb7OkzD2YseDaVnAkE1MTvanT31fTJdkYzwUubTmx7Z+QhGUh5K942RtZBUhKS3T+RDgnDUaBlnTR6wa+n1wlfbUz37AiSCQ9RSv/jV/qrvkNFYLS7wSILjZRMrNY6AAuuQPTZUj1OrwV3TkARH58mmmgYEb/jIAr1UBLis1zyJsz0Q/kOqRf6OvqWHhhzjiHVRWpYoq8SDcG1rvZsuC8JqjgRNXE02pGIocshI/NiLbQeuF91UGcUrn8mRSSx8d6i8sOfNfTCX/n+N6K/kF2vNiOgK199uZXWJp+uqkG02FGV6IcnOSJVPk6vEa66xUe2BqTXNmfy8p4/7yY7PyLRTRMdcpvvzvNutB+2zP6NlrJSjRxD1Y4lX5AQSTiUziAkH8OpIm5pwPfbGH4enWGaaFoQ1hux5VT9XKa+z8HWtWVXIlwcI7ics6ovf2amWuFbm/TYiYFCFSN3IiSfCAPfAp6NgqTzpmw+4E5ysdMN06jD3XkxlpUv9+7hQChTbLT8ifeTZuxE26MJRhftoAs4BQjd2f5sBjuCSx3fAmAmUGb87dA18XTcvOIoc4bHzRGB+gP4tM0E68TuTInPRtgKC5FgXJn3yfoa8ZkgzmG/pDzwNMCCxbjL7ryP/j8I6O3NHmgWfzV81Ix1lFpfCn24RZDbFApii86bGtg0/SfajRIvmc/wYv730fWDsut6XER0Z31GlX+yYIt6PO3RA1W4zbwvZe8JgFjN2rkLn0aUUnqhAn9zOsC4MbYUEY8W/UD6dtnGxXH05wbBeqe2zS34sAh8vDK5uKyV1xub878w/3ksQFtBoLNtRq8BJ0fPN7BDQabmDkGB/6xB4ZDPYS9xv1B4r/eEwesWO2oMAUPNZ45zkeuv/hHi3ApzCMdwY0U5NgR4BXppW6lrPMQ2Q3XsWouLW49ojyLfch+N71+7xCdAbYH3TQn3NG6Fma/MiX6k+cK3GTn3NJK4/395FABMzwSEy+VPY0547b7zPV4g4mQ74R5rkI7Z1bQwPI25ETCyNp5l278/u3OeZYiohLpevqyrhYF4BwelPQhKD/g7a2Zbb6RmBhA51RDk9dZgaiCAtztweRHzclG5o1eBbXk13fjX7RWjxvrnl+90bwbcYxTB3vzt1opSDu71g0MvgKrFY2XrObtnKWs2PmGsoasSdSQR+MRBK5jr4LBa99UNd6wIMe+eA2VBtFqLjUiOO3CjC0r2lqnGkQv0vABBhdqZj/TV9yNPknL+37lW018VpVZQ2a56Ls00LPGkw2y8EeE+V4fLuy8jRBbJP8R47oUwo88otC6i4bPDeMyH7bXuz8XEQuAcBJToPYxQLxGxZDyQ73t/7kvxzbzgnlFdpgO7aApjBMjwCACWQpF4WGLFHdfqdizpHO+E51HhFer+/vqe/dnBC+buDpcTnFUgKa4ZZDQbhEL/rvhLSYAvHIr638YGJxwnCFZspFM69coNNmIP8rGWLFPuqqMxeW/Fs60G/8W477he9G4qN4Cl6Z6jYGQZ4Q5jvCBtRVEyoMEkPvSqXYd/a6ERtXsJ33QVEUf6zSB4qMSFtUvsC+gUJepY6MCQPNTWKyuEHbqLyKUSlNvK3jD9wytN9FrgB/0pt8jztTQzWw4Wh6NBzNs7s5+VIDY5/m5gR7vM2FWcqvrWw98ZujSu8SweySa63DvTdBC50Ob0sWFhXyovK4KkQ3KuYKL4RzVPxFFbFpE055tXavm3VVMM565bjEanmMnUv9A3dr2awXJ0a8v1JDECeaYIOgBr4oVkH1Qiy9sugWvj7elZyYzIaEeYGll7vFwtGzB3FPaZ+4blNWVz4yg8iif+9cYtYjyy376z+PpyIJ7ufDY03RSACMXN6N5jDDeMKJmY9ElaDQ/r4P7R/xJI8GobzxM/S2BL8IkHWvNZbSVxBxk4pzBU0XvJ5v4QP3CWI+z8cHssDdntbqpwBDH7TbQmtmx1V2Daz0B2EiL0rUJabMrpGTaZTPk+Nj2a2w/DEn+Uu9XO2tbcX4HbQvMvc5aBdIZUcHqM0inbcYddURtLRfJHvt5tUS8Yx4MUXUciqqOVWjQhIblXfI0AIBnFSSW9YqNpYiiPzsYfcAnIWmO8uHFi/rZc1AcrqDZwkKfAa3kOT3av/kmHMQJEFS6mn/dCMa8fAZ8ONuySpjWTzA4T3n3L9KER05DVZaQQm2w0bFycchX+GqqJ8q1P39WLLV0UdxsFu3mm5vxcthhKPUYFfrrT5RTH6br0i4quHLRhSeoqK3XgMnqKinFOb14/CfO1PBmlQlqNp6TEzzmdLqqqa+hTJSLbfkeBVIjB18OvNoAWjXEyqfE8EGrfixeElZvbHFycSv204sf/jebgBGMFHT39p/XrScss9pZxDaiGAtMJeCsFBYy702luHy7fK5XO/3OLqDqHLtokekXW39/uODyBDIeeJuCai42iB5PxiIsSBqgA33aHpvHd75zRhgKxLlRRePG5v1oiRrtqYnAB0SEX3Hzktk027TYkT8OjNN8Q432vPHjsRoGkl3GV7XdKLPuwsp14iJhcGthSk/Op/jwJZbBrmAppd48FAmpNdsQO6PFPZvNvMVFMNhVf4Zci+FLcUQm+8uGx4uGN+yWtrs8FiogLfMz3yg1Vso2JCEfGknjmZ5V0nM3k8NbRZA6EwxeNQ4O31fo7JzXqifZCaKC39znKVCWWV1f3J7T3seV6JP6L3SuzouGNyPj+UbAz/OiPqjhnVd22jtR7q57BNffyBfDVpGXdL1efLi6suRJqBPsfYEA4yLQ7affP+QMz4Id1bzTjlyC6KgXIbS/xdEdCp7KTPSwIwCiD/0gRH/vIolTBvSRimn6Pgau7BZORgW0T8BhF/F138BjO1WNPKPA9U8hbcRmhTwwuSRq/2NKmJa2ScBEZDX+qiuMgvzSTXjzywvQubUMwZGK5CEY/1Vhhj+Aa9nqBsoQa08rEKL79hpLV23BGsymGMCmWr4De0dxm7+rt73rgwjUnquFD+9d2JCFX2BDNY/eXBky0z/IyjheRsEMnUeGQUmuzQmKq2S9kE2wIxNyFxrCf/bswT4sSIQposJiL0Rw1mn7ONMAZFEbNRrIENYP7PFGt3/lma+n4EqMMiHWvKLJMi4upT4zv+fakNFbWDK3AAACqzDpyzIf8+7yVX2L5/QsCVMLRk+NBC3j1p1uJ9qIiGepeZyP3XzGsRHV0qy5U/UAAAAAAAAA==",Chrome:"data:image/webp;base64,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",Mapas:"data:image/webp;base64,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",Clima:"data:image/webp;base64,UklGRvgHAABXRUJQVlA4IOwHAADQLACdASq0ALQAPj0ejESiIaETmcQsIAPEpu3319z+0v7qJbr9f+SOir2q4cvMfi1+43+u7C3m3up+43+NxW78d/Zv25/ynaA8wD9Nv7b+rX+4/wHdN8wH86/sf6xe8P6IP1u9gD+e/2brHvQA/W70vv2q+DD9mf3F+A7+T/2r/f6ycGziOnWZFuVI0DfUYg8F6e9PenvT3mo5X+nCUhKQlIPkcoRztfzeB2oo/NfIF6Gzln//3X84T8tWpkM33pKhlVi691j7C/Flg7kujMCAWHrv7ww++8I1rqJs0Cuq3wV/BZf06pYNvU2ue8qm0v26NzygCwqRo0tMOEEi2RibwmoTYMcXbiJcOc/4OIedl5eP4dy4YOWiizI/v+O0385dvaHaWkb9tO1RjbAx2ZzrEjIAPumTxdu/w1IarB52WzF8kldWSugot+QDvGZ2Rhhane8nz2aa/iVlJkeL+a4NcGuDXBrexpq/a+F8L4OYAP7wV1s//+FMsMZtMqP+mjHn7MB/qQkN9BXTCm8zHEk+5HwewhNdPCjwYdOdUENiUpM3WEDDxkH4XHt5QMGK1ASX0QvOPsW12LQ1DFYGGTqBLWbLfpy+pbe0t2xXmXW50wx49+jyFJB2TCd/7Gjj9qNHpfx6UlIh7Pz0NFe8T9UG3ERhY5Vq37Kt8N6h7a7+cEkDESBgxs/J1d2iaZULSosQH+JRknCv/A7E6DGLIjX7XDtqvtVPDfunf6lkp8tUgJ1Vw34kFUIEHDGin9Q1lfhEhPgRRwmvBzT4r9g68IEbH3tocB9FpfXoKXauMYE7afHJ0g4VhsgNYIjlk82HsQLyN+SfzLYtZQowIvrVUOZ8ju9Tf3mFB3azFKwKLl5zHHEZalxfQ91V4RLk9/bNLFs/diBEPfLppsYK4gUnbFlGyEJrfbFbse7NgCFH2h6Ebf24rfR3zhCr30QlzLTTUtNrvHa2t75a/ByyAV4ktUu6yWwT7XSJB0E4KactiorDoqtRUfOOAnIs1xaRaJUpVJi9goxRrJkT595oiUAsGBhfNjO68ViHfWu8tOcFZQ9HtARAazNTewRj2Gwn1eQjgUPbG27nGZrFOZbobvHN99I9aEZotDrr0T78nfLh+fnmnAQr/475ZuM+4qRq0L4MOp33KeXj4cUfGMISg42DmuY1z4Fqml8s+TZ28T20YlE55NhlWDXmgmWwASQOHTU8A0UQIodaUJ5bPvMdfIo/i4wxyQXa7R0GC0r0CKvR9Pb6igY/OaMDnwpvNb8++MtuGbw78b7ppBkSf/VU9MK1KYFZvywfdgArkn3zm8D2k+SpJc1t+Zab2WI08jVuv1KbkUSFQEMB9eJf2ANk6/+t0njN8FzpmcR3f2biIoHpQQ8CDuloQJFThbHGdlP2opd546UeO2m18iVjDDIxbpMM8R+ZOZaJwtLzwAft5kn+FFrMS7KTa0LDS92joranxfHybqOxT4ig0xY5XqLqQxVyeB81vOpYj/mDTsjdQBDYzefTfyewhhwQpxb9Ygs32StxYqcgYGOevbi4QKWtGjEkrRYTfwolDzZGL/WFkr+/urKbygO3NBIuerUxWQuqBg+JP5iScL/TcSIh5jvbHmxD0NiwYdo7C5lUF4e9VVUdAXl/TZD+LRrCXJAjPcgLZHPPV/M/q6hTA1dl8Dhmp1Qb1ufGPJ9J9FRhoifbY8JHt0HCvf1Qt66rcTmn+HwjkROSpTJI4vKXzSKvlekFvQLx21FhsdZOm9NvbQ/qXJGjcR33xeAUA8NroMzrq3fHahXEERVMwdTLOYXLOAvZCFMXxh8tshV258cQAOl68ToE3q+LLTTLR7KkAaJMBh4QxGdVqweWPatBaGjLymcbyjfgDsBb0TIVbt5sN6a1TziPQVmVdVNhbvZzQ+XiYfr4LlXghgmdzH7PGbmGEkIzHgfu4ADuky2KO4NCByv/fzevvrLMfN1H/ETQGj5MygUbqlgKE26iwQ7/SEfLJ67wkSsrJ7rmWEzfv5b8fpggLtj0bqHVRtzkM2q1kef2ucpLf862mHot1ZkR2xQmIpBHUdjiHigfuIFKDHMrPjflJzfaLIHDVstMnOtNcW/t4MjOYAptRkJ+aT1tq271f5EgcfmZ1Wdn/46qiimlwXfLVA7hZI1yU8hpS7Rxl2U7upQvCn/rCme8TruYb0DzIecOGxtmBwkbE/lYj9q8zYQoFRP6m90ETg4p/Ti49AzXVEYHDvldHNYoa4aVJFRADP5H2TQEvx8hrLaM8dTdWvHBBqnUIqZvcul4JmfnpDYhe5t1W4MyRnG4iTqw3Y0rGlpSP3tgxhAleZc6zmMg4wN1Jle2iOC/4qMmV18Ts0vea/c7ZgXuEaIGwjbDfq9ggSTy84IaSYg8AV2b84IdMQbUKlDDbQxmHyvOVUlWjFOMbn1IdM5j3bLZgHIMk4RaugWWPvSUbegdppbcAZ1ix0JfQmWPuxdFaf3IxS9KnN82yhdZvngP8j2zeL4aT6lVnZoy4NyEBZOwLoOF6eIgiSJW3CmjKSFA0SFvCwOAFP4nLUhr+G0kpje2QwvFEGmmz/bMRvbXG6C4dml17x04MuouZsDHfdeSkyKnlEm59xrjwfsBKno7SIGT0Rqe2a67My8wkALr3GmLbG8WnlI+AUGR7uzRJSy6OgmvlDbLPvV+A1wJV7XzQF2Xkv9KyPAVkZ+AAAA=",Rel\u00F3gio:"data:image/webp;base64,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",Notas:"data:image/webp;base64,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",M\u00FAsica:"data:image/webp;base64,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",Ajustes:"data:image/webp;base64,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",Calend\u00E1rio:"data:image/webp;base64,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"},nt={},lt=Object.keys(rt).length;Object.entries(rt).forEach(([v,V])=>{let H=new Image;H.decoding="async",H.onload=()=>{nt[v]=H,--lt===0&&typeof Tt=="function"&&(Tt(),U=-1)},H.onerror=()=>{--lt},H.src=V});let Dt=v=>v.toLocaleDateString("pt-BR",{month:"short"}).replace(".","").slice(0,3).toUpperCase();function it(v,V,H,T,$){let yt=nt[$];if(yt){if(v.save(),vt(v,V,H,T,T,T*.235),v.clip(),v.drawImage(yt,V,H,T,T),$==="Rel\xF3gio"){let jt=Rt(),zt=jt.getSeconds(),oe=jt.getMinutes()+zt/60,Te=jt.getHours()%12+oe/60,pe=V+T/2,je=H+T/2;v.fillStyle="#F2F2F2",v.font=`500 ${T*.135}px ${It}`,v.textAlign="center",v.textBaseline="middle",v.fillText("6",pe,H+T*.775);let ie=(Ue,Fn,Ce,$e,tn=0)=>{v.save(),v.translate(pe,je),v.rotate(Ue),v.strokeStyle=$e,v.lineCap="round",v.lineWidth=Ce*T,v.shadowColor="rgba(0,0,0,.45)",v.shadowBlur=T*.03,v.beginPath(),v.moveTo(0,tn*T),v.lineTo(0,-Fn*T),v.stroke(),v.restore()};ie(Te/12*Math.PI*2,.06,.016,"#fff"),ie(Te/12*Math.PI*2,.25,.042,"#fff"),ie(oe/60*Math.PI*2,.06,.016,"#fff"),ie(oe/60*Math.PI*2,.38,.042,"#fff"),ie(zt/60*Math.PI*2,.41,.012,"#F39A1E",.08),v.fillStyle="#fff",v.beginPath(),v.arc(pe,je,T*.03,0,7),v.fill(),v.fillStyle="#F39A1E",v.beginPath(),v.arc(pe,je,T*.018,0,7),v.fill(),v.fillStyle="#222",v.beginPath(),v.arc(pe,je,T*.007,0,7),v.fill()}$==="Calend\xE1rio"&&(v.fillStyle="#F2594F",v.fillRect(V,H,T,T*.3),v.fillStyle="#F6F6F4",v.fillRect(V,H+T*.3,T,T*.66),v.textAlign="center",v.textBaseline="middle",v.fillStyle="#fff",v.font=`700 ${T*.2}px ${It}`,v.fillText(Dt(Rt()),V+T/2,H+T*.165),v.fillStyle="#222",v.font=`300 ${T*.5}px ${It}`,v.fillText(String(Rt().getDate()),V+T/2,H+T*.63)),v.restore();return}let[Ft,Gt]=Q[$]||["#888","#444"];v.save();let ee=v.createLinearGradient(V,H,V,H+T);ee.addColorStop(0,Ft),ee.addColorStop(1,Gt),v.fillStyle=ee,vt(v,V,H,T,T,T*.235),v.fill();let Qt=v.createLinearGradient(V,H,V,H+T*.5);Qt.addColorStop(0,"rgba(255,255,255,.22)"),Qt.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=Qt,vt(v,V,H,T,T*.5,T*.235),v.fill(),v.translate(V+T/2,H+T/2),v.strokeStyle="#fff",v.fillStyle="#fff",v.lineWidth=T*.075,v.lineCap="round",v.lineJoin="round";let Et=(...jt)=>{v.beginPath(),v.moveTo(jt[0]*T,jt[1]*T);for(let zt=2;zt<jt.length;zt+=2)v.lineTo(jt[zt]*T,jt[zt+1]*T);v.stroke()};switch($){case"Telefone":v.beginPath(),v.moveTo(-.22*T,-.24*T),v.quadraticCurveTo(-.3*T,.05*T,-.05*T,.2*T),v.quadraticCurveTo(.12*T,.3*T,.24*T,.2*T),v.stroke(),Et(-.22,-.24,-.12,-.27,-.06,-.12,-.14,-.06),Et(.24,.2,.27,.1,.13,.03,.07,.11);break;case"Mensagens":v.lineWidth=T*.07,vt(v,-.28*T,-.22*T,.56*T,.38*T,.14*T),v.stroke(),Et(-.12,.16,-.2,.28,.02,.16),v.beginPath(),[-.12,0,.12].forEach(jt=>v.arc(jt*T,-.03*T,T*.035,0,7)),v.fill();break;case"C\xE2mera":v.lineWidth=T*.065,vt(v,-.3*T,-.17*T,.6*T,.4*T,.08*T),v.stroke(),Et(-.1,-.17,-.06,-.25,.06,-.25,.1,-.17),v.beginPath(),v.arc(0,.03*T,.11*T,0,7),v.stroke();break;case"Fotos":v.lineWidth=T*.065,vt(v,-.28*T,-.22*T,.56*T,.44*T,.07*T),v.stroke(),Et(-.24,.16,-.06,-.02,.06,.08,.13,.02,.24,.14),v.beginPath(),v.arc(.12*T,-.1*T,.045*T,0,7),v.fill();break;case"Chrome":v.lineWidth=T*.06,v.beginPath(),v.arc(0,0,.28*T,0,7),v.stroke(),v.beginPath(),v.ellipse(0,0,.12*T,.28*T,0,0,7),v.stroke(),Et(-.28,0,.28,0),Et(-.24,-.13,.24,-.13),Et(-.24,.13,.24,.13);break;case"Mapas":v.beginPath(),v.moveTo(0,.28*T),v.bezierCurveTo(-.3*T,-.02*T,-.2*T,-.3*T,0,-.3*T),v.bezierCurveTo(.2*T,-.3*T,.3*T,-.02*T,0,.28*T),v.fill(),v.fillStyle=Gt,v.beginPath(),v.arc(0,-.08*T,.08*T,0,7),v.fill();break;case"Clima":v.fillStyle="#FFD45A",v.beginPath(),v.arc(-.08*T,-.08*T,.14*T,0,7),v.fill(),v.fillStyle="#fff",v.beginPath(),v.arc(.02*T,.1*T,.12*T,0,7),v.arc(.15*T,.06*T,.1*T,0,7),v.arc(-.12*T,.14*T,.08*T,0,7),v.fill(),v.fillRect(-.12*T,.12*T,.36*T,.1*T);break;case"Rel\xF3gio":{v.lineWidth=T*.05,v.beginPath(),v.arc(0,0,.3*T,0,7),v.stroke();let jt=Rt(),zt=(jt.getHours()%12+jt.getMinutes()/60)/12*Math.PI*2,oe=jt.getMinutes()/60*Math.PI*2;Et(0,0,Math.sin(zt)*.15,-Math.cos(zt)*.15),v.strokeStyle="#F4510B",v.lineWidth=T*.04,Et(0,0,Math.sin(oe)*.23,-Math.cos(oe)*.23);break}case"Notas":v.strokeStyle="rgba(120,80,0,.75)",v.lineWidth=T*.055,[-.12,.02,.16].forEach((jt,zt)=>Et(-.22,jt,zt===2?.06:.22,jt)),v.save(),vt(v,-.5*T,-.5*T,T,T,T*.235),v.clip(),v.fillStyle="rgba(255,255,255,.55)",v.fillRect(-.5*T,-.5*T,T,.2*T),v.restore();break;case"M\xFAsica":v.beginPath(),v.arc(-.1*T,.16*T,.09*T,0,7),v.arc(.17*T,.1*T,.09*T,0,7),v.fill(),Et(-.02,.16,-.02,-.22,.25,-.28,.25,.1);break;case"Ajustes":v.lineWidth=T*.06,v.beginPath(),v.arc(0,0,.17*T,0,7),v.stroke(),v.beginPath(),v.arc(0,0,.06*T,0,7),v.fill();for(let jt=0;jt<8;jt++){let zt=jt*Math.PI/4;Et(Math.cos(zt)*.21,Math.sin(zt)*.21,Math.cos(zt)*.3,Math.sin(zt)*.3)}break;case"Calend\xE1rio":v.fillStyle="#F4510B",v.font=`700 ${T*.15}px ${It}`,v.textAlign="center",v.textBaseline="middle",v.fillText(Mt(Rt()),0,-T*.25),v.fillStyle="#111",v.font=`400 ${T*.44}px ${It}`,v.fillText(String(Rt().getDate()),0,T*.1);break}v.restore()}let[bt,dt]=w(),[Bt,pt]=w(),[Yt,Nt]=w(),[te,I]=w(),[St,B]=w();function st(){pt.setTransform(h,0,0,h,0,0),pt.clearRect(0,0,a,l),A(pt),x(pt),k(pt);let v=104,V=(a-v*4)/5;ot.forEach(([H,T],$)=>{let yt=V+$%4*(v+V),Ft=150+Math.floor($/4)*(v+66);it(pt,yt,Ft,v,H,T),pt.fillStyle="#fff",pt.font=`500 20px ${It}`,pt.textAlign="center",pt.textBaseline="alphabetic",pt.fillText(H,yt+v/2,Ft+v+30)}),pt.fillStyle="rgba(255,255,255,.2)",vt(pt,26,l-190,a-52,150,50),pt.fill(),[["Telefone","#34C759"],["Chrome","#ffffff"],["Mensagens","#30D158"],["C\xE2mera","#3a3a3c"]].forEach(([H,T],$)=>it(pt,V+$*(v+V),l-165,v,H,T)),J(pt)}function Tt(){let v;A(dt),x(dt),k(dt),dt.textAlign="center",dt.fillStyle="rgba(255,255,255,.85)",dt.font=`600 30px ${It}`,dt.fillText(xt(Rt()),a/2,200),dt.fillStyle="#fff",dt.font=`700 170px ${It}`,dt.fillText(ct(Rt()),a/2,330),dt.fillStyle="rgba(255,255,255,.14)",vt(dt,60,l-420,a-120,130,30),dt.fill(),dt.fillStyle="#fff",dt.textAlign="left",dt.font=`700 26px ${It}`,dt.fillText("TECHSMART",96,l-376),dt.font=`500 25px ${It}`,dt.fillStyle="rgba(255,255,255,.85)",dt.fillText("Seu aparelho em boas m\xE3os.",96,l-336),dt.fillStyle="rgba(255,255,255,.18)",dt.beginPath(),dt.arc(110,l-150,46,0,7),dt.fill(),dt.beginPath(),dt.arc(a-110,l-150,46,0,7),dt.fill(),J(dt),st(),Nt.fillStyle="#fff",Nt.fillRect(0,0,a,l),x(Nt,!0),Nt.fillStyle="#111",Nt.font=`700 52px ${It}`,Nt.textAlign="left",Nt.textBaseline="alphabetic",Nt.fillText("Fotos",36,190);for(let H=0;H<24;H++){let T=H%3*200,$=230+Math.floor(H/3)*200,yt=H*47%360,Ft=Nt.createLinearGradient(T,$,T+198,$+198);Ft.addColorStop(0,`hsl(${yt},55%,62%)`),Ft.addColorStop(1,`hsl(${(yt+40)%360},45%,32%)`),Nt.fillStyle=Ft,Nt.fillRect(T+1,$+1,198,198)}J(Nt,!0),I.fillStyle="#fff",I.fillRect(0,0,a,l),x(I,!0),I.fillStyle="#111",I.font=`700 52px ${It}`,I.textAlign="left",I.fillText("Mensagens",36,190);for(let H=0;H<9;H++){let T=250+H*118;I.fillStyle=`hsl(${H*40},40%,70%)`,I.beginPath(),I.arc(80,T+44,40,0,7),I.fill(),I.fillStyle="#222",I.fillRect(140,T+22,200+H*37%120,18),I.fillStyle="#bbb",I.fillRect(140,T+54,300+H*53%100,14)}J(I,!0),B.fillStyle="#0D0D0D",B.fillRect(0,0,a,l),v=B.createRadialGradient(a/2,l*.47,10,a/2,l*.47,a*.9),v.addColorStop(0,"rgba(244,81,11,.28)"),v.addColorStop(1,"rgba(13,13,13,0)"),B.fillStyle=v,B.fillRect(0,0,a,l),B.fillStyle="#1b1b1b",B.fillRect(0,0,a,190),x(B),k(B),B.fillStyle="#2c2c2e",vt(B,24,112,a-48,62,31),B.fill(),B.fillStyle="#c7c7cc",B.font=`500 26px ${It}`,B.textAlign="center",B.textBaseline="middle",B.fillText("techsmart.com.br",a/2,144),B.textAlign="left",B.font=`800 30px ${It}`,B.fillStyle="#F5F5F3",B.fillText("TECH",36,236);let V=B.measureText("TECH").width;B.fillStyle=u,B.fillText("SMART",36+V,236),B.fillStyle="#F5F5F3";for(let H=0;H<3;H++)B.fillRect(a-76,222+H*12,40,3);B.textAlign="center",B.fillStyle="rgba(245,245,243,.6)",B.font=`600 22px ${It}`,B.fillText("ASSIST\xCANCIA T\xC9CNICA DE CELULARES",a/2,l*.36),B.font=`800 64px ${It}`,[["Seu celular nas","#F5F5F3"],["m\xE3os de quem","#F5F5F3"],["entende do",u],["assunto.",u]].forEach(([H,T],$)=>{B.fillStyle=T,B.fillText(H,a/2,l*.43+$*70)}),B.fillStyle="rgba(245,245,243,.62)",B.font=`400 24px ${It}`,["Samsung, Apple, Motorola e Xiaomi.","Avalia\xE7\xE3o antes de qualquer servi\xE7o."].forEach((H,T)=>B.fillText(H,a/2,l*.43+300+T*34)),B.fillStyle="#25D366",vt(B,a/2-140,l*.43+390,280,72,36),B.fill(),B.fillStyle="#fff",B.font=`700 26px ${It}`,B.fillText("Fale conosco",a/2,l*.43+426),J(B)}Tt();let Pt=Rt().getMinutes(),Wt=-1,ae=0,xe=(v,V=0,H=1)=>Math.min(H,Math.max(V,v)),Jt=(v,V,H)=>{let T=xe((H-v)/(V-v));return T*T*(3-2*T)},ue=(v,V,H)=>v+(V-v)*H,He=[[Yt,"Fotos","#ffffff"],[St,"Chrome","#ffffff"],[te,"Mensagens","#30D158"]];function oi(v,V,H,T,$,yt,Ft){let Gt=a*T,ee=l*T;K.save(),K.globalAlpha=yt,K.fillStyle="#000",vt(K,V-Gt/2,H-ee/2,Gt,ee,$),K.fill(),vt(K,V-Gt/2,H-ee/2,Gt,ee,$),K.clip(),K.drawImage(v,V-Gt/2,H-ee/2,Gt,ee),K.restore(),Ft&&yt>.01&&(K.save(),K.globalAlpha=yt*Ft.a,it(K,V-Gt/2+4,H-ee/2-66,48,Ft.n,Ft.c),K.fillStyle="#fff",K.font=`600 26px ${It}`,K.textAlign="left",K.textBaseline="middle",K.fillText(Ft.n,V-Gt/2+64,H-ee/2-42),K.restore())}function _s(v){K.globalAlpha=1,K.fillStyle="#000",K.fillRect(0,0,a,l);let V=Jt(.1,.2,v);if(V<=.001)return;let H=Jt(.28,.38,v),T=Jt(.44,.56,v),$=Jt(.57,.68,v),yt=Jt(.71,.8,v);if(yt>=1){K.drawImage(St,0,0,a,l);let Ft=Jt(.83,.89,v);Ft>0&&(K.globalAlpha=Ft,K.fillStyle="#0D0D0D",K.fillRect(0,0,a,l),K.globalAlpha=1);return}if(T<1){let Ft=ue(1.06-.06*H,.58,T);K.save(),K.globalAlpha=V*H*(1-T*.85),T>0?oi(Bt,a/2,l/2-T*40,Ft,60*T,1,null):K.drawImage(Bt,a/2-a*Ft/2,l/2-l*Ft/2,a*Ft,l*Ft),K.restore(),H<1&&(K.save(),K.globalAlpha=V*(1-H),K.drawImage(bt,0,-H*l*.6,a,l),K.restore())}if(T>0){K.save(),K.globalAlpha=T,K.fillStyle="rgba(10,10,10,.82)",K.fillRect(0,0,a,l),K.restore();let Ft=ue(.62,1,yt),Gt=a*.7,ee=$;He.forEach(([Et,jt,zt],oe)=>{if(oe===1)return;let Te=a/2+(oe-ee)*Gt*(1+yt*1.2)+(1-T)*a*.5;oi(Et,Te,l/2+30*(1-yt),.62,44,T*(1-yt),{n:jt,c:zt,a:1})});let Qt=ue(a/2+(1-ee)*Gt+(1-T)*a*.5,a/2,yt);oi(St,Qt,ue(l/2+30,l/2,yt),Ft,ue(44,0,yt),T,{n:"Chrome",c:"#ffffff",a:1-yt}),K.save(),K.globalAlpha=T*(1-yt),J(K),K.restore()}V<1&&(K.globalAlpha=1-V,K.fillStyle="#000",K.fillRect(0,0,a,l),K.globalAlpha=1)}let De=1,_n=1,Mn=1;function Wi(){let v=Qe.clientWidth||innerWidth,V=Qe.clientHeight||innerHeight;v===De&&V===_n||(De=v,_n=V,Mn=De/_n,p.setSize(De,_n,!1),P.aspect=Mn,P.updateProjectionMatrix(),G=!0)}let li=()=>Math.max(1.634/(.6*2*L),.78/(.62*2*L*Mn)),Ms=()=>Math.max(1.634/(.92*2*L),.78/(.9*2*L*Mn)),ci=()=>Math.min(.716/(2*L*Mn),r/(2*L))*.94,hi=v=>v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2,Xi=0,Ss=0,qi=0,Yi=0,M=-1,U=-1,G=!0,W=!0;addEventListener("pointermove",v=>{v.pointerType==="mouse"&&(Xi=v.clientX/innerWidth*2-1,Ss=v.clientY/innerHeight*2-1)},{passive:!0}),new ResizeObserver(()=>{Wi(),window.techsmartWake()}).observe(Qe),new IntersectionObserver(([v])=>{W=v.isIntersecting,window.techsmartWake()}).observe(Wo),Wi();let F=performance.now();function mt(v){let V=window.__ip||0;if(!W||V>=.985){Qe.style.visibility!=="hidden"&&V>=.985&&(Qe.style.visibility="hidden");return}if(Qe.style.visibility==="hidden"&&(Qe.style.visibility=""),v>=ae){ae=v+250;let zt=Rt(),oe=zt.getMinutes(),Te=zt.getSeconds();oe!==Pt?(Pt=oe,Tt(),U=-1):Te!==Wt&&V>.26&&V<.57&&nt.Rel\u00F3gio&&(st(),U=-1),Wt=Te}let H=(v-F)/1e3;qi+=(Xi-qi)*.06,Yi+=(Ss-Yi)*.06;let T=hi(Jt(0,.24,V)),$=hi(Jt(.24,.42,V)),yt=Jt(.8,.96,V),Ft=1-Math.max($*.6,Jt(.78,.86,V));at.rotation.y=ue(Math.PI-.5,0,T),at.rotation.x=ue(.18,0,T),at.rotation.z=ue(-.06,0,T),q.rotation.y=(qi*.22+Math.sin(H*.6)*.04)*Ft,q.rotation.x=(Yi*.14+Math.sin(H*.8)*.025)*Ft,q.position.y=Math.sin(H*1.1)*.03*Ft;let Gt=li(),ee=Ms(),Qt=ci(),Et=ue(Gt,ee,$);Et=Et*Math.pow(Qt/ee,hi(yt)),P.position.set(0,0,Et),P.lookAt(0,0,0);let jt=Math.round(V*(g?800:1200));jt!==U&&(U=jt,_s(V),kt.needsUpdate=!0),p.render(d,P),M=V,G=!1}let Ct=!1;Qe.addEventListener("webglcontextlost",v=>{v.preventDefault(),Ct=!0,Ec()}),Qe.addEventListener("webglcontextrestored",()=>{Ct=!1,Wo.classList.remove("no3d"),U=-1,window.techsmartWake()}),window.techsmartFrame(mt,()=>!Ct&&W&&((window.__ip||0)<.985||Qe.style.visibility!=="hidden")),window.__introOK=!0}(function(){let t=document.getElementById("nosso-espaco"),e=document.getElementById("lap3d");if(!t||!e||matchMedia("(prefers-reduced-motion: reduce)").matches)return;t.classList.add("lap");let n=new IntersectionObserver(([r])=>{if(r.isIntersecting){n.disconnect();try{s()}catch{t.classList.remove("lap")}}},{rootMargin:"700px 0px"});n.observe(t);function s(){let c=xs.degToRad(-106),h=rt=>Math.min(1,Math.max(0,rt)),f=(rt,nt,lt)=>{let Dt=h((lt-rt)/(nt-rt));return Dt*Dt*(3-2*Dt)},u=(navigator.hardwareConcurrency||8)<=4||matchMedia("(max-width:700px)").matches,m='"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',g=(rt,nt,lt,Dt,it,bt)=>{rt.beginPath(),rt.roundRect?rt.roundRect(nt,lt,Dt,it,bt):rt.rect(nt,lt,Dt,it)},y=(rt,nt)=>{let lt=document.createElement("canvas");return lt.width=rt,lt.height=nt,lt},p=new hs({canvas:e,alpha:!0,antialias:!u&&devicePixelRatio<1.5,powerPreference:u?"default":"high-performance"});p.setPixelRatio(Math.min(devicePixelRatio||1,u?1.1:1.5)),p.outputColorSpace=ye,p.toneMapping=Ar,p.toneMappingExposure=1.05;let d=new $n,C=new jn(p),E=new ys;d.environment=C.fromScene(E,.04).texture,E.dispose(),C.dispose();let S=new si(16777215,1.4);S.position.set(2.5,6,4),d.add(S);let z=new si(16011531,1.1);z.position.set(-4,2.5,-4),d.add(z),d.add(new br(16777215,.18));let P=new Me(30,1,.1,100),L=new ke({color:2829101,metalness:.8,roughness:.34}),N=new ke({color:789517,metalness:.4,roughness:.6}),b=new Be,_=new Be,R=new Xt(new ai(3,.085,2.06,u?3:5,.04),L);R.position.y=.085/2,b.add(R);let Y=y(1536,Math.round(1536*(2.06*.92)/(3*.94))),O=Y.getContext("2d");{let rt=Y.width,nt=Y.height,lt=rt*.1,Dt=nt*.07,it=rt*.8,bt=nt*.5,dt=8,Bt=(bt-dt*6)/6;O.fillStyle="#18181a",g(O,lt-12,Dt-12,it+24,bt+24,18),O.fill();for(let I=0;I<14;I++){let St=(it-dt*13)/14;O.fillStyle="#0e0e0f",g(O,lt+I*(St+dt),Dt,St,Bt*.6,7),O.fill()}let pt=Dt+Bt*.6+dt;[14,14,13,12].forEach(I=>{let St=(it-dt*(I-1))/I;for(let B=0;B<I;B++)O.fillStyle="#0e0e0f",g(O,lt+B*(St+dt),pt,St,Bt,8),O.fill();pt+=Bt+dt});let Yt=it*.42;O.fillStyle="#0e0e0f",g(O,lt+(it-Yt)/2,pt,Yt,Bt*.95,8),O.fill();let Nt=rt*.38,te=nt*.3;O.fillStyle="rgba(0,0,0,.28)",g(O,(rt-Nt)/2,nt*.64,Nt,te,22),O.fill(),O.strokeStyle="rgba(255,255,255,.08)",O.lineWidth=3,O.stroke()}let X=new ti(Y);X.colorSpace=ye,X.anisotropy=8;let tt=new Xt(new rn(3*.94,2.06*.92),new ke({map:X,metalness:.5,roughness:.55,transparent:!0}));tt.rotation.x=-Math.PI/2,tt.position.set(0,.085+.0015,.02),b.add(tt),_.position.set(0,.085,-2.06/2+.02);let Z=new Xt(new ai(3,.05,2.06-.02,u?3:5,.03),L);Z.position.set(0,.05/2,(2.06-.02)/2),_.add(Z);let at=new Xt(new rn(3*.985,2.06*.97),N);at.rotation.x=Math.PI/2,at.position.set(0,-.0015,(2.06-.02)/2),_.add(at);let q=(window.TS_GALLERY||[]).length?window.TS_GALLERY:[{t:"Nosso espa\xE7o"}],gt=q.length,_t=u?768:Math.min(1280,Math.floor(p.capabilities.maxTextureSize/gt)),K=Math.round(_t/1.6),kt=y(_t*gt,K),Vt=kt.getContext("2d");function j(rt,nt){let lt=rt*_t,Dt=q[rt];if(Vt.save(),Vt.beginPath(),Vt.rect(lt,0,_t,K),Vt.clip(),nt)Vt.imageSmoothingQuality="high",Vt.drawImage(nt,lt,0,_t,K);else{Vt.fillStyle="#161616",Vt.fillRect(lt,0,_t,K);let it=Vt.createRadialGradient(lt+_t*(.3+.13*rt),K*.35,10,lt+_t*.5,K*.5,_t*.7);it.addColorStop(0,"rgba(244,81,11,.35)"),it.addColorStop(1,"rgba(22,22,22,0)"),Vt.fillStyle=it,Vt.fillRect(lt,0,_t,K),Vt.strokeStyle="rgba(255,255,255,.04)",Vt.lineWidth=2;for(let bt=-K;bt<_t;bt+=28)Vt.beginPath(),Vt.moveTo(lt+bt,K),Vt.lineTo(lt+bt+K,0),Vt.stroke()}Vt.restore()}q.forEach((rt,nt)=>{if(j(nt,null),rt.src){let lt=new Image;lt.onload=()=>{j(nt,lt),ht.needsUpdate=!0,w=!0,window.techsmartWake()},lt.src=rt.src}});let ht=new ti(kt);ht.colorSpace=ye,ht.anisotropy=8,ht.repeat.set(1/gt,1);let Lt=new Ze({map:ht,color:0,toneMapped:!1}),ut=3*.92,Ut=ut/1.6,Ht=new Xt(new rn(ut,Ut),Lt);Ht.rotation.x=Math.PI/2,Ht.position.set(0,-.003,2.06-.02-Ut/2-.07),_.add(Ht);let Ot=rt=>{let nt=y(256,256),lt=nt.getContext("2d"),Dt=lt.createRadialGradient(128,128,0,128,128,128);return Dt.addColorStop(0,"rgba(255,255,255,1)"),Dt.addColorStop(rt?.55:.35,rt?"rgba(255,255,255,.55)":"rgba(255,255,255,.25)"),Dt.addColorStop(1,"rgba(255,255,255,0)"),lt.fillStyle=Dt,lt.fillRect(0,0,256,256),new ti(nt)},qt=new Xt(new rn(3*1.2,2.06*.9),new Ze({map:Ot(!1),color:16751200,transparent:!0,opacity:0,depthWrite:!1,blending:$s,toneMapped:!1}));qt.rotation.x=-Math.PI/2,qt.position.set(0,.085+.004,-.1),b.add(qt);let et=new Xt(new rn(3*1.7,2.06*1.9),new Ze({map:Ot(!0),color:0,transparent:!0,opacity:.75,depthWrite:!1}));et.rotation.x=-Math.PI/2,et.position.y=-.002,b.add(et),b.add(_),d.add(b);let ft=!1,w=!0,Rt=!1,ct=-1,xt={tx:0,ty:0,x:0,y:0},Mt=new D(0,.3,1).normalize(),It=new D,vt=new D(0,.2,0),A=new D(0,.78,-.1),x=new D;function k(rt){let nt=f(.02,.28,rt),lt=nt;_.rotation.x=c*nt;let Dt=f(.14,.3,rt);Lt.color.setScalar(Dt),qt.material.opacity=Dt*.2;let it=h((rt-.32)/.62)*(gt-1),bt=Math.floor(it),dt=it-bt,Bt=dt<.5?4*dt*dt*dt:1-Math.pow(-2*dt+2,3)/2;ht.offset.x=Math.min(gt-1,bt+Bt)/gt;let pt=Math.tan(xs.degToRad(P.fov/2)),Yt=1.75/(pt*P.aspect),Nt=1.32/pt,te=Math.max(Yt,Nt)*1.12+1.3;x.copy(A).addScaledVector(Mt,te),P.position.set(0,te*.95,te*.55).lerp(x,nt),P.lookAt(It.copy(vt).lerp(A,nt));let I=1-lt;b.rotation.y=xs.lerp(-.2,0,nt)+xt.x*.14*I,b.rotation.x=xt.y*.06*I}function J(){let rt=e.clientWidth,nt=e.clientHeight;!rt||!nt||(ft=rt/nt<.9,p.setSize(rt,nt,!1),P.aspect=rt/nt,P.fov=ft?38:30,P.updateProjectionMatrix(),w=!0)}new ResizeObserver(()=>{J(),window.techsmartWake()}).observe(e),addEventListener("pointermove",rt=>{rt.pointerType==="mouse"&&(xt.tx=rt.clientX/innerWidth*2-1,xt.ty=rt.clientY/innerHeight*2-1,window.techsmartWake())},{passive:!0}),new IntersectionObserver(([rt])=>{Rt=rt.isIntersecting,Rt&&(w=!0),window.techsmartWake()}).observe(t),t.classList.add("lap"),J();let ot=NaN,Q=!1;e.addEventListener("webglcontextlost",rt=>{rt.preventDefault(),Q=!0,t.classList.remove("lap")}),e.addEventListener("webglcontextrestored",()=>{Q=!1,t.classList.add("lap"),w=!0,window.techsmartWake()}),window.techsmartFrame(()=>{ot=scrollY;let rt=t.getBoundingClientRect(),nt=t.offsetHeight-innerHeight,lt=h(-rt.top/Math.max(1,nt));xt.x+=(xt.tx-xt.x)*.06,xt.y+=(xt.ty-xt.y)*.06;let Dt=Math.abs(xt.tx-xt.x)+Math.abs(xt.ty-xt.y)>.002;!w&&!Dt&&Math.abs(lt-ct)<1e-5||(ct=lt,k(lt),p.render(d,P),w=!1)},()=>!Q&&Rt&&(w||scrollY!==ot||ct<.28&&Math.abs(xt.tx-xt.x)+Math.abs(xt.ty-xt.y)>.002))}})();
