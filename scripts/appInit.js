var loader = () => {
    try {
        setInterval(() => {
            var svgPicker = document.querySelector('svg');
            var loading = document.querySelector('.loading');
            var body = document.querySelector('body');
            var appinit = document.querySelector('section.appInit');
            var semesterSection = document.querySelector('#chooseSemester');
            body.style.backgroundColor = 'none';
            semesterSection.style.display = 'none';
            svgPicker.style.opacity = 0;
            svgPicker.style.display = 'none';
            loading.style.opacity = 0;
            appinit.style.display = 'block';

        }, 5000);
    } catch (err) {
        console.log(err);
    }

};

window.addEventListener('load', loader, false);

// This is the "Offline page" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("[PWA Builder] active service worker found, no need to register");
    } else {
        // Register the service worker
        navigator.serviceWorker
            .register("pwabuilder-sw.js", {
                scope: "./"
            })

        .then(function(reg) {
            console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
        });
    }
}