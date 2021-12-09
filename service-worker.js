/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-d916c28';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./anna_karenina_001.html","./anna_karenina_002.html","./anna_karenina_003.html","./anna_karenina_004.html","./anna_karenina_005.html","./anna_karenina_006.html","./anna_karenina_007.html","./anna_karenina_008.html","./anna_karenina_009.html","./anna_karenina_010.html","./anna_karenina_011.html","./anna_karenina_012.html","./anna_karenina_013.html","./anna_karenina_014.html","./anna_karenina_015.html","./anna_karenina_016.html","./anna_karenina_017.html","./anna_karenina_018.html","./anna_karenina_019.html","./anna_karenina_020.html","./anna_karenina_021.html","./anna_karenina_022.html","./anna_karenina_023.html","./anna_karenina_024.html","./anna_karenina_025.html","./anna_karenina_026.html","./anna_karenina_027.html","./anna_karenina_028.html","./anna_karenina_029.html","./anna_karenina_030.html","./anna_karenina_031.html","./anna_karenina_032.html","./anna_karenina_033.html","./anna_karenina_034.html","./anna_karenina_035.html","./anna_karenina_036.html","./anna_karenina_037.html","./anna_karenina_038.html","./anna_karenina_039.html","./anna_karenina_040.html","./anna_karenina_041.html","./anna_karenina_042.html","./anna_karenina_043.html","./anna_karenina_044.html","./anna_karenina_045.html","./anna_karenina_046.html","./anna_karenina_047.html","./anna_karenina_048.html","./anna_karenina_049.html","./anna_karenina_050.html","./anna_karenina_051.html","./anna_karenina_052.html","./anna_karenina_053.html","./anna_karenina_054.html","./anna_karenina_055.html","./anna_karenina_056.html","./anna_karenina_057.html","./anna_karenina_058.html","./anna_karenina_059.html","./anna_karenina_060.html","./anna_karenina_061.html","./anna_karenina_062.html","./anna_karenina_063.html","./anna_karenina_064.html","./anna_karenina_065.html","./anna_karenina_066.html","./anna_karenina_067.html","./anna_karenina_068.html","./anna_karenina_069.html","./anna_karenina_070.html","./anna_karenina_071.html","./anna_karenina_072.html","./anna_karenina_073.html","./anna_karenina_074.html","./anna_karenina_075.html","./anna_karenina_076.html","./anna_karenina_077.html","./anna_karenina_078.html","./anna_karenina_079.html","./anna_karenina_080.html","./anna_karenina_081.html","./anna_karenina_082.html","./anna_karenina_083.html","./anna_karenina_084.html","./anna_karenina_085.html","./anna_karenina_086.html","./anna_karenina_087.html","./anna_karenina_088.html","./anna_karenina_089.html","./anna_karenina_090.html","./anna_karenina_091.html","./anna_karenina_092.html","./anna_karenina_093.html","./anna_karenina_094.html","./anna_karenina_095.html","./anna_karenina_096.html","./anna_karenina_097.html","./anna_karenina_098.html","./anna_karenina_099.html","./anna_karenina_100.html","./anna_karenina_101.html","./anna_karenina_102.html","./anna_karenina_103.html","./anna_karenina_104.html","./anna_karenina_105.html","./anna_karenina_106.html","./anna_karenina_107.html","./anna_karenina_108.html","./anna_karenina_109.html","./anna_karenina_110.html","./anna_karenina_111.html","./anna_karenina_112.html","./anna_karenina_113.html","./anna_karenina_114.html","./anna_karenina_115.html","./anna_karenina_116.html","./anna_karenina_117.html","./anna_karenina_118.html","./anna_karenina_119.html","./anna_karenina_120.html","./anna_karenina_121.html","./anna_karenina_122.html","./anna_karenina_123.html","./anna_karenina_124.html","./anna_karenina_125.html","./anna_karenina_126.html","./anna_karenina_127.html","./anna_karenina_128.html","./anna_karenina_129.html","./anna_karenina_130.html","./anna_karenina_131.html","./anna_karenina_132.html","./anna_karenina_133.html","./anna_karenina_134.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.png","./resources/image002_fmt.png","./resources/obalka_anna_kareninova_fmt.png","./resources/upoutavka_eknihy_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
