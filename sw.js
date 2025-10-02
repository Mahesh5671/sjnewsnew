// This is a basic service worker
self.addEventListener('fetch', (event) => {
  // For now, we are just using a network-first strategy.
  // This can be expanded to cache assets for offline use.
  event.respondWith(fetch(event.request));
});
