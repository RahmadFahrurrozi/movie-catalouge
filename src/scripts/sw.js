self.addEventListener('install', function (event) {
    console.log('installing service worker');
});

self.addEventListener('activate', (event) => {
    console.log('activating service worker');
})

self.addEventListener('fetch', (event) => {
    console.log('fetching');
    event.respondWith(fetch(event.request));
})
