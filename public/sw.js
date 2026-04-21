const CACHE = 'tf-roatan-v1';

const PRECACHE = [
  '/',
  '/about',
  '/blog',
  '/calculator',
  '/faq',
  '/guides',
  '/neighborhoods',
  '/new-developments',
  '/properties',
  '/resources',
  '/roatan-market',
  '/manifest.json',
  '/logo-white.webp',
  '/logo-blue.webp',
  '/kw-logo-white.png',
  '/hero-bg.webp',
  '/icon-192.png',
  '/icon-512.png',
];

// Install: precache key pages and assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate: delete any old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // HTML pages: network-first so content stays fresh, cache as fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // Images, fonts, CSS, JS: cache-first for speed
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script'
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(request, clone));
            return res;
          })
      )
    );
    return;
  }

  // Everything else: network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
