self.addEventListener('install',(event)=>{
    console.log('sw: Instalado');
    
    const promiseCache= caches.open('cache-v1').then((cache)=>{
        cache.add('/');
        cache.add('/index.html');
        cache.add('/pages/suma.html');
        cache.add('/pages/resta.html');
        cache.add('/pages/multi.html');
        cache.add('/pages/divi.html');
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
    })
     event.waitUntil(promiseCache);
    
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            if(response){
                return response;
            }
            return fetch(event.request);
        })
    );
});
    



