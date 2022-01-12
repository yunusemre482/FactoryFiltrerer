import {KeyDisplay} from './utils';
import {CharacterControls} from './characterControls';
import * as THREE from 'three';
import {CameraHelper, ObjectLoader, ShortType} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader';
import {CopyShader} from 'three/examples/jsm/shaders/CopyShader';
import {DragControls} from 'three/examples/jsm/controls/DragControls';
const TWEEN = require('@tweenjs/tween.js');

var SOUTH = 2;
let enableSelection = false;
var controls: DragControls;

function mapSetup() {
  const clusterNames = generateMap();
  const cluster = [
    {
      x: 1,
      z: 0,
      cluster: 'road3',
    },

    {
      x: 2,
      z: 2,
      cluster: clusterNames[0],
      direction: SOUTH,
    },
    {
      x: 2,
      z: 1,
      cluster: clusterNames[1],
      direction: SOUTH,
    },
    {
      x: 2,
      z: 0,
      cluster: clusterNames[2],
      direction: SOUTH,
    },
    {
      x: 2,
      z: -1,
      cluster: clusterNames[3],
      direction: SOUTH,
    },
    {
      x: 2,
      z: -2,
      cluster: clusterNames[0],
      direction: SOUTH,
    },
    {
      x: 2,
      z: -3,
      cluster: clusterNames[1],
      direction: SOUTH,
    },
    {
      x: 2,
      z: -4,
      cluster: clusterNames[2],
      direction: SOUTH,
    },
    {
      x: 2,
      z: -5,
      cluster: clusterNames[3],
      direction: SOUTH,
    },

    {
      x: 1,
      z: 2,
      cluster: clusterNames[4],
      direction: SOUTH,
    },
    {
      x: 1,
      z: 1,
      cluster: clusterNames[7],
      direction: SOUTH,
    },
    {
      x: 1,
      z: 0,
      cluster: clusterNames[8],
      direction: SOUTH,
    },
    {
      x: 1,
      z: -1,
      cluster: clusterNames[9],
      direction: SOUTH,
    },
    {
      x: 1,
      z: -2,
      cluster: clusterNames[4],
      direction: SOUTH,
    },
    {
      x: 1,
      z: -3,
      cluster: clusterNames[7],
      direction: SOUTH,
    },
    {
      x: 1,
      z: -4,
      cluster: clusterNames[8],
      direction: SOUTH,
    },
    {
      x: 1,
      z: -5,
      cluster: clusterNames[9],
      direction: SOUTH,
    },

    {
      x: 0,
      z: 2,
      cluster: clusterNames[5],
      direction: SOUTH,
    },
    {
      x: 0,
      z: 1,
      cluster: clusterNames[10],
      direction: SOUTH,
    },
    {
      x: 0,
      z: 0,
      cluster: clusterNames[12],
      direction: SOUTH,
    },
    {
      x: 0,
      z: -1,
      cluster: clusterNames[13],
      direction: SOUTH,
    },
    {
      x: 0,
      z: -2,
      cluster: clusterNames[5],
      direction: SOUTH,
    },
    {
      x: 0,
      z: -3,
      cluster: clusterNames[10],
      direction: SOUTH,
    },
    {
      x: 0,
      z: -4,
      cluster: clusterNames[12],
      direction: SOUTH,
    },
    {
      x: 0,
      z: -5,
      cluster: clusterNames[13],
      direction: SOUTH,
    },

    {
      x: -1,
      z: 2,
      cluster: clusterNames[6],
      direction: SOUTH,
    },
    {
      x: -1,
      z: 1,
      cluster: clusterNames[11],
      direction: SOUTH,
    },
    {
      x: -1,
      z: 0,
      cluster: clusterNames[14],
      direction: SOUTH,
    },
    {
      x: -1,
      z: -1,
      cluster: clusterNames[15],
      direction: SOUTH,
    },
    {
      x: -1,
      z: -2,
      cluster: clusterNames[6],
      direction: SOUTH,
    },
    {
      x: -1,
      z: -3,
      cluster: clusterNames[11],
      direction: SOUTH,
    },
    {
      x: -1,
      z: -4,
      cluster: clusterNames[14],
      direction: SOUTH,
    },
    {
      x: -1,
      z: -5,
      cluster: clusterNames[15],
      direction: SOUTH,
    },

    {
      x: -2,
      z: 2,
      cluster: clusterNames[0],
      direction: SOUTH,
    },
    {
      x: -2,
      z: 1,
      cluster: clusterNames[1],
      direction: SOUTH,
    },
    {
      x: -2,
      z: 0,
      cluster: clusterNames[2],
      direction: SOUTH,
    },
    {
      x: -2,
      z: -1,
      cluster: clusterNames[3],
      direction: SOUTH,
    },
    {
      x: -2,
      z: -2,
      cluster: clusterNames[0],
      direction: SOUTH,
    },
    {
      x: -2,
      z: -3,
      cluster: clusterNames[1],
      direction: SOUTH,
    },
    {
      x: -2,
      z: -4,
      cluster: clusterNames[2],
      direction: SOUTH,
    },
    {
      x: -2,
      z: -5,
      cluster: clusterNames[3],
      direction: SOUTH,
    },

    {
      x: -3,
      z: 2,
      cluster: clusterNames[4],
      direction: SOUTH,
    },
    {
      x: -3,
      z: 1,
      cluster: clusterNames[7],
      direction: SOUTH,
    },
    {
      x: -3,
      z: 0,
      cluster: clusterNames[8],
      direction: SOUTH,
    },
    {
      x: -3,
      z: -1,
      cluster: clusterNames[9],
      direction: SOUTH,
    },
    {
      x: -3,
      z: -2,
      cluster: clusterNames[4],
      direction: SOUTH,
    },
    {
      x: -3,
      z: -3,
      cluster: clusterNames[7],
      direction: SOUTH,
    },
    {
      x: -3,
      z: -4,
      cluster: clusterNames[8],
      direction: SOUTH,
    },
    {
      x: -3,
      z: -5,
      cluster: clusterNames[9],
      direction: SOUTH,
    },

    {
      x: -4,
      z: 2,
      cluster: clusterNames[5],
      direction: SOUTH,
    },
    {
      x: -4,
      z: 1,
      cluster: clusterNames[10],
      direction: SOUTH,
    },
    {
      x: -4,
      z: 0,
      cluster: clusterNames[12],
      direction: SOUTH,
    },
    {
      x: -4,
      z: -1,
      cluster: clusterNames[13],
      direction: SOUTH,
    },
    {
      x: -4,
      z: -2,
      cluster: clusterNames[5],
      direction: SOUTH,
    },
    {
      x: -4,
      z: -3,
      cluster: clusterNames[10],
      direction: SOUTH,
    },
    {
      x: -4,
      z: -4,
      cluster: clusterNames[12],
      direction: SOUTH,
    },
    {
      x: -4,
      z: -5,
      cluster: clusterNames[13],
      direction: SOUTH,
    },

    {
      x: -5,
      z: 2,
      cluster: clusterNames[6],
      direction: SOUTH,
    },
    {
      x: -5,
      z: 1,
      cluster: clusterNames[11],
      direction: SOUTH,
    },
    {
      x: -5,
      z: 0,
      cluster: clusterNames[14],
      direction: SOUTH,
    },
    {
      x: -5,
      z: -1,
      cluster: clusterNames[15],
      direction: SOUTH,
    },
    {
      x: -5,
      z: -2,
      cluster: clusterNames[6],
      direction: SOUTH,
    },
    {
      x: -5,
      z: -3,
      cluster: clusterNames[11],
      direction: SOUTH,
    },
    {
      x: -5,
      z: -4,
      cluster: clusterNames[14],
      direction: SOUTH,
    },
    {
      x: -5,
      z: -5,
      cluster: clusterNames[8],
      direction: SOUTH,
    },
  ];

  return cluster;
}

