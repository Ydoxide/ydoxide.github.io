'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "186d1f62c45eb52df3e183ae7d75307b",
"assets/AssetManifest.bin.json": "56d55700008ac8eede6e66f9a686d982",
"assets/assets/icons/adobe.png": "12f276eea31269061637d02b0e796fbe",
"assets/assets/icons/android-studio.png": "2325bf2cb319ce872b439fa8484eecca",
"assets/assets/icons/apache.png": "2ed130a033e31c712b6fe91721971923",
"assets/assets/icons/arduino.png": "f14fc9532922e1cd6c5656072933c3fb",
"assets/assets/icons/aws.png": "83e452d4db54b6fa04685a08ca873d40",
"assets/assets/icons/azure.png": "14875d34e59d1caa878ca8b025c67845",
"assets/assets/icons/bash.png": "f115579f81b93d9fcd9a4b36bf391ebd",
"assets/assets/icons/blender.png": "acbb85a16596ca90b5fbd6f862b55e3f",
"assets/assets/icons/c++.png": "7f49c25018df0262eedba9a9f697aa50",
"assets/assets/icons/cisco.png": "d7f5d168b13cc32531c0d0612e12017a",
"assets/assets/icons/code.png": "8368bde3ff57bc05ec67c68a73dfae51",
"assets/assets/icons/csharp.png": "e49f04bb33ee4c19b4d8887e3c629583",
"assets/assets/icons/css.png": "e50cb4825b06843aa4089187096c3c28",
"assets/assets/icons/dart.png": "289eff8483439c83a5c465c663c4676a",
"assets/assets/icons/debian.png": "3b1e0e865d5880200e713ad2384566b6",
"assets/assets/icons/docker.png": "1cddbcf397acdf1a565539718eb86fd2",
"assets/assets/icons/fail2ban.png": "c89380692517d4dacc2954f43e18cb3f",
"assets/assets/icons/firebase.png": "eb527fa75d4521b9623db606fb032647",
"assets/assets/icons/flutter.png": "249a2bfa90230a19d0f818e29cb35110",
"assets/assets/icons/gcloud.png": "1f9bb17db9dba59dbcef3d783ccee33a",
"assets/assets/icons/git.png": "49045db3ef093f618747cabf6e21755f",
"assets/assets/icons/github-actions.png": "6afde60ce7da3032cc3dd85acf0a8b4a",
"assets/assets/icons/github.png": "69d46c6ca5f799013f5b5cd9f7808b34",
"assets/assets/icons/html.png": "a1e55154b98d801715e319fd87d6e77e",
"assets/assets/icons/java.png": "fb224fe58513b1ab6b8d2a0921df5bb2",
"assets/assets/icons/js.png": "d8b20e9459aa466accd055c40f611692",
"assets/assets/icons/kali.png": "95f11c8c01c7e140e41476a22bc9edef",
"assets/assets/icons/linux.png": "2135e49f1bb05142ef60b0c4ecc0dc33",
"assets/assets/icons/mariadb.png": "5a3357bec8ea508dd637b7a21a7c812d",
"assets/assets/icons/mongodb.png": "7b65d5b46564c6242979bc51824839da",
"assets/assets/icons/mysql.png": "0f2b27eda8725b8f7a170aaaecc8f54b",
"assets/assets/icons/nodejs.png": "ffc4f7aa1875135774dea0acafb3f017",
"assets/assets/icons/openvpn.png": "58592ae1fad3e5b62f102d6ab245f11c",
"assets/assets/icons/pfsense.png": "d98a778a9a630f4622a97a2bd1e01e60",
"assets/assets/icons/php.png": "48dce16527ab4c99c7cef12e73f8aff0",
"assets/assets/icons/proxmox.png": "6a4c134fa73fc89f35cb0d42fcd03e7c",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/site-internet.png": "90266f3fe07b92f6a33e55788f338f93",
"assets/assets/icons/sql.png": "4837f626bcd5d4b772f4e0977da87cdd",
"assets/assets/icons/test.png": "aeb6b51005b39d18c05e2475da368079",
"assets/assets/icons/ubuntu.png": "9f12ef128a7d0cc679d25ab07e805b5b",
"assets/assets/icons/unity.png": "c8bae646622a8070d16cbf745b566ad3",
"assets/assets/icons/vbox.png": "d97b0a8612b7eca6d22dd9a91521cb73",
"assets/assets/icons/vscode.png": "07130826ff70609bcd86e5046a83da93",
"assets/assets/icons/windows.png": "ae66725105aea5a7cd135efc63123463",
"assets/assets/pp.png": "70ae8b3e530ad9a72931d862fb611ef9",
"assets/assets/pp_trans.png": "ee971239086cbc52154a0f41fa99b5f1",
"assets/assets/projects/Harsco_Audit_Vehicule.png": "21b9f7bb67e8c3708b603d2195724058",
"assets/assets/projects/Harsco_Audit_Vehicule_Trans.png": "4db90206c4ea88a338e304cbb104c12a",
"assets/assets/projects/harsco_manager.png": "45d287130b87137d9fe9ddfdbf1b0353",
"assets/assets/projects/harsco_manager_trans.png": "c9a99e5cc62ba5ffb11540771bd47fb5",
"assets/assets/projects/soldup.png": "ae769956b1933d3dd0d4eedfd55d91a8",
"assets/assets/projects/test.png": "aeb6b51005b39d18c05e2475da368079",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9a683bc454778a2549f1e88b478812bf",
"assets/NOTICES": "a52182959874685b3628b364c7e7b302",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "6a29a7a3ec6fa0a9b926c75adca05df1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2e750f23ac186b32a0de8c0eade72aad",
"icons/Icon-192.png": "4413c7939058474ef3a11ee1bcf80238",
"icons/Icon-512.png": "0bc05fcfb4027e10856ac886cb30fda3",
"index.html": "7a7a0ec1ed5bb577162d5ac9dc05936d",
"/": "7a7a0ec1ed5bb577162d5ac9dc05936d",
"main.dart.js": "8ab329ed7338d07985070591b4a14b44",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"three/earth.glb": "0b292143021ebf4d426e0c5e0369ba8e",
"three/earth.html": "6689966cf2c5b29549d0908ba65d4f80",
"three/jupiter.glb": "02602f56abfb4ef9da5d78da1039049a",
"three/jupiter.html": "346d8a283bfb226663f6096402f72086",
"three/jupiter_google.glb": "01eac9c0701ca421ef2f32b53db2029a",
"three/moon.glb": "266ffa0cc7feb964e677b7a7bf920f2c",
"three/moon_old.html": "3d216e646798348437e7ab7378ff60c8",
"three/neptune.glb": "7e6b0235418f72a50c99ba44309ededc",
"three/neptune.html": "36153b2dc40acbcf1d9111a2edfa3ce6",
"three/saturn.glb": "21c40c4413b5deb8b170ab07042c2f53",
"three/saturn.html": "8cef489326cc5f186a694274799d8b95",
"three/uranus.glb": "454b0833e929671f5b8cc8b1fdb36be9",
"three/uranus.html": "a06b3788f156888bf5a073368c6ba54d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
