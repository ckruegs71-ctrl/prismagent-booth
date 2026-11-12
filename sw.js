// Keeps a copy of the booth page on the laptop after the first visit, so it still opens if the venue wifi drops.
// Bump VERSION whenever index.html changes so laptops pick up the new copy.
const VERSION = 'booth-v4';
const FILES = ['./', './index.html', './builds.html', './reel/brief.jpg', './reel/crew.jpg', './reel/pulse.jpg', './reel/vitals.jpg', './reel/wallet.jpg', './reel/roof.jpg', './reel/map.jpg', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

// network first, so an updated page shows up when online; the saved copy when offline
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const copy = r.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html')))
  );
});
