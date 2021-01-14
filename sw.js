// install service weorker
self.addEventListener('install', evt => {
    console.log('service worker has benn installed');
});



//active service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activected');
});



// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});