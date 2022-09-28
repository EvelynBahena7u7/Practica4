if(navigator.serviceWorker){
    let url = window.location;
    if(url.toString().includes('localhost:8081')){
        navigator.serviceWorker.register('/sw.js');
    }
    navigator.serviceWorker.register('https://evelynbahena7u7.github.io/Practica4/sw.js');
}




