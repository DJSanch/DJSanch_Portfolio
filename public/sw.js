// Remove a leftover service worker from an older app served on this origin.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))

    const windows = await self.clients.matchAll({ type: "window" })
    await self.registration.unregister()
    await Promise.all(windows.map((client) => client.navigate(client.url)))
  })())
})
