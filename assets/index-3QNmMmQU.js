(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="170",Lc=0,Io=1,Ic=2,Gl=1,Vl=2,An=3,Kn=0,Ot=1,Ft=2,Xn=0,Bi=1,Uo=2,No=3,Fo=4,Uc=5,ri=100,Nc=101,Fc=102,Oc=103,Bc=104,zc=200,Hc=201,Gc=202,Vc=203,pa=204,ma=205,kc=206,Wc=207,Xc=208,qc=209,Yc=210,Kc=211,Zc=212,$c=213,jc=214,ga=0,_a=1,xa=2,Wi=3,va=4,Ma=5,Sa=6,Ea=7,kl=0,Jc=1,Qc=2,qn=0,eu=1,tu=2,nu=3,Wl=4,iu=5,ru=6,su=7,Xl=300,Xi=301,qi=302,ya=303,Ta=304,xs=306,wa=1e3,ui=1001,ba=1002,dn=1003,au=1004,Ar=1005,_n=1006,Ds=1007,hi=1008,Ln=1009,ql=1010,Yl=1011,Sr=1012,oo=1013,fi=1014,Cn=1015,Er=1016,lo=1017,co=1018,Yi=1020,Kl=35902,Zl=1021,$l=1022,un=1023,jl=1024,Jl=1025,zi=1026,Ki=1027,Ql=1028,uo=1029,ec=1030,ho=1031,fo=1033,Qr=33776,es=33777,ts=33778,ns=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,Da=36196,La=37492,Ia=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,Ha=37814,Ga=37815,Va=37816,ka=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,is=36492,Ka=36494,Za=36495,tc=36283,$a=36284,ja=36285,Ja=36286,ou=3200,lu=3201,nc=0,cu=1,Wn="",Jt="srgb",Ji="srgb-linear",vs="linear",it="srgb",vi=7680,Oo=519,uu=512,hu=513,du=514,ic=515,fu=516,pu=517,mu=518,gu=519,Bo=35044,zo="300 es",Pn=2e3,ds=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Qa=180/Math.PI;function yr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function _u(i,e){return(i%e+e)%e}function Is(i,e,t){return(1-t)*i+t*e}function lr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,a,o,l,c,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,u)}set(e,t,n,r,a,o,l,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],d=n[4],p=n[7],f=n[2],g=n[5],_=n[8],x=r[0],m=r[3],h=r[6],b=r[1],A=r[4],E=r[7],F=r[2],C=r[5],R=r[8];return a[0]=o*x+l*b+c*F,a[3]=o*m+l*A+c*C,a[6]=o*h+l*E+c*R,a[1]=u*x+d*b+p*F,a[4]=u*m+d*A+p*C,a[7]=u*h+d*E+p*R,a[2]=f*x+g*b+_*F,a[5]=f*m+g*A+_*C,a[8]=f*h+g*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*l*u-n*a*d+n*l*c+r*a*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=d*o-l*u,f=l*c-d*a,g=u*a-o*c,_=t*p+n*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=p*x,e[1]=(r*u-d*n)*x,e[2]=(l*n-r*o)*x,e[3]=f*x,e[4]=(d*t-r*c)*x,e[5]=(r*a-l*t)*x,e[6]=g*x,e[7]=(n*c-u*t)*x,e[8]=(o*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,l){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Us.makeScale(e,t)),this}rotate(e){return this.premultiply(Us.makeRotation(-e)),this}translate(e,t){return this.premultiply(Us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Oe;function rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){const i=fs("canvas");return i.style.display="block",i}const Ho={};function mr(i){i in Ho||(Ho[i]=!0,console.warn(i))}function vu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Mu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Su(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?vs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Go=[.64,.33,.3,.6,.15,.06],Vo=[.2126,.7152,.0722],ko=[.3127,.329],Wo=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Ji]:{primaries:Go,whitePoint:ko,transfer:vs,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:Go,whitePoint:ko,transfer:it,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}});let Mi;class Eu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=fs("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Dn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yu=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(Ns(r[o].image)):a.push(Ns(r[o]))}else a=Ns(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tu=0;class Bt extends Qi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=ui,r=ui,a=_n,o=hi,l=un,c=Ln,u=Bt.DEFAULT_ANISOTROPY,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=yr(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Xl;Bt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],p=c[8],f=c[1],g=c[5],_=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(d-f)<.01&&Math.abs(p-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,E=(g+1)/2,F=(h+1)/2,C=(d+f)/4,R=(p+x)/4,U=(_+m)/4;return A>E&&A>F?A<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(A),r=C/n,a=R/n):E>F?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=C/r,a=U/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=R/a,r=U/a),this.set(n,r,a,t),this}let b=Math.sqrt((m-_)*(m-_)+(p-x)*(p-x)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(p-x)/b,this.z=(f-d)/b,this.w=Math.acos((u+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ac extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,l){let c=n[r+0],u=n[r+1],d=n[r+2],p=n[r+3];const f=a[o+0],g=a[o+1],_=a[o+2],x=a[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(p!==x||c!==f||u!==g||d!==_){let m=1-l;const h=c*f+u*g+d*_+p*x,b=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const F=Math.sqrt(A),C=Math.atan2(F,h*b);m=Math.sin(m*C)/F,l=Math.sin(l*C)/F}const E=l*b;if(c=c*m+f*E,u=u*m+g*E,d=d*m+_*E,p=p*m+x*E,m===1-l){const F=1/Math.sqrt(c*c+u*u+d*d+p*p);c*=F,u*=F,d*=F,p*=F}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,o){const l=n[r],c=n[r+1],u=n[r+2],d=n[r+3],p=a[o],f=a[o+1],g=a[o+2],_=a[o+3];return e[t]=l*_+d*p+c*g-u*f,e[t+1]=c*_+d*f+u*p-l*g,e[t+2]=u*_+d*g+l*f-c*p,e[t+3]=d*_-l*p-c*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),d=l(r/2),p=l(a/2),f=c(n/2),g=c(r/2),_=c(a/2);switch(o){case"XYZ":this._x=f*d*p+u*g*_,this._y=u*g*p-f*d*_,this._z=u*d*_+f*g*p,this._w=u*d*p-f*g*_;break;case"YXZ":this._x=f*d*p+u*g*_,this._y=u*g*p-f*d*_,this._z=u*d*_-f*g*p,this._w=u*d*p+f*g*_;break;case"ZXY":this._x=f*d*p-u*g*_,this._y=u*g*p+f*d*_,this._z=u*d*_+f*g*p,this._w=u*d*p-f*g*_;break;case"ZYX":this._x=f*d*p-u*g*_,this._y=u*g*p+f*d*_,this._z=u*d*_-f*g*p,this._w=u*d*p+f*g*_;break;case"YZX":this._x=f*d*p+u*g*_,this._y=u*g*p+f*d*_,this._z=u*d*_-f*g*p,this._w=u*d*p-f*g*_;break;case"XZY":this._x=f*d*p-u*g*_,this._y=u*g*p-f*d*_,this._z=u*d*_+f*g*p,this._w=u*d*p+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],l=t[5],c=t[9],u=t[2],d=t[6],p=t[10],f=n+l+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-c)*g,this._y=(a-u)*g,this._z=(o-r)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(d-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+u)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(a-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(o-r)/g,this._x=(a+u)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,l=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*l+r*u-a*c,this._y=r*d+o*c+a*l-n*u,this._z=a*d+o*u+n*c-r*l,this._w=o*d-n*l-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),p=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*n),d=2*(l*t-a*r),p=2*(a*n-o*t);return this.x=t+c*u+o*p-l*d,this.y=n+c*d+l*u-a*p,this.z=r+c*p+a*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-a*l,this.y=a*o-n*c,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new P,qo=new er;class mi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(a,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Cr.subVectors(this.max,cr),Si.subVectors(e.a,cr),Ei.subVectors(e.b,cr),yi.subVectors(e.c,cr),On.subVectors(Ei,Si),Bn.subVectors(yi,Ei),$n.subVectors(Si,yi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-$n.z,$n.y,On.z,0,-On.x,Bn.z,0,-Bn.x,$n.z,0,-$n.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-$n.y,$n.x,0];return!Os(t,Si,Ei,yi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Os(t,Si,Ei,yi,Cr))?!1:(Pr.crossVectors(On,Bn),t=[Pr.x,Pr.y,Pr.z],Os(t,Si,Ei,yi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Rr=new mi,Si=new P,Ei=new P,yi=new P,On=new P,Bn=new P,$n=new P,cr=new P,Cr=new P,Pr=new P,jn=new P;function Os(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){jn.fromArray(i,a);const l=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),c=e.dot(jn),u=t.dot(jn),d=n.dot(jn);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Au=new mi,ur=new P,Bs=new P;class Ms{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Au.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Bs)),this.expandByPoint(ur.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new P,zs=new P,Dr=new P,zn=new P,Hs=new P,Lr=new P,Gs=new P;class po{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zs.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(zs);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),l=zn.dot(this.direction),c=-zn.dot(Dr),u=zn.lengthSq(),d=Math.abs(1-o*o);let p,f,g,_;if(d>0)if(p=o*c-l,f=o*l-c,_=a*d,p>=0)if(f>=-_)if(f<=_){const x=1/d;p*=x,f*=x,g=p*(p+o*f+2*l)+f*(o*p+f+2*c)+u}else f=a,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;else f=-a,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-o*a+l)),f=p>0?-a:Math.min(Math.max(-a,-c),a),g=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-a,-c),a),g=f*(f+2*c)+u):(p=Math.max(0,-(o*a+l)),f=p>0?a:Math.min(Math.max(-a,-c),a),g=-p*p+f*(f+2*c)+u);else f=o>0?-a:a,p=Math.max(0,-(o*f+l)),g=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(zs).addScaledVector(Dr,f),g}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,l,c;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,a){Hs.subVectors(t,e),Lr.subVectors(n,e),Gs.crossVectors(Hs,Lr);let o=this.direction.dot(Gs),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;zn.subVectors(this.origin,e);const c=l*this.direction.dot(Lr.crossVectors(zn,Lr));if(c<0)return null;const u=l*this.direction.dot(Hs.cross(zn));if(u<0||c+u>o)return null;const d=-l*zn.dot(Gs);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,a,o,l,c,u,d,p,f,g,_,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,c,u,d,p,f,g,_,x,m)}set(e,t,n,r,a,o,l,c,u,d,p,f,g,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=o,h[9]=l,h[13]=c,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=g,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),a=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const f=o*d,g=o*p,_=l*d,x=l*p;t[0]=c*d,t[4]=-c*p,t[8]=u,t[1]=g+_*u,t[5]=f-x*u,t[9]=-l*c,t[2]=x-f*u,t[6]=_+g*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,g=c*p,_=u*d,x=u*p;t[0]=f+x*l,t[4]=_*l-g,t[8]=o*u,t[1]=o*p,t[5]=o*d,t[9]=-l,t[2]=g*l-_,t[6]=x+f*l,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,g=c*p,_=u*d,x=u*p;t[0]=f-x*l,t[4]=-o*p,t[8]=_+g*l,t[1]=g+_*l,t[5]=o*d,t[9]=x-f*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,g=o*p,_=l*d,x=l*p;t[0]=c*d,t[4]=_*u-g,t[8]=f*u+x,t[1]=c*p,t[5]=x*u+f,t[9]=g*u-_,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,g=o*u,_=l*c,x=l*u;t[0]=c*d,t[4]=x-f*p,t[8]=_*p+g,t[1]=p,t[5]=o*d,t[9]=-l*d,t[2]=-u*d,t[6]=g*p+_,t[10]=f-x*p}else if(e.order==="XZY"){const f=o*c,g=o*u,_=l*c,x=l*u;t[0]=c*d,t[4]=-p,t[8]=u*d,t[1]=f*p+x,t[5]=o*d,t[9]=g*p-_,t[2]=_*p-g,t[6]=l*d,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ru,e,Cu)}lookAt(e,t,n){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Hn.crossVectors(n,Wt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Hn.crossVectors(n,Wt)),Hn.normalize(),Ir.crossVectors(Wt,Hn),r[0]=Hn.x,r[4]=Ir.x,r[8]=Wt.x,r[1]=Hn.y,r[5]=Ir.y,r[9]=Wt.y,r[2]=Hn.z,r[6]=Ir.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],d=n[1],p=n[5],f=n[9],g=n[13],_=n[2],x=n[6],m=n[10],h=n[14],b=n[3],A=n[7],E=n[11],F=n[15],C=r[0],R=r[4],U=r[8],y=r[12],S=r[1],w=r[5],z=r[9],O=r[13],W=r[2],q=r[6],X=r[10],J=r[14],k=r[3],oe=r[7],fe=r[11],ye=r[15];return a[0]=o*C+l*S+c*W+u*k,a[4]=o*R+l*w+c*q+u*oe,a[8]=o*U+l*z+c*X+u*fe,a[12]=o*y+l*O+c*J+u*ye,a[1]=d*C+p*S+f*W+g*k,a[5]=d*R+p*w+f*q+g*oe,a[9]=d*U+p*z+f*X+g*fe,a[13]=d*y+p*O+f*J+g*ye,a[2]=_*C+x*S+m*W+h*k,a[6]=_*R+x*w+m*q+h*oe,a[10]=_*U+x*z+m*X+h*fe,a[14]=_*y+x*O+m*J+h*ye,a[3]=b*C+A*S+E*W+F*k,a[7]=b*R+A*w+E*q+F*oe,a[11]=b*U+A*z+E*X+F*fe,a[15]=b*y+A*O+E*J+F*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],l=e[5],c=e[9],u=e[13],d=e[2],p=e[6],f=e[10],g=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+a*c*p-r*u*p-a*l*f+n*u*f+r*l*g-n*c*g)+x*(+t*c*g-t*u*f+a*o*f-r*o*g+r*u*d-a*c*d)+m*(+t*u*p-t*l*g-a*o*p+n*o*g+a*l*d-n*u*d)+h*(-r*l*d-t*c*p+t*l*f+r*o*p-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],p=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],b=p*m*u-x*f*u+x*c*g-l*m*g-p*c*h+l*f*h,A=_*f*u-d*m*u-_*c*g+o*m*g+d*c*h-o*f*h,E=d*x*u-_*p*u+_*l*g-o*x*g-d*l*h+o*p*h,F=_*p*c-d*x*c-_*l*f+o*x*f+d*l*m-o*p*m,C=t*b+n*A+r*E+a*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(x*f*a-p*m*a-x*r*g+n*m*g+p*r*h-n*f*h)*R,e[2]=(l*m*a-x*c*a+x*r*u-n*m*u-l*r*h+n*c*h)*R,e[3]=(p*c*a-l*f*a-p*r*u+n*f*u+l*r*g-n*c*g)*R,e[4]=A*R,e[5]=(d*m*a-_*f*a+_*r*g-t*m*g-d*r*h+t*f*h)*R,e[6]=(_*c*a-o*m*a-_*r*u+t*m*u+o*r*h-t*c*h)*R,e[7]=(o*f*a-d*c*a+d*r*u-t*f*u-o*r*g+t*c*g)*R,e[8]=E*R,e[9]=(_*p*a-d*x*a-_*n*g+t*x*g+d*n*h-t*p*h)*R,e[10]=(o*x*a-_*l*a+_*n*u-t*x*u-o*n*h+t*l*h)*R,e[11]=(d*l*a-o*p*a-d*n*u+t*p*u+o*n*g-t*l*g)*R,e[12]=F*R,e[13]=(d*x*r-_*p*r+_*n*f-t*x*f-d*n*m+t*p*m)*R,e[14]=(_*l*r-o*x*r-_*n*c+t*x*c+o*n*m-t*l*m)*R,e[15]=(o*p*r-d*l*r+d*n*c-t*p*c-o*n*f+t*l*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,l=e.y,c=e.z,u=a*o,d=a*l;return this.set(u*o+n,u*l-r*c,u*c+r*l,0,u*l+r*c,d*l+n,d*c-r*o,0,u*c-r*l,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,l=t._z,c=t._w,u=a+a,d=o+o,p=l+l,f=a*u,g=a*d,_=a*p,x=o*d,m=o*p,h=l*p,b=c*u,A=c*d,E=c*p,F=n.x,C=n.y,R=n.z;return r[0]=(1-(x+h))*F,r[1]=(g+E)*F,r[2]=(_-A)*F,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(f+h))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+A)*R,r[9]=(m-b)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),l=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const u=1/a,d=1/o,p=1/l;return sn.elements[0]*=u,sn.elements[1]*=u,sn.elements[2]*=u,sn.elements[4]*=d,sn.elements[5]*=d,sn.elements[6]*=d,sn.elements[8]*=p,sn.elements[9]*=p,sn.elements[10]*=p,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,o,l=Pn){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l===Pn)g=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(l===ds)g=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,l=Pn){const c=this.elements,u=1/(t-e),d=1/(n-r),p=1/(o-a),f=(t+e)*u,g=(n+r)*d;let _,x;if(l===Pn)_=(o+a)*p,x=-2*p;else if(l===ds)_=a*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new P,sn=new ft,Ru=new P(0,0,0),Cu=new P(1,1,1),Hn=new P,Ir=new P,Wt=new P,Yo=new ft,Ko=new er;class en{constructor(e=0,t=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],u=r[5],d=r[9],p=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pu=0;const Zo=new P,wi=new er,Tn=new ft,Ur=new P,hr=new P,Du=new P,Lu=new er,$o=new P(1,0,0),jo=new P(0,1,0),Jo=new P(0,0,1),Qo={type:"added"},Iu={type:"removed"},bi={type:"childadded",child:null},Vs={type:"childremoved",child:null};class Ct extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new P,t=new en,n=new er,r=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Oe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(hr,Ur,this.up):Tn.lookAt(Ur,hr,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Tn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qo),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qo),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const p=c[u];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(a(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new P(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,wn=new P,ks=new P,bn=new P,Ai=new P,Ri=new P,el=new P,Ws=new P,Xs=new P,qs=new P,Ys=new _t,Ks=new _t,Zs=new _t;class cn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){an.subVectors(r,t),wn.subVectors(n,t),ks.subVectors(e,t);const o=an.dot(an),l=an.dot(wn),c=an.dot(ks),u=wn.dot(wn),d=wn.dot(ks),p=o*u-l*l;if(p===0)return a.set(0,0,0),null;const f=1/p,g=(u*c-l*d)*f,_=(o*d-l*c)*f;return a.set(1-g-_,_,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,r,a,o,l,c){return this.getBarycoord(e,t,n,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(l,bn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,o){return Ys.setScalar(0),Ks.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ys,a.x),o.addScaledVector(Ks,a.y),o.addScaledVector(Zs,a.z),o}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),wn.subVectors(e,t),an.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,l;Ai.subVectors(r,n),Ri.subVectors(a,n),Ws.subVectors(e,n);const c=Ai.dot(Ws),u=Ri.dot(Ws);if(c<=0&&u<=0)return t.copy(n);Xs.subVectors(e,r);const d=Ai.dot(Xs),p=Ri.dot(Xs);if(d>=0&&p<=d)return t.copy(r);const f=c*p-d*u;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Ai,o);qs.subVectors(e,a);const g=Ai.dot(qs),_=Ri.dot(qs);if(_>=0&&g<=_)return t.copy(a);const x=g*u-c*_;if(x<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(Ri,l);const m=d*_-g*p;if(m<=0&&p-d>=0&&g-_>=0)return el.subVectors(a,r),l=(p-d)/(p-d+(g-_)),t.copy(r).addScaledVector(el,l);const h=1/(m+x+f);return o=x*h,l=f*h,t.copy(n).addScaledVector(Ai,o).addScaledVector(Ri,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=_u(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=$s(o,a,e+1/3),this.g=$s(o,a,e),this.b=$s(o,a,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return $e.fromWorkingColorSpace(It.copy(this),e),Math.round(Gt(It.r*255,0,255))*65536+Math.round(Gt(It.g*255,0,255))*256+Math.round(Gt(It.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(It.copy(this),t);const n=It.r,r=It.g,a=It.b,o=Math.max(n,r,a),l=Math.min(n,r,a);let c,u;const d=(l+o)/2;if(l===o)c=0,u=0;else{const p=o-l;switch(u=d<=.5?p/(o+l):p/(2-o-l),o){case n:c=(r-a)/p+(r<a?6:0);break;case r:c=(a-n)/p+2;break;case a:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Jt){$e.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Nr);const n=Is(Gn.h,Nr.h,t),r=Is(Gn.s,Nr.s,t),a=Is(Gn.l,Nr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new We;We.NAMES=oc;let Uu=0;class tr extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=yr(),this.name="",this.blending=Bi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pt extends tr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new P,Fr=new Je;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class lc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cc extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const $t=new ft,js=new Ct,Ci=new P,Xt=new mi,dr=new mi,Rt=new P;class Vt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rc(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Oe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];dr.setFromBufferAttribute(l),this.morphTargetsRelative?(Rt.addVectors(Xt.min,dr.min),Xt.expandByPoint(Rt),Rt.addVectors(Xt.max,dr.max),Xt.expandByPoint(Rt)):(Xt.expandByPoint(dr.min),Xt.expandByPoint(dr.max))}Xt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Rt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Rt.fromBufferAttribute(l,u),c&&(Ci.fromBufferAttribute(e,u),Rt.add(Ci)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let U=0;U<n.count;U++)l[U]=new P,c[U]=new P;const u=new P,d=new P,p=new P,f=new Je,g=new Je,_=new Je,x=new P,m=new P;function h(U,y,S){u.fromBufferAttribute(n,U),d.fromBufferAttribute(n,y),p.fromBufferAttribute(n,S),f.fromBufferAttribute(a,U),g.fromBufferAttribute(a,y),_.fromBufferAttribute(a,S),d.sub(u),p.sub(u),g.sub(f),_.sub(f);const w=1/(g.x*_.y-_.x*g.y);isFinite(w)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(w),m.copy(p).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(w),l[U].add(x),l[y].add(x),l[S].add(x),c[U].add(m),c[y].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,y=b.length;U<y;++U){const S=b[U],w=S.start,z=S.count;for(let O=w,W=w+z;O<W;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const A=new P,E=new P,F=new P,C=new P;function R(U){F.fromBufferAttribute(r,U),C.copy(F);const y=l[U];A.copy(y),A.sub(F.multiplyScalar(F.dot(y))).normalize(),E.crossVectors(C,y);const w=E.dot(c[U])<0?-1:1;o.setXYZW(U,A.x,A.y,A.z,w)}for(let U=0,y=b.length;U<y;++U){const S=b[U],w=S.start,z=S.count;for(let O=w,W=w+z;O<W;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P,p=new P;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),l.add(d),c.add(d),u.add(d),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,p=l.normalized,f=new u.constructor(c.length*d);let g=0,_=0;for(let x=0,m=c.length;x<m;x++){l.isInterleavedBufferAttribute?g=c[x]*l.data.stride+l.offset:g=c[x]*d;for(let h=0;h<d;h++)f[_++]=u[g++]}return new fn(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,n);t.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const c=[],u=a[l];for(let d=0,p=u.length;d<p;d++){const f=u[d],g=e(f,n);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let p=0,f=u.length;p<f;p++){const g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],p=a[u];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new ft,Jn=new po,Or=new Ms,nl=new P,Br=new P,zr=new P,Hr=new P,Js=new P,Gr=new P,il=new P,Vr=new P;class ee extends Ct{constructor(e=new Vt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Gr.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=l[c],p=a[c];d!==0&&(Js.fromBufferAttribute(p,e),o?Gr.addScaledVector(Js,d):Gr.addScaledVector(Js.sub(t),d))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(a),Jn.copy(e.ray).recast(e.near),!(Or.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Or,nl)===null||Jn.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(a).invert(),Jn.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,f=a.groups,g=a.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],b=Math.max(m.start,g.start),A=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=b,F=A;E<F;E+=3){const C=l.getX(E),R=l.getX(E+1),U=l.getX(E+2);r=kr(this,h,e,n,u,d,p,C,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const b=l.getX(m),A=l.getX(m+1),E=l.getX(m+2);r=kr(this,o,e,n,u,d,p,b,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],b=Math.max(m.start,g.start),A=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let E=b,F=A;E<F;E+=3){const C=E,R=E+1,U=E+2;r=kr(this,h,e,n,u,d,p,C,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const b=m,A=m+1,E=m+2;r=kr(this,o,e,n,u,d,p,b,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fu(i,e,t,n,r,a,o,l){let c;if(e.side===Ot?c=n.intersectTriangle(o,a,r,!0,l):c=n.intersectTriangle(r,a,o,e.side===Kn,l),c===null)return null;Vr.copy(l),Vr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Vr);return u<t.near||u>t.far?null:{distance:u,point:Vr.clone(),object:i}}function kr(i,e,t,n,r,a,o,l,c,u){i.getVertexPosition(l,Br),i.getVertexPosition(c,zr),i.getVertexPosition(u,Hr);const d=Fu(i,e,t,n,Br,zr,Hr,il);if(d){const p=new P;cn.getBarycoord(il,Br,zr,Hr,p),r&&(d.uv=cn.getInterpolatedAttribute(r,l,c,u,p,new Je)),a&&(d.uv1=cn.getInterpolatedAttribute(a,l,c,u,p,new Je)),o&&(d.normal=cn.getInterpolatedAttribute(o,l,c,u,p,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new P,materialIndex:0};cn.getNormal(Br,zr,Hr,f.normal),d.face=f,d.barycoord=p}return d}class Ie extends Vt{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],u=[],d=[],p=[];let f=0,g=0;_("z","y","x",-1,-1,n,t,e,o,a,0),_("z","y","x",1,-1,n,t,-e,o,a,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function _(x,m,h,b,A,E,F,C,R,U,y){const S=E/R,w=F/U,z=E/2,O=F/2,W=C/2,q=R+1,X=U+1;let J=0,k=0;const oe=new P;for(let fe=0;fe<X;fe++){const ye=fe*w-O;for(let He=0;He<q;He++){const rt=He*S-z;oe[x]=rt*b,oe[m]=ye*A,oe[h]=W,u.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[h]=C>0?1:-1,d.push(oe.x,oe.y,oe.z),p.push(He/R),p.push(1-fe/U),J+=1}}for(let fe=0;fe<U;fe++)for(let ye=0;ye<R;ye++){const He=f+ye+q*fe,rt=f+ye+q*(fe+1),K=f+(ye+1)+q*(fe+1),ie=f+(ye+1)+q*fe;c.push(He,rt,ie),c.push(rt,K,ie),k+=6}l.addGroup(g,k,y),g+=k,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Zi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Bu={clone:Zi,merge:Nt};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends tr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new P,rl=new Je,sl=new Je;class Qt extends hc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Di=1;class Gu extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Pi,Di,e,t);r.layers=this.layers,this.add(r);const a=new Qt(Pi,Di,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Pi,Di,e,t);o.layers=this.layers,this.add(o);const l=new Qt(Pi,Di,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Pi,Di,e,t);c.layers=this.layers,this.add(c);const u=new Qt(Pi,Di,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,l,c]=t;for(const u of t)this.remove(u);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,c,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,f,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class dc extends Bt{constructor(e,t,n,r,a,o,l,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,r,a,o,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vu extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ie(5,5,5),a=new In({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Xn});a.uniforms.tEquirect.value=t;const o=new ee(r,a),l=t.minFilter;return t.minFilter===hi&&(t.minFilter=_n),new Gu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Qs=new P,ku=new P,Wu=new Oe;class ni{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qs.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wu.getNormalMatrix(e),r=this.coplanarPoint(Qs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Ms,Wr=new P;class go{constructor(e=new ni,t=new ni,n=new ni,r=new ni,a=new ni,o=new ni){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],f=r[7],g=r[8],_=r[9],x=r[10],m=r[11],h=r[12],b=r[13],A=r[14],E=r[15];if(n[0].setComponents(c-a,f-u,m-g,E-h).normalize(),n[1].setComponents(c+a,f+u,m+g,E+h).normalize(),n[2].setComponents(c+o,f+d,m+_,E+b).normalize(),n[3].setComponents(c-o,f-d,m-_,E-b).normalize(),n[4].setComponents(c-l,f-p,m-x,E-A).normalize(),t===Pn)n[5].setComponents(c+l,f+p,m+x,E+A).normalize();else if(t===ds)n[5].setComponents(l,p,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fc(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Xu(i){const e=new WeakMap;function t(l,c){const u=l.array,d=l.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,c,u){const d=c.array,p=c.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,d);else{p.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<p.length;g++){const _=p[f],x=p[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,p[f]=x)}p.length=f+1;for(let g=0,_=p.length;g<_;g++){const x=p[g];i.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:a,update:o}}class nr extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,d=c+1,p=e/l,f=t/c,g=[],_=[],x=[],m=[];for(let h=0;h<d;h++){const b=h*f-o;for(let A=0;A<u;A++){const E=A*p-a;_.push(E,-b,0),x.push(0,0,1),m.push(A/l),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<l;b++){const A=b+u*h,E=b+u*(h+1),F=b+1+u*(h+1),C=b+1+u*h;g.push(A,E,C),g.push(E,F,C)}this.setIndex(g),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
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
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
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
#endif`,th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sh=`#ifdef USE_IRIDESCENCE
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
#endif`,ah=`#ifdef USE_BUMPMAP
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mh=`#define PI 3.141592653589793
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
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_h=`vec3 transformedNormal = objectNormal;
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
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Th=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ph=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
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
}`,Uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oh=`uniform bool receiveShadow;
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
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
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
#endif`,Wh=`struct PhysicalMaterial {
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
}`,Xh=`
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
#endif`,qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,cf=`#define LAMBERT
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
}`,uf=`#define MATCAP
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
}`,hf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,ff=`#define NORMAL
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
}`,pf=`#define PHONG
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
}`,mf=`#define PHONG
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
}`,gf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,vf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,yf=`uniform vec3 color;
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
}`,Tf=`uniform float rotation;
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
}`,wf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:qu,alphahash_pars_fragment:Yu,alphamap_fragment:Ku,alphamap_pars_fragment:Zu,alphatest_fragment:$u,alphatest_pars_fragment:ju,aomap_fragment:Ju,aomap_pars_fragment:Qu,batching_pars_vertex:eh,batching_vertex:th,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:rh,iridescence_fragment:sh,bumpmap_pars_fragment:ah,clipping_planes_fragment:oh,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:uh,color_fragment:hh,color_pars_fragment:dh,color_pars_vertex:fh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:gh,defaultnormal_vertex:_h,displacementmap_pars_vertex:xh,displacementmap_vertex:vh,emissivemap_fragment:Mh,emissivemap_pars_fragment:Sh,colorspace_fragment:Eh,colorspace_pars_fragment:yh,envmap_fragment:Th,envmap_common_pars_fragment:wh,envmap_pars_fragment:bh,envmap_pars_vertex:Ah,envmap_physical_pars_fragment:Bh,envmap_vertex:Rh,fog_vertex:Ch,fog_pars_vertex:Ph,fog_fragment:Dh,fog_pars_fragment:Lh,gradientmap_pars_fragment:Ih,lightmap_pars_fragment:Uh,lights_lambert_fragment:Nh,lights_lambert_pars_fragment:Fh,lights_pars_begin:Oh,lights_toon_fragment:zh,lights_toon_pars_fragment:Hh,lights_phong_fragment:Gh,lights_phong_pars_fragment:Vh,lights_physical_fragment:kh,lights_physical_pars_fragment:Wh,lights_fragment_begin:Xh,lights_fragment_maps:qh,lights_fragment_end:Yh,logdepthbuf_fragment:Kh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:$h,logdepthbuf_vertex:jh,map_fragment:Jh,map_pars_fragment:Qh,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:rd,morphcolor_vertex:sd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:hd,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,opaque_fragment:vd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:yd,dithering_pars_fragment:Td,roughnessmap_fragment:wd,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Rd,shadowmap_vertex:Cd,shadowmask_pars_fragment:Pd,skinbase_vertex:Dd,skinning_pars_vertex:Ld,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:Hd,uv_pars_fragment:Gd,uv_pars_vertex:Vd,uv_vertex:kd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Kd,cube_vert:Zd,cube_frag:$d,depth_vert:jd,depth_frag:Jd,distanceRGBA_vert:Qd,distanceRGBA_frag:ef,equirect_vert:tf,equirect_frag:nf,linedashed_vert:rf,linedashed_frag:sf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:cf,meshmatcap_vert:uf,meshmatcap_frag:hf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:_f,meshtoon_vert:xf,meshtoon_frag:vf,points_vert:Mf,points_frag:Sf,shadow_vert:Ef,shadow_frag:yf,sprite_vert:Tf,sprite_frag:wf},re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},gn={basic:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Nt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Nt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Nt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Nt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Nt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Nt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Nt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Nt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Nt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Nt([re.lights,re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Nt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Xr={r:0,b:0,g:0},ei=new en,bf=new ft;function Af(i,e,t,n,r,a,o){const l=new We(0);let c=a===!0?0:1,u,d,p=null,f=0,g=null;function _(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function x(b){let A=!1;const E=_(b);E===null?h(l,c):E&&E.isColor&&(h(E,1),A=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,A){const E=_(A);E&&(E.isCubeTexture||E.mapping===xs)?(d===void 0&&(d=new ee(new Ie(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Zi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ei.copy(A.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bf.makeRotationFromEuler(ei)),d.material.toneMapped=$e.getTransfer(E.colorSpace)!==it,(p!==E||f!==E.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,f=E.version,g=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ee(new nr(2,2),new In({name:"BackgroundMaterial",uniforms:Zi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=$e.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,p=E,f=E.version,g=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function h(b,A){b.getRGB(Xr,uc(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,A,o)}return{getClearColor:function(){return l},setClearColor:function(b,A=1){l.set(b),c=A,h(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(l,c)},render:x,addToRenderList:m}}function Rf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,o=!1;function l(S,w,z,O,W){let q=!1;const X=p(O,z,w);a!==X&&(a=X,u(a.object)),q=g(S,O,z,W),q&&_(S,O,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(S,w,z,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function p(S,w,z){const O=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let q=W[w.id];q===void 0&&(q={},W[w.id]=q);let X=q[O];return X===void 0&&(X=f(c()),q[O]=X),X}function f(S){const w=[],z=[],O=[];for(let W=0;W<t;W++)w[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function g(S,w,z,O){const W=a.attributes,q=w.attributes;let X=0;const J=z.getAttributes();for(const k in J)if(J[k].location>=0){const fe=W[k];let ye=q[k];if(ye===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),fe===void 0||fe.attribute!==ye||ye&&fe.data!==ye.data)return!0;X++}return a.attributesNum!==X||a.index!==O}function _(S,w,z,O){const W={},q=w.attributes;let X=0;const J=z.getAttributes();for(const k in J)if(J[k].location>=0){let fe=q[k];fe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));const ye={};ye.attribute=fe,fe&&fe.data&&(ye.data=fe.data),W[k]=ye,X++}a.attributes=W,a.attributesNum=X,a.index=O}function x(){const S=a.newAttributes;for(let w=0,z=S.length;w<z;w++)S[w]=0}function m(S){h(S,0)}function h(S,w){const z=a.newAttributes,O=a.enabledAttributes,W=a.attributeDivisors;z[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==w&&(i.vertexAttribDivisor(S,w),W[S]=w)}function b(){const S=a.newAttributes,w=a.enabledAttributes;for(let z=0,O=w.length;z<O;z++)w[z]!==S[z]&&(i.disableVertexAttribArray(z),w[z]=0)}function A(S,w,z,O,W,q,X){X===!0?i.vertexAttribIPointer(S,w,z,W,q):i.vertexAttribPointer(S,w,z,O,W,q)}function E(S,w,z,O){x();const W=O.attributes,q=z.getAttributes(),X=w.defaultAttributeValues;for(const J in q){const k=q[J];if(k.location>=0){let oe=W[J];if(oe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const fe=oe.normalized,ye=oe.itemSize,He=e.get(oe);if(He===void 0)continue;const rt=He.buffer,K=He.type,ie=He.bytesPerElement,Me=K===i.INT||K===i.UNSIGNED_INT||oe.gpuType===oo;if(oe.isInterleavedBufferAttribute){const le=oe.data,Ce=le.stride,Ue=oe.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<k.locationSize;Ge++)h(k.location+Ge,le.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<k.locationSize;Ge++)m(k.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ge=0;Ge<k.locationSize;Ge++)A(k.location+Ge,ye/k.locationSize,K,fe,Ce*ie,(Ue+ye/k.locationSize*Ge)*ie,Me)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)h(k.location+le,oe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<k.locationSize;le++)m(k.location+le);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let le=0;le<k.locationSize;le++)A(k.location+le,ye/k.locationSize,K,fe,ye*ie,ye/k.locationSize*le*ie,Me)}}else if(X!==void 0){const fe=X[J];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(k.location,fe);break;case 3:i.vertexAttrib3fv(k.location,fe);break;case 4:i.vertexAttrib4fv(k.location,fe);break;default:i.vertexAttrib1fv(k.location,fe)}}}}b()}function F(){U();for(const S in n){const w=n[S];for(const z in w){const O=w[z];for(const W in O)d(O[W].object),delete O[W];delete w[z]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const z in w){const O=w[z];for(const W in O)d(O[W].object),delete O[W];delete w[z]}delete n[S.id]}function R(S){for(const w in n){const z=n[w];if(z[S.id]===void 0)continue;const O=z[S.id];for(const W in O)d(O[W].object),delete O[W];delete z[S.id]}}function U(){y(),o=!0,a!==r&&(a=r,u(a.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:U,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Cf(i,e,t){let n;function r(u){n=u}function a(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function o(u,d,p){p!==0&&(i.drawArraysInstanced(n,u,d,p),t.update(d,n,p))}function l(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];t.update(g,n,1)}function c(u,d,p,f){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)o(u[_],d[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,d,0,f,0,p);let _=0;for(let x=0;x<p;x++)_+=d[x]*f[x];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Pf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const U=R===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!U)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:F,maxSamples:C}}function Df(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new ni,l=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||n!==0||r;return r=f,n=p.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,g){const _=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,h=i.get(p);if(!r||_===null||_.length===0||a&&!m)a?d(null):u();else{const b=a?0:n,A=b*4;let E=h.clippingState||null;c.value=E,E=d(_,f,A,g);for(let F=0;F!==A;++F)E[F]=t[F];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,g,_){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const h=g+x*4,b=f.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,E=g;A!==x;++A,E+=4)o.copy(p[A]).applyMatrix4(b,l),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lf(i){let e=new WeakMap;function t(o,l){return l===ya?o.mapping=Xi:l===Ta&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===ya||l===Ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Vu(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class pc extends hc{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,al=[.125,.215,.35,.446,.526,.582],si=20,ea=new pc,ol=new We;let ta=null,na=0,ia=0,ra=!1;const ii=(1+Math.sqrt(5))/2,Li=1/ii,ll=[new P(-ii,Li,0),new P(ii,Li,0),new P(-Li,0,ii),new P(Li,0,ii),new P(0,ii,-Li),new P(0,ii,Li),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=ra,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Er,format:un,colorSpace:Ji,depthBuffer:!1},r=ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(a)),this._blurMaterial=Uf(a,e,t)}return r}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,r){const l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(ol),d.toneMapping=qn,d.autoClear=!1;const g=new Pt({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new ee(new Ie,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(ol),x=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(l.up.set(0,c[h],0),l.lookAt(u[h],0,0)):b===1?(l.up.set(0,0,c[h]),l.lookAt(0,u[h],0)):(l.up.set(0,c[h],0),l.lookAt(0,0,u[h]));const A=this._cubeSize;qr(r,b*A,h>2?A:0,A,A),d.setRenderTarget(r),x&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=ll[(r-a-1)%ll.length];this._blur(e,a-1,a,o,l)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ee(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*si-1),x=a/_,m=isFinite(a)?1+Math.floor(d*x):si;m>si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const h=[];let b=0;for(let R=0;R<si;++R){const U=R/x,y=Math.exp(-U*U/2);h.push(y),R===0?b+=y:R<m&&(b+=2*y)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const E=this._sizeLods[r],F=3*E*(r>A-Ui?r-A+Ui:0),C=4*(this._cubeSize-E);qr(t,F,C,3*E,2*E),c.setRenderTarget(t),c.render(p,ea)}}function If(i){const e=[],t=[],n=[];let r=i;const a=i-Ui+1+al.length;for(let o=0;o<a;o++){const l=Math.pow(2,r);t.push(l);let c=1/l;o>i-Ui?c=al[o-i+Ui-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,_=6,x=3,m=2,h=1,b=new Float32Array(x*_*g),A=new Float32Array(m*_*g),E=new Float32Array(h*_*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,U=C>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(y,x*_*C),A.set(f,m*_*C);const S=[C,C,C,C,C,C];E.set(S,h*_*C)}const F=new Vt;F.setAttribute("position",new fn(b,x)),F.setAttribute("uv",new fn(A,m)),F.setAttribute("faceIndex",new fn(E,h)),e.push(F),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ul(i,e,t){const n=new pi(i,e,t);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Uf(i,e,t){const n=new Float32Array(si),r=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hl(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function Nf(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===ya||c===Ta,d=c===Xi||c===qi;if(u||d){let p=e.get(l);const f=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return t===null&&(t=new cl(i)),p=u?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const g=l.image;return u&&g&&g.height>0||d&&g&&r(g)?(t===null&&(t=new cl(i)),p=u?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",a),p.texture):null}}}return l}function r(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function a(l){const c=l.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ff(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Of(i,e,t,n){const r={},a=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],i.ARRAY_BUFFER)}}function u(p){const f=[],g=p.index,_=p.attributes.position;let x=0;if(g!==null){const b=g.array;x=g.version;for(let A=0,E=b.length;A<E;A+=3){const F=b[A+0],C=b[A+1],R=b[A+2];f.push(F,C,C,R,R,F)}}else if(_!==void 0){const b=_.array;x=_.version;for(let A=0,E=b.length/3-1;A<E;A+=3){const F=A+0,C=A+1,R=A+2;f.push(F,C,C,R,R,F)}}else return;const m=new(rc(f)?cc:lc)(f,1);m.version=x;const h=a.get(p);h&&e.remove(h),a.set(p,m)}function d(p){const f=a.get(p);if(f){const g=p.index;g!==null&&f.version<g.version&&u(p)}else u(p);return a.get(p)}return{get:l,update:c,getWireframeAttribute:d}}function Bf(i,e,t){let n;function r(f){n=f}let a,o;function l(f){a=f.type,o=f.bytesPerElement}function c(f,g){i.drawElements(n,g,a,f*o),t.update(g,n,1)}function u(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,a,f*o,_),t.update(g,n,_))}function d(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,f,0,_);let m=0;for(let h=0;h<_;h++)m+=g[h];t.update(m,n,1)}function p(f,g,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,g[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,a,f,0,x,0,_);let h=0;for(let b=0;b<_;b++)h+=g[b]*x[b];t.update(h,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function zf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hf(i,e,t){const n=new WeakMap,r=new _t;function a(o,l,c){const u=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(l);if(f===void 0||f.count!==p){let S=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",S)};var g=S;f!==void 0&&f.texture.dispose();const _=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],A=l.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let F=l.attributes.position.count*E,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*C*4*p),U=new ac(R,F,C,p);U.type=Cn,U.needsUpdate=!0;const y=E*4;for(let w=0;w<p;w++){const z=h[w],O=b[w],W=A[w],q=F*C*4*w;for(let X=0;X<z.count;X++){const J=X*y;_===!0&&(r.fromBufferAttribute(z,X),R[q+J+0]=r.x,R[q+J+1]=r.y,R[q+J+2]=r.z,R[q+J+3]=0),x===!0&&(r.fromBufferAttribute(O,X),R[q+J+4]=r.x,R[q+J+5]=r.y,R[q+J+6]=r.z,R[q+J+7]=0),m===!0&&(r.fromBufferAttribute(W,X),R[q+J+8]=r.x,R[q+J+9]=r.y,R[q+J+10]=r.z,R[q+J+11]=W.itemSize===4?r.w:1)}}f={count:p,texture:U,size:new Je(F,C)},n.set(l,f),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Gf(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,p=e.get(c,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}class mc extends Bt{constructor(e,t,n,r,a,o,l,c,u,d=zi){if(d!==zi&&d!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===zi&&(n=fi),n===void 0&&d===Ki&&(n=Yi),super(null,r,a,o,l,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gc=new Bt,fl=new mc(1,1),_c=new ac,xc=new bu,vc=new dc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),xl=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=pl[r];if(a===void 0&&(a=new Float32Array(r),pl[r]=a),e!==0){n.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(a,l)}return a}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ss(i,e){let t=ml[e];t===void 0&&(t=new Int32Array(e),ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),bt(t,n)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),bt(t,n)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),bt(t,n)}}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=ic,a=fl):a=gc,t.setTexture2D(e||a,r)}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xc,r)}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vc,r)}function ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_c,r)}function op(i){switch(i){case 5126:return Vf;case 35664:return kf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Kf;case 5124:case 35670:return Zf;case 35667:case 35671:return $f;case 35668:case 35672:return jf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(i,e){i.uniform1fv(this.addr,e)}function cp(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function up(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function hp(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function dp(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fp(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pp(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mp(i,e){i.uniform1iv(this.addr,e)}function gp(i,e){i.uniform2iv(this.addr,e)}function _p(i,e){i.uniform3iv(this.addr,e)}function xp(i,e){i.uniform4iv(this.addr,e)}function vp(i,e){i.uniform1uiv(this.addr,e)}function Mp(i,e){i.uniform2uiv(this.addr,e)}function Sp(i,e){i.uniform3uiv(this.addr,e)}function Ep(i,e){i.uniform4uiv(this.addr,e)}function yp(i,e,t){const n=this.cache,r=e.length,a=Ss(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gc,a[o])}function Tp(i,e,t){const n=this.cache,r=e.length,a=Ss(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xc,a[o])}function wp(i,e,t){const n=this.cache,r=e.length,a=Ss(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vc,a[o])}function bp(i,e,t){const n=this.cache,r=e.length,a=Ss(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),bt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_c,a[o])}function Ap(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return up;case 35666:return hp;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return Mp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return bp}}class Rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=op(t.type)}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ap(t.type)}}class Pp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function vl(i,e){i.seq.push(e),i.map[e.id]=e}function Dp(i,e,t){const n=i.name,r=n.length;for(sa.lastIndex=0;;){const a=sa.exec(n),o=sa.lastIndex;let l=a[1];const c=a[2]==="]",u=a[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){vl(t,u===void 0?new Rp(l,i,e):new Cp(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new Pp(l),vl(t,p)),t=p}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Dp(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ml(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lp=37297;let Ip=0;function Up(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Sl=new Oe;function Np(i){$e._getMatrix(Sl,$e.workingColorSpace,i);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case vs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function El(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Up(i.getShaderSource(e),o)}else return r}function Fp(i,e){const t=Np(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Op(i,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="Cineon";break;case Wl:t="ACESFilmic";break;case ru:t="AgX";break;case su:t="Neutral";break;case iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new P;function Bp(){$e.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Hp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function gr(i){return i!==""}function yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Vp,Wp)}const kp=new Map;function Wp(i,e){let t=ze[e];if(t===void 0){const n=kp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(i){return i.replace(Xp,qp)}function qp(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function bl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Kp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jc:e="ENVMAP_BLENDING_MIX";break;case Qc:e="ENVMAP_BLENDING_ADD";break}return e}function jp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jp(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Yp(t),u=Kp(t),d=Zp(t),p=$p(t),f=jp(t),g=zp(t),_=Hp(a),x=r.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),h.length>0&&(h+=`
`)):(m=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),h=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?ze.tonemapping_pars_fragment:"",t.toneMapping!==qn?Op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Fp("linearToOutputTexel",t.outputColorSpace),Bp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=eo(o),o=yl(o,t),o=Tl(o,t),l=eo(l),l=yl(l,t),l=Tl(l,t),o=wl(o),l=wl(l),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=b+m+o,E=b+h+l,F=Ml(r,r.VERTEX_SHADER,A),C=Ml(r,r.FRAGMENT_SHADER,E);r.attachShader(x,F),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(w){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(F).trim(),W=r.getShaderInfoLog(C).trim();let q=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,F,C);else{const J=El(r,F,"vertex"),k=El(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+J+`
`+k)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(X=!1);X&&(w.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(F),r.deleteShader(C),U=new rs(r,x),y=Gp(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Lp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}let Qp=0;class em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tm(e),t.set(e,n)),n}}class tm{constructor(e){this.id=Qp++,this.code=e,this.usedTimes=0}}function nm(i,e,t,n,r,a,o){const l=new mo,c=new em,u=new Set,d=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return u.add(y),y===0?"uv":`uv${y}`}function m(y,S,w,z,O){const W=z.fog,q=O.geometry,X=y.isMeshStandardMaterial?z.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),k=J&&J.mapping===xs?J.image.height:null,oe=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ye=fe!==void 0?fe.length:0;let He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let rt,K,ie,Me;if(oe){const nt=gn[oe];rt=nt.vertexShader,K=nt.fragmentShader}else rt=y.vertexShader,K=y.fragmentShader,c.update(y),ie=c.getVertexShaderID(y),Me=c.getFragmentShaderID(y);const le=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,mt=!!y.map,Ke=!!y.matcap,xt=!!J,N=!!y.aoMap,Kt=!!y.lightMap,Xe=!!y.bumpMap,qe=!!y.normalMap,be=!!y.displacementMap,lt=!!y.emissiveMap,we=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,B=y.clearcoat>0,Z=y.dispersion>0,Q=y.iridescence>0,Y=y.sheen>0,Se=y.transmission>0,ce=v&&!!y.anisotropyMap,pe=B&&!!y.clearcoatMap,Ze=B&&!!y.clearcoatNormalMap,te=B&&!!y.clearcoatRoughnessMap,me=Q&&!!y.iridescenceMap,Re=Q&&!!y.iridescenceThicknessMap,De=Y&&!!y.sheenColorMap,ge=Y&&!!y.sheenRoughnessMap,Ye=!!y.specularMap,Be=!!y.specularColorMap,at=!!y.specularIntensityMap,D=Se&&!!y.transmissionMap,se=Se&&!!y.thicknessMap,V=!!y.gradientMap,$=!!y.alphaMap,de=y.alphaTest>0,ue=!!y.alphaHash,Ne=!!y.extensions;let gt=qn;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Dt={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:K,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:Ke,envMap:xt,envMapMode:xt&&J.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Kt,bumpMap:Xe,normalMap:qe,displacementMap:f&&be,emissiveMap:lt,normalMapObjectSpace:qe&&y.normalMapType===cu,normalMapTangentSpace:qe&&y.normalMapType===nc,metalnessMap:we,roughnessMap:T,anisotropy:v,anisotropyMap:ce,clearcoat:B,clearcoatMap:pe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:te,dispersion:Z,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:Ye,specularColorMap:Be,specularIntensityMap:at,transmission:Se,transmissionMap:D,thicknessMap:se,gradientMap:V,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:ue,combine:y.combine,mapUv:mt&&x(y.map.channel),aoMapUv:N&&x(y.aoMap.channel),lightMapUv:Kt&&x(y.lightMap.channel),bumpMapUv:Xe&&x(y.bumpMap.channel),normalMapUv:qe&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:lt&&x(y.emissiveMap.channel),metalnessMapUv:we&&x(y.metalnessMap.channel),roughnessMapUv:T&&x(y.roughnessMap.channel),anisotropyMapUv:ce&&x(y.anisotropyMap.channel),clearcoatMapUv:pe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(y.sheenRoughnessMap.channel),specularMapUv:Ye&&x(y.specularMap.channel),specularColorMapUv:Be&&x(y.specularColorMap.channel),specularIntensityMapUv:at&&x(y.specularIntensityMap.channel),transmissionMapUv:D&&x(y.transmissionMap.channel),thicknessMapUv:se&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(mt||$),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:lt&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ft,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)S.push(w),S.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(S,y),A(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function A(y,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.decodeVideoTextureEmissive&&l.enable(20),S.alphaToCoverage&&l.enable(21),y.push(l.mask)}function E(y){const S=_[y.type];let w;if(S){const z=gn[S];w=Bu.clone(z.uniforms)}else w=y.uniforms;return w}function F(y,S){let w;for(let z=0,O=d.length;z<O;z++){const W=d[z];if(W.cacheKey===S){w=W,++w.usedTimes;break}}return w===void 0&&(w=new Jp(i,S,y,a),d.push(w)),w}function C(y){if(--y.usedTimes===0){const S=d.indexOf(y);d[S]=d[d.length-1],d.pop(),y.destroy()}}function R(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:F,releaseProgram:C,releaseShaderCache:R,programs:d,dispose:U}}function im(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Al(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(p,f,g,_,x,m){let h=i[e];return h===void 0?(h={id:p.id,object:p,geometry:f,material:g,groupOrder:_,renderOrder:p.renderOrder,z:x,group:m},i[e]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=g,h.groupOrder=_,h.renderOrder=p.renderOrder,h.z=x,h.group=m),e++,h}function l(p,f,g,_,x,m){const h=o(p,f,g,_,x,m);g.transmission>0?n.push(h):g.transparent===!0?r.push(h):t.push(h)}function c(p,f,g,_,x,m){const h=o(p,f,g,_,x,m);g.transmission>0?n.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function u(p,f){t.length>1&&t.sort(p||rm),n.length>1&&n.sort(f||Al),r.length>1&&r.sort(f||Al)}function d(){for(let p=e,f=i.length;p<f;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:d,sort:u}}function sm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Rl,i.set(n,[o])):r>=a.length?(o=new Rl,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lm=0;function cm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function um(i){const e=new am,t=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const r=new P,a=new ft,o=new ft;function l(u){let d=0,p=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,_=0,x=0,m=0,h=0,b=0,A=0,E=0,F=0,C=0,R=0;u.sort(cm);for(let y=0,S=u.length;y<S;y++){const w=u[y],z=w.color,O=w.intensity,W=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=z.r*O,p+=z.g*O,f+=z.b*O;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],O);R++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,k=t.get(w);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=w.shadow.matrix,b++}n.directional[g]=X,g++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[x]=X;const J=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,J.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[x]=J.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=q,E++}x++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=X,m++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const J=w.shadow,k=t.get(w);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=w.shadow.matrix,A++}n.point[_]=X,_++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(O),X.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[h]=X,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==E||U.numSpotMaps!==F||U.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=g,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=E,U.numSpotMaps=F,U.numLightProbes=R,n.version=lm++)}function c(u,d){let p=0,f=0,g=0,_=0,x=0;const m=d.matrixWorldInverse;for(let h=0,b=u.length;h<b;h++){const A=u[h];if(A.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(A.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(A.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:l,setupView:c,state:n}}function Cl(i){const e=new um(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(){e.setup(t)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hm(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Cl(i),e.set(r,[l])):a>=o.length?(l=new Cl(i),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class dm extends tr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fm extends tr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function gm(i,e,t){let n=new go;const r=new Je,a=new Je,o=new _t,l=new dm({depthPacking:lu}),c=new fm,u={},d=t.maxTextureSize,p={[Kn]:Ot,[Ot]:Kn,[Ft]:Ft},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let h=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=h!==An&&this.type===An,W=h===An&&this.type!==An;for(let q=0,X=C.length;q<X;q++){const J=C[q],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const oe=k.getFrameExtents();if(r.multiply(oe),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/oe.x),r.x=a.x*oe.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/oe.y),r.y=a.y*oe.y,k.mapSize.y=a.y)),k.map===null||O===!0||W===!0){const ye=this.type!==An?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new pi(r.x,r.y,ye),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const fe=k.getViewportCount();for(let ye=0;ye<fe;ye++){const He=k.getViewport(ye);o.set(a.x*He.x,a.y*He.y,a.x*He.z,a.y*He.w),z.viewport(o),k.updateMatrices(J,ye),n=k.getFrustum(),E(R,U,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===An&&b(k,U),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,w)};function b(C,R){const U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,f,x,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,g,x,null)}function A(C,R,U,y){let S=null;const w=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)S=w;else if(S=U.isPointLight===!0?c:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=S.uuid,O=R.uuid;let W=u[z];W===void 0&&(W={},u[z]=W);let q=W[O];q===void 0&&(q=S.clone(),W[O]=q,R.addEventListener("dispose",F)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,y===An?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:p[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=U}return S}function E(C,R,U,y,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const O=e.update(C),W=C.material;if(Array.isArray(W)){const q=O.groups;for(let X=0,J=q.length;X<J;X++){const k=q[X],oe=W[k.materialIndex];if(oe&&oe.visible){const fe=A(C,oe,y,S);C.onBeforeShadow(i,C,R,U,O,fe,k),i.renderBufferDirect(U,null,O,fe,C,k),C.onAfterShadow(i,C,R,U,O,fe,k)}}}else if(W.visible){const q=A(C,W,y,S);C.onBeforeShadow(i,C,R,U,O,q,null),i.renderBufferDirect(U,null,O,q,C,null),C.onAfterShadow(i,C,R,U,O,q,null)}}const z=C.children;for(let O=0,W=z.length;O<W;O++)E(z[O],R,U,y,S)}function F(C){C.target.removeEventListener("dispose",F);for(const U in u){const y=u[U],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const _m={[ga]:_a,[xa]:Sa,[va]:Ea,[Wi]:Ma,[_a]:ga,[Sa]:xa,[Ea]:va,[Ma]:Wi};function xm(i,e){function t(){let D=!1;const se=new _t;let V=null;const $=new _t(0,0,0,0);return{setMask:function(de){V!==de&&!D&&(i.colorMask(de,de,de,de),V=de)},setLocked:function(de){D=de},setClear:function(de,ue,Ne,gt,Dt){Dt===!0&&(de*=gt,ue*=gt,Ne*=gt),se.set(de,ue,Ne,gt),$.equals(se)===!1&&(i.clearColor(de,ue,Ne,gt),$.copy(se))},reset:function(){D=!1,V=null,$.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,V=null,$=null,de=null;return{setReversed:function(ue){if(se!==ue){const Ne=e.get("EXT_clip_control");se?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const gt=de;de=null,this.setClear(gt)}se=ue},getReversed:function(){return se},setTest:function(ue){ue?le(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!D&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(se&&(ue=_m[ue]),$!==ue){switch(ue){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(se&&(ue=1-ue),i.clearDepth(ue),de=ue)},reset:function(){D=!1,V=null,$=null,de=null,se=!1}}}function r(){let D=!1,se=null,V=null,$=null,de=null,ue=null,Ne=null,gt=null,Dt=null;return{setTest:function(nt){D||(nt?le(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!D&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,tn,Mn){(V!==nt||$!==tn||de!==Mn)&&(i.stencilFunc(nt,tn,Mn),V=nt,$=tn,de=Mn)},setOp:function(nt,tn,Mn){(ue!==nt||Ne!==tn||gt!==Mn)&&(i.stencilOp(nt,tn,Mn),ue=nt,Ne=tn,gt=Mn)},setLocked:function(nt){D=nt},setClear:function(nt){Dt!==nt&&(i.clearStencil(nt),Dt=nt)},reset:function(){D=!1,se=null,V=null,$=null,de=null,ue=null,Ne=null,gt=null,Dt=null}}}const a=new t,o=new n,l=new r,c=new WeakMap,u=new WeakMap;let d={},p={},f=new WeakMap,g=[],_=null,x=!1,m=null,h=null,b=null,A=null,E=null,F=null,C=null,R=new We(0,0,0),U=0,y=!1,S=null,w=null,z=null,O=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=J>=2);let oe=null,fe={};const ye=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),rt=new _t().fromArray(ye),K=new _t().fromArray(He);function ie(D,se,V,$){const de=new Uint8Array(4),ue=i.createTexture();i.bindTexture(D,ue),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<V;Ne++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(se+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ue}const Me={};Me[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),le(i.DEPTH_TEST),o.setFunc(Wi),Xe(!1),qe(Io),le(i.CULL_FACE),N(Xn);function le(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Ce(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ue(D,se){return p[D]!==se?(i.bindFramebuffer(D,se),p[D]=se,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ge(D,se){let V=g,$=!1;if(D){V=f.get(se),V===void 0&&(V=[],f.set(se,V));const de=D.textures;if(V.length!==de.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ne=de.length;ue<Ne;ue++)V[ue]=i.COLOR_ATTACHMENT0+ue;V.length=de.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function mt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Ke={[ri]:i.FUNC_ADD,[Nc]:i.FUNC_SUBTRACT,[Fc]:i.FUNC_REVERSE_SUBTRACT};Ke[Oc]=i.MIN,Ke[Bc]=i.MAX;const xt={[zc]:i.ZERO,[Hc]:i.ONE,[Gc]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Yc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Vc]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[qc]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Kc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[jc]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,se,V,$,de,ue,Ne,gt,Dt,nt){if(D===Xn){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(le(i.BLEND),x=!0),D!==Uc){if(D!==m||nt!==y){if((h!==ri||E!==ri)&&(i.blendEquation(i.FUNC_ADD),h=ri,E=ri),nt)switch(D){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,F=null,C=null,R.set(0,0,0),U=0,m=D,y=nt}return}de=de||se,ue=ue||V,Ne=Ne||$,(se!==h||de!==E)&&(i.blendEquationSeparate(Ke[se],Ke[de]),h=se,E=de),(V!==b||$!==A||ue!==F||Ne!==C)&&(i.blendFuncSeparate(xt[V],xt[$],xt[ue],xt[Ne]),b=V,A=$,F=ue,C=Ne),(gt.equals(R)===!1||Dt!==U)&&(i.blendColor(gt.r,gt.g,gt.b,Dt),R.copy(gt),U=Dt),m=D,y=!1}function Kt(D,se){D.side===Ft?Ce(i.CULL_FACE):le(i.CULL_FACE);let V=D.side===Ot;se&&(V=!V),Xe(V),D.blending===Bi&&D.transparent===!1?N(Xn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);const $=D.stencilWrite;l.setTest($),$&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function qe(D){D!==Lc?(le(i.CULL_FACE),D!==w&&(D===Io?i.cullFace(i.BACK):D===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),w=D}function be(D){D!==z&&(X&&i.lineWidth(D),z=D)}function lt(D,se,V){D?(le(i.POLYGON_OFFSET_FILL),(O!==se||W!==V)&&(i.polygonOffset(se,V),O=se,W=V)):Ce(i.POLYGON_OFFSET_FILL)}function we(D){D?le(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+q-1),oe!==D&&(i.activeTexture(D),oe=D)}function v(D,se,V){V===void 0&&(oe===null?V=i.TEXTURE0+q-1:V=oe);let $=fe[V];$===void 0&&($={type:void 0,texture:void 0},fe[V]=$),($.type!==D||$.texture!==se)&&(oe!==V&&(i.activeTexture(V),oe=V),i.bindTexture(D,se||Me[D]),$.type=D,$.texture=se)}function B(){const D=fe[oe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){rt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function ge(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Ye(D,se){let V=u.get(se);V===void 0&&(V=new WeakMap,u.set(se,V));let $=V.get(D);$===void 0&&($=i.getUniformBlockIndex(se,D.name),V.set(D,$))}function Be(D,se){const $=u.get(se).get(D);c.get(se)!==$&&(i.uniformBlockBinding(se,$,D.__bindingPointIndex),c.set(se,$))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},oe=null,fe={},p={},f=new WeakMap,g=[],_=null,x=!1,m=null,h=null,b=null,A=null,E=null,F=null,C=null,R=new We(0,0,0),U=0,y=!1,S=null,w=null,z=null,O=null,W=null,rt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:le,disable:Ce,bindFramebuffer:Ue,drawBuffers:Ge,useProgram:mt,setBlending:N,setMaterial:Kt,setFlipSided:Xe,setCullFace:qe,setLineWidth:be,setPolygonOffset:lt,setScissorTest:we,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:me,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:te,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:De,viewport:ge,reset:at}}function Pl(i,e,t,n){const r=vm(n);switch(t){case Zl:return i*e;case jl:return i*e;case Jl:return i*e*2;case Ql:return i*e/r.components*r.byteLength;case uo:return i*e/r.components*r.byteLength;case ec:return i*e*2/r.components*r.byteLength;case ho:return i*e*2/r.components*r.byteLength;case $l:return i*e*3/r.components*r.byteLength;case un:return i*e*4/r.components*r.byteLength;case fo:return i*e*4/r.components*r.byteLength;case Qr:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case is:case Ka:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ja:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vm(i){switch(i){case Ln:case ql:return{byteLength:1,components:1};case Sr:case Yl:case Er:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case fi:case oo:case Cn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mm(i,e,t,n,r,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,d=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return g?new OffscreenCanvas(T,v):fs("canvas")}function x(T,v,B){let Z=1;const Q=we(T);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(Z*Q.width),Se=Math.floor(Z*Q.height);p===void 0&&(p=_(Y,Se));const ce=v?_(Y,Se):p;return ce.width=Y,ce.height=Se,ce.getContext("2d").drawImage(T,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Se+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,v,B,Z,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=v;if(v===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){const Se=Q?vs:$e.getTransfer(Z);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Se===it?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(T,v){let B;return T?v===null||v===fi||v===Yi?B=i.DEPTH24_STENCIL8:v===Cn?B=i.DEPTH32F_STENCIL8:v===Sr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===Yi?B=i.DEPTH_COMPONENT24:v===Cn?B=i.DEPTH_COMPONENT32F:v===Sr&&(B=i.DEPTH_COMPONENT16),B}function F(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==_n?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&d.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),S(v)}function U(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const Q=Z[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(T),Object.keys(Z).length===0&&f.delete(B)}n.remove(T)}function y(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,Z=f.get(B);delete Z[v.__cacheKey],o.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let Q=0;Q<v.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const Y=n.get(B[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(T)}let w=0;function z(){w=0}function O(){const T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const B=n.get(T);if(T.isVideoTexture&&be(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,T,v);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function X(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function J(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function k(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ie(B,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const oe={[wa]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},fe={[dn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ye={[uu]:i.NEVER,[gu]:i.ALWAYS,[hu]:i.LESS,[ic]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function He(T,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===_n||v.magFilter===Ds||v.magFilter===Ar||v.magFilter===hi||v.minFilter===_n||v.minFilter===Ds||v.minFilter===Ar||v.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==Ar&&v.minFilter!==hi||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function rt(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const Z=v.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const Y=W(v);if(Y!==T.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[Y].usedTimes++;const Se=Q[T.__cacheKey];Se!==void 0&&(Q[T.__cacheKey].usedTimes--,Se.usedTimes===0&&y(v)),T.__cacheKey=Y,T.__webglTexture=Q[Y].texture}return B}function K(T,v,B){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=rt(T,v),Y=v.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const Se=n.get(Y);if(Y.version!==Se.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const ce=$e.getPrimaries($e.workingColorSpace),pe=v.colorSpace===Wn?null:$e.getPrimaries(v.colorSpace),Ze=v.colorSpace===Wn||ce===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=x(v.image,!1,r.maxTextureSize);te=lt(v,te);const me=a.convert(v.format,v.colorSpace),Re=a.convert(v.type);let De=A(v.internalFormat,me,Re,v.colorSpace,v.isVideoTexture);He(Z,v);let ge;const Ye=v.mipmaps,Be=v.isVideoTexture!==!0,at=Se.__version===void 0||Q===!0,D=Y.dataReady,se=F(v,te);if(v.isDepthTexture)De=E(v.format===Ki,v.type),at&&(Be?t.texStorage2D(i.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,me,Re,null));else if(v.isDataTexture)if(Ye.length>0){Be&&at&&t.texStorage2D(i.TEXTURE_2D,se,De,Ye[0].width,Ye[0].height);for(let V=0,$=Ye.length;V<$;V++)ge=Ye[V],Be?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(i.TEXTURE_2D,V,De,ge.width,ge.height,0,me,Re,ge.data);v.generateMipmaps=!1}else Be?(at&&t.texStorage2D(i.TEXTURE_2D,se,De,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,me,Re,te.data)):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,me,Re,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,De,Ye[0].width,Ye[0].height,te.depth);for(let V=0,$=Ye.length;V<$;V++)if(ge=Ye[V],v.format!==un)if(me!==null)if(Be){if(D)if(v.layerUpdates.size>0){const de=Pl(ge.width,ge.height,v.format,v.type);for(const ue of v.layerUpdates){const Ne=ge.data.subarray(ue*de/ge.data.BYTES_PER_ELEMENT,(ue+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ue,ge.width,ge.height,1,me,Ne)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,De,ge.width,ge.height,te.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,te.depth,me,Re,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,De,ge.width,ge.height,te.depth,0,me,Re,ge.data)}else{Be&&at&&t.texStorage2D(i.TEXTURE_2D,se,De,Ye[0].width,Ye[0].height);for(let V=0,$=Ye.length;V<$;V++)ge=Ye[V],v.format!==un?me!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,V,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(i.TEXTURE_2D,V,De,ge.width,ge.height,0,me,Re,ge.data)}else if(v.isDataArrayTexture)if(Be){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,De,te.width,te.height,te.depth),D)if(v.layerUpdates.size>0){const V=Pl(te.width,te.height,v.format,v.type);for(const $ of v.layerUpdates){const de=te.data.subarray($*V/te.data.BYTES_PER_ELEMENT,($+1)*V/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,me,Re,de)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Re,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,me,Re,te.data);else if(v.isData3DTexture)Be?(at&&t.texStorage3D(i.TEXTURE_3D,se,De,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Re,te.data)):t.texImage3D(i.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,me,Re,te.data);else if(v.isFramebufferTexture){if(at)if(Be)t.texStorage2D(i.TEXTURE_2D,se,De,te.width,te.height);else{let V=te.width,$=te.height;for(let de=0;de<se;de++)t.texImage2D(i.TEXTURE_2D,de,De,V,$,0,me,Re,null),V>>=1,$>>=1}}else if(Ye.length>0){if(Be&&at){const V=we(Ye[0]);t.texStorage2D(i.TEXTURE_2D,se,De,V.width,V.height)}for(let V=0,$=Ye.length;V<$;V++)ge=Ye[V],Be?D&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me,Re,ge):t.texImage2D(i.TEXTURE_2D,V,De,me,Re,ge);v.generateMipmaps=!1}else if(Be){if(at){const V=we(te);t.texStorage2D(i.TEXTURE_2D,se,De,V.width,V.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Re,te)}else t.texImage2D(i.TEXTURE_2D,0,De,me,Re,te);m(v)&&h(Z),Se.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ie(T,v,B){if(v.image.length!==6)return;const Z=rt(T,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const Y=n.get(Q);if(Q.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const Se=$e.getPrimaries($e.workingColorSpace),ce=v.colorSpace===Wn?null:$e.getPrimaries(v.colorSpace),pe=v.colorSpace===Wn||Se===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ze=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!Ze&&!te?me[$]=x(v.image[$],!0,r.maxCubemapSize):me[$]=te?v.image[$].image:v.image[$],me[$]=lt(v,me[$]);const Re=me[0],De=a.convert(v.format,v.colorSpace),ge=a.convert(v.type),Ye=A(v.internalFormat,De,ge,v.colorSpace),Be=v.isVideoTexture!==!0,at=Y.__version===void 0||Z===!0,D=Q.dataReady;let se=F(v,Re);He(i.TEXTURE_CUBE_MAP,v);let V;if(Ze){Be&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,Re.width,Re.height);for(let $=0;$<6;$++){V=me[$].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];v.format!==un?De!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ue.width,ue.height,De,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,ue.width,ue.height,De,ge,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,Ye,ue.width,ue.height,0,De,ge,ue.data)}}}else{if(V=v.mipmaps,Be&&at){V.length>0&&se++;const $=we(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,$.width,$.height)}for(let $=0;$<6;$++)if(te){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,De,ge,me[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ye,me[$].width,me[$].height,0,De,ge,me[$].data);for(let de=0;de<V.length;de++){const Ne=V[de].image[$].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Ne.width,Ne.height,De,ge,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Ye,Ne.width,Ne.height,0,De,ge,Ne.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ge,me[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ye,De,ge,me[$]);for(let de=0;de<V.length;de++){const ue=V[de];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,De,ge,ue.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,Ye,De,ge,ue.image[$])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Me(T,v,B,Z,Q,Y){const Se=a.convert(B.format,B.colorSpace),ce=a.convert(B.type),pe=A(B.internalFormat,Se,ce,B.colorSpace),Ze=n.get(v),te=n.get(B);if(te.__renderTarget=v,!Ze.__hasExternalTextures){const me=Math.max(1,v.width>>Y),Re=Math.max(1,v.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,pe,me,Re,v.depth,0,Se,ce,null):t.texImage2D(Q,Y,pe,me,Re,0,Se,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),qe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,te.__webglTexture,0,Xe(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Z=v.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=E(v.stencilBuffer,Q),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Xe(v);qe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const Z=v.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],Se=a.convert(Y.format,Y.colorSpace),ce=a.convert(Y.type),pe=A(Y.internalFormat,Se,ce,Y.colorSpace),Ze=Xe(v);B&&qe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,pe,v.width,v.height):qe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const Q=Z.__webglTexture,Y=Xe(v);if(v.depthTexture.format===zi)qe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ki)qe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),le(v.__webglDepthbuffer[Z],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),le(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(T,v,B){const Z=n.get(T);v!==void 0&&Me(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ue(T)}function mt(T){const v=T.texture,B=n.get(T),Z=n.get(v);T.addEventListener("dispose",R);const Q=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let pe=0;pe<v.mipmaps.length;pe++)B.__webglFramebuffer[ce][pe]=i.createFramebuffer()}else B.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)B.__webglFramebuffer[ce]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ce=0,pe=Q.length;ce<pe;ce++){const Ze=n.get(Q[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&qe(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const pe=Q[ce];B.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ze=a.convert(pe.format,pe.colorSpace),te=a.convert(pe.type),me=A(pe.internalFormat,Ze,te,pe.colorSpace,T.isXRRenderTarget===!0),Re=Xe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),le(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),He(i.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(B.__webglFramebuffer[ce][pe],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else Me(B.__webglFramebuffer[ce],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,pe=Q.length;ce<pe;ce++){const Ze=Q[ce],te=n.get(Ze);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),He(i.TEXTURE_2D,Ze),Me(B.__webglFramebuffer,T,Ze,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Ze)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),He(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Me(B.__webglFramebuffer[pe],T,v,i.COLOR_ATTACHMENT0,ce,pe);else Me(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ce,0);m(v)&&h(ce),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Ke(T){const v=T.textures;for(let B=0,Z=v.length;B<Z;B++){const Q=v[B];if(m(Q)){const Y=b(T),Se=n.get(Q).__webglTexture;t.bindTexture(Y,Se),h(Y),t.unbindTexture()}}}const xt=[],N=[];function Kt(T){if(T.samples>0){if(qe(T)===!1){const v=T.textures,B=T.width,Z=T.height;let Q=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),ce=v.length>1;if(ce)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ze=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,i.NEAREST),c===!0&&(xt.length=0,N.length=0,xt.push(i.COLOR_ATTACHMENT0+pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xt.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ze=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xe(T){return Math.min(r.maxSamples,T.samples)}function qe(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(T){const v=o.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function lt(T,v){const B=T.colorSpace,Z=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ji&&B!==Wn&&($e.getTransfer(B)===it?(Z!==un||Q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ge,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function Sm(i,e){function t(n,r=Wn){let a;const o=$e.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Er)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===$l)return i.RGB;if(n===un)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Qr||n===es||n===ts||n===ns)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===La||n===Ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Da||n===La)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ia)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===ka||n===Wa||n===Xa||n===qa||n===Ya)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ua)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===is||n===Ka||n===Za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===is)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===$a||n===ja||n===Ja)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===is)return a.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Em extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
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

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Bt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:Tm,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends Qi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,l="local-floor",c=1,u=null,d=null,p=null,f=null,g=null,_=null;const x=new bm,m=t.getContextAttributes();let h=null,b=null;const A=[],E=[],F=new Je;let C=null;const R=new Qt;R.viewport=new _t;const U=new Qt;U.viewport=new _t;const y=[R,U],S=new Em;let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=A[K];return ie===void 0&&(ie=new aa,A[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=A[K];return ie===void 0&&(ie=new aa,A[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=A[K];return ie===void 0&&(ie=new aa,A[K]=ie),ie.getHandSpace()};function O(K){const ie=E.indexOf(K.inputSource);if(ie===-1)return;const Me=A[ie];Me!==void 0&&(Me.update(K.inputSource,K.frame,u||o),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let K=0;K<A.length;K++){const ie=E[K];ie!==null&&(E[K]=null,A[K].disconnect(ie))}w=null,z=null,x.reset(),e.setRenderTarget(h),g=null,f=null,p=null,r=null,b=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new pi(g.framebufferWidth,g.framebufferHeight,{format:un,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ki:zi,Me=m.stencil?Yi:fi);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new pi(f.textureWidth,f.textureHeight,{format:un,type:Ln,depthTexture:new mc(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let ie=0;ie<K.removed.length;ie++){const Me=K.removed[ie],le=E.indexOf(Me);le>=0&&(E[le]=null,A[le].disconnect(Me))}for(let ie=0;ie<K.added.length;ie++){const Me=K.added[ie];let le=E.indexOf(Me);if(le===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=E.length){E.push(Me),le=Ue;break}else if(E[Ue]===null){E[Ue]=Me,le=Ue;break}if(le===-1)break}const Ce=A[le];Ce&&Ce.connect(Me)}}const X=new P,J=new P;function k(K,ie,Me){X.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const le=X.distanceTo(J),Ce=ie.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),mt=Ce[14]/(Ce[10]+1),Ke=(Ce[9]+1)/Ce[5],xt=(Ce[9]-1)/Ce[5],N=(Ce[8]-1)/Ce[0],Kt=(Ue[8]+1)/Ue[0],Xe=Ge*N,qe=Ge*Kt,be=le/(-N+Kt),lt=be*-N;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const we=Ge+be,T=mt+be,v=Xe-lt,B=qe+(le-lt),Z=Ke*mt/T*we,Q=xt*mt/T*we;K.projectionMatrix.makePerspective(v,B,Z,Q,we,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,Me=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),S.near=U.near=R.near=ie,S.far=U.far=R.far=Me,(w!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far),R.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,S.layers.mask=R.layers.mask|U.layers.mask;const le=K.parent,Ce=S.cameras;oe(S,le);for(let Ue=0;Ue<Ce.length;Ue++)oe(Ce[Ue],le);Ce.length===2?k(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),fe(K,S,le)};function fe(K,ie,Me){Me===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ye=null;function He(K,ie){if(d=ie.getViewerPose(u||o),_=ie,d!==null){const Me=d.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let le=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ge=Me[Ue];let mt=null;if(g!==null)mt=g.getViewport(Ge);else{const xt=p.getViewSubImage(f,Ge);mt=xt.viewport,Ue===0&&(e.setRenderTargetTextures(b,xt.colorTexture,f.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(b))}let Ke=y[Ue];Ke===void 0&&(Ke=new Qt,Ke.layers.enable(Ue),Ke.viewport=new _t,y[Ue]=Ke),Ke.matrix.fromArray(Ge.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ge.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(mt.x,mt.y,mt.width,mt.height),Ue===0&&(S.matrix.copy(Ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ke)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=p.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let Me=0;Me<A.length;Me++){const le=E[Me],Ce=A[Me];le!==null&&Ce!==void 0&&Ce.update(le,ie,u||o)}ye&&ye(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const rt=new fc;rt.setAnimationLoop(He),this.setAnimationLoop=function(K){ye=K},this.dispose=function(){}}}const ti=new en,Rm=new ft;function Cm(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,uc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,A,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&g(m,h,E)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&l(m,h)):h.isPointsMaterial?c(m,h,b,A):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ot&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ot&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),A=b.envMap,E=b.envMapRotation;A&&(m.envMap.value=A,ti.copy(E),ti.x*=-1,ti.y*=-1,ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(ti)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function l(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=A*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Pm(i,e,t,n){let r={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,A){const E=A.program;n.uniformBlockBinding(b,E)}function u(b,A){let E=r[b.id];E===void 0&&(_(b),E=d(b),r[b.id]=E,b.addEventListener("dispose",m));const F=A.program;n.updateUBOMapping(b,F);const C=e.render.frame;a[b.id]!==C&&(f(b),a[b.id]=C)}function d(b){const A=p();b.__bindingPointIndex=A;const E=i.createBuffer(),F=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function p(){for(let b=0;b<l;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=r[b.id],E=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,R=E.length;C<R;C++){const U=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,S=U.length;y<S;y++){const w=U[y];if(g(w,C,y,F)===!0){const z=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let q=0;q<O.length;q++){const X=O[q],J=x(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+W,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,A,E,F){const C=b.value,R=A+"_"+E;if(F[R]===void 0)return typeof C=="number"||typeof C=="boolean"?F[R]=C:F[R]=C.clone(),!0;{const U=F[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return F[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(b){const A=b.uniforms;let E=0;const F=16;for(let R=0,U=A.length;R<U;R++){const y=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,w=y.length;S<w;S++){const z=y[S],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=O.length;W<q;W++){const X=O[W],J=x(X),k=E%F,oe=k%J.boundary,fe=k+oe;E+=oe,fe!==0&&F-fe<J.storage&&(E+=F-fe),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=J.storage}}}const C=E%F;return C>0&&(E+=F-C),b.__size=E,b.__cache={},this}function x(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function h(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},a={}}return{bind:c,update:u,dispose:h}}class Dm{constructor(e={}){const{canvas:t=xu(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=qn,this.toneMappingExposure=1;const E=this;let F=!1,C=0,R=0,U=null,y=-1,S=null;const w=new _t,z=new _t;let O=null;const W=new We(0);let q=0,X=t.width,J=t.height,k=1,oe=null,fe=null;const ye=new _t(0,0,X,J),He=new _t(0,0,X,J);let rt=!1;const K=new go;let ie=!1,Me=!1;const le=new ft,Ce=new ft,Ue=new P,Ge=new _t,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function xt(){return U===null?k:1}let N=n;function Kt(M,L){return t.getContext(M,L)}try{const M={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ao}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),N===null){const L="webgl2";if(N=Kt(L,M),N===null)throw Kt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xe,qe,be,lt,we,T,v,B,Z,Q,Y,Se,ce,pe,Ze,te,me,Re,De,ge,Ye,Be,at,D;function se(){Xe=new Ff(N),Xe.init(),Be=new Sm(N,Xe),qe=new Pf(N,Xe,e,Be),be=new xm(N,Xe),qe.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),lt=new zf(N),we=new im,T=new Mm(N,Xe,be,we,qe,Be,lt),v=new Lf(E),B=new Nf(E),Z=new Xu(N),at=new Rf(N,Z),Q=new Of(N,Z,lt,at),Y=new Gf(N,Q,Z,lt),De=new Hf(N,qe,T),te=new Df(we),Se=new nm(E,v,B,Xe,qe,at,te),ce=new Cm(E,we),pe=new sm,Ze=new hm(Xe),Re=new Af(E,v,B,be,Y,g,c),me=new gm(E,Y,qe),D=new Pm(N,lt,qe,be),ge=new Cf(N,Xe,lt),Ye=new Bf(N,Xe,lt),lt.programs=Se.programs,E.capabilities=qe,E.extensions=Xe,E.properties=we,E.renderLists=pe,E.shadowMap=me,E.state=be,E.info=lt}se();const V=new Am(E,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(X,J,!1))},this.getSize=function(M){return M.set(X,J)},this.setSize=function(M,L,H=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,J=L,t.width=Math.floor(M*k),t.height=Math.floor(L*k),H===!0&&(t.style.width=M+"px",t.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(X*k,J*k).floor()},this.setDrawingBufferSize=function(M,L,H){X=M,J=L,k=H,t.width=Math.floor(M*H),t.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,L,H,G){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,L,H,G),be.viewport(w.copy(ye).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,L,H,G){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,L,H,G),be.scissor(z.copy(He).multiplyScalar(k).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){be.setScissorTest(rt=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,L=!0,H=!0){let G=0;if(M){let I=!1;if(U!==null){const ne=U.texture.format;I=ne===fo||ne===ho||ne===uo}if(I){const ne=U.texture.type,he=ne===Ln||ne===fi||ne===Sr||ne===Yi||ne===lo||ne===co,_e=Re.getClearColor(),xe=Re.getClearAlpha(),Le=_e.r,Fe=_e.g,ve=_e.b;he?(_[0]=Le,_[1]=Fe,_[2]=ve,_[3]=xe,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Le,x[1]=Fe,x[2]=ve,x[3]=xe,N.clearBufferiv(N.COLOR,0,x))}else G|=N.COLOR_BUFFER_BIT}L&&(G|=N.DEPTH_BUFFER_BIT),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),Ze.dispose(),we.dispose(),v.dispose(),B.dispose(),Y.dispose(),at.dispose(),D.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",wo),V.removeEventListener("sessionend",bo),Zn.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const M=lt.autoReset,L=me.enabled,H=me.autoUpdate,G=me.needsUpdate,I=me.type;se(),lt.autoReset=M,me.enabled=L,me.autoUpdate=H,me.needsUpdate=G,me.type=I}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ne(M){const L=M.target;L.removeEventListener("dispose",Ne),gt(L)}function gt(M){Dt(M),we.remove(M)}function Dt(M){const L=we.get(M).programs;L!==void 0&&(L.forEach(function(H){Se.releaseProgram(H)}),M.isShaderMaterial&&Se.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,G,I,ne){L===null&&(L=mt);const he=I.isMesh&&I.matrixWorld.determinant()<0,_e=Cc(M,L,H,G,I);be.setMaterial(G,he);let xe=H.index,Le=1;if(G.wireframe===!0){if(xe=Q.getWireframeAttribute(H),xe===void 0)return;Le=2}const Fe=H.drawRange,ve=H.attributes.position;let je=Fe.start*Le,ot=(Fe.start+Fe.count)*Le;ne!==null&&(je=Math.max(je,ne.start*Le),ot=Math.min(ot,(ne.start+ne.count)*Le)),xe!==null?(je=Math.max(je,0),ot=Math.min(ot,xe.count)):ve!=null&&(je=Math.max(je,0),ot=Math.min(ot,ve.count));const ct=ot-je;if(ct<0||ct===1/0)return;at.setup(I,G,_e,H,xe);let zt,Qe=ge;if(xe!==null&&(zt=Z.get(xe),Qe=Ye,Qe.setIndex(zt)),I.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*xt()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(I.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),be.setLineWidth(Ee*xt()),I.isLineSegments?Qe.setMode(N.LINES):I.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else I.isPoints?Qe.setMode(N.POINTS):I.isSprite&&Qe.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,Sn=I._multiDrawCounts,et=I._multiDrawCount,nn=xe?Z.get(xe).bytesPerElement:1,xi=we.get(G).currentProgram.getUniforms();for(let kt=0;kt<et;kt++)xi.setValue(N,"_gl_DrawID",kt),Qe.render(Ee[kt]/nn,Sn[kt])}else if(I.isInstancedMesh)Qe.renderInstances(je,ct,I.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Sn=Math.min(H.instanceCount,Ee);Qe.renderInstances(je,ct,Sn)}else Qe.render(je,ct)};function nt(M,L,H){M.transparent===!0&&M.side===Ft&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,br(M,L,H),M.side=Kn,M.needsUpdate=!0,br(M,L,H),M.side=Ft):br(M,L,H)}this.compile=function(M,L,H=null){H===null&&(H=M),h=Ze.get(H),h.init(L),A.push(h),H.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),M!==H&&M.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const G=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ne=I.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const _e=ne[he];nt(_e,H,I),G.add(_e)}else nt(ne,H,I),G.add(ne)}),A.pop(),h=null,G},this.compileAsync=function(M,L,H=null){const G=this.compile(M,L,H);return new Promise(I=>{function ne(){if(G.forEach(function(he){we.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){I(M);return}setTimeout(ne,10)}Xe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tn=null;function Mn(M){tn&&tn(M)}function wo(){Zn.stop()}function bo(){Zn.start()}const Zn=new fc;Zn.setAnimationLoop(Mn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(M){tn=M,V.setAnimationLoop(M),M===null?Zn.stop():Zn.start()},V.addEventListener("sessionstart",wo),V.addEventListener("sessionend",bo),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,L,U),h=Ze.get(M,A.length),h.init(L),A.push(h),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(Ce),Me=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Me),m=pe.get(M,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&Ps(ne,L,-1/0,E.sortObjects)}Ps(M,L,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(oe,fe),Ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ke&&Re.addToRenderList(m,M),this.info.render.frame++,ie===!0&&te.beginShadows();const H=h.state.shadowsArray;me.render(H,M,L),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,I=m.transmissive;if(h.setupLights(),L.isArrayCamera){const ne=L.cameras;if(I.length>0)for(let he=0,_e=ne.length;he<_e;he++){const xe=ne[he];Ro(G,I,M,xe)}Ke&&Re.render(M);for(let he=0,_e=ne.length;he<_e;he++){const xe=ne[he];Ao(m,M,xe,xe.viewport)}}else I.length>0&&Ro(G,I,M,L),Ke&&Re.render(M),Ao(m,M,L);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(E,M,L),at.resetDefaultState(),y=-1,S=null,A.pop(),A.length>0?(h=A[A.length-1],ie===!0&&te.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ps(M,L,H,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){G&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);const he=Y.update(M),_e=M.material;_e.visible&&m.push(M,he,_e,H,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const he=Y.update(M),_e=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ge.copy(he.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(_e)){const xe=he.groups;for(let Le=0,Fe=xe.length;Le<Fe;Le++){const ve=xe[Le],je=_e[ve.materialIndex];je&&je.visible&&m.push(M,he,je,H,Ge.z,ve)}}else _e.visible&&m.push(M,he,_e,H,Ge.z,null)}}const ne=M.children;for(let he=0,_e=ne.length;he<_e;he++)Ps(ne[he],L,H,G)}function Ao(M,L,H,G){const I=M.opaque,ne=M.transmissive,he=M.transparent;h.setupLightsView(H),ie===!0&&te.setGlobalState(E.clippingPlanes,H),G&&be.viewport(w.copy(G)),I.length>0&&wr(I,L,H),ne.length>0&&wr(ne,L,H),he.length>0&&wr(he,L,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ro(M,L,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Er:Ln,minFilter:hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=h.state.transmissionRenderTarget[G.id],he=G.viewport||w;ne.setSize(he.z,he.w);const _e=E.getRenderTarget();E.setRenderTarget(ne),E.getClearColor(W),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Ke&&Re.render(H);const xe=E.toneMapping;E.toneMapping=qn;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),ie===!0&&te.setGlobalState(E.clippingPlanes,G),wr(M,H,G),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ve=0,je=L.length;ve<je;ve++){const ot=L[ve],ct=ot.object,zt=ot.geometry,Qe=ot.material,Ee=ot.group;if(Qe.side===Ft&&ct.layers.test(G.layers)){const Sn=Qe.side;Qe.side=Ot,Qe.needsUpdate=!0,Co(ct,H,G,zt,Qe,Ee),Qe.side=Sn,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne))}E.setRenderTarget(_e),E.setClearColor(W,q),Le!==void 0&&(G.viewport=Le),E.toneMapping=xe}function wr(M,L,H){const G=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ne=M.length;I<ne;I++){const he=M[I],_e=he.object,xe=he.geometry,Le=G===null?he.material:G,Fe=he.group;_e.layers.test(H.layers)&&Co(_e,L,H,xe,Le,Fe)}}function Co(M,L,H,G,I,ne){M.onBeforeRender(E,L,H,G,I,ne),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(E,L,H,G,M,ne),I.transparent===!0&&I.side===Ft&&I.forceSinglePass===!1?(I.side=Ot,I.needsUpdate=!0,E.renderBufferDirect(H,L,G,I,M,ne),I.side=Kn,I.needsUpdate=!0,E.renderBufferDirect(H,L,G,I,M,ne),I.side=Ft):E.renderBufferDirect(H,L,G,I,M,ne),M.onAfterRender(E,L,H,G,I,ne)}function br(M,L,H){L.isScene!==!0&&(L=mt);const G=we.get(M),I=h.state.lights,ne=h.state.shadowsArray,he=I.state.version,_e=Se.getParameters(M,I.state,ne,L,H),xe=Se.getProgramCacheKey(_e);let Le=G.programs;G.environment=M.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(M.isMeshStandardMaterial?B:v).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ne),Le=new Map,G.programs=Le);let Fe=Le.get(xe);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===he)return Do(M,_e),Fe}else _e.uniforms=Se.getUniforms(M),M.onBeforeCompile(_e,E),Fe=Se.acquireProgram(_e,xe),Le.set(xe,Fe),G.uniforms=_e.uniforms;const ve=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ve.clippingPlanes=te.uniform),Do(M,_e),G.needsLights=Dc(M),G.lightsStateVersion=he,G.needsLights&&(ve.ambientLightColor.value=I.state.ambient,ve.lightProbe.value=I.state.probe,ve.directionalLights.value=I.state.directional,ve.directionalLightShadows.value=I.state.directionalShadow,ve.spotLights.value=I.state.spot,ve.spotLightShadows.value=I.state.spotShadow,ve.rectAreaLights.value=I.state.rectArea,ve.ltc_1.value=I.state.rectAreaLTC1,ve.ltc_2.value=I.state.rectAreaLTC2,ve.pointLights.value=I.state.point,ve.pointLightShadows.value=I.state.pointShadow,ve.hemisphereLights.value=I.state.hemi,ve.directionalShadowMap.value=I.state.directionalShadowMap,ve.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ve.spotShadowMap.value=I.state.spotShadowMap,ve.spotLightMatrix.value=I.state.spotLightMatrix,ve.spotLightMap.value=I.state.spotLightMap,ve.pointShadowMap.value=I.state.pointShadowMap,ve.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function Po(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=rs.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Do(M,L){const H=we.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Cc(M,L,H,G,I){L.isScene!==!0&&(L=mt),T.resetTextureUnits();const ne=L.fog,he=G.isMeshStandardMaterial?L.environment:null,_e=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ji,xe=(G.isMeshStandardMaterial?B:v).get(G.envMap||he),Le=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ve=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let ct=qn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ct=E.toneMapping);const zt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=zt!==void 0?zt.length:0,Ee=we.get(G),Sn=h.state.lights;if(ie===!0&&(Me===!0||M!==S)){const Zt=M===S&&G.id===y;te.setState(G,M,Zt)}let et=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Sn.state.version||Ee.outputColorSpace!==_e||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==xe||G.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Le||Ee.vertexTangents!==Fe||Ee.morphTargets!==ve||Ee.morphNormals!==je||Ee.morphColors!==ot||Ee.toneMapping!==ct||Ee.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ee.__version=G.version);let nn=Ee.currentProgram;et===!0&&(nn=br(G,L,I));let xi=!1,kt=!1,ar=!1;const ut=nn.getUniforms(),mn=Ee.uniforms;if(be.useProgram(nn.program)&&(xi=!0,kt=!0,ar=!0),G.id!==y&&(y=G.id,kt=!0),xi||S!==M){be.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),Mu(le),Su(le),ut.setValue(N,"projectionMatrix",le)):ut.setValue(N,"projectionMatrix",M.projectionMatrix),ut.setValue(N,"viewMatrix",M.matrixWorldInverse);const Nn=ut.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,Ue.setFromMatrixPosition(M.matrixWorld)),qe.logarithmicDepthBuffer&&ut.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,kt=!0,ar=!0)}if(I.isSkinnedMesh){ut.setOptional(N,I,"bindMatrix"),ut.setOptional(N,I,"bindMatrixInverse");const Zt=I.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ut.setValue(N,"boneTexture",Zt.boneTexture,T))}I.isBatchedMesh&&(ut.setOptional(N,I,"batchingTexture"),ut.setValue(N,"batchingTexture",I._matricesTexture,T),ut.setOptional(N,I,"batchingIdTexture"),ut.setValue(N,"batchingIdTexture",I._indirectTexture,T),ut.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&ut.setValue(N,"batchingColorTexture",I._colorsTexture,T));const or=H.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&De.update(I,H,nn),(kt||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,ut.setValue(N,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mn.envMap.value=xe,mn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&L.environment!==null&&(mn.envMapIntensity.value=L.environmentIntensity),kt&&(ut.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&Pc(mn,ar),ne&&G.fog===!0&&ce.refreshFogUniforms(mn,ne),ce.refreshMaterialUniforms(mn,G,k,J,h.state.transmissionRenderTarget[M.id]),rs.upload(N,Po(Ee),mn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(rs.upload(N,Po(Ee),mn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(N,"center",I.center),ut.setValue(N,"modelViewMatrix",I.modelViewMatrix),ut.setValue(N,"normalMatrix",I.normalMatrix),ut.setValue(N,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let Nn=0,Fn=Zt.length;Nn<Fn;Nn++){const Lo=Zt[Nn];D.update(Lo,nn),D.bind(Lo,nn)}}return nn}function Pc(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Dc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,L,H){we.get(M.texture).__webglTexture=L,we.get(M.depthTexture).__webglTexture=H;const G=we.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const H=we.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){U=M,C=L,R=H;let G=!0,I=null,ne=!1,he=!1;if(M){const xe=we.get(M);if(xe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(xe.__hasExternalTextures)T.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ve=M.depthTexture;if(xe.__boundDepthTexture!==ve){if(ve!==null&&we.has(ve)&&(M.width!==ve.image.width||M.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const Fe=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?I=Fe[L][H]:I=Fe[L],ne=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?I=we.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?I=Fe[H]:I=Fe,w.copy(M.viewport),z.copy(M.scissor),O=M.scissorTest}else w.copy(ye).multiplyScalar(k).floor(),z.copy(He).multiplyScalar(k).floor(),O=rt;if(be.bindFramebuffer(N.FRAMEBUFFER,I)&&G&&be.drawBuffers(M,I),be.viewport(w),be.scissor(z),be.setScissorTest(O),ne){const xe=we.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,H)}else if(he){const xe=we.get(M.texture),Le=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,Le)}y=-1},this.readRenderTargetPixels=function(M,L,H,G,I,ne,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){be.bindFramebuffer(N.FRAMEBUFFER,_e);try{const xe=M.texture,Le=xe.format,Fe=xe.type;if(!qe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&H>=0&&H<=M.height-I&&N.readPixels(L,H,G,I,Be.convert(Le),Be.convert(Fe),ne)}finally{const xe=U!==null?we.get(U).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,L,H,G,I,ne,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const xe=M.texture,Le=xe.format,Fe=xe.type;if(!qe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-G&&H>=0&&H<=M.height-I){be.bindFramebuffer(N.FRAMEBUFFER,_e);const ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),N.readPixels(L,H,G,I,Be.convert(Le),Be.convert(Fe),0);const je=U!==null?we.get(U).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,je);const ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vu(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne),N.deleteBuffer(ve),N.deleteSync(ot),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,H=0){M.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-H),I=Math.floor(M.image.width*G),ne=Math.floor(M.image.height*G),he=L!==null?L.x:0,_e=L!==null?L.y:0;T.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,he,_e,I,ne),be.unbindTexture()},this.copyTextureToTexture=function(M,L,H=null,G=null,I=0){M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],L=arguments[2],I=arguments[3]||0,H=null);let ne,he,_e,xe,Le,Fe,ve,je,ot;const ct=M.isCompressedTexture?M.mipmaps[I]:M.image;H!==null?(ne=H.max.x-H.min.x,he=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,xe=H.min.x,Le=H.min.y,Fe=H.isBox3?H.min.z:0):(ne=ct.width,he=ct.height,_e=ct.depth||1,xe=0,Le=0,Fe=0),G!==null?(ve=G.x,je=G.y,ot=G.z):(ve=0,je=0,ot=0);const zt=Be.convert(L.format),Qe=Be.convert(L.type);let Ee;L.isData3DTexture?(T.setTexture3D(L,0),Ee=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),Ee=N.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Sn=N.getParameter(N.UNPACK_ROW_LENGTH),et=N.getParameter(N.UNPACK_IMAGE_HEIGHT),nn=N.getParameter(N.UNPACK_SKIP_PIXELS),xi=N.getParameter(N.UNPACK_SKIP_ROWS),kt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);const ar=M.isDataArrayTexture||M.isData3DTexture,ut=L.isDataArrayTexture||L.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const mn=we.get(M),or=we.get(L),Zt=we.get(mn.__renderTarget),Nn=we.get(or.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<_e;Fn++)ar&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(M).__webglTexture,I,Fe+Fn),M.isDepthTexture?(ut&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(L).__webglTexture,I,ot+Fn),N.blitFramebuffer(xe,Le,ne,he,ve,je,ne,he,N.DEPTH_BUFFER_BIT,N.NEAREST)):ut?N.copyTexSubImage3D(Ee,I,ve,je,ot+Fn,xe,Le,ne,he):N.copyTexSubImage2D(Ee,I,ve,je,ot+Fn,xe,Le,ne,he);be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ut?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Ee,I,ve,je,ot,ne,he,_e,zt,Qe,ct.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,I,ve,je,ot,ne,he,_e,zt,ct.data):N.texSubImage3D(Ee,I,ve,je,ot,ne,he,_e,zt,Qe,ct):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,ve,je,ne,he,zt,Qe,ct.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,ve,je,ct.width,ct.height,zt,ct.data):N.texSubImage2D(N.TEXTURE_2D,I,ve,je,ne,he,zt,Qe,ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,Sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),N.pixelStorei(N.UNPACK_SKIP_PIXELS,nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt),I===0&&L.generateMipmaps&&N.generateMipmap(Ee),be.unbindTexture()},this.copyTextureToTexture3D=function(M,L,H=null,G=null,I=0){return M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,M=arguments[2],L=arguments[3],I=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,L,H,G,I)},this.initRenderTarget=function(M){we.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,be.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Mc extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xo extends tr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ps=new P,ms=new P,Dl=new ft,fr=new po,Kr=new Ms,oa=new P,Ll=new P;class Lm extends Ct{constructor(e=new Vt,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)ps.fromBufferAttribute(t,r-1),ms.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ps.distanceTo(ms);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=a,e.ray.intersectsSphere(Kr)===!1)return;Dl.copy(r).invert(),fr.copy(e.ray).applyMatrix4(Dl);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=u){const h=d.getX(x),b=d.getX(x+1),A=Zr(this,e,fr,c,h,b);A&&t.push(A)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(g),h=Zr(this,e,fr,c,x,m);h&&t.push(h)}}else{const g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=u){const h=Zr(this,e,fr,c,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=Zr(this,e,fr,c,_-1,g);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Zr(i,e,t,n,r,a){const o=i.geometry.attributes.position;if(ps.fromBufferAttribute(o,r),ms.fromBufferAttribute(o,a),t.distanceSqToSegment(ps,ms,oa,Ll)>n)return;oa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oa);if(!(c<e.near||c>e.far))return{distance:c,point:Ll.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Il=new P,Ul=new P;class Sc extends Lm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Il.fromBufferAttribute(t,r),Ul.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Il.distanceTo(Ul);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Im extends Bt{constructor(e,t,n,r,a,o,l,c,u){super(e,t,n,r,a,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class st extends Vt{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),a=Math.floor(a);const d=[],p=[],f=[],g=[];let _=0;const x=[],m=n/2;let h=0;b(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(g,2));function b(){const E=new P,F=new P;let C=0;const R=(t-e)/n;for(let U=0;U<=a;U++){const y=[],S=U/a,w=S*(t-e)+e;for(let z=0;z<=r;z++){const O=z/r,W=O*c+l,q=Math.sin(W),X=Math.cos(W);F.x=w*q,F.y=-S*n+m,F.z=w*X,p.push(F.x,F.y,F.z),E.set(q,R,X).normalize(),f.push(E.x,E.y,E.z),g.push(O,1-S),y.push(_++)}x.push(y)}for(let U=0;U<r;U++)for(let y=0;y<a;y++){const S=x[y][U],w=x[y+1][U],z=x[y+1][U+1],O=x[y][U+1];(e>0||y!==0)&&(d.push(S,w,O),C+=3),(t>0||y!==a-1)&&(d.push(w,z,O),C+=3)}u.addGroup(h,C,0),h+=C}function A(E){const F=_,C=new Je,R=new P;let U=0;const y=E===!0?e:t,S=E===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,m*S,0),f.push(0,S,0),g.push(.5,.5),_++;const w=_;for(let z=0;z<=r;z++){const W=z/r*c+l,q=Math.cos(W),X=Math.sin(W);R.x=y*X,R.y=m*S,R.z=y*q,p.push(R.x,R.y,R.z),f.push(0,S,0),C.x=q*.5+.5,C.y=X*.5*S+.5,g.push(C.x,C.y),_++}for(let z=0;z<r;z++){const O=F+z,W=w+z;E===!0?d.push(W,W+1,O):d.push(W+1,W,O),U+=3}u.addGroup(h,U,E===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends st{constructor(e=1,t=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(0,e,t,n,r,a,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(e){return new xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gi extends Vt{constructor(e=.5,t=1,n=32,r=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const l=[],c=[],u=[],d=[];let p=e;const f=(t-e)/r,g=new P,_=new Je;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const h=a+m/n*o;g.x=p*Math.cos(h),g.y=p*Math.sin(h),c.push(g.x,g.y,g.z),u.push(0,0,1),_.x=(g.x/t+1)/2,_.y=(g.y/t+1)/2,d.push(_.x,_.y)}p+=f}for(let x=0;x<r;x++){const m=x*(n+1);for(let h=0;h<n;h++){const b=h+m,A=b,E=b+n+1,F=b+n+2,C=b+1;l.push(A,E,C),l.push(E,F,C)}}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hn extends Vt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let u=0;const d=[],p=new P,f=new P,g=[],_=[],x=[],m=[];for(let h=0;h<=n;h++){const b=[],A=h/n;let E=0;h===0&&o===0?E=.5/t:h===n&&c===Math.PI&&(E=-.5/t);for(let F=0;F<=t;F++){const C=F/t;p.x=-e*Math.cos(r+C*a)*Math.sin(o+A*l),p.y=e*Math.cos(o+A*l),p.z=e*Math.sin(r+C*a)*Math.sin(o+A*l),_.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(C+E,1-A),b.push(u++)}d.push(b)}for(let h=0;h<n;h++)for(let b=0;b<t;b++){const A=d[h][b+1],E=d[h][b],F=d[h+1][b],C=d[h+1][b+1];(h!==0||o>0)&&g.push(A,E,C),(h!==n-1||c<Math.PI)&&g.push(E,F,C)}this.setIndex(g),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends Vt{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],d=new P,p=new P,f=new P;for(let g=0;g<=n;g++)for(let _=0;_<=r;_++){const x=_/r*a,m=g/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(p,d).normalize(),c.push(f.x,f.y,f.z),u.push(_/r),u.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=r;_++){const x=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,h=(r+1)*(g-1)+_,b=(r+1)*g+_;o.push(x,m,b),o.push(m,h,b)}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Te extends tr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vo extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Um extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const la=new ft,Nl=new P,Fl=new P;class Nm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nl),Fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fl),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fm extends Nm{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ec extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yc extends vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Om{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return performance.now()}const Bl=new ft;class Bm{constructor(e,t,n=0,r=1/0){this.ray=new po(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(e,t=!0,n=[]){return to(e,this,n,t),n.sort(zl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)to(e[r],this,n,t);return n.sort(zl),n}}function zl(i,e){return i.distance-e.distance}function to(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let o=0,l=a.length;o<l;o++)to(a[o],e,t,!0)}}class zm extends Sc{constructor(e=10,t=16,n=8,r=64,a=4473924,o=8947848){a=new We(a),o=new We(o);const l=[],c=[];if(t>1)for(let p=0;p<t;p++){const f=p/t*(Math.PI*2),g=Math.sin(f)*e,_=Math.cos(f)*e;l.push(0,0,0),l.push(g,0,_);const x=p&1?a:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let p=0;p<n;p++){const f=p&1?a:o,g=e-e/n*p;for(let _=0;_<r;_++){let x=_/r*(Math.PI*2),m=Math.sin(x)*g,h=Math.cos(x)*g;l.push(m,0,h),c.push(f.r,f.g,f.b),x=(_+1)/r*(Math.PI*2),m=Math.sin(x)*g,h=Math.cos(x)*g,l.push(m,0,h),c.push(f.r,f.g,f.b)}}const u=new Vt;u.setAttribute("position",new pt(l,3)),u.setAttribute("color",new pt(c,3));const d=new xo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hm extends Sc{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new Vt;a.setIndex(new fn(n,1)),a.setAttribute("position",new pt(r,3)),super(a,new xo({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);window.PK=new Set;let gs=null;document.addEventListener("keydown",i=>{window.PK.add(i.code),["KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","KeyR","KeyF"].includes(i.code)&&i.preventDefault(),["Digit1","Digit2","Digit3","KeyQ"].includes(i.code)&&gs!==i.code&&(gs=i.code,i.code==="Digit1"&&xr(0),i.code==="Digit2"&&xr(1),i.code==="Digit3"&&xr(2),i.code==="KeyQ"&&xr((qt+1)%3))});document.addEventListener("keyup",i=>{window.PK.delete(i.code),gs===i.code&&(gs=null)});let Gi=!1,no=!1,tt=100,St=50,Vi=2,ki=0,io=0,kn=0,pr=!1,di=0,on=30,Rn=90,Ni=0,$r=0,Ii=!1,ys=!1,qt=0;const jt=[{name:"AK47",mag:30,reserve:90,dmgMin:25,dmgMax:40,fireRate:.1,reloadT:2.2,spread:.01,pellets:1},{name:"SG",mag:8,reserve:32,dmgMin:15,dmgMax:25,fireRate:.55,reloadT:2.5,spread:.07,pellets:8},{name:"AWP",mag:5,reserve:20,dmgMin:80,dmgMax:100,fireRate:1.2,reloadT:3,spread:.002,pellets:1}],ai=new en(0,0,0,"YXZ"),jr=.4,ro=.75,_i=[],oi=[],li=[],ci=[],ss=[],as=[],os=[],ls=[],vr=[],cs=[];let ca=3,ua=8,ha=20,_r=0;const Et=new Dm({antialias:!0});Et.setSize(innerWidth,innerHeight);Et.setPixelRatio(Math.min(devicePixelRatio,2));Et.shadowMap.enabled=!0;Et.shadowMap.type=Vl;Et.toneMapping=Wl;Et.toneMappingExposure=1.1;Et.autoClear=!1;document.body.appendChild(Et.domElement);const Ae=new Mc,Ts=new Mc,ke=new Qt(75,innerWidth/innerHeight,.1,200);ke.position.set(-40,.9,-32);const ln=new Bm;document.addEventListener("mousedown",i=>{i.button===0&&(ys=!0)});document.addEventListener("mouseup",i=>{i.button===0&&(ys=!1)});Et.domElement.addEventListener("click",()=>Et.domElement.requestPointerLock());document.addEventListener("pointerlockchange",()=>{Gi=document.pointerLockElement===Et.domElement,document.getElementById("info").classList.toggle("hidden",Gi),Gi&&(no=!0)});let Hl=0;document.addEventListener("mousemove",i=>{if(!Gi)return;const e=performance.now();if(!(e-Hl<8)){if(Hl=e,no){no=!1;return}ai.setFromQuaternion(ke.quaternion),ai.y-=i.movementX*.002,ai.x=Math.max(-1.3,Math.min(1.3,ai.x-i.movementY*.002)),ke.quaternion.setFromEuler(ai)}});document.getElementById("respawnBtn").addEventListener("click",()=>{tt=100,St=50,Vi=2,ki=0,io=0,_r=0,xr(0),document.getElementById("health").textContent="HP 100",document.getElementById("health").style.color="#0f0",document.getElementById("armor").textContent="🛡 50",document.getElementById("ammo").textContent=jt[qt].name+" "+jt[qt].mag+" / "+jt[qt].reserve,document.getElementById("kills").textContent="kills: 0";const i=[[-40,-32],[30,-25],[0,0],[-20,25]][Math.floor(Math.random()*4)];ke.position.set(i[0],.9,i[1]),ai.set(0,0,0,"YXZ"),ke.quaternion.setFromEuler(ai),kn=0,document.getElementById("deathScreen").classList.remove("show"),di=0});const Ut=(i,e=.7)=>new Te({color:i,roughness:e}),j={sand:Ut(13940849,.9),concrete:Ut(12560506,.6),wallA:Ut(13217920,.65),wallB:Ut(11573352,.65),building:Ut(14271894,.55),darkWall:Ut(8022602,.7),roof:Ut(9139029,.85),crate:Ut(9136404,.55),redCrate:Ut(8010282,.5),platform:Ut(10522736,.45),floorCT:Ut(11903088,.8),floorT:Ut(12557914,.8),floorMid:Ut(12888170,.8),floorLongA:Ut(12558432,.8),floorB:Ut(10193771,.8)},Yn=[];function ht(i){return Ae.add(i),Yn.push(i),i}function rr(i,e,t,n){const r=new ee(new Ie(i,e,t),n);return r.castShadow=!0,r.receiveShadow=!0,r}function ae(i,e,t,n,r,a,o){const l=rr(i,e,t,n);return l.position.set(r,a,o),ht(l)}function Tt(i,e,t,n,r,a){return ae(i,.15,e,t,n,r,a)}function Ve(i,e,t,n,r,a){const o=rr(i,e,i,a||j.crate);return o.position.set(t,n+e/2,r),ht(o)}function At(i,e,t){const n=new ee(new st(.32,.38,.85,10),j.redCrate);return n.position.set(i,e+.42,t),n.castShadow=!0,n.receiveShadow=!0,ht(n)}function Mo(i,e,t,n,r,a,o,l,c,u){const d=i+t/2,p=e+n/2,f=r/2;Tt(t,n,o,d,-.05,p);{const g=(t-c)/2;g>.3&&ae(g,r,.4,a,i+g/2,f,e),ae(t-g-c,r,.4,a,i+g+c+(t-g-c)/2,f,e),ae(c,r-u,.4,a,i+g+c/2,r-(r-u)/2,e)}ae(.4,r,n,a,i,f,p),ae(.4,r,n,a,i+t,f,p),ae(t,r,.4,a,d,f,e+n)}function vn(i,e,t,n){for(let r=0;r<n;r++){const a=(Math.random()-.5)*.5,o=(Math.random()-.5)*.5,l=Math.floor(r/3),c=rr(.65,.22,.35,j.sand);c.position.set(i+a,e+l*.2+.11,t+o),ht(c)}}function Un(i,e,t,n){const r=n||[3364266,4482764],a=new yt;a.position.set(i,0,e),a.rotation.y=t;const o=new ee(new Ie(1.8,.7,3.5),new Te({color:r[0],roughness:.3,metalness:.5}));o.position.y=.5,o.castShadow=!0,a.add(o);const l=new ee(new Ie(1.5,.5,2.5),new Te({color:r[1],roughness:.2,metalness:.6}));l.position.y=1.1,l.castShadow=!0,a.add(l);for(let c=-1;c<=1;c+=2)for(let u=-1;u<=1;u+=2){const d=new ee(new st(.3,.3,.25,12),new Te({color:273,roughness:.8}));d.rotation.x=Math.PI/2,d.position.set(c*.7,.25,u*1.3),d.castShadow=!0,a.add(d)}Ae.add(a),ht(a)}function sr(i,e,t){const n=new yt;n.position.set(i,0,e),n.rotation.y=t;const r=new ee(new Ie(1.8,.12,.5),new Te({color:9133628,roughness:.6}));r.position.y=.5,r.castShadow=!0,n.add(r);for(let a=-1;a<=1;a+=2){const o=new ee(new Ie(.1,.45,.4),new Te({color:6044190,roughness:.6}));o.position.set(a*.7,.22,0),o.castShadow=!0,n.add(o)}Ae.add(n),ht(n)}function ws(i,e,t){const n=new yt;n.position.set(i,0,e),n.rotation.set(.2,t,1.4);const r=new ee(new Ie(1.2,.8,.5),new Te({color:7032381,roughness:.7}));r.position.y=.4,r.castShadow=!0,n.add(r),Ae.add(n),ht(n)}function Pe(i,e,t,n){const r=new ee(new Ie(t,.8,.25),new Te({color:10193787,roughness:.7}));r.position.set(i,.4,e),r.rotation.y=n,r.castShadow=!0,r.receiveShadow=!0,ht(r)}function Yt(i,e){const t=new ee(new st(.15,.2,1.5,8),new Te({color:6111287,roughness:.8}));t.position.set(i,.75,e),t.castShadow=!0,ht(t);const n=new ee(new xn(.5,1.2,8),new Te({color:3046706,roughness:.7}));n.position.set(i,1.6,e),n.castShadow=!0,ht(n);const r=new ee(new xn(.35,.8,8),new Te({color:3706428,roughness:.7}));r.position.set(i,2.2,e),r.castShadow=!0,ht(r)}console.log("v1.5.3 - init OK");const Gm=new hn(100,32,16),Vm=new In({side:Ot,vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vP;void main(){float h=normalize(vP).y;vec3 s=mix(vec3(0.80,0.86,0.93),vec3(0.50,0.70,0.88),smoothstep(0.0,0.55,h));gl_FragColor=vec4(s,1.0);}"});Ae.add(new ee(Gm,Vm));const So=new ee(new st(.8,.8,.05,32),new Te({color:3377407,roughness:.3,emissive:1131690,emissiveIntensity:.6}));So.position.set(-40,.01,-32);So.receiveShadow=!0;Ae.add(So);const Eo=new ee(new gi(.8,1,32),new Pt({color:3377407,side:Ft,transparent:!0,opacity:.5}));Eo.rotation.x=-Math.PI/2;Eo.position.set(-40,.03,-32);Ae.add(Eo);const bs=new ee(new Ie(.7,.7,.5),new Te({color:3066944,roughness:.4,emissive:1135889,emissiveIntensity:.4}));bs.position.set(3,.35,22);bs.castShadow=!0;bs.receiveShadow=!0;Ae.add(bs);const yo=new ee(new gi(.4,.55,32),new Pt({color:3066944,side:Ft,transparent:!0,opacity:.4}));yo.rotation.x=-Math.PI/2;yo.position.set(3,.02,22);Ae.add(yo);const As=new ee(new Ie(.7,.7,.5),new Te({color:3066944,roughness:.4,emissive:1135889,emissiveIntensity:.4}));As.position.set(0,.35,-4);As.castShadow=!0;As.receiveShadow=!0;Ae.add(As);const To=new ee(new gi(.4,.55,32),new Pt({color:3066944,side:Ft,transparent:!0,opacity:.4}));To.rotation.x=-Math.PI/2;To.position.set(0,.02,-4);Ae.add(To);const Rs=new ee(new Ie(.7,.7,.5),new Te({color:3066944,roughness:.4,emissive:1135889,emissiveIntensity:.4}));Rs.position.set(-42,.35,-28);Rs.castShadow=!0;Rs.receiveShadow=!0;Ae.add(Rs);const Cs=new ee(new nr(150,150),j.sand);Cs.rotation.x=-Math.PI/2;Cs.position.y=-.06;Cs.receiveShadow=!0;ht(Cs);const Tc=new zm(75,60,30,64,12888170,12888170);Tc.position.set(0,.005,0);Ae.add(Tc);Mo(-30,-18,10,9,2.8,j.building,j.floorCT,"front",4,2.8);Mo(26,-8,10,9,2.8,j.building,j.floorT,"front",4,2.8);Mo(-44,-30,8,7,2.5,j.building,j.floorCT,"front",3,2.5);Tt(24,20,j.floorMid,0,-.05,0);{const i=new ee(new st(.5,.6,1.5,12),new Te({color:2457,roughness:.3}));i.position.set(0,.75,0),i.castShadow=!0,ht(i)}Pe(3,3,3,0);Pe(-3,-3,3,0);Pe(3,-3,3,Math.PI/2);Pe(-3,3,3,Math.PI/2);sr(5,2,.3);sr(-5,-2,2.5);sr(3,-1,1);sr(-3,1,4);Un(8,-4,Math.PI/4,[13382451,14500932]);ae(14,3.5,.4,j.wallA,0,1.75,25);ae(.4,3.5,10,j.wallA,-7,1.75,20);ae(.4,3.5,10,j.wallA,7,1.75,20);ae(4,3.5,.4,j.darkWall,-2,1.75,19);ae(4,3.5,.4,j.darkWall,2,1.75,19);ae(1.5,.3,.4,j.darkWall,0,3.35,19);Tt(14,10,j.platform,0,-.05,20);Ve(1.5,1.5,-3,0,22);Ve(2,1,2,0,22,j.redCrate);Ve(1.2,1.3,4,0,21);Tt(8,6,j.floorLongA,0,.5,30);ae(8,1.2,.3,j.wallA,0,1.1,33);ae(8,1.2,.3,j.wallA,0,1.1,27);Ve(1.5,1.6,-2,.5,31);Ve(1.5,1.6,2,.5,30);ae(12,3.5,.4,j.wallB,-8,1.75,-28);ae(.4,3.5,8,j.wallB,-14,1.75,-24);ae(6,3.5,.4,j.wallB,-5,1.75,-20);ae(3,3.5,.4,j.wallB,-9,1.75,-19);ae(3,3.5,.4,j.wallB,-3,1.75,-19);Tt(8,8,j.floorB,-10,-.05,-24);Tt(6,6,j.platform,-10,.35,-33);ae(6,1.5,.3,j.wallA,-10,1.1,-36);ae(6,1.5,.3,j.wallA,-10,1.1,-30);Ve(1.5,1.6,-12,.35,-34);Ve(1.5,1.6,-8,.35,-33);ae(.5,5,18,j.darkWall,16,2.5,-9);ae(.5,5,18,j.darkWall,24,2.5,-9);Tt(7.5,18,j.floorMid,20,-.05,-9);ws(20,-5,.5);ws(22,-12,2);At(18,0,-4);At(23,0,-14);Tt(16,16,j.floorCT,-22,-.05,0);Un(-24,6,.3,[2263091,3385924]);Un(-18,-6,Math.PI/1.5,[14518272,15641122]);Pe(-28,3,4,0);Pe(-28,-3,4,0);Pe(-16,5,3,1);Pe(-16,-5,3,1);ae(.4,3,6,j.wallA,-27,1.5,-15);ae(.4,3,6,j.wallA,23,1.5,-3);ae(.4,3,4,j.building,-8,1.5,8);ae(.4,3,4,j.building,8,1.5,8);ae(.4,3,4,j.building,-8,1.5,-10);ae(.4,3,4,j.building,0,1.5,-10);Ve(1.2,1,6,-2,6,j.redCrate);Ve(1,.8,10,0,-10);Ve(1.2,1.1,-8,8,2);Ve(1,.9,-12,-12,0);Ve(1.1,1,15,-18,0);Ve(.9,.8,-26,8,2);Pe(4,-6,3,0);Pe(-4,6,3,Math.PI);Pe(6,1,2,.5);Pe(-6,-1,2,2);vn(8,.1,6,4);vn(-8,.1,-4,4);vn(10,.1,10,6);vn(-14,.1,-16,6);vn(22,.1,6,4);vn(-26,.1,-6,4);[[-22,0,10],[-20,0,-8],[-5,0,15],[15,0,5],[-15,0,-18],[8,0,-8],[-28,0,4],[18,0,0],[-6,0,-12],[10,0,18]].forEach(([i,e,t])=>At(i,e,t));Pe(-8,24,3,0);Pe(8,24,3,0);Un(-28,8,.8,[8930406,11163016]);Un(-14,-10,2.5,[15658734,16777215]);Pe(-22,2,3,.5);Pe(-20,-8,2,1);Pe(-30,-1,3,0);Pe(17,-4,2,0);vn(-16,.1,-20,5);Ve(1.2,1.2,-13,0,-22);Pe(-26,-13,3,1);Pe(22,-1,2,0);Pe(-9,6,2,0);ws(18,-9,3);ws(21,-15,1.5);Un(-2,34,Math.PI/2,[1118498,2236996]);Yt(12,8);Yt(-14,4);Yt(25,-5);Yt(-18,-10);Yt(8,-15);Yt(-32,12);Yt(30,10);Yt(-5,-30);Yt(15,-25);Yt(-28,-28);Pe(0,14,5,0);Pe(0,-6,5,0);Ve(1.5,1.2,3,0,12);Ve(1.5,1.2,-3,0,-10);At(5,0,4);At(-5,0,-2);vn(0,.1,8,4);Pe(28,0,4,0);Pe(35,8,3,Math.PI/2);Ve(1.5,1.5,30,0,5);Ve(1.2,1,34,0,-3);At(32,0,10);At(38,0,-8);vn(26,.1,2,4);Tt(10,6,j.floorCT,-5,-.05,30);Ve(2,1.4,-4,0,32,j.redCrate);Ve(1.5,1.2,2,0,31);Ve(1,1,-6,0,33);At(-3,0,34);At(1,0,33);Pe(-5,30,4,0);Pe(3,30,3,0);Tt(10,8,j.floorMid,28,-.05,-28);Un(30,-32,.5,[13399842,14527044]);Pe(26,-26,3,0);Tt(10,8,j.floorLongA,-44,-.05,-38);Yt(-42,-35);Yt(-46,-39);Yt(-40,-41);sr(-44,-36,.3);sr(-47,-40,1.5);Pe(-48,-36,4,0);Pe(-42,-42,4,1.5);Pe(-40,-35,3,0);Tt(12,10,j.floorCT,-38,-.05,-8);Ve(1.5,1.5,-35,0,-10);Ve(1.2,1,-40,0,-12);Ve(1,.8,-42,0,-7);vn(-36,.1,-4,6);At(-40,0,-9);At(-38,0,-12);Pe(-42,-4,3,.5);Pe(-34,-10,3,1);ae(12,2,.4,j.darkWall,-18,1,-38);ae(12,2,.4,j.darkWall,-18,1,-42);ae(.4,2,4,j.darkWall,-24,1,-40);ae(.4,2,1,j.darkWall,-12,1,-38.5);ae(.4,2,1,j.darkWall,-12,1,-41.5);Ve(1.5,1.2,-20,0,-41);Ve(1.5,1.2,-16,0,-39);Pe(-18,-39,4,0);Pe(-14,-41,2,1);ae(6,2,.4,j.darkWall,28,1,-20);ae(4,2,.4,j.darkWall,28,1,-26);ae(.4,2,6,j.darkWall,25,1,-23);ae(.4,2,2,j.darkWall,31,1,-21);ae(.4,2,2,j.darkWall,31,1,-25);Ve(1.5,1.2,30,0,-24);Pe(27,-18,3,0);Pe(30,-22,2,1);ae(24,3,.5,j.wallB,-6,1.5,-42);ae(24,3,.5,j.wallB,-6,1.5,-34);ae(.5,3,8,j.wallB,-18,1.5,-38);ae(.5,3,8,j.wallB,6,1.5,-38);Tt(24,8,j.floorMid,-6,-.05,-38);ae(14,3,.5,j.wallB,26,1.5,32);ae(.5,3,8,j.wallB,19,1.5,28);ae(.5,3,8,j.wallB,33,1.5,28);Tt(14,8,j.floorLongA,26,-.05,28);Ve(2,1.4,23,0,30,j.redCrate);Ve(1.5,1.2,29,0,31);At(27,0,33);At(31,0,30);{const i=new ee(new Ie(8,.15,5),new Te({color:8947848,roughness:.5}));i.position.set(28,3.5,-28),i.castShadow=!0,Ae.add(i)}for(let i=0;i<7;i++){const e=rr(1.5,.15,.8,j.concrete);e.position.set(22+i*1,.15+i*.5,-28),ht(e)}{const i=new ee(new st(.1,.12,3.5,8),new Te({color:1638,roughness:.4}));i.position.set(24,1.75,-30.5),i.castShadow=!0,ht(i)}{const i=new ee(new st(.1,.12,3.5,8),new Te({color:1638,roughness:.4}));i.position.set(32,1.75,-25.5),i.castShadow=!0,ht(i)}{const i=new ee(new Ie(1.5,.8,.6),new Te({color:13382451,roughness:.3}));i.position.set(28,.4,-30),i.castShadow=!0,ht(i)}{const i=new ee(new Ie(10,3.5,.3),new Te({color:9139029,roughness:.7}));i.position.set(-38,1.75,-6),i.castShadow=!0,ht(i)}Ae.add(new yc(16772829,.7));const pn=new Ec(16774624,1.5);pn.position.set(40,60,15);pn.castShadow=!0;pn.shadow.mapSize.width=2048;pn.shadow.mapSize.height=2048;pn.shadow.camera.near=.5;pn.shadow.camera.far=180;pn.shadow.camera.left=-90;pn.shadow.camera.right=90;pn.shadow.camera.top=90;pn.shadow.camera.bottom=-90;Ae.add(pn);Ae.add(new Um(8900331,9136404,.4));Tt(14,10,j.floorCT,-10,-.05,36);ae(14,2.8,.4,j.building,-10,1.4,41);ae(.4,2.8,10,j.building,-17,1.4,36);ae(.4,2.8,10,j.building,-3,1.4,36);ae(5,2.8,.4,j.building,-12.5,1.4,31);ae(5,2.8,.4,j.building,-7.5,1.4,31);ae(6,2.8,.4,j.building,-10,1.4,34);ae(6,2.8,.4,j.building,-10,1.4,38);ae(.4,2.8,4,j.building,-7,1.4,36);Ve(1,.8,-15,0,40);Ve(.8,.8,-12,0,38);At(-8,0,39);At(-13,0,37);Pe(-10,40,4,0);Pe(-6,38,3,0);Tt(16,14,j.floorB,32,-.05,-36);ae(16,4,.4,j.darkWall,32,2,-29);ae(16,4,.4,j.darkWall,32,2,-43);ae(.4,4,5,j.darkWall,24,2,-31.5);ae(.4,4,5,j.darkWall,24,2,-40.5);ae(8,4,.4,j.darkWall,28,2,-29);ae(8,4,.4,j.darkWall,36,2,-29);Ve(2,1.8,28,0,-31,j.redCrate);Ve(1.5,1.5,34,0,-33);Ve(1.5,1.5,36,0,-38);Ve(1.2,1.2,30,0,-40);At(26,0,-34);At(38,0,-38);At(34,0,-42);Pe(27,-30,3,0);Pe(36,-32,3,1);Tt(6,6,j.platform,-55,2.5,-22);for(let i=0;i<5;i++){const e=rr(4,.2,2,j.concrete);e.position.set(-55,.1+i*.5,-18-i*1),ht(e)}ae(6,1.2,.3,j.wallA,-55,3.1,-19);ae(6,1.2,.3,j.wallA,-55,3.1,-25);ae(.3,1.2,6,j.wallA,-52,3.1,-22);ae(.3,1.2,6,j.wallA,-58,3.1,-22);{const i=new ee(new st(.8,1,.3,16),new Te({color:2184,roughness:.4}));i.position.set(0,.15,0),i.castShadow=!0,ht(i)}{const i=new ee(new Es(.9,.1,8,16),new Te({color:2730,roughness:.3}));i.rotation.x=Math.PI/2,i.position.set(0,.35,0),i.castShadow=!0,ht(i)}Un(-32,4,1.2,[3368584,4491434]);Un(-10,-12,.7,[15658734,16777215]);Pe(-22,-6,3,1);Pe(-20,-10,3,.5);{const i=new ee(new st(.3,.3,.5,8),new Te({color:5596723,roughness:.7}));i.position.set(19,.25,-7),i.castShadow=!0,ht(i)}{const i=new ee(new st(.3,.3,.5,8),new Te({color:5596723,roughness:.7}));i.position.set(22,.25,-10),i.castShadow=!0,ht(i)}{const i=new ee(new st(.08,.1,4,8),new Te({color:1092,roughness:.5}));i.position.set(20,2,-4),i.castShadow=!0,ht(i)}Pe(-30,-20,6,0);Pe(-30,-18,4,0);Pe(30,-20,6,0);Pe(30,-14,4,0);Tt(6,6,j.platform,38,2,12);ae(6,1.2,.3,j.wallA,38,2.6,9);ae(6,1.2,.3,j.wallA,38,2.6,15);Ve(1.5,1.2,36,2,14);At(41,2,10);Tt(6,6,j.platform,-25,2,-40);ae(6,1.2,.3,j.wallA,-25,2.6,-43);ae(6,1.2,.3,j.wallA,-25,2.6,-37);Ve(1.5,1.2,-23,2,-38);{const i=new ee(new Ie(.7,.7,.5),new Te({color:3066944,roughness:.4,emissive:1135889,emissiveIntensity:.4}));i.position.set(35,.35,-22),i.castShadow=!0,i.receiveShadow=!0,Ae.add(i)}{const i=new ee(new gi(.4,.55,32),new Pt({color:3066944,side:Ft,transparent:!0,opacity:.4}));i.rotation.x=-Math.PI/2,i.position.set(35,.02,-22),Ae.add(i)}{const i=new ee(new Ie(.7,.7,.5),new Te({color:3066944,roughness:.4,emissive:1135889,emissiveIntensity:.4}));i.position.set(-12,.35,35),i.castShadow=!0,i.receiveShadow=!0,Ae.add(i)}{const i=new ee(new gi(.4,.55,32),new Pt({color:3066944,side:Ft,transparent:!0,opacity:.4}));i.rotation.x=-Math.PI/2,i.position.set(-12,.02,35),Ae.add(i)}Tt(10,5,j.floorMid,15,.6,8);ae(10,1,.3,j.wallA,15,1.1,10.5);ae(10,1,.3,j.wallA,15,1.1,5.5);ae(.3,1,5,j.wallA,10,1.1,8);for(let i=0;i<6;i++){const e=rr(1.5,.15,.5,j.concrete);e.position.set(10,.05+i*.12,6+i*.4),ht(e)}function Tr(i,e,t,n,r){const a=document.createElement("canvas");a.width=256,a.height=64;const o=a.getContext("2d");o.fillStyle="#5c3a1e",o.fillRect(0,0,256,64),o.fillStyle="#fff",o.font="bold 22px Arial",o.textAlign="center",o.fillText(n,128,40);const l=new Im(a),c=new ee(new nr(2,.5),new Pt({map:l,side:Ft,transparent:!0}));c.position.set(i,e,t),c.rotation.y=r,Ae.add(c);const u=new ee(new st(.05,.05,2,8),new Te({color:6044190,roughness:.6}));u.position.set(i,e-1.2,t),Ae.add(u)}Tr(-40,2.5,-34,"CT SPAWN",0);Tr(32,2.5,-25,"T SPAWN",Math.PI);Tr(0,2.5,2,"MID",Math.PI/2);Tr(-5,2.5,37,"NORTH",0);Tr(18,3.2,5,"UPPER",0);console.log("Map OK");const km=(i,e,t)=>new Te({color:i,roughness:e,metalness:t}),$i=()=>new Te({color:2763306,roughness:.25,metalness:.85}),wc=()=>new Te({color:6044190,roughness:.5,metalness:.05}),Mr=()=>new Te({color:1710618,roughness:.3,metalness:.8}),dt=[];let us,Fi,Oi,hs;function Wm(){const i=new yt,e=new yt;i.add(e),e.add(new ee(new Ie(.06,.08,.32),$i())).position.set(0,0,-.22);for(let a=0;a<3;a++){const o=new ee(new st(.012-a*.001,.012-a*.002,.12,12),$i());o.position.set(0,.02,-.42-a*.1),o.rotation.x=Math.PI/2,e.add(o)}const t=new yt;t.add(new ee(new Ie(.07,.06,.16),wc()));for(let a=0;a<4;a++){const o=new ee(new Ie(.01,.005,.03),Mr());o.position.set(0,.02-a*.012,-.38-a*.02),t.add(o)}t.position.set(0,0,-.42),e.add(t);const n=new ee(new Ie(.04,.02,.13),Mr());n.position.set(0,-.05,-.18),n.rotation.x=-.25,e.add(n);const r=new ee(new xn(.03,.1,8),new Pt({color:16755200,transparent:!0,opacity:0,depthTest:!1}));return r.rotation.x=Math.PI/2,r.position.set(0,.02,-.74),e.add(r),{group:i,recoilG:e,flash:r,mag:n}}function Xm(){const i=new yt,e=new yt;i.add(e),e.add(new ee(new Ie(.08,.1,.25),$i())).position.set(0,0,-.15);for(let n=-1;n<=1;n+=2)for(let r=0;r<2;r++){const a=new ee(new st(.018-r*.002,.018-r*.003,.2,12),$i());a.position.set(n*.02,.02,-.35-r*.15),a.rotation.x=Math.PI/2,e.add(a)}e.add(new ee(new Ie(.06,.12,.08),wc())).position.set(0,-.05,-.08);const t=new ee(new xn(.05,.15,8),new Pt({color:16755200,transparent:!0,opacity:0,depthTest:!1}));return t.rotation.x=Math.PI/2,t.position.set(0,.02,-.65),e.add(t),{group:i,recoilG:e,flash:t,mag:null}}function qm(){const i=new yt,e=new yt;i.add(e),e.add(new ee(new Ie(.05,.06,.45),$i())).position.set(0,0,-.25);for(let o=0;o<4;o++){const l=new ee(new st(.015-o*.002,.015-o*.003,.15,12),$i());l.position.set(0,.02,-.5-o*.13),l.rotation.x=Math.PI/2,e.add(l)}const t=new ee(new st(.022,.022,.16,16),Mr());t.position.set(0,.06,-.3),t.rotation.x=Math.PI/2,e.add(t);const n=new ee(new Es(.04,.005,8,8),Mr());n.position.set(.03,-.03,-.1),n.rotation.y=Math.PI/2,e.add(n);const r=new ee(new Ie(.03,.015,.1),Mr());r.position.set(0,-.04,-.15),e.add(r);const a=new ee(new xn(.02,.08,8),new Pt({color:16755200,transparent:!0,opacity:0,depthTest:!1}));return a.rotation.x=Math.PI/2,a.position.set(0,.02,-.92),e.add(a),{group:i,recoilG:e,flash:a,mag:r}}dt[0]=Wm();dt[1]=Xm();dt[2]=qm();for(let i=0;i<3;i++)dt[i].group.visible=i===0,Ts.add(dt[i].group);us=dt[0].group;Fi=dt[0].recoilG;Oi=dt[0].flash;hs=dt[0].mag;Ts.add(new yc(16777215,1));const bc=new Ec(16777215,1.2);bc.position.set(.5,1.5,-2);Ts.add(bc);console.log("Weapon OK");function xr(i){i===qt||Mt||(Mt={old:qt,new:i,progress:0,duration:.3},ys=!1)}let Mt=null;const ji=[[0,0,22],[-5,0,18],[5,0,15],[-10,0,10],[10,0,8],[-15,0,0],[15,0,-5],[-20,0,-10],[20,0,-18],[-25,0,-15],[25,0,-22],[-8,0,-20],[-50,0,-15],[-45,0,-10],[45,0,-22],[48,0,-12],[-10,0,-38],[2,0,-40],[26,0,30],[30,0,28]];function Ym(){if(oi.length>=6)return;const i=ji[Math.floor(Math.random()*ji.length)],e=new yt;e.position.set(i[0],.15,i[2]);const t=new ee(new Ie(.4,.12,.3),new Te({color:13421772,roughness:.3}));t.position.y=.06,t.castShadow=!0,e.add(t);const n=new ee(new st(.15,.18,.08,6),new Te({color:15658734,roughness:.2,emissive:2236962,emissiveIntensity:.3}));n.position.y=.16,n.castShadow=!0,e.add(n),Ae.add(e),oi.push({group:e,pos:new P(i[0],.15,i[2])})}function Km(){if(li.length>=4)return;const i=ji[Math.floor(Math.random()*ji.length)],e=new yt;e.position.set(i[0],.15,i[2]);const t=new ee(new Ie(.35,.1,.25),new Te({color:13382451,roughness:.3}));t.position.y=.05,t.castShadow=!0,e.add(t);const n=new ee(new Ie(.12,.06,.03),new Te({color:16777215,roughness:.2}));n.position.y=.12,e.add(n);const r=new ee(new Ie(.03,.06,.12),new Te({color:16777215,roughness:.2}));r.position.y=.12,e.add(r),Ae.add(e),li.push({group:e,pos:new P(i[0],.15,i[2])})}function Zm(){if(ci.length>=2)return;const i=ji[Math.floor(Math.random()*ji.length)],e=new yt;e.position.set(i[0],.15,i[2]);const t=new ee(new Ie(.35,.1,.25),new Te({color:2263295,roughness:.3}));t.position.y=.05,t.castShadow=!0,e.add(t);const n=new ee(new xn(.08,.1,4),new Te({color:16776960,roughness:.1,emissive:4473856,emissiveIntensity:.5}));n.position.y=.14,n.rotation.z=Math.PI,e.add(n),Ae.add(e),ci.push({group:e,pos:new P(i[0],.15,i[2]),bobPhase:Math.random()*Math.PI*2})}console.log("Armor OK");const _s=[[{x:-24,z:-12},{x:-28,z:0},{x:-20,z:-8}],[{x:-6,z:-4},{x:-2,z:2},{x:-8,z:0}],[{x:6,z:-2},{x:2,z:2},{x:8,z:0}],[{x:28,z:-2},{x:24,z:-10},{x:30,z:-6}],[{x:-12,z:-18},{x:-6,z:-14},{x:-14,z:-14}],[{x:4,z:20},{x:-2,z:24},{x:6,z:26}],[{x:-22,z:4},{x:-26,z:8},{x:-20,z:10}],[{x:20,z:-10},{x:24,z:-8},{x:20,z:-14}],[{x:-45,z:-20},{x:-50,z:-12},{x:-42,z:-5},{x:-38,z:-15}],[{x:25,z:18},{x:30,z:15},{x:35,z:22},{x:28,z:26}],[{x:0,z:-30},{x:8,z:-28},{x:4,z:-22},{x:-4,z:-26}]];function $m(i,e,t){const n=new yt;n.position.set(i,.85,e);const r=new Te({color:12597547,roughness:.5}),a=new Te({color:7019034,roughness:.6}),o=new ee(new Ie(.4,.55,.3),r);o.position.y=.75,o.castShadow=!0;const l=new ee(new hn(.16,8,8),r);l.position.y=1.18,l.castShadow=!0;const c=new ee(new st(.05,.05,.4,6),a);c.position.set(-.22,.8,0),c.rotation.z=.2,c.castShadow=!0;const u=new ee(new st(.05,.05,.4,6),a);u.position.set(.22,.8,0),u.rotation.z=-.2,u.castShadow=!0;const d=new ee(new Ie(.04,.04,.25),km(1710618,.3,.8));d.position.set(.3,.85,.05),d.rotation.x=-.2,d.castShadow=!0;const p=new ee(new Ie(.12,.4,.12),a);p.position.set(-.1,.25,0),p.castShadow=!0;const f=new ee(new Ie(.12,.4,.12),a);return f.position.set(.1,.25,0),f.castShadow=!0,n.add(o,l,c,u,d,p,f),Ae.add(n),{group:n,body:o,head:l,armL:c,armR:u,gun:d,legL:p,legR:f,isMelee:!1,hp:100,alive:!0,respawnTimer:0,state:"patrol",patrolIdx:0,patrolForward:!0,route:_s[t??Math.floor(Math.random()*_s.length)],shootTimer:.5+Math.random()*.5,sightRange:30,attackRange:18,speed:4,velX:0,velZ:0,vy:0,stuckT:0,chaseTimer:0}}function jm(i,e){const t=new yt;t.position.set(i,.85,e);const n=new Te({color:5592422,roughness:.4}),r=new Te({color:3355460,roughness:.5}),a=new ee(new Ie(.5,.6,.35),n);a.position.y=.78,a.castShadow=!0;const o=new ee(new hn(.18,8,8),n);o.position.y=1.25,o.castShadow=!0;const l=new ee(new st(.06,.07,.35,6),r);l.position.set(-.28,1,.05),l.castShadow=!0;const c=new ee(new st(.06,.07,.35,6),r);c.position.set(.28,1,.05),c.castShadow=!0;const u=new ee(new Ie(.14,.45,.14),r);u.position.set(-.12,.28,0),u.castShadow=!0;const d=new ee(new Ie(.14,.45,.14),r);return d.position.set(.12,.28,0),d.castShadow=!0,t.add(a,o,l,c,u,d),Ae.add(t),{group:t,body:a,head:o,armL:l,armR:c,legL:u,legR:d,isMelee:!0,hp:150,alive:!0,respawnTimer:0,state:"patrol",patrolIdx:0,patrolForward:!0,route:_s[Math.floor(Math.random()*_s.length)],shootTimer:.8+Math.random(),sightRange:28,attackRange:3.5,speed:3,velX:0,velZ:0,vy:0,stuckT:0,chaseTimer:0}}function Jm(i,e,t){const n=new yt;n.position.set(i,.6,e);const r=t||9136404,a=new ee(new Ie(.5,.3,.8),new Te({color:r,roughness:.6}));a.position.y=.35,a.castShadow=!0,n.add(a);const o=new ee(new Ie(.25,.2,.25),new Te({color:r,roughness:.5}));o.position.set(0,.5,.4),o.castShadow=!0,n.add(o);const l=new ee(new Ie(.12,.1,.15),new Te({color:819,roughness:.5}));l.position.set(0,.45,.52),n.add(l);for(let p=-1;p<=1;p+=2){const f=new ee(new st(.06,.06,.35,6),new Te({color:546,roughness:.7}));f.position.set(p*.15,.15,p*.2),f.castShadow=!0,n.add(f)}const c=new ee(new st(.03,.05,.3,6),new Te({color:r,roughness:.6}));c.position.set(0,.45,-.45),c.rotation.x=.8,n.add(c);const u=new ee(new xn(.06,.12,4),new Te({color:819,roughness:.5}));u.position.set(.1,.62,.35),u.rotation.z=-.3,n.add(u);const d=new ee(new xn(.06,.12,4),new Te({color:819,roughness:.5}));return d.position.set(-.1,.62,.35),d.rotation.z=.3,n.add(d),Ae.add(n),{group:n,body:a,head:o,isMelee:!0,isDog:!0,hp:40,alive:!0,respawnTimer:0,state:"chase",shootTimer:.5+Math.random()*.5,sightRange:999,attackRange:2.5,speed:11,velX:0,velZ:0,vy:0,stuckT:0,route:[],patrolIdx:0,patrolForward:!0,chaseTimer:0}}const so=[[-25,4,0],[-6,-4,2],[6,-4,3],[26,-12,4],[14,-2,3],[-16,-20,2],[30,8,1],[-35,-18,3],[0,22,2],[18,16,1]];so.forEach(([i,e,t])=>{let n=i+(Math.random()-.5)*6,r=e+(Math.random()-.5)*6;_i.push($m(n,r,t))});[[-24,-4],[20,-8],[-22,3],[35,-20],[0,25]].forEach(([i,e])=>{let t=i+(Math.random()-.5)*6,n=e+(Math.random()-.5)*6;_i.push(jm(t,n))});[[-30,5,9127187],[-10,15,10506797],[30,-10,6908265]].forEach(([i,e,t])=>{let n=i+(Math.random()-.5)*5,r=e+(Math.random()-.5)*5;_i.push(Jm(n,r,t))});console.log("Enemies:",_i.length);function Qm(i){var n;const e=ke.position,t=Ac;for(const r of _i){if(!r.alive){if(r.respawnTimer-=i,r.respawnTimer<=0){if(r.isDog){const w=[[-30,5],[-10,15],[30,-10]],z=w[Math.floor(Math.random()*w.length)];r.group.position.set(z[0]+(Math.random()-.5)*5,.6,z[1]+(Math.random()-.5)*5)}else{const w=so[Math.floor(Math.random()*so.length)];r.group.position.set(w[0]+(Math.random()-.5)*6,.85,w[1]+(Math.random()-.5)*6)}r.group.rotation.set(0,0,0),r.hp=r.isDog?40:r.isMelee?150:100,r.alive=!0,r.state=r.isDog?"chase":"patrol",r.shootTimer=.5+Math.random()}continue}const a=r.group,o=a.position.x,l=a.position.y,c=a.position.z,u=e.x-o,d=e.z-c,p=Math.sqrt(u*u+d*d),f=l,g=l+1.2,_=.25;let x=!1;if(p<r.sightRange&&p>.5){ln.set(new P(o,g,c),new P(e.x-o,e.y-g,e.z-c).normalize());const w=ln.intersectObjects(Yn,!0);x=w.length===0||w[0].distance>p-.3}x&&p<r.attackRange*.7?r.state="attack":x&&p<r.sightRange?r.state="chase":!r.isDog&&(!x||p>r.sightRange+5)?r.state="patrol":r.isDog&&(r.state="chase"),r.state==="chase"?(r.chaseTimer=(r.chaseTimer||0)+i,!x&&r.chaseTimer>3&&!r.isDog&&(r.state="patrol",r.chaseTimer=0)):r.chaseTimer=0;let m;if(r.state==="patrol"){const w=r.route[Math.max(0,Math.min(r.patrolIdx,r.route.length-1))];m=Math.atan2(w.x-o,w.z-c)}else m=Math.atan2(u,d);let h=m-a.rotation.y,b=0;for(;h>Math.PI&&b++<10;)h-=Math.PI*2;for(b=0;h<-Math.PI&&b++<10;)h+=Math.PI*2;if(a.rotation.y+=h*Math.min(i*8,1),r.state==="patrol"){const w=r.route[r.patrolIdx],z=w.x-o,O=w.z-c;Math.sqrt(z*z+O*O)<1.5&&(r.patrolIdx=r.patrolForward?r.patrolIdx+1:r.patrolIdx-1,r.patrolIdx>=r.route.length&&(r.patrolIdx=r.route.length-2,r.patrolForward=!1),r.patrolIdx<0&&(r.patrolIdx=1,r.patrolForward=!0)),r.velX=Math.sin(a.rotation.y)*r.speed*.6,r.velZ=-Math.cos(a.rotation.y)*r.speed*.6}else if(r.state==="chase"){const w=r.isDog?2.2:r.isMelee?1.7:1.2;r.velX=u/p*r.speed*w,r.velZ=d/p*r.speed*w}else r.velX=0,r.velZ=0;if(r.state==="attack"&&(r.shootTimer-=i,r.shootTimer<=0))if(r.isDog){if(r.shootTimer=.4+Math.random()*.2,p<2.5&&Vi<=0){const w=8+Math.floor(Math.random()*8);let z=w,O=0;St>0&&(O=Math.min(St,Math.floor(w*.5)),z=w-O,St-=O,ki=0),tt=Math.max(0,tt-z),di=.3,document.getElementById("health").textContent="HP "+tt,document.getElementById("health").style.color=tt<30?"#f33":tt<60?"#fa0":"#0f0",document.getElementById("armor").textContent="🛡 "+St}}else if(r.isMelee){if(r.shootTimer=.7+Math.random()*.3,p<3&&Vi<=0){const w=12+Math.floor(Math.random()*12);let z=w,O=0;St>0&&(O=Math.min(St,Math.floor(w*.5)),z=w-O,St-=O,ki=0),tt=Math.max(0,tt-z),di=.3,document.getElementById("health").textContent="HP "+tt,document.getElementById("health").style.color=tt<30?"#f33":tt<60?"#fa0":"#0f0",document.getElementById("armor").textContent="🛡 "+St}}else{r.shootTimer=.4+Math.random()*.6;const w=new P(e.x-o,e.y-(l+1),e.z-c).normalize();w.x+=(Math.random()-.5)*.06,w.y+=(Math.random()-.5)*.06,w.z+=(Math.random()-.5)*.06,w.normalize(),ln.set(new P(o,l+1,c),w);const z=ln.intersectObjects(Yn,!0),O=new P(o,l+1,c).distanceTo(e);if(z.length===0||z[0].distance>O-.4){if(Vi<=0){const q=6+Math.floor(Math.random()*8);let X=q,J=0;St>0&&(J=Math.min(St,Math.floor(q*.5)),X=q-J,St-=J,ki=0),tt=Math.max(0,tt-X),di=.25,document.getElementById("health").textContent="HP "+tt,document.getElementById("health").style.color=tt<30?"#f33":tt<60?"#fa0":"#0f0",document.getElementById("armor").textContent="🛡 "+St}}else{const q=new ee(new hn(.03,4,4),new Pt({color:1092}));q.position.copy(z[0].point).addScaledVector(((n=z[0].face)==null?void 0:n.normal)||new P(0,1,0),.005),q.userData={life:8},Ae.add(q),vr.push(q)}const W=new ee(new hn(.06,4,4),new Pt({color:16755200,transparent:!0,opacity:.7}));W.position.set(o+w.x*.3,l+1+w.y*.3,c+w.z*.3),W.userData={life:.06},Ae.add(W),cs.push(W)}const A=r.velX*i,E=r.velZ*i,F=o+A,C=c+E;let R=!0,U=!0;for(const w of t)F+_>w.min.x&&F-_<w.max.x&&c+_>w.min.z&&c-_<w.max.z&&f<w.max.y&&g>w.min.y&&(R=!1),o+_>w.min.x&&o-_<w.max.x&&C+_>w.min.z&&C-_<w.max.z&&f<w.max.y&&g>w.min.y&&(U=!1);R&&(a.position.x=F),U&&(a.position.z=C),Math.abs(a.position.x-o)+Math.abs(a.position.z-c)<.02&&(r.state==="patrol"||r.state==="chase")?(r.stuckT+=i,r.stuckT>2&&(r.vy=5,r.stuckT=0)):r.stuckT=0,r.vy===void 0&&(r.vy=0),r.vy+=-15*i,a.position.y+=r.vy*i,a.position.y<-5&&(a.position.set(a.position.x,.85,a.position.z),r.vy=0),ln.set(new P(a.position.x,a.position.y+1,a.position.z),new P(0,-1,0));const S=ln.intersectObjects(Yn,!1);S.length>0&&S[0].distance<2&&r.vy<=0&&(a.position.y=S[0].point.y,r.vy=0)}}function e0(i){i.alive=!1,i.state="dead",i.respawnTimer=2+Math.random()*2,i.group.position.y-=.3;try{i.group.traverse(e=>{e.material&&e.material.opacity!==void 0&&(e.material.transparent=!0,e.material.opacity=.35)})}catch{}}function t0(){const i=[];for(const e of Yn)e.updateWorldMatrix(!1,!1),i.push(new mi().setFromObject(e));return i}const Ac=t0();function da(i,e,t,n){for(const r of n)if(!(i+jr<=r.min.x||i-jr>=r.max.x)&&!(t+jr<=r.min.z||t-jr>=r.max.z)&&!(e+ro<=r.min.y||e-ro>=r.max.y))return!0;return!1}function n0(){var a;const i=jt[qt];if(on<=0){Ni=i.fireRate;return}on--,Ni=i.fireRate,document.getElementById("ammo").textContent=i.name+" "+on+" / "+Rn,Fi.rotation.x-=.03*(.5+Math.random()),Oi.material.opacity=.6+Math.random()*.4;const e=ke.position.clone();for(let o=0;o<i.pellets;o++){const l=new P(0,0,-1).applyQuaternion(ke.quaternion);l.x+=(Math.random()-.5)*i.spread,l.y+=(Math.random()-.5)*i.spread,l.normalize(),ln.set(e,l);for(let c=0;c<2;c++){const u=new ee(new hn(.03+Math.random()*.03,4,4),new Pt({color:13421772,transparent:!0,opacity:.5})),d=new P(.38,-.3,-.8).applyQuaternion(ke.quaternion).add(ke.position);u.position.copy(d).add(new P((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1)),u.userData={life:.4+Math.random()*.3,vy:1+Math.random()*2,vx:(Math.random()-.5)*1,vz:(Math.random()-.5)*1},Ae.add(u),ss.push(u)}}const t=new ee(new st(.015,.02,.08,6),new Te({color:13934615,roughness:.2,metalness:.9})),n=new P(.5,-.25,-.5).applyQuaternion(ke.quaternion).add(ke.position);t.position.copy(n),t.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),t.userData={life:3,vy:3+Math.random()*2,vx:(Math.random()-.5)*3,vz:(Math.random()-.5)*2,rotV:(Math.random()-.5)*10},Ae.add(t),as.push(t);let r=!1;for(const o of _i){if(!o.alive)continue;const l=o.isDog?[o.body,o.head]:o.isMelee?[o.body,o.head,o.armL,o.armR,o.legL,o.legR]:[o.body,o.head,o.armL,o.armR,o.legL,o.legR,o.gun],c=ln.intersectObjects(l,!0);if(c.length>0){const d=(c[0].object===o.head?2:1)*(i.dmgMin+Math.floor(Math.random()*(i.dmgMax-i.dmgMin+1)));o.hp-=d,r=!0;for(let p=0;p<8;p++){const f=new ee(new hn(.02+Math.random()*.04,4,4),new Pt({color:13369344,transparent:!0,opacity:.8}));f.position.copy(c[0].point).add(new P((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3)),f.userData={life:.5+Math.random()*.5,vy:2+Math.random()*3,vx:(Math.random()-.5)*4,vz:(Math.random()-.5)*4},Ae.add(f),os.push(f)}if(o.hp<=0){e0(o),tt=Math.min(100,tt+30),io++,document.getElementById("kills").textContent=" kills: "+io;const p=o.group.position.clone();for(let f=0;f<15;f++){const g=new ee(new hn(.04+Math.random()*.06,4,4),new Pt({color:f%2===0?16737792:16763904,transparent:!0,opacity:.9}));g.position.copy(p).add(new P((Math.random()-.5)*1,Math.random()*1,(Math.random()-.5)*1)),g.userData={life:.6+Math.random()*.5,vy:2+Math.random()*5,vx:(Math.random()-.5)*6,vz:(Math.random()-.5)*6},Ae.add(g),ls.push(g)}}break}}if(!r){const o=ln.intersectObjects(Yn,!0);if(o.length>0){const l=o[0].point,c=((a=o[0].face)==null?void 0:a.normal)||new P(0,1,0),u=new ee(new hn(.04,4,4),new Pt({color:273}));u.position.copy(l).addScaledVector(c,.005),u.userData={life:8},Ae.add(u),vr.push(u)}}}function i0(i){for(let e=ss.length-1;e>=0;e--){const t=ss[e];t.userData.life-=i,t.userData.life<=0?(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),ss.splice(e,1)):(t.position.y+=t.userData.vy*i,t.position.x+=t.userData.vx*i,t.position.z+=t.userData.vz*i,t.material.opacity=t.userData.life*1.5,t.scale.addScalar(i*2))}for(let e=as.length-1;e>=0;e--){const t=as[e];t.userData.life-=i,t.userData.life<=0?(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),as.splice(e,1)):(t.userData.vy+=-15*i,t.position.y+=t.userData.vy*i,t.position.x+=t.userData.vx*i,t.position.z+=t.userData.vz*i,t.rotation.x+=t.userData.rotV*i,t.position.y<0&&(t.position.y=0,t.userData.vy*=-.3,t.userData.vx*=.5,t.userData.vz*=.5))}for(let e=os.length-1;e>=0;e--){const t=os[e];t.userData.life-=i,t.userData.life<=0?(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),os.splice(e,1)):(t.userData.vy+=-10*i,t.position.y+=t.userData.vy*i,t.position.x+=t.userData.vx*i,t.position.z+=t.userData.vz*i,t.position.y<0&&(t.position.y=0),t.material.opacity=t.userData.life*2)}for(let e=ls.length-1;e>=0;e--){const t=ls[e];t.userData.life-=i,t.userData.life<=0?(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),ls.splice(e,1)):(t.userData.vy+=-5*i,t.position.y+=t.userData.vy*i,t.position.x+=t.userData.vx*i,t.position.z+=t.userData.vz*i,t.material.opacity=t.userData.life*1.5,t.scale.addScalar(i))}for(let e=vr.length-1;e>=0;e--){const t=vr[e];t.userData.life-=i,t.userData.life<=0?(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),vr.splice(e,1)):t.material.opacity=Math.max(0,t.userData.life/8*.7)}for(let e=cs.length-1;e>=0;e--){const t=cs[e];t.userData.life-=i,t.userData.life<=0&&(Ae.remove(t),t.geometry.dispose(),t.material.dispose(),cs.splice(e,1))}}const r0=new Om;let fa=!1;const Jr=[];document.addEventListener("keydown",i=>{i.code==="KeyC"&&(fa=!fa,fa?(Yn.forEach(e=>{const t=new mi().setFromObject(e),n=new Hm(t,65280);Ae.add(n),Jr.push(n)}),console.log("Debug ON -",Jr.length,"boxes")):(Jr.forEach(e=>{Ae.remove(e)}),Jr.length=0,console.log("Debug OFF")))});function Rc(){requestAnimationFrame(Rc);const i=Math.min(r0.getDelta(),.05);ca-=i,ua-=i,ha-=i;for(const _ of li)_.group.position.y=.15+Math.sin(_.bobPhase=(_.bobPhase||0)+i*2)*.04;for(const _ of ci)_.group.position.y=.15+Math.sin(_.bobPhase+=i*2)*.05,_.group.rotation.y+=i;ca<=0&&oi.length<6&&(Ym(),ca=10+Math.random()*5);for(const _ of oi)_.group.position.y=.15+Math.sin(_.bobPhase=(_.bobPhase||0)+i*2)*.03;ua<=0&&li.length<4&&(Km(),ua=12+Math.random()*6),ha<=0&&ci.length<2&&(Zm(),ha=25+Math.random()*10);for(let _=oi.length-1;_>=0;_--){const x=oi[_],m=x.pos.x-ke.position.x,h=x.pos.z-ke.position.z;Math.sqrt(m*m+h*h)<2&&(tt=Math.min(100,tt+5),St=Math.min(100,St+20),document.getElementById("health").textContent="HP "+tt,document.getElementById("armor").textContent="🛡 "+St,Ae.remove(x.group),oi.splice(_,1))}for(let _=li.length-1;_>=0;_--){const x=li[_],m=x.pos.x-ke.position.x,h=x.pos.z-ke.position.z;Math.sqrt(m*m+h*h)<1.5&&(tt=Math.min(100,tt+25),document.getElementById("health").textContent="HP "+tt,document.getElementById("health").style.color=tt<30?"#f33":tt<60?"#fa0":"#0f0",Ae.remove(x.group),li.splice(_,1))}for(let _=ci.length-1;_>=0;_--){const x=ci[_],m=x.pos.x-ke.position.x,h=x.pos.z-ke.position.z;Math.sqrt(m*m+h*h)<1.5&&(_r=10,Ae.remove(x.group),ci.splice(_,1))}Qm(i),i0(i),Vi>0&&(Vi-=i),ki+=i,ki>10&&St<50&&(St=Math.min(50,St+i*3),document.getElementById("armor").textContent="🛡 "+Math.floor(St),document.getElementById("health").style.color=tt<30?"#f33":tt<60?"#fa0":"#0f0"),di>0&&(di-=i),_r>0&&(_r-=i);const e=ke.position.distanceTo(new P(3,.9,22)),t=ke.position.distanceTo(new P(0,.9,-4)),n=ke.position.distanceTo(new P(-42,.9,-28)),r=ke.position.distanceTo(new P(35,.9,-22)),a=ke.position.distanceTo(new P(-12,.9,35));if(document.getElementById("ammoHint").style.display=e<2.5||t<2.5||n<2.5||r<2.5||a<2.5?"block":"none",(e<2.5||t<2.5||n<2.5||r<2.5||a<2.5)&&window.PK.has("KeyF")&&(on=jt[qt].mag,Rn=jt[qt].reserve,document.getElementById("ammo").textContent=jt[qt].name+" "+on+" / "+Rn),!Gi){Et.clear(),Et.render(Ae,ke);return}{const _=ke.position,x=_.y-ro+.05;ln.set(new P(_.x,x,_.z),new P(0,-1,0));const m=ln.intersectObjects(Yn,!1);pr=m.length>0&&m[0].distance<.6}window.PK.has("Space")&&pr&&(kn=6,pr=!1),pr?kn<0&&(kn=0):kn+=-15*i;let o=0,l=0;window.PK.has("KeyW")&&l++,window.PK.has("KeyS")&&l--,window.PK.has("KeyD")&&o++,window.PK.has("KeyA")&&o--;let c=0,u=0;if(o||l){const _=Math.sqrt(o*o+l*l);o/=_,l/=_;const x=10*(window.PK.has("ShiftLeft")||window.PK.has("ShiftRight")?1.6:1)*(_r>0?1.6:1),m=ke.quaternion,h=new P(0,0,-1).applyQuaternion(m);h.y=0,h.normalize();const b=new P(1,0,0).applyQuaternion(m);b.y=0,b.normalize(),c=(h.x*l+b.x*o)*x*i,u=(h.z*l+b.z*o)*x*i}const d=kn*i,p=Ac,f=ke.position;da(f.x+c,f.y,f.z,p)||(f.x+=c);const g=f.y+d;da(f.x,g,f.z,p)?(d<0&&(pr=!0),kn=0):f.y=g,da(f.x,f.y,f.z+u,p)||(f.z+=u),f.x=Math.max(-70,Math.min(70,f.x)),f.z=Math.max(-70,Math.min(70,f.z));{const _=ke.position,x=ke.quaternion,m=new P(.38,-.3,-.55).applyQuaternion(x);us.position.copy(_).add(m),us.quaternion.copy(x).multiply(new er().setFromAxisAngle(new P(0,1,0),-.08))}if(Math.abs(Fi.rotation.x)>5e-4&&(Fi.rotation.x+=(0-Fi.rotation.x)*Math.min(i*10,1)),Oi.material.opacity>0&&(Oi.material.opacity=Math.max(0,Oi.material.opacity-i*14)),Ni>0&&(Ni-=i),Ii){$r+=i;const _=jt[qt];if($r>=_.reloadT){const x=_.mag-on,m=Math.min(x,Rn);on+=m,Rn-=m,Ii=!1,hs.position.y=-.05,document.getElementById("ammo").textContent=_.name+" "+on+" / "+Rn}}if(window.PK.has("KeyR")&&!Ii&&on<jt[qt].mag&&Rn>0&&(Ii=!0,$r=0,hs.position.y=-.15),ys&&Ni<=0&&!Ii&&!Mt&&n0(),Mt){Mt.progress+=i;const _=Mt.progress/Mt.duration;if(_<.5){const x=1-_*2;dt[Mt.old].group.scale.setScalar(x),dt[Mt.old].group.position.y=-_*.3}else{if(!Mt.switched){Mt.switched=!0,dt[Mt.old].group.visible=!1,dt[Mt.old].group.scale.setScalar(1),dt[Mt.old].group.position.y=0;const x=Mt.new;dt[x].group.visible=!0,dt[x].group.scale.setScalar(0),qt=x,us=dt[x].group,Fi=dt[x].recoilG,Oi=dt[x].flash,hs=dt[x].mag,Ii=!1,$r=0,on=jt[x].mag,Rn=jt[x].reserve,Ni=.3,document.getElementById("ammo").textContent=jt[x].name+" "+on+" / "+Rn}dt[Mt.new].group.scale.setScalar(s),dt[Mt.new].group.position.y=-(.5-_)*.3}_>=1&&(dt[Mt.new].group.scale.setScalar(1),dt[Mt.new].group.position.y=0,Mt=null)}tt<=0&&!document.getElementById("deathScreen").classList.contains("show")&&(tt=0,document.getElementById("deathScreen").classList.add("show"),document.exitPointerLock(),Gi=!1),di>0?Et.domElement.style.boxShadow="inset 0 0 80px rgba(255,0,0,0.5)":Et.domElement.style.boxShadow="none";{const _=document.getElementById("minimap");if(_){const x=_.getContext("2d"),m=160,h=70;x.clearRect(0,0,m,m),x.fillStyle="rgba(0,0,0,.6)",x.fillRect(0,0,m,m),x.strokeStyle="rgba(255,255,255,.2)",x.strokeRect(0,0,m,m);const b=R=>Math.max(5,Math.min(m-5,(R+h)/h/2*m)),A=R=>Math.max(5,Math.min(m-5,(R+h)/h/2*m));x.fillStyle="#ff0",[[3,22],[0,-4],[-42,-28],[35,-22],[-12,35]].forEach(([R,U])=>{x.beginPath(),x.arc(b(R),A(U),3,0,Math.PI*2),x.fill()});for(const R of _i)R.alive&&(x.fillStyle="#f33",x.fillRect(b(R.group.position.x)-2,A(R.group.position.z)-2,4,4));const E=new en().setFromQuaternion(ke.quaternion),F=b(ke.position.x),C=A(ke.position.z);x.save(),x.translate(F,C),x.rotate(-E.y),x.fillStyle="#0f0",x.beginPath(),x.moveTo(0,-6),x.lineTo(-4,4),x.lineTo(4,4),x.closePath(),x.fill(),x.restore()}}Et.clear(),Et.render(Ae,ke),Et.clearDepth(),Et.render(Ts,ke)}window.addEventListener("resize",()=>{ke.aspect=innerWidth/innerHeight,ke.updateProjectionMatrix(),Et.setSize(innerWidth,innerHeight)});Rc();console.log("Game started");
