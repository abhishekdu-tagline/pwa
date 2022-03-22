let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/pwa/static/js/bundle.js",
        "/pwa/static/js/main.chunk.js",
        "/pwa/static/js/vendors~main.chunk.js",
        "/pwa/index.html",
        "/pwa/",
        "/pwa/users",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((results) => {
        if (results) {
          return results;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