var level1 = mapSetup();
var canvas = document.createElement('canvas');
canvas.setAttribute('id', 'MyCanvas');
var context = canvas.getContext('webgl2');
var progressbar = document.getElementById("progressBar");
var progressbarinner = document.createElement('div');

var  dirLight:THREE.DirectionalLight;
var  ambientLight:THREE.AmbientLight;
var directionalLight:THREE.DirectionalLight;
var ambient:THREE.AmbientLight;
var spotLight:THREE.SpotLight;
let mapCamera: THREE.OrthographicCamera,
  mapComposer: EffectComposer,
  mapWidth = 256,
  mapHeight = 256;
var container: any, stats: Stats;
var composer: EffectComposer;
var sound: any;
//RAYCASTER
const raycaster = new THREE.Raycaster(); // create once
const clickMouse = new THREE.Vector2(); // create once
const moveMouse = new THREE.Vector2();
var INTERSECTED: any;
// create once
var draggable: THREE.Object3D;
// SCENE
var filters: any = [];
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa8def0);
const sceneMeshes: THREE.Mesh[] = [];
// CAMERA
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
);
camera.position.y = 5;
camera.position.z = 5;
camera.position.x = 0;

var file = "/Users/yunusemre/Desktop/BBM/BBM412/FactoryFiltrer/src/objects/graph.json";
$.getJSON(file, function(json) {
  console.log(json); // this will show the info it in firebug console
});


// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
  context: context,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

// CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.minDistance = 8;
orbitControls.maxDistance = 15;
orbitControls.enablePan = false;
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
orbitControls.update();
var characterControls: CharacterControls;
init();
loadAudio();
function init() {

  container = document.createElement('div');
  container.setAttribute('id', 'ThreeJS');
  createProgressbar('300s');
  container.appendChild(renderer.domElement);
  

  var loader = new GLTFLoader();
  level1.forEach((cl) => loadClusters(cl));

  mapCamera = new THREE.OrthographicCamera(
    -360,
    205,
    410,
    -205,
    -5000, // Near
    20000,
  ); // Far

  mapCamera.up = new THREE.Vector3(0, 0, -1);
  mapCamera.lookAt(new THREE.Vector3(0, -1, 0));
  mapCamera.position.y = 500;
  scene.add(mapCamera);
  WindowResize(renderer, mapCamera);

  stats = Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.bottom = '0px';
  stats.domElement.style.zIndex = '100';
  stats.domElement.setAttribute('id', 'mapCanvas');
  container.appendChild(stats.domElement);
  addLight();
  function loadClusters({x, z, cluster, direction}: any) {
    loader.load(`gltf/${cluster}.gltf`, function (object) {
      const box = new THREE.Box3().setFromObject(object.scene);
      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      camera.position.copy(boxCenter);
      camera.position.x += boxSize / 8.0;
      camera.position.y += boxSize / 10.0;
      camera.position.z += boxSize / 5.0;
      camera.lookAt(boxCenter);
      camera.near = boxSize / 100;
      camera.far = boxSize * 200;
      camera.updateProjectionMatrix();
      scene.add(camera);

      orbitControls.target.copy(boxCenter);
      orbitControls.update();

      object.scene.traverse(function (child: any) {
        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
          child.material.depthWrite = !child.material.transparent;
        }
      });
      object.scene.position.set(x * 60, 0, z * 60);
      object.scene.userData.ground = true;
      if (cluster == 'factory7') {
        object.userData.ground = true;
        object.scene.userData.ground = true;
      }
      cluster == 'factory7' ? loadFilters(x * 60 - 3, z * 60) : (x = 1);
      cluster == 'house' ? createCylinder(x*60-3,z*60) :(x=2);

      if (direction) object.scene.rotation.y = Math.PI * direction;

      scene.add(object.scene);
    });
  }

  function loadFilters(x: number, z: number) {
    count = 0;
    new GLTFLoader().load('objects/filter2.gltf', function (object) {
      var filter = object.scene;
      filter.traverse(function (object: any) {
        if (object.isMesh) {
          const m = object as THREE.Mesh;
          object.castShadow = true;
          sceneMeshes.push(m);
        }
      });

      filter.scale.set(0.4, 0.4, 0.4);
      filter.position.set(x, 3, z);
      filter.userData.draggable = true;
      filter.userData.name = 'filter_' + String(count++);
      filters.push(filter);
      scene.add(filter);

      renderer.domElement.addEventListener('dblclick', onDoubleClick, false);
      function onDoubleClick(event: MouseEvent) {
        event.preventDefault();
        const mouse = {
          x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
          y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
        };
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(filters, true);

        if (intersects.length > 0) {
          intersects.forEach((item:any)=>{
            new TWEEN.Tween(item.object.parent.position)
            .to(
              {
                x: 0,
                y: 0,
                z: 1000,
              },
              500,
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

          new TWEEN.Tween(item.object.parent.rotation)
            .to(
              {
                x: 0,
                y: 2,
                z: 0,
              },
              500,
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();


          })
         
        }
        camera.updateMatrixWorld();
      }
    });
  }

  ////////////////////
  // POSTPROCESSING //
  ////////////////////

  renderer.autoClear = false;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xccccff, 1);
  // composer for main scene

  composer = new EffectComposer(renderer);

  var renderModel = new RenderPass(scene, camera);

  var effectFXAA = new ShaderPass(FXAAShader);
  var width = window.innerWidth || 2;
  var height = window.innerHeight || 2;
  effectFXAA.uniforms['resolution'].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight,
  );

  // var effectCopy = new THREE.ShaderPass( THREE.CopyShader );
  effectFXAA.renderToScreen = true;

  composer.addPass(renderModel);
  composer.addPass(effectFXAA);
  // composer.addPass( effectCopy );

  // composer for minimap
  var parameters = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBFormat,
    stencilBuffer: false,
  };
  document.body.appendChild(container);
  mapComposer = new EffectComposer(
    renderer,
    new THREE.WebGLRenderTarget(512, 512),
  );
  mapComposer.setSize(512, 512);
  var renderModel2 = new RenderPass(scene, mapCamera);
  mapComposer.addPass(renderModel2);
  var effectFXAA2 = new ShaderPass(FXAAShader);
  effectFXAA2.uniforms['resolution'].value.set(1 / 512, 1 / 512);
  // effectFXAA2.renderToScreen = true;
  mapComposer.addPass(effectFXAA2);
  var effectCopy2 = new ShaderPass(CopyShader);
  effectCopy2.renderToScreen = true;
  mapComposer.addPass(effectCopy2);
}
function loadPlayer() {
  new GLTFLoader().load('models/Soldier.glb', function (gltf) {
    const player = gltf.scene;
    player.traverse(function (object: any) {
      if (object.isMesh) object.castShadow = true;
    });
    player.position.set(30, 0, 10);
    player.scale.set(1.6, 1.6, 1.6);
    scene.add(player);

    const geometry = new THREE.SphereGeometry(12, 32, 16);
    const material = new THREE.MeshBasicMaterial({color: 0x1100e6});
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.set(30, 220, 10);
    scene.add(sphere);

    const gltfAnimations: THREE.AnimationClip[] = gltf.animations;
    const mixer = new THREE.AnimationMixer(player);
    const animationsMap: Map<string, THREE.AnimationAction> = new Map();
    gltfAnimations
      .filter((a) => a.name != 'TPose')
      .forEach((a: THREE.AnimationClip) => {
        animationsMap.set(a.name, mixer.clipAction(a));
      });
    characterControls = new CharacterControls(
      player,
      mixer,
      animationsMap,
      orbitControls,
      camera,
      'Idle',
      sphere,
    );
  });
}

