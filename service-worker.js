const CACHE_NAME = "interior-home-cache-v2";
const urlsToCache = [
  "/",
  "index.html",
  "about.html",
    "contact.html",
    "cart.html",
  "checkout.html",
  "thankyou.html",
  "blog.html",
  "services.html",
  "shop.html",
  "manifest.json",
  "css/style.css",
  "css/tiny-slider.css",
  "css/bootstrap.min.css",
  "js/bootstrap.bundle.min.js",
  "js/custom.js",
  "js/tiny-slider.js",
  "images/product-1.webp",
  "images/product-2.webp",
  "images/product-3.webp",
  "images/person_1.webp",
  "images/person_2.webp",
  "images/person_3.webp",
  "images/person_4.webp",
  "images/post-1.webp",
  "images/post-2.webp",
    "images/post-3.webp",
  "images/img-grid-1.webp",
  "images/img-grid-2.webp",
  "images/img-grid-3.webp",
    "images/couch.webp",
    "images/bag.svg",
    "images/cart.svg",
    "images/cross.svg",
    "images/dots-green.svg",
    "images/dots-light.svg",
    "images/dots-yellow.svg",
    "images/envelope-outline.svg",
    "images/return.svg",
    "images/sofa.webp",
    "images/support.svg",
    "images/truck.svg",
    "images/user.svg",
    "images/why-choose-us-img.webp",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[ServiceWorker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request).catch(() => {
          // Serve index.html for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }

          // Fallback message for other assets
          return new Response('Offline: Resource unavailable.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});


