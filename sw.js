self.addEventListener('install',(event)=>{
    console.log('sw: Instalado');
    
    const promiseCache= caches.open('cache-v1').then((cache)=>{
    
        cache.add('https://evelynbahena7u7.github.io/Practica4/pages/suma.html');
        cache.add('https://evelynbahena7u7.github.io/Practica4/pages/resta.html');
        cache.add('https://evelynbahena7u7.github.io/Practica4/pages/multi.html');
        cache.add('https://evelynbahena7u7.github.io/Practica4/pages/divi.html');
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
    