function loadAudio() {
  const listener = new THREE.AudioListener();
  sound = new THREE.PositionalAudio(listener);

  camera.add(listener);

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load('assets/sounds/walk2.mp3', function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(100);
  });
}

function intersect(pos: THREE.Vector2) {
  raycaster.setFromCamera(pos, camera);
  return raycaster.intersectObjects(filters, false);
}
// CONTROL KEYS
const keysPressed = {};
const keyDisplayQueue = new KeyDisplay();
const blocker = document.getElementById('blocker');
const start = document.getElementById('startButton');
const instr = document.getElementById('instructions');
var count: number = 0;
var changeshader: number = 0;
var flag = 0;

const text2 = document.createElement('div');
text2.style.position = 'absolute';
text2.style.width = '100px';
text2.style.height = '10px';
text2.style.backgroundColor = 'white';
text2.style.top = 550 + 'px';
text2.style.left = 400 + 'px';
text2.style.display = 'none';
document.body.appendChild(text2);
//EVENT LİSTENERS

renderer.domElement.addEventListener('mousemove', function (event) {
  // find intersections
  moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  moveMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener(
  'keydown',
  (event) => {
    keyDisplayQueue.down(event.key);
    if (event.shiftKey && characterControls) {
      characterControls.switchRunToggle();
    } else {
      (keysPressed as any)[event.key.toLowerCase()] = true;
    }
  },
  false,
);

document.addEventListener(
  'keyup',
  (event) => {
    keyDisplayQueue.up(event.key);
    (keysPressed as any)[event.key.toLowerCase()] = false;
  },
  false,
);

start.addEventListener(
  'click',
  function (event) {
    instr.style.display = 'none';
    blocker.style.display = 'none';
    loadPlayer();
    progressbarinner.style.animationPlayState='running';
  },
  false,
);
document.addEventListener(
  'keypress',
  (event) => {
    var name = event.key;
    console.log(name); 
    if (name == 'm') {
      count ? (count = 0) : (count = 1);
    }
    if (name == 'ş') {
      if (changeshader == 0 || changeshader == 3) { 
        changeshader = 1;
      } else if (changeshader == 1 || changeshader == 2) {
        changeshader = 0;
      }
    }
    if(name=='l'){
      console.log(spotEnable);
      if(spotEnable==0){
        addSpotLigth()
        scene.background = new THREE.Color(0x111111);
        spotEnable=1;
      }else if(spotEnable ==1){
        scene.background = new THREE.Color(0xa8def0);
        removeSpotLight();
        spotEnable=0;
      }
      
    }
  },
  false,
);
window.addEventListener('resize', onWindowResize);

const clock = new THREE.Clock();
// ANIMATE
function animate() {
  let mixerUpdateDelta = clock.getDelta();
  if (characterControls) {
    filters.forEach(function (fltr: any) {
      fltr.rotateY(Math.PI / 4);
    });
    if (changeshader == 1) {
      const vertexShader = document.getElementById('vertexShader').textContent;
      const fragmentShader =
        document.getElementById('fragmentShader').textContent;
      changeshader = 2;
      const uniforms = {
        topColor: {value: new THREE.Color(0x0077ff)},
        bottomColor: {value: new THREE.Color(0xffffff)},
        offset: {value: 33},
        exponent: {value: 0.6},
      };
      sphereLight(vertexShader, fragmentShader, uniforms);
    } else if (changeshader == 0) {
      changeshader = 3;
      scene.remove(hemiLight);
      scene.remove(sky);
    }

    characterControls.update(mixerUpdateDelta, keysPressed);
  }
  if(spotEnable){

    spotLight.target.position.set( characterControls.model.position.x,characterControls.model.position.y,characterControls.model.position.z);
    spotLight.position.copy( camera.position );
    spotLight.updateMatrixWorld();
  }
  TWEEN.update();
  stats.update();
  orbitControls.update();
  var w = window.innerWidth,
    h = window.innerHeight;

  // setViewport parameters:
  //  lower_left_x, lower_left_y, viewport_width, viewport_height

  renderer.setViewport(0, 0, w, h);
  // renderer.render( scene, camera );
  composer.render();

  renderer.clear(false, true, false); // clear the depth buffer -- thanks @WestLangley!
  if (count) {
    renderer.setViewport(10, h - mapHeight - 10, 0, 0);
  } else {
    renderer.setViewport(10, h - mapHeight - 10, mapWidth, mapHeight);
  }
  // minimap (overhead orthogonal camera)

  // renderer.render( scene, mapCamera );
  mapComposer.render();
  requestAnimationFrame(animate);
}

animate();

// RESIZE HANDLER
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  keyDisplayQueue.updatePosition();
}
function createCylinder(x:number,z:number) {
  let radius = 4;
  let height = 6
  let pos = { x: x, y: 0, z:z};

  // threejs
  let cylinder = new THREE.Mesh(new THREE.CylinderBufferGeometry(radius, radius, height, 32), new THREE.MeshPhongMaterial({ color: 0x90ee90 }))
  cylinder.position.set(pos.x, pos.y, pos.z)
  cylinder.castShadow = true
  cylinder.receiveShadow = true
  scene.add(cylinder)

  cylinder.userData.draggable = true
  cylinder.userData.name = 'CYLINDER'
}
var spotEnable=0;

var SpotDefaultPosition:any;
function addLight() {
  ambient = new THREE.AmbientLight(0x1d1d30);
  scene.add(ambient);

  directionalLight = new THREE.DirectionalLight(0xffeedff);
  directionalLight.position.set(0, 2, 1);
  scene.add(directionalLight);
  

  dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-60, 100, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 50;
  dirLight.shadow.camera.bottom = -50;
  dirLight.shadow.camera.left = -50;
  dirLight.shadow.camera.right = 50;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 200;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  scene.add(dirLight);
  // scene.add( new THREE.CameraHelper(dirLight.shadow.camera))
}
function removeLight(){
  scene.remove(dirLight);
  scene.remove(directionalLight);
  scene.remove(ambient);
}
var hemiLight: any, sky: any;

function sphereLight(vertexShader: any, fragmentShader: any, uniforms: any) {
  hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);
  uniforms['topColor'].value.copy(hemiLight.color);

  const skyGeo = new THREE.SphereBufferGeometry(4000, 32, 15);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.BackSide,
  });

  sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);
}
function WindowResize(renderer: any, camera: any) {
  var callback = function () {
    // notify the renderer of the size change
    renderer.setSize(window.innerWidth, window.innerHeight);
    // update the camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
  // bind the resize event
  window.addEventListener('resize', callback, false);
  // return .stop() the function to stop watching window resize
  return {
    /**
     * Stop watching window resize
     */
    stop: function () {
      window.removeEventListener('resize', callback);
    },
  };
}
function generateMap() {
  var clusterNames = [
    'factory7',
    'house2',
    'shoparea',
    'house',
    'apartments',
    'shops',
    'fastfood',
    'apartment',
    'forest2',
    'gas',
    'supermarket',
    'coffeeshop',
    'residence',
    'bus',
    'forest2',
    'supermarket',
  ];

  for (var i = clusterNames.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = clusterNames[i];
    clusterNames[i] = clusterNames[j];
    clusterNames[j] = temp;
  }
  return clusterNames;
}

function addSpotLigth(){
  removeLight();
  spotLight = new THREE.SpotLight( 0xffffff, 5, 1000, Math.PI/8, 1  );
  spotLight.position.set( characterControls.model.position.x, characterControls.model.position.y, characterControls.model.position.z );
  spotLight.target.position.set(characterControls.model.position.x-5, characterControls.model.position.y, characterControls.model.position.z-5);
  

  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;

  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 10;

  scene.add(spotLight );
  scene.add(spotLight.target);
}
function removeSpotLight(){
  addLight();
  scene.remove(spotLight);
  scene.remove(spotLight.target);
}
function createProgressbar(duration:any) {
  // We select the div that we want to turn into a progressbar
  progressbar.className = 'progressbar';
  
  // We create the div that changes width to show progress
  progressbarinner.className = 'inner';

  // Now we set the animation parameters
  progressbarinner.style.animationDuration = duration;

  // Append the progressbar to the main progressbardiv
  progressbar.appendChild(progressbarinner);

  container.appendChild(progressbar);
  // When everything is set up we start the animation
}

