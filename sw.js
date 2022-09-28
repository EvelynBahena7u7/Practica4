self.addEventListener('install',(event)=>{
    console.log('sw: Instalado');
    
    const promiseCache= caches.open('cache-v1').then((cache)=>{
        return cache.addAll(
             [
                 '/',
                 './index.html',
                './pages/suma.html',
                './pages/resta.html',
                './pages/multi.html',
                './pages/divi.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'

             ]
         );
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
    



