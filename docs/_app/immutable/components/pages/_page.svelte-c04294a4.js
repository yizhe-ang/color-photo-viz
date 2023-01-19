import{L as t0,M as yt,N as f2,A as u3,O as D2,S as tt,i as it,s as nt,F as d0,G as a0,H as s0,I as l0,f as _e,t as ve,K as dt,w as We,x as Ye,y as je,z as Xe,k as Ae,l as Ce,m as Te,h as me,n as ie,b as ot,P as C1,Q as Pt,g as i1,d as n1,D as g5,o as R7,R as L5,T as o2,U as f5,V as k2,a as $e,c as et,W as o0,X as k1,Y as P9,e as C4,Z as P4,_ as wi,$ as D9,a0 as I7,v as D4,J as ze,a1 as L9,a2 as R9,a3 as z0,q as b0,a4 as u0,r as M0,p as S0,u as w0,E as l3,B as Qt,C as I9,a5 as L4,a6 as h2,a7 as g3}from"../../chunks/index-6f7dad79.js";import{d as O7,w as vt,r as O9}from"../../chunks/index-c9fc09e4.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qi="148",x1={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},y1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},F9=0,R4=1,N9=2,F7=1,N7=2,o3=3,r1=0,b2=1,h5=2,R3=3,_0=0,R1=1,I4=2,O4=3,F4=4,U9=5,E1=100,k9=101,B9=102,N4=103,U4=104,V9=200,H9=201,W9=202,j9=203,U7=204,k7=205,X9=206,q9=207,Y9=208,Z9=209,K9=210,J9=0,Q9=1,$9=2,Ti=3,en=4,tn=5,nn=6,rn=7,B7=0,dn=1,an=2,N2=0,sn=1,ln=2,on=3,V7=4,xn=5,H7=300,B1=301,V1=302,Ei=303,Ai=304,_5=306,Ci=1e3,E2=1001,Pi=1002,jt=1003,k4=1004,R5=1005,g2=1006,yn=1007,f3=1008,d1=1009,pn=1010,mn=1011,W7=1012,cn=1013,q0=1014,Y0=1015,h3=1016,zn=1017,un=1018,I1=1020,gn=1021,fn=1022,A2=1023,hn=1024,_n=1025,K0=1026,H1=1027,Gn=1028,vn=1029,bn=1030,Mn=1031,Sn=1033,I5=33776,O5=33777,F5=33778,N5=33779,B4=35840,V4=35841,H4=35842,W4=35843,wn=36196,j4=37492,X4=37496,q4=37808,Y4=37809,Z4=37810,K4=37811,J4=37812,Q4=37813,$4=37814,e6=37815,t6=37816,i6=37817,n6=37818,r6=37819,d6=37820,a6=37821,s6=36492,T0=3e3,Ke=3001,Tn=3200,En=3201,An=0,Cn=1,L2="srgb",_3="srgb-linear",U5=7680,Pn=519,l6=35044,o6="300 es",Di=1035;class l1{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],k5=Math.PI/180,x6=180/Math.PI;function A3(){const d=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[d&255]+Ft[d>>8&255]+Ft[d>>16&255]+Ft[d>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function qt(d,e,t){return Math.max(e,Math.min(t,d))}function Dn(d,e){return(d%e+e)%e}function B5(d,e,t){return(1-t)*d+t*e}function y6(d){return(d&d-1)===0&&d!==0}function Li(d){return Math.pow(2,Math.floor(Math.log(d)/Math.LN2))}function I3(d,e){switch(e.constructor){case Float32Array:return d;case Uint16Array:return d/65535;case Uint8Array:return d/255;case Int16Array:return Math.max(d/32767,-1);case Int8Array:return Math.max(d/127,-1);default:throw new Error("Invalid component type.")}}function t2(d,e){switch(e.constructor){case Float32Array:return d;case Uint16Array:return Math.round(d*65535);case Uint8Array:return Math.round(d*255);case Int16Array:return Math.round(d*32767);case Int8Array:return Math.round(d*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class s2{constructor(){s2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,a,s,l,o){const x=this.elements;return x[0]=e,x[1]=n,x[2]=s,x[3]=t,x[4]=r,x[5]=l,x[6]=i,x[7]=a,x[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[3],l=i[6],o=i[1],x=i[4],p=i[7],y=i[2],z=i[5],g=i[8],m=n[0],c=n[3],u=n[6],f=n[1],_=n[4],G=n[7],v=n[2],S=n[5],P=n[8];return r[0]=a*m+s*f+l*v,r[3]=a*c+s*_+l*S,r[6]=a*u+s*G+l*P,r[1]=o*m+x*f+p*v,r[4]=o*c+x*_+p*S,r[7]=o*u+x*G+p*P,r[2]=y*m+z*f+g*v,r[5]=y*c+z*_+g*S,r[8]=y*u+z*G+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],o=e[7],x=e[8];return t*a*x-t*s*o-i*r*x+i*s*l+n*r*o-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],o=e[7],x=e[8],p=x*a-s*o,y=s*l-x*r,z=o*r-a*l,g=t*p+i*y+n*z;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=p*m,e[1]=(n*o-x*i)*m,e[2]=(s*i-n*a)*m,e[3]=y*m,e[4]=(x*t-n*l)*m,e[5]=(n*r-s*t)*m,e[6]=z*m,e[7]=(i*l-o*t)*m,e[8]=(a*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,s){const l=Math.cos(r),o=Math.sin(r);return this.set(i*l,i*o,-i*(l*a+o*s)+a+e,-n*o,n*l,-n*(-o*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(V5.makeScale(e,t)),this}rotate(e){return this.premultiply(V5.makeRotation(-e)),this}translate(e,t){return this.premultiply(V5.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const V5=new s2;function j7(d){for(let e=d.length-1;e>=0;--e)if(d[e]>=65535)return!0;return!1}function G3(d){return document.createElementNS("http://www.w3.org/1999/xhtml",d)}function J0(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}function n5(d){return d<.0031308?d*12.92:1.055*Math.pow(d,.41666)-.055}const H5={[L2]:{[_3]:J0},[_3]:{[L2]:n5}},Ht={legacyMode:!0,get workingColorSpace(){return _3},set workingColorSpace(d){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(d,e,t){if(this.legacyMode||e===t||!e||!t)return d;if(H5[e]&&H5[e][t]!==void 0){const i=H5[e][t];return d.r=i(d.r),d.g=i(d.g),d.b=i(d.b),d}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(d,e){return this.convert(d,this.workingColorSpace,e)},toWorkingColorSpace:function(d,e){return this.convert(d,e,this.workingColorSpace)}},X7={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},S2={h:0,s:0,l:0},O3={h:0,s:0,l:0};function W5(d,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?d+(e-d)*6*t:t<1/2?e:t<2/3?d+(e-d)*6*(2/3-t):d}function F3(d,e){return e.r=d.r,e.g=d.g,e.b=d.b,e}let rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=L2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ht.workingColorSpace){if(e=Dn(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=W5(a,r,e+1/3),this.g=W5(a,r,e),this.b=W5(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,n),this}setStyle(e,t=L2){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ht.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ht.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,o=parseFloat(r[2])/100,x=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,o,x,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ht.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=L2){const i=X7[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=J0(e.r),this.g=J0(e.g),this.b=J0(e.b),this}copyLinearToSRGB(e){return this.r=n5(e.r),this.g=n5(e.g),this.b=n5(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=L2){return Ht.fromWorkingColorSpace(F3(this,_t),e),qt(_t.r*255,0,255)<<16^qt(_t.g*255,0,255)<<8^qt(_t.b*255,0,255)<<0}getHexString(e=L2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(F3(this,_t),t);const i=_t.r,n=_t.g,r=_t.b,a=Math.max(i,n,r),s=Math.min(i,n,r);let l,o;const x=(s+a)/2;if(s===a)l=0,o=0;else{const p=a-s;switch(o=x<=.5?p/(a+s):p/(2-a-s),a){case i:l=(n-r)/p+(n<r?6:0);break;case n:l=(r-i)/p+2;break;case r:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=o,e.l=x,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(F3(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=L2){return Ht.fromWorkingColorSpace(F3(this,_t),e),e!==L2?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(S2),S2.h+=e,S2.s+=t,S2.l+=i,this.setHSL(S2.h,S2.s,S2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(S2),e.getHSL(O3);const i=B5(S2.h,O3.h,t),n=B5(S2.s,O3.s,t),r=B5(S2.l,O3.l,t);return this.setHSL(i,n,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};rt.NAMES=X7;let p1;class q7{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{p1===void 0&&(p1=G3("canvas")),p1.width=e.width,p1.height=e.height;const i=p1.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=p1}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=G3("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=J0(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(J0(t[i]/255)*255):t[i]=J0(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Y7{constructor(e=null){this.isSource=!0,this.uuid=A3(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,s=n.length;a<s;a++)n[a].isDataTexture?r.push(j5(n[a].image)):r.push(j5(n[a]))}else r=j5(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function j5(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap?q7.getDataURL(d):d.data?{data:Array.from(d.data),width:d.width,height:d.height,type:d.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ln=0;class Rt extends l1{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=E2,n=E2,r=g2,a=f3,s=A2,l=d1,o=Rt.DEFAULT_ANISOTROPY,x=T0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ln++}),this.uuid=A3(),this.name="",this.source=new Y7(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=s,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H7)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case E2:e.x=e.x<0?0:1;break;case Pi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case E2:e.y=e.y<0?0:1;break;case Pi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=H7;Rt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,n=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,o=l[0],x=l[4],p=l[8],y=l[1],z=l[5],g=l[9],m=l[2],c=l[6],u=l[10];if(Math.abs(x-y)<.01&&Math.abs(p-m)<.01&&Math.abs(g-c)<.01){if(Math.abs(x+y)<.1&&Math.abs(p+m)<.1&&Math.abs(g+c)<.1&&Math.abs(o+z+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(o+1)/2,G=(z+1)/2,v=(u+1)/2,S=(x+y)/4,P=(p+m)/4,h=(g+c)/4;return _>G&&_>v?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=S/i,r=P/i):G>v?G<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(G),i=S/n,r=h/n):v<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=P/r,n=h/r),this.set(i,n,r,t),this}let f=Math.sqrt((c-g)*(c-g)+(p-m)*(p-m)+(y-x)*(y-x));return Math.abs(f)<.001&&(f=1),this.x=(c-g)/f,this.y=(p-m)/f,this.z=(y-x)/f,this.w=Math.acos((o+z+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E0 extends l1{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Rt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:g2,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Y7(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z7 extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=E2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=E2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class a1{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,s){let l=i[n+0],o=i[n+1],x=i[n+2],p=i[n+3];const y=r[a+0],z=r[a+1],g=r[a+2],m=r[a+3];if(s===0){e[t+0]=l,e[t+1]=o,e[t+2]=x,e[t+3]=p;return}if(s===1){e[t+0]=y,e[t+1]=z,e[t+2]=g,e[t+3]=m;return}if(p!==m||l!==y||o!==z||x!==g){let c=1-s;const u=l*y+o*z+x*g+p*m,f=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const v=Math.sqrt(_),S=Math.atan2(v,u*f);c=Math.sin(c*S)/v,s=Math.sin(s*S)/v}const G=s*f;if(l=l*c+y*G,o=o*c+z*G,x=x*c+g*G,p=p*c+m*G,c===1-s){const v=1/Math.sqrt(l*l+o*o+x*x+p*p);l*=v,o*=v,x*=v,p*=v}}e[t]=l,e[t+1]=o,e[t+2]=x,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,r,a){const s=i[n],l=i[n+1],o=i[n+2],x=i[n+3],p=r[a],y=r[a+1],z=r[a+2],g=r[a+3];return e[t]=s*g+x*p+l*z-o*y,e[t+1]=l*g+x*y+o*p-s*z,e[t+2]=o*g+x*z+s*y-l*p,e[t+3]=x*g-s*p-l*y-o*z,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,o=s(i/2),x=s(n/2),p=s(r/2),y=l(i/2),z=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=y*x*p+o*z*g,this._y=o*z*p-y*x*g,this._z=o*x*g+y*z*p,this._w=o*x*p-y*z*g;break;case"YXZ":this._x=y*x*p+o*z*g,this._y=o*z*p-y*x*g,this._z=o*x*g-y*z*p,this._w=o*x*p+y*z*g;break;case"ZXY":this._x=y*x*p-o*z*g,this._y=o*z*p+y*x*g,this._z=o*x*g+y*z*p,this._w=o*x*p-y*z*g;break;case"ZYX":this._x=y*x*p-o*z*g,this._y=o*z*p+y*x*g,this._z=o*x*g-y*z*p,this._w=o*x*p+y*z*g;break;case"YZX":this._x=y*x*p+o*z*g,this._y=o*z*p+y*x*g,this._z=o*x*g-y*z*p,this._w=o*x*p-y*z*g;break;case"XZY":this._x=y*x*p-o*z*g,this._y=o*z*p-y*x*g,this._z=o*x*g+y*z*p,this._w=o*x*p+y*z*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],s=t[5],l=t[9],o=t[2],x=t[6],p=t[10],y=i+s+p;if(y>0){const z=.5/Math.sqrt(y+1);this._w=.25/z,this._x=(x-l)*z,this._y=(r-o)*z,this._z=(a-n)*z}else if(i>s&&i>p){const z=2*Math.sqrt(1+i-s-p);this._w=(x-l)/z,this._x=.25*z,this._y=(n+a)/z,this._z=(r+o)/z}else if(s>p){const z=2*Math.sqrt(1+s-i-p);this._w=(r-o)/z,this._x=(n+a)/z,this._y=.25*z,this._z=(l+x)/z}else{const z=2*Math.sqrt(1+p-i-s);this._w=(a-n)/z,this._x=(r+o)/z,this._y=(l+x)/z,this._z=.25*z}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,s=t._x,l=t._y,o=t._z,x=t._w;return this._x=i*x+a*s+n*o-r*l,this._y=n*x+a*l+r*s-i*o,this._z=r*x+a*o+i*l-n*s,this._w=a*x-i*s-n*l-r*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let s=a*e._w+i*e._x+n*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const z=1-t;return this._w=z*a+t*this._w,this._x=z*i+t*this._x,this._y=z*n+t*this._y,this._z=z*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const o=Math.sqrt(l),x=Math.atan2(o,s),p=Math.sin((1-t)*x)/o,y=Math.sin(t*x)/o;return this._w=a*p+this._w*y,this._x=i*p+this._x*y,this._y=n*p+this._y*y,this._z=r*p+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p6.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p6.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,s=e.z,l=e.w,o=l*t+a*n-s*i,x=l*i+s*t-r*n,p=l*n+r*i-a*t,y=-r*t-a*i-s*n;return this.x=o*l+y*-r+x*-s-p*-a,this.y=x*l+y*-a+p*-r-o*-s,this.z=p*l+y*-s+o*-a-x*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=n*l-r*s,this.y=r*a-i*l,this.z=i*s-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return X5.copy(this).projectOnVector(e),this.sub(X5)}reflect(e){return this.sub(X5.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const X5=new V,p6=new a1;class C3{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,o=e.length;l<o;l+=3){const x=e[l],p=e[l+1],y=e[l+2];x<t&&(t=x),p<i&&(i=p),y<n&&(n=y),x>r&&(r=x),p>a&&(a=p),y>s&&(s=y)}return this.min.set(t,i,n),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,o=e.count;l<o;l++){const x=e.getX(l),p=e.getY(l),y=e.getZ(l);x<t&&(t=x),p<i&&(i=p),y<n&&(n=y),x>r&&(r=x),p>a&&(a=p),y>s&&(s=y)}return this.min.set(t,i,n),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=O0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,s=r.count;a<s;a++)O0.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(O0)}else i.boundingBox===null&&i.computeBoundingBox(),q5.copy(i.boundingBox),q5.applyMatrix4(e.matrixWorld),this.union(q5);const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,O0),O0.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(e3),N3.subVectors(this.max,e3),m1.subVectors(e.a,e3),c1.subVectors(e.b,e3),z1.subVectors(e.c,e3),y0.subVectors(c1,m1),p0.subVectors(z1,c1),F0.subVectors(m1,z1);let t=[0,-y0.z,y0.y,0,-p0.z,p0.y,0,-F0.z,F0.y,y0.z,0,-y0.x,p0.z,0,-p0.x,F0.z,0,-F0.x,-y0.y,y0.x,0,-p0.y,p0.x,0,-F0.y,F0.x,0];return!Y5(t,m1,c1,z1,N3)||(t=[1,0,0,0,1,0,0,0,1],!Y5(t,m1,c1,z1,N3))?!1:(U3.crossVectors(y0,p0),t=[U3.x,U3.y,U3.z],Y5(t,m1,c1,z1,N3))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return O0.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(O0).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(X2[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),X2[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),X2[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),X2[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),X2[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),X2[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),X2[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),X2[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(X2),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const X2=[new V,new V,new V,new V,new V,new V,new V,new V],O0=new V,q5=new C3,m1=new V,c1=new V,z1=new V,y0=new V,p0=new V,F0=new V,e3=new V,N3=new V,U3=new V,N0=new V;function Y5(d,e,t,i,n){for(let r=0,a=d.length-3;r<=a;r+=3){N0.fromArray(d,r);const s=n.x*Math.abs(N0.x)+n.y*Math.abs(N0.y)+n.z*Math.abs(N0.z),l=e.dot(N0),o=t.dot(N0),x=i.dot(N0);if(Math.max(-Math.max(l,o,x),Math.min(l,o,x))>s)return!1}return!0}const In=new C3,t3=new V,Z5=new V;class $i{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):In.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;t3.subVectors(e,this.center);const t=t3.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(t3,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Z5.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(t3.copy(e.center).add(Z5)),this.expandByPoint(t3.copy(e.center).sub(Z5))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const q2=new V,K5=new V,k3=new V,m0=new V,J5=new V,B3=new V,Q5=new V;class K7{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,q2)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=q2.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(q2.copy(this.direction).multiplyScalar(t).add(this.origin),q2.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){K5.copy(e).add(t).multiplyScalar(.5),k3.copy(t).sub(e).normalize(),m0.copy(this.origin).sub(K5);const r=e.distanceTo(t)*.5,a=-this.direction.dot(k3),s=m0.dot(this.direction),l=-m0.dot(k3),o=m0.lengthSq(),x=Math.abs(1-a*a);let p,y,z,g;if(x>0)if(p=a*l-s,y=a*s-l,g=r*x,p>=0)if(y>=-g)if(y<=g){const m=1/x;p*=m,y*=m,z=p*(p+a*y+2*s)+y*(a*p+y+2*l)+o}else y=r,p=Math.max(0,-(a*y+s)),z=-p*p+y*(y+2*l)+o;else y=-r,p=Math.max(0,-(a*y+s)),z=-p*p+y*(y+2*l)+o;else y<=-g?(p=Math.max(0,-(-a*r+s)),y=p>0?-r:Math.min(Math.max(-r,-l),r),z=-p*p+y*(y+2*l)+o):y<=g?(p=0,y=Math.min(Math.max(-r,-l),r),z=y*(y+2*l)+o):(p=Math.max(0,-(a*r+s)),y=p>0?r:Math.min(Math.max(-r,-l),r),z=-p*p+y*(y+2*l)+o);else y=a>0?-r:r,p=Math.max(0,-(a*y+s)),z=-p*p+y*(y+2*l)+o;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),n&&n.copy(k3).multiplyScalar(y).add(K5),z}intersectSphere(e,t){q2.subVectors(e.center,this.origin);const i=q2.dot(this.direction),n=q2.dot(q2)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),s=i-a,l=i+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,s,l;const o=1/this.direction.x,x=1/this.direction.y,p=1/this.direction.z,y=this.origin;return o>=0?(i=(e.min.x-y.x)*o,n=(e.max.x-y.x)*o):(i=(e.max.x-y.x)*o,n=(e.min.x-y.x)*o),x>=0?(r=(e.min.y-y.y)*x,a=(e.max.y-y.y)*x):(r=(e.max.y-y.y)*x,a=(e.min.y-y.y)*x),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),p>=0?(s=(e.min.z-y.z)*p,l=(e.max.z-y.z)*p):(s=(e.max.z-y.z)*p,l=(e.min.z-y.z)*p),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,q2)!==null}intersectTriangle(e,t,i,n,r){J5.subVectors(t,e),B3.subVectors(i,e),Q5.crossVectors(J5,B3);let a=this.direction.dot(Q5),s;if(a>0){if(n)return null;s=1}else if(a<0)s=-1,a=-a;else return null;m0.subVectors(this.origin,e);const l=s*this.direction.dot(B3.crossVectors(m0,B3));if(l<0)return null;const o=s*this.direction.dot(J5.cross(m0));if(o<0||l+o>a)return null;const x=-s*m0.dot(Q5);return x<0?null:this.at(x/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,a,s,l,o,x,p,y,z,g,m,c){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=n,u[1]=r,u[5]=a,u[9]=s,u[13]=l,u[2]=o,u[6]=x,u[10]=p,u[14]=y,u[3]=z,u[7]=g,u[11]=m,u[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/u1.setFromMatrixColumn(e,0).length(),r=1/u1.setFromMatrixColumn(e,1).length(),a=1/u1.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(n),o=Math.sin(n),x=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const y=a*x,z=a*p,g=s*x,m=s*p;t[0]=l*x,t[4]=-l*p,t[8]=o,t[1]=z+g*o,t[5]=y-m*o,t[9]=-s*l,t[2]=m-y*o,t[6]=g+z*o,t[10]=a*l}else if(e.order==="YXZ"){const y=l*x,z=l*p,g=o*x,m=o*p;t[0]=y+m*s,t[4]=g*s-z,t[8]=a*o,t[1]=a*p,t[5]=a*x,t[9]=-s,t[2]=z*s-g,t[6]=m+y*s,t[10]=a*l}else if(e.order==="ZXY"){const y=l*x,z=l*p,g=o*x,m=o*p;t[0]=y-m*s,t[4]=-a*p,t[8]=g+z*s,t[1]=z+g*s,t[5]=a*x,t[9]=m-y*s,t[2]=-a*o,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const y=a*x,z=a*p,g=s*x,m=s*p;t[0]=l*x,t[4]=g*o-z,t[8]=y*o+m,t[1]=l*p,t[5]=m*o+y,t[9]=z*o-g,t[2]=-o,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const y=a*l,z=a*o,g=s*l,m=s*o;t[0]=l*x,t[4]=m-y*p,t[8]=g*p+z,t[1]=p,t[5]=a*x,t[9]=-s*x,t[2]=-o*x,t[6]=z*p+g,t[10]=y-m*p}else if(e.order==="XZY"){const y=a*l,z=a*o,g=s*l,m=s*o;t[0]=l*x,t[4]=-p,t[8]=o*x,t[1]=y*p+m,t[5]=a*x,t[9]=z*p-g,t[2]=g*p-z,t[6]=s*x,t[10]=m*p+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(On,e,Fn)}lookAt(e,t,i){const n=this.elements;return i2.subVectors(e,t),i2.lengthSq()===0&&(i2.z=1),i2.normalize(),c0.crossVectors(i,i2),c0.lengthSq()===0&&(Math.abs(i.z)===1?i2.x+=1e-4:i2.z+=1e-4,i2.normalize(),c0.crossVectors(i,i2)),c0.normalize(),V3.crossVectors(i2,c0),n[0]=c0.x,n[4]=V3.x,n[8]=i2.x,n[1]=c0.y,n[5]=V3.y,n[9]=i2.y,n[2]=c0.z,n[6]=V3.z,n[10]=i2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],s=i[4],l=i[8],o=i[12],x=i[1],p=i[5],y=i[9],z=i[13],g=i[2],m=i[6],c=i[10],u=i[14],f=i[3],_=i[7],G=i[11],v=i[15],S=n[0],P=n[4],h=n[8],b=n[12],T=n[1],A=n[5],F=n[9],C=n[13],R=n[2],B=n[6],j=n[10],Z=n[14],H=n[3],Q=n[7],J=n[11],L=n[15];return r[0]=a*S+s*T+l*R+o*H,r[4]=a*P+s*A+l*B+o*Q,r[8]=a*h+s*F+l*j+o*J,r[12]=a*b+s*C+l*Z+o*L,r[1]=x*S+p*T+y*R+z*H,r[5]=x*P+p*A+y*B+z*Q,r[9]=x*h+p*F+y*j+z*J,r[13]=x*b+p*C+y*Z+z*L,r[2]=g*S+m*T+c*R+u*H,r[6]=g*P+m*A+c*B+u*Q,r[10]=g*h+m*F+c*j+u*J,r[14]=g*b+m*C+c*Z+u*L,r[3]=f*S+_*T+G*R+v*H,r[7]=f*P+_*A+G*B+v*Q,r[11]=f*h+_*F+G*j+v*J,r[15]=f*b+_*C+G*Z+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],s=e[5],l=e[9],o=e[13],x=e[2],p=e[6],y=e[10],z=e[14],g=e[3],m=e[7],c=e[11],u=e[15];return g*(+r*l*p-n*o*p-r*s*y+i*o*y+n*s*z-i*l*z)+m*(+t*l*z-t*o*y+r*a*y-n*a*z+n*o*x-r*l*x)+c*(+t*o*p-t*s*z-r*a*p+i*a*z+r*s*x-i*o*x)+u*(-n*s*x-t*l*p+t*s*y+n*a*p-i*a*y+i*l*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],s=e[5],l=e[6],o=e[7],x=e[8],p=e[9],y=e[10],z=e[11],g=e[12],m=e[13],c=e[14],u=e[15],f=p*c*o-m*y*o+m*l*z-s*c*z-p*l*u+s*y*u,_=g*y*o-x*c*o-g*l*z+a*c*z+x*l*u-a*y*u,G=x*m*o-g*p*o+g*s*z-a*m*z-x*s*u+a*p*u,v=g*p*l-x*m*l-g*s*y+a*m*y+x*s*c-a*p*c,S=t*f+i*_+n*G+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/S;return e[0]=f*P,e[1]=(m*y*r-p*c*r-m*n*z+i*c*z+p*n*u-i*y*u)*P,e[2]=(s*c*r-m*l*r+m*n*o-i*c*o-s*n*u+i*l*u)*P,e[3]=(p*l*r-s*y*r-p*n*o+i*y*o+s*n*z-i*l*z)*P,e[4]=_*P,e[5]=(x*c*r-g*y*r+g*n*z-t*c*z-x*n*u+t*y*u)*P,e[6]=(g*l*r-a*c*r-g*n*o+t*c*o+a*n*u-t*l*u)*P,e[7]=(a*y*r-x*l*r+x*n*o-t*y*o-a*n*z+t*l*z)*P,e[8]=G*P,e[9]=(g*p*r-x*m*r-g*i*z+t*m*z+x*i*u-t*p*u)*P,e[10]=(a*m*r-g*s*r+g*i*o-t*m*o-a*i*u+t*s*u)*P,e[11]=(x*s*r-a*p*r-x*i*o+t*p*o+a*i*z-t*s*z)*P,e[12]=v*P,e[13]=(x*m*n-g*p*n+g*i*y-t*m*y-x*i*c+t*p*c)*P,e[14]=(g*s*n-a*m*n-g*i*l+t*m*l+a*i*c-t*s*c)*P,e[15]=(a*p*n-x*s*n+x*i*l-t*p*l-a*i*y+t*s*y)*P,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,s=e.y,l=e.z,o=r*a,x=r*s;return this.set(o*a+i,o*s-n*l,o*l+n*s,0,o*s+n*l,x*s+i,x*l-n*a,0,o*l-n*s,x*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,o=r+r,x=a+a,p=s+s,y=r*o,z=r*x,g=r*p,m=a*x,c=a*p,u=s*p,f=l*o,_=l*x,G=l*p,v=i.x,S=i.y,P=i.z;return n[0]=(1-(m+u))*v,n[1]=(z+G)*v,n[2]=(g-_)*v,n[3]=0,n[4]=(z-G)*S,n[5]=(1-(y+u))*S,n[6]=(c+f)*S,n[7]=0,n[8]=(g+_)*P,n[9]=(c-f)*P,n[10]=(1-(y+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=u1.set(n[0],n[1],n[2]).length();const a=u1.set(n[4],n[5],n[6]).length(),s=u1.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],w2.copy(this);const o=1/r,x=1/a,p=1/s;return w2.elements[0]*=o,w2.elements[1]*=o,w2.elements[2]*=o,w2.elements[4]*=x,w2.elements[5]*=x,w2.elements[6]*=x,w2.elements[8]*=p,w2.elements[9]*=p,w2.elements[10]*=p,t.setFromRotationMatrix(w2),i.x=r,i.y=a,i.z=s,this}makePerspective(e,t,i,n,r,a){const s=this.elements,l=2*r/(t-e),o=2*r/(i-n),x=(t+e)/(t-e),p=(i+n)/(i-n),y=-(a+r)/(a-r),z=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=x,s[12]=0,s[1]=0,s[5]=o,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=y,s[14]=z,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,n,r,a){const s=this.elements,l=1/(t-e),o=1/(i-n),x=1/(a-r),p=(t+e)*l,y=(i+n)*o,z=(a+r)*x;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-p,s[1]=0,s[5]=2*o,s[9]=0,s[13]=-y,s[2]=0,s[6]=0,s[10]=-2*x,s[14]=-z,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const u1=new V,w2=new bt,On=new V(0,0,0),Fn=new V(1,1,1),c0=new V,V3=new V,i2=new V,m6=new bt,c6=new a1;class P3{constructor(e=0,t=0,i=0,n=P3.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],s=n[8],l=n[1],o=n[5],x=n[9],p=n[2],y=n[6],z=n[10];switch(t){case"XYZ":this._y=Math.asin(qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-x,z),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(y,o),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(s,z),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-p,z),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(y,z),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-x,o),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(s,z));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(y,o),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-x,z),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m6.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m6,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c6.setFromEuler(this),this.setFromQuaternion(c6,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}P3.DefaultOrder="XYZ";P3.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class e4{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nn=0;const z6=new V,g1=new a1,Y2=new bt,H3=new V,i3=new V,Un=new V,kn=new a1,u6=new V(1,0,0),g6=new V(0,1,0),f6=new V(0,0,1),Bn={type:"added"},h6={type:"removed"};class It extends l1{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nn++}),this.uuid=A3(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DefaultUp.clone();const e=new V,t=new P3,i=new a1,n=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new bt},normalMatrix:{value:new s2}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=It.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DefaultMatrixWorldAutoUpdate,this.layers=new e4,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return g1.setFromAxisAngle(e,t),this.quaternion.multiply(g1),this}rotateOnWorldAxis(e,t){return g1.setFromAxisAngle(e,t),this.quaternion.premultiply(g1),this}rotateX(e){return this.rotateOnAxis(u6,e)}rotateY(e){return this.rotateOnAxis(g6,e)}rotateZ(e){return this.rotateOnAxis(f6,e)}translateOnAxis(e,t){return z6.copy(e).applyQuaternion(this.quaternion),this.position.add(z6.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(u6,e)}translateY(e){return this.translateOnAxis(g6,e)}translateZ(e){return this.translateOnAxis(f6,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Y2.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?H3.copy(e):H3.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),i3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Y2.lookAt(i3,H3,this.up):Y2.lookAt(H3,i3,this.up),this.quaternion.setFromRotationMatrix(Y2),n&&(Y2.extractRotation(n.matrixWorld),g1.setFromRotationMatrix(Y2),this.quaternion.premultiply(g1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h6)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(h6)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Y2.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Y2.multiply(e.parent.matrixWorld)),e.applyMatrix4(Y2),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(i3,e,Un),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(i3,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const s=n[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let o=0,x=l.length;o<x;o++){const p=l[o];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,o=this.material.length;l<o;l++)s.push(r(e.materials,this.material[l]));n.material=s}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),o=a(e.textures),x=a(e.images),p=a(e.shapes),y=a(e.skeletons),z=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),x.length>0&&(i.images=x),p.length>0&&(i.shapes=p),y.length>0&&(i.skeletons=y),z.length>0&&(i.animations=z),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(s){const l=[];for(const o in s){const x=s[o];delete x.metadata,l.push(x)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}It.DefaultUp=new V(0,1,0);It.DefaultMatrixAutoUpdate=!0;It.DefaultMatrixWorldAutoUpdate=!0;const T2=new V,Z2=new V,$5=new V,K2=new V,f1=new V,h1=new V,_6=new V,ei=new V,ti=new V,ii=new V;class $2{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),T2.subVectors(e,t),n.cross(T2);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){T2.subVectors(n,t),Z2.subVectors(i,t),$5.subVectors(e,t);const a=T2.dot(T2),s=T2.dot(Z2),l=T2.dot($5),o=Z2.dot(Z2),x=Z2.dot($5),p=a*o-s*s;if(p===0)return r.set(-2,-1,-1);const y=1/p,z=(o*l-s*x)*y,g=(a*x-s*l)*y;return r.set(1-z-g,g,z)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,K2),K2.x>=0&&K2.y>=0&&K2.x+K2.y<=1}static getUV(e,t,i,n,r,a,s,l){return this.getBarycoord(e,t,i,n,K2),l.set(0,0),l.addScaledVector(r,K2.x),l.addScaledVector(a,K2.y),l.addScaledVector(s,K2.z),l}static isFrontFacing(e,t,i,n){return T2.subVectors(i,t),Z2.subVectors(e,t),T2.cross(Z2).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return T2.subVectors(this.c,this.b),Z2.subVectors(this.a,this.b),T2.cross(Z2).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $2.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $2.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return $2.getUV(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return $2.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $2.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,s;f1.subVectors(n,i),h1.subVectors(r,i),ei.subVectors(e,i);const l=f1.dot(ei),o=h1.dot(ei);if(l<=0&&o<=0)return t.copy(i);ti.subVectors(e,n);const x=f1.dot(ti),p=h1.dot(ti);if(x>=0&&p<=x)return t.copy(n);const y=l*p-x*o;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(f1,a);ii.subVectors(e,r);const z=f1.dot(ii),g=h1.dot(ii);if(g>=0&&z<=g)return t.copy(r);const m=z*o-l*g;if(m<=0&&o>=0&&g<=0)return s=o/(o-g),t.copy(i).addScaledVector(h1,s);const c=x*g-z*p;if(c<=0&&p-x>=0&&z-g>=0)return _6.subVectors(r,n),s=(p-x)/(p-x+(z-g)),t.copy(n).addScaledVector(_6,s);const u=1/(c+m+y);return a=m*u,s=y*u,t.copy(i).addScaledVector(f1,a).addScaledVector(h1,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vn=0;class G5 extends l1{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vn++}),this.uuid=A3(),this.name="",this.type="Material",this.blending=R1,this.side=r1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=U7,this.blendDst=k7,this.blendEquation=E1,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=U5,this.stencilZFail=U5,this.stencilZPass=U5,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==R1&&(i.blending=this.blending),this.side!==r1&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class J7 extends G5{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=B7,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new V,W3=new De;class C2{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=l6,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)W3.fromBufferAttribute(this,t),W3.applyMatrix3(e),this.setXY(t,W3.x,W3.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=I3(t,this.array)),t}setX(e,t){return this.normalized&&(t=t2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=I3(t,this.array)),t}setY(e,t){return this.normalized&&(t=t2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=I3(t,this.array)),t}setZ(e,t){return this.normalized&&(t=t2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=I3(t,this.array)),t}setW(e,t){return this.normalized&&(t=t2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=t2(t,this.array),i=t2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=t2(t,this.array),i=t2(i,this.array),n=t2(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=t2(t,this.array),i=t2(i,this.array),n=t2(n,this.array),r=t2(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l6&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Q7 extends C2{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $7 extends C2{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class i0 extends C2{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hn=0;const c2=new bt,ni=new It,_1=new V,n2=new C3,n3=new C3,At=new V;class x0 extends l1{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hn++}),this.uuid=A3(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j7(e)?$7:Q7)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new s2().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return c2.makeRotationFromQuaternion(e),this.applyMatrix4(c2),this}rotateX(e){return c2.makeRotationX(e),this.applyMatrix4(c2),this}rotateY(e){return c2.makeRotationY(e),this.applyMatrix4(c2),this}rotateZ(e){return c2.makeRotationZ(e),this.applyMatrix4(c2),this}translate(e,t,i){return c2.makeTranslation(e,t,i),this.applyMatrix4(c2),this}scale(e,t,i){return c2.makeScale(e,t,i),this.applyMatrix4(c2),this}lookAt(e){return ni.lookAt(e),ni.updateMatrix(),this.applyMatrix4(ni.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_1).negate(),this.translate(_1.x,_1.y,_1.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new i0(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new C3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];n2.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,n2.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,n2.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(n2.min),this.boundingBox.expandByPoint(n2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(n2.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];n3.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(n2.min,n3.min),n2.expandByPoint(At),At.addVectors(n2.max,n3.max),n2.expandByPoint(At)):(n2.expandByPoint(n3.min),n2.expandByPoint(n3.max))}n2.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let o=0,x=s.count;o<x;o++)At.fromBufferAttribute(s,o),l&&(_1.fromBufferAttribute(e,o),At.add(_1)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new C2(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,o=[],x=[];for(let T=0;T<s;T++)o[T]=new V,x[T]=new V;const p=new V,y=new V,z=new V,g=new De,m=new De,c=new De,u=new V,f=new V;function _(T,A,F){p.fromArray(n,T*3),y.fromArray(n,A*3),z.fromArray(n,F*3),g.fromArray(a,T*2),m.fromArray(a,A*2),c.fromArray(a,F*2),y.sub(p),z.sub(p),m.sub(g),c.sub(g);const C=1/(m.x*c.y-c.x*m.y);isFinite(C)&&(u.copy(y).multiplyScalar(c.y).addScaledVector(z,-m.y).multiplyScalar(C),f.copy(z).multiplyScalar(m.x).addScaledVector(y,-c.x).multiplyScalar(C),o[T].add(u),o[A].add(u),o[F].add(u),x[T].add(f),x[A].add(f),x[F].add(f))}let G=this.groups;G.length===0&&(G=[{start:0,count:i.length}]);for(let T=0,A=G.length;T<A;++T){const F=G[T],C=F.start,R=F.count;for(let B=C,j=C+R;B<j;B+=3)_(i[B+0],i[B+1],i[B+2])}const v=new V,S=new V,P=new V,h=new V;function b(T){P.fromArray(r,T*3),h.copy(P);const A=o[T];v.copy(A),v.sub(P.multiplyScalar(P.dot(A))).normalize(),S.crossVectors(h,A);const C=S.dot(x[T])<0?-1:1;l[T*4]=v.x,l[T*4+1]=v.y,l[T*4+2]=v.z,l[T*4+3]=C}for(let T=0,A=G.length;T<A;++T){const F=G[T],C=F.start,R=F.count;for(let B=C,j=C+R;B<j;B+=3)b(i[B+0]),b(i[B+1]),b(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new C2(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let y=0,z=i.count;y<z;y++)i.setXYZ(y,0,0,0);const n=new V,r=new V,a=new V,s=new V,l=new V,o=new V,x=new V,p=new V;if(e)for(let y=0,z=e.count;y<z;y+=3){const g=e.getX(y+0),m=e.getX(y+1),c=e.getX(y+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,c),x.subVectors(a,r),p.subVectors(n,r),x.cross(p),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.fromBufferAttribute(i,c),s.add(x),l.add(x),o.add(x),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(c,o.x,o.y,o.z)}else for(let y=0,z=t.count;y<z;y+=3)n.fromBufferAttribute(t,y+0),r.fromBufferAttribute(t,y+1),a.fromBufferAttribute(t,y+2),x.subVectors(a,r),p.subVectors(n,r),x.cross(p),i.setXYZ(y+0,x.x,x.y,x.z),i.setXYZ(y+1,x.x,x.y,x.z),i.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const o=s.array,x=s.itemSize,p=s.normalized,y=new o.constructor(l.length*x);let z=0,g=0;for(let m=0,c=l.length;m<c;m++){s.isInterleavedBufferAttribute?z=l[m]*s.data.stride+s.offset:z=l[m]*x;for(let u=0;u<x;u++)y[g++]=o[z++]}return new C2(y,x,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new x0,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],o=e(l,i);t.setAttribute(s,o)}const r=this.morphAttributes;for(const s in r){const l=[],o=r[s];for(let x=0,p=o.length;x<p;x++){const y=o[x],z=e(y,i);l.push(z)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const o=a[s];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const o in l)l[o]!==void 0&&(e[o]=l[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const o=i[l];e.data.attributes[l]=o.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const o=this.morphAttributes[l],x=[];for(let p=0,y=o.length;p<y;p++){const z=o[p];x.push(z.toJSON(e.data))}x.length>0&&(n[l]=x,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const o in n){const x=n[o];this.setAttribute(o,x.clone(t))}const r=e.morphAttributes;for(const o in r){const x=[],p=r[o];for(let y=0,z=p.length;y<z;y++)x.push(p[y].clone(t));this.morphAttributes[o]=x}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,x=a.length;o<x;o++){const p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const G6=new bt,G1=new K7,ri=new $i,r3=new V,d3=new V,a3=new V,di=new V,j3=new V,X3=new De,q3=new De,Y3=new De,ai=new V,Z3=new V;class O2 extends It{constructor(e=new x0,t=new J7){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(r&&s){j3.set(0,0,0);for(let l=0,o=r.length;l<o;l++){const x=s[l],p=r[l];x!==0&&(di.fromBufferAttribute(p,e),a?j3.addScaledVector(di,x):j3.addScaledVector(di.sub(t),x))}t.add(j3)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ri.copy(i.boundingSphere),ri.applyMatrix4(r),e.ray.intersectsSphere(ri)===!1)||(G6.copy(r).invert(),G1.copy(e.ray).applyMatrix4(G6),i.boundingBox!==null&&G1.intersectsBox(i.boundingBox)===!1))return;let a;const s=i.index,l=i.attributes.position,o=i.attributes.uv,x=i.attributes.uv2,p=i.groups,y=i.drawRange;if(s!==null)if(Array.isArray(n))for(let z=0,g=p.length;z<g;z++){const m=p[z],c=n[m.materialIndex],u=Math.max(m.start,y.start),f=Math.min(s.count,Math.min(m.start+m.count,y.start+y.count));for(let _=u,G=f;_<G;_+=3){const v=s.getX(_),S=s.getX(_+1),P=s.getX(_+2);a=K3(this,c,e,G1,o,x,v,S,P),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const z=Math.max(0,y.start),g=Math.min(s.count,y.start+y.count);for(let m=z,c=g;m<c;m+=3){const u=s.getX(m),f=s.getX(m+1),_=s.getX(m+2);a=K3(this,n,e,G1,o,x,u,f,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let z=0,g=p.length;z<g;z++){const m=p[z],c=n[m.materialIndex],u=Math.max(m.start,y.start),f=Math.min(l.count,Math.min(m.start+m.count,y.start+y.count));for(let _=u,G=f;_<G;_+=3){const v=_,S=_+1,P=_+2;a=K3(this,c,e,G1,o,x,v,S,P),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const z=Math.max(0,y.start),g=Math.min(l.count,y.start+y.count);for(let m=z,c=g;m<c;m+=3){const u=m,f=m+1,_=m+2;a=K3(this,n,e,G1,o,x,u,f,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Wn(d,e,t,i,n,r,a,s){let l;if(e.side===b2?l=i.intersectTriangle(a,r,n,!0,s):l=i.intersectTriangle(n,r,a,e.side===r1,s),l===null)return null;Z3.copy(s),Z3.applyMatrix4(d.matrixWorld);const o=t.ray.origin.distanceTo(Z3);return o<t.near||o>t.far?null:{distance:o,point:Z3.clone(),object:d}}function K3(d,e,t,i,n,r,a,s,l){d.getVertexPosition(a,r3),d.getVertexPosition(s,d3),d.getVertexPosition(l,a3);const o=Wn(d,e,t,i,r3,d3,a3,ai);if(o){n&&(X3.fromBufferAttribute(n,a),q3.fromBufferAttribute(n,s),Y3.fromBufferAttribute(n,l),o.uv=$2.getUV(ai,r3,d3,a3,X3,q3,Y3,new De)),r&&(X3.fromBufferAttribute(r,a),q3.fromBufferAttribute(r,s),Y3.fromBufferAttribute(r,l),o.uv2=$2.getUV(ai,r3,d3,a3,X3,q3,Y3,new De));const x={a,b:s,c:l,normal:new V,materialIndex:0};$2.getNormal(r3,d3,a3,x.normal),o.face=x}return o}class D3 extends x0{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const s=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],o=[],x=[],p=[];let y=0,z=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new i0(o,3)),this.setAttribute("normal",new i0(x,3)),this.setAttribute("uv",new i0(p,2));function g(m,c,u,f,_,G,v,S,P,h,b){const T=G/P,A=v/h,F=G/2,C=v/2,R=S/2,B=P+1,j=h+1;let Z=0,H=0;const Q=new V;for(let J=0;J<j;J++){const L=J*A-C;for(let W=0;W<B;W++){const re=W*T-F;Q[m]=re*f,Q[c]=L*_,Q[u]=R,o.push(Q.x,Q.y,Q.z),Q[m]=0,Q[c]=0,Q[u]=S>0?1:-1,x.push(Q.x,Q.y,Q.z),p.push(W/P),p.push(1-J/h),Z+=1}}for(let J=0;J<h;J++)for(let L=0;L<P;L++){const W=y+L+B*J,re=y+L+B*(J+1),$=y+(L+1)+B*(J+1),ne=y+(L+1)+B*J;l.push(W,re,ne),l.push(re,$,ne),H+=6}s.addGroup(z,H,b),z+=H,y+=Z}}static fromJSON(e){return new D3(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function W1(d){const e={};for(const t in d){e[t]={};for(const i in d[t]){const n=d[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Wt(d){const e={};for(let t=0;t<d.length;t++){const i=W1(d[t]);for(const n in i)e[n]=i[n]}return e}function jn(d){const e=[];for(let t=0;t<d.length;t++)e.push(d[t].clone());return e}function e8(d){return d.getRenderTarget()===null&&d.outputEncoding===Ke?L2:_3}const t8={clone:W1,merge:Wt};var Xn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class B2 extends G5{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xn,this.fragmentShader=qn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=W1(e.uniforms),this.uniformsGroups=jn(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class t4 extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let d2=class extends t4{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=x6*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(k5*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return x6*2*Math.atan(Math.tan(k5*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(k5*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,o=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/o,n*=a.width/l,i*=a.height/o}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const v1=-90,b1=1;class Yn extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new d2(v1,b1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new d2(v1,b1,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new d2(v1,b1,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new d2(v1,b1,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new d2(v1,b1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const o=new d2(v1,b1,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,-1),this.add(o)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,a,s,l,o]=this.children,x=e.getRenderTarget(),p=e.toneMapping,y=e.xr.enabled;e.toneMapping=N2,e.xr.enabled=!1;const z=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=z,e.setRenderTarget(i,5),e.render(t,o),e.setRenderTarget(x),e.toneMapping=p,e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class i8 extends Rt{constructor(e,t,i,n,r,a,s,l,o,x){e=e!==void 0?e:[],t=t!==void 0?t:B1,super(e,t,i,n,r,a,s,l,o,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zn extends E0{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new i8(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:g2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new D3(5,5,5),r=new B2({name:"CubemapFromEquirect",uniforms:W1(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:b2,blending:_0});r.uniforms.tEquirect.value=t;const a=new O2(n,r),s=t.minFilter;return t.minFilter===f3&&(t.minFilter=g2),new Yn(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const si=new V,Kn=new V,Jn=new s2;class B0{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=si.subVectors(i,t).cross(Kn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(si),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jn.getNormalMatrix(e),n=this.coplanarPoint(si).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const M1=new $i,J3=new V;class i4{constructor(e=new B0,t=new B0,i=new B0,n=new B0,r=new B0,a=new B0){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],a=i[2],s=i[3],l=i[4],o=i[5],x=i[6],p=i[7],y=i[8],z=i[9],g=i[10],m=i[11],c=i[12],u=i[13],f=i[14],_=i[15];return t[0].setComponents(s-n,p-l,m-y,_-c).normalize(),t[1].setComponents(s+n,p+l,m+y,_+c).normalize(),t[2].setComponents(s+r,p+o,m+z,_+u).normalize(),t[3].setComponents(s-r,p-o,m-z,_-u).normalize(),t[4].setComponents(s-a,p-x,m-g,_-f).normalize(),t[5].setComponents(s+a,p+x,m+g,_+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),M1.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(M1)}intersectsSprite(e){return M1.center.set(0,0,0),M1.radius=.7071067811865476,M1.applyMatrix4(e.matrixWorld),this.intersectsSphere(M1)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(J3.x=n.normal.x>0?e.max.x:e.min.x,J3.y=n.normal.y>0?e.max.y:e.min.y,J3.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(J3)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function n8(){let d=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=d.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=d.requestAnimationFrame(n),e=!0)},stop:function(){d.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){d=r}}}function Qn(d,e){const t=e.isWebGL2,i=new WeakMap;function n(o,x){const p=o.array,y=o.usage,z=d.createBuffer();d.bindBuffer(x,z),d.bufferData(x,p,y),o.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(o.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:z,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:o.version}}function r(o,x,p){const y=x.array,z=x.updateRange;d.bindBuffer(p,o),z.count===-1?d.bufferSubData(p,0,y):(t?d.bufferSubData(p,z.offset*y.BYTES_PER_ELEMENT,y,z.offset,z.count):d.bufferSubData(p,z.offset*y.BYTES_PER_ELEMENT,y.subarray(z.offset,z.offset+z.count)),z.count=-1),x.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),i.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const x=i.get(o);x&&(d.deleteBuffer(x.buffer),i.delete(o))}function l(o,x){if(o.isGLBufferAttribute){const y=i.get(o);(!y||y.version<o.version)&&i.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const p=i.get(o);p===void 0?i.set(o,n(o,x)):p.version<o.version&&(r(p.buffer,o,x),p.version=o.version)}return{get:a,remove:s,update:l}}class v5 extends x0{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,s=Math.floor(i),l=Math.floor(n),o=s+1,x=l+1,p=e/s,y=t/l,z=[],g=[],m=[],c=[];for(let u=0;u<x;u++){const f=u*y-a;for(let _=0;_<o;_++){const G=_*p-r;g.push(G,-f,0),m.push(0,0,1),c.push(_/s),c.push(1-u/l)}}for(let u=0;u<l;u++)for(let f=0;f<s;f++){const _=f+o*u,G=f+o*(u+1),v=f+1+o*(u+1),S=f+1+o*u;z.push(_,G,S),z.push(G,v,S)}this.setIndex(z),this.setAttribute("position",new i0(g,3)),this.setAttribute("normal",new i0(m,3)),this.setAttribute("uv",new i0(c,2))}static fromJSON(e){return new v5(e.width,e.height,e.widthSegments,e.heightSegments)}}var $n=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,er=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tr=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ir=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nr=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dr="vec3 transformed = vec3( position );",ar=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sr=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,lr=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,or=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xr=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,yr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ur=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fr=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hr=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,_r=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,br=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mr=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sr="gl_FragColor = linearToOutputTexel( gl_FragColor );",wr=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tr=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Er=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ar=`#ifdef USE_ENVMAP
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
#endif`,Cr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pr=`#ifdef USE_ENVMAP
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
#endif`,Dr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ir=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Or=`#ifdef USE_GRADIENTMAP
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
}`,Fr=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ur=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kr=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Br=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Vr=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wr=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qr=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Zr=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$r=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,md=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ea=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ta=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ia=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,na=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ra=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,da=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,aa=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sa=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,la=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oa=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xa=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ya=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pa=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ma=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ca=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,za=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ua=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ga=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fa=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ha=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_a=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ga=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,va=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ba=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ma=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sa=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,wa=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ta=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ea=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Aa=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ca=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:$n,alphamap_pars_fragment:er,alphatest_fragment:tr,alphatest_pars_fragment:ir,aomap_fragment:nr,aomap_pars_fragment:rr,begin_vertex:dr,beginnormal_vertex:ar,bsdfs:sr,iridescence_fragment:lr,bumpmap_pars_fragment:or,clipping_planes_fragment:xr,clipping_planes_pars_fragment:yr,clipping_planes_pars_vertex:pr,clipping_planes_vertex:mr,color_fragment:cr,color_pars_fragment:zr,color_pars_vertex:ur,color_vertex:gr,common:fr,cube_uv_reflection_fragment:hr,defaultnormal_vertex:_r,displacementmap_pars_vertex:Gr,displacementmap_vertex:vr,emissivemap_fragment:br,emissivemap_pars_fragment:Mr,encodings_fragment:Sr,encodings_pars_fragment:wr,envmap_fragment:Tr,envmap_common_pars_fragment:Er,envmap_pars_fragment:Ar,envmap_pars_vertex:Cr,envmap_physical_pars_fragment:Vr,envmap_vertex:Pr,fog_vertex:Dr,fog_pars_vertex:Lr,fog_fragment:Rr,fog_pars_fragment:Ir,gradientmap_pars_fragment:Or,lightmap_fragment:Fr,lightmap_pars_fragment:Nr,lights_lambert_fragment:Ur,lights_lambert_pars_fragment:kr,lights_pars_begin:Br,lights_toon_fragment:Hr,lights_toon_pars_fragment:Wr,lights_phong_fragment:jr,lights_phong_pars_fragment:Xr,lights_physical_fragment:qr,lights_physical_pars_fragment:Yr,lights_fragment_begin:Zr,lights_fragment_maps:Kr,lights_fragment_end:Jr,logdepthbuf_fragment:Qr,logdepthbuf_pars_fragment:$r,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:id,map_pars_fragment:nd,map_particle_fragment:rd,map_particle_pars_fragment:dd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:sd,morphcolor_vertex:ld,morphnormal_vertex:od,morphtarget_pars_vertex:xd,morphtarget_vertex:yd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:cd,normal_pars_vertex:zd,normal_vertex:ud,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:Gd,output_fragment:vd,packing:bd,premultiplied_alpha_fragment:Md,project_vertex:Sd,dithering_fragment:wd,dithering_pars_fragment:Td,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ld,skinbase_vertex:Rd,skinning_pars_vertex:Id,skinning_vertex:Od,skinnormal_vertex:Fd,specularmap_fragment:Nd,specularmap_pars_fragment:Ud,tonemapping_fragment:kd,tonemapping_pars_fragment:Bd,transmission_fragment:Vd,transmission_pars_fragment:Hd,uv_pars_fragment:Wd,uv_pars_vertex:jd,uv_vertex:Xd,uv2_pars_fragment:qd,uv2_pars_vertex:Yd,uv2_vertex:Zd,worldpos_vertex:Kd,background_vert:Jd,background_frag:Qd,backgroundCube_vert:$d,backgroundCube_frag:ea,cube_vert:ta,cube_frag:ia,depth_vert:na,depth_frag:ra,distanceRGBA_vert:da,distanceRGBA_frag:aa,equirect_vert:sa,equirect_frag:la,linedashed_vert:oa,linedashed_frag:xa,meshbasic_vert:ya,meshbasic_frag:pa,meshlambert_vert:ma,meshlambert_frag:ca,meshmatcap_vert:za,meshmatcap_frag:ua,meshnormal_vert:ga,meshnormal_frag:fa,meshphong_vert:ha,meshphong_frag:_a,meshphysical_vert:Ga,meshphysical_frag:va,meshtoon_vert:ba,meshtoon_frag:Ma,points_vert:Sa,points_frag:wa,shadow_vert:Ta,shadow_frag:Ea,sprite_vert:Aa,sprite_frag:Ca},ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new s2},uv2Transform:{value:new s2},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new s2}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new s2}}},R2={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new s2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};R2.physical={uniforms:Wt([R2.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Q3={r:0,b:0,g:0};function Pa(d,e,t,i,n,r,a){const s=new rt(0);let l=r===!0?0:1,o,x,p=null,y=0,z=null;function g(c,u){let f=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_));const G=d.xr,v=G.getSession&&G.getSession();v&&v.environmentBlendMode==="additive"&&(_=null),_===null?m(s,l):_&&_.isColor&&(m(_,1),f=!0),(d.autoClear||f)&&d.clear(d.autoClearColor,d.autoClearDepth,d.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_5)?(x===void 0&&(x=new O2(new D3(1,1,1),new B2({name:"BackgroundCubeMaterial",uniforms:W1(R2.backgroundCube.uniforms),vertexShader:R2.backgroundCube.vertexShader,fragmentShader:R2.backgroundCube.fragmentShader,side:b2,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(S,P,h){this.matrixWorld.copyPosition(h.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(x)),x.material.uniforms.envMap.value=_,x.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,x.material.toneMapped=_.encoding!==Ke,(p!==_||y!==_.version||z!==d.toneMapping)&&(x.material.needsUpdate=!0,p=_,y=_.version,z=d.toneMapping),x.layers.enableAll(),c.unshift(x,x.geometry,x.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new O2(new v5(2,2),new B2({name:"BackgroundMaterial",uniforms:W1(R2.background.uniforms),vertexShader:R2.background.vertexShader,fragmentShader:R2.background.fragmentShader,side:r1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,o.material.toneMapped=_.encoding!==Ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||y!==_.version||z!==d.toneMapping)&&(o.material.needsUpdate=!0,p=_,y=_.version,z=d.toneMapping),o.layers.enableAll(),c.unshift(o,o.geometry,o.material,0,0,null))}function m(c,u){c.getRGB(Q3,e8(d)),i.buffers.color.setClear(Q3.r,Q3.g,Q3.b,u,a)}return{getClearColor:function(){return s},setClearColor:function(c,u=1){s.set(c),l=u,m(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(c){l=c,m(s,l)},render:g}}function Da(d,e,t,i){const n=d.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,s={},l=c(null);let o=l,x=!1;function p(R,B,j,Z,H){let Q=!1;if(a){const J=m(Z,j,B);o!==J&&(o=J,z(o.object)),Q=u(R,Z,j,H),Q&&f(R,Z,j,H)}else{const J=B.wireframe===!0;(o.geometry!==Z.id||o.program!==j.id||o.wireframe!==J)&&(o.geometry=Z.id,o.program=j.id,o.wireframe=J,Q=!0)}H!==null&&t.update(H,34963),(Q||x)&&(x=!1,h(R,B,j,Z),H!==null&&d.bindBuffer(34963,t.get(H).buffer))}function y(){return i.isWebGL2?d.createVertexArray():r.createVertexArrayOES()}function z(R){return i.isWebGL2?d.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?d.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function m(R,B,j){const Z=j.wireframe===!0;let H=s[R.id];H===void 0&&(H={},s[R.id]=H);let Q=H[B.id];Q===void 0&&(Q={},H[B.id]=Q);let J=Q[Z];return J===void 0&&(J=c(y()),Q[Z]=J),J}function c(R){const B=[],j=[],Z=[];for(let H=0;H<n;H++)B[H]=0,j[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:Z,object:R,attributes:{},index:null}}function u(R,B,j,Z){const H=o.attributes,Q=B.attributes;let J=0;const L=j.getAttributes();for(const W in L)if(L[W].location>=0){const $=H[W];let ne=Q[W];if(ne===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;J++}return o.attributesNum!==J||o.index!==Z}function f(R,B,j,Z){const H={},Q=B.attributes;let J=0;const L=j.getAttributes();for(const W in L)if(L[W].location>=0){let $=Q[W];$===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),H[W]=ne,J++}o.attributes=H,o.attributesNum=J,o.index=Z}function _(){const R=o.newAttributes;for(let B=0,j=R.length;B<j;B++)R[B]=0}function G(R){v(R,0)}function v(R,B){const j=o.newAttributes,Z=o.enabledAttributes,H=o.attributeDivisors;j[R]=1,Z[R]===0&&(d.enableVertexAttribArray(R),Z[R]=1),H[R]!==B&&((i.isWebGL2?d:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),H[R]=B)}function S(){const R=o.newAttributes,B=o.enabledAttributes;for(let j=0,Z=B.length;j<Z;j++)B[j]!==R[j]&&(d.disableVertexAttribArray(j),B[j]=0)}function P(R,B,j,Z,H,Q){i.isWebGL2===!0&&(j===5124||j===5125)?d.vertexAttribIPointer(R,B,j,H,Q):d.vertexAttribPointer(R,B,j,Z,H,Q)}function h(R,B,j,Z){if(i.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=Z.attributes,Q=j.getAttributes(),J=B.defaultAttributeValues;for(const L in Q){const W=Q[L];if(W.location>=0){let re=H[L];if(re===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const $=re.normalized,ne=re.itemSize,O=t.get(re);if(O===void 0)continue;const xe=O.buffer,ue=O.type,be=O.bytesPerElement;if(re.isInterleavedBufferAttribute){const ce=re.data,Ve=ce.stride,Ee=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Me=0;Me<W.locationSize;Me++)v(W.location+Me,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Me=0;Me<W.locationSize;Me++)G(W.location+Me);d.bindBuffer(34962,xe);for(let Me=0;Me<W.locationSize;Me++)P(W.location+Me,ne/W.locationSize,ue,$,Ve*be,(Ee+ne/W.locationSize*Me)*be)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)v(W.location+ce,re.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<W.locationSize;ce++)G(W.location+ce);d.bindBuffer(34962,xe);for(let ce=0;ce<W.locationSize;ce++)P(W.location+ce,ne/W.locationSize,ue,$,ne*be,ne/W.locationSize*ce*be)}}else if(J!==void 0){const $=J[L];if($!==void 0)switch($.length){case 2:d.vertexAttrib2fv(W.location,$);break;case 3:d.vertexAttrib3fv(W.location,$);break;case 4:d.vertexAttrib4fv(W.location,$);break;default:d.vertexAttrib1fv(W.location,$)}}}}S()}function b(){F();for(const R in s){const B=s[R];for(const j in B){const Z=B[j];for(const H in Z)g(Z[H].object),delete Z[H];delete B[j]}delete s[R]}}function T(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const j in B){const Z=B[j];for(const H in Z)g(Z[H].object),delete Z[H];delete B[j]}delete s[R.id]}function A(R){for(const B in s){const j=s[B];if(j[R.id]===void 0)continue;const Z=j[R.id];for(const H in Z)g(Z[H].object),delete Z[H];delete j[R.id]}}function F(){C(),x=!0,o!==l&&(o=l,z(o.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:F,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:G,disableUnusedAttributes:S}}function La(d,e,t,i){const n=i.isWebGL2;let r;function a(o){r=o}function s(o,x){d.drawArrays(r,o,x),t.update(x,r,1)}function l(o,x,p){if(p===0)return;let y,z;if(n)y=d,z="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),z="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[z](r,o,x,p),t.update(x,r,p)}this.setMode=a,this.render=s,this.renderInstances=l}function Ra(d,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=d.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(d.getShaderPrecisionFormat(35633,36338).precision>0&&d.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&d.getShaderPrecisionFormat(35633,36337).precision>0&&d.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&d instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&d instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const o=a||e.has("WEBGL_draw_buffers"),x=t.logarithmicDepthBuffer===!0,p=d.getParameter(34930),y=d.getParameter(35660),z=d.getParameter(3379),g=d.getParameter(34076),m=d.getParameter(34921),c=d.getParameter(36347),u=d.getParameter(36348),f=d.getParameter(36349),_=y>0,G=a||e.has("OES_texture_float"),v=_&&G,S=a?d.getParameter(36183):0;return{isWebGL2:a,drawBuffers:o,getMaxAnisotropy:n,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:x,maxTextures:p,maxVertexTextures:y,maxTextureSize:z,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:c,maxVaryings:u,maxFragmentUniforms:f,vertexTextures:_,floatFragmentTextures:G,floatVertexTextures:v,maxSamples:S}}function Ia(d){const e=this;let t=null,i=0,n=!1,r=!1;const a=new B0,s=new s2,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,y,z){const g=p.length!==0||y||i!==0||n;return n=y,t=x(p,z,0),i=p.length,g},this.beginShadows=function(){r=!0,x(null)},this.endShadows=function(){r=!1,o()},this.setState=function(p,y,z){const g=p.clippingPlanes,m=p.clipIntersection,c=p.clipShadows,u=d.get(p);if(!n||g===null||g.length===0||r&&!c)r?x(null):o();else{const f=r?0:i,_=f*4;let G=u.clippingState||null;l.value=G,G=x(g,y,_,z);for(let v=0;v!==_;++v)G[v]=t[v];u.clippingState=G,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=f}};function o(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function x(p,y,z,g){const m=p!==null?p.length:0;let c=null;if(m!==0){if(c=l.value,g!==!0||c===null){const u=z+m*4,f=y.matrixWorldInverse;s.getNormalMatrix(f),(c===null||c.length<u)&&(c=new Float32Array(u));for(let _=0,G=z;_!==m;++_,G+=4)a.copy(p[_]).applyMatrix4(f,s),a.normal.toArray(c,G),c[G+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,c}}function Oa(d){let e=new WeakMap;function t(a,s){return s===Ei?a.mapping=B1:s===Ai&&(a.mapping=V1),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ei||s===Ai)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const o=new Zn(l.height/2);return o.fromEquirectangularTexture(d,a),e.set(a,o),a.addEventListener("dispose",n),t(o.texture,a.mapping)}else return null}}return a}function n(a){const s=a.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class r8 extends t4{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,s-=x*this.view.offsetY,l=s-x*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const P1=4,v6=[.125,.215,.35,.446,.526,.582],X0=20,li=new r8,b6=new rt;let oi=null;const V0=(1+Math.sqrt(5))/2,S1=1/V0,M6=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,V0,S1),new V(0,V0,-S1),new V(S1,0,V0),new V(-S1,0,V0),new V(V0,S1,0),new V(-V0,S1,0)];class S6{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){oi=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E6(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T6(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oi),e.scissorTest=!1,$3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===B1||e.mapping===V1?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oi=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:g2,minFilter:g2,generateMipmaps:!1,type:h3,format:A2,encoding:T0,depthBuffer:!1},n=w6(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w6(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fa(r)),this._blurMaterial=Na(r,e,t)}return n}_compileMaterial(e){const t=new O2(this._lodPlanes[0],e);this._renderer.compile(t,li)}_sceneToCubeUV(e,t,i,n){const s=new d2(90,1,t,i),l=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],x=this._renderer,p=x.autoClear,y=x.toneMapping;x.getClearColor(b6),x.toneMapping=N2,x.autoClear=!1;const z=new J7({name:"PMREM.Background",side:b2,depthWrite:!1,depthTest:!1}),g=new O2(new D3,z);let m=!1;const c=e.background;c?c.isColor&&(z.color.copy(c),e.background=null,m=!0):(z.color.copy(b6),m=!0);for(let u=0;u<6;u++){const f=u%3;f===0?(s.up.set(0,l[u],0),s.lookAt(o[u],0,0)):f===1?(s.up.set(0,0,l[u]),s.lookAt(0,o[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,o[u]));const _=this._cubeSize;$3(n,f*_,u>2?_:0,_,_),x.setRenderTarget(n),m&&x.render(g,s),x.render(e,s)}g.geometry.dispose(),g.material.dispose(),x.toneMapping=y,x.autoClear=p,e.background=c}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===B1||e.mapping===V1;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=E6()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T6());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new O2(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;$3(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,li)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=M6[(n-1)%M6.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,s){const l=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,p=new O2(this._lodPlanes[n],o),y=o.uniforms,z=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*z):2*Math.PI/(2*X0-1),m=r/g,c=isFinite(r)?1+Math.floor(x*m):X0;c>X0&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${X0}`);const u=[];let f=0;for(let P=0;P<X0;++P){const h=P/m,b=Math.exp(-h*h/2);u.push(b),P===0?f+=b:P<c&&(f+=2*b)}for(let P=0;P<u.length;P++)u[P]=u[P]/f;y.envMap.value=e.texture,y.samples.value=c,y.weights.value=u,y.latitudinal.value=a==="latitudinal",s&&(y.poleAxis.value=s);const{_lodMax:_}=this;y.dTheta.value=g,y.mipInt.value=_-i;const G=this._sizeLods[n],v=3*G*(n>_-P1?n-_+P1:0),S=4*(this._cubeSize-G);$3(t,v,S,3*G,2*G),l.setRenderTarget(t),l.render(p,li)}}function Fa(d){const e=[],t=[],i=[];let n=d;const r=d-P1+1+v6.length;for(let a=0;a<r;a++){const s=Math.pow(2,n);t.push(s);let l=1/s;a>d-P1?l=v6[a-d+P1-1]:a===0&&(l=0),i.push(l);const o=1/(s-2),x=-o,p=1+o,y=[x,x,p,x,p,p,x,x,p,p,x,p],z=6,g=6,m=3,c=2,u=1,f=new Float32Array(m*g*z),_=new Float32Array(c*g*z),G=new Float32Array(u*g*z);for(let S=0;S<z;S++){const P=S%3*2/3-1,h=S>2?0:-1,b=[P,h,0,P+2/3,h,0,P+2/3,h+1,0,P,h,0,P+2/3,h+1,0,P,h+1,0];f.set(b,m*g*S),_.set(y,c*g*S);const T=[S,S,S,S,S,S];G.set(T,u*g*S)}const v=new x0;v.setAttribute("position",new C2(f,m)),v.setAttribute("uv",new C2(_,c)),v.setAttribute("faceIndex",new C2(G,u)),e.push(v),n>P1&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function w6(d,e,t){const i=new E0(d,e,t);return i.texture.mapping=_5,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $3(d,e,t,i,n){d.viewport.set(e,t,i,n),d.scissor.set(e,t,i,n)}function Na(d,e,t){const i=new Float32Array(X0),n=new V(0,1,0);return new B2({name:"SphericalGaussianBlur",defines:{n:X0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${d}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:n4(),fragmentShader:`

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
		`,blending:_0,depthTest:!1,depthWrite:!1})}function T6(){return new B2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:n4(),fragmentShader:`

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
		`,blending:_0,depthTest:!1,depthWrite:!1})}function E6(){return new B2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:n4(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_0,depthTest:!1,depthWrite:!1})}function n4(){return`

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
	`}function Ua(d){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,o=l===Ei||l===Ai,x=l===B1||l===V1;if(o||x)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new S6(d)),p=o?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(o&&p&&p.height>0||x&&p&&n(p)){t===null&&(t=new S6(d));const y=o?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,y),s.addEventListener("dispose",r),y.texture}else return null}}}return s}function n(s){let l=0;const o=6;for(let x=0;x<o;x++)s[x]!==void 0&&l++;return l===o}function r(s){const l=s.target;l.removeEventListener("dispose",r);const o=e.get(l);o!==void 0&&(e.delete(l),o.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ka(d){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=d.getExtension("WEBGL_depth_texture")||d.getExtension("MOZ_WEBGL_depth_texture")||d.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=d.getExtension("EXT_texture_filter_anisotropic")||d.getExtension("MOZ_EXT_texture_filter_anisotropic")||d.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=d.getExtension("WEBGL_compressed_texture_s3tc")||d.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=d.getExtension("WEBGL_compressed_texture_pvrtc")||d.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=d.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ba(d,e,t,i){const n={},r=new WeakMap;function a(p){const y=p.target;y.index!==null&&e.remove(y.index);for(const g in y.attributes)e.remove(y.attributes[g]);y.removeEventListener("dispose",a),delete n[y.id];const z=r.get(y);z&&(e.remove(z),r.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function s(p,y){return n[y.id]===!0||(y.addEventListener("dispose",a),n[y.id]=!0,t.memory.geometries++),y}function l(p){const y=p.attributes;for(const g in y)e.update(y[g],34962);const z=p.morphAttributes;for(const g in z){const m=z[g];for(let c=0,u=m.length;c<u;c++)e.update(m[c],34962)}}function o(p){const y=[],z=p.index,g=p.attributes.position;let m=0;if(z!==null){const f=z.array;m=z.version;for(let _=0,G=f.length;_<G;_+=3){const v=f[_+0],S=f[_+1],P=f[_+2];y.push(v,S,S,P,P,v)}}else{const f=g.array;m=g.version;for(let _=0,G=f.length/3-1;_<G;_+=3){const v=_+0,S=_+1,P=_+2;y.push(v,S,S,P,P,v)}}const c=new(j7(y)?$7:Q7)(y,1);c.version=m;const u=r.get(p);u&&e.remove(u),r.set(p,c)}function x(p){const y=r.get(p);if(y){const z=p.index;z!==null&&y.version<z.version&&o(p)}else o(p);return r.get(p)}return{get:s,update:l,getWireframeAttribute:x}}function Va(d,e,t,i){const n=i.isWebGL2;let r;function a(y){r=y}let s,l;function o(y){s=y.type,l=y.bytesPerElement}function x(y,z){d.drawElements(r,z,s,y*l),t.update(z,r,1)}function p(y,z,g){if(g===0)return;let m,c;if(n)m=d,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](r,z,s,y*l,g),t.update(z,r,g)}this.setMode=a,this.setIndex=o,this.render=x,this.renderInstances=p}function Ha(d){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Wa(d,e){return d[0]-e[0]}function ja(d,e){return Math.abs(e[1])-Math.abs(d[1])}function Xa(d,e,t){const i={},n=new Float32Array(8),r=new WeakMap,a=new Lt,s=[];for(let o=0;o<8;o++)s[o]=[o,0];function l(o,x,p,y){const z=o.morphTargetInfluences;if(e.isWebGL2===!0){const g=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,m=g!==void 0?g.length:0;let c=r.get(x);if(c===void 0||c.count!==m){let B=function(){C.dispose(),r.delete(x),x.removeEventListener("dispose",B)};c!==void 0&&c.texture.dispose();const _=x.morphAttributes.position!==void 0,G=x.morphAttributes.normal!==void 0,v=x.morphAttributes.color!==void 0,S=x.morphAttributes.position||[],P=x.morphAttributes.normal||[],h=x.morphAttributes.color||[];let b=0;_===!0&&(b=1),G===!0&&(b=2),v===!0&&(b=3);let T=x.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const F=new Float32Array(T*A*4*m),C=new Z7(F,T,A,m);C.type=Y0,C.needsUpdate=!0;const R=b*4;for(let j=0;j<m;j++){const Z=S[j],H=P[j],Q=h[j],J=T*A*4*j;for(let L=0;L<Z.count;L++){const W=L*R;_===!0&&(a.fromBufferAttribute(Z,L),F[J+W+0]=a.x,F[J+W+1]=a.y,F[J+W+2]=a.z,F[J+W+3]=0),G===!0&&(a.fromBufferAttribute(H,L),F[J+W+4]=a.x,F[J+W+5]=a.y,F[J+W+6]=a.z,F[J+W+7]=0),v===!0&&(a.fromBufferAttribute(Q,L),F[J+W+8]=a.x,F[J+W+9]=a.y,F[J+W+10]=a.z,F[J+W+11]=Q.itemSize===4?a.w:1)}}c={count:m,texture:C,size:new De(T,A)},r.set(x,c),x.addEventListener("dispose",B)}let u=0;for(let _=0;_<z.length;_++)u+=z[_];const f=x.morphTargetsRelative?1:1-u;y.getUniforms().setValue(d,"morphTargetBaseInfluence",f),y.getUniforms().setValue(d,"morphTargetInfluences",z),y.getUniforms().setValue(d,"morphTargetsTexture",c.texture,t),y.getUniforms().setValue(d,"morphTargetsTextureSize",c.size)}else{const g=z===void 0?0:z.length;let m=i[x.id];if(m===void 0||m.length!==g){m=[];for(let G=0;G<g;G++)m[G]=[G,0];i[x.id]=m}for(let G=0;G<g;G++){const v=m[G];v[0]=G,v[1]=z[G]}m.sort(ja);for(let G=0;G<8;G++)G<g&&m[G][1]?(s[G][0]=m[G][0],s[G][1]=m[G][1]):(s[G][0]=Number.MAX_SAFE_INTEGER,s[G][1]=0);s.sort(Wa);const c=x.morphAttributes.position,u=x.morphAttributes.normal;let f=0;for(let G=0;G<8;G++){const v=s[G],S=v[0],P=v[1];S!==Number.MAX_SAFE_INTEGER&&P?(c&&x.getAttribute("morphTarget"+G)!==c[S]&&x.setAttribute("morphTarget"+G,c[S]),u&&x.getAttribute("morphNormal"+G)!==u[S]&&x.setAttribute("morphNormal"+G,u[S]),n[G]=P,f+=P):(c&&x.hasAttribute("morphTarget"+G)===!0&&x.deleteAttribute("morphTarget"+G),u&&x.hasAttribute("morphNormal"+G)===!0&&x.deleteAttribute("morphNormal"+G),n[G]=0)}const _=x.morphTargetsRelative?1:1-f;y.getUniforms().setValue(d,"morphTargetBaseInfluence",_),y.getUniforms().setValue(d,"morphTargetInfluences",n)}}return{update:l}}function qa(d,e,t,i){let n=new WeakMap;function r(l){const o=i.render.frame,x=l.geometry,p=e.get(l,x);return n.get(p)!==o&&(e.update(p),n.set(p,o)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),p}function a(){n=new WeakMap}function s(l){const o=l.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:r,dispose:a}}const d8=new Rt,a8=new Z7,s8=new Rn,l8=new i8,A6=[],C6=[],P6=new Float32Array(16),D6=new Float32Array(9),L6=new Float32Array(4);function Q1(d,e,t){const i=d[0];if(i<=0||i>0)return d;const n=e*t;let r=A6[n];if(r===void 0&&(r=new Float32Array(n),A6[n]=r),e!==0){i.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,d[a].toArray(r,s)}return r}function Mt(d,e){if(d.length!==e.length)return!1;for(let t=0,i=d.length;t<i;t++)if(d[t]!==e[t])return!1;return!0}function St(d,e){for(let t=0,i=e.length;t<i;t++)d[t]=e[t]}function b5(d,e){let t=C6[e];t===void 0&&(t=new Int32Array(e),C6[e]=t);for(let i=0;i!==e;++i)t[i]=d.allocateTextureUnit();return t}function Ya(d,e){const t=this.cache;t[0]!==e&&(d.uniform1f(this.addr,e),t[0]=e)}function Za(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(d.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;d.uniform2fv(this.addr,e),St(t,e)}}function Ka(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(d.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(d.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;d.uniform3fv(this.addr,e),St(t,e)}}function Ja(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(d.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;d.uniform4fv(this.addr,e),St(t,e)}}function Qa(d,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;d.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;L6.set(i),d.uniformMatrix2fv(this.addr,!1,L6),St(t,i)}}function $a(d,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;d.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;D6.set(i),d.uniformMatrix3fv(this.addr,!1,D6),St(t,i)}}function es(d,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;d.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;P6.set(i),d.uniformMatrix4fv(this.addr,!1,P6),St(t,i)}}function ts(d,e){const t=this.cache;t[0]!==e&&(d.uniform1i(this.addr,e),t[0]=e)}function is(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(d.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;d.uniform2iv(this.addr,e),St(t,e)}}function ns(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(d.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;d.uniform3iv(this.addr,e),St(t,e)}}function rs(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(d.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;d.uniform4iv(this.addr,e),St(t,e)}}function ds(d,e){const t=this.cache;t[0]!==e&&(d.uniform1ui(this.addr,e),t[0]=e)}function as(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(d.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;d.uniform2uiv(this.addr,e),St(t,e)}}function ss(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(d.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;d.uniform3uiv(this.addr,e),St(t,e)}}function ls(d,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(d.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;d.uniform4uiv(this.addr,e),St(t,e)}}function os(d,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(d.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||d8,n)}function xs(d,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(d.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||s8,n)}function ys(d,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(d.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||l8,n)}function ps(d,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(d.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||a8,n)}function ms(d){switch(d){case 5126:return Ya;case 35664:return Za;case 35665:return Ka;case 35666:return Ja;case 35674:return Qa;case 35675:return $a;case 35676:return es;case 5124:case 35670:return ts;case 35667:case 35671:return is;case 35668:case 35672:return ns;case 35669:case 35673:return rs;case 5125:return ds;case 36294:return as;case 36295:return ss;case 36296:return ls;case 35678:case 36198:case 36298:case 36306:case 35682:return os;case 35679:case 36299:case 36307:return xs;case 35680:case 36300:case 36308:case 36293:return ys;case 36289:case 36303:case 36311:case 36292:return ps}}function cs(d,e){d.uniform1fv(this.addr,e)}function zs(d,e){const t=Q1(e,this.size,2);d.uniform2fv(this.addr,t)}function us(d,e){const t=Q1(e,this.size,3);d.uniform3fv(this.addr,t)}function gs(d,e){const t=Q1(e,this.size,4);d.uniform4fv(this.addr,t)}function fs(d,e){const t=Q1(e,this.size,4);d.uniformMatrix2fv(this.addr,!1,t)}function hs(d,e){const t=Q1(e,this.size,9);d.uniformMatrix3fv(this.addr,!1,t)}function _s(d,e){const t=Q1(e,this.size,16);d.uniformMatrix4fv(this.addr,!1,t)}function Gs(d,e){d.uniform1iv(this.addr,e)}function vs(d,e){d.uniform2iv(this.addr,e)}function bs(d,e){d.uniform3iv(this.addr,e)}function Ms(d,e){d.uniform4iv(this.addr,e)}function Ss(d,e){d.uniform1uiv(this.addr,e)}function ws(d,e){d.uniform2uiv(this.addr,e)}function Ts(d,e){d.uniform3uiv(this.addr,e)}function Es(d,e){d.uniform4uiv(this.addr,e)}function As(d,e,t){const i=this.cache,n=e.length,r=b5(t,n);Mt(i,r)||(d.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||d8,r[a])}function Cs(d,e,t){const i=this.cache,n=e.length,r=b5(t,n);Mt(i,r)||(d.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||s8,r[a])}function Ps(d,e,t){const i=this.cache,n=e.length,r=b5(t,n);Mt(i,r)||(d.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||l8,r[a])}function Ds(d,e,t){const i=this.cache,n=e.length,r=b5(t,n);Mt(i,r)||(d.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||a8,r[a])}function Ls(d){switch(d){case 5126:return cs;case 35664:return zs;case 35665:return us;case 35666:return gs;case 35674:return fs;case 35675:return hs;case 35676:return _s;case 5124:case 35670:return Gs;case 35667:case 35671:return vs;case 35668:case 35672:return bs;case 35669:case 35673:return Ms;case 5125:return Ss;case 36294:return ws;case 36295:return Ts;case 36296:return Es;case 35678:case 36198:case 36298:case 36306:case 35682:return As;case 35679:case 36299:case 36307:return Cs;case 35680:case 36300:case 36308:case 36293:return Ps;case 36289:case 36303:case 36311:case 36292:return Ds}}class Rs{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ms(t.type)}}class Is{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Ls(t.type)}}class Os{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const s=n[r];s.setValue(e,t[s.id],i)}}}const xi=/(\w+)(\])?(\[|\.)?/g;function R6(d,e){d.seq.push(e),d.map[e.id]=e}function Fs(d,e,t){const i=d.name,n=i.length;for(xi.lastIndex=0;;){const r=xi.exec(i),a=xi.lastIndex;let s=r[1];const l=r[2]==="]",o=r[3];if(l&&(s=s|0),o===void 0||o==="["&&a+2===n){R6(t,o===void 0?new Rs(s,d,e):new Is(s,d,e));break}else{let p=t.map[s];p===void 0&&(p=new Os(s),R6(t,p)),t=p}}}class r5{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);Fs(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function I6(d,e,t){const i=d.createShader(e);return d.shaderSource(i,t),d.compileShader(i),i}let Ns=0;function Us(d,e){const t=d.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function ks(d){switch(d){case T0:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",d),["Linear","( value )"]}}function O6(d,e,t){const i=d.getShaderParameter(e,35713),n=d.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+Us(d.getShaderSource(e),a)}else return n}function Bs(d,e){const t=ks(e);return"vec4 "+d+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vs(d,e){let t;switch(e){case sn:t="Linear";break;case ln:t="Reinhard";break;case on:t="OptimizedCineon";break;case V7:t="ACESFilmic";break;case xn:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+d+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hs(d){return[d.extensionDerivatives||d.envMapCubeUVHeight||d.bumpMap||d.tangentSpaceNormalMap||d.clearcoatNormalMap||d.flatShading||d.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(d.extensionFragDepth||d.logarithmicDepthBuffer)&&d.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",d.extensionDrawBuffers&&d.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(d.extensionShaderTextureLOD||d.envMap||d.transmission)&&d.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(x3).join(`
`)}function Ws(d){const e=[];for(const t in d){const i=d[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function js(d,e){const t={},i=d.getProgramParameter(e,35721);for(let n=0;n<i;n++){const r=d.getActiveAttrib(e,n),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:d.getAttribLocation(e,a),locationSize:s}}return t}function x3(d){return d!==""}function F6(d,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return d.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N6(d,e){return d.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ri(d){return d.replace(Xs,qs)}function qs(d,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ri(t)}const Ys=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U6(d){return d.replace(Ys,Zs)}function Zs(d,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function k6(d){let e="precision "+d.precision+` float;
precision `+d.precision+" int;";return d.precision==="highp"?e+=`
#define HIGH_PRECISION`:d.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:d.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ks(d){let e="SHADOWMAP_TYPE_BASIC";return d.shadowMapType===F7?e="SHADOWMAP_TYPE_PCF":d.shadowMapType===N7?e="SHADOWMAP_TYPE_PCF_SOFT":d.shadowMapType===o3&&(e="SHADOWMAP_TYPE_VSM"),e}function Js(d){let e="ENVMAP_TYPE_CUBE";if(d.envMap)switch(d.envMapMode){case B1:case V1:e="ENVMAP_TYPE_CUBE";break;case _5:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qs(d){let e="ENVMAP_MODE_REFLECTION";if(d.envMap)switch(d.envMapMode){case V1:e="ENVMAP_MODE_REFRACTION";break}return e}function $s(d){let e="ENVMAP_BLENDING_NONE";if(d.envMap)switch(d.combine){case B7:e="ENVMAP_BLENDING_MULTIPLY";break;case dn:e="ENVMAP_BLENDING_MIX";break;case an:e="ENVMAP_BLENDING_ADD";break}return e}function el(d){const e=d.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tl(d,e,t,i){const n=d.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Ks(t),o=Js(t),x=Qs(t),p=$s(t),y=el(t),z=t.isWebGL2?"":Hs(t),g=Ws(r),m=n.createProgram();let c,u,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=[g].filter(x3).join(`
`),c.length>0&&(c+=`
`),u=[z,g].filter(x3).join(`
`),u.length>0&&(u+=`
`)):(c=[k6(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(x3).join(`
`),u=[z,k6(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+x:"",t.envMap?"#define "+p:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==N2?"#define TONE_MAPPING":"",t.toneMapping!==N2?Pe.tonemapping_pars_fragment:"",t.toneMapping!==N2?Vs("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Bs("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(x3).join(`
`)),a=Ri(a),a=F6(a,t),a=N6(a,t),s=Ri(s),s=F6(s,t),s=N6(s,t),a=U6(a),s=U6(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,c=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,u=["#define varying in",t.glslVersion===o6?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=f+c+a,G=f+u+s,v=I6(n,35633,_),S=I6(n,35632,G);if(n.attachShader(m,v),n.attachShader(m,S),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),d.debug.checkShaderErrors){const b=n.getProgramInfoLog(m).trim(),T=n.getShaderInfoLog(v).trim(),A=n.getShaderInfoLog(S).trim();let F=!0,C=!0;if(n.getProgramParameter(m,35714)===!1){F=!1;const R=O6(n,v,"vertex"),B=O6(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+b+`
`+R+`
`+B)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(T===""||A==="")&&(C=!1);C&&(this.diagnostics={runnable:F,programLog:b,vertexShader:{log:T,prefix:c},fragmentShader:{log:A,prefix:u}})}n.deleteShader(v),n.deleteShader(S);let P;this.getUniforms=function(){return P===void 0&&(P=new r5(n,m)),P};let h;return this.getAttributes=function(){return h===void 0&&(h=js(n,m)),h},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ns++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=S,this}let il=0;class nl{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rl(e),t.set(e,i)),i}}class rl{constructor(e){this.id=il++,this.code=e,this.usedTimes=0}}function dl(d,e,t,i,n,r,a){const s=new e4,l=new nl,o=[],x=n.isWebGL2,p=n.logarithmicDepthBuffer,y=n.vertexTextures;let z=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(h,b,T,A,F){const C=A.fog,R=F.geometry,B=h.isMeshStandardMaterial?A.environment:null,j=(h.isMeshStandardMaterial?t:e).get(h.envMap||B),Z=j&&j.mapping===_5?j.image.height:null,H=g[h.type];h.precision!==null&&(z=n.getMaxPrecision(h.precision),z!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",z,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=Q!==void 0?Q.length:0;let L=0;R.morphAttributes.position!==void 0&&(L=1),R.morphAttributes.normal!==void 0&&(L=2),R.morphAttributes.color!==void 0&&(L=3);let W,re,$,ne;if(H){const Ve=R2[H];W=Ve.vertexShader,re=Ve.fragmentShader}else W=h.vertexShader,re=h.fragmentShader,l.update(h),$=l.getVertexShaderID(h),ne=l.getFragmentShaderID(h);const O=d.getRenderTarget(),xe=h.alphaTest>0,ue=h.clearcoat>0,be=h.iridescence>0;return{isWebGL2:x,shaderID:H,shaderName:h.type,vertexShader:W,fragmentShader:re,defines:h.defines,customVertexShaderID:$,customFragmentShaderID:ne,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:z,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:y,outputEncoding:O===null?d.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:T0,map:!!h.map,matcap:!!h.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!h.lightMap,aoMap:!!h.aoMap,emissiveMap:!!h.emissiveMap,bumpMap:!!h.bumpMap,normalMap:!!h.normalMap,objectSpaceNormalMap:h.normalMapType===Cn,tangentSpaceNormalMap:h.normalMapType===An,decodeVideoTexture:!!h.map&&h.map.isVideoTexture===!0&&h.map.encoding===Ke,clearcoat:ue,clearcoatMap:ue&&!!h.clearcoatMap,clearcoatRoughnessMap:ue&&!!h.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!h.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!h.iridescenceMap,iridescenceThicknessMap:be&&!!h.iridescenceThicknessMap,displacementMap:!!h.displacementMap,roughnessMap:!!h.roughnessMap,metalnessMap:!!h.metalnessMap,specularMap:!!h.specularMap,specularIntensityMap:!!h.specularIntensityMap,specularColorMap:!!h.specularColorMap,opaque:h.transparent===!1&&h.blending===R1,alphaMap:!!h.alphaMap,alphaTest:xe,gradientMap:!!h.gradientMap,sheen:h.sheen>0,sheenColorMap:!!h.sheenColorMap,sheenRoughnessMap:!!h.sheenRoughnessMap,transmission:h.transmission>0,transmissionMap:!!h.transmissionMap,thicknessMap:!!h.thicknessMap,combine:h.combine,vertexTangents:!!h.normalMap&&!!R.attributes.tangent,vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!h.map||!!h.bumpMap||!!h.normalMap||!!h.specularMap||!!h.alphaMap||!!h.emissiveMap||!!h.roughnessMap||!!h.metalnessMap||!!h.clearcoatMap||!!h.clearcoatRoughnessMap||!!h.clearcoatNormalMap||!!h.iridescenceMap||!!h.iridescenceThicknessMap||!!h.displacementMap||!!h.transmissionMap||!!h.thicknessMap||!!h.specularIntensityMap||!!h.specularColorMap||!!h.sheenColorMap||!!h.sheenRoughnessMap,uvsVertexOnly:!(h.map||h.bumpMap||h.normalMap||h.specularMap||h.alphaMap||h.emissiveMap||h.roughnessMap||h.metalnessMap||h.clearcoatNormalMap||h.iridescenceMap||h.iridescenceThicknessMap||h.transmission>0||h.transmissionMap||h.thicknessMap||h.specularIntensityMap||h.specularColorMap||h.sheen>0||h.sheenColorMap||h.sheenRoughnessMap)&&!!h.displacementMap,fog:!!C,useFog:h.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!h.flatShading,sizeAttenuation:h.sizeAttenuation,logarithmicDepthBuffer:p,skinning:F.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:L,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:h.dithering,shadowMapEnabled:d.shadowMap.enabled&&T.length>0,shadowMapType:d.shadowMap.type,toneMapping:h.toneMapped?d.toneMapping:N2,physicallyCorrectLights:d.physicallyCorrectLights,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===h5,flipSided:h.side===b2,useDepthPacking:!!h.depthPacking,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionDerivatives:h.extensions&&h.extensions.derivatives,extensionFragDepth:h.extensions&&h.extensions.fragDepth,extensionDrawBuffers:h.extensions&&h.extensions.drawBuffers,extensionShaderTextureLOD:h.extensions&&h.extensions.shaderTextureLOD,rendererExtensionFragDepth:x||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||i.has("EXT_shader_texture_lod"),customProgramCacheKey:h.customProgramCacheKey()}}function c(h){const b=[];if(h.shaderID?b.push(h.shaderID):(b.push(h.customVertexShaderID),b.push(h.customFragmentShaderID)),h.defines!==void 0)for(const T in h.defines)b.push(T),b.push(h.defines[T]);return h.isRawShaderMaterial===!1&&(u(b,h),f(b,h),b.push(d.outputEncoding)),b.push(h.customProgramCacheKey),b.join()}function u(h,b){h.push(b.precision),h.push(b.outputEncoding),h.push(b.envMapMode),h.push(b.envMapCubeUVHeight),h.push(b.combine),h.push(b.vertexUvs),h.push(b.fogExp2),h.push(b.sizeAttenuation),h.push(b.morphTargetsCount),h.push(b.morphAttributeCount),h.push(b.numDirLights),h.push(b.numPointLights),h.push(b.numSpotLights),h.push(b.numSpotLightMaps),h.push(b.numHemiLights),h.push(b.numRectAreaLights),h.push(b.numDirLightShadows),h.push(b.numPointLightShadows),h.push(b.numSpotLightShadows),h.push(b.numSpotLightShadowsWithMaps),h.push(b.shadowMapType),h.push(b.toneMapping),h.push(b.numClippingPlanes),h.push(b.numClipIntersection),h.push(b.depthPacking)}function f(h,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.map&&s.enable(4),b.matcap&&s.enable(5),b.envMap&&s.enable(6),b.lightMap&&s.enable(7),b.aoMap&&s.enable(8),b.emissiveMap&&s.enable(9),b.bumpMap&&s.enable(10),b.normalMap&&s.enable(11),b.objectSpaceNormalMap&&s.enable(12),b.tangentSpaceNormalMap&&s.enable(13),b.clearcoat&&s.enable(14),b.clearcoatMap&&s.enable(15),b.clearcoatRoughnessMap&&s.enable(16),b.clearcoatNormalMap&&s.enable(17),b.iridescence&&s.enable(18),b.iridescenceMap&&s.enable(19),b.iridescenceThicknessMap&&s.enable(20),b.displacementMap&&s.enable(21),b.specularMap&&s.enable(22),b.roughnessMap&&s.enable(23),b.metalnessMap&&s.enable(24),b.gradientMap&&s.enable(25),b.alphaMap&&s.enable(26),b.alphaTest&&s.enable(27),b.vertexColors&&s.enable(28),b.vertexAlphas&&s.enable(29),b.vertexUvs&&s.enable(30),b.vertexTangents&&s.enable(31),b.uvsVertexOnly&&s.enable(32),h.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.physicallyCorrectLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.specularIntensityMap&&s.enable(15),b.specularColorMap&&s.enable(16),b.transmission&&s.enable(17),b.transmissionMap&&s.enable(18),b.thicknessMap&&s.enable(19),b.sheen&&s.enable(20),b.sheenColorMap&&s.enable(21),b.sheenRoughnessMap&&s.enable(22),b.decodeVideoTexture&&s.enable(23),b.opaque&&s.enable(24),h.push(s.mask)}function _(h){const b=g[h.type];let T;if(b){const A=R2[b];T=t8.clone(A.uniforms)}else T=h.uniforms;return T}function G(h,b){let T;for(let A=0,F=o.length;A<F;A++){const C=o[A];if(C.cacheKey===b){T=C,++T.usedTimes;break}}return T===void 0&&(T=new tl(d,b,h,r),o.push(T)),T}function v(h){if(--h.usedTimes===0){const b=o.indexOf(h);o[b]=o[o.length-1],o.pop(),h.destroy()}}function S(h){l.remove(h)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:_,acquireProgram:G,releaseProgram:v,releaseShaderCache:S,programs:o,dispose:P}}function al(){let d=new WeakMap;function e(r){let a=d.get(r);return a===void 0&&(a={},d.set(r,a)),a}function t(r){d.delete(r)}function i(r,a,s){d.get(r)[a]=s}function n(){d=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function sl(d,e){return d.groupOrder!==e.groupOrder?d.groupOrder-e.groupOrder:d.renderOrder!==e.renderOrder?d.renderOrder-e.renderOrder:d.material.id!==e.material.id?d.material.id-e.material.id:d.z!==e.z?d.z-e.z:d.id-e.id}function B6(d,e){return d.groupOrder!==e.groupOrder?d.groupOrder-e.groupOrder:d.renderOrder!==e.renderOrder?d.renderOrder-e.renderOrder:d.z!==e.z?e.z-d.z:d.id-e.id}function V6(){const d=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(p,y,z,g,m,c){let u=d[e];return u===void 0?(u={id:p.id,object:p,geometry:y,material:z,groupOrder:g,renderOrder:p.renderOrder,z:m,group:c},d[e]=u):(u.id=p.id,u.object=p,u.geometry=y,u.material=z,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=m,u.group=c),e++,u}function s(p,y,z,g,m,c){const u=a(p,y,z,g,m,c);z.transmission>0?i.push(u):z.transparent===!0?n.push(u):t.push(u)}function l(p,y,z,g,m,c){const u=a(p,y,z,g,m,c);z.transmission>0?i.unshift(u):z.transparent===!0?n.unshift(u):t.unshift(u)}function o(p,y){t.length>1&&t.sort(p||sl),i.length>1&&i.sort(y||B6),n.length>1&&n.sort(y||B6)}function x(){for(let p=e,y=d.length;p<y;p++){const z=d[p];if(z.id===null)break;z.id=null,z.object=null,z.geometry=null,z.material=null,z.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:s,unshift:l,finish:x,sort:o}}function ll(){let d=new WeakMap;function e(i,n){const r=d.get(i);let a;return r===void 0?(a=new V6,d.set(i,[a])):n>=r.length?(a=new V6,r.push(a)):a=r[n],a}function t(){d=new WeakMap}return{get:e,dispose:t}}function ol(){const d={};return{get:function(e){if(d[e.id]!==void 0)return d[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new rt};break;case"SpotLight":t={position:new V,direction:new V,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new V,halfWidth:new V,halfHeight:new V};break}return d[e.id]=t,t}}}function xl(){const d={};return{get:function(e){if(d[e.id]!==void 0)return d[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return d[e.id]=t,t}}}let yl=0;function pl(d,e){return(e.castShadow?2:0)-(d.castShadow?2:0)+(e.map?1:0)-(d.map?1:0)}function ml(d,e){const t=new ol,i=xl(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let x=0;x<9;x++)n.probe.push(new V);const r=new V,a=new bt,s=new bt;function l(x,p){let y=0,z=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,c=0,u=0,f=0,_=0,G=0,v=0,S=0,P=0,h=0;x.sort(pl);const b=p!==!0?Math.PI:1;for(let A=0,F=x.length;A<F;A++){const C=x[A],R=C.color,B=C.intensity,j=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)y+=R.r*B*b,z+=R.g*B*b,g+=R.b*B*b;else if(C.isLightProbe)for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],B);else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*b),C.castShadow){const Q=C.shadow,J=i.get(C);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=C.shadow.matrix,G++}n.directional[m]=H,m++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(R).multiplyScalar(B*b),H.distance=j,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[u]=H;const Q=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Q.updateMatrices(C),C.castShadow&&h++),n.spotLightMatrix[u]=Q.matrix,C.castShadow){const J=i.get(C);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,n.spotShadow[u]=J,n.spotShadowMap[u]=Z,S++}u++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(R).multiplyScalar(B),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=H,f++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*b),H.distance=C.distance,H.decay=C.decay,C.castShadow){const Q=C.shadow,J=i.get(C);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,n.pointShadow[c]=J,n.pointShadowMap[c]=Z,n.pointShadowMatrix[c]=C.shadow.matrix,v++}n.point[c]=H,c++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(B*b),H.groundColor.copy(C.groundColor).multiplyScalar(B*b),n.hemi[_]=H,_++}}f>0&&(e.isWebGL2||d.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):d.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=y,n.ambient[1]=z,n.ambient[2]=g;const T=n.hash;(T.directionalLength!==m||T.pointLength!==c||T.spotLength!==u||T.rectAreaLength!==f||T.hemiLength!==_||T.numDirectionalShadows!==G||T.numPointShadows!==v||T.numSpotShadows!==S||T.numSpotMaps!==P)&&(n.directional.length=m,n.spot.length=u,n.rectArea.length=f,n.point.length=c,n.hemi.length=_,n.directionalShadow.length=G,n.directionalShadowMap.length=G,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=G,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+P-h,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=h,T.directionalLength=m,T.pointLength=c,T.spotLength=u,T.rectAreaLength=f,T.hemiLength=_,T.numDirectionalShadows=G,T.numPointShadows=v,T.numSpotShadows=S,T.numSpotMaps=P,n.version=yl++)}function o(x,p){let y=0,z=0,g=0,m=0,c=0;const u=p.matrixWorldInverse;for(let f=0,_=x.length;f<_;f++){const G=x[f];if(G.isDirectionalLight){const v=n.directional[y];v.direction.setFromMatrixPosition(G.matrixWorld),r.setFromMatrixPosition(G.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(u),y++}else if(G.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(G.matrixWorld),v.position.applyMatrix4(u),v.direction.setFromMatrixPosition(G.matrixWorld),r.setFromMatrixPosition(G.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(u),g++}else if(G.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(G.matrixWorld),v.position.applyMatrix4(u),s.identity(),a.copy(G.matrixWorld),a.premultiply(u),s.extractRotation(a),v.halfWidth.set(G.width*.5,0,0),v.halfHeight.set(0,G.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),m++}else if(G.isPointLight){const v=n.point[z];v.position.setFromMatrixPosition(G.matrixWorld),v.position.applyMatrix4(u),z++}else if(G.isHemisphereLight){const v=n.hemi[c];v.direction.setFromMatrixPosition(G.matrixWorld),v.direction.transformDirection(u),c++}}}return{setup:l,setupView:o,state:n}}function H6(d,e){const t=new ml(d,e),i=[],n=[];function r(){i.length=0,n.length=0}function a(p){i.push(p)}function s(p){n.push(p)}function l(p){t.setup(i,p)}function o(p){t.setupView(i,p)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:o,pushLight:a,pushShadow:s}}function cl(d,e){let t=new WeakMap;function i(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new H6(d,e),t.set(r,[l])):a>=s.length?(l=new H6(d,e),s.push(l)):l=s[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class zl extends G5{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ul extends G5{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fl=`uniform sampler2D shadow_pass;
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
}`;function hl(d,e,t){let i=new i4;const n=new De,r=new De,a=new Lt,s=new zl({depthPacking:En}),l=new ul,o={},x=t.maxTextureSize,p={0:b2,1:r1,2:h5},y=new B2({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:gl,fragmentShader:fl}),z=y.clone();z.defines.HORIZONTAL_PASS=1;const g=new x0;g.setAttribute("position",new C2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new O2(g,y),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F7,this.render=function(G,v,S){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||G.length===0)return;const P=d.getRenderTarget(),h=d.getActiveCubeFace(),b=d.getActiveMipmapLevel(),T=d.state;T.setBlending(_0),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let A=0,F=G.length;A<F;A++){const C=G[A],R=C.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const B=R.getFrameExtents();if(n.multiply(B),r.copy(R.mapSize),(n.x>x||n.y>x)&&(n.x>x&&(r.x=Math.floor(x/B.x),n.x=r.x*B.x,R.mapSize.x=r.x),n.y>x&&(r.y=Math.floor(x/B.y),n.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==o3?{minFilter:jt,magFilter:jt}:{};R.map=new E0(n.x,n.y,Z),R.map.texture.name=C.name+".shadowMap",R.camera.updateProjectionMatrix()}d.setRenderTarget(R.map),d.clear();const j=R.getViewportCount();for(let Z=0;Z<j;Z++){const H=R.getViewport(Z);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),T.viewport(a),R.updateMatrices(C,Z),i=R.getFrustum(),_(v,S,R.camera,C,this.type)}R.isPointLightShadow!==!0&&this.type===o3&&u(R,S),R.needsUpdate=!1}c.needsUpdate=!1,d.setRenderTarget(P,h,b)};function u(G,v){const S=e.update(m);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,z.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,z.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new E0(n.x,n.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,d.setRenderTarget(G.mapPass),d.clear(),d.renderBufferDirect(v,null,S,y,m,null),z.uniforms.shadow_pass.value=G.mapPass.texture,z.uniforms.resolution.value=G.mapSize,z.uniforms.radius.value=G.radius,d.setRenderTarget(G.map),d.clear(),d.renderBufferDirect(v,null,S,z,m,null)}function f(G,v,S,P,h,b){let T=null;const A=S.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(A!==void 0)T=A;else if(T=S.isPointLight===!0?l:s,d.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const F=T.uuid,C=v.uuid;let R=o[F];R===void 0&&(R={},o[F]=R);let B=R[C];B===void 0&&(B=T.clone(),R[C]=B),T=B}return T.visible=v.visible,T.wireframe=v.wireframe,b===o3?T.side=v.shadowSide!==null?v.shadowSide:v.side:T.side=v.shadowSide!==null?v.shadowSide:p[v.side],T.alphaMap=v.alphaMap,T.alphaTest=v.alphaTest,T.map=v.map,T.clipShadows=v.clipShadows,T.clippingPlanes=v.clippingPlanes,T.clipIntersection=v.clipIntersection,T.displacementMap=v.displacementMap,T.displacementScale=v.displacementScale,T.displacementBias=v.displacementBias,T.wireframeLinewidth=v.wireframeLinewidth,T.linewidth=v.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(S.matrixWorld),T.nearDistance=P,T.farDistance=h),T}function _(G,v,S,P,h){if(G.visible===!1)return;if(G.layers.test(v.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&h===o3)&&(!G.frustumCulled||i.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,G.matrixWorld);const A=e.update(G),F=G.material;if(Array.isArray(F)){const C=A.groups;for(let R=0,B=C.length;R<B;R++){const j=C[R],Z=F[j.materialIndex];if(Z&&Z.visible){const H=f(G,Z,P,S.near,S.far,h);d.renderBufferDirect(S,null,A,H,G,j)}}}else if(F.visible){const C=f(G,F,P,S.near,S.far,h);d.renderBufferDirect(S,null,A,C,G,null)}}const T=G.children;for(let A=0,F=T.length;A<F;A++)_(T[A],v,S,P,h)}}function _l(d,e,t){const i=t.isWebGL2;function n(){let I=!1;const q=new Lt;let ee=null;const ye=new Lt(0,0,0,0);return{setMask:function(he){ee!==he&&!I&&(d.colorMask(he,he,he,he),ee=he)},setLocked:function(he){I=he},setClear:function(he,He,Tt,Ot,D0){D0===!0&&(he*=Ot,He*=Ot,Tt*=Ot),q.set(he,He,Tt,Ot),ye.equals(q)===!1&&(d.clearColor(he,He,Tt,Ot),ye.copy(q))},reset:function(){I=!1,ee=null,ye.set(-1,0,0,0)}}}function r(){let I=!1,q=null,ee=null,ye=null;return{setTest:function(he){he?xe(2929):ue(2929)},setMask:function(he){q!==he&&!I&&(d.depthMask(he),q=he)},setFunc:function(he){if(ee!==he){switch(he){case J9:d.depthFunc(512);break;case Q9:d.depthFunc(519);break;case $9:d.depthFunc(513);break;case Ti:d.depthFunc(515);break;case en:d.depthFunc(514);break;case tn:d.depthFunc(518);break;case nn:d.depthFunc(516);break;case rn:d.depthFunc(517);break;default:d.depthFunc(515)}ee=he}},setLocked:function(he){I=he},setClear:function(he){ye!==he&&(d.clearDepth(he),ye=he)},reset:function(){I=!1,q=null,ee=null,ye=null}}}function a(){let I=!1,q=null,ee=null,ye=null,he=null,He=null,Tt=null,Ot=null,D0=null;return{setTest:function(at){I||(at?xe(2960):ue(2960))},setMask:function(at){q!==at&&!I&&(d.stencilMask(at),q=at)},setFunc:function(at,W2,m2){(ee!==at||ye!==W2||he!==m2)&&(d.stencilFunc(at,W2,m2),ee=at,ye=W2,he=m2)},setOp:function(at,W2,m2){(He!==at||Tt!==W2||Ot!==m2)&&(d.stencilOp(at,W2,m2),He=at,Tt=W2,Ot=m2)},setLocked:function(at){I=at},setClear:function(at){D0!==at&&(d.clearStencil(at),D0=at)},reset:function(){I=!1,q=null,ee=null,ye=null,he=null,He=null,Tt=null,Ot=null,D0=null}}}const s=new n,l=new r,o=new a,x=new WeakMap,p=new WeakMap;let y={},z={},g=new WeakMap,m=[],c=null,u=!1,f=null,_=null,G=null,v=null,S=null,P=null,h=null,b=!1,T=null,A=null,F=null,C=null,R=null;const B=d.getParameter(35661);let j=!1,Z=0;const H=d.getParameter(7938);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=Z>=2);let Q=null,J={};const L=d.getParameter(3088),W=d.getParameter(2978),re=new Lt().fromArray(L),$=new Lt().fromArray(W);function ne(I,q,ee){const ye=new Uint8Array(4),he=d.createTexture();d.bindTexture(I,he),d.texParameteri(I,10241,9728),d.texParameteri(I,10240,9728);for(let He=0;He<ee;He++)d.texImage2D(q+He,0,6408,1,1,0,6408,5121,ye);return he}const O={};O[3553]=ne(3553,3553,1),O[34067]=ne(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),o.setClear(0),xe(2929),l.setFunc(Ti),ht(!1),Bt(R4),xe(2884),wt(_0);function xe(I){y[I]!==!0&&(d.enable(I),y[I]=!0)}function ue(I){y[I]!==!1&&(d.disable(I),y[I]=!1)}function be(I,q){return z[I]!==q?(d.bindFramebuffer(I,q),z[I]=q,i&&(I===36009&&(z[36160]=q),I===36160&&(z[36009]=q)),!0):!1}function ce(I,q){let ee=m,ye=!1;if(I)if(ee=g.get(q),ee===void 0&&(ee=[],g.set(q,ee)),I.isWebGLMultipleRenderTargets){const he=I.texture;if(ee.length!==he.length||ee[0]!==36064){for(let He=0,Tt=he.length;He<Tt;He++)ee[He]=36064+He;ee.length=he.length,ye=!0}}else ee[0]!==36064&&(ee[0]=36064,ye=!0);else ee[0]!==1029&&(ee[0]=1029,ye=!0);ye&&(t.isWebGL2?d.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ve(I){return c!==I?(d.useProgram(I),c=I,!0):!1}const Ee={[E1]:32774,[k9]:32778,[B9]:32779};if(i)Ee[N4]=32775,Ee[U4]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ee[N4]=I.MIN_EXT,Ee[U4]=I.MAX_EXT)}const Me={[V9]:0,[H9]:1,[W9]:768,[U7]:770,[K9]:776,[Y9]:774,[X9]:772,[j9]:769,[k7]:771,[Z9]:775,[q9]:773};function wt(I,q,ee,ye,he,He,Tt,Ot){if(I===_0){u===!0&&(ue(3042),u=!1);return}if(u===!1&&(xe(3042),u=!0),I!==U9){if(I!==f||Ot!==b){if((_!==E1||S!==E1)&&(d.blendEquation(32774),_=E1,S=E1),Ot)switch(I){case R1:d.blendFuncSeparate(1,771,1,771);break;case I4:d.blendFunc(1,1);break;case O4:d.blendFuncSeparate(0,769,0,1);break;case F4:d.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case R1:d.blendFuncSeparate(770,771,1,771);break;case I4:d.blendFunc(770,1);break;case O4:d.blendFuncSeparate(0,769,0,1);break;case F4:d.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}G=null,v=null,P=null,h=null,f=I,b=Ot}return}he=he||q,He=He||ee,Tt=Tt||ye,(q!==_||he!==S)&&(d.blendEquationSeparate(Ee[q],Ee[he]),_=q,S=he),(ee!==G||ye!==v||He!==P||Tt!==h)&&(d.blendFuncSeparate(Me[ee],Me[ye],Me[He],Me[Tt]),G=ee,v=ye,P=He,h=Tt),f=I,b=!1}function ft(I,q){I.side===h5?ue(2884):xe(2884);let ee=I.side===b2;q&&(ee=!ee),ht(ee),I.blending===R1&&I.transparent===!1?wt(_0):wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const ye=I.stencilWrite;o.setTest(ye),ye&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xe(32926):ue(32926)}function ht(I){T!==I&&(I?d.frontFace(2304):d.frontFace(2305),T=I)}function Bt(I){I!==F9?(xe(2884),I!==A&&(I===R4?d.cullFace(1029):I===N9?d.cullFace(1028):d.cullFace(1032))):ue(2884),A=I}function pt(I){I!==F&&(j&&d.lineWidth(I),F=I)}function qe(I,q,ee){I?(xe(32823),(C!==q||R!==ee)&&(d.polygonOffset(q,ee),C=q,R=ee)):ue(32823)}function p2(I){I?xe(3089):ue(3089)}function Xt(I){I===void 0&&(I=33984+B-1),Q!==I&&(d.activeTexture(I),Q=I)}function E(I,q,ee){ee===void 0&&(Q===null?ee=33984+B-1:ee=Q);let ye=J[ee];ye===void 0&&(ye={type:void 0,texture:void 0},J[ee]=ye),(ye.type!==I||ye.texture!==q)&&(Q!==ee&&(d.activeTexture(ee),Q=ee),d.bindTexture(I,q||O[I]),ye.type=I,ye.texture=q)}function M(){const I=J[Q];I!==void 0&&I.type!==void 0&&(d.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{d.compressedTexImage2D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{d.compressedTexImage3D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{d.texSubImage2D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{d.texSubImage3D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{d.compressedTexSubImage2D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{d.compressedTexSubImage3D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{d.texStorage2D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{d.texStorage3D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{d.texImage2D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{d.texImage3D.apply(d,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){re.equals(I)===!1&&(d.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function ge(I){$.equals(I)===!1&&(d.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ie(I,q){let ee=p.get(q);ee===void 0&&(ee=new WeakMap,p.set(q,ee));let ye=ee.get(I);ye===void 0&&(ye=d.getUniformBlockIndex(q,I.name),ee.set(I,ye))}function Fe(I,q){const ye=p.get(q).get(I);x.get(q)!==ye&&(d.uniformBlockBinding(q,ye,I.__bindingPointIndex),x.set(q,ye))}function Ze(){d.disable(3042),d.disable(2884),d.disable(2929),d.disable(32823),d.disable(3089),d.disable(2960),d.disable(32926),d.blendEquation(32774),d.blendFunc(1,0),d.blendFuncSeparate(1,0,1,0),d.colorMask(!0,!0,!0,!0),d.clearColor(0,0,0,0),d.depthMask(!0),d.depthFunc(513),d.clearDepth(1),d.stencilMask(4294967295),d.stencilFunc(519,0,4294967295),d.stencilOp(7680,7680,7680),d.clearStencil(0),d.cullFace(1029),d.frontFace(2305),d.polygonOffset(0,0),d.activeTexture(33984),d.bindFramebuffer(36160,null),i===!0&&(d.bindFramebuffer(36009,null),d.bindFramebuffer(36008,null)),d.useProgram(null),d.lineWidth(1),d.scissor(0,0,d.canvas.width,d.canvas.height),d.viewport(0,0,d.canvas.width,d.canvas.height),y={},Q=null,J={},z={},g=new WeakMap,m=[],c=null,u=!1,f=null,_=null,G=null,v=null,S=null,P=null,h=null,b=!1,T=null,A=null,F=null,C=null,R=null,re.set(0,0,d.canvas.width,d.canvas.height),$.set(0,0,d.canvas.width,d.canvas.height),s.reset(),l.reset(),o.reset()}return{buffers:{color:s,depth:l,stencil:o},enable:xe,disable:ue,bindFramebuffer:be,drawBuffers:ce,useProgram:Ve,setBlending:wt,setMaterial:ft,setFlipSided:ht,setCullFace:Bt,setLineWidth:pt,setPolygonOffset:qe,setScissorTest:p2,activeTexture:Xt,bindTexture:E,unbindTexture:M,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:pe,texImage3D:le,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:N,texStorage3D:oe,texSubImage2D:de,texSubImage3D:se,compressedTexSubImage2D:Se,compressedTexSubImage3D:D,scissor:fe,viewport:ge,reset:Ze}}function Gl(d,e,t,i,n,r,a){const s=n.isWebGL2,l=n.maxTextures,o=n.maxCubemapSize,x=n.maxTextureSize,p=n.maxSamples,y=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,z=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,M){return u?new OffscreenCanvas(E,M):G3("canvas")}function _(E,M,X,te){let de=1;if((E.width>te||E.height>te)&&(de=te/Math.max(E.width,E.height)),de<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=M?Li:Math.floor,Se=se(de*E.width),D=se(de*E.height);m===void 0&&(m=f(Se,D));const N=X?f(Se,D):m;return N.width=Se,N.height=D,N.getContext("2d").drawImage(E,0,0,Se,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+D+")."),N}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function G(E){return y6(E.width)&&y6(E.height)}function v(E){return s?!1:E.wrapS!==E2||E.wrapT!==E2||E.minFilter!==jt&&E.minFilter!==g2}function S(E,M){return E.generateMipmaps&&M&&E.minFilter!==jt&&E.minFilter!==g2}function P(E){d.generateMipmap(E)}function h(E,M,X,te,de=!1){if(s===!1)return M;if(E!==null){if(d[E]!==void 0)return d[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=M;return M===6403&&(X===5126&&(se=33326),X===5131&&(se=33325),X===5121&&(se=33321)),M===33319&&(X===5126&&(se=33328),X===5131&&(se=33327),X===5121&&(se=33323)),M===6408&&(X===5126&&(se=34836),X===5131&&(se=34842),X===5121&&(se=te===Ke&&de===!1?35907:32856),X===32819&&(se=32854),X===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(E,M,X){return S(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==g2?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===jt||E===k4||E===R5?9728:9729}function A(E){const M=E.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&g.delete(M)}function F(E){const M=E.target;M.removeEventListener("dispose",F),B(M)}function C(E){const M=i.get(E);if(M.__webglInit===void 0)return;const X=E.source,te=c.get(X);if(te){const de=te[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&R(E),Object.keys(te).length===0&&c.delete(X)}i.remove(E)}function R(E){const M=i.get(E);d.deleteTexture(M.__webglTexture);const X=E.source,te=c.get(X);delete te[M.__cacheKey],a.memory.textures--}function B(E){const M=E.texture,X=i.get(E),te=i.get(M);if(te.__webglTexture!==void 0&&(d.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let de=0;de<6;de++)d.deleteFramebuffer(X.__webglFramebuffer[de]),X.__webglDepthbuffer&&d.deleteRenderbuffer(X.__webglDepthbuffer[de]);else{if(d.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&d.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&d.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let de=0;de<X.__webglColorRenderbuffer.length;de++)X.__webglColorRenderbuffer[de]&&d.deleteRenderbuffer(X.__webglColorRenderbuffer[de]);X.__webglDepthRenderbuffer&&d.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let de=0,se=M.length;de<se;de++){const Se=i.get(M[de]);Se.__webglTexture&&(d.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(M[de])}i.remove(M),i.remove(E)}let j=0;function Z(){j=0}function H(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function Q(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function J(E,M){const X=i.get(E);if(E.isVideoTexture&&p2(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(X,E,M);return}}t.bindTexture(3553,X.__webglTexture,33984+M)}function L(E,M){const X=i.get(E);if(E.version>0&&X.__version!==E.version){ue(X,E,M);return}t.bindTexture(35866,X.__webglTexture,33984+M)}function W(E,M){const X=i.get(E);if(E.version>0&&X.__version!==E.version){ue(X,E,M);return}t.bindTexture(32879,X.__webglTexture,33984+M)}function re(E,M){const X=i.get(E);if(E.version>0&&X.__version!==E.version){be(X,E,M);return}t.bindTexture(34067,X.__webglTexture,33984+M)}const $={[Ci]:10497,[E2]:33071,[Pi]:33648},ne={[jt]:9728,[k4]:9984,[R5]:9986,[g2]:9729,[yn]:9985,[f3]:9987};function O(E,M,X){if(X?(d.texParameteri(E,10242,$[M.wrapS]),d.texParameteri(E,10243,$[M.wrapT]),(E===32879||E===35866)&&d.texParameteri(E,32882,$[M.wrapR]),d.texParameteri(E,10240,ne[M.magFilter]),d.texParameteri(E,10241,ne[M.minFilter])):(d.texParameteri(E,10242,33071),d.texParameteri(E,10243,33071),(E===32879||E===35866)&&d.texParameteri(E,32882,33071),(M.wrapS!==E2||M.wrapT!==E2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),d.texParameteri(E,10240,T(M.magFilter)),d.texParameteri(E,10241,T(M.minFilter)),M.minFilter!==jt&&M.minFilter!==g2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===jt||M.minFilter!==R5&&M.minFilter!==f3||M.type===Y0&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===h3&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(d.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function xe(E,M){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const te=M.source;let de=c.get(te);de===void 0&&(de={},c.set(te,de));const se=Q(M);if(se!==E.__cacheKey){de[se]===void 0&&(de[se]={texture:d.createTexture(),usedTimes:0},a.memory.textures++,X=!0),de[se].usedTimes++;const Se=de[E.__cacheKey];Se!==void 0&&(de[E.__cacheKey].usedTimes--,Se.usedTimes===0&&R(M)),E.__cacheKey=se,E.__webglTexture=de[se].texture}return X}function ue(E,M,X){let te=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=35866),M.isData3DTexture&&(te=32879);const de=xe(E,M),se=M.source;t.bindTexture(te,E.__webglTexture,33984+X);const Se=i.get(se);if(se.version!==Se.__version||de===!0){t.activeTexture(33984+X),d.pixelStorei(37440,M.flipY),d.pixelStorei(37441,M.premultiplyAlpha),d.pixelStorei(3317,M.unpackAlignment),d.pixelStorei(37443,0);const D=v(M)&&G(M.image)===!1;let N=_(M.image,D,!1,x);N=Xt(M,N);const oe=G(N)||s,pe=r.convert(M.format,M.encoding);let le=r.convert(M.type),fe=h(M.internalFormat,pe,le,M.encoding,M.isVideoTexture);O(te,M,oe);let ge;const Ie=M.mipmaps,Fe=s&&M.isVideoTexture!==!0,Ze=Se.__version===void 0||de===!0,I=b(M,N,oe);if(M.isDepthTexture)fe=6402,s?M.type===Y0?fe=36012:M.type===q0?fe=33190:M.type===I1?fe=35056:fe=33189:M.type===Y0&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===K0&&fe===6402&&M.type!==W7&&M.type!==q0&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=q0,le=r.convert(M.type)),M.format===H1&&fe===6402&&(fe=34041,M.type!==I1&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=I1,le=r.convert(M.type))),Ze&&(Fe?t.texStorage2D(3553,1,fe,N.width,N.height):t.texImage2D(3553,0,fe,N.width,N.height,0,pe,le,null));else if(M.isDataTexture)if(Ie.length>0&&oe){Fe&&Ze&&t.texStorage2D(3553,I,fe,Ie[0].width,Ie[0].height);for(let q=0,ee=Ie.length;q<ee;q++)ge=Ie[q],Fe?t.texSubImage2D(3553,q,0,0,ge.width,ge.height,pe,le,ge.data):t.texImage2D(3553,q,fe,ge.width,ge.height,0,pe,le,ge.data);M.generateMipmaps=!1}else Fe?(Ze&&t.texStorage2D(3553,I,fe,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,pe,le,N.data)):t.texImage2D(3553,0,fe,N.width,N.height,0,pe,le,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&Ze&&t.texStorage3D(35866,I,fe,Ie[0].width,Ie[0].height,N.depth);for(let q=0,ee=Ie.length;q<ee;q++)ge=Ie[q],M.format!==A2?pe!==null?Fe?t.compressedTexSubImage3D(35866,q,0,0,0,ge.width,ge.height,N.depth,pe,ge.data,0,0):t.compressedTexImage3D(35866,q,fe,ge.width,ge.height,N.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,q,0,0,0,ge.width,ge.height,N.depth,pe,le,ge.data):t.texImage3D(35866,q,fe,ge.width,ge.height,N.depth,0,pe,le,ge.data)}else{Fe&&Ze&&t.texStorage2D(3553,I,fe,Ie[0].width,Ie[0].height);for(let q=0,ee=Ie.length;q<ee;q++)ge=Ie[q],M.format!==A2?pe!==null?Fe?t.compressedTexSubImage2D(3553,q,0,0,ge.width,ge.height,pe,ge.data):t.compressedTexImage2D(3553,q,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,q,0,0,ge.width,ge.height,pe,le,ge.data):t.texImage2D(3553,q,fe,ge.width,ge.height,0,pe,le,ge.data)}else if(M.isDataArrayTexture)Fe?(Ze&&t.texStorage3D(35866,I,fe,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,pe,le,N.data)):t.texImage3D(35866,0,fe,N.width,N.height,N.depth,0,pe,le,N.data);else if(M.isData3DTexture)Fe?(Ze&&t.texStorage3D(32879,I,fe,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,pe,le,N.data)):t.texImage3D(32879,0,fe,N.width,N.height,N.depth,0,pe,le,N.data);else if(M.isFramebufferTexture){if(Ze)if(Fe)t.texStorage2D(3553,I,fe,N.width,N.height);else{let q=N.width,ee=N.height;for(let ye=0;ye<I;ye++)t.texImage2D(3553,ye,fe,q,ee,0,pe,le,null),q>>=1,ee>>=1}}else if(Ie.length>0&&oe){Fe&&Ze&&t.texStorage2D(3553,I,fe,Ie[0].width,Ie[0].height);for(let q=0,ee=Ie.length;q<ee;q++)ge=Ie[q],Fe?t.texSubImage2D(3553,q,0,0,pe,le,ge):t.texImage2D(3553,q,fe,pe,le,ge);M.generateMipmaps=!1}else Fe?(Ze&&t.texStorage2D(3553,I,fe,N.width,N.height),t.texSubImage2D(3553,0,0,0,pe,le,N)):t.texImage2D(3553,0,fe,pe,le,N);S(M,oe)&&P(te),Se.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function be(E,M,X){if(M.image.length!==6)return;const te=xe(E,M),de=M.source;t.bindTexture(34067,E.__webglTexture,33984+X);const se=i.get(de);if(de.version!==se.__version||te===!0){t.activeTexture(33984+X),d.pixelStorei(37440,M.flipY),d.pixelStorei(37441,M.premultiplyAlpha),d.pixelStorei(3317,M.unpackAlignment),d.pixelStorei(37443,0);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,N=[];for(let q=0;q<6;q++)!Se&&!D?N[q]=_(M.image[q],!1,!0,o):N[q]=D?M.image[q].image:M.image[q],N[q]=Xt(M,N[q]);const oe=N[0],pe=G(oe)||s,le=r.convert(M.format,M.encoding),fe=r.convert(M.type),ge=h(M.internalFormat,le,fe,M.encoding),Ie=s&&M.isVideoTexture!==!0,Fe=se.__version===void 0||te===!0;let Ze=b(M,oe,pe);O(34067,M,pe);let I;if(Se){Ie&&Fe&&t.texStorage2D(34067,Ze,ge,oe.width,oe.height);for(let q=0;q<6;q++){I=N[q].mipmaps;for(let ee=0;ee<I.length;ee++){const ye=I[ee];M.format!==A2?le!==null?Ie?t.compressedTexSubImage2D(34069+q,ee,0,0,ye.width,ye.height,le,ye.data):t.compressedTexImage2D(34069+q,ee,ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+q,ee,0,0,ye.width,ye.height,le,fe,ye.data):t.texImage2D(34069+q,ee,ge,ye.width,ye.height,0,le,fe,ye.data)}}}else{I=M.mipmaps,Ie&&Fe&&(I.length>0&&Ze++,t.texStorage2D(34067,Ze,ge,N[0].width,N[0].height));for(let q=0;q<6;q++)if(D){Ie?t.texSubImage2D(34069+q,0,0,0,N[q].width,N[q].height,le,fe,N[q].data):t.texImage2D(34069+q,0,ge,N[q].width,N[q].height,0,le,fe,N[q].data);for(let ee=0;ee<I.length;ee++){const he=I[ee].image[q].image;Ie?t.texSubImage2D(34069+q,ee+1,0,0,he.width,he.height,le,fe,he.data):t.texImage2D(34069+q,ee+1,ge,he.width,he.height,0,le,fe,he.data)}}else{Ie?t.texSubImage2D(34069+q,0,0,0,le,fe,N[q]):t.texImage2D(34069+q,0,ge,le,fe,N[q]);for(let ee=0;ee<I.length;ee++){const ye=I[ee];Ie?t.texSubImage2D(34069+q,ee+1,0,0,le,fe,ye.image[q]):t.texImage2D(34069+q,ee+1,ge,le,fe,ye.image[q])}}}S(M,pe)&&P(34067),se.__version=de.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ce(E,M,X,te,de){const se=r.convert(X.format,X.encoding),Se=r.convert(X.type),D=h(X.internalFormat,se,Se,X.encoding);i.get(M).__hasExternalTextures||(de===32879||de===35866?t.texImage3D(de,0,D,M.width,M.height,M.depth,0,se,Se,null):t.texImage2D(de,0,D,M.width,M.height,0,se,Se,null)),t.bindFramebuffer(36160,E),qe(M)?y.framebufferTexture2DMultisampleEXT(36160,te,de,i.get(X).__webglTexture,0,pt(M)):(de===3553||de>=34069&&de<=34074)&&d.framebufferTexture2D(36160,te,de,i.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(E,M,X){if(d.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(X||qe(M)){const de=M.depthTexture;de&&de.isDepthTexture&&(de.type===Y0?te=36012:de.type===q0&&(te=33190));const se=pt(M);qe(M)?y.renderbufferStorageMultisampleEXT(36161,se,te,M.width,M.height):d.renderbufferStorageMultisample(36161,se,te,M.width,M.height)}else d.renderbufferStorage(36161,te,M.width,M.height);d.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=pt(M);X&&qe(M)===!1?d.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):qe(M)?y.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):d.renderbufferStorage(36161,34041,M.width,M.height),d.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let de=0;de<te.length;de++){const se=te[de],Se=r.convert(se.format,se.encoding),D=r.convert(se.type),N=h(se.internalFormat,Se,D,se.encoding),oe=pt(M);X&&qe(M)===!1?d.renderbufferStorageMultisample(36161,oe,N,M.width,M.height):qe(M)?y.renderbufferStorageMultisampleEXT(36161,oe,N,M.width,M.height):d.renderbufferStorage(36161,N,M.width,M.height)}}d.bindRenderbuffer(36161,null)}function Ee(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,de=pt(M);if(M.depthTexture.format===K0)qe(M)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,de):d.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===H1)qe(M)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,de):d.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Me(E){const M=i.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,E)}else if(X){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=d.createRenderbuffer(),Ve(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=d.createRenderbuffer(),Ve(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function wt(E,M,X){const te=i.get(E);M!==void 0&&ce(te.__webglFramebuffer,E,E.texture,36064,3553),X!==void 0&&Me(E)}function ft(E){const M=E.texture,X=i.get(E),te=i.get(M);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=d.createTexture()),te.__version=M.version,a.memory.textures++);const de=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,Se=G(E)||s;if(de){X.__webglFramebuffer=[];for(let D=0;D<6;D++)X.__webglFramebuffer[D]=d.createFramebuffer()}else{if(X.__webglFramebuffer=d.createFramebuffer(),se)if(n.drawBuffers){const D=E.texture;for(let N=0,oe=D.length;N<oe;N++){const pe=i.get(D[N]);pe.__webglTexture===void 0&&(pe.__webglTexture=d.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&qe(E)===!1){const D=se?M:[M];X.__webglMultisampledFramebuffer=d.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let N=0;N<D.length;N++){const oe=D[N];X.__webglColorRenderbuffer[N]=d.createRenderbuffer(),d.bindRenderbuffer(36161,X.__webglColorRenderbuffer[N]);const pe=r.convert(oe.format,oe.encoding),le=r.convert(oe.type),fe=h(oe.internalFormat,pe,le,oe.encoding,E.isXRRenderTarget===!0),ge=pt(E);d.renderbufferStorageMultisample(36161,ge,fe,E.width,E.height),d.framebufferRenderbuffer(36160,36064+N,36161,X.__webglColorRenderbuffer[N])}d.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=d.createRenderbuffer(),Ve(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(de){t.bindTexture(34067,te.__webglTexture),O(34067,M,Se);for(let D=0;D<6;D++)ce(X.__webglFramebuffer[D],E,M,36064,34069+D);S(M,Se)&&P(34067),t.unbindTexture()}else if(se){const D=E.texture;for(let N=0,oe=D.length;N<oe;N++){const pe=D[N],le=i.get(pe);t.bindTexture(3553,le.__webglTexture),O(3553,pe,Se),ce(X.__webglFramebuffer,E,pe,36064+N,3553),S(pe,Se)&&P(3553)}t.unbindTexture()}else{let D=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?D=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,te.__webglTexture),O(D,M,Se),ce(X.__webglFramebuffer,E,M,36064,D),S(M,Se)&&P(D),t.unbindTexture()}E.depthBuffer&&Me(E)}function ht(E){const M=G(E)||s,X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,de=X.length;te<de;te++){const se=X[te];if(S(se,M)){const Se=E.isWebGLCubeRenderTarget?34067:3553,D=i.get(se).__webglTexture;t.bindTexture(Se,D),P(Se),t.unbindTexture()}}}function Bt(E){if(s&&E.samples>0&&qe(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],X=E.width,te=E.height;let de=16384;const se=[],Se=E.stencilBuffer?33306:36096,D=i.get(E),N=E.isWebGLMultipleRenderTargets===!0;if(N)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),d.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){se.push(36064+oe),E.depthBuffer&&se.push(Se);const pe=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(pe===!1&&(E.depthBuffer&&(de|=256),E.stencilBuffer&&(de|=1024)),N&&d.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[oe]),pe===!0&&(d.invalidateFramebuffer(36008,[Se]),d.invalidateFramebuffer(36009,[Se])),N){const le=i.get(M[oe]).__webglTexture;d.framebufferTexture2D(36009,36064,3553,le,0)}d.blitFramebuffer(0,0,X,te,0,0,X,te,de,9728),z&&d.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),d.framebufferRenderbuffer(36160,36064+oe,36161,D.__webglColorRenderbuffer[oe]);const pe=i.get(M[oe]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),d.framebufferTexture2D(36009,36064+oe,3553,pe,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function pt(E){return Math.min(p,E.samples)}function qe(E){const M=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function p2(E){const M=a.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function Xt(E,M){const X=E.encoding,te=E.format,de=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Di||X!==T0&&(X===Ke?s===!1?e.has("EXT_sRGB")===!0&&te===A2?(E.format=Di,E.minFilter=g2,E.generateMipmaps=!1):M=q7.sRGBToLinear(M):(te!==A2||de!==d1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=L,this.setTexture3D=W,this.setTextureCube=re,this.rebindTextures=wt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=qe}function vl(d,e,t){const i=t.isWebGL2;function n(r,a=null){let s;if(r===d1)return 5121;if(r===zn)return 32819;if(r===un)return 32820;if(r===pn)return 5120;if(r===mn)return 5122;if(r===W7)return 5123;if(r===cn)return 5124;if(r===q0)return 5125;if(r===Y0)return 5126;if(r===h3)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===gn)return 6406;if(r===A2)return 6408;if(r===hn)return 6409;if(r===_n)return 6410;if(r===K0)return 6402;if(r===H1)return 34041;if(r===fn)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Di)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Gn)return 6403;if(r===vn)return 36244;if(r===bn)return 33319;if(r===Mn)return 33320;if(r===Sn)return 36249;if(r===I5||r===O5||r===F5||r===N5)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===I5)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===O5)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===F5)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===N5)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===I5)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===O5)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===F5)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===N5)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===B4||r===V4||r===H4||r===W4)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===B4)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===V4)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===H4)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===W4)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wn)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===j4||r===X4)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===j4)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===X4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===q4||r===Y4||r===Z4||r===K4||r===J4||r===Q4||r===$4||r===e6||r===t6||r===i6||r===n6||r===r6||r===d6||r===a6)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===q4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Y4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Z4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===K4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===J4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Q4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$4)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===e6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===t6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===i6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===n6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===r6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===d6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===a6)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===s6)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===s6)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===I1?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):d[r]!==void 0?d[r]:null}return{convert:n}}class bl extends d2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class e5 extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ml={type:"move"};class yi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new e5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new e5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new e5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const s=this._targetRay,l=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(const m of e.hand.values()){const c=t.getJointPose(m,i),u=this._getHandJoint(o,m);c!==null&&(u.matrix.fromArray(c.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=c.radius),u.visible=c!==null}const x=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],y=x.position.distanceTo(p.position),z=.02,g=.005;o.inputState.pinching&&y>z+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&y<=z-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ml)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new e5;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Sl extends Rt{constructor(e,t,i,n,r,a,s,l,o,x){if(x=x!==void 0?x:K0,x!==K0&&x!==H1)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&x===K0&&(i=q0),i===void 0&&x===H1&&(i=I1),super(null,n,r,a,s,l,x,i,o),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1}}class wl extends l1{constructor(e,t){super();const i=this;let n=null,r=1,a=null,s="local-floor",l=null,o=null,x=null,p=null,y=null,z=null;const g=t.getContextAttributes();let m=null,c=null;const u=[],f=[],_=new Set,G=new Map,v=new d2;v.layers.enable(1),v.viewport=new Lt;const S=new d2;S.layers.enable(2),S.viewport=new Lt;const P=[v,S],h=new bl;h.layers.enable(1),h.layers.enable(2);let b=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=u[L];return W===void 0&&(W=new yi,u[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=u[L];return W===void 0&&(W=new yi,u[L]=W),W.getGripSpace()},this.getHand=function(L){let W=u[L];return W===void 0&&(W=new yi,u[L]=W),W.getHandSpace()};function A(L){const W=f.indexOf(L.inputSource);if(W===-1)return;const re=u[W];re!==void 0&&re.dispatchEvent({type:L.type,data:L.inputSource})}function F(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",C);for(let L=0;L<u.length;L++){const W=f[L];W!==null&&(f[L]=null,u[L].disconnect(W))}b=null,T=null,e.setRenderTarget(m),y=null,p=null,x=null,n=null,c=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return x},this.getFrame=function(){return z},this.getSession=function(){return n},this.setSession=async function(L){if(n=L,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",F),n.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(n,t,W),n.updateRenderState({baseLayer:y}),c=new E0(y.framebufferWidth,y.framebufferHeight,{format:A2,type:d1,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,re=null,$=null;g.depth&&($=g.stencil?35056:33190,W=g.stencil?H1:K0,re=g.stencil?I1:q0);const ne={colorFormat:32856,depthFormat:$,scaleFactor:r};x=new XRWebGLBinding(n,t),p=x.createProjectionLayer(ne),n.updateRenderState({layers:[p]}),c=new E0(p.textureWidth,p.textureHeight,{format:A2,type:d1,depthTexture:new Sl(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const O=e.properties.get(c);O.__ignoreDepthValues=p.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(s),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function C(L){for(let W=0;W<L.removed.length;W++){const re=L.removed[W],$=f.indexOf(re);$>=0&&(f[$]=null,u[$].disconnect(re))}for(let W=0;W<L.added.length;W++){const re=L.added[W];let $=f.indexOf(re);if($===-1){for(let O=0;O<u.length;O++)if(O>=f.length){f.push(re),$=O;break}else if(f[O]===null){f[O]=re,$=O;break}if($===-1)break}const ne=u[$];ne&&ne.connect(re)}}const R=new V,B=new V;function j(L,W,re){R.setFromMatrixPosition(W.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const $=R.distanceTo(B),ne=W.projectionMatrix.elements,O=re.projectionMatrix.elements,xe=ne[14]/(ne[10]-1),ue=ne[14]/(ne[10]+1),be=(ne[9]+1)/ne[5],ce=(ne[9]-1)/ne[5],Ve=(ne[8]-1)/ne[0],Ee=(O[8]+1)/O[0],Me=xe*Ve,wt=xe*Ee,ft=$/(-Ve+Ee),ht=ft*-Ve;W.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ht),L.translateZ(ft),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Bt=xe+ft,pt=ue+ft,qe=Me-ht,p2=wt+($-ht),Xt=be*ue/pt*Bt,E=ce*ue/pt*Bt;L.projectionMatrix.makePerspective(qe,p2,Xt,E,Bt,pt)}function Z(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(n===null)return;h.near=S.near=v.near=L.near,h.far=S.far=v.far=L.far,(b!==h.near||T!==h.far)&&(n.updateRenderState({depthNear:h.near,depthFar:h.far}),b=h.near,T=h.far);const W=L.parent,re=h.cameras;Z(h,W);for(let ne=0;ne<re.length;ne++)Z(re[ne],W);h.matrixWorld.decompose(h.position,h.quaternion,h.scale),L.matrix.copy(h.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const $=L.children;for(let ne=0,O=$.length;ne<O;ne++)$[ne].updateMatrixWorld(!0);re.length===2?j(h,v,S):h.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return h},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(y!==null)return y.fixedFoveation},this.setFoveation=function(L){p!==null&&(p.fixedFoveation=L),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=L)},this.getPlanes=function(){return _};let H=null;function Q(L,W){if(o=W.getViewerPose(l||a),z=W,o!==null){const re=o.views;y!==null&&(e.setRenderTargetFramebuffer(c,y.framebuffer),e.setRenderTarget(c));let $=!1;re.length!==h.cameras.length&&(h.cameras.length=0,$=!0);for(let ne=0;ne<re.length;ne++){const O=re[ne];let xe=null;if(y!==null)xe=y.getViewport(O);else{const be=x.getViewSubImage(p,O);xe=be.viewport,ne===0&&(e.setRenderTargetTextures(c,be.colorTexture,p.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(c))}let ue=P[ne];ue===void 0&&(ue=new d2,ue.layers.enable(ne),ue.viewport=new Lt,P[ne]=ue),ue.matrix.fromArray(O.transform.matrix),ue.projectionMatrix.fromArray(O.projectionMatrix),ue.viewport.set(xe.x,xe.y,xe.width,xe.height),ne===0&&h.matrix.copy(ue.matrix),$===!0&&h.cameras.push(ue)}}for(let re=0;re<u.length;re++){const $=f[re],ne=u[re];$!==null&&ne!==void 0&&ne.update($,W,l||a)}if(H&&H(L,W),W.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let re=null;for(const $ of _)W.detectedPlanes.has($)||(re===null&&(re=[]),re.push($));if(re!==null)for(const $ of re)_.delete($),G.delete($),i.dispatchEvent({type:"planeremoved",data:$});for(const $ of W.detectedPlanes)if(!_.has($))_.add($),G.set($,W.lastChangedTime),i.dispatchEvent({type:"planeadded",data:$});else{const ne=G.get($);$.lastChangedTime>ne&&(G.set($,$.lastChangedTime),i.dispatchEvent({type:"planechanged",data:$}))}}z=null}const J=new n8;J.setAnimationLoop(Q),this.setAnimationLoop=function(L){H=L},this.dispose=function(){}}}function Tl(d,e){function t(m,c){c.color.getRGB(m.fogColor.value,e8(d)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function i(m,c,u,f,_){c.isMeshBasicMaterial||c.isMeshLambertMaterial?n(m,c):c.isMeshToonMaterial?(n(m,c),x(m,c)):c.isMeshPhongMaterial?(n(m,c),o(m,c)):c.isMeshStandardMaterial?(n(m,c),p(m,c),c.isMeshPhysicalMaterial&&y(m,c,_)):c.isMeshMatcapMaterial?(n(m,c),z(m,c)):c.isMeshDepthMaterial?n(m,c):c.isMeshDistanceMaterial?(n(m,c),g(m,c)):c.isMeshNormalMaterial?n(m,c):c.isLineBasicMaterial?(r(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?s(m,c,u,f):c.isSpriteMaterial?l(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function n(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.bumpMap&&(m.bumpMap.value=c.bumpMap,m.bumpScale.value=c.bumpScale,c.side===b2&&(m.bumpScale.value*=-1)),c.displacementMap&&(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap),c.normalMap&&(m.normalMap.value=c.normalMap,m.normalScale.value.copy(c.normalScale),c.side===b2&&m.normalScale.value.negate()),c.specularMap&&(m.specularMap.value=c.specularMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const u=e.get(c).envMap;if(u&&(m.envMap.value=u,m.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const G=d.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*G}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity);let f;c.map?f=c.map:c.specularMap?f=c.specularMap:c.displacementMap?f=c.displacementMap:c.normalMap?f=c.normalMap:c.bumpMap?f=c.bumpMap:c.roughnessMap?f=c.roughnessMap:c.metalnessMap?f=c.metalnessMap:c.alphaMap?f=c.alphaMap:c.emissiveMap?f=c.emissiveMap:c.clearcoatMap?f=c.clearcoatMap:c.clearcoatNormalMap?f=c.clearcoatNormalMap:c.clearcoatRoughnessMap?f=c.clearcoatRoughnessMap:c.iridescenceMap?f=c.iridescenceMap:c.iridescenceThicknessMap?f=c.iridescenceThicknessMap:c.specularIntensityMap?f=c.specularIntensityMap:c.specularColorMap?f=c.specularColorMap:c.transmissionMap?f=c.transmissionMap:c.thicknessMap?f=c.thicknessMap:c.sheenColorMap?f=c.sheenColorMap:c.sheenRoughnessMap&&(f=c.sheenRoughnessMap),f!==void 0&&(f.isWebGLRenderTarget&&(f=f.texture),f.matrixAutoUpdate===!0&&f.updateMatrix(),m.uvTransform.value.copy(f.matrix));let _;c.aoMap?_=c.aoMap:c.lightMap&&(_=c.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function r(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function s(m,c,u,f){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*u,m.scale.value=f*.5,c.map&&(m.map.value=c.map),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let _;c.map?_=c.map:c.alphaMap&&(_=c.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map),c.alphaMap&&(m.alphaMap.value=c.alphaMap),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let u;c.map?u=c.map:c.alphaMap&&(u=c.alphaMap),u!==void 0&&(u.matrixAutoUpdate===!0&&u.updateMatrix(),m.uvTransform.value.copy(u.matrix))}function o(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function x(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function p(m,c){m.roughness.value=c.roughness,m.metalness.value=c.metalness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function y(m,c,u){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),m.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===b2&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=u.texture,m.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap)}function z(m,c){c.matcap&&(m.matcap.value=c.matcap)}function g(m,c){m.referencePosition.value.copy(c.referencePosition),m.nearDistance.value=c.nearDistance,m.farDistance.value=c.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function El(d,e,t,i){let n={},r={},a=[];const s=t.isWebGL2?d.getParameter(35375):0;function l(f,_){const G=_.program;i.uniformBlockBinding(f,G)}function o(f,_){let G=n[f.id];G===void 0&&(g(f),G=x(f),n[f.id]=G,f.addEventListener("dispose",c));const v=_.program;i.updateUBOMapping(f,v);const S=e.render.frame;r[f.id]!==S&&(y(f),r[f.id]=S)}function x(f){const _=p();f.__bindingPointIndex=_;const G=d.createBuffer(),v=f.__size,S=f.usage;return d.bindBuffer(35345,G),d.bufferData(35345,v,S),d.bindBuffer(35345,null),d.bindBufferBase(35345,_,G),G}function p(){for(let f=0;f<s;f++)if(a.indexOf(f)===-1)return a.push(f),f;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(f){const _=n[f.id],G=f.uniforms,v=f.__cache;d.bindBuffer(35345,_);for(let S=0,P=G.length;S<P;S++){const h=G[S];if(z(h,S,v)===!0){const b=h.__offset,T=Array.isArray(h.value)?h.value:[h.value];let A=0;for(let F=0;F<T.length;F++){const C=T[F],R=m(C);typeof C=="number"?(h.__data[0]=C,d.bufferSubData(35345,b+A,h.__data)):C.isMatrix3?(h.__data[0]=C.elements[0],h.__data[1]=C.elements[1],h.__data[2]=C.elements[2],h.__data[3]=C.elements[0],h.__data[4]=C.elements[3],h.__data[5]=C.elements[4],h.__data[6]=C.elements[5],h.__data[7]=C.elements[0],h.__data[8]=C.elements[6],h.__data[9]=C.elements[7],h.__data[10]=C.elements[8],h.__data[11]=C.elements[0]):(C.toArray(h.__data,A),A+=R.storage/Float32Array.BYTES_PER_ELEMENT)}d.bufferSubData(35345,b,h.__data)}}d.bindBuffer(35345,null)}function z(f,_,G){const v=f.value;if(G[_]===void 0){if(typeof v=="number")G[_]=v;else{const S=Array.isArray(v)?v:[v],P=[];for(let h=0;h<S.length;h++)P.push(S[h].clone());G[_]=P}return!0}else if(typeof v=="number"){if(G[_]!==v)return G[_]=v,!0}else{const S=Array.isArray(G[_])?G[_]:[G[_]],P=Array.isArray(v)?v:[v];for(let h=0;h<S.length;h++){const b=S[h];if(b.equals(P[h])===!1)return b.copy(P[h]),!0}}return!1}function g(f){const _=f.uniforms;let G=0;const v=16;let S=0;for(let P=0,h=_.length;P<h;P++){const b=_[P],T={boundary:0,storage:0},A=Array.isArray(b.value)?b.value:[b.value];for(let F=0,C=A.length;F<C;F++){const R=A[F],B=m(R);T.boundary+=B.boundary,T.storage+=B.storage}if(b.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=G,P>0){S=G%v;const F=v-S;S!==0&&F-T.boundary<0&&(G+=v-S,b.__offset=G)}G+=T.storage}return S=G%v,S>0&&(G+=v-S),f.__size=G,f.__cache={},this}function m(f){const _={boundary:0,storage:0};return typeof f=="number"?(_.boundary=4,_.storage=4):f.isVector2?(_.boundary=8,_.storage=8):f.isVector3||f.isColor?(_.boundary=16,_.storage=12):f.isVector4?(_.boundary=16,_.storage=16):f.isMatrix3?(_.boundary=48,_.storage=48):f.isMatrix4?(_.boundary=64,_.storage=64):f.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",f),_}function c(f){const _=f.target;_.removeEventListener("dispose",c);const G=a.indexOf(_.__bindingPointIndex);a.splice(G,1),d.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function u(){for(const f in n)d.deleteBuffer(n[f]);a=[],n={},r={}}return{bind:l,update:o,dispose:u}}function Al(){const d=G3("canvas");return d.style.display="block",d}function o8(d={}){this.isWebGLRenderer=!0;const e=d.canvas!==void 0?d.canvas:Al(),t=d.context!==void 0?d.context:null,i=d.depth!==void 0?d.depth:!0,n=d.stencil!==void 0?d.stencil:!0,r=d.antialias!==void 0?d.antialias:!1,a=d.premultipliedAlpha!==void 0?d.premultipliedAlpha:!0,s=d.preserveDrawingBuffer!==void 0?d.preserveDrawingBuffer:!1,l=d.powerPreference!==void 0?d.powerPreference:"default",o=d.failIfMajorPerformanceCaveat!==void 0?d.failIfMajorPerformanceCaveat:!1;let x;t!==null?x=t.getContextAttributes().alpha:x=d.alpha!==void 0?d.alpha:!1;let p=null,y=null;const z=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=T0,this.physicallyCorrectLights=!1,this.toneMapping=N2,this.toneMappingExposure=1;const m=this;let c=!1,u=0,f=0,_=null,G=-1,v=null;const S=new Lt,P=new Lt;let h=null,b=e.width,T=e.height,A=1,F=null,C=null;const R=new Lt(0,0,b,T),B=new Lt(0,0,b,T);let j=!1;const Z=new i4;let H=!1,Q=!1,J=null;const L=new bt,W=new De,re=new V,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return _===null?A:1}let O=t;function xe(w,k){for(let Y=0;Y<w.length;Y++){const U=w[Y],K=e.getContext(U,k);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:o};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qi}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),O===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),O=xe(k,w),O===null)throw xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ue,be,ce,Ve,Ee,Me,wt,ft,ht,Bt,pt,qe,p2,Xt,E,M,X,te,de,se,Se,D,N,oe;function pe(){ue=new ka(O),be=new Ra(O,ue,d),ue.init(be),D=new vl(O,ue,be),ce=new _l(O,ue,be),Ve=new Ha,Ee=new al,Me=new Gl(O,ue,ce,Ee,be,D,Ve),wt=new Oa(m),ft=new Ua(m),ht=new Qn(O,be),N=new Da(O,ue,ht,be),Bt=new Ba(O,ht,Ve,N),pt=new qa(O,Bt,ht,Ve),de=new Xa(O,be,Me),M=new Ia(Ee),qe=new dl(m,wt,ft,ue,be,N,M),p2=new Tl(m,Ee),Xt=new ll,E=new cl(ue,be),te=new Pa(m,wt,ft,ce,pt,x,a),X=new hl(m,pt,be),oe=new El(O,Ve,be,ce),se=new La(O,ue,Ve,be),Se=new Va(O,ue,Ve,be),Ve.programs=qe.programs,m.capabilities=be,m.extensions=ue,m.properties=Ee,m.renderLists=Xt,m.shadowMap=X,m.state=ce,m.info=Ve}pe();const le=new wl(m,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(w){w!==void 0&&(A=w,this.setSize(b,T,!1))},this.getSize=function(w){return w.set(b,T)},this.setSize=function(w,k,Y){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=w,T=k,e.width=Math.floor(w*A),e.height=Math.floor(k*A),Y!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(b*A,T*A).floor()},this.setDrawingBufferSize=function(w,k,Y){b=w,T=k,A=Y,e.width=Math.floor(w*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,k,Y,U){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,k,Y,U),ce.viewport(S.copy(R).multiplyScalar(A).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,k,Y,U){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,k,Y,U),ce.scissor(P.copy(B).multiplyScalar(A).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){ce.setScissorTest(j=w)},this.setOpaqueSort=function(w){F=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(w=!0,k=!0,Y=!0){let U=0;w&&(U|=16384),k&&(U|=256),Y&&(U|=1024),O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),Xt.dispose(),E.dispose(),Ee.dispose(),wt.dispose(),ft.dispose(),pt.dispose(),N.dispose(),oe.dispose(),qe.dispose(),le.dispose(),le.removeEventListener("sessionstart",ye),le.removeEventListener("sessionend",he),J&&(J.dispose(),J=null),He.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),c=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),c=!1;const w=Ve.autoReset,k=X.enabled,Y=X.autoUpdate,U=X.needsUpdate,K=X.type;pe(),Ve.autoReset=w,X.enabled=k,X.autoUpdate=Y,X.needsUpdate=U,X.type=K}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const k=w.target;k.removeEventListener("dispose",Fe),Ze(k)}function Ze(w){I(w),Ee.remove(w)}function I(w){const k=Ee.get(w).programs;k!==void 0&&(k.forEach(function(Y){qe.releaseProgram(Y)}),w.isShaderMaterial&&qe.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,U,K,Ge){k===null&&(k=$);const we=K.isMesh&&K.matrixWorld.determinant()<0,Le=T9(w,k,Y,U,K);ce.setMaterial(U,we);let Re=Y.index,Be=1;U.wireframe===!0&&(Re=Bt.getWireframeAttribute(Y),Be=2);const Ne=Y.drawRange,Ue=Y.attributes.position;let ct=Ne.start*Be,$t=(Ne.start+Ne.count)*Be;Ge!==null&&(ct=Math.max(ct,Ge.start*Be),$t=Math.min($t,(Ge.start+Ge.count)*Be)),Re!==null?(ct=Math.max(ct,0),$t=Math.min($t,Re.count)):Ue!=null&&(ct=Math.max(ct,0),$t=Math.min($t,Ue.count));const j2=$t-ct;if(j2<0||j2===1/0)return;N.setup(K,U,Le,Y,Re);let L0,zt=se;if(Re!==null&&(L0=ht.get(Re),zt=Se,zt.setIndex(L0)),K.isMesh)U.wireframe===!0?(ce.setLineWidth(U.wireframeLinewidth*ne()),zt.setMode(1)):zt.setMode(4);else if(K.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),ce.setLineWidth(ke*ne()),K.isLineSegments?zt.setMode(1):K.isLineLoop?zt.setMode(2):zt.setMode(3)}else K.isPoints?zt.setMode(0):K.isSprite&&zt.setMode(4);if(K.isInstancedMesh)zt.renderInstances(ct,j2,K.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,A5=Math.min(Y.instanceCount,ke);zt.renderInstances(ct,j2,A5)}else zt.render(ct,j2)},this.compile=function(w,k){function Y(U,K,Ge){U.transparent===!0&&U.side===R3?(U.side=b2,U.needsUpdate=!0,m2(U,K,Ge),U.side=r1,U.needsUpdate=!0,m2(U,K,Ge),U.side=R3):m2(U,K,Ge)}y=E.get(w),y.init(),g.push(y),w.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(y.pushLight(U),U.castShadow&&y.pushShadow(U))}),y.setupLights(m.physicallyCorrectLights),w.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let Ge=0;Ge<K.length;Ge++){const we=K[Ge];Y(we,w,U)}else Y(K,w,U)}),g.pop(),y=null};let q=null;function ee(w){q&&q(w)}function ye(){He.stop()}function he(){He.start()}const He=new n8;He.setAnimationLoop(ee),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(w){q=w,le.setAnimationLoop(w),w===null?He.stop():He.start()},le.addEventListener("sessionstart",ye),le.addEventListener("sessionend",he),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(c===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,k,_),y=E.get(w,g.length),y.init(),g.push(y),L.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(L),Q=this.localClippingEnabled,H=M.init(this.clippingPlanes,Q,k),p=Xt.get(w,z.length),p.init(),z.push(p),Tt(w,k,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort(F,C),H===!0&&M.beginShadows();const Y=y.state.shadowsArray;if(X.render(Y,w,k),H===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,w),y.setupLights(m.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let K=0,Ge=U.length;K<Ge;K++){const we=U[K];Ot(p,w,we,we.viewport)}}else Ot(p,w,k);_!==null&&(Me.updateMultisampleRenderTarget(_),Me.updateRenderTargetMipmap(_)),w.isScene===!0&&w.onAfterRender(m,w,k),N.resetDefaultState(),G=-1,v=null,g.pop(),g.length>0?y=g[g.length-1]:y=null,z.pop(),z.length>0?p=z[z.length-1]:p=null};function Tt(w,k,Y,U){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){U&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(L);const we=pt.update(w),Le=w.material;Le.visible&&p.push(w,we,Le,Y,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ve.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ve.render.frame),!w.frustumCulled||Z.intersectsObject(w))){U&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(L);const we=pt.update(w),Le=w.material;if(Array.isArray(Le)){const Re=we.groups;for(let Be=0,Ne=Re.length;Be<Ne;Be++){const Ue=Re[Be],ct=Le[Ue.materialIndex];ct&&ct.visible&&p.push(w,we,ct,Y,re.z,Ue)}}else Le.visible&&p.push(w,we,Le,Y,re.z,null)}}const Ge=w.children;for(let we=0,Le=Ge.length;we<Le;we++)Tt(Ge[we],k,Y,U)}function Ot(w,k,Y,U){const K=w.opaque,Ge=w.transmissive,we=w.transparent;y.setupLightsView(Y),Ge.length>0&&D0(K,k,Y),U&&ce.viewport(S.copy(U)),K.length>0&&at(K,k,Y),Ge.length>0&&at(Ge,k,Y),we.length>0&&at(we,k,Y),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function D0(w,k,Y){const U=be.isWebGL2;J===null&&(J=new E0(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?h3:d1,minFilter:f3,samples:U&&r===!0?4:0})),m.getDrawingBufferSize(W),U?J.setSize(W.x,W.y):J.setSize(Li(W.x),Li(W.y));const K=m.getRenderTarget();m.setRenderTarget(J),m.clear();const Ge=m.toneMapping;m.toneMapping=N2,at(w,k,Y),m.toneMapping=Ge,Me.updateMultisampleRenderTarget(J),Me.updateRenderTargetMipmap(J),m.setRenderTarget(K)}function at(w,k,Y){const U=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Ge=w.length;K<Ge;K++){const we=w[K],Le=we.object,Re=we.geometry,Be=U===null?we.material:U,Ne=we.group;Le.layers.test(Y.layers)&&W2(Le,k,Y,Re,Be,Ne)}}function W2(w,k,Y,U,K,Ge){w.onBeforeRender(m,k,Y,U,K,Ge),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(m,k,Y,U,w,Ge),K.transparent===!0&&K.side===R3?(K.side=b2,K.needsUpdate=!0,m.renderBufferDirect(Y,k,U,K,w,Ge),K.side=r1,K.needsUpdate=!0,m.renderBufferDirect(Y,k,U,K,w,Ge),K.side=R3):m.renderBufferDirect(Y,k,U,K,w,Ge),w.onAfterRender(m,k,Y,U,K,Ge)}function m2(w,k,Y){k.isScene!==!0&&(k=$);const U=Ee.get(w),K=y.state.lights,Ge=y.state.shadowsArray,we=K.state.version,Le=qe.getParameters(w,K.state,Ge,k,Y),Re=qe.getProgramCacheKey(Le);let Be=U.programs;U.environment=w.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(w.isMeshStandardMaterial?ft:wt).get(w.envMap||U.environment),Be===void 0&&(w.addEventListener("dispose",Fe),Be=new Map,U.programs=Be);let Ne=Be.get(Re);if(Ne!==void 0){if(U.currentProgram===Ne&&U.lightsStateVersion===we)return T4(w,Le),Ne}else Le.uniforms=qe.getUniforms(w),w.onBuild(Y,Le,m),w.onBeforeCompile(Le,m),Ne=qe.acquireProgram(Le,Re),Be.set(Re,Ne),U.uniforms=Le.uniforms;const Ue=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=M.uniform),T4(w,Le),U.needsLights=A9(w),U.lightsStateVersion=we,U.needsLights&&(Ue.ambientLightColor.value=K.state.ambient,Ue.lightProbe.value=K.state.probe,Ue.directionalLights.value=K.state.directional,Ue.directionalLightShadows.value=K.state.directionalShadow,Ue.spotLights.value=K.state.spot,Ue.spotLightShadows.value=K.state.spotShadow,Ue.rectAreaLights.value=K.state.rectArea,Ue.ltc_1.value=K.state.rectAreaLTC1,Ue.ltc_2.value=K.state.rectAreaLTC2,Ue.pointLights.value=K.state.point,Ue.pointLightShadows.value=K.state.pointShadow,Ue.hemisphereLights.value=K.state.hemi,Ue.directionalShadowMap.value=K.state.directionalShadowMap,Ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ue.spotShadowMap.value=K.state.spotShadowMap,Ue.spotLightMatrix.value=K.state.spotLightMatrix,Ue.spotLightMap.value=K.state.spotLightMap,Ue.pointShadowMap.value=K.state.pointShadowMap,Ue.pointShadowMatrix.value=K.state.pointShadowMatrix);const ct=Ne.getUniforms(),$t=r5.seqWithValue(ct.seq,Ue);return U.currentProgram=Ne,U.uniformsList=$t,Ne}function T4(w,k){const Y=Ee.get(w);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function T9(w,k,Y,U,K){k.isScene!==!0&&(k=$),Me.resetTextureUnits();const Ge=k.fog,we=U.isMeshStandardMaterial?k.environment:null,Le=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:T0,Re=(U.isMeshStandardMaterial?ft:wt).get(U.envMap||we),Be=U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ne=!!U.normalMap&&!!Y.attributes.tangent,Ue=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,$t=!!Y.morphAttributes.color,j2=U.toneMapped?m.toneMapping:N2,L0=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,zt=L0!==void 0?L0.length:0,ke=Ee.get(U),A5=y.state.lights;if(H===!0&&(Q===!0||w!==v)){const e2=w===v&&U.id===G;M.setState(U,w,e2)}let Et=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==A5.state.version||ke.outputEncoding!==Le||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Re||U.fog===!0&&ke.fog!==Ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ne||ke.morphTargets!==Ue||ke.morphNormals!==ct||ke.morphColors!==$t||ke.toneMapping!==j2||be.isWebGL2===!0&&ke.morphTargetsCount!==zt)&&(Et=!0):(Et=!0,ke.__version=U.version);let R0=ke.currentProgram;Et===!0&&(R0=m2(U,k,K));let E4=!1,$1=!1,C5=!1;const Vt=R0.getUniforms(),I0=ke.uniforms;if(ce.useProgram(R0.program)&&(E4=!0,$1=!0,C5=!0),U.id!==G&&(G=U.id,$1=!0),E4||v!==w){if(Vt.setValue(O,"projectionMatrix",w.projectionMatrix),be.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),v!==w&&(v=w,$1=!0,C5=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const e2=Vt.map.cameraPosition;e2!==void 0&&e2.setValue(O,re.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&Vt.setValue(O,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Vt.setOptional(O,K,"bindMatrix"),Vt.setOptional(O,K,"bindMatrixInverse");const e2=K.skeleton;e2&&(be.floatVertexTextures?(e2.boneTexture===null&&e2.computeBoneTexture(),Vt.setValue(O,"boneTexture",e2.boneTexture,Me),Vt.setValue(O,"boneTextureSize",e2.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const P5=Y.morphAttributes;if((P5.position!==void 0||P5.normal!==void 0||P5.color!==void 0&&be.isWebGL2===!0)&&de.update(K,Y,U,R0),($1||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,Vt.setValue(O,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(I0.envMap.value=Re,I0.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$1&&(Vt.setValue(O,"toneMappingExposure",m.toneMappingExposure),ke.needsLights&&E9(I0,C5),Ge&&U.fog===!0&&p2.refreshFogUniforms(I0,Ge),p2.refreshMaterialUniforms(I0,U,A,T,J),r5.upload(O,ke.uniformsList,I0,Me)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(r5.upload(O,ke.uniformsList,I0,Me),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Vt.setValue(O,"center",K.center),Vt.setValue(O,"modelViewMatrix",K.modelViewMatrix),Vt.setValue(O,"normalMatrix",K.normalMatrix),Vt.setValue(O,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const e2=U.uniformsGroups;for(let D5=0,C9=e2.length;D5<C9;D5++)if(be.isWebGL2){const A4=e2[D5];oe.update(A4,R0),oe.bind(A4,R0)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return R0}function E9(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function A9(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(w,k,Y){Ee.get(w.texture).__webglTexture=k,Ee.get(w.depthTexture).__webglTexture=Y;const U=Ee.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Y===void 0,U.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const Y=Ee.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Y=0){_=w,u=k,f=Y;let U=!0,K=null,Ge=!1,we=!1;if(w){const Re=Ee.get(w);Re.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),U=!1):Re.__webglFramebuffer===void 0?Me.setupRenderTarget(w):Re.__hasExternalTextures&&Me.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const Ne=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=Ne[k],Ge=!0):be.isWebGL2&&w.samples>0&&Me.useMultisampledRTT(w)===!1?K=Ee.get(w).__webglMultisampledFramebuffer:K=Ne,S.copy(w.viewport),P.copy(w.scissor),h=w.scissorTest}else S.copy(R).multiplyScalar(A).floor(),P.copy(B).multiplyScalar(A).floor(),h=j;if(ce.bindFramebuffer(36160,K)&&be.drawBuffers&&U&&ce.drawBuffers(w,K),ce.viewport(S),ce.scissor(P),ce.setScissorTest(h),Ge){const Re=Ee.get(w.texture);O.framebufferTexture2D(36160,36064,34069+k,Re.__webglTexture,Y)}else if(we){const Re=Ee.get(w.texture),Be=k||0;O.framebufferTextureLayer(36160,36064,Re.__webglTexture,Y||0,Be)}G=-1},this.readRenderTargetPixels=function(w,k,Y,U,K,Ge,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){ce.bindFramebuffer(36160,Le);try{const Re=w.texture,Be=Re.format,Ne=Re.type;if(Be!==A2&&D.convert(Be)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===h3&&(ue.has("EXT_color_buffer_half_float")||be.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ne!==d1&&D.convert(Ne)!==O.getParameter(35738)&&!(Ne===Y0&&(be.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-U&&Y>=0&&Y<=w.height-K&&O.readPixels(k,Y,U,K,D.convert(Be),D.convert(Ne),Ge)}finally{const Re=_!==null?Ee.get(_).__webglFramebuffer:null;ce.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(w,k,Y=0){const U=Math.pow(2,-Y),K=Math.floor(k.image.width*U),Ge=Math.floor(k.image.height*U);Me.setTexture2D(k,0),O.copyTexSubImage2D(3553,Y,0,0,w.x,w.y,K,Ge),ce.unbindTexture()},this.copyTextureToTexture=function(w,k,Y,U=0){const K=k.image.width,Ge=k.image.height,we=D.convert(Y.format),Le=D.convert(Y.type);Me.setTexture2D(Y,0),O.pixelStorei(37440,Y.flipY),O.pixelStorei(37441,Y.premultiplyAlpha),O.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?O.texSubImage2D(3553,U,w.x,w.y,K,Ge,we,Le,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(3553,U,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):O.texSubImage2D(3553,U,w.x,w.y,we,Le,k.image),U===0&&Y.generateMipmaps&&O.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Y,U,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Re=D.convert(U.format),Be=D.convert(U.type);let Ne;if(U.isData3DTexture)Me.setTexture3D(U,0),Ne=32879;else if(U.isDataArrayTexture)Me.setTexture2DArray(U,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,U.flipY),O.pixelStorei(37441,U.premultiplyAlpha),O.pixelStorei(3317,U.unpackAlignment);const Ue=O.getParameter(3314),ct=O.getParameter(32878),$t=O.getParameter(3316),j2=O.getParameter(3315),L0=O.getParameter(32877),zt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;O.pixelStorei(3314,zt.width),O.pixelStorei(32878,zt.height),O.pixelStorei(3316,w.min.x),O.pixelStorei(3315,w.min.y),O.pixelStorei(32877,w.min.z),Y.isDataTexture||Y.isData3DTexture?O.texSubImage3D(Ne,K,k.x,k.y,k.z,Ge,we,Le,Re,Be,zt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,K,k.x,k.y,k.z,Ge,we,Le,Re,zt.data)):O.texSubImage3D(Ne,K,k.x,k.y,k.z,Ge,we,Le,Re,Be,zt),O.pixelStorei(3314,Ue),O.pixelStorei(32878,ct),O.pixelStorei(3316,$t),O.pixelStorei(3315,j2),O.pixelStorei(32877,L0),K===0&&U.generateMipmaps&&O.generateMipmap(Ne),ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Me.setTextureCube(w,0):w.isData3DTexture?Me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Me.setTexture2DArray(w,0):Me.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){u=0,f=0,_=null,ce.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Cl extends o8{}Cl.prototype.isWebGL1Renderer=!0;let Pl=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class pi extends C2{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const W6={enabled:!1,files:{},add:function(d,e){this.enabled!==!1&&(this.files[d]=e)},get:function(d){if(this.enabled!==!1)return this.files[d]},remove:function(d){delete this.files[d]},clear:function(){this.files={}}};class Dl{constructor(e,t,i){const n=this;let r=!1,a=0,s=0,l;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(x){s++,r===!1&&n.onStart!==void 0&&n.onStart(x,a,s),r=!0},this.itemEnd=function(x){a++,n.onProgress!==void 0&&n.onProgress(x,a,s),a===s&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(x){n.onError!==void 0&&n.onError(x)},this.resolveURL=function(x){return l?l(x):x},this.setURLModifier=function(x){return l=x,this},this.addHandler=function(x,p){return o.push(x,p),this},this.removeHandler=function(x){const p=o.indexOf(x);return p!==-1&&o.splice(p,2),this},this.getHandler=function(x){for(let p=0,y=o.length;p<y;p+=2){const z=o[p],g=o[p+1];if(z.global&&(z.lastIndex=0),z.test(x))return g}return null}}}const x8=new Dl;class y8{constructor(e){this.manager=e!==void 0?e:x8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Ll extends y8{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=W6.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=G3("img");function l(){x(),W6.add(e,this),t&&t(this),r.manager.itemEnd(e)}function o(p){x(),n&&n(p),r.manager.itemError(e),r.manager.itemEnd(e)}function x(){s.removeEventListener("load",l,!1),s.removeEventListener("error",o,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class j6 extends y8{constructor(e){super(e)}load(e,t,i,n){const r=new Rt,a=new Ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Rl extends x0{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class p8{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=X6(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=X6();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function X6(){return(typeof performance>"u"?Date:performance).now()}class Il{constructor(e,t,i=0,n=1/0){this.ray=new K7(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new e4,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ii(e,this,i,t),i.sort(q6),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Ii(e[n],this,i,t);return i.sort(q6),i}}function q6(d,e){return d.distance-e.distance}function Ii(d,e,t,i){if(d.layers.test(e.layers)&&d.raycast(e,t),i===!0){const n=d.children;for(let r=0,a=n.length;r<a;r++)Ii(n[r],e,t,!0)}}class Y6{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qi);const Ol={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class M5{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fl=new r8(-1,1,1,-1,0,1),r4=new x0;r4.setAttribute("position",new i0([-1,3,0,-1,-1,0,3,-1,0],3));r4.setAttribute("uv",new i0([0,2,0,0,2,0],2));class Nl{constructor(e){this._mesh=new O2(r4,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fl)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ul extends M5{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof B2?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=t8.clone(e.uniforms),this.material=new B2({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Z6 extends M5{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(s),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class kl extends M5{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Bl{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new De);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new E0(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ul(Ol),this.clock=new p8}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Z6!==void 0&&(a instanceof Z6?i=!0:a instanceof kl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m8 extends M5{constructor(e,t,i,n,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Vl=(d,e,t)=>{d.renderer=new o8({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),d.composer=new Bl(d.renderer),d.composer.addPass(new m8(d.scene,t0(d.camera)))},K6=(d,e,t)=>{d.renderer&&(e?d.renderer.outputEncoding=T0:d.renderer.outputEncoding=Ke,t?d.renderer.toneMapping=N2:d.renderer.toneMapping=V7)},J6=(d,e,t)=>{var i,n,r,a,s,l,o,x;!d.renderer||!d.composer||((n=(i=d.renderer).setSize)==null||n.call(i,e.width,e.height),(a=(r=d.renderer).setPixelRatio)==null||a.call(r,t),(l=(s=d.composer).setSize)==null||l.call(s,e.width,e.height),(x=(o=d.composer).setPixelRatio)==null||x.call(o,t))},Q6=(d,e,t)=>{d.renderer&&(d.renderer.shadowMap.enabled=e,d.renderer.shadowMap.type=t)},F2=d=>d.userData,Hl=(d,e)=>{d.pointer.update(t=>d.renderer?t.set(e.offsetX/d.renderer.domElement.clientWidth*2-1,-(e.offsetY/d.renderer.domElement.clientHeight)*2+1):t)},c8=(d,e,t,i)=>(d.raycaster.setFromCamera(e,t),d.raycaster.intersectObjects(i,!1)),Wl=(d,e)=>d.object.uuid!==e.object.uuid||d.instanceId!==e.instanceId,jl=(d,e,t)=>{let i=t0(d.camera);const n=d.camera.subscribe(o=>i=o);yt(n);let r=t0(d.pointer);const a=d.pointer.subscribe(o=>r=o);yt(a);let s;const l=o=>{var y,z;o.preventDefault();const x=o.type;d.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Hl(d,o);const p=Xl(e,r,i);if(x==="pointerdown"&&(s=p?{object:p.object,instanceId:p.instanceId}:null),x==="click"){if(!ql(p,s)){s=null;return}s=null}p&&((z=(y=F2(p.object)).eventDispatcher)==null||z.call(y,x,{...p,event:o}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Xl(d,e,t){if(d.interactiveObjects.size===0||d.raycastableObjects.size===0)return null;const i=c8(d,e,t,Array.from(d.raycastableObjects));return i.length===0||!d.interactiveObjects.has(i[0].object)?null:i[0]}function ql(d,e){return!d||!e?!1:d.object.uuid===e.object.uuid&&d.instanceId===e.instanceId}const Yl=(d,e)=>{let t=t0(d.pointerOverCanvas);const i=d.pointerOverCanvas.subscribe(o=>t=o);yt(i);let n=t0(d.camera);const r=d.camera.subscribe(o=>n=o);yt(r);let a=t0(d.pointer);const s=d.pointer.subscribe(o=>a=o);return yt(s),{raycast:()=>{var p,y,z,g,m,c,u,f;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const o=t?c8(e,a,n,Array.from(e.raycastableObjects)):[],x=o.length&&e.interactiveObjects.has(o[0].object)?o[0]:null;x?e.lastIntersection?e.lastIntersection&&Wl(e.lastIntersection,x)&&((c=(m=F2(e.lastIntersection.object)).eventDispatcher)==null||c.call(m,"pointerleave",e.lastIntersection),(f=(u=F2(x.object)).eventDispatcher)==null||f.call(u,"pointerenter",x)):(g=(z=F2(x.object)).eventDispatcher)==null||g.call(z,"pointerenter",x):e.lastIntersection&&((y=(p=F2(e.lastIntersection.object)).eventDispatcher)==null||y.call(p,"pointerleave",e.lastIntersection)),e.lastIntersection=x}}},Q0=typeof window<"u",Zl=d=>{if(!Q0)return;let e;const t=()=>{d(),e=requestAnimationFrame(t)};t(),yt(()=>{e&&cancelAnimationFrame(e)})},Kl=(d,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let n=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++n}),n>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((n,r)=>r.order?!0:n,!1),i=d.clock.getDelta();t?Array.from(e.frameHandlers).sort((n,r)=>(n.order??0)>(r.order??0)?1:-1).forEach(n=>n.fn(d,i)):e.frameHandlers.forEach(n=>n.fn(d,i))},Jl=d=>{d.debugFrameloop&&(d.frame+=1,console.log(`frame: ${d.frame}${Object.keys(d.invalidations).length>0?", requested by ↴":""}`),Object.keys(d.invalidations).length>0&&console.table(d.invalidations),d.invalidations={})},Ql=(d,e,t,i)=>{let n=t0(d.camera);const r=d.camera.subscribe(s=>n=s);yt(r);const{raycast:a}=Yl(d,e);Zl(()=>{i.dispose();const s=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(s||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),s&&(!n||!d.composer||!d.renderer||(Kl(d,t),d.composer.passes.length>1?d.composer.render():d.renderer.render(d.scene,n),Jl(t),t.frameInvalidated=!1,t.advance=!1))})},$l=()=>{const d=new d2(75,0,.1,1e3);return F2(d).threlteDefaultCamera=!0,d.position.z=5,d.lookAt(0,0,0),d},eo=d=>{const e=d.size.subscribe(t=>{F2(t0(d.camera)).threlteDefaultCamera&&d.camera.update(i=>{const n=i;return n.aspect=t.width/t.height,n.updateProjectionMatrix(),d.invalidate("Default camera: aspect ratio changed"),n})});yt(e)},to=(d,e,t,i,n,r,a)=>{const s={audioListeners:new Map,addAudioListener:(u,f)=>{if(f=f??"default",s.audioListeners.has(f)){console.warn(`An AudioListener with the id "${f}" has already been added, aborting.`);return}s.audioListeners.set(f,u)},removeAudioListener:u=>{if(u=u??"default",!s.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}s.audioListeners.delete(u)},getAudioListener:u=>{if(u=u??"default",!s.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}return s.audioListeners.get(u)}},l={debugFrameloop:r,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},o={size:O7([i,n],([u,f])=>u||f),pointer:vt(new De),pointerOverCanvas:vt(!1),clock:new p8,camera:vt($l()),scene:new Pl,renderer:void 0,composer:void 0,invalidate:u=>{l.frameInvalidated=!0,l.debugFrameloop&&u&&(l.invalidations[u]=l.invalidations[u]?l.invalidations[u]+1:1)},advance:()=>{l.advance=!0}},x={flat:vt(e),linear:vt(d),dpr:vt(t),setCamera:u=>{o.camera.set(u),o.composer&&(o.composer.passes.forEach(f=>{f instanceof m8&&(f.camera=u)}),o.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Il,lastIntersection:null,addRaycastableObject:u=>{x.raycastableObjects.add(u)},removeRaycastableObject:u=>{x.raycastableObjects.delete(u)},addInteractiveObject:u=>{x.interactiveObjects.add(u)},removeInteractiveObject:u=>{x.interactiveObjects.delete(u)},addPass:u=>{o.composer&&(o.composer.addPass(u),o.invalidate("Canvas: adding pass"))},removePass:u=>{o.composer&&(o.composer.removePass(u),o.invalidate("Canvas: removing pass"))}},p={dispose:async(u=!1)=>{await u3(),!(!p.shouldDispose&&!u)&&(p.disposableObjects.forEach((f,_)=>{var G;(f===0||u)&&((G=_==null?void 0:_.dispose)==null||G.call(_),p.disposableObjects.delete(_))}),p.shouldDispose=!1)},collectDisposableObjects:(u,f)=>{const _=f??[];return u&&(u!=null&&u.dispose&&typeof u.dispose=="function"&&u.type!=="Scene"&&_.push(u),Object.entries(u).forEach(([G,v])=>{if(G==="parent"||G==="children"||typeof v!="object")return;const S=v;S!=null&&S.dispose&&p.collectDisposableObjects(S,_)})),_},addDisposableObjects:u=>{u.forEach(f=>{const _=p.disposableObjects.get(f);_?p.disposableObjects.set(f,_+1):p.disposableObjects.set(f,1)})},removeDisposableObjects:u=>{u.length!==0&&(u.forEach(f=>{const _=p.disposableObjects.get(f);_&&_>0&&p.disposableObjects.set(f,_-1)}),p.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return f2("threlte",o),f2("threlte-root",x),f2("threlte-render-context",l),f2("threlte-audio-context",s),f2("threlte-disposal-context",p),{ctx:o,rootCtx:x,renderCtx:l,audioCtx:s,disposalCtx:p,getCtx:()=>o,getRootCtx:()=>x,getRenderCtx:()=>l,getAudioCtx:()=>s,getDisposalCtx:()=>p}};function S5(d,e){const t=vt(d);let i=d;const n=t.subscribe(s=>i=s);return yt(n),{...t,set:s=>{if((s==null?void 0:s.uuid)===(i==null?void 0:i.uuid))return;const l=i;t.set(s),e==null||e(s,l)},update:s=>{const l=s(i);if((l==null?void 0:l.uuid)===(i==null?void 0:i.uuid))return;const o=i;t.set(l),e==null||e(l,o)}}}const H2=()=>D2("threlte");function io(d){let e;const t=d[8].default,i=d0(t,d,d[7],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,[r]){i&&i.p&&(!e||r&128)&&a0(i,t,n,n[7],e?l0(t,n[7],r,null):s0(n[7]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}const no=()=>({onChildMount:D2("threlte-hierarchical-object-on-mount"),onChildDestroy:D2("threlte-hierarchical-object-on-destroy")}),z8=()=>D2("threlte-hierarchical-parent-context");function ro(d,e,t){var u;let i,{$$slots:n={},$$scope:r}=e,{object:a=void 0}=e,{children:s=[]}=e,{onChildMount:l=void 0}=e;const o=f=>{s.push(f),t(1,s),l==null||l(f)};let{onChildDestroy:x=void 0}=e;const p=f=>{const _=s.findIndex(G=>G.uuid===f.uuid);_!==-1&&s.splice(_,1),t(1,s),x==null||x(f)},{invalidate:y}=H2(),z=z8();dt(d,z,f=>t(6,i=f));let{parent:g=i}=e;const m=no();a&&((u=m.onChildMount)==null||u.call(m,a),y("HierarchicalObject: object added"));const c=S5(a,(f,_)=>{var G,v;_&&((G=m.onChildDestroy)==null||G.call(m,_),y("HierarchicalObject: object added")),f&&((v=m.onChildMount)==null||v.call(m,f),y("HierarchicalObject: object removed"))});return yt(()=>{var f;a&&((f=m.onChildDestroy)==null||f.call(m,a),y("HierarchicalObject: object removed"))}),f2("threlte-hierarchical-object-on-mount",o),f2("threlte-hierarchical-object-on-destroy",p),f2("threlte-hierarchical-parent-context",c),d.$$set=f=>{"object"in f&&t(3,a=f.object),"children"in f&&t(1,s=f.children),"onChildMount"in f&&t(4,l=f.onChildMount),"onChildDestroy"in f&&t(5,x=f.onChildDestroy),"parent"in f&&t(2,g=f.parent),"$$scope"in f&&t(7,r=f.$$scope)},d.$$.update=()=>{d.$$.dirty&64&&t(2,g=i),d.$$.dirty&8&&c.set(a)},[z,s,g,a,l,x,i,r,n]}class ao extends tt{constructor(e){super(),it(this,e,ro,io,nt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function so(d){let e;const t=d[1].default,i=d0(t,d,d[4],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&16)&&a0(i,t,n,n[4],e?l0(t,n[4],r,null):s0(n[4]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function lo(d){let e,t;return e=new ao({props:{object:d[0],onChildMount:d[2],onChildDestroy:d[3],$$slots:{default:[so]},$$scope:{ctx:d}}}),{c(){We(e.$$.fragment)},l(i){Ye(e.$$.fragment,i)},m(i,n){je(e,i,n),t=!0},p(i,[n]){const r={};n&1&&(r.object=i[0]),n&1&&(r.onChildMount=i[2]),n&1&&(r.onChildDestroy=i[3]),n&16&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(_e(e.$$.fragment,i),t=!0)},o(i){ve(e.$$.fragment,i),t=!1},d(i){Xe(e,i)}}}function oo(d,e,t){let{$$slots:i={},$$scope:n}=e,{object:r}=e;const a=l=>r.add(l),s=l=>r.remove(l);return d.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,n=l.$$scope)},[r,i,a,s,n]}class d4 extends tt{constructor(e){super(),it(this,e,oo,lo,nt,{object:0})}}const xo=()=>{const d=vt({width:0,height:0});let e={width:0,height:0};const t=d.subscribe(a=>e=a);yt(t);let i;const n=()=>{const a=e;if(!i||!i.parentElement)return;const{clientWidth:s,clientHeight:l}=i.parentElement;(s!==a.width||l!==a.height)&&d.set({width:s,height:l})},r=a=>{i=a,n(),window.addEventListener("resize",n)};return Q0?(yt(()=>{window.removeEventListener("resize",n)}),{parentSizeAction:r,parentSize:d}):{parentSize:d,parentSizeAction:r}};function $6(d){let e,t;return e=new d4({props:{object:d[0].scene,$$slots:{default:[yo]},$$scope:{ctx:d}}}),{c(){We(e.$$.fragment)},l(i){Ye(e.$$.fragment,i)},m(i,n){je(e,i,n),t=!0},p(i,n){const r={};n[1]&4&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(_e(e.$$.fragment,i),t=!0)},o(i){ve(e.$$.fragment,i),t=!1},d(i){Xe(e,i)}}}function yo(d){let e;const t=d[29].default,i=d0(t,d,d[33],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r[1]&4)&&a0(i,t,n,n[33],e?l0(t,n[33],r,null):s0(n[33]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function po(d){let e,t,i,n,r=d[2]&&$6(d);return{c(){e=Ae("canvas"),r&&r.c(),this.h()},l(a){e=Ce(a,"CANVAS",{class:!0});var s=Te(e);r&&r.l(s),s.forEach(me),this.h()},h(){ie(e,"class","svelte-o3oskp")},m(a,s){ot(a,e,s),r&&r.m(e,null),d[30](e),t=!0,i||(n=[C1(d[3].call(null,e)),Pt(e,"click",d[9]),Pt(e,"contextmenu",d[10]),Pt(e,"pointerup",d[13]),Pt(e,"pointerdown",d[11]),Pt(e,"pointermove",d[12]),Pt(e,"pointerenter",d[31]),Pt(e,"pointerleave",d[32])],i=!0)},p(a,s){a[2]?r?(r.p(a,s),s[0]&4&&_e(r,1)):(r=$6(a),r.c(),_e(r,1),r.m(e,null)):r&&(i1(),ve(r,1,1,()=>{r=null}),n1())},i(a){t||(_e(r),t=!0)},o(a){ve(r),t=!1},d(a){a&&me(e),r&&r.d(),d[30](null),i=!1,g5(n)}}}const Oi=new Set,mo=d=>{Oi.forEach(e=>e(d))};function co(d,e,t){let i,n,r,a,{$$slots:s={},$$scope:l}=e,{dpr:o=Q0?window.devicePixelRatio:1}=e,{flat:x=!1}=e,{linear:p=!1}=e,{frameloop:y="demand"}=e,{debugFrameloop:z=!1}=e,{shadows:g=!0}=e,{shadowMapType:m=N7}=e,{size:c=void 0}=e,{rendererParameters:u=void 0}=e,f,_=!1;const G=vt(c),{parentSize:v,parentSizeAction:S}=xo(),P=to(p,x,o,G,v,z,y),{getCtx:h,renderCtx:b,disposalCtx:T}=P,{ctx:A,rootCtx:F,audioCtx:C}=P;eo(A),Oi.add(A.invalidate),yt(()=>{Oi.delete(A.invalidate)});const{size:R,scene:B}=A;dt(d,R,xe=>t(26,n=xe));const{flat:j,linear:Z,dpr:H}=F;dt(d,j,xe=>t(27,r=xe)),dt(d,Z,xe=>t(28,a=xe)),dt(d,H,xe=>t(25,i=xe)),f2("threlte-parent",vt(B)),R7(()=>{f&&(Vl(A,f,u),K6(A,a,r),J6(A,n,i),Q6(A,g,m),t(2,_=!0))}),Ql(A,F,b,T);const{onClick:Q,onContextMenu:J,onPointerDown:L,onPointerMove:W,onPointerUp:re}=jl(A,F,b);yt(()=>{T.dispose(!0)});function $(xe){o2[xe?"unshift":"push"](()=>{f=xe,t(1,f)})}const ne=()=>h().pointerOverCanvas.set(!0),O=()=>h().pointerOverCanvas.set(!1);return d.$$set=xe=>{"dpr"in xe&&t(14,o=xe.dpr),"flat"in xe&&t(15,x=xe.flat),"linear"in xe&&t(16,p=xe.linear),"frameloop"in xe&&t(17,y=xe.frameloop),"debugFrameloop"in xe&&t(18,z=xe.debugFrameloop),"shadows"in xe&&t(19,g=xe.shadows),"shadowMapType"in xe&&t(20,m=xe.shadowMapType),"size"in xe&&t(21,c=xe.size),"rendererParameters"in xe&&t(22,u=xe.rendererParameters),"$$scope"in xe&&t(33,l=xe.$$scope)},d.$$.update=()=>{d.$$.dirty[0]&2097152&&G.set(c),d.$$.dirty[0]&65536&&L5(Z,a=p,a),d.$$.dirty[0]&32768&&L5(j,r=x,r),d.$$.dirty[0]&16384&&L5(H,i=o,i),d.$$.dirty[0]&402653184&&K6(h(),a,r),d.$$.dirty[0]&100663296&&J6(h(),n,i),d.$$.dirty[0]&1572864&&Q6(h(),g,m)},[A,f,_,S,h,R,j,Z,H,Q,J,L,W,re,o,x,p,y,z,g,m,c,u,F,C,i,n,r,a,s,$,ne,O,l]}class zo extends tt{constructor(e){super(),it(this,e,co,po,nt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const a4=()=>D2("threlte-root"),uo=()=>D2("threlte-disposal-context");function go(d){let e;const t=d[9].default,i=d0(t,d,d[8],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,[r]){i&&i.p&&(!e||r&256)&&a0(i,t,n,n[8],e?l0(t,n[8],r,null):s0(n[8]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}const e7="threlte-disposable-object-context";function fo(d,e,t){let i,n,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:s,addDisposableObjects:l,removeDisposableObjects:o}=uo();let{object:x=void 0}=e,p=x,{dispose:y=void 0}=e;const z=D2(e7);dt(d,z,c=>t(7,n=c));const g=vt(y??n??!0);dt(d,g,c=>t(6,i=c)),f2(e7,g);let m=i?s(x):[];return l(m),yt(()=>{o(m)}),d.$$set=c=>{"object"in c&&t(2,x=c.object),"dispose"in c&&t(3,y=c.dispose),"$$scope"in c&&t(8,a=c.$$scope)},d.$$.update=()=>{d.$$.dirty&136&&g.set(y??n??!0),d.$$.dirty&116&&x!==p&&(o(m),t(5,m=i?s(x):[]),l(m),t(4,p=x))},[z,g,x,y,p,m,i,n,a,r]}class s4 extends tt{constructor(e){super(),it(this,e,fo,go,nt,{object:2,dispose:3})}}function ho(d,e,t){let i,n,{object:r}=e;const a=S5(r);dt(d,a,o=>t(4,n=o));const s=D2("threlte-layers");dt(d,s,o=>t(3,i=o));const{invalidate:l}=H2();return d.$$set=o=>{"object"in o&&t(2,r=o.object)},d.$$.update=()=>{if(d.$$.dirty&4&&a.set(r),d.$$.dirty&24){if(i==="all")n.layers.enableAll();else if(i==="none")n.layers.disableAll();else if(Array.isArray(i))for(let o=0;o<32;o+=1){const x=o;i.includes(x)?n.layers.enable(o):n.layers.disable(o)}else i!==void 0&&n.layers.set(i);l("LayerableObject")}},[a,s,r,i,n]}class _o extends tt{constructor(e){super(),it(this,e,ho,null,nt,{object:2})}}const l4=(d,e)=>{if(!Q0)return{start:()=>{},stop:()=>{},started:O9(!1)};const t=D2("threlte-render-context"),i={fn:d,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},n=vt(!1),r=()=>{t.frameHandlers.delete(i),n.set(!1)},a=()=>{t.frameHandlers.add(i),n.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),yt(()=>{r()}),{start:a,stop:r,started:{subscribe:n.subscribe}}},u8=()=>{const d=vt(!1);return(async()=>{await u3(),d.set(!0)})(),d};function Go(d,e,t){let i,n,{object:r}=e,{position:a=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:o=void 0}=e;const x=new V,p=f5(),{invalidate:y}=H2(),z=u8();dt(d,z,_=>t(8,n=_));const g=async()=>{n||await u3(),p("transform")},m=async()=>{y("TransformableObject: transformed"),await g()};F2(r).onTransform=m;const{start:c,stop:u}=l4(async()=>{o&&!l&&o instanceof It&&(o.getWorldPosition(x),r.lookAt(x),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),f=S5(r);return dt(d,f,_=>t(7,i=_)),d.$$set=_=>{"object"in _&&t(2,r=_.object),"position"in _&&t(3,a=_.position),"scale"in _&&t(4,s=_.scale),"rotation"in _&&t(5,l=_.rotation),"lookAt"in _&&t(6,o=_.lookAt)},d.$$.update=()=>{d.$$.dirty&4&&f.set(r),d.$$.dirty&232&&(a&&(i.position.set(a.x??0,a.y??0,a.z??0),m()),o&&!l&&(o instanceof It?c():(u(),i.lookAt(o.x??0,o.y??0,o.z??0),m())),o||u()),d.$$.dirty&144&&s&&(typeof s=="number"?i.scale.set(s,s,s):i.scale.set(s.x??1,s.y??1,s.z??1),m()),d.$$.dirty&160&&l&&(i.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),m())},[z,f,r,a,s,l,o,i]}class g8 extends tt{constructor(e){super(),it(this,e,Go,null,nt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function vo(d,e,t){let i,n,r,{object:a}=e,{viewportAware:s=!1}=e;const l=f5(),{camera:o,invalidate:x}=H2();dt(d,o,S=>t(8,r=S));const p=new i4,y=new bt,z=S=>S.type==="Mesh",g=new V,m=()=>r?(y.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),p.setFromProjectionMatrix(y),z(a)?p.intersectsObject(a):(a.getWorldPosition(g),p.containsPoint(g))):!0,c=u8();dt(d,c,S=>t(7,n=S));let{inViewport:u=m()}=e;const f=async S=>{S?(n||await u3(),l("viewportenter",a)):(n||await u3(),l("viewportleave",a))},{start:_,stop:G,started:v}=l4(()=>{const S=m();u===void 0?(t(3,u=m()),f(u)):S!==u&&(f(S),t(3,u=S))},{autostart:s,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return dt(d,v,S=>t(6,i=S)),x("ViewportAwareObject"),d.$$set=S=>{"object"in S&&t(4,a=S.object),"viewportAware"in S&&t(5,s=S.viewportAware),"inViewport"in S&&t(3,u=S.inViewport)},d.$$.update=()=>{d.$$.dirty&96&&(s&&!i?_():!s&&i&&G())},[o,c,v,u,a,s,i]}class bo extends tt{constructor(e){super(),it(this,e,vo,null,nt,{object:4,viewportAware:5,inViewport:3})}}function Mo(d){let e;const t=d[14].default,i=d0(t,d,d[18],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&262144)&&a0(i,t,n,n[18],e?l0(t,n[18],r,null):s0(n[18]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function So(d){let e,t;return e=new d4({props:{object:d[1],$$slots:{default:[Mo]},$$scope:{ctx:d}}}),{c(){We(e.$$.fragment)},l(i){Ye(e.$$.fragment,i)},m(i,n){je(e,i,n),t=!0},p(i,n){const r={};n&2&&(r.object=i[1]),n&262144&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(_e(e.$$.fragment,i),t=!0)},o(i){ve(e.$$.fragment,i),t=!1},d(i){Xe(e,i)}}}function wo(d){let e,t,i,n,r,a,s,l,o;e=new _o({props:{object:d[1]}}),i=new g8({props:{object:d[1],position:d[2],rotation:d[4],scale:d[3],lookAt:d[5]}}),r=new s4({props:{object:d[1],dispose:d[7],$$slots:{default:[So]},$$scope:{ctx:d}}});function x(y){d[15](y)}let p={object:d[1],viewportAware:d[6]};return d[0]!==void 0&&(p.inViewport=d[0]),s=new bo({props:p}),o2.push(()=>k2(s,"inViewport",x,d[0])),s.$on("viewportenter",d[16]),s.$on("viewportleave",d[17]),{c(){We(e.$$.fragment),t=$e(),We(i.$$.fragment),n=$e(),We(r.$$.fragment),a=$e(),We(s.$$.fragment)},l(y){Ye(e.$$.fragment,y),t=et(y),Ye(i.$$.fragment,y),n=et(y),Ye(r.$$.fragment,y),a=et(y),Ye(s.$$.fragment,y)},m(y,z){je(e,y,z),ot(y,t,z),je(i,y,z),ot(y,n,z),je(r,y,z),ot(y,a,z),je(s,y,z),o=!0},p(y,[z]){const g={};z&2&&(g.object=y[1]),e.$set(g);const m={};z&2&&(m.object=y[1]),z&4&&(m.position=y[2]),z&16&&(m.rotation=y[4]),z&8&&(m.scale=y[3]),z&32&&(m.lookAt=y[5]),i.$set(m);const c={};z&2&&(c.object=y[1]),z&128&&(c.dispose=y[7]),z&262146&&(c.$$scope={dirty:z,ctx:y}),r.$set(c);const u={};z&2&&(u.object=y[1]),z&64&&(u.viewportAware=y[6]),!l&&z&1&&(l=!0,u.inViewport=y[0],o0(()=>l=!1)),s.$set(u)},i(y){o||(_e(e.$$.fragment,y),_e(i.$$.fragment,y),_e(r.$$.fragment,y),_e(s.$$.fragment,y),o=!0)},o(y){ve(e.$$.fragment,y),ve(i.$$.fragment,y),ve(r.$$.fragment,y),ve(s.$$.fragment,y),o=!1},d(y){Xe(e,y),y&&me(t),Xe(i,y),y&&me(n),Xe(r,y),y&&me(a),Xe(s,y)}}}function To(d,e,t){let{$$slots:i={},$$scope:n}=e,{object:r}=e,{position:a=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:o=void 0}=e,{viewportAware:x=!1}=e,{inViewport:p=!1}=e,{castShadow:y=void 0}=e,{receiveShadow:z=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:m=void 0}=e,{visible:c=void 0}=e,{dispose:u=void 0}=e,{userData:f=void 0}=e;const{invalidate:_}=H2(),G=()=>r;function v(h){p=h,t(0,p)}function S(h){k1.call(this,d,h)}function P(h){k1.call(this,d,h)}return d.$$set=h=>{"object"in h&&t(1,r=h.object),"position"in h&&t(2,a=h.position),"scale"in h&&t(3,s=h.scale),"rotation"in h&&t(4,l=h.rotation),"lookAt"in h&&t(5,o=h.lookAt),"viewportAware"in h&&t(6,x=h.viewportAware),"inViewport"in h&&t(0,p=h.inViewport),"castShadow"in h&&t(8,y=h.castShadow),"receiveShadow"in h&&t(9,z=h.receiveShadow),"frustumCulled"in h&&t(10,g=h.frustumCulled),"renderOrder"in h&&t(11,m=h.renderOrder),"visible"in h&&t(12,c=h.visible),"dispose"in h&&t(7,u=h.dispose),"userData"in h&&t(13,f=h.userData),"$$scope"in h&&t(18,n=h.$$scope)},d.$$.update=()=>{d.$$.dirty&16128&&(c!==void 0&&(G().visible=c),y!==void 0&&(G().castShadow=y),z!==void 0&&(G().receiveShadow=z),g!==void 0&&(G().frustumCulled=g),m!==void 0&&(G().renderOrder=m),f!==void 0&&(G().userData={...G().userData,...f}),_("Object3DInstance: props changed"))},[p,r,a,s,l,o,x,u,y,z,g,m,c,f,i,v,S,P,n]}class Eo extends tt{constructor(e){super(),it(this,e,To,wo,nt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Ao(d){let e;const t=d[17].default,i=d0(t,d,d[21],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&2097152)&&a0(i,t,n,n[21],e?l0(t,n[21],r,null):s0(n[21]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function Co(d){let e,t,i;function n(a){d[18](a)}let r={object:d[1],lookAt:d[5],castShadow:d[7],receiveShadow:d[8],frustumCulled:d[9],renderOrder:d[10],position:d[2],scale:d[3],rotation:d[4],viewportAware:d[6],visible:d[11],userData:d[12],dispose:d[13],$$slots:{default:[Ao]},$$scope:{ctx:d}};return d[0]!==void 0&&(r.inViewport=d[0]),e=new Eo({props:r}),o2.push(()=>k2(e,"inViewport",n,d[0])),e.$on("viewportenter",d[19]),e.$on("viewportleave",d[20]),{c(){We(e.$$.fragment)},l(a){Ye(e.$$.fragment,a)},m(a,s){je(e,a,s),i=!0},p(a,[s]){const l={};s&2&&(l.object=a[1]),s&32&&(l.lookAt=a[5]),s&128&&(l.castShadow=a[7]),s&256&&(l.receiveShadow=a[8]),s&512&&(l.frustumCulled=a[9]),s&1024&&(l.renderOrder=a[10]),s&4&&(l.position=a[2]),s&8&&(l.scale=a[3]),s&16&&(l.rotation=a[4]),s&64&&(l.viewportAware=a[6]),s&2048&&(l.visible=a[11]),s&4096&&(l.userData=a[12]),s&8192&&(l.dispose=a[13]),s&2097152&&(l.$$scope={dirty:s,ctx:a}),!t&&s&1&&(t=!0,l.inViewport=a[0],o0(()=>t=!1)),e.$set(l)},i(a){i||(_e(e.$$.fragment,a),i=!0)},o(a){ve(e.$$.fragment,a),i=!1},d(a){Xe(e,a)}}}function Po(d,e,t){let i,{$$slots:n={},$$scope:r}=e,{camera:a}=e,{position:s=void 0}=e,{scale:l=void 0}=e,{rotation:o=void 0}=e,{lookAt:x=void 0}=e,{viewportAware:p=!1}=e,{inViewport:y=!1}=e,{castShadow:z=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:c=void 0}=e,{visible:u=void 0}=e,{userData:f=void 0}=e,{dispose:_=void 0}=e,{useCamera:G=!1}=e;const v=S5(a);dt(d,v,T=>t(16,i=T));const{setCamera:S}=a4();function P(T){y=T,t(0,y)}function h(T){k1.call(this,d,T)}function b(T){k1.call(this,d,T)}return d.$$set=T=>{"camera"in T&&t(1,a=T.camera),"position"in T&&t(2,s=T.position),"scale"in T&&t(3,l=T.scale),"rotation"in T&&t(4,o=T.rotation),"lookAt"in T&&t(5,x=T.lookAt),"viewportAware"in T&&t(6,p=T.viewportAware),"inViewport"in T&&t(0,y=T.inViewport),"castShadow"in T&&t(7,z=T.castShadow),"receiveShadow"in T&&t(8,g=T.receiveShadow),"frustumCulled"in T&&t(9,m=T.frustumCulled),"renderOrder"in T&&t(10,c=T.renderOrder),"visible"in T&&t(11,u=T.visible),"userData"in T&&t(12,f=T.userData),"dispose"in T&&t(13,_=T.dispose),"useCamera"in T&&t(15,G=T.useCamera),"$$scope"in T&&t(21,r=T.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&v.set(a),d.$$.dirty&98304&&G&&S(i)},[y,a,s,l,o,x,p,z,g,m,c,u,f,_,v,G,i,n,P,h,b,r]}class Do extends tt{constructor(e){super(),it(this,e,Po,Co,nt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function Lo(d){let e;const t=d[20].default,i=d0(t,d,d[24],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&16777216)&&a0(i,t,n,n[24],e?l0(t,n[24],r,null):s0(n[24]),null)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function Ro(d){let e,t,i;function n(a){d[21](a)}let r={camera:d[0],position:d[2],scale:d[3],rotation:d[4],castShadow:d[6],receiveShadow:d[7],frustumCulled:d[8],renderOrder:d[9],visible:d[10],userData:d[11],dispose:d[12],viewportAware:d[13],lookAt:d[5],useCamera:d[14],$$slots:{default:[Lo]},$$scope:{ctx:d}};return d[1]!==void 0&&(r.inViewport=d[1]),e=new Do({props:r}),o2.push(()=>k2(e,"inViewport",n,d[1])),e.$on("viewportenter",d[22]),e.$on("viewportleave",d[23]),{c(){We(e.$$.fragment)},l(a){Ye(e.$$.fragment,a)},m(a,s){je(e,a,s),i=!0},p(a,[s]){const l={};s&1&&(l.camera=a[0]),s&4&&(l.position=a[2]),s&8&&(l.scale=a[3]),s&16&&(l.rotation=a[4]),s&64&&(l.castShadow=a[6]),s&128&&(l.receiveShadow=a[7]),s&256&&(l.frustumCulled=a[8]),s&512&&(l.renderOrder=a[9]),s&1024&&(l.visible=a[10]),s&2048&&(l.userData=a[11]),s&4096&&(l.dispose=a[12]),s&8192&&(l.viewportAware=a[13]),s&32&&(l.lookAt=a[5]),s&16384&&(l.useCamera=a[14]),s&16777216&&(l.$$scope={dirty:s,ctx:a}),!t&&s&2&&(t=!0,l.inViewport=a[1],o0(()=>t=!1)),e.$set(l)},i(a){i||(_e(e.$$.fragment,a),i=!0)},o(a){ve(e.$$.fragment,a),i=!1},d(a){Xe(e,a)}}}function Io(d,e,t){let i,{$$slots:n={},$$scope:r}=e,{position:a=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:o=void 0}=e,{castShadow:x=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:y=void 0}=e,{renderOrder:z=void 0}=e,{visible:g=void 0}=e,{userData:m=void 0}=e,{dispose:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{useCamera:_=!0}=e,{near:G=void 0}=e,{far:v=void 0}=e,{fov:S=void 0}=e;const{size:P,invalidate:h}=H2();dt(d,P,C=>t(19,i=C));const b=new d2(S,i.width/i.height,G,v);function T(C){f=C,t(1,f)}function A(C){k1.call(this,d,C)}function F(C){k1.call(this,d,C)}return d.$$set=C=>{"position"in C&&t(2,a=C.position),"scale"in C&&t(3,s=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,o=C.lookAt),"castShadow"in C&&t(6,x=C.castShadow),"receiveShadow"in C&&t(7,p=C.receiveShadow),"frustumCulled"in C&&t(8,y=C.frustumCulled),"renderOrder"in C&&t(9,z=C.renderOrder),"visible"in C&&t(10,g=C.visible),"userData"in C&&t(11,m=C.userData),"dispose"in C&&t(12,c=C.dispose),"viewportAware"in C&&t(13,u=C.viewportAware),"inViewport"in C&&t(1,f=C.inViewport),"useCamera"in C&&t(14,_=C.useCamera),"near"in C&&t(16,G=C.near),"far"in C&&t(17,v=C.far),"fov"in C&&t(18,S=C.fov),"$$scope"in C&&t(24,r=C.$$scope)},d.$$.update=()=>{d.$$.dirty&524289&&(t(0,b.aspect=i.width/i.height,b),b.updateProjectionMatrix(),h("PerspectiveCamera: aspect changed")),d.$$.dirty&458753&&(G!==void 0&&t(0,b.near=G,b),v!==void 0&&t(0,b.far=v,b),S!==void 0&&t(0,b.fov=S,b),b.updateProjectionMatrix(),h("PerspectiveCamera: props changed"))},[b,f,a,s,l,o,x,p,y,z,g,m,c,u,_,P,G,v,S,i,n,T,A,F,r]}class Oo extends tt{constructor(e){super(),it(this,e,Io,Ro,nt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const t7=[],Fo=(d,e)=>{const t=t7.find(n=>n instanceof d);if(t)return t;const i=e();return t7.push(i),i},i7={type:"change"},mi={type:"start"},n7={type:"end"};let No=class extends l1{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:x1.ROTATE,MIDDLE:x1.DOLLY,RIGHT:x1.PAN},this.touches={ONE:y1.ROTATE,TWO:y1.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Xt),this._domElementKeyEvents=D},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(i7),i.update(),r=n.NONE},this.update=function(){const D=new V,N=new a1().setFromUnitVectors(e.up,new V(0,1,0)),oe=N.clone().invert(),pe=new V,le=new a1,fe=2*Math.PI;return function(){const Ie=i.object.position;D.copy(Ie).sub(i.target),D.applyQuaternion(N),s.setFromVector3(D),i.autoRotate&&r===n.NONE&&b(P()),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Fe=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;return isFinite(Fe)&&isFinite(Ze)&&(Fe<-Math.PI?Fe+=fe:Fe>Math.PI&&(Fe-=fe),Ze<-Math.PI?Ze+=fe:Ze>Math.PI&&(Ze-=fe),Fe<=Ze?s.theta=Math.max(Fe,Math.min(Ze,s.theta)):s.theta=s.theta>(Fe+Ze)/2?Math.max(Fe,s.theta):Math.min(Ze,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=o,s.radius=Math.max(i.minDistance,Math.min(i.maxDistance,s.radius)),i.enableDamping===!0?i.target.addScaledVector(x,i.dampingFactor):i.target.add(x),D.setFromSpherical(s),D.applyQuaternion(oe),Ie.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,x.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),x.set(0,0,0)),o=1,p||pe.distanceToSquared(i.object.position)>a||8*(1-le.dot(i.object.quaternion))>a?(i.dispatchEvent(i7),pe.copy(i.object.position),le.copy(i.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",X),i.domElement.removeEventListener("pointerdown",wt),i.domElement.removeEventListener("pointercancel",Bt),i.domElement.removeEventListener("wheel",p2),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",ht),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Xt)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const a=1e-6,s=new Y6,l=new Y6;let o=1;const x=new V;let p=!1;const y=new De,z=new De,g=new De,m=new De,c=new De,u=new De,f=new De,_=new De,G=new De,v=[],S={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function h(){return Math.pow(.95,i.zoomSpeed)}function b(D){l.theta-=D}function T(D){l.phi-=D}const A=function(){const D=new V;return function(oe,pe){D.setFromMatrixColumn(pe,0),D.multiplyScalar(-oe),x.add(D)}}(),F=function(){const D=new V;return function(oe,pe){i.screenSpacePanning===!0?D.setFromMatrixColumn(pe,1):(D.setFromMatrixColumn(pe,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(oe),x.add(D)}}(),C=function(){const D=new V;return function(oe,pe){const le=i.domElement;if(i.object.isPerspectiveCamera){const fe=i.object.position;D.copy(fe).sub(i.target);let ge=D.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),A(2*oe*ge/le.clientHeight,i.object.matrix),F(2*pe*ge/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(A(oe*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),F(pe*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function R(D){i.object.isPerspectiveCamera?o/=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*D)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(D){i.object.isPerspectiveCamera?o*=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/D)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(D){y.set(D.clientX,D.clientY)}function Z(D){f.set(D.clientX,D.clientY)}function H(D){m.set(D.clientX,D.clientY)}function Q(D){z.set(D.clientX,D.clientY),g.subVectors(z,y).multiplyScalar(i.rotateSpeed);const N=i.domElement;b(2*Math.PI*g.x/N.clientHeight),T(2*Math.PI*g.y/N.clientHeight),y.copy(z),i.update()}function J(D){_.set(D.clientX,D.clientY),G.subVectors(_,f),G.y>0?R(h()):G.y<0&&B(h()),f.copy(_),i.update()}function L(D){c.set(D.clientX,D.clientY),u.subVectors(c,m).multiplyScalar(i.panSpeed),C(u.x,u.y),m.copy(c),i.update()}function W(D){D.deltaY<0?B(h()):D.deltaY>0&&R(h()),i.update()}function re(D){let N=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):C(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):C(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):C(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):C(-i.keyPanSpeed,0),N=!0;break}N&&(D.preventDefault(),i.update())}function $(){if(v.length===1)y.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);y.set(D,N)}}function ne(){if(v.length===1)m.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),N=.5*(v[0].pageY+v[1].pageY);m.set(D,N)}}function O(){const D=v[0].pageX-v[1].pageX,N=v[0].pageY-v[1].pageY,oe=Math.sqrt(D*D+N*N);f.set(0,oe)}function xe(){i.enableZoom&&O(),i.enablePan&&ne()}function ue(){i.enableZoom&&O(),i.enableRotate&&$()}function be(D){if(v.length==1)z.set(D.pageX,D.pageY);else{const oe=Se(D),pe=.5*(D.pageX+oe.x),le=.5*(D.pageY+oe.y);z.set(pe,le)}g.subVectors(z,y).multiplyScalar(i.rotateSpeed);const N=i.domElement;b(2*Math.PI*g.x/N.clientHeight),T(2*Math.PI*g.y/N.clientHeight),y.copy(z)}function ce(D){if(v.length===1)c.set(D.pageX,D.pageY);else{const N=Se(D),oe=.5*(D.pageX+N.x),pe=.5*(D.pageY+N.y);c.set(oe,pe)}u.subVectors(c,m).multiplyScalar(i.panSpeed),C(u.x,u.y),m.copy(c)}function Ve(D){const N=Se(D),oe=D.pageX-N.x,pe=D.pageY-N.y,le=Math.sqrt(oe*oe+pe*pe);_.set(0,le),G.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),R(G.y),f.copy(_)}function Ee(D){i.enableZoom&&Ve(D),i.enablePan&&ce(D)}function Me(D){i.enableZoom&&Ve(D),i.enableRotate&&be(D)}function wt(D){i.enabled!==!1&&(v.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",ft),i.domElement.addEventListener("pointerup",ht)),te(D),D.pointerType==="touch"?E(D):pt(D))}function ft(D){i.enabled!==!1&&(D.pointerType==="touch"?M(D):qe(D))}function ht(D){de(D),v.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",ht)),i.dispatchEvent(n7),r=n.NONE}function Bt(D){de(D)}function pt(D){let N;switch(D.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case x1.DOLLY:if(i.enableZoom===!1)return;Z(D),r=n.DOLLY;break;case x1.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;H(D),r=n.PAN}else{if(i.enableRotate===!1)return;j(D),r=n.ROTATE}break;case x1.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;j(D),r=n.ROTATE}else{if(i.enablePan===!1)return;H(D),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(mi)}function qe(D){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;Q(D);break;case n.DOLLY:if(i.enableZoom===!1)return;J(D);break;case n.PAN:if(i.enablePan===!1)return;L(D);break}}function p2(D){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(D.preventDefault(),i.dispatchEvent(mi),W(D),i.dispatchEvent(n7))}function Xt(D){i.enabled===!1||i.enablePan===!1||re(D)}function E(D){switch(se(D),v.length){case 1:switch(i.touches.ONE){case y1.ROTATE:if(i.enableRotate===!1)return;$(),r=n.TOUCH_ROTATE;break;case y1.PAN:if(i.enablePan===!1)return;ne(),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case y1.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(),r=n.TOUCH_DOLLY_PAN;break;case y1.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(mi)}function M(D){switch(se(D),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(D),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;ce(D),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(D),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(D),i.update();break;default:r=n.NONE}}function X(D){i.enabled!==!1&&D.preventDefault()}function te(D){v.push(D)}function de(D){delete S[D.pointerId];for(let N=0;N<v.length;N++)if(v[N].pointerId==D.pointerId){v.splice(N,1);return}}function se(D){let N=S[D.pointerId];N===void 0&&(N=new De,S[D.pointerId]=N),N.set(D.pageX,D.pageY)}function Se(D){const N=D.pointerId===v[0].pointerId?v[1]:v[0];return S[N.pointerId]}i.domElement.addEventListener("contextmenu",X),i.domElement.addEventListener("pointerdown",wt),i.domElement.addEventListener("pointercancel",Bt),i.domElement.addEventListener("wheel",p2,{passive:!1}),this.update()}};function Uo(d){let e,t,i,n;return e=new s4({props:{dispose:d[2],object:d[0]}}),i=new g8({props:{object:d[4],position:d[1]}}),i.$on("transform",d[5]),{c(){We(e.$$.fragment),t=$e(),We(i.$$.fragment)},l(r){Ye(e.$$.fragment,r),t=et(r),Ye(i.$$.fragment,r)},m(r,a){je(e,r,a),ot(r,t,a),je(i,r,a),n=!0},p(r,a){const s={};a[0]&4&&(s.dispose=r[2]),a[0]&1&&(s.object=r[0]),e.$set(s);const l={};a[0]&2&&(l.position=r[1]),i.$set(l)},i(r){n||(_e(e.$$.fragment,r),_e(i.$$.fragment,r),n=!0)},o(r){ve(e.$$.fragment,r),ve(i.$$.fragment,r),n=!1},d(r){Xe(e,r),r&&me(t),Xe(i,r)}}}function ko(d,e,t){let i,{autoRotate:n=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:s=void 0}=e,{enabled:l=void 0}=e,{enablePan:o=void 0}=e,{enableRotate:x=void 0}=e,{enableZoom:p=void 0}=e,{keyPanSpeed:y=void 0}=e,{keys:z=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:m=void 0}=e,{maxPolarAngle:c=void 0}=e,{maxZoom:u=void 0}=e,{minAzimuthAngle:f=void 0}=e,{minDistance:_=void 0}=e,{minPolarAngle:G=void 0}=e,{minZoom:v=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:P=void 0}=e,{rotateSpeed:h=void 0}=e,{screenSpacePanning:b=void 0}=e,{touches:T=void 0}=e,{zoomSpeed:A=void 0}=e,{target:F=void 0}=e,{dispose:C=void 0}=e;const R=z8();dt(d,R,O=>t(30,i=O));const{renderer:B,invalidate:j}=H2();if(!B)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(i instanceof t4))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const Z=f5(),H=()=>{j("Orbitcontrols: change event"),Z("change")},Q=()=>Z("start"),J=()=>Z("end"),L=new No(i,B.domElement);F2(i).orbitControls=L,L.addEventListener("change",H),L.addEventListener("start",Q),L.addEventListener("end",J),yt(()=>{i&&delete F2(i).orbitControls,L.removeEventListener("change",H),L.removeEventListener("start",Q),L.removeEventListener("end",J)});const{start:W,stop:re}=l4(()=>L.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),$=new It,ne=()=>{t(0,L.target=$.position,L),L.update(),j("OrbitControls: target changed")};return d.$$set=O=>{"autoRotate"in O&&t(6,n=O.autoRotate),"autoRotateSpeed"in O&&t(7,r=O.autoRotateSpeed),"dampingFactor"in O&&t(8,a=O.dampingFactor),"enableDamping"in O&&t(9,s=O.enableDamping),"enabled"in O&&t(10,l=O.enabled),"enablePan"in O&&t(11,o=O.enablePan),"enableRotate"in O&&t(12,x=O.enableRotate),"enableZoom"in O&&t(13,p=O.enableZoom),"keyPanSpeed"in O&&t(14,y=O.keyPanSpeed),"keys"in O&&t(15,z=O.keys),"maxAzimuthAngle"in O&&t(16,g=O.maxAzimuthAngle),"maxDistance"in O&&t(17,m=O.maxDistance),"maxPolarAngle"in O&&t(18,c=O.maxPolarAngle),"maxZoom"in O&&t(19,u=O.maxZoom),"minAzimuthAngle"in O&&t(20,f=O.minAzimuthAngle),"minDistance"in O&&t(21,_=O.minDistance),"minPolarAngle"in O&&t(22,G=O.minPolarAngle),"minZoom"in O&&t(23,v=O.minZoom),"mouseButtons"in O&&t(24,S=O.mouseButtons),"panSpeed"in O&&t(25,P=O.panSpeed),"rotateSpeed"in O&&t(26,h=O.rotateSpeed),"screenSpacePanning"in O&&t(27,b=O.screenSpacePanning),"touches"in O&&t(28,T=O.touches),"zoomSpeed"in O&&t(29,A=O.zoomSpeed),"target"in O&&t(1,F=O.target),"dispose"in O&&t(2,C=O.dispose)},d.$$.update=()=>{d.$$.dirty[0]&1073741761&&(n!==void 0&&t(0,L.autoRotate=n,L),r!==void 0&&t(0,L.autoRotateSpeed=r,L),a!==void 0&&t(0,L.dampingFactor=a,L),s!==void 0&&t(0,L.enableDamping=s,L),l!==void 0&&t(0,L.enabled=l,L),o!==void 0&&t(0,L.enablePan=o,L),x!==void 0&&t(0,L.enableRotate=x,L),p!==void 0&&t(0,L.enableZoom=p,L),y!==void 0&&t(0,L.keyPanSpeed=y,L),z!==void 0&&t(0,L.keys=z,L),g!==void 0&&t(0,L.maxAzimuthAngle=g,L),m!==void 0&&t(0,L.maxDistance=m,L),c!==void 0&&t(0,L.maxPolarAngle=c,L),u!==void 0&&t(0,L.maxZoom=u,L),f!==void 0&&t(0,L.minAzimuthAngle=f,L),_!==void 0&&t(0,L.minDistance=_,L),G!==void 0&&t(0,L.minPolarAngle=G,L),v!==void 0&&t(0,L.minZoom=v,L),S!==void 0&&t(0,L.mouseButtons=S,L),P!==void 0&&t(0,L.panSpeed=P,L),h!==void 0&&t(0,L.rotateSpeed=h,L),b!==void 0&&t(0,L.screenSpacePanning=b,L),T!==void 0&&t(0,L.touches=T,L),A!==void 0&&t(0,L.zoomSpeed=A,L),L.update(),j("OrbitControls: props changed")),d.$$.dirty[0]&576&&(n||s?W():re())},[L,F,C,R,$,ne,n,r,a,s,l,o,x,p,y,z,g,m,c,u,f,_,G,v,S,P,h,b,T,A]}class Bo extends tt{constructor(e){super(),it(this,e,ko,Uo,nt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const f8=new It;f8.scale.set(0,0,0);f8.matrix;new bt().fromArray(new Array(16).fill(0));new rt(16777215);const h8=(d,e)=>{if(e.includes(".")){const t=e.split("."),i=t.pop();for(let n=0;n<t.length;n+=1)d=d[t[n]];return{target:d,key:i}}else return{target:d,key:e}},ci=Symbol("initialValueBeforeAttach"),Vo=()=>{const{invalidate:d}=H2();let e=!1,t=ci,i,n,r;const a=(l,o,x)=>{if(s(),!x){const p=l;((p==null?void 0:p.isMaterial)||!1)&&(x="material"),((p==null?void 0:p.isBufferGeometry)||(p==null?void 0:p.isGeometry)||!1)&&(x="geometry")}if(x){if(typeof x=="function")i=x(o,l);else{const{target:p,key:y}=h8(o,x);t=p[y],p[y]=l,n=p,r=y}e=!0,d()}},s=()=>{e&&(i?(i(),i=void 0):n&&r&&t!==ci&&(n[r]=t,t=ci,n=void 0,r=void 0),e=!1,d())};return yt(()=>{s()}),{update:a}},Ho=d=>d&&d.isCamera,_8=d=>d&&d.isOrthographicCamera,G8=d=>d&&d.isPerspectiveCamera,Wo=d=>G8(d)||_8(d),jo=()=>{const{invalidate:d,size:e}=H2(),{setCamera:t}=a4();let i,n;yt(()=>{n==null||n()});const r=l=>{i&&(_8(i)?(i.left=l.width/-2,i.right=l.width/2,i.top=l.height/2,i.bottom=l.height/-2,i.updateProjectionMatrix(),i.updateMatrixWorld(),d()):G8(i)&&(i.aspect=l.width/l.height,i.updateProjectionMatrix(),i.updateMatrixWorld(),d()))};return{update:(l,o)=>{if(n==null||n(),o||!Wo(l)){i=void 0;return}i=l,n=e.subscribe(r)},makeDefaultCamera:(l,o)=>{!Ho(l)||!o||(t(l),d())}}},r7=d=>!!(d!=null&&d.addEventListener),Xo=()=>{const d=f5(),e=P9(),t=y=>{y!=null&&y.type&&d(y.type,y)},i=(y,z)=>{r7(y)&&z.forEach(g=>{y.removeEventListener(g,t)})},n=(y,z)=>{r7(y)&&z.forEach(g=>{y.addEventListener(g,t)})};let r=[],a;const s=vt([]),l=s.subscribe(y=>{i(a,r),n(a,y),r=y});yt(l);const o=vt(),x=o.subscribe(y=>{i(a,r),n(y,r),a=y});return yt(x),yt(()=>{i(a,r)}),R7(()=>{s.set(Object.keys(e.$$.callbacks))}),{updateRef:y=>{o.set(y)}}},qo=["$$scope","$$slots","type","args","attach","instance"],Yo=["fov","aspect","near","far","left","right","top","bottom","zoom"],Zo=d=>typeof d=="string"||typeof d=="number"||typeof d=="boolean"||typeof d>"u"||d===null,Ko=()=>{const{invalidate:d}=H2(),e=new Map,t=(n,r,a,s)=>{var x,p;if(Zo(a)){const y=e.get(r);if(y&&y.instance===n&&y.value===a)return;e.set(r,{instance:n,value:a})}const{key:l,target:o}=h8(n,r);if(!Array.isArray(a)&&typeof a=="number"&&typeof((x=o[l])==null?void 0:x.setScalar)=="function")o[l].setScalar(a);else if(typeof((p=o[l])==null?void 0:p.set)=="function")Array.isArray(a)?o[l].set(...a):o[l].set(a);else{if(o[l]=a,s.manualCamera)return;Yo.includes(l)&&(o.isPerspectiveCamera||o.isOrthographicCamera)&&o.updateProjectionMatrix()}};return{updateProps:(n,r,a)=>{for(const s in r)qo.includes(s)||t(n,s,r[s],a),d()}}},Jo=d=>({ref:d&1}),d7=d=>({ref:d[0]}),Qo=d=>({ref:d&1}),a7=d=>({ref:d[0]});function s7(d){let e,t;return e=new s4({props:{object:d[0],dispose:d[1]}}),{c(){We(e.$$.fragment)},l(i){Ye(e.$$.fragment,i)},m(i,n){je(e,i,n),t=!0},p(i,n){const r={};n&1&&(r.object=i[0]),n&2&&(r.dispose=i[1]),e.$set(r)},i(i){t||(_e(e.$$.fragment,i),t=!0)},o(i){ve(e.$$.fragment,i),t=!1},d(i){Xe(e,i)}}}function $o(d){let e;const t=d[12].default,i=d0(t,d,d[13],d7);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&8193)&&a0(i,t,n,n[13],e?l0(t,n[13],r,Jo):s0(n[13]),d7)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function ex(d){let e,t;return e=new d4({props:{object:d[0],$$slots:{default:[tx]},$$scope:{ctx:d}}}),{c(){We(e.$$.fragment)},l(i){Ye(e.$$.fragment,i)},m(i,n){je(e,i,n),t=!0},p(i,n){const r={};n&1&&(r.object=i[0]),n&8193&&(r.$$scope={dirty:n,ctx:i}),e.$set(r)},i(i){t||(_e(e.$$.fragment,i),t=!0)},o(i){ve(e.$$.fragment,i),t=!1},d(i){Xe(e,i)}}}function tx(d){let e;const t=d[12].default,i=d0(t,d,d[13],a7);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,r){i&&i.m(n,r),e=!0},p(n,r){i&&i.p&&(!e||r&8193)&&a0(i,t,n,n[13],e?l0(t,n[13],r,Qo):s0(n[13]),a7)},i(n){e||(_e(i,n),e=!0)},o(n){ve(i,n),e=!1},d(n){i&&i.d(n)}}}function ix(d){let e=d[4](d[0]),t,i,n,r,a,s,l=e&&s7(d);const o=[ex,$o],x=[];function p(y,z){return z&1&&(i=null),i==null&&(i=!!y[3](y[0])),i?0:1}return n=p(d,-1),r=x[n]=o[n](d),{c(){l&&l.c(),t=$e(),r.c(),a=C4()},l(y){l&&l.l(y),t=et(y),r.l(y),a=C4()},m(y,z){l&&l.m(y,z),ot(y,t,z),x[n].m(y,z),ot(y,a,z),s=!0},p(y,[z]){z&1&&(e=y[4](y[0])),e?l?(l.p(y,z),z&1&&_e(l,1)):(l=s7(y),l.c(),_e(l,1),l.m(t.parentNode,t)):l&&(i1(),ve(l,1,1,()=>{l=null}),n1());let g=n;n=p(y,z),n===g?x[n].p(y,z):(i1(),ve(x[g],1,1,()=>{x[g]=null}),n1(),r=x[n],r?r.p(y,z):(r=x[n]=o[n](y),r.c()),_e(r,1),r.m(a.parentNode,a))},i(y){s||(_e(l),_e(r),s=!0)},o(y){ve(l),ve(r),s=!1},d(y){l&&l.d(y),y&&me(t),x[n].d(y),y&&me(a)}}}function nx(d,e,t){const i=["type","args","attach","manual","makeDefault","dispose","ref"];let n=P4(e,i),r,{$$slots:a={},$$scope:s}=e,{type:l}=e,{args:o=void 0}=e,{attach:x=void 0}=e,{manual:p=void 0}=e,{makeDefault:y=void 0}=e,{dispose:z=void 0}=e;const g=D2("threlte-hierarchical-parent-context");dt(d,g,T=>t(11,r=T));const m=T=>typeof T=="function"&&/^\s*class\s+/.test(T.toString()),c=T=>Array.isArray(T);let{ref:u=m(l)&&c(o)?new l(...o):m(l)?new l:l}=e,f=!1;const _=vt(u);f2("threlte-hierarchical-parent-context",_);const G=Ko(),v=jo(),S=Vo(),P=Xo(),h=T=>!!T.isObject3D,b=T=>T.dispose!==void 0;return d.$$set=T=>{e=wi(wi({},e),D9(T)),t(21,n=P4(e,i)),"type"in T&&t(5,l=T.type),"args"in T&&t(6,o=T.args),"attach"in T&&t(7,x=T.attach),"manual"in T&&t(8,p=T.manual),"makeDefault"in T&&t(9,y=T.makeDefault),"dispose"in T&&t(1,z=T.dispose),"ref"in T&&t(0,u=T.ref),"$$scope"in T&&t(13,s=T.$$scope)},d.$$.update=()=>{d.$$.dirty&1120&&(f?t(0,u=m(l)&&c(o)?new l(...o):m(l)?new l:l):t(10,f=!0)),d.$$.dirty&1&&_.set(u),G.updateProps(u,n,{manualCamera:p}),d.$$.dirty&257&&v.update(u,p),d.$$.dirty&513&&v.makeDefaultCamera(u,y),d.$$.dirty&2177&&S.update(u,r,x),d.$$.dirty&1&&P.updateRef(u)},[u,z,g,h,b,l,o,x,p,y,f,r,a,s]}class O1 extends tt{constructor(e){super(),it(this,e,nx,ix,nt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function rx(d){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class l7 extends tt{constructor(e){super(),it(this,e,rx,null,nt,{})}}new Proxy(l7,{get(d,e){return d[e]||l7}});const dx=Fo(j6,()=>new j6(x8)),zi=(d,e)=>dx.load(d,t=>{var i;mo("useTexture"),(i=e==null?void 0:e.onLoad)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onProgress)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onError)==null||i.call(e,t)}),ax=d=>typeof d=="string",sx=d=>Array.isArray(d),o7=d=>{try{const e=a4();if(!e)return d;t0(e.linear)||(d.encoding=Ke)}catch{console.warn("Calling useTexture outside component initialization does not support color correction.")}return d};function lx(d,e){return ax(d)?Q0?o7(zi(d,e)):new Rt:sx(d)?Q0?d.map(t=>o7(zi(t,e))):d.map(()=>new Rt):Object.entries(d).reduce((n,[r,a])=>(n[r]=Q0?zi(a,e):new Rt,n),{})}const ox=`
  uniform float uUvScale;

  attribute vec3 aPosition;
  attribute vec2 aUvOffset;
  // attribute float aIndex;
  attribute float aTextureIndex;

  varying vec2 vUv;
  // varying float vIndex;
  varying float vTextureIndex;

  void main() {
    vec3 pos = position;

    pos += aPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    // float dim = 1.0 / vUvScale;

    // vec2 uvOffset = vec2(0.0);
    // uvOffset.x = mod(aIndex, dim) * vUvScale;
    // uvOffset.y = floor(aIndex / dim) * vUvScale;

    vUv = uv * uUvScale + aUvOffset;

    // vIndex = aIndex;
    vTextureIndex = aTextureIndex;
  }
`,xx=8;function yx(d){return`
    case ${d}:
      color = texture2D(uTextures[${d}], vUv);
      break;
  `}const px=`
  uniform sampler2D uTextures[NUM_TEXTURES];
  uniform float uNumPerTexture;

  varying vec2 vUv;
  // varying float vIndex;
  varying float vTextureIndex;

  void main() {
    vec4 color = vec4(0.0);

    // HACK
    // Can try using 3d textures or 2d array of textures

    switch(int(vTextureIndex)) {
      // case 0:
      //   color = texture2D(uTextures[0], vUv);
      //   break;
      ${[...Array(xx)].map((d,e)=>yx(e)).join("")}
      default: break;
    }

    gl_FragColor = color;
  }
`;function J2(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function v8(d,e){d.prototype=Object.create(e.prototype),d.prototype.constructor=d,d.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var l2={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},j1={duration:.5,overwrite:!1,delay:0},o4,Ut,gt,_2=1e8,Qe=1/_2,Fi=Math.PI*2,mx=Fi/4,cx=0,b8=Math.sqrt,zx=Math.cos,ux=Math.sin,Ct=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},n0=function(e){return typeof e=="number"},x4=function(e){return typeof e>"u"},V2=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},M8=function(){return typeof window<"u"},t5=function(e){return xt(e)||Ct(e)},S8=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Ni=/(?:-?\.?\d|\.)+/gi,w8=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,D1=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ui=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,T8=/[+-]=-?[.\d]+/,E8=/[^,'"\[\]\s]+/gi,gx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,st,u2,Ui,y4,x2={},o5={},A8,C8=function(e){return(o5=s1(e,x2))&&y2},p4=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},x5=function(e,t){return!t&&console.warn(e)},P8=function(e,t){return e&&(x2[e]=t)&&o5&&(o5[e]=t)||x2},v3=function(){return 0},fx={suppressEvents:!0,isStart:!0,kill:!1},d5={suppressEvents:!0,kill:!1},hx={suppressEvents:!0},m4={},G0=[],ki={},D8,r2={},gi={},x7=30,a5=[],c4="",z4=function(e){var t=e[0],i,n;if(V2(t)||xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=a5.length;n--&&!a5[n].targetTest(t););i=a5[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new e9(e[n],i)))||e.splice(n,1);return e},$0=function(e){return e._gsap||z4(G2(e))[0]._gsap},L8=function(e,t,i){return(i=e[t])&&xt(i)?e[t]():x4(i)&&e.getAttribute&&e.getAttribute(t)||i},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},F1=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},_x=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},y5=function(){var e=G0.length,t=G0.slice(0),i,n;for(ki={},G0.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},R8=function(e,t,i,n){G0.length&&!Ut&&y5(),e.render(t,i,n||Ut&&t<0&&(e._initted||e._startAt)),G0.length&&!Ut&&y5()},I8=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(E8).length<2?t:Ct(e)?e.trim():e},O8=function(e){return e},M2=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Gx=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},s1=function(e,t){for(var i in t)e[i]=t[i];return e},y7=function d(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=V2(t[i])?d(e[i]||(e[i]={}),t[i]):t[i]);return e},p5=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},m3=function(e){var t=e.parent||st,i=e.keyframes?Gx(kt(e.keyframes)):M2;if(Zt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vx=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},F8=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},w5=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},A0=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},e1=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},bx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bi=function(e,t,i,n){return e._startAt&&(Ut?e._startAt.revert(d5):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Mx=function d(e){return!e||e._ts&&d(e.parent)},p7=function(e){return e._repeat?X1(e._tTime,e=e.duration()+e._rDelay)*e:0},X1=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},m5=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},T5=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Qe)||0))},E5=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),T5(e),i._dirty||e1(i,e)),e},N8=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=m5(e.rawTime(),t),(!t._dur||L3(0,t.totalDuration(),i)-t._tTime>Qe)&&t.render(i,!0)),e1(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Qe}},I2=function(e,t,i,n){return t.parent&&A0(t),t._start=Dt((n0(i)?i:i||e!==st?z2(e,i,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),F8(e,t,"_first","_last",e._sort?"_start":0),Vi(t)||(e._recent=t),n||N8(e,t),e._ts<0&&E5(e,e._tTime),e},U8=function(e,t){return(x2.ScrollTrigger||p4("scrollTrigger",t))&&x2.ScrollTrigger.create(t,e)},k8=function(e,t,i,n,r){if(g4(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&D8!==a2.frame)return G0.push(e),e._lazy=[r,n],1},Sx=function d(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||d(t))},Vi=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wx=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&Sx(e)&&!(!e._initted&&Vi(e))||(e._ts<0||e._dp._ts<0)&&!Vi(e))?0:1,s=e._rDelay,l=0,o,x,p;if(s&&e._repeat&&(l=L3(0,e._tDur,t),x=X1(l,s),e._yoyo&&x&1&&(a=1-a),x!==X1(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ut||n||e._zTime===Qe||!t&&e._zTime){if(!e._initted&&k8(e,t,n,i,l))return;for(p=e._zTime,e._zTime=t||(i?Qe:0),i||(i=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,o=e._pt;o;)o.r(a,o.d),o=o._next;t<0&&Bi(e,t,i,!0),e._onUpdate&&!i&&v2(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&v2(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&A0(e,1),!i&&!Ut&&(v2(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tx=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},q1=function(e,t,i,n){var r=e._repeat,a=Dt(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Dt(a*(r+1)+e._rDelay*r):a,s>0&&!n&&E5(e,e._tTime=e._tDur*s),e.parent&&T5(e),i||e1(e.parent,e),e},m7=function(e){return e instanceof Yt?e1(e):q1(e,e._dur)},Ex={_start:0,endTime:v3,totalDuration:v3},z2=function d(e,t,i){var n=e.labels,r=e._recent||Ex,a=e.duration()>=_2?r.endTime(!1):e._dur,s,l,o;return Ct(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),o=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(o?(s<0?r:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),o&&i&&(l=l/100*(kt(i)?i[0]:i).totalDuration()),s>1?d(e,t.substr(0,s-1),i)+l:a+l)):t==null?a:+t},c3=function(e,t,i){var n=n0(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],s,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(s=a,l=i;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Zt(l.vars.inherit)&&l.parent;a.immediateRender=Zt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Gt(t[0],a,t[r+1])},P0=function(e,t){return e||e===0?t(e):t},L3=function(e,t,i){return i<e?e:i>t?t:i},Nt=function(e,t){return!Ct(e)||!(t=gx.exec(e))?"":t[1]},Ax=function(e,t,i){return P0(i,function(n){return L3(e,t,n)})},Hi=[].slice,B8=function(e,t){return e&&V2(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&V2(e[0]))&&!e.nodeType&&e!==u2},Cx=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ct(n)&&!t||B8(n,1)?(r=i).push.apply(r,G2(n)):i.push(n)})||i},G2=function(e,t,i){return gt&&!t&&gt.selector?gt.selector(e):Ct(e)&&!i&&(Ui||!Y1())?Hi.call((t||y4).querySelectorAll(e),0):kt(e)?Cx(e,i):B8(e)?Hi.call(e,0):e?[e]:[]},Wi=function(e){return e=G2(e)[0]||x5("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return G2(t,i.querySelectorAll?i:i===e?x5("Invalid scope")||y4.createElement("div"):e)}},V8=function(e){return e.sort(function(){return .5-Math.random()})},H8=function(e){if(xt(e))return e;var t=V2(e)?e:{each:e},i=t1(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},s=n>0&&n<1,l=isNaN(n)||s,o=t.axis,x=n,p=n;return Ct(n)?x=p={center:.5,edges:.5,end:1}[n]||0:!s&&l&&(x=n[0],p=n[1]),function(y,z,g){var m=(g||t).length,c=a[m],u,f,_,G,v,S,P,h,b;if(!c){if(b=t.grid==="auto"?0:(t.grid||[1,_2])[1],!b){for(P=-_2;P<(P=g[b++].getBoundingClientRect().left)&&b<m;);b--}for(c=a[m]=[],u=l?Math.min(b,m)*x-.5:n%b,f=b===_2?0:l?m*p/b-.5:n/b|0,P=0,h=_2,S=0;S<m;S++)_=S%b-u,G=f-(S/b|0),c[S]=v=o?Math.abs(o==="y"?G:_):b8(_*_+G*G),v>P&&(P=v),v<h&&(h=v);n==="random"&&V8(c),c.max=P-h,c.min=h,c.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(b>m?m-1:o?o==="y"?m/b:b:Math.max(b,m/b))||0)*(n==="edges"?-1:1),c.b=m<0?r-m:r,c.u=Nt(t.amount||t.each)||0,i=i&&m<0?J8(i):i}return m=(c[y]-c.min)/c.max||0,Dt(c.b+(i?i(m):m)*c.v)+c.u}},ji=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Dt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(n0(i)?0:Nt(i))}},W8=function(e,t){var i=kt(e),n,r;return!i&&V2(e)&&(n=i=e.radius||_2,e.values?(e=G2(e.values),(r=!n0(e[0]))&&(n*=n)):e=ji(e.increment)),P0(t,i?xt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),o=_2,x=0,p=e.length,y,z;p--;)r?(y=e[p].x-s,z=e[p].y-l,y=y*y+z*z):y=Math.abs(e[p]-s),y<o&&(o=y,x=p);return x=!n||o<=n?e[x]:a,r||x===a||n0(a)?x:x+Nt(a)}:ji(e))},j8=function(e,t,i,n){return P0(kt(e)?!t:i===!0?!!(i=0):!n,function(){return kt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Px=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Dx=function(e,t){return function(i){return e(parseFloat(i))+(t||Nt(i))}},Lx=function(e,t,i){return q8(e,t,0,1,i)},X8=function(e,t,i){return P0(i,function(n){return e[~~t(n)]})},Rx=function d(e,t,i){var n=t-e;return kt(e)?X8(e,d(0,e.length),t):P0(i,function(r){return(n+(r-e)%n)%n+e})},Ix=function d(e,t,i){var n=t-e,r=n*2;return kt(e)?X8(e,d(0,e.length-1),t):P0(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},b3=function(e){for(var t=0,i="",n,r,a,s;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),s=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(s?E8:Ni),i+=e.substr(t,n-t)+j8(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},q8=function(e,t,i,n,r){var a=t-e,s=n-i;return P0(r,function(l){return i+((l-e)/a*s||0)})},Ox=function d(e,t,i,n){var r=isNaN(e+t)?0:function(z){return(1-z)*e+z*t};if(!r){var a=Ct(e),s={},l,o,x,p,y;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(x=[],p=e.length,y=p-2,o=1;o<p;o++)x.push(d(e[o-1],e[o]));p--,r=function(g){g*=p;var m=Math.min(y,~~g);return x[m](g-m)},i=t}else n||(e=s1(kt(e)?[]:{},e));if(!x){for(l in t)u4.call(s,e,l,"get",t[l]);r=function(g){return _4(g,s)||(a?e.p:e)}}}return P0(i,r)},c7=function(e,t,i){var n=e.labels,r=_2,a,s,l;for(a in n)s=n[a]-t,s<0==!!i&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},v2=function(e,t,i){var n=e.vars,r=n[t],a=gt,s=e._ctx,l,o,x;if(r)return l=n[t+"Params"],o=n.callbackScope||e,i&&G0.length&&y5(),s&&(gt=s),x=l?r.apply(o,l):r.call(o),gt=a,x},y3=function(e){return A0(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&v2(e,"onInterrupt"),e},L1,Fx=function(e){e=!e.name&&e.default||e;var t=e.name,i=xt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:v3,render:_4,add:u4,kill:$x,modifier:Qx,rawVars:0},a={targetTest:0,get:0,getSetter:h4,aliases:{},register:0};if(Y1(),e!==n){if(r2[t])return;M2(n,M2(p5(e,r),a)),s1(n.prototype,s1(r,p5(e,a))),r2[n.prop=t]=n,e.targetTest&&(a5.push(n),m4[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}P8(t,n),e.register&&e.register(y2,n,Jt)},Je=255,p3={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},fi=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Je+.5|0},Y8=function(e,t,i){var n=e?n0(e)?[e>>16,e>>8&Je,e&Je]:0:p3.black,r,a,s,l,o,x,p,y,z,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),p3[e])n=p3[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Je,n&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Ni),!t)l=+n[0]%360/360,o=+n[1]/100,x=+n[2]/100,a=x<=.5?x*(o+1):x+o-x*o,r=x*2-a,n.length>3&&(n[3]*=1),n[0]=fi(l+1/3,r,a),n[1]=fi(l,r,a),n[2]=fi(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(w8),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ni)||p3.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/Je,a=n[1]/Je,s=n[2]/Je,p=Math.max(r,a,s),y=Math.min(r,a,s),x=(p+y)/2,p===y?l=o=0:(z=p-y,o=x>.5?z/(2-p-y):z/(p+y),l=p===r?(a-s)/z+(a<s?6:0):p===a?(s-r)/z+2:(r-a)/z+4,l*=60),n[0]=~~(l+.5),n[1]=~~(o*100+.5),n[2]=~~(x*100+.5)),i&&n.length<4&&(n[3]=1),n},Z8=function(e){var t=[],i=[],n=-1;return e.split(v0).forEach(function(r){var a=r.match(D1)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},z7=function(e,t,i){var n="",r=(e+n).match(v0),a=t?"hsla(":"rgba(",s=0,l,o,x,p;if(!r)return e;if(r=r.map(function(y){return(y=Y8(y,t,1))&&a+(t?y[0]+","+y[1]+"%,"+y[2]+"%,"+y[3]:y.join(","))+")"}),i&&(x=Z8(e),l=i.c,l.join(n)!==x.c.join(n)))for(o=e.replace(v0,"1").split(D1),p=o.length-1;s<p;s++)n+=o[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(x.length?x:r.length?r:i).shift());if(!o)for(o=e.split(v0),p=o.length-1;s<p;s++)n+=o[s]+r[s];return n+o[p]},v0=function(){var d="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in p3)d+="|"+e+"\\b";return new RegExp(d+")","gi")}(),Nx=/hsl[a]?\(/,K8=function(e){var t=e.join(" "),i;if(v0.lastIndex=0,v0.test(t))return i=Nx.test(t),e[1]=z7(e[1],i),e[0]=z7(e[0],i,Z8(e[1])),!0},M3,a2=function(){var d=Date.now,e=500,t=33,i=d(),n=i,r=1e3/240,a=r,s=[],l,o,x,p,y,z,g=function m(c){var u=d()-n,f=c===!0,_,G,v,S;if(u>e&&(i+=u-t),n+=u,v=n-i,_=v-a,(_>0||f)&&(S=++p.frame,y=v-p.time*1e3,p.time=v=v/1e3,a+=_+(_>=r?4:r-_),G=1),f||(l=o(m)),G)for(z=0;z<s.length;z++)s[z](v,y,S,c)};return p={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(c){return y/(1e3/(c||60))},wake:function(){A8&&(!Ui&&M8()&&(u2=Ui=window,y4=u2.document||{},x2.gsap=y2,(u2.gsapVersions||(u2.gsapVersions=[])).push(y2.version),C8(o5||u2.GreenSockGlobals||!u2.gsap&&u2||{}),x=u2.requestAnimationFrame),l&&p.sleep(),o=x||function(c){return setTimeout(c,a-p.time*1e3+1|0)},M3=1,g(2))},sleep:function(){(x?u2.cancelAnimationFrame:clearTimeout)(l),M3=0,o=v3},lagSmoothing:function(c,u){e=c||1/0,t=Math.min(u||33,e)},fps:function(c){r=1e3/(c||240),a=p.time*1e3+r},add:function(c,u,f){var _=u?function(G,v,S,P){c(G,v,S,P),p.remove(_)}:c;return p.remove(c),s[f?"unshift":"push"](_),Y1(),_},remove:function(c,u){~(u=s.indexOf(c))&&s.splice(u,1)&&z>=u&&z--},_listeners:s},p}(),Y1=function(){return!M3&&a2.wake()},Oe={},Ux=/^[\d.\-M][\d.\-,\s]/,kx=/["']/g,Bx=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,s,l,o;r<a;r++)l=i[r],s=r!==a-1?l.lastIndexOf(","):l.length,o=l.substr(0,s),t[n]=isNaN(o)?o.replace(kx,"").trim():+o,n=l.substr(s+1).trim();return t},Vx=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Hx=function(e){var t=(e+"").split("("),i=Oe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Bx(t[1])]:Vx(e).split(",").map(I8)):Oe._CE&&Ux.test(e)?Oe._CE("",e):i},J8=function(e){return function(t){return 1-e(1-t)}},Q8=function d(e,t){for(var i=e._first,n;i;)i instanceof Yt?d(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?d(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},t1=function(e,t){return e&&(xt(e)?e:Oe[e]||Hx(e))||t},o1=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return Kt(e,function(s){Oe[s]=x2[s]=r,Oe[a=s.toLowerCase()]=i;for(var l in r)Oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[s+"."+l]=r[l]}),r},$8=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hi=function d(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Fi*(Math.asin(1/n)||0),s=function(x){return x===1?1:n*Math.pow(2,-10*x)*ux((x-a)*r)+1},l=e==="out"?s:e==="in"?function(o){return 1-s(1-o)}:$8(s);return r=Fi/r,l.config=function(o,x){return d(e,o,x)},l},_i=function d(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:$8(i);return n.config=function(r){return d(e,r)},n};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(d,e){var t=e<5?e+1:e;o1(d+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;o1("Elastic",hi("in"),hi("out"),hi());(function(d,e){var t=1/e,i=2*t,n=2.5*t,r=function(s){return s<t?d*s*s:s<i?d*Math.pow(s-1.5/e,2)+.75:s<n?d*(s-=2.25/e)*s+.9375:d*Math.pow(s-2.625/e,2)+.984375};o1("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);o1("Expo",function(d){return d?Math.pow(2,10*(d-1)):0});o1("Circ",function(d){return-(b8(1-d*d)-1)});o1("Sine",function(d){return d===1?1:-zx(d*mx)+1});o1("Back",_i("in"),_i("out"),_i());Oe.SteppedEase=Oe.steps=x2.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-Qe;return function(s){return((n*L3(0,a,s)|0)+r)*i}}};j1.ease=Oe["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(d){return c4+=d+","+d+"Params,"});var e9=function(e,t){this.id=cx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:L8,this.set=t?t.getSetter:h4},Z1=function(){function d(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,q1(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),M3||a2.wake()}var e=d.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,q1(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Y1(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(E5(this,i),!r._dp||r.parent||N8(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&I2(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Qe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),R8(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+p7(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+p7(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?X1(this._tTime,r)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Qe?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?m5(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Qe?0:this._rts,this.totalTime(L3(-this._delay,this._tDur,n),!0),T5(this),bx(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Y1(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qe&&(this._tTime-=Qe)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&I2(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Zt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?m5(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hx);var n=Ut;return Ut=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ut=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,m7(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,m7(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(z2(this,i),Zt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Zt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Qe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qe,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Qe)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=xt(i)?i:O8,s=function(){var o=n.then;n.then=null,xt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=o),r(a),n.then=o};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?s():n._prom=s})},e.kill=function(){y3(this)},d}();M2(Z1.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qe,_prom:0,_ps:!1,_rts:1});var Yt=function(d){v8(e,d);function e(i,n){var r;return i===void 0&&(i={}),r=d.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Zt(i.sortChildren),st&&I2(i.parent||st,J2(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&U8(J2(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return c3(0,arguments,this),this},t.from=function(n,r,a){return c3(1,arguments,this),this},t.fromTo=function(n,r,a,s){return c3(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,m3(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Gt(n,r,z2(this,a),1),this},t.call=function(n,r,a){return I2(this,Gt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,s,l,o,x){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=o,a.onCompleteParams=x,a.parent=this,new Gt(n,a,z2(this,l)),this},t.staggerFrom=function(n,r,a,s,l,o,x){return a.runBackwards=1,m3(a).immediateRender=Zt(a.immediateRender),this.staggerTo(n,r,a,s,l,o,x)},t.staggerFromTo=function(n,r,a,s,l,o,x,p){return s.startAt=a,m3(s).immediateRender=Zt(s.immediateRender),this.staggerTo(n,r,s,l,o,x,p)},t.render=function(n,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,o=this._dur,x=n<=0?0:Dt(n),p=this._zTime<0!=n<0&&(this._initted||!o),y,z,g,m,c,u,f,_,G,v,S,P;if(this!==st&&x>l&&n>=0&&(x=l),x!==this._tTime||a||p){if(s!==this._time&&o&&(x+=this._time-s,n+=this._time-s),y=x,G=this._start,_=this._ts,u=!_,p&&(o||(s=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,c=o+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(c*100+n,r,a);if(y=Dt(x%c),x===l?(m=this._repeat,y=o):(m=~~(x/c),m&&m===x/c&&(y=o,m--),y>o&&(y=o)),v=X1(this._tTime,c),!s&&this._tTime&&v!==m&&(v=m),S&&m&1&&(y=o-y,P=1),m!==v&&!this._lock){var h=S&&v&1,b=h===(S&&m&1);if(m<v&&(h=!h),s=h?0:o,this._lock=1,this.render(s||(P?0:Dt(m*c)),r,!o)._lock=0,this._tTime=x,!r&&this.parent&&v2(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),s&&s!==this._time||u!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(o=this._dur,l=this._tDur,b&&(this._lock=2,s=h?o:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Q8(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=Tx(this,Dt(s),Dt(y)),f&&(x-=y-(y=f._start))),this._tTime=x,this._time=y,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&y&&!r&&(v2(this,"onStart"),this._tTime!==x))return this;if(y>=s&&n>=0)for(z=this._first;z;){if(g=z._next,(z._act||y>=z._start)&&z._ts&&f!==z){if(z.parent!==this)return this.render(n,r,a);if(z.render(z._ts>0?(y-z._start)*z._ts:(z._dirty?z.totalDuration():z._tDur)+(y-z._start)*z._ts,r,a),y!==this._time||!this._ts&&!u){f=0,g&&(x+=this._zTime=-Qe);break}}z=g}else{z=this._last;for(var T=n<0?n:y;z;){if(g=z._prev,(z._act||T<=z._end)&&z._ts&&f!==z){if(z.parent!==this)return this.render(n,r,a);if(z.render(z._ts>0?(T-z._start)*z._ts:(z._dirty?z.totalDuration():z._tDur)+(T-z._start)*z._ts,r,a||Ut&&(z._initted||z._startAt)),y!==this._time||!this._ts&&!u){f=0,g&&(x+=this._zTime=T?-Qe:Qe);break}}z=g}}if(f&&!r&&(this.pause(),f.render(y>=s?0:-Qe)._zTime=y>=s?1:-1,this._ts))return this._start=G,T5(this),this.render(n,r,a);this._onUpdate&&!r&&v2(this,"onUpdate",!0),(x===l&&this._tTime>=this.totalDuration()||!x&&s)&&(G===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!o)&&(x===l&&this._ts>0||!x&&this._ts<0)&&A0(this,1),!r&&!(n<0&&!s)&&(x||s||!l)&&(v2(this,x===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(x<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(n0(r)||(r=z2(this,r,n)),!(n instanceof Z1)){if(kt(n))return n.forEach(function(s){return a.add(s,r)}),this;if(Ct(n))return this.addLabel(n,r);if(xt(n))n=Gt.delayedCall(0,n);else return this}return this!==n?I2(this,n,r):this},t.getChildren=function(n,r,a,s){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-_2);for(var l=[],o=this._first;o;)o._start>=s&&(o instanceof Gt?r&&l.push(o):(a&&l.push(o),n&&l.push.apply(l,o.getChildren(!0,r,a)))),o=o._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Ct(n)?this.removeLabel(n):xt(n)?this.killTweensOf(n):(w5(this,n),n===this._recent&&(this._recent=this._last),e1(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(a2.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),d.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=z2(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var s=Gt.delayedCall(0,r||v3,a);return s.data="isPause",this._hasPause=1,I2(this,s,z2(this,n))},t.removePause=function(n){var r=this._first;for(n=z2(this,n);r;)r._start===n&&r.data==="isPause"&&A0(r),r=r._next},t.killTweensOf=function(n,r,a){for(var s=this.getTweensOf(n,a),l=s.length;l--;)g0!==s[l]&&s[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],s=G2(n),l=this._first,o=n0(r),x;l;)l instanceof Gt?_x(l._targets,s)&&(o?(!g0||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(x=l.getTweensOf(s,r)).length&&a.push.apply(a,x),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,s=z2(a,n),l=r,o=l.startAt,x=l.onStart,p=l.onStartParams,y=l.immediateRender,z,g=Gt.to(a,M2({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(o&&"time"in o?o.time:a._time))/a.timeScale())||Qe,onStart:function(){if(a.pause(),!z){var c=r.duration||Math.abs((s-(o&&"time"in o?o.time:a._time))/a.timeScale());g._dur!==c&&q1(g,c,0,1).render(g._time,!0,!0),z=1}x&&x.apply(g,p||[])}},r));return y?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,M2({startAt:{time:z2(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),c7(this,z2(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),c7(this,z2(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Qe)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,o;s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(r)for(o in l)l[o]>=a&&(l[o]+=n);return e1(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return d.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),e1(this)},t.totalDuration=function(n){var r=0,a=this,s=a._last,l=_2,o,x,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(p=a.parent;s;)o=s._prev,s._dirty&&s.totalDuration(),x=s._start,x>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,I2(a,s,x-s._delay,1)._lock=0):l=x,x<0&&s._ts&&(r-=x,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=x/a._ts,a._time-=x,a._tTime-=x),a.shiftChildren(-x,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=o;q1(a,a===st&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(st._ts&&(R8(st,m5(n,st)),D8=a2.frame),a2.frame>=x7){x7+=l2.autoSleep||120;var r=st._first;if((!r||!r._ts)&&l2.autoSleep&&a2._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||a2.sleep()}}},e}(Z1);M2(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wx=function(e,t,i,n,r,a,s){var l=new Jt(this._pt,e,t,0,1,a9,null,r),o=0,x=0,p,y,z,g,m,c,u,f;for(l.b=i,l.e=n,i+="",n+="",(u=~n.indexOf("random("))&&(n=b3(n)),a&&(f=[i,n],a(f,e,t),i=f[0],n=f[1]),y=i.match(ui)||[];p=ui.exec(n);)g=p[0],m=n.substring(o,p.index),z?z=(z+1)%5:m.substr(-5)==="rgba("&&(z=1),g!==y[x++]&&(c=parseFloat(y[x-1])||0,l._pt={_next:l._pt,p:m||x===1?m:",",s:c,c:g.charAt(1)==="="?F1(c,g)-c:parseFloat(g)-c,m:z&&z<4?Math.round:0},o=ui.lastIndex);return l.c=o<n.length?n.substring(o,n.length):"",l.fp=s,(T8.test(n)||u)&&(l.e=0),this._pt=l,l},u4=function(e,t,i,n,r,a,s,l,o,x){xt(n)&&(n=n(r||0,e,a));var p=e[t],y=i!=="get"?i:xt(p)?o?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](o):e[t]():p,z=xt(p)?o?Zx:r9:f4,g;if(Ct(n)&&(~n.indexOf("random(")&&(n=b3(n)),n.charAt(1)==="="&&(g=F1(y,n)+(Nt(y)||0),(g||g===0)&&(n=g))),!x||y!==n||Xi)return!isNaN(y*n)&&n!==""?(g=new Jt(this._pt,e,t,+y||0,n-(y||0),typeof p=="boolean"?Jx:d9,0,z),o&&(g.fp=o),s&&g.modifier(s,this,e),this._pt=g):(!p&&!(t in e)&&p4(t,n),Wx.call(this,e,t,y,n,z,l||l2.stringFilter,o))},jx=function(e,t,i,n,r){if(xt(e)&&(e=z3(e,r,t,i,n)),!V2(e)||e.style&&e.nodeType||kt(e)||S8(e))return Ct(e)?z3(e,r,t,i,n):e;var a={},s;for(s in e)a[s]=z3(e[s],r,t,i,n);return a},t9=function(e,t,i,n,r,a){var s,l,o,x;if(r2[e]&&(s=new r2[e]).init(r,s.rawVars?t[e]:jx(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new Jt(i._pt,r,e,0,1,s.render,s,0,s.priority),i!==L1))for(o=i._ptLookup[i._targets.indexOf(r)],x=s._props.length;x--;)o[s._props[x]]=l;return s},g0,Xi,g4=function d(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,s=n.immediateRender,l=n.lazy,o=n.onUpdate,x=n.onUpdateParams,p=n.callbackScope,y=n.runBackwards,z=n.yoyoEase,g=n.keyframes,m=n.autoRevert,c=e._dur,u=e._startAt,f=e._targets,_=e.parent,G=_&&_.data==="nested"?_.vars.targets:f,v=e._overwrite==="auto"&&!o4,S=e.timeline,P,h,b,T,A,F,C,R,B,j,Z,H,Q;if(S&&(!g||!r)&&(r="none"),e._ease=t1(r,j1.ease),e._yEase=z?J8(t1(z===!0?r:z,j1.ease)):0,z&&e._yoyo&&!e._repeat&&(z=e._yEase,e._yEase=e._ease,e._ease=z),e._from=!S&&!!n.runBackwards,!S||g&&!n.stagger){if(R=f[0]?$0(f[0]).harness:0,H=R&&n[R.prop],P=p5(n,m4),u&&(u._zTime<0&&u.progress(1),t<0&&y&&s&&!m?u.render(-1,!0):u.revert(y&&c?d5:fx),u._lazy=0),a){if(A0(e._startAt=Gt.set(f,M2({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!u&&Zt(l),startAt:null,delay:0,onUpdate:o,onUpdateParams:x,callbackScope:p,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!s&&!m)&&e._startAt.revert(d5),s&&c&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(y&&c&&!u){if(t&&(s=!1),b=M2({overwrite:!1,data:"isFromStart",lazy:s&&!u&&Zt(l),immediateRender:s,stagger:0,parent:_},P),H&&(b[R.prop]=H),A0(e._startAt=Gt.set(f,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(d5):e._startAt.render(-1,!0)),e._zTime=t,!s)d(e._startAt,Qe,Qe);else if(!t)return}for(e._pt=e._ptCache=0,l=c&&Zt(l)||l&&!c,h=0;h<f.length;h++){if(A=f[h],C=A._gsap||z4(f)[h]._gsap,e._ptLookup[h]=j={},ki[C.id]&&G0.length&&y5(),Z=G===f?h:G.indexOf(A),R&&(B=new R).init(A,H||P,e,Z,G)!==!1&&(e._pt=T=new Jt(e._pt,A,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(J){j[J]=T}),B.priority&&(F=1)),!R||H)for(b in P)r2[b]&&(B=t9(b,P,e,Z,A,G))?B.priority&&(F=1):j[b]=T=u4.call(e,A,b,"get",P[b],Z,G,0,n.stringFilter);e._op&&e._op[h]&&e.kill(A,e._op[h]),v&&e._pt&&(g0=e,st.killTweensOf(A,j,e.globalTime(t)),Q=!e.parent,g0=0),e._pt&&l&&(ki[C.id]=1)}F&&s9(e),e._onInit&&e._onInit(e)}e._onUpdate=o,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&S.render(_2,!0,!0)},Xx=function(e,t,i,n,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],o,x,p,y;if(!l)for(l=e._ptCache[t]=[],p=e._ptLookup,y=e._targets.length;y--;){if(o=p[y][t],o&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==t&&o.fp!==t;)o=o._next;if(!o)return Xi=1,e.vars[t]="+=0",g4(e,s),Xi=0,1;l.push(o)}for(y=l.length;y--;)x=l[y],o=x._pt||x,o.s=(n||n===0)&&!r?n:o.s+(n||0)+a*o.c,o.c=i-o.s,x.e&&(x.e=mt(i)+Nt(x.e)),x.b&&(x.b=o.s+Nt(x.b))},qx=function(e,t){var i=e[0]?$0(e[0]).harness:0,n=i&&i.aliases,r,a,s,l;if(!n)return t;r=s1({},t);for(a in n)if(a in r)for(l=n[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Yx=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,s;if(kt(t))s=i[e]||(i[e]=[]),t.forEach(function(l,o){return s.push({t:o/(t.length-1)*100,v:l,e:r})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},z3=function(e,t,i,n,r){return xt(e)?e.call(t,i,n,r):Ct(e)&&~e.indexOf("random(")?b3(e):e},i9=c4+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",n9={};Kt(i9+",id,stagger,delay,duration,paused,scrollTrigger",function(d){return n9[d]=1});var Gt=function(d){v8(e,d);function e(i,n,r,a){var s;typeof n=="number"&&(r.duration=n,n=r,r=null),s=d.call(this,a?n:m3(n))||this;var l=s.vars,o=l.duration,x=l.delay,p=l.immediateRender,y=l.stagger,z=l.overwrite,g=l.keyframes,m=l.defaults,c=l.scrollTrigger,u=l.yoyoEase,f=n.parent||st,_=(kt(i)||S8(i)?n0(i[0]):"length"in n)?[i]:G2(i),G,v,S,P,h,b,T,A;if(s._targets=_.length?z4(_):x5("GSAP target "+i+" not found. https://greensock.com",!l2.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=z,g||y||t5(o)||t5(x)){if(n=s.vars,G=s.timeline=new Yt({data:"nested",defaults:m||{},targets:f&&f.data==="nested"?f.vars.targets:_}),G.kill(),G.parent=G._dp=J2(s),G._start=0,y||t5(o)||t5(x)){if(P=_.length,T=y&&H8(y),V2(y))for(h in y)~i9.indexOf(h)&&(A||(A={}),A[h]=y[h]);for(v=0;v<P;v++)S=p5(n,n9),S.stagger=0,u&&(S.yoyoEase=u),A&&s1(S,A),b=_[v],S.duration=+z3(o,J2(s),v,b,_),S.delay=(+z3(x,J2(s),v,b,_)||0)-s._delay,!y&&P===1&&S.delay&&(s._delay=x=S.delay,s._start+=x,S.delay=0),G.to(b,S,T?T(v,b,_):0),G._ease=Oe.none;G.duration()?o=x=0:s.timeline=0}else if(g){m3(M2(G.vars.defaults,{ease:"none"})),G._ease=t1(g.ease||n.ease||"none");var F=0,C,R,B;if(kt(g))g.forEach(function(j){return G.to(_,j,">")}),G.duration();else{S={};for(h in g)h==="ease"||h==="easeEach"||Yx(h,g[h],S,g.easeEach);for(h in S)for(C=S[h].sort(function(j,Z){return j.t-Z.t}),F=0,v=0;v<C.length;v++)R=C[v],B={ease:R.e,duration:(R.t-(v?C[v-1].t:0))/100*o},B[h]=R.v,G.to(_,B,F),F+=B.duration;G.duration()<o&&G.to({},{duration:o-G.duration()})}}o||s.duration(o=G.duration())}else s.timeline=0;return z===!0&&!o4&&(g0=J2(s),st.killTweensOf(_),g0=0),I2(f,J2(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(p||!o&&!g&&s._start===Dt(f._time)&&Zt(p)&&Mx(J2(s))&&f.data!=="nested")&&(s._tTime=-Qe,s.render(Math.max(0,-x)||0)),c&&U8(J2(s),c),s}var t=e.prototype;return t.render=function(n,r,a){var s=this._time,l=this._tDur,o=this._dur,x=n<0,p=n>l-Qe&&!x?l:n<Qe?0:n,y,z,g,m,c,u,f,_,G;if(!o)wx(this,n,r,a);else if(p!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==x){if(y=p,_=this.timeline,this._repeat){if(m=o+this._rDelay,this._repeat<-1&&x)return this.totalTime(m*100+n,r,a);if(y=Dt(p%m),p===l?(g=this._repeat,y=o):(g=~~(p/m),g&&g===p/m&&(y=o,g--),y>o&&(y=o)),u=this._yoyo&&g&1,u&&(G=this._yEase,y=o-y),c=X1(this._tTime,m),y===s&&!a&&this._initted)return this._tTime=p,this;g!==c&&(_&&this._yEase&&Q8(_,u),this.vars.repeatRefresh&&!u&&!this._lock&&(this._lock=a=1,this.render(Dt(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(k8(this,x?n:y,a,r,p))return this._tTime=0,this;if(s!==this._time)return this;if(o!==this._dur)return this.render(n,r,a)}if(this._tTime=p,this._time=y,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=f=(G||this._ease)(y/o),this._from&&(this.ratio=f=1-f),y&&!s&&!r&&(v2(this,"onStart"),this._tTime!==p))return this;for(z=this._pt;z;)z.r(f,z.d),z=z._next;_&&_.render(n<0?n:!y&&u?-Qe:_._dur*_._ease(y/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(x&&Bi(this,n,r,a),v2(this,"onUpdate")),this._repeat&&g!==c&&this.vars.onRepeat&&!r&&this.parent&&v2(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(x&&!this._onUpdate&&Bi(this,n,!0,!0),(n||!o)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&A0(this,1),!r&&!(x&&!s)&&(p||s||u)&&(v2(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),d.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,s){M3||a2.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||g4(this,l),o=this._ease(l/this._dur),Xx(this,n,r,a,s,o,l)?this.resetTo(n,r,a,s):(E5(this,0),this.parent||F8(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?y3(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,g0&&g0.vars.overwrite!==!0)._first||y3(this),this.parent&&a!==this.timeline.totalDuration()&&q1(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=n?G2(n):s,o=this._ptLookup,x=this._pt,p,y,z,g,m,c,u;if((!r||r==="all")&&vx(s,l))return r==="all"&&(this._pt=0),y3(this);for(p=this._op=this._op||[],r!=="all"&&(Ct(r)&&(m={},Kt(r,function(f){return m[f]=1}),r=m),r=qx(s,r)),u=s.length;u--;)if(~l.indexOf(s[u])){y=o[u],r==="all"?(p[u]=r,g=y,z={}):(z=p[u]=p[u]||{},g=r);for(m in g)c=y&&y[m],c&&((!("kill"in c.d)||c.d.kill(m)===!0)&&w5(this,c,"_pt"),delete y[m]),z!=="all"&&(z[m]=1)}return this._initted&&!this._pt&&x&&y3(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return c3(1,arguments)},e.delayedCall=function(n,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(n,r,a){return c3(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return st.killTweensOf(n,r,a)},e}(Z1);M2(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(d){Gt[d]=function(){var e=new Yt,t=Hi.call(arguments,0);return t.splice(d==="staggerFromTo"?5:4,0,0),e[d].apply(e,t)}});var f4=function(e,t,i){return e[t]=i},r9=function(e,t,i){return e[t](i)},Zx=function(e,t,i,n){return e[t](n.fp,i)},Kx=function(e,t,i){return e.setAttribute(t,i)},h4=function(e,t){return xt(e[t])?r9:x4(e[t])&&e.setAttribute?Kx:f4},d9=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},a9=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},_4=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Qx=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},$x=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?w5(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ey=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},s9=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},Jt=function(){function d(t,i,n,r,a,s,l,o,x){this.t=i,this.s=r,this.c=a,this.p=n,this.r=s||d9,this.d=l||this,this.set=o||f4,this.pr=x||0,this._next=t,t&&(t._prev=this)}var e=d.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=ey,this.m=i,this.mt=r,this.tween=n},d}();Kt(c4+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(d){return m4[d]=1});x2.TweenMax=x2.TweenLite=Gt;x2.TimelineLite=x2.TimelineMax=Yt;st=new Yt({sortChildren:!1,defaults:j1,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});l2.stringFilter=K8;var K1=[],s5={},ty=[],u7=0,Gi=function(e){return(s5[e]||ty).map(function(t){return t()})},qi=function(){var e=Date.now(),t=[];e-u7>2&&(Gi("matchMediaInit"),K1.forEach(function(i){var n=i.queries,r=i.conditions,a,s,l,o;for(s in n)a=u2.matchMedia(n[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,o=1);o&&(i.revert(),l&&t.push(i))}),Gi("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),u7=e,Gi("matchMedia"))},l9=function(){function d(t,i){this.selector=i&&Wi(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=d.prototype;return e.add=function(i,n,r){xt(i)&&(r=n,n=i,i=xt);var a=this,s=function(){var o=gt,x=a.selector,p;return o&&o!==a&&o.data.push(a),r&&(a.selector=Wi(r)),gt=a,p=n.apply(a,arguments),xt(p)&&a._r.push(p),gt=o,a.selector=x,a.isReverted=!1,p};return a.last=s,i===xt?s(a):i?a[i]=s:s},e.ignore=function(i){var n=gt;gt=null,i(this),gt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof d?i.push.apply(i,n.getTweens()):n instanceof Gt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(o){return a.splice(a.indexOf(o),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,o){return o.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Z1)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n){var s=K1.indexOf(this);~s&&K1.splice(s,1)}},e.revert=function(i){this.kill(i||{})},d}(),iy=function(){function d(t){this.contexts=[],this.scope=t}var e=d.prototype;return e.add=function(i,n,r){V2(i)||(i={matches:i});var a=new l9(0,r||this.scope),s=a.conditions={},l,o,x;this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(o in i)o==="all"?x=1:(l=u2.matchMedia(i[o]),l&&(K1.indexOf(a)<0&&K1.push(a),(s[o]=l.matches)&&(x=1),l.addListener?l.addListener(qi):l.addEventListener("change",qi)));return x&&n(a),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},d}(),c5={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Fx(n)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ct(e)&&(e=G2(e)[0]);var r=$0(e||{}).get,a=i?O8:I8;return i==="native"&&(i=""),e&&(t?a((r2[t]&&r2[t].get||r)(e,t,i,n)):function(s,l,o){return a((r2[s]&&r2[s].get||r)(e,s,l,o))})},quickSetter:function(e,t,i){if(e=G2(e),e.length>1){var n=e.map(function(x){return y2.quickSetter(x,t,i)}),r=n.length;return function(x){for(var p=r;p--;)n[p](x)}}e=e[0]||{};var a=r2[t],s=$0(e),l=s.harness&&(s.harness.aliases||{})[t]||t,o=a?function(x){var p=new a;L1._pt=0,p.init(e,i?x+i:x,L1,0,[e]),p.render(1,p),L1._pt&&_4(1,L1)}:s.set(e,l);return a?o:function(x){return o(e,l,i?x+i:x,s,1)}},quickTo:function(e,t,i){var n,r=y2.to(e,s1((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),a=function(l,o,x){return r.resetTo(t,l,o,x)};return a.tween=r,a},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=t1(e.ease,j1.ease)),y7(j1,e||{})},config:function(e){return y7(l2,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!r2[s]&&!x2[s]&&x5(t+" effect requires "+s+" plugin.")}),gi[t]=function(s,l,o){return i(G2(s),M2(l||{},r),o)},a&&(Yt.prototype[t]=function(s,l,o){return this.add(gi[t](s,V2(l)?l:(o=l)&&{},this),o)})},registerEase:function(e,t){Oe[e]=t1(t)},parseEase:function(e,t){return arguments.length?t1(e,t):Oe},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Yt(e),n,r;for(i.smoothChildTiming=Zt(e.smoothChildTiming),st.remove(i),i._dp=0,i._time=i._tTime=st._time,n=st._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Gt&&n.vars.onComplete===n._targets[0]))&&I2(i,n,n._start-n._delay),n=r;return I2(st,i,0),i},context:function(e,t){return e?new l9(e,t):gt},matchMedia:function(e){return new iy(e)},matchMediaRefresh:function(){return K1.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||qi()},addEventListener:function(e,t){var i=s5[e]||(s5[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=s5[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Rx,wrapYoyo:Ix,distribute:H8,random:j8,snap:W8,normalize:Lx,getUnit:Nt,clamp:Ax,splitColor:Y8,toArray:G2,selector:Wi,mapRange:q8,pipe:Px,unitize:Dx,interpolate:Ox,shuffle:V8},install:C8,effects:gi,ticker:a2,updateRoot:Yt.updateRoot,plugins:r2,globalTimeline:st,core:{PropTween:Jt,globals:P8,Tween:Gt,Timeline:Yt,Animation:Z1,getCache:$0,_removeLinkedListItem:w5,reverting:function(){return Ut},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return o4=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(d){return c5[d]=Gt[d]});a2.add(Yt.updateRoot);L1=c5.to({},{duration:0});var ny=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ry=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=ny(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},vi=function(e,t){return{name:e,rawVars:1,init:function(n,r,a){a._onInit=function(s){var l,o;if(Ct(r)&&(l={},Kt(r,function(x){return l[x]=1}),r=l),t){l={};for(o in r)l[o]=t(r[o]);r=l}ry(s,r)}}}},y2=c5.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,s,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ut?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vi("roundProps",ji),vi("modifiers"),vi("snap",W8))||c5;Gt.version=Yt.version=y2.version="3.11.4";A8=1;M8()&&Y1();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com