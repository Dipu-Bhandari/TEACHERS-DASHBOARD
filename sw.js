const CACHE_NAME = "dbs-teachers-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/styles.css",
  "/script.js"
];

// Install & cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Serve from cache first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
