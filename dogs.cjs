const fs=require('fs');
let c=fs.readFileSync('dust2-fps/main.js','utf8');

// Dog creation function
const dogFn=`
function createDog(x,z,clr){const g=new THREE.Group();g.position.set(x,0.6,z);const col=clr||0x8B6914;const body=new THREE.Mesh(new THREE.BoxGeometry(0.5,0.3,0.8),new THREE.MeshStandardMaterial({color:col,roughness:0.6}));body.position.y=0.35;body.castShadow=true;g.add(body);const head=new THREE.Mesh(new THREE.BoxGeometry(0.25,0.2,0.25),new THREE.MeshStandardMaterial({color:col,roughness:0.5}));head.position.set(0,0.5,0.4);head.castShadow=true;g.add(head);const snout=new THREE.Mesh(new THREE.BoxGeometry(0.12,0.1,0.15),new THREE.MeshStandardMaterial({color:0x333,roughness:0.5}));snout.position.set(0,0.45,0.52);g.add(snout);for(let s=-1;s<=1;s+=2){const leg=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,0.35,6),new THREE.MeshStandardMaterial({color:0x222,roughness:0.7}));leg.position.set(s*0.15,0.15,s*0.2);leg.castShadow=true;g.add(leg)}const tail=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.05,0.3,6),new THREE.MeshStandardMaterial({color:col,roughness:0.6}));tail.position.set(0,0.45,-0.45);tail.rotation.x=0.8;g.add(tail);const ear1=new THREE.Mesh(new THREE.ConeGeometry(0.06,0.12,4),new THREE.MeshStandardMaterial({color:0x333,roughness:0.5}));ear1.position.set(0.1,0.62,0.35);ear1.rotation.z=-0.3;g.add(ear1);const ear2=new THREE.Mesh(new THREE.ConeGeometry(0.06,0.12,4),new THREE.MeshStandardMaterial({color:0x333,roughness:0.5}));ear2.position.set(-0.1,0.62,0.35);ear2.rotation.z=0.3;g.add(ear2);worldScene.add(g);return{group:g,body,head,isMelee:true,isDog:true,hp:40,alive:true,respawnTimer:0,state:'chase',shootTimer:0.5+Math.random()*0.5,sightRange:999,attackRange:2.5,speed:11,velX:0,velZ:0,vy:0,stuckT:0}}
[[-30,5,0x8B4513],[-10,15,0xA0522D],[30,-10,0x696969]].forEach(function(a){var x=a[0],z=a[1],clr=a[2];enemies.push(createDog(x,z,clr))});
`;

c=c.replace(
'enemySpawns.forEach(function(a){var x=a[0],z=a[1],r=a[2];var ox=x+(Math.random()-0.5)*6,oz=z+(Math.random()-0.5)*6;enemies.push(createEnemy(ox,oz,r))});',
dogFn+'enemySpawns.forEach(function(a){var x=a[0],z=a[1],r=a[2];var ox=x+(Math.random()-0.5)*6,oz=z+(Math.random()-0.5)*6;enemies.push(createEnemy(ox,oz,r))});'
);

// Update shoot for dogs
c=c.replace(
'const parts=en.isMelee?[en.body,en.head,en.armL,en.armR,en.legL,en.legR]:[en.body,en.head,en.armL,en.armR,en.legL,en.legR,en.gun];',
'const parts=en.isDog?[en.body,en.head]:en.isMelee?[en.body,en.head,en.armL,en.armR,en.legL,en.legR]:[en.body,en.head,en.armL,en.armR,en.legL,en.legR,en.gun];'
);

// Dog attack damage
c=c.replace(
'en.shootTimer=0.7+Math.random()*0.3;if(dist<3){const rd=12+Math.floor(Math.random()*12);',
'en.shootTimer=en.isDog?0.4+Math.random()*0.2:0.7+Math.random()*0.3;if(dist<(en.isDog?2.5:3)){const rd=en.isDog?8+Math.floor(Math.random()*8):12+Math.floor(Math.random()*12);'
);

fs.writeFileSync('dust2-fps/main.js',c,'utf8');
console.log('Dogs added');
