if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('servicce worker registered', reg))
        .catch((err) => console.log('Service woker not registered', err));
}