import * as THREE from 'three';

    const dbg = (s) => { document.getElementById('debug').innerHTML = s; };

    // ==================== 娓叉煋鍣?====================
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.autoClear = false;
    document.body.appendChild(renderer.domElement);

    const worldScene = new THREE.Scene();
    const weaponScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(0, 0.9, 25);

    // ==================== 鏉愯川宸ュ叿 ====================
    const std = (c, r = 0.7) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
    const mat = {
      sand:       std(0xd4b871, 0.9),
      concrete:   std(0xbfa87a, 0.6),
      wallA:      std(0xc9b080, 0.65),
      wallB:      std(0xb09868, 0.65),
      building:   std(0xd9c596, 0.55),
      darkWall:   std(0x7a6a4a, 0.7),
      roof:       std(0x8b7355, 0.85),
      crate:      std(0x8b6914, 0.55),
      redCrate:   std(0x7a3a2a, 0.5),
      platform:   std(0xa09070, 0.45),
      floorCT:    std(0xb5a070, 0.8),
      floorT:     std(0xbf9e5a, 0.8),
      floorMid:   std(0xc4a86a, 0.8),
      floorLongA: std(0xbfa060, 0.8),
      floorB:     std(0x9b8b6b, 0.8),
      metal:      std(0x4a4a4a, 0.3),
    };

    // ==================== 鍦板浘鏋勫缓 ====================
    const wallMeshes = [];

    function add(m) { worldScene.add(m); wallMeshes.push(m); return m; }
    function box(w, h, d, mat) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.castShadow = true; m.receiveShadow = true; return m; }
    function W(w, h, d, mat, x, y, z) { const m = box(w, h, d, mat); m.position.set(x, y, z); return add(m); }
    function F(w, d, mat, x, y, z) { return W(w, 0.15, d, mat, x, y, z); }
    function crate(s, h, x, y, z, matOverride) {
      const m = box(s, h, s, matOverride || mat.crate); m.position.set(x, y + h / 2, z); return add(m);
    }
    function barrel(x, y, z) {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 0.85, 10), mat.redCrate);
      m.position.set(x, y + 0.42, z); m.castShadow = true; m.receiveShadow = true; return add(m);
    }
    function building(x1, z1, w, d, h, wallMat, floorMat) {
      const x = x1 + w / 2, z = z1 + d / 2, hy = h / 2;
      // 鍦版澘
      F(w, d, floorMat, x, -0.05, z);
      // 鍥涢潰澧?
      W(w, h, 0.4, wallMat, x, hy, z1);           // 鍓?
      W(w, h, 0.4, wallMat, x, hy, z1 + d);        // 鍚?
      W(0.4, h, d, wallMat, x1, hy, z);            // 宸?
      W(0.4, h, d, wallMat, x1 + w, hy, z);        // 鍙?
      // 灞嬮《
      const roof = box(w + 0.4, 0.2, d + 0.4, mat.roof);
      roof.position.set(x, h + 0.1, z);
      worldScene.add(roof);
    }
    // 甯﹂棬娲炵殑寤虹瓚
    function buildingWithDoor(x1, z1, w, d, h, wallMat, floorMat, doorSide, doorW, doorH) {
      const x = x1 + w / 2, z = z1 + d / 2, hy = h / 2;
      F(w, d, floorMat, x, -0.05, z);
      // 鏈夐棬娲炵殑閭ｉ潰澧欏垎涓ゆ
      if (doorSide === 'front') {
        const leftW = (w - doorW) / 2;
        if (leftW > 0.3) W(leftW, h, 0.4, wallMat, x1 + leftW / 2, hy, z1);
        W(w - leftW - doorW, h, 0.4, wallMat, x1 + leftW + doorW + (w - leftW - doorW) / 2, hy, z1);
        W(doorW, h - doorH, 0.4, wallMat, x1 + leftW + doorW / 2, h - (h - doorH) / 2, z1); // 闂ㄦィ
      }
      if (doorSide === 'back') {
        const leftW = (w - doorW) / 2;
        if (leftW > 0.3) W(leftW, h, 0.4, wallMat, x1 + leftW / 2, hy, z1 + d);
        W(w - leftW - doorW, h, 0.4, wallMat, x1 + leftW + doorW + (w - leftW - doorW) / 2, hy, z1 + d);
        W(doorW, h - doorH, 0.4, wallMat, x1 + leftW + doorW / 2, h - (h - doorH) / 2, z1 + d);
      }
      // 鍏朵粬涓夐潰澧欏畬鏁?
      if (doorSide !== 'left')  W(0.4, h, d, wallMat, x1, hy, z);
      if (doorSide !== 'right') W(0.4, h, d, wallMat, x1 + w, hy, z);
      if (doorSide !== 'front') W(w, h, 0.4, wallMat, x, hy, z1);
      if (doorSide !== 'back')  W(w, h, 0.4, wallMat, x, hy, z1 + d);
    }

    // ================ 澶╃┖ ================
    const skyGeo = new THREE.SphereGeometry(100, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      vertexShader: 'varying vec3 vP; void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader: 'varying vec3 vP; void main(){float h=normalize(vP).y;vec3 s=mix(vec3(0.80,0.86,0.93),vec3(0.50,0.70,0.88),smoothstep(0.0,0.55,h));gl_FragColor=vec4(s,1.0);}'
    });
    worldScene.add(new THREE.Mesh(skyGeo, skyMat));

    // ================ 鍑虹敓鐐规爣璁?================
    const spawnMarker = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.8, 0.05, 32),
      new THREE.MeshStandardMaterial({ color: 0x3388ff, roughness: 0.3, emissive: 0x1144aa, emissiveIntensity: 0.6 })
    );
    spawnMarker.position.set(0, 0.01, 25);
    spawnMarker.receiveShadow = true;
    worldScene.add(spawnMarker);
    // 澶栧湀鍏夌幆
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.8, 1.0, 32),
      new THREE.MeshBasicMaterial({ color: 0x3388ff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.03, 25);
    worldScene.add(ring);

    // ================ 寮硅嵂绠?================
    const ammoCrate = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.7, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x2ecc40, roughness: 0.4, emissive: 0x115511, emissiveIntensity: 0.4 })
    );
    ammoCrate.position.set(3, 0.35, 22);
    ammoCrate.castShadow = true; ammoCrate.receiveShadow = true;
    worldScene.add(ammoCrate);
    // 寮硅嵂绠辨爣璁扮幆
    const ammoRing = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.55, 32),
      new THREE.MeshBasicMaterial({ color: 0x2ecc40, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
    );
    ammoRing.rotation.x = -Math.PI / 2;
    ammoRing.position.set(3, 0.02, 22);
    worldScene.add(ammoRing);

    // ================ 涓诲湴闈?================
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), mat.sand);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.06;
    ground.receiveShadow = true;
    add(ground);

    // 鍦伴潰缃戞牸
    const grid = new THREE.PolarGridHelper(75, 60, 30, 64, 0xc4a86a, 0xc4a86a);
    grid.position.y = 0.005;
    worldScene.add(grid);

    // ================ CT 鍑虹敓鐐?(宸︿笅, 鏈夐棬娲炴湞涓矾) ================
    buildingWithDoor(-38, -27, 16, 12, 3.2, mat.building, mat.floorCT, 'front', 5, 3.2);
    // 闂ㄥ彛鍙伴樁
    for (let i = 0; i < 3; i++) {
      const s = box(5.5, 0.2, 1.2, mat.concrete);
      s.position.set(-30, 0.1 + i * 0.2, -27.6 - i * 1.2);
      add(s);
    }

    // ================ T 鍑虹敓鐐?(鍙充笅, 鏈夐棬娲炴湞涓矾) ================
    buildingWithDoor(24, -27, 15, 11, 3.2, mat.building, mat.floorT, 'front', 5, 3.2);
    for (let i = 0; i < 3; i++) {
      const s = box(5.5, 0.2, 1.2, mat.concrete);
      s.position.set(31.5, 0.1 + i * 0.2, -27.6 - i * 1.2);
      add(s);
    }

    // ================ 涓矾 (Mid) ================
    // 鍦伴潰
    F(30, 18, mat.floorMid, 0, -0.05, 2);
    // 涓や晶涓诲
    W(16, 4.5, 0.5, mat.wallA, -9, 2.25, -9);
    W(16, 4.5, 0.5, mat.wallA, 9, 2.25, -9);
    // 涓棬鍙屽紑闂ㄦ
    W(0.6, 4.5, 0.5, mat.darkWall, -1.5, 2.25, 0.5);
    W(0.6, 4.5, 0.5, mat.darkWall, 1.5, 2.25, 0.5);
    W(3.6, 0.3, 0.5, mat.darkWall, 0, 4.35, 0.5);
    // 涓矾 鈫?CT 鏂瑰悜澧?
    W(0.5, 3.5, 16, mat.wallB, -14, 1.75, -1);
    // 涓矾 鈫?B 杩炴帴澧?
    W(0.5, 3.5, 14, mat.wallB, -19, 1.75, -16);

    // ================ Long A (A澶ч亾) ================
    F(42, 10, mat.floorLongA, 2, -0.05, 16);
    // 涓や晶寤虹瓚澧欙紙妯℃嫙琛楁櫙锛?
    W(42, 3.5, 0.5, mat.wallA, 2, 1.75, 11);     // 涓嬩晶
    W(42, 3.5, 0.5, mat.wallA, 2, 1.75, 21);     // 涓婁晶
    // 绐楁埛瑁呴グ 鈥?涓婁晶澧?
    for (let i = 0; i < 5; i++) {
      const wx = -15 + i * 8;
      const win = box(2.5, 1.5, 0.15, mat.darkWall);
      win.position.set(wx, 2.2, 20.75);
      worldScene.add(win); // 涓嶇鎾烇紝绾楗?
    }

    // ================ A 骞冲彴 (A Site) ================
    F(12, 9, mat.platform, 24, 0.6, 20);
    // 骞冲彴鎶ゆ爮
    W(12, 1.2, 0.3, mat.wallA, 24, 1.2, 24.5);
    W(12, 1.2, 0.3, mat.wallA, 24, 1.2, 15.5);
    W(0.3, 1.2, 5, mat.wallA, 30, 1.2, 20);  // 鍙虫姢鏍?
    // A 鐐规帺浣擄紙Goose浣?+ 榛樿浣嶇瀛愶級
    crate(1.5, 1.6, 22, 0.6, 18);
    crate(1.5, 1.6, 26, 0.6, 19);
    crate(2, 1.1, 29, 0.6, 21, mat.redCrate);
    crate(1.2, 1.3, 24.5, 0.6, 22.5);
    // 浠?A 澶ч亾涓?A 骞冲彴鐨勫彴闃?
    for (let i = 0; i < 4; i++) {
      const s = box(4, 0.2, 2, mat.concrete);
      s.position.set(18 + i * 2, 0.15 + i * 0.15, 19);
      add(s);
    }

    // ================ A 灏忛亾 (Short A / Catwalk) ================
    // CT 涓矾 鈫?灏忛亾鍙伴樁
    for (let i = 0; i < 7; i++) {
      const s = box(2, 0.25, 1.4, mat.concrete);
      s.position.set(-15 + i * 2, 0.15 + i * 0.3, 9);
      add(s);
    }
    // 灏忛亾鎶ゆ爮
    W(0.3, 2.5, 12, mat.wallB, -15.5, 1.4, 8);
    // 灏忛亾 鈫?A 骞冲彴鍧￠亾
    for (let i = 0; i < 5; i++) {
      const s = box(3, 0.2, 2, mat.concrete);
      s.position.set(-1 + i * 3, 2.2 + i * 0.12, 14);
      add(s);
    }
    // 涓?A 骞冲彴鏈€鍚庡嚑绾?
    for (let i = 0; i < 3; i++) {
      const s = box(4, 0.2, 2.5, mat.platform);
      s.position.set(13 + i * 3, 2.8 + i * 0.1, 17);
      add(s);
    }

    // ================ B 娲?(B Tunnels) ================
    // 闅ч亾宸﹀彸澧?+ 椤剁洊妯℃嫙闅ч亾鎰?
    W(0.5, 3.5, 22, mat.darkWall, 8, 1.75, -6);
    W(0.5, 3.5, 22, mat.darkWall, 19, 1.75, -6);
    // 闅ч亾椤?
    for (let i = 0; i < 6; i++) {
      const top = box(10.5, 0.15, 3.5, mat.darkWall);
      top.position.set(13.5, 3.55, -18 + i * 3.5);
      worldScene.add(top); // 绾瑙?
    }
    // 闅ч亾鍦伴潰
    F(10.5, 22, mat.floorB, 13.5, -0.05, -6);
    // 闅ч亾涓嬪潯鍙伴樁
    for (let i = 0; i < 5; i++) {
      const s = box(10, 0.2, 1.5, mat.concrete);
      s.position.set(13.5, -0.3 - i * 0.18, -13 - i * 1.5);
      add(s);
    }

    // ================ B 骞冲彴 (B Site) ================
    F(10, 10, mat.platform, -13, 0.35, -30);
    // 鎶ゆ爮
    W(10, 1.5, 0.3, mat.wallA, -13, 1.1, -35);
    W(10, 1.5, 0.3, mat.wallA, -13, 1.1, -25);
    W(0.3, 1.5, 6, mat.wallA, -18, 1.1, -30); // 宸?
    // 鎺╀綋
    crate(1.5, 1.6, -15, 0.35, -28);
    crate(1.5, 1.6, -11, 0.35, -29);
    crate(2, 1.1, -14, 0.35, -33, mat.redCrate);
    // 鍙伴樁涓?B 骞冲彴
    for (let i = 0; i < 3; i++) {
      const s = box(3, 0.2, 2, mat.concrete);
      s.position.set(-13, -0.1 + i * 0.15, -23 - i * 1.5);
      add(s);
    }

    // ================ A 鍧?(Pit @ Long A) ================
    const pitF = box(10, 0.1, 7, mat.floorLongA);
    pitF.position.set(14, -0.85, 18);
    add(pitF);
    W(10, 1.2, 0.4, mat.wallA, 14, 0.15, 21.5);
    W(10, 1.2, 0.4, mat.wallA, 14, 0.15, 14.5);
    W(0.4, 1.2, 7, mat.wallA, 19, 0.15, 18);
    W(0.4, 1.2, 7, mat.wallA, 9, 0.15, 18);
    // 鍑哄潙鍙伴樁
    for (let i = 0; i < 3; i++) {
      const s = box(2, 0.2, 1.5, mat.concrete);
      s.position.set(16 + i * 2, -0.85 + i * 0.3, 21.2);
      add(s);
    }

    // ================ 鎴樼暐鎺╀綋鏁ｅ竷 ================
    const crates = [
      // 涓矾
      [2, 0, 4], [5, 0, 6], [-4, 0, -4], [-7, 0, -5],
      // A 澶ч亾
      [6, 0, 15], [10, 0, 16], [16, 0, 15], [20, 0, 17],
      // B 鍖洪檮杩?
      [-6, 0, -17], [0, 0, -21], [-4, 0, -20],
      // CT 涓矾
      [-18, 0, 4], [-21, 0, -2], [-26, 0, 0],
      // T 涓矾
      [20, 0, -4], [24, 0, -7], [18, 0, -11],
      // 鍏朵粬
      [-14, 0, 15], [4, 0, -14], [-10, 0, 10],
      [-28, 0, 10], [27, 0, 6], [15, 0, -20],
      [-23, 0, -12], [0, 0, 14], [30, 0, -2],
    ];
    crates.forEach(([x, y, z]) => crate(0.7 + Math.random() * 0.9, 0.6 + Math.random() * 0.9, x, y, z));

    // ================ CT鈫払 杩炴帴閫氶亾 ================
    F(4, 14, mat.floorB, -20, -0.05, -22);
    W(4, 2.5, 0.4, mat.darkWall, -20, 1.25, -15);
    W(4, 2.5, 0.4, mat.darkWall, -20, 1.25, -29);
    W(0.4, 2.5, 14, mat.darkWall, -22, 1.25, -22);
    W(0.4, 2.5, 14, mat.darkWall, -18, 1.25, -22);

    // ================ 涓矾鈫払 鏂滃潯 ================
    for (let i = 0; i < 5; i++) {
      const s = box(5, 0.2, 1.8, mat.concrete);
      s.position.set(-16, -0.3 - i * 0.2, -8 - i * 1.8);
      add(s);
    }

    // ================ 棰濆鎺╀綋 ================
    crate(1.5, 1.2, -18, 0, -20);
    crate(1.5, 1.2, -22, 0, -24);
    crate(1.2, 1.0, 12, 0, -3);

    // ================ 娌规《 ================
    [[-10, 0, 22], [30, 0.6, 18], [-3, 0, -24], [19, 0, 0], [-27, 0, -10], [7, 0, -28],
     [24, 0.6, 22], [-17, 0, 23], [5, 0, -8], [-24, 0, -7]].forEach(([x, y, z]) => barrel(x, y, z));

    // ================ 娌欒鍫?================
    function sandbags(x, y, z, n) {
      for (let i = 0; i < n; i++) {
        const ox = (Math.random() - 0.5) * 0.5;
        const oz = (Math.random() - 0.5) * 0.5;
        const row = Math.floor(i / 3);
        const bag = box(0.65, 0.22, 0.35, mat.sand);
        bag.position.set(x + ox, y + row * 0.2 + 0.11, z + oz);
        add(bag);
      }
    }
    sandbags(-20, 0.15, 20, 9);
    sandbags(23, 0.6, 23, 6);
    sandbags(-15, 0.35, -32, 6);
    sandbags(16, -0.85, 16, 4);

    // ================ 瑗夸晶宸ヤ笟鍖?(CT澶? ================
    F(18, 14, mat.floorCT, -50, -0.05, -15);
    W(18, 4, 0.5, mat.darkWall, -50, 2, -22);
    W(18, 4, 0.5, mat.darkWall, -50, 2, -8);
    W(0.5, 4, 14, mat.darkWall, -59, 2, -15);
    W(0.5, 4, 7, mat.darkWall, -41, 2, -18);
    W(0.5, 4, 5, mat.darkWall, -41, 2, -12);
    crate(1.5, 1.5, -55, 0, -18);
    crate(1.5, 1.5, -52, 0, -12);
    crate(1.2, 1.0, -47, 0, -20);
    barrel(-48, 0, -16); barrel(-53, 0, -14);

    // ================ 涓滀晶甯傞泦 (T澶? ================
    F(16, 16, mat.floorT, 42, -0.05, -18);
    W(8, 3.5, 0.5, mat.wallA, 42, 1.75, -26);
    W(8, 3.5, 0.5, mat.wallA, 42, 1.75, -10);
    W(0.5, 3.5, 8, mat.wallA, 38, 1.75, -22);
    W(0.5, 3.5, 8, mat.wallA, 46, 1.75, -14);
    W(8, 3.5, 0.5, mat.wallA, 46, 1.75, -18);
    for (let i = 0; i < 4; i++) { crate(1.0 + Math.random() * 0.5, 1.0 + Math.random() * 0.5, 43 + i * 3, 0, -14); }
    barrel(48, 0, -22); barrel(44, 0, -12);

    // ================ 鍗椾晶鍚庤 (Mid涓嬫柟) ================
    F(24, 8, mat.floorMid, -6, -0.05, -38);
    W(24, 3, 0.5, mat.wallB, -6, 1.5, -42);
    W(24, 3, 0.5, mat.wallB, -6, 1.5, -34);
    W(0.5, 3, 8, mat.wallB, -18, 1.5, -38);
    W(0.5, 3, 8, mat.wallB, 6, 1.5, -38);
    crate(1.5, 1.2, -10, 0, -37);
    crate(1.5, 1.2, -2, 0, -40);
    crate(1.0, 1.0, 4, 0, -36);
    sandbags(-8, 0.1, -40, 6);

    // ================ A 澶栧欢 (A骞冲彴鍚庢柟) ================
    W(14, 3, 0.5, mat.wallB, 26, 1.5, 32);
    W(0.5, 3, 8, mat.wallB, 19, 1.5, 28);
    W(0.5, 3, 8, mat.wallB, 33, 1.5, 28);
    F(14, 8, mat.floorLongA, 26, -0.05, 28);
    crate(2, 1.4, 23, 0, 30, mat.redCrate);
    crate(1.5, 1.2, 29, 0, 31);
    barrel(27, 0, 33); barrel(31, 0, 30);

    // ================ 鍏夌収 ================
    worldScene.add(new THREE.AmbientLight(0xffeedd, 0.7));
    const sun = new THREE.DirectionalLight(0xfff5e0, 1.5);
    sun.position.set(40, 60, 15);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 180;
    sun.shadow.camera.left = -90;
    sun.shadow.camera.right = 90;
    sun.shadow.camera.top = 90;
    sun.shadow.camera.bottom = -90;
    worldScene.add(sun);
    worldScene.add(new THREE.HemisphereLight(0x87ceeb, 0x8b6914, 0.4));

    dbg(`鍦板浘: ${wallMeshes.length} 纰版挒浣揱);

    // ==================== 姝﹀櫒 ====================
    const weaponGroup = new THREE.Group();
    const recoilG = new THREE.Group();
    weaponGroup.add(recoilG);

    function wp(geo, mat, x, y, z, rx) {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
      if (rx) m.rotation.x = rx; recoilG.add(m); return m;
    }
    const M = (c, r, ml) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: ml });
    wp(new THREE.BoxGeometry(0.06, 0.08, 0.32), M(0x2a2a2a, 0.3, 0.9), 0, 0, -0.22);
    wp(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 8), M(0x2a2a2a, 0.3, 0.9), 0, 0.02, -0.52, Math.PI / 2);
    wp(new THREE.BoxGeometry(0.07, 0.06, 0.16), M(0x5c3a1e, 0.55, 0.1), 0, 0, -0.42);
    const magMesh = wp(new THREE.BoxGeometry(0.04, 0.02, 0.13), M(0x1a1a1a, 0.4, 0.8), 0, -0.05, -0.18, -0.25);
    wp(new THREE.BoxGeometry(0.04, 0.1, 0.05), M(0x3a2010, 0.65, 0.1), 0, -0.06, -0.10, 0.3);
    wp(new THREE.BoxGeometry(0.04, 0.06, 0.14), M(0x5c3a1e, 0.55, 0.1), 0, 0.01, 0.06);
    wp(new THREE.BoxGeometry(0.02, 0.02, 0.01), M(0x1a1a1a, 0.4, 0.8), 0, 0.06, -0.10);
    wp(new THREE.BoxGeometry(0.015, 0.025, 0.01), M(0x1a1a1a, 0.4, 0.8), 0, 0.05, -0.6);
    wp(new THREE.CylinderGeometry(0.015, 0.018, 0.04, 8), M(0x1a1a1a, 0.4, 0.8), 0, 0.02, -0.68, Math.PI / 2);
    const flash = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 8),
      new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0, depthTest: false }));
    flash.rotation.x = Math.PI / 2; flash.position.set(0, 0.02, -0.74); recoilG.add(flash);
    weaponScene.add(weaponGroup);
    weaponScene.add(new THREE.AmbientLight(0xffffff, 1));
    const wl = new THREE.DirectionalLight(0xffffff, 1.2);
    wl.position.set(0.5, 1.5, -2);
    weaponScene.add(wl);

    // ==================== 鏁屼汉绯荤粺 ====================
    let playerHP = 100, playerArmor = 0;
    const enemies = [];
    const armorPacks = [];
    const armorSpawnPoints = [
      [0, 0, 22], [-5, 0, 18], [5, 0, 15], [-10, 0, 10],
      [10, 0, 8], [-15, 0, 0], [15, 0, -5], [-20, 0, -10],
      [20, 0, -18], [-25, 0, -15], [25, 0, -22], [-8, 0, -20],
      [-50, 0, -15], [-45, 0, -10], [45, 0, -22], [48, 0, -12],
      [-10, 0, -38], [2, 0, -40], [26, 0, 30], [30, 0, 28],
    ];
    let armorSpawnTimer = 3; // 棣栨蹇€熷埛鏂?

    // 棰勮宸￠€昏矾鐐?
    const patrolRoutes = [
      // CT 澶栫┖鍦?
      [{ x: -42, z: -20 }, { x: -45, z: -10 }, { x: -38, z: -8 }],
      // 涓矾 CT 渚?
      [{ x: -10, z: 0 }, { x: -18, z: 5 }, { x: -12, z: -3 }],
      // 涓矾 T 渚?
      [{ x: 10, z: -2 }, { x: 15, z: 5 }, { x: 8, z: -5 }],
      // T 澶栫┖鍦?
      [{ x: 42, z: -20 }, { x: 48, z: -14 }, { x: 38, z: -10 }],
      // 鍗椾晶鍚庤
      [{ x: -10, z: -36 }, { x: 2, z: -40 }, { x: -4, z: -34 }],
      // A 澶ч亾
      [{ x: 6, z: 15 }, { x: 14, z: 17 }, { x: 10, z: 13 }],
      // 瑗夸晶宸ヤ笟
      [{ x: -55, z: -18 }, { x: -50, z: -12 }, { x: -56, z: -10 }],
      // B 鍖哄鍥?
      [{ x: -8, z: -25 }, { x: -2, z: -22 }, { x: -10, z: -20 }],
    ];

    function createEnemy(x, z, routeIdx) {
      const group = new THREE.Group();
      group.position.set(x, 0.85, z);
      const skin = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.5 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x6b1a1a, roughness: 0.6 });
      // 韬綋
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.55, 0.3), skin);
      body.position.y = 0.75; body.castShadow = true;
      // 澶?
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), skin);
      head.position.y = 1.18; head.castShadow = true;
      // 鎵嬭噦
      const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4, 6), dark);
      armL.position.set(-0.22, 0.8, 0); armL.rotation.z = 0.2; armL.castShadow = true;
      const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4, 6), dark);
      armR.position.set(0.22, 0.8, 0); armR.rotation.z = -0.2; armR.castShadow = true;
      // AK 鏋?(鍙虫墜)
      const gun = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.25), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3, metalness: 0.8 }));
      gun.position.set(0.3, 0.85, 0.05); gun.rotation.x = -0.2; gun.castShadow = true;
      // 鑵?
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.12), dark);
      legL.position.set(-0.1, 0.25, 0); legL.castShadow = true;
      const legR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.12), dark);
      legR.position.set(0.1, 0.25, 0); legR.castShadow = true;

      group.add(body, head, armL, armR, gun, legL, legR);
      worldScene.add(group);

      return {
        group, head, body, armL, armR, gun, legL, legR,
        hp: 100, alive: true, respawnTimer: 0,
        state: 'patrol', // patrol | chase | attack | dead
        patrolIdx: 0, patrolForward: true,
        route: routeIdx != null ? patrolRoutes[routeIdx] : patrolRoutes[Math.floor(Math.random() * patrolRoutes.length)],
        shootTimer: 0.5 + Math.random() * 0.5,
        moveTimer: 0, stuckCheckX: x, stuckCheckZ: z, stuckTimer: 0,
        sightRange: 30, attackRange: 18,
        speed: 4,
        velX: 0, velZ: 0,
      };
    }

    // 鐢熸垚 6 涓晫浜?
    const enemySpawns = [
      // CT渚?(宸?
      [-36, -22, 0], [-28, -20, 1], [-50, -16, 0],
      // 涓矾
      [-6, -4, 2], [6, -4, 3],
      // T渚?(鍙?
      [30, -24, 4], [34, -20, 5], [46, -16, 5],
      // 鍗椾晶鍚庤
      [-8, -38, 2], [4, -36, 3],
    ];
    enemySpawns.forEach(([x, z, r]) => enemies.push(createEnemy(x, z, r)));

    // ---- 杩戞垬鏁屼汉 ----
    function createMeleeEnemy(x, z, routeIdx) {
      const group = new THREE.Group();
      group.position.set(x, 0.85, z);
      const skin = new THREE.MeshStandardMaterial({ color: 0x555566, roughness: 0.4 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.5 });
      // 鏇村．鐨勮韩浣?
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.35), skin);
      body.position.y = 0.78; body.castShadow = true;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), skin);
      head.position.y = 1.25; head.castShadow = true;
      // 澶ф嫵澶?
      const fistL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), dark);
      fistL.position.set(-0.28, 0.85, 0.05); fistL.castShadow = true;
      const fistR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), dark);
      fistR.position.set(0.28, 0.85, 0.05); fistR.castShadow = true;
      const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.35, 6), dark);
      armL.position.set(-0.28, 1.0, 0.05); armL.castShadow = true;
      const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.35, 6), dark);
      armR.position.set(0.28, 1.0, 0.05); armR.castShadow = true;
      const legL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.45, 0.14), dark);
      legL.position.set(-0.12, 0.28, 0); legL.castShadow = true;
      const legR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.45, 0.14), dark);
      legR.position.set(0.12, 0.28, 0); legR.castShadow = true;

      group.add(body, head, fistL, fistR, armL, armR, legL, legR);
      worldScene.add(group);

      return {
        group, body, head, fistL, fistR, armL, armR, legL, legR, isMelee: true,
        hp: 150, alive: true, respawnTimer: 0,
        state: 'patrol', patrolIdx: 0, patrolForward: true,
        route: patrolRoutes[Math.floor(Math.random() * patrolRoutes.length)],
        shootTimer: 0.8 + Math.random() * 1.0,
        sightRange: 28, attackRange: 3.5,
        speed: 3.0,
        velX: 0, velZ: 0,
      };
    }
    // 鐢熸垚 5 涓繎鎴樻晫浜?
    [[-20, 5, 0], [15, -15, 1], [-5, -22, 2], [-55, -14, 0], [48, -20, 5]].forEach(([x, z, r]) => enemies.push(createMeleeEnemy(x, z, r)));

    // 鍙椾激闂孩
    let damageFlash = 0;

    function updateEnemies(dt) {
      const pp = camera.position;
      const boxes = wallMeshes.map(getBox);

      for (const en of enemies) {
        if (!en.alive) {
          en.respawnTimer -= dt;
          if (en.respawnTimer <= 0) respawnEnemy(en);
          continue;
        }

        const g = en.group;
        const ex = g.position.x, ey = g.position.y, ez = g.position.z;
        const dx = pp.x - ex, dz = pp.z - ez;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const eFoot = ey, eHead = ey + 1.2;
        const eR = 0.25;

        // 瑙嗙嚎妫€娴嬶紙浠庢晫浜虹溂鐫涢珮搴﹀彂鍑猴級
        let canSee = false;
        if (dist < en.sightRange) {
          raycaster.set(
            new THREE.Vector3(ex, ey + 1.0, ez),
            new THREE.Vector3(pp.x - ex, pp.y - (ey + 1.0), pp.z - ez).normalize()
          );
          const hits = raycaster.intersectObjects(wallMeshes, true);
          canSee = (hits.length === 0 || hits[0].distance > dist - 0.8);
        }

        // 鐘舵€佸垏鎹紙鍔犳粸鍚庨伩鍏嶆姈鍔級
        if (canSee && dist < en.attackRange) en.state = 'attack';
        else if (canSee && dist < en.sightRange) en.state = 'chase';
        else if (!canSee || dist > en.sightRange + 3) en.state = 'patrol';

        // ---- 闈㈡湞鏂瑰悜锛堝钩婊戞棆杞級 ----
        let targetAngle;
        if (en.state === 'patrol') {
          const wp = en.route[en.patrolIdx];
          targetAngle = Math.atan2(wp.x - ex, wp.z - ez);
        } else {
          targetAngle = Math.atan2(dx, dz);
        }
        let angleDiff = targetAngle - g.rotation.y;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        g.rotation.y += angleDiff * Math.min(dt * 5, 1);

        // ---- 绉诲姩閫熷害 ----
        if (en.state === 'patrol') {
          // 鍚戝贰閫昏矾鐐圭Щ鍔?
          const wp = en.route[en.patrolIdx];
          const wdx = wp.x - ex, wdz = wp.z - ez;
          const wdist = Math.sqrt(wdx * wdx + wdz * wdz);
          if (wdist < 1.2) {
            en.patrolIdx = en.patrolForward ? en.patrolIdx + 1 : en.patrolIdx - 1;
            if (en.patrolIdx >= en.route.length) { en.patrolIdx = en.route.length - 2; en.patrolForward = false; }
            if (en.patrolIdx < 0) { en.patrolIdx = 1; en.patrolForward = true; }
          }
          en.velX = Math.sin(g.rotation.y) * en.speed * 0.7;
          en.velZ = -Math.cos(g.rotation.y) * en.speed * 0.7;
        } else if (en.state === 'chase') {
          en.velX = (dx / dist) * en.speed * 1.2;
          en.velZ = (dz / dist) * en.speed * 1.2;
        } else {
          en.velX = 0; en.velZ = 0;
        }

        // ---- 鏀诲嚮 ----
        if (en.state === 'attack') {
          en.shootTimer -= dt;
          if (en.shootTimer <= 0) {
            if (en.isMelee) {
              // 杩戞垬鏀诲嚮
              en.shootTimer = 0.8 + Math.random() * 0.4;
              if (dist < 3.0) {
                const rawDmg = 15 + Math.floor(Math.random() * 15);
                let hpDmg = rawDmg, armorDmg = 0;
                if (playerArmor > 0) { armorDmg = Math.min(playerArmor, Math.floor(rawDmg * 0.5)); hpDmg = rawDmg - armorDmg; playerArmor -= armorDmg; }
                playerHP = Math.max(0, playerHP - hpDmg);
                damageFlash = 0.3;
                document.getElementById('health').textContent = `HP ${playerHP}`;
                document.getElementById('health').style.color = playerHP < 30 ? '#f33' : playerHP < 60 ? '#fa0' : '#0f0';
                document.getElementById('armor').textContent = `馃洝 ${playerArmor}`;
              }
            } else {
              // 杩滅▼灏勫嚮
              en.shootTimer = 0.4 + Math.random() * 0.6;
              const bdir = new THREE.Vector3(pp.x - ex, pp.y - (ey + 1.0), pp.z - ez).normalize();
              bdir.x += (Math.random() - 0.5) * 0.06;
              bdir.y += (Math.random() - 0.5) * 0.06;
              bdir.z += (Math.random() - 0.5) * 0.06;
              bdir.normalize();
              raycaster.set(new THREE.Vector3(ex, ey + 1.0, ez), bdir);
              const hits = raycaster.intersectObjects(wallMeshes, true);
              const pDist = new THREE.Vector3(ex, ey + 1.0, ez).distanceTo(pp);
              if (hits.length === 0 || hits[0].distance > pDist - 0.4) {
                const rawDmg = 8 + Math.floor(Math.random() * 10);
                let hpDmg = rawDmg, armorDmg = 0;
                if (playerArmor > 0) { armorDmg = Math.min(playerArmor, Math.floor(rawDmg * 0.5)); hpDmg = rawDmg - armorDmg; playerArmor -= armorDmg; }
                playerHP = Math.max(0, playerHP - hpDmg);
                damageFlash = 0.25;
                document.getElementById('health').textContent = `HP ${playerHP}`;
                document.getElementById('health').style.color = playerHP < 30 ? '#f33' : playerHP < 60 ? '#fa0' : '#0f0';
                document.getElementById('armor').textContent = `馃洝 ${playerArmor}`;
              } else if (hits.length > 0) {
                const dot = new THREE.Mesh(new THREE.SphereGeometry(0.03, 4, 4),
                  new THREE.MeshBasicMaterial({ color: 0x444 }));
                dot.position.copy(hits[0].point).addScaledVector(hits[0].face?.normal || new THREE.Vector3(0, 1, 0), 0.005);
                worldScene.add(dot);
              }
              const mf = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4),
                new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.7 }));
              mf.position.set(ex + bdir.x * 0.3, ey + 1.0 + bdir.y * 0.3, ez + bdir.z * 0.3);
              worldScene.add(mf);
              setTimeout(() => { worldScene.remove(mf); mf.geometry.dispose(); mf.material.dispose(); }, 60);
            }
          }
        }

        // ---- 绉诲姩 + 纰版挒锛堢敤瀹為檯 Y 鍧愭爣锛?----
        const mx = en.velX * dt, mz = en.velZ * dt;
        const nx = ex + mx, nz = ez + mz;
        let freeX = true, freeZ = true;
        for (const b of boxes) {
          // X 杞存娴?
          if (nx + eR > b.min.x && nx - eR < b.max.x &&
              ez + eR > b.min.z && ez - eR < b.max.z &&
              eFoot < b.max.y && eHead > b.min.y) freeX = false;
          // Z 杞存娴?
          if (ex + eR > b.min.x && ex - eR < b.max.x &&
              nz + eR > b.min.z && nz - eR < b.max.z &&
              eFoot < b.max.y && eHead > b.min.y) freeZ = false;
        }
        if (freeX) g.position.x = nx;
        if (freeZ) g.position.z = nz;

        // 鏁屼汉閲嶅姏 + 灏忚烦
        if (en.vy === undefined) en.vy = 0;
        en.vy += -15 * dt;
        g.position.y += en.vy * dt;

        // 鍦伴潰鍚搁檮
        raycaster.set(new THREE.Vector3(g.position.x, g.position.y + 1.0, g.position.z), new THREE.Vector3(0, -1, 0));
        const ghits = raycaster.intersectObjects(wallMeshes, false);
        if (ghits.length > 0 && ghits[0].distance < 2.0 && en.vy <= 0) {
          g.position.y = ghits[0].point.y;
          en.vy = 0;
        }

        // 鍗′綆闅滅 鈫?灏忚烦
        if ((!freeX || !freeZ) && en.state !== 'attack') {
          en.stuckT = (en.stuckT || 0) + dt;
          if (en.stuckT > 0.5 && en.vy === 0) {
            const jx = ex + Math.sin(g.rotation.y) * 1.0;
            const jz = ez - Math.cos(g.rotation.y) * 1.0;
            raycaster.set(new THREE.Vector3(jx, g.position.y + 1.0, jz), new THREE.Vector3(0, -1, 0));
            const jhits = raycaster.intersectObjects(wallMeshes, false);
            if (jhits.length > 0 && jhits[0].distance < 0.4) {
              en.vy = 4.5; // 灏忚烦
              if (!freeX) g.position.x = nx;
              if (!freeZ) g.position.z = nz;
            }
            en.stuckT = 0;
          }
        } else { en.stuckT = 0; }
        raycaster.set(new THREE.Vector3(g.position.x, g.position.y + 1.0, g.position.z), new THREE.Vector3(0, -1, 0));
        const ghits = raycaster.intersectObjects(wallMeshes, false);
      }
    }

    function respawnEnemy(en) {
      const sp = enemySpawns[Math.floor(Math.random() * enemySpawns.length)];
      en.group.position.set(sp[0], 0.85, sp[1]);
      en.group.rotation.set(0, 0, 0);
      en.group.visible = true;
      en.hp = 100; en.alive = true; en.state = 'patrol';
      en.shootTimer = 0.5 + Math.random(); en.stuckTimer = 0;
      en.group.traverse(c => { if (c.material && c.material.transparent) { c.material.opacity = 1; c.material.transparent = false; } });
    }

    function killEnemy(en) {
      en.alive = false; en.state = 'dead'; en.respawnTimer = 2 + Math.random() * 2;
      en.group.position.y -= 0.3;
      en.group.traverse(c => { if (c.material && c.material.opacity !== undefined) { c.material.transparent = true; c.material.opacity = 0.35; } });
    }

    // ==================== 鎶ょ敳鍖呯郴缁?====================
    function spawnArmorPack() {
      if (armorPacks.length >= 4) return;
      const pt = armorSpawnPoints[Math.floor(Math.random() * armorSpawnPoints.length)];
      const group = new THREE.Group();
      group.position.set(pt[0], 0.15, pt[2]);
      // 鐏扮櫧搴曞骇
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.12, 0.3),
        new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3 }));
      base.position.y = 0.06; base.castShadow = true;
      group.add(base);
      // 鐩剧墝鏍囧織(涓夎+鍦?
      const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.08, 6),
        new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.2, emissive: 0x222222, emissiveIntensity: 0.3 }));
      shield.position.y = 0.16; shield.castShadow = true;
      group.add(shield);
      worldScene.add(group);
      armorPacks.push({ group, pos: new THREE.Vector3(pt[0], 0.15, pt[2]) });
    }
    function updateArmorPacks(dt) {
      armorSpawnTimer -= dt;
      if (armorSpawnTimer <= 0 && armorPacks.length < 4) {
        spawnArmorPack();
        armorSpawnTimer = 10 + Math.random() * 5;
      }
      // 鎷惧彇妫€娴?
      const cp = camera.position;
      for (let i = armorPacks.length - 1; i >= 0; i--) {
        const ap = armorPacks[i];
        if (cp.distanceTo(ap.pos) < 2.0) {
          playerHP = Math.min(100, playerHP + 5);
          playerArmor = Math.min(100, playerArmor + 20);
          document.getElementById('health').textContent = `HP ${playerHP}`;
          document.getElementById('armor').textContent = `馃洝 ${playerArmor}`;
          worldScene.remove(ap.group);
          armorPacks.splice(i, 1);
        }
      }
    }

    // ==================== 鐜╁鐘舵€?====================
    const keys = { w: 0, s: 0, a: 0, d: 0, sprint: 0, jump: 0, f: 0 };
    let vy = 0, grounded = false;
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const R = 0.4, HH = 0.75;
    let locked = false;
    let magAmmo = 30, reserve = 90;
    let fireTimer = 0, reloadTimer = 0, reloading = false, isFiring = false;

    document.addEventListener('keydown', e => {
      switch (e.code) {
        case 'KeyW': keys.w = 1; e.preventDefault(); break;
        case 'KeyS': keys.s = 1; e.preventDefault(); break;
        case 'KeyA': keys.a = 1; e.preventDefault(); break;
        case 'KeyD': keys.d = 1; e.preventDefault(); break;
        case 'Space': keys.jump = 1; e.preventDefault(); break;
        case 'KeyF': keys.f = 1; e.preventDefault(); break;
        case 'ShiftLeft': case 'ShiftRight': keys.sprint = 1; break;
        case 'KeyR':
          if (!reloading && magAmmo < 30 && reserve > 0) { reloading = true; reloadTimer = 0; magMesh.position.y = -0.15; }
          break;
      }
    });
    document.addEventListener('keyup', e => {
      switch (e.code) {
        case 'KeyW': keys.w = 0; break; case 'KeyS': keys.s = 0; break;
        case 'KeyA': keys.a = 0; break; case 'KeyD': keys.d = 0; break;
        case 'Space': keys.jump = 0; break;
        case 'KeyF': keys.f = 0; break;
        case 'ShiftLeft': case 'ShiftRight': keys.sprint = 0; break;
      }
    });
    document.addEventListener('mousemove', e => {
      if (!locked) return;
      euler.setFromQuaternion(camera.quaternion);
      euler.y -= e.movementX * 0.002;
      euler.x = Math.max(-1.3, Math.min(1.3, euler.x - e.movementY * 0.002));
      camera.quaternion.setFromEuler(euler);
    });
    document.addEventListener('mousedown', e => { if (e.button === 0 && locked) isFiring = true; });
    document.addEventListener('mouseup', e => { if (e.button === 0) isFiring = false; });
    renderer.domElement.addEventListener('click', () => renderer.domElement.requestPointerLock());
    document.addEventListener('pointerlockchange', () => {
      locked = document.pointerLockElement === renderer.domElement;
      document.getElementById('info').classList.toggle('hidden', locked);
    });

    // 澶嶆椿鎸夐挳
    document.getElementById('respawnBtn').addEventListener('click', () => {
      playerHP = 100; playerArmor = 0;
      document.getElementById('health').textContent = 'HP 100';
      document.getElementById('health').style.color = '#0f0';
      document.getElementById('armor').textContent = '馃洝 0';
      camera.position.set(0, 0.9, 25); vy = 0;
      document.getElementById('deathScreen').classList.remove('show');
      damageFlash = 0;
    });

    // F 閿ˉ鍏呭脊鑽?
    const ammoCratePos = new THREE.Vector3(3, 0.5, 22);

    // ==================== 纰版挒 ====================
    const raycaster = new THREE.Raycaster();
    function getBox(m) { m.updateWorldMatrix(false, false); return new THREE.Box3().setFromObject(m); }
    function collides(cx, cy, cz, boxes) {
      for (const b of boxes) {
        if (cx + R <= b.min.x || cx - R >= b.max.x) continue;
        if (cz + R <= b.min.z || cz - R >= b.max.z) continue;
        if (cy + HH <= b.min.y || cy - HH >= b.max.y) continue;
        return true;
      }
      return false;
    }

    function shoot() {
      if (magAmmo <= 0) { fireTimer = 0.15; return; }
      magAmmo--; fireTimer = 0.1;
      document.getElementById('ammo').textContent = `${magAmmo} / ${reserve}`;
      recoilG.rotation.x -= 0.03 * (0.5 + Math.random());
      flash.material.opacity = 0.6 + Math.random() * 0.4;
      const origin = camera.position.clone();
      const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      dir.x += (Math.random() - 0.5) * 0.01;
      dir.y += (Math.random() - 0.5) * 0.01;
      dir.normalize();
      raycaster.set(origin, dir);
      // 鍏堟娴嬫晫浜?
      let hitEnemy = false;
      for (const en of enemies) {
        if (!en.alive) continue;
        const parts = en.isMelee
          ? [en.body, en.head, en.fistL, en.fistR, en.armL, en.armR, en.legL, en.legR]
          : [en.body, en.head, en.armL, en.armR, en.legL, en.legR, en.gun];
        const ehits = raycaster.intersectObjects(parts, true);
        if (ehits.length > 0) {
          const dmg = 25 + Math.floor(Math.random() * 15);
          en.hp -= dmg;
          hitEnemy = true;
          // 琛€杩?
          const blood = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 4), new THREE.MeshBasicMaterial({ color: 0xcc0000 }));
          blood.position.copy(ehits[0].point);
          worldScene.add(blood);
          setTimeout(() => { worldScene.remove(blood); blood.geometry.dispose(); blood.material.dispose(); }, 200);
          if (en.hp <= 0) {
            killEnemy(en);
            // 鍑绘潃鍥炶 30
            playerHP = Math.min(100, playerHP + 30);
            document.getElementById('health').textContent = `HP ${playerHP}`;
            document.getElementById('health').style.color = playerHP < 30 ? '#f33' : playerHP < 60 ? '#fa0' : '#0f0';
          }
          break;
        }
      }
      // 娌℃墦涓晫浜哄垯妫€娴嬪澹?
      if (!hitEnemy) {
        const hits = raycaster.intersectObjects(wallMeshes, true);
        if (hits.length > 0) {
          const p = hits[0].point, n = hits[0].face?.normal || new THREE.Vector3(0, 1, 0);
          const dot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), new THREE.MeshBasicMaterial({ color: 0x111 }));
          dot.position.copy(p).addScaledVector(n, 0.005);
          worldScene.add(dot);
        }
      }
    }

    // ==================== 涓诲惊鐜?====================
    const clock = new THREE.Clock();
    let frameN = 0;

    function loop() {
      requestAnimationFrame(loop);
      const dt = Math.min(clock.getDelta(), 0.05);
      frameN++;

      updateEnemies(dt);
      updateArmorPacks(dt);
      if (damageFlash > 0) damageFlash -= dt;
      const d2c = camera.position.distanceTo(new THREE.Vector3(3, 0.9, 22));
      document.getElementById('ammoHint').style.display = d2c < 2.5 ? 'block' : 'none';
      if (d2c < 2.5 && keys.f) { magAmmo = 30; reserve = 90; document.getElementById('ammo').textContent = '30 / 90'; keys.f = 0; }

      if (!locked) {
        renderer.clear(); renderer.render(worldScene, camera); return;
      }

      // 鍦伴潰妫€娴?
      {
        const p = camera.position;
        const fy = p.y - HH + 0.05;
        raycaster.set(new THREE.Vector3(p.x, fy, p.z), new THREE.Vector3(0, -1, 0));
        const hits = raycaster.intersectObjects(wallMeshes, false);
        grounded = hits.length > 0 && hits[0].distance < 0.6;
      }

      // 璺宠穬 & 閲嶅姏
      if (keys.jump && grounded) { vy = 6; grounded = false; }
      if (!grounded) vy += -15 * dt;
      else if (vy < 0) vy = 0;

      // 杈撳叆
      let ix = 0, iz = 0;
      if (keys.w) iz++; if (keys.s) iz--; if (keys.d) ix++; if (keys.a) ix--;
      let dx = 0, dz = 0;
      if (ix || iz) {
        const L = Math.sqrt(ix * ix + iz * iz); ix /= L; iz /= L;
        const spd = 10 * (keys.sprint ? 1.6 : 1);
        const q = camera.quaternion;
        const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(q); fwd.y = 0; fwd.normalize();
        const rgt = new THREE.Vector3(1, 0, 0).applyQuaternion(q); rgt.y = 0; rgt.normalize();
        dx = (fwd.x * iz + rgt.x * ix) * spd * dt;
        dz = (fwd.z * iz + rgt.z * ix) * spd * dt;
      }
      const dy = vy * dt;

      // 纰版挒
      const boxes = wallMeshes.map(getBox);
      const p = camera.position;
      if (!collides(p.x + dx, p.y, p.z, boxes)) p.x += dx;
      const ny = p.y + dy;
      if (!collides(p.x, ny, p.z, boxes)) p.y = ny;
      else { if (dy < 0) { grounded = true; vy = 0; } else vy = 0; }
      if (!collides(p.x, p.y, p.z + dz, boxes)) p.z += dz;

      // 姝﹀櫒鍚屾
      {
        const cp = camera.position, cq = camera.quaternion;
        const off = new THREE.Vector3(0.38, -0.3, -0.55).applyQuaternion(cq);
        weaponGroup.position.copy(cp).add(off);
        weaponGroup.quaternion.copy(cq).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -0.08));
      }
      if (Math.abs(recoilG.rotation.x) > 0.0005)
        recoilG.rotation.x += (0 - recoilG.rotation.x) * Math.min(dt * 10, 1);
      if (flash.material.opacity > 0)
        flash.material.opacity = Math.max(0, flash.material.opacity - dt * 14);

      // 灏勫嚮
      if (fireTimer > 0) fireTimer -= dt;
      if (reloading) {
        reloadTimer += dt;
        if (reloadTimer >= 2.2) {
          const need = 30 - magAmmo, load = Math.min(need, reserve);
          magAmmo += load; reserve -= load;
          reloading = false; magMesh.position.y = -0.05;
          document.getElementById('ammo').textContent = `${magAmmo} / ${reserve}`;
        }
      }
      if (isFiring && fireTimer <= 0 && !reloading) shoot();

      // 鐜╁姝讳骸 鈫?寮圭獥
      if (playerHP <= 0 && !document.getElementById('deathScreen').classList.contains('show')) {
        playerHP = 0;
        document.getElementById('deathScreen').classList.add('show');
        document.exitPointerLock();
        locked = false;
      }

      // 鍙椾激闂孩鏁堟灉
      if (damageFlash > 0) {
        renderer.domElement.style.boxShadow = 'inset 0 0 80px rgba(255,0,0,0.5)';
      } else {
        renderer.domElement.style.boxShadow = 'none';
      }

      // 娓叉煋
      renderer.clear();
      renderer.render(worldScene, camera);
      renderer.clearDepth();
      renderer.render(weaponScene, camera);

      if (frameN % 120 === 0) {
        dbg(`FPS: ok | ${grounded ? '鍦伴潰' : '绌轰腑'} | (${p.x.toFixed(0)},${p.y.toFixed(1)},${p.z.toFixed(0)})<br>${wallMeshes.length} 纰版挒浣?| ${magAmmo}/${reserve} 鍙慲);
      }
    }

    window.addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    loop();
    dbg('馃殌 鐐瑰嚮鐢婚潰寮€濮嬫父鎴?);